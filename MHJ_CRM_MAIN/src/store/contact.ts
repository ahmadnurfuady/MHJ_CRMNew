import { reactive, computed, ref, toRef } from "vue";

import { defineStore } from "pinia";
import Swal from "sweetalert2";

import { api } from "@/api";
import {
  extractList,
  isRecord,
  normalizeOptions,
  pickNumber,
  pickString,
  type Dict,
} from "@/api/response";
import { initInputField, initSelectField } from "@/core/data/common";
import { contactSidebarList } from "@/core/data/contacts";
import type {
  Contact,
  ContactSidebarList,
  ContactState,
  RumahSakitForm,
} from "@/types/contacts";
import type { ListParams, Pagination } from "@/types/api";
import type { Select } from "@/types/common";
import type { Hospital, HospitalPayload } from "@/types/hospital";
import { runApiAction } from "@/store/apiAction";
import { useHospitalStore } from "@/store/hospital";
import { validateForm } from "@/utils/validators/formValidators";

// ID dari backend diberi offset agar data Contact dan Rumah Sakit tidak saling bentrok.
const HOSPITAL_ID_OFFSET = 1_000_000;
const CONTACT_ID_OFFSET = 2_000_000;
const CONTACT_ENDPOINT = "contact";
const DEFAULT_CONTACT_STATUS = "1";

export interface ContactCrudPayload {
  company_id: number | null;
  first_name: string;
  last_name: string;
  job_title: string | null;
  email: string | null;
  /** API memvalidasi string; SQL Server mengonversinya ke parameter INT pada SP. */
  status: string | null;
  telephone_1: string;
  telephone_2: string | null;
  address: string | null;
  /** Nama key mengikuti ContactController, lalu diteruskan ke @kd_kelurahan pada SP. */
  kelurahan: string | null;
  /** Nama key mengikuti ContactController, lalu diteruskan ke @source_id pada SP. */
  source: number | null;
  created_by: number | null;
}

function nullableText(value: unknown): string | null {
  const text = textValue(value).trim();
  return text || null;
}

function nullableId(value: unknown): number | null {
  if (value === undefined || value === null || value === "") return null;
  const id = Number(value);
  return Number.isSafeInteger(id) && id >= 0 ? id : null;
}

function findStoredProcedureError(payload: unknown, depth = 0): string | null {
  if (depth > 5) return null;
  if (Array.isArray(payload)) {
    for (const item of payload) {
      const message = findStoredProcedureError(item, depth + 1);
      if (message) return message;
    }
    return null;
  }
  if (!isRecord(payload)) return null;

  const message = pickString(payload, "ErrorMessage", "errorMessage");
  if (message) return message;

  for (const value of Object.values(payload)) {
    const nestedMessage = findStoredProcedureError(value, depth + 1);
    if (nestedMessage) return nestedMessage;
  }
  return null;
}

function assertStoredProcedureSucceeded(payload: unknown) {
  const message = findStoredProcedureError(payload);
  if (message) throw new Error(message);
}

/** Menemukan satu row contact pada response detail yang mungkin dibungkus data/contact. */
function findContactRecord(payload: unknown, depth = 0): Dict | null {
  if (depth > 4) return null;

  if (Array.isArray(payload)) {
    for (const item of payload) {
      const found = findContactRecord(item, depth + 1);
      if (found) return found;
    }
    return null;
  }

  if (!isRecord(payload)) return null;

  const contactFields = ["id", "ID", "first_name", "First Name", "email"];
  if (contactFields.some((field) => field in payload)) return payload;

  for (const key of ["contact", "contacts", "data", "item"]) {
    const found = findContactRecord(payload[key], depth + 1);
    if (found) return found;
  }

  return null;
}

function textValue(value: unknown): string {
  return value === undefined || value === null ? "" : String(value);
}

function notifyError(message: string) {
  Swal.fire({
    icon: "error",
    text: message,
    confirmButtonColor: "var(--theme-default)",
  });
}

/** Rumah Sakit dari endpoint Company ditampilkan sebagai Contact agar UI lama tetap dipakai. */
function hospitalToContact(hospital: Hospital): Contact {
  return {
    id: HOSPITAL_ID_OFFSET + hospital.id,
    origin: "hospital",
    remoteId: hospital.id,
    firstName: hospital.name,
    lastName: "",
    profile: "user/user.png",
    gender: "-",
    dob: "-",
    personality: "-",
    city: hospital.city || "-",
    contactNumber: hospital.phone,
    email: hospital.email,
    website: hospital.website,
    interest: "-",
    // Rumah Sakit tampil di tab Personal (tab default), sama seperti data Rumah Sakit sebelumnya.
    category: "personal",
    contactType: "-",
    phoneNumbers: hospital.phone ? [hospital.phone] : [],
    owner: hospital.owner,
    address: hospital.address,
    country: hospital.country,
    province: hospital.province,
    posCode: hospital.posCode,
    kdKelurahan: hospital.kdKelurahan,
    industry: hospital.industry,
    aktif: hospital.aktif,
    keterangan: hospital.description,
    hospitalClass: hospital.hospitalClass,
    hospitalType: hospital.hospitalType,
    totalContacts: hospital.totalContacts,
    totalProjects: hospital.totalProjects,
    totalInstalledEquipment: hospital.totalInstalledEquipment,
    lastVisitAt: hospital.lastVisitAt,
  };
}

/** Kontak personal dari endpoint Contact. Nama field mengikuti kolom yang umum dipakai form. */
function normalizeApiContact(raw: Dict): Contact {
  const remoteId = pickNumber(raw, "id", "ID");
  // Kolom tabel contacts: first_name, last_name, job_title, email, telephone_1, telephone_2,
  // address, province, city. Key berspasi dari response lama tetap dicoba sebagai cadangan.
  const phone1 = pickString(raw, "telephone_1", "Telephone", "contactNumber", "phone");
  const phone2 = pickString(raw, "telephone_2");
  return {
    id: CONTACT_ID_OFFSET + remoteId,
    origin: "api",
    remoteId,
    firstName: pickString(raw, "first_name", "First Name", "firstName"),
    lastName: pickString(raw, "last_name", "Last Name", "lastName"),
    profile: "user/user.png",
    gender: pickString(raw, "gender") || "-",
    dob: pickString(raw, "dob", "birthday") || "-",
    personality: "-",
    city: pickString(raw, "city", "City") || "-",
    contactNumber: phone1,
    email: pickString(raw, "email", "Email"),
    website: pickString(raw, "website", "Website"),
    interest: "-",
    category: pickString(raw, "category") || "personal",
    contactType: pickString(raw, "contactType", "contact_type") || "-",
    jobTitle: pickString(raw, "job_title", "jobTitle"),
    companyId: pickString(raw, "company_id", "Company ID"),
    sourceId: pickString(raw, "source_id", "Source ID"),
    status: pickString(raw, "status_name", "Status Name", "status", "Status"),
    statusId: nullableId(raw.status) ?? undefined,
    createdById: nullableId(raw.created_by) ?? undefined,
    telephone1: phone1,
    telephone2: phone2,
    owner: pickString(raw, "owner"),
    phoneNumbers: [phone1, phone2].filter(Boolean),
    mapAddress: pickString(raw, "mapAddress", "map_address"),
    address: pickString(raw, "address", "Address"),
    country: pickString(raw, "country", "Country"),
    province: pickString(raw, "province", "Province"),
    posCode: pickString(raw, "pos_code", "Pos Code"),
    kdKelurahan: pickString(raw, "kd_kelurahan", "Kd Kelurahan"),
    aktif: pickNumber(raw, "aktif", "Aktif"),
    source: pickString(raw, "sourcename", "source_name", "source"),
    company: pickString(raw, "company_name", "Company Name", "company"),
    project: pickString(raw, "projects_name", "project_name", "Project Name", "project"),
    lastActivity: pickString(
      raw,
      "last_activity",
      "last_activity_name",
      "latest_activity",
      "activity_name",
      "activity",
    ),
    lastContactedAt: pickString(
      raw,
      "last_contacted_at",
      "last_contact_at",
      "last_activity_at",
      "last_visit_at",
      "contacted_at",
      "updated_at",
    ),
  };
}

export const useContact = defineStore("contact", () => {
  const hospitalStore = useHospitalStore();

  const createContactForm = () => ({
    firstName: initInputField(),
    lastName: initInputField(),
    jobTitle: initInputField(),
    owner: initSelectField(),
    status: initSelectField(),
    email: initInputField(),
    contactNumber: initInputField(),
    contactType: initSelectField(),
    phoneNumbers: [initInputField()],
    mapAddress: initInputField(),
    address: initInputField(),
    kdKelurahan: initInputField(),
    province: initSelectField(),
    city: initSelectField(),
    source: initSelectField(),
    gender: initSelectField(),
    company: initSelectField(),
    project: initSelectField(),
  });

  const createRumahSakitForm = (): RumahSakitForm => ({
    name: initInputField(),
    phoneNumbers: [initInputField()],
    mapAddress: initInputField(),
    address: initInputField(),
    province: initSelectField(),
    city: initSelectField(),
    jenis: initInputField(),
    tipe: initInputField(),
    penyelenggara: initInputField(),
    tipeMarketingGo500: initInputField(),
    keterangan: initInputField(),
    sirs: initInputField(),
  });

  const contactState = reactive<ContactState>({
    tabList: contactSidebarList,
    activeTab: contactSidebarList[0]?.value || "",
    currentTab: contactSidebarList[0] as ContactSidebarList,
    activeContact: undefined as Contact | undefined,
    // Daftar kontak diisi dari endpoint, bukan dari data contoh template.
    contactList: [],
    isEditContact: false,
    historyVisible: false,
    openPrintContactModal: false,
    openAddContactModal: false,
    openCategoryModal: false,
    formSubmitted: false,

    contactForm: createContactForm(),
    rumahSakitForm: createRumahSakitForm(),
  });

  // State API Contact (endpoint /api/contact).
  const contactApi = reactive({
    items: [] as Contact[],
    selectedItem: undefined as Contact | undefined,
    companies: [] as Select[],
    statuses: [] as Select[],
    sources: [] as Select[],
    loading: false,
    detailLoading: false,
    submitting: false,
    error: null as string | null,
    search: "",
    pagination: { page: 1, perPage: 10, total: 0, lastPage: 1 } as Pagination,
  });
  const contactLoading = toRef(contactApi, "loading");
  const contactDetailLoading = toRef(contactApi, "detailLoading");
  const contactSubmitting = toRef(contactApi, "submitting");
  const contactError = toRef(contactApi, "error");
  const hospitalSearch = ref("");

  function initStore() {
    handleActiveTab(contactState.tabList[0] as ContactSidebarList);
    void loadRemoteContacts();
  }

  function handleActiveTab(tab: ContactSidebarList) {
    if (tab.value) {
      contactState.activeTab = tab.value;
    }

    contactState.currentTab = tab;

    const currentTabContact = filteredContact.value;

    if (currentTabContact) {
      contactState.activeContact = currentTabContact[0];
    }
  }

  // Halaman Contacts menampilkan kontak (bukan company); halaman Rumah Sakit hanya company.
  const scope = ref<"contact" | "hospital">("contact");

  /** Dipanggil halaman saat dibuka agar daftar yang tampil sesuai halamannya. */
  function setScope(next: "contact" | "hospital") {
    scope.value = next;
    handleActiveTab(contactState.currentTab);
  }

  const filteredContact = computed(() => {
    const contacts = contactState.contactList.filter((contact) =>
      scope.value === "hospital"
        ? contact.origin === "hospital"
        : contact.origin !== "hospital",
    );

    // Halaman Kontak tidak lagi memakai sidebar kategori, sehingga semua kontak ditampilkan.
    if (scope.value === "contact") return contacts;

    if (contactState.currentTab.value && contactState.currentTab.value) {
      const value = contactState.currentTab.value;
      return contacts.filter((contact) => contact.category == value);
    }

    return [];
  });

  /**
   * Menggabungkan kontak lokal, Rumah Sakit dari store Hospital, dan Contact dari API
   * ke daftar yang dibaca UI. Kontak aktif dipertahankan bila masih ada.
   */
  function syncRemoteContacts() {
    const localContacts = contactState.contactList.filter((contact) => !contact.origin);
    const hospitalContacts = hospitalStore.items.map(hospitalToContact);
    contactState.contactList = [...localContacts, ...hospitalContacts, ...contactApi.items];

    const current = contactState.activeContact;
    const stillExists = current
      ? contactState.contactList.find((contact) => contact.id === current.id)
      : undefined;

    if (stillExists) {
      contactState.activeContact = stillExists;
    } else if (filteredContact.value.length) {
      contactState.activeContact = filteredContact.value[0];
    }
  }

  async function loadRemoteContacts() {
    const results = await Promise.allSettled([
      hospitalStore.fetchHospitals(),
      fetchRemoteContacts(),
    ]);
    syncRemoteContacts();

    if (results.some((result) => result.status === "rejected")) {
      notifyError(hospitalStore.error ?? contactError.value ?? "Gagal memuat data.");
    }

    if (scope.value === "hospital" && results[0]?.status === "fulfilled") {
      const firstHospital = filteredContact.value[0];
      if (firstHospital) await hydrateHospitalContact(firstHospital);
    }

    if (scope.value === "contact" && results[1]?.status === "fulfilled") {
      const firstContact = filteredContact.value[0];
      if (firstContact) await hydrateRemoteContact(firstContact);
    }
  }

  /** Memuat halaman company tertentu lalu menyelaraskannya ke daftar Rumah Sakit. */
  async function changeHospitalPage(page: number) {
    const targetPage = Math.max(1, page);
    if (
      hospitalStore.pagination.total > 0 &&
      targetPage > hospitalStore.pagination.lastPage
    )
      return;
    if (targetPage === hospitalStore.pagination.page && hospitalStore.items.length) return;

    try {
      await hospitalStore.fetchHospitals({
        page: targetPage,
        per_page: hospitalStore.pagination.perPage,
        search: hospitalSearch.value || undefined,
      });
      contactState.activeContact = undefined;
      syncRemoteContacts();

      const firstHospital = filteredContact.value[0];
      if (firstHospital) await hydrateHospitalContact(firstHospital);
    } catch {
      notifyError(hospitalStore.error ?? "Gagal memuat halaman Rumah Sakit.");
    }
  }

  /** Memuat halaman contact tertentu dan memilih contact pertama pada halaman tersebut. */
  async function changeContactPage(page: number) {
    const targetPage = Math.max(1, page);
    const currentPageIsFull =
      contactApi.items.length >= contactApi.pagination.perPage;
    if (
      contactApi.pagination.total > 0 &&
      targetPage > contactApi.pagination.lastPage &&
      !currentPageIsFull
    )
      return;
    if (targetPage === contactApi.pagination.page && contactApi.items.length) return;

    try {
      await fetchRemoteContacts({
        page: targetPage,
        per_page: contactApi.pagination.perPage,
        search: contactApi.search || undefined,
      });
      contactState.activeContact = undefined;
      syncRemoteContacts();

      const firstContact = filteredContact.value[0];
      if (firstContact) await hydrateRemoteContact(firstContact);
    } catch {
      notifyError(contactError.value ?? "Gagal memuat halaman kontak.");
    }
  }

  /** Mencari Rumah Sakit melalui endpoint company dan kembali ke halaman pertama. */
  async function searchHospitals(query: string) {
    hospitalSearch.value = query.trim();

    try {
      await hospitalStore.fetchHospitals({
        page: 1,
        per_page: hospitalStore.pagination.perPage,
        search: hospitalSearch.value || undefined,
      });
      contactState.activeContact = undefined;
      syncRemoteContacts();
    } catch {
      notifyError(hospitalStore.error ?? "Gagal mencari Rumah Sakit.");
    }
  }

  /** Mencari kontak melalui endpoint list dan kembali ke halaman pertama. */
  async function searchContacts(query: string) {
    contactApi.search = query.trim();

    try {
      await fetchRemoteContacts({
        page: 1,
        per_page: contactApi.pagination.perPage,
        search: contactApi.search || undefined,
      });
      contactState.activeContact = undefined;
      syncRemoteContacts();
    } catch {
      notifyError(contactError.value ?? "Gagal mencari kontak.");
    }
  }

  /** GET /api/contact. */
  function fetchRemoteContacts(params: ListParams = {}) {
    return runApiAction({
      flag: contactLoading,
      error: contactError,
      fallbackMessage: "Gagal memuat data kontak.",
      task: async () => {
        const response = await api.getbydata(CONTACT_ENDPOINT, { ...params });
        const { items, meta } = extractList(response.data, ["contacts"]);
        contactApi.items = items.filter(isRecord).map(normalizeApiContact);
        const page = meta?.page ?? params.page ?? 1;
        const perPage = meta?.perPage ?? params.per_page ?? contactApi.pagination.perPage;
        const knownTotal = meta?.total;
        const visitedTotal = (page - 1) * perPage + contactApi.items.length;
        const totalLastPage =
          knownTotal !== undefined ? Math.max(1, Math.ceil(knownTotal / perPage)) : 0;
        const inferredLastPage =
          contactApi.items.length >= perPage ? page + 1 : page;

        contactApi.pagination.page = page;
        contactApi.pagination.perPage = perPage;
        contactApi.pagination.total =
          knownTotal ?? Math.max(contactApi.pagination.total, visitedTotal);
        contactApi.pagination.lastPage =
          Math.max(page, meta?.lastPage ?? 0, totalLastPage, inferredLastPage);
        return contactApi.items;
      },
    });
  }

  /** GET /api/contact/fetchcontactbyid?id=<id>. */
  function fetchRemoteContactById(remoteId: number) {
    return runApiAction({
      flag: contactDetailLoading,
      error: contactError,
      fallbackMessage: "Gagal memuat detail kontak.",
      task: async () => {
        const response = await api.getbydata(`${CONTACT_ENDPOINT}/fetchcontactbyid`, {
          id: remoteId,
        });
        const raw = findContactRecord(response.data);
        if (!raw) return undefined;

        const detailedContact = normalizeApiContact(raw);

        // Detail contact kadang hanya membawa company_id. Ambil nama company untuk UI.
        const companyId = Number(detailedContact.companyId);
        if (!detailedContact.company && Number.isFinite(companyId) && companyId > 0) {
          try {
            const company = await hospitalStore.fetchHospitalById(companyId);
            if (company) detailedContact.company = company.name;
          } catch {
            // ID company tetap ditampilkan bila detail company tidak dapat dimuat.
          }
        }

        contactApi.selectedItem = detailedContact;
        const existingIndex = contactApi.items.findIndex((item) => item.remoteId === remoteId);
        if (existingIndex >= 0) {
          contactApi.items = contactApi.items.map((item) =>
            item.remoteId === remoteId ? detailedContact : item,
          );
        } else {
          contactApi.items = [detailedContact, ...contactApi.items];
        }
        syncRemoteContacts();
        return detailedContact;
      },
    });
  }

  /** GET /api/contact/company, data pendukung pilihan perusahaan. */
  function fetchContactCompanies() {
    return runApiAction({
      flag: contactLoading,
      error: contactError,
      fallbackMessage: "Gagal memuat daftar perusahaan.",
      task: async () => {
        const response = await api.get(`${CONTACT_ENDPOINT}/company`);
        contactApi.companies = normalizeOptions(response.data, ["companies"]);
        return contactApi.companies;
      },
    });
  }

  /** GET /api/contact/status, lookup status khusus Contact (table_code CT). */
  function fetchContactStatuses() {
    return runApiAction({
      flag: contactLoading,
      error: contactError,
      fallbackMessage: "Gagal memuat status kontak.",
      task: async () => {
        const response = await api.get(`${CONTACT_ENDPOINT}/status`);
        contactApi.statuses = normalizeOptions(response.data, ["statuses", "status"]);
        return contactApi.statuses;
      },
    });
  }

  /** GET /api/contact/sources, lookup source khusus Contact (table_code CT). */
  function fetchContactSources() {
    return runApiAction({
      flag: contactLoading,
      error: contactError,
      fallbackMessage: "Gagal memuat sumber kontak.",
      task: async () => {
        const response = await api.get(`${CONTACT_ENDPOINT}/sources`);
        contactApi.sources = normalizeOptions(response.data, ["sources", "source"]);
        return contactApi.sources;
      },
    });
  }

  /**
   * POST /api/contact/input dengan choice "i".
   * Mengembalikan kontak yang baru dibuat, atau undefined jika backend tidak mengembalikan datanya.
   */
  function createRemoteContact(payload: ContactCrudPayload) {
    return runApiAction({
      flag: contactSubmitting,
      error: contactError,
      fallbackMessage: "Gagal menyimpan kontak.",
      task: async () => {
        const response = await api.post(`${CONTACT_ENDPOINT}/input`, { choice: "i", ...payload });
        assertStoredProcedureSucceeded(response.data);
        const raw = findContactRecord(response.data);
        const createdId = raw ? pickNumber(raw, "id", "ID") : 0;

        if (createdId > 0) {
          try {
            return await fetchRemoteContactById(createdId);
          } catch {
            await fetchRemoteContacts();
            return contactApi.items.find((item) => item.remoteId === createdId);
          }
        }

        await fetchRemoteContacts();
        syncRemoteContacts();
        return undefined;
      },
    });
  }

  /** POST /api/contact/input dengan choice "u". */
  function updateRemoteContact(remoteId: number, payload: ContactCrudPayload) {
    return runApiAction({
      flag: contactSubmitting,
      error: contactError,
      fallbackMessage: "Gagal memperbarui kontak.",
      task: async () => {
        const response = await api.post(`${CONTACT_ENDPOINT}/input`, {
          choice: "u",
          id: remoteId,
          ...payload,
        });
        assertStoredProcedureSucceeded(response.data);

        try {
          await fetchRemoteContactById(remoteId);
        } catch {
          await fetchRemoteContacts();
        }
        syncRemoteContacts();
      },
    });
  }

  /**
   * POST /api/contact/input dengan choice "d".
   * Controller backend membaca seluruh key form sebelum memanggil SP, sehingga payload delete
   * tetap harus membawa semua parameter walaupun cabang delete pada SP hanya memakai id.
   */
  function removeRemoteContact(remoteId: number, source?: Contact) {
    return runApiAction({
      flag: contactSubmitting,
      error: contactError,
      fallbackMessage: "Gagal menghapus kontak.",
      task: async () => {
        const contact =
          source ?? contactApi.items.find((item) => item.remoteId === remoteId);
        const payload: ContactCrudPayload = {
          company_id: nullableId(contact?.companyId),
          first_name: contact?.firstName || "",
          last_name: contact?.lastName || "",
          job_title: nullableText(contact?.jobTitle),
          email: nullableText(contact?.email),
          status: String(contact?.statusId ?? DEFAULT_CONTACT_STATUS),
          telephone_1: contact?.telephone1 || contact?.contactNumber || "",
          telephone_2: nullableText(contact?.telephone2),
          address: nullableText(contact?.address),
          kelurahan: nullableText(contact?.kdKelurahan),
          source: nullableId(contact?.sourceId),
          created_by: contact?.createdById ?? null,
        };
        const response = await api.post(`${CONTACT_ENDPOINT}/input`, {
          choice: "d",
          id: remoteId,
          ...payload,
        });
        assertStoredProcedureSucceeded(response.data);
        contactApi.items = contactApi.items.filter((item) => item.remoteId !== remoteId);
        syncRemoteContacts();
      },
    });
  }

  async function hydrateHospitalContact(contact: Contact) {
    if (contact.origin !== "hospital" || contact.remoteId === undefined) return;

    try {
      const hospital = await hospitalStore.fetchHospitalById(contact.remoteId);
      if (!hospital) return;

      const detailedContact = hospitalToContact(hospital);
      contactState.contactList = contactState.contactList.map((item) =>
        item.id === contact.id ? detailedContact : item,
      );
      contactState.activeContact = detailedContact;
    } catch {
      notifyError(hospitalStore.error ?? "Gagal memuat detail Rumah Sakit.");
    }
  }

  async function hydrateRemoteContact(contact: Contact) {
    if (contact.origin !== "api" || contact.remoteId === undefined) return;

    try {
      const detailedContact = await fetchRemoteContactById(contact.remoteId);
      if (
        detailedContact &&
        contactState.activeContact?.remoteId === contact.remoteId &&
        contactState.activeContact.origin === "api"
      ) {
        contactState.activeContact = detailedContact;
      }
    } catch {
      notifyError(contactError.value ?? "Gagal memuat detail kontak.");
    }
  }

  function handleContact(contact: Contact) {
    contactState.activeContact = contact;
    void hydrateHospitalContact(contact);
    void hydrateRemoteContact(contact);
  }

  function editContact() {
    contactState.isEditContact = true;
  }

  /** Menghapus kontak aktif. Data dari backend dihapus lewat API, data lokal dihapus dari daftar. */
  function deleteContact() {
    const target = contactState.activeContact;

    if (target?.origin && target.remoteId !== undefined) {
      Swal.fire({
        title: "Are you sure?",
        text: "This data will be deleted from the database.",
        icon: "warning",
        confirmButtonText: "Yes, delete it!",
        showCancelButton: true,
        cancelButtonText: "No, keep it",
        cancelButtonColor: "#898989",
      }).then(async (result) => {
        if (!result.isConfirmed || target.remoteId === undefined) return;

        try {
          if (target.origin === "hospital") {
            await hospitalStore.deleteHospital(target.remoteId);
          } else {
            await removeRemoteContact(target.remoteId, target);
          }
          syncRemoteContacts();
        } catch {
          notifyError(
            (target.origin === "hospital" ? hospitalStore.error : contactError.value) ??
              "Gagal menghapus data.",
          );
        }
      });
      return;
    }

    deleteLocalContact();
  }

  function deleteLocalContact() {
    Swal.fire({
      title: "Are you sure?",
      text: "This contact will be deleted from your personal contacts and from the chat list too.",
      icon: "warning",
      confirmButtonText: "Yes, delete it!",
      showCancelButton: true,
      cancelButtonText: "No, keep it",
      cancelButtonColor: "#898989",
    }).then((result) => {
      if (result.isConfirmed) {
        const deletedIndex = filteredContact.value?.findIndex(
          (contact) =>
            contact.id ===
            (contactState.activeContact ? contactState.activeContact.id : 1),
        );

        contactState.contactList = contactState.contactList.filter(
          (contact) =>
            contact.id !==
            (contactState.activeContact ? contactState.activeContact.id : 1),
        );

        const updatedContacts = filteredContact.value;

        if (updatedContacts && updatedContacts.length > 0) {
          if (deletedIndex && deletedIndex >= updatedContacts.length) {
            contactState.activeContact = updatedContacts[0];
          } else {
            if (deletedIndex) {
              contactState.activeContact = updatedContacts[deletedIndex];
            } else {
              contactState.activeContact = updatedContacts[0];
            }
          }
        }
      }
    });
  }

  function showHistory() {
    contactState.historyVisible = true;
  }

  function printContact() {
    contactState.openPrintContactModal = true;
  }

  function openContactModal() {
    contactState.openAddContactModal = true;
  }

  async function saveContact() {
    contactState.formSubmitted = true;

    const { phoneNumbers, ...formFields } = contactState.contactForm;
    const optionalFields = [
      "jobTitle",
      "owner",
      "contactNumber",
      "contactType",
      "mapAddress",
      "address",
      "kdKelurahan",
      "province",
      "city",
      "source",
      "gender",
      "company",
      "project",
    ];
    const validation = validateForm(formFields, optionalFields);
    const normalizedPhoneNumbers = phoneNumbers
      .map((phone) => phone.data.trim())
      .filter(Boolean);
    const hasPhoneNumber = normalizedPhoneNumbers.length > 0;

    phoneNumbers.forEach((phone, index) => {
      phone.errorMessage =
        !hasPhoneNumber && index === 0 ? "Nomor telepon wajib diisi." : "";
    });

    if (!validation.isValid || !hasPhoneNumber) return;

    const formData = validation.formData;
    try {
      // Payload mengikuti parameter dbo.sp_contacts_crud secara eksplisit.
      const payload: ContactCrudPayload = {
        company_id: nullableId(formData.company),
        first_name: textValue(formData.firstName),
        last_name: textValue(formData.lastName),
        job_title: nullableText(formData.jobTitle),
        email: nullableText(formData.email),
        // Endpoint Contact mengharuskan status berupa integer; kontak baru aktif secara default.
        status: textValue(formData.status) || DEFAULT_CONTACT_STATUS,
        telephone_1: normalizedPhoneNumbers[0] ?? "",
        telephone_2: normalizedPhoneNumbers[1] ?? null,
        address: nullableText(formData.address),
        kelurahan: nullableText(formData.kdKelurahan),
        source: nullableId(formData.source),
        created_by: nullableId(formData.owner),
      };
      const created = await createRemoteContact(payload);

      contactState.openAddContactModal = false;
      contactState.contactForm = createContactForm();
      contactState.formSubmitted = false;
      return created;
    } catch {
      notifyError(contactError.value ?? "Gagal menyimpan kontak.");
      return undefined;
    }
  }

  async function saveRumahSakit() {
    contactState.formSubmitted = true;

    const { phoneNumbers, ...formFields } = contactState.rumahSakitForm;
    const optionalFields = [
      "mapAddress",
      "address",
      "province",
      "city",
      "jenis",
      "tipe",
      "penyelenggara",
      "tipeMarketingGo500",
      "keterangan",
      "sirs",
    ];
    const validation = validateForm(formFields, optionalFields);
    const normalizedPhoneNumbers = phoneNumbers
      .map((phone) => phone.data.trim())
      .filter(Boolean);
    const hasPhoneNumber = normalizedPhoneNumbers.length > 0;

    phoneNumbers.forEach((phone, index) => {
      phone.errorMessage =
        !hasPhoneNumber && index === 0 ? "Nomor telepon wajib diisi." : "";
    });

    if (!validation.isValid || !hasPhoneNumber) return;

    const formData = validation.formData;
    // Kolom tabel companies: company_name, telephone, address, province, city, description.
    // Nomor telepon yang dikirim hanya satu (kolom telephone tunggal).
    // Field jenis, tipe, penyelenggara, tipeMarketingGo500, sirs, dan mapAddress belum
    // ada kolomnya di tabel companies yang terkonfirmasi, sehingga belum dikirim.
    const payload: HospitalPayload = {
      company_name: textValue(formData.name),
      telephone: normalizedPhoneNumbers[0] ?? "",
      address: textValue(formData.address),
      province: textValue(formData.province),
      city: textValue(formData.city),
      description: textValue(formData.keterangan),
    };

    try {
      const created = await hospitalStore.createHospital(payload);
      syncRemoteContacts();

      if (created) {
        const createdContact = contactState.contactList.find(
          (contact) => contact.id === HOSPITAL_ID_OFFSET + created.id,
        );
        if (createdContact) contactState.activeContact = createdContact;
      }
      closeRumahSakitModal();
    } catch {
      notifyError(hospitalStore.error ?? "Gagal menyimpan Rumah Sakit.");
    }
  }

  function closeRumahSakitModal() {
    contactState.openAddContactModal = false;
    contactState.formSubmitted = false;
    contactState.rumahSakitForm = createRumahSakitForm();
  }

  return {
    contactState,
    contactApi,

    initStore,
    setScope,
    handleActiveTab,
    changeHospitalPage,
    changeContactPage,
    searchHospitals,
    searchContacts,
    filteredContact,
    handleContact,
    editContact,
    deleteContact,
    showHistory,
    printContact,
    openContactModal,
    saveContact,
    saveRumahSakit,
    closeRumahSakitModal,

    fetchRemoteContacts,
    fetchRemoteContactById,
    fetchContactCompanies,
    fetchContactStatuses,
    fetchContactSources,
    createRemoteContact,
    updateRemoteContact,
    removeRemoteContact,
  };
});
