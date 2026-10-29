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
import { MAX_PHONE_NUMBERS } from "@/composable/usePhoneNumberList";
import {
  splitPhoneNumbers,
} from "@/utils/indonesianPhone";
import { validateForm } from "@/utils/validators/formValidators";
import { getUserErrorMessage } from "@/utils/errorParser";
import { showSaveSuccess } from "@/utils/feedback";

// ID dari backend diberi offset agar data Contact dan Rumah Sakit tidak saling bentrok.
const HOSPITAL_ID_OFFSET = 1_000_000;
const CONTACT_ID_OFFSET = 2_000_000;
const CONTACT_ENDPOINT = "contact";
const CONTACT_LIST_FETCH_LIMIT = 1000;
const HOSPITAL_LIST_FETCH_LIMIT = 1000;
const DEFAULT_CONTACT_STATUS = "1";
export const INDONESIA_COUNTRY = "Indonesia";

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
  country: string | null;
  province: string | null;
  city: string | null;
  pos_code: string | null;
  /** Nama key mengikuti ContactController, lalu diteruskan ke @kd_kelurahan pada SP. */
  kelurahan: string | null;
  gender: string | null;
  project_name: string | null;
  project_id: number | null;
  /** Seluruh Faskes terpilih, disimpan controller ke tabel contact_company. */
  company_ids?: number[];
  /** Seluruh Peluang terpilih, disimpan controller ke tabel contact_project. */
  project_ids?: number[];
  latitude: number | null;
  longitude: number | null;
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

function nullableNumber(value: unknown): number | null {
  if (value === undefined || value === null || value === "") return null;
  const number = Number(value);
  return Number.isFinite(number) ? number : null;
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

/** Daftar ID dari kolom CSV / array (mis. company_ids "1,2"); undefined bila key tidak ada di response. */
function pickIdList(raw: Dict, key: string): string[] | undefined {
  if (!(key in raw) || raw[key] === null) return undefined;
  return pickString(raw, key)
    .split(",")
    .map((id) => id.trim())
    .filter((id) => /^\d+$/.test(id) && Number(id) > 0);
}

/**
 * Daftar nama relasi dari endpoint detail. Backend mengirimnya sebagai array
 * string (company_names) sekaligus array objek (companies: [{ id, name }]),
 * keduanya urut sama dengan company_ids.
 */
function pickNameList(raw: Dict, ...keys: string[]): string[] | undefined {
  for (const key of keys) {
    const value = raw[key];
    if (!Array.isArray(value)) continue;

    const names = value
      .map((item) =>
        isRecord(item)
          ? pickString(item, "name", "company_name", "projects_name", "project_name", "label")
          : textValue(item),
      )
      .map((name) => name.trim())
      .filter(Boolean);
    if (names.length) return names;
  }
  return undefined;
}

/**
 * Daftar peluang lengkap dari response detail kontak. Backend mengirim array
 * objek: [{ id, name, company_name, stage_name, amount_value }].
 */
function pickContactProjects(raw: Dict, key: string): Contact["projects"] {
  const value = raw[key];
  if (!Array.isArray(value)) return undefined;

  const projects = value
    .map((item) => {
      if (!isRecord(item)) return undefined;
      const id = pickString(item, "id", "project_id");
      const name = pickString(item, "name", "project_name", "projects_name");
      if (!id || !name) return undefined;
      return {
        id,
        name,
        companyName: pickString(item, "company_name") || undefined,
        stageName: pickString(item, "stage_name", "stage") || undefined,
        amountValue: nullableNumber(pickString(item, "amount_value", "value")) ?? undefined,
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return projects;
}

/**
 * Daftar faskes lengkap dari response detail kontak: [{ id, name, address }].
 */
function pickContactCompanies(raw: Dict, key: string): Contact["companies"] {
  const value = raw[key];
  if (!Array.isArray(value)) return undefined;

  const companies = value
    .map((item) => {
      if (!isRecord(item)) return undefined;
      const id = pickString(item, "id", "company_id");
      const name = pickString(item, "name", "company_name");
      if (!id || !name) return undefined;
      return {
        id,
        name,
        address: pickString(item, "address") || undefined,
      };
    })
    .filter((item): item is NonNullable<typeof item> => Boolean(item));

  return companies;
}

/** Pertahankan field terbaru ketika endpoint detail belum mengembalikan kolom tambahan. */
function applySavedContactPayload(contact: Contact, payload: ContactCrudPayload) {
  contact.createdById = payload.created_by ?? contact.createdById;
  if (payload.source !== null) contact.sourceId = String(payload.source);
  if (payload.gender) contact.gender = payload.gender;
  if (payload.country) contact.country = payload.country;
  if (payload.province) contact.province = payload.province;
  if (payload.city) contact.city = payload.city;
  if (payload.project_name) contact.project = payload.project_name;
  if (payload.project_id !== null) contact.projectId = String(payload.project_id);
  if (payload.company_ids) contact.companyIds = payload.company_ids.map(String);
  if (payload.project_ids) contact.projectIds = payload.project_ids.map(String);
  if (payload.latitude !== null) contact.latitude = payload.latitude;
  if (payload.longitude !== null) contact.longitude = payload.longitude;
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

/**
 * Kolom teks opsional pada tabel contacts diisi "-" oleh ContactController saat
 * form dikirim kosong. Untuk tampilan, "-" itu bukan isi data, jadi dibuang
 * supaya nama tanpa nama belakang tidak muncul sebagai "Budi -".
 */
function withoutPlaceholder(value: string): string {
  const text = value.trim();
  return text === "-" ? "" : value;
}

function normalizeGender(value: string): string {
  const lower = value.trim().toLowerCase();
  if (lower === "l" || lower.includes("laki")) return "Laki-laki";
  if (lower === "p" || lower.includes("perempuan") || lower.includes("wanita")) return "Perempuan";
  return value;
}

function notifyError(message: string) {
  Swal.fire({
    icon: "error",
    text: getUserErrorMessage(message),
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
    financeStatus: hospital.financeStatus,
    keterangan: hospital.description,
    hospitalClass: hospital.hospitalClass,
    financialGrade: hospital.financialGrade,
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
    lastName: withoutPlaceholder(pickString(raw, "last_name", "Last Name", "lastName")),
    profile: "user/user.png",
    gender: normalizeGender(pickString(raw, "gender") || "") || "-",
    dob: pickString(raw, "dob", "birthday") || "-",
    personality: "-",
    city: pickString(raw, "city", "City") || "-",
    contactNumber: phone1,
    email: pickString(raw, "email", "Email"),
    website: pickString(raw, "website", "Website"),
    interest: "-",
    category: pickString(raw, "category") || "personal",
    contactType: pickString(raw, "contactType", "contact_type") || "-",
    jobTitle: withoutPlaceholder(pickString(raw, "job_title", "jobTitle")),
    companyId: pickString(raw, "company_id", "Company ID"),
    sourceId: pickString(raw, "source_id", "Source ID"),
    status: pickString(raw, "statusname", "status_name", "Status Name", "status", "Status"),
    statusId: nullableId(raw.status) ?? undefined,
    createdById:
      nullableId(
        pickString(
          raw,
          "created_by",
          "created_by_id",
          "createdby",
          "leader_id",
          "owner_id",
          "penanggung_jawab_id",
          "input_by",
          "user_id",
        ),
      ) ?? undefined,
    telephone1: phone1,
    telephone2: phone2,
    owner: pickString(
      raw,
      "owner_name",
      "created_by_name",
      "createdby_name",
      "input_by_name",
      "penanggung_jawab",
      "leader_name",
      "username",
      "owner",
    ),
    phoneNumbers: splitPhoneNumbers(phone1, phone2),
    mapAddress: pickString(raw, "mapAddress", "map_address"),
    address: pickString(raw, "address", "Address"),
    country: pickString(raw, "country", "Country"),
    province: pickString(raw, "province", "Province"),
    posCode: pickString(raw, "pos_code", "Pos Code"),
    kdKelurahan: pickString(raw, "kd_kelurahan", "kelurahan", "Kd Kelurahan"),
    aktif: pickNumber(raw, "aktif", "Aktif"),
    source: pickString(raw, "sourcename", "source_name", "source"),
    company: pickString(raw, "company_name", "Company Name", "company"),
    project: pickString(raw, "projects_name", "project_name", "Project Name", "project"),
    projectId: pickString(raw, "project_id", "Project ID", "projectId"),
    companyIds: pickIdList(raw, "company_ids"),
    // Urutannya sejajar dengan companyIds, dipakai halaman detail untuk
    // menampilkan kartu tiap Faskes yang dipegang kontak.
    companyNames: pickNameList(raw, "company_names", "companies"),
    companies: pickContactCompanies(raw, "companies"),
    projectIds: pickIdList(raw, "project_ids"),
    projectNames: pickNameList(raw, "project_names", "projects"),
    projects: pickContactProjects(raw, "projects"),
    latitude: nullableNumber(pickString(raw, "latitude", "Latitude")) ?? undefined,
    longitude: nullableNumber(pickString(raw, "longitude", "Longitude")) ?? undefined,
    createdAt: pickString(raw, "created_at", "Created At", "createdAt"),
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
    totalPeluang: nullableNumber(pickString(raw, "total_peluang")) ?? undefined,
    totalFaskes: nullableNumber(pickString(raw, "total_faskes")) ?? undefined,
    totalAktifitas: nullableNumber(pickString(raw, "total_aktifitas")) ?? undefined,
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
    country: initInputField(),
    posCode: initInputField(),
    kdKelurahan: initInputField(),
    province: initSelectField(),
    city: initSelectField(),
    latitude: initInputField(),
    longitude: initInputField(),
    source: initSelectField(),
    gender: initSelectField(),
    company: initSelectField(),
    project: initSelectField(),
  });

  const inputFieldWithValue = (value = "") => ({
    ...initInputField(),
    data: value,
  });

  const selectFieldWithValue = (value = "") => ({
    ...initSelectField(),
    data: value,
    selected: value ? { value, label: value } : null,
  });

  const createRumahSakitForm = (hospital?: Hospital): RumahSakitForm => {
    const phoneNumbers = splitPhoneNumbers(hospital?.phone);
    const jenis = hospital?.jenis || hospital?.industry || "";
    const tipe = hospital?.tipe || hospital?.hospitalType || "";
    const penyelenggara = hospital?.penyelenggara || hospital?.owner || "";

    return {
      name: inputFieldWithValue(hospital?.name),
      phoneNumbers: (phoneNumbers.length ? phoneNumbers : [""]).map(
        inputFieldWithValue,
      ),
      email: inputFieldWithValue(hospital?.email),
      mapAddress: inputFieldWithValue(
        hospital?.mapAddress || hospital?.address,
      ),
      address: inputFieldWithValue(hospital?.address),
      province: selectFieldWithValue(hospital?.province),
      city: selectFieldWithValue(hospital?.city),
      jenis: selectFieldWithValue(jenis),
      tipe: selectFieldWithValue(tipe),
      penyelenggara: selectFieldWithValue(penyelenggara),
      tipeMarketingGo500: selectFieldWithValue(
        hospital?.tipeMarketingGo500,
      ),
      keterangan: inputFieldWithValue(hospital?.description),
      sirs: inputFieldWithValue(hospital?.sirs),
      financeStatus: inputFieldWithValue(hospital?.financeStatus),
    };
  };

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
    hospitalEditId: null,
    hospitalEditLocation: null,
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
    /** Lookup dropdown Faskes form Kontak, langsung dari API (bukan daftar halaman Faskes). */
    companyLookup: [] as Select[],
    /** Lookup dropdown Peluang form Kontak, langsung dari API (bukan daftar halaman Peluang). */
    projectLookup: [] as Select[],
    /** Hasil GET /api/contact/project dengan search / company_ids; null = pakai projectLookup penuh. */
    projectSearchResults: null as Select[] | null,
    projectSearching: false,
    lookupLoading: false,
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
  const companyNameCache = new Map<string, string>();

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

  /** Menggabungkan Rumah Sakit dan Contact dari API ke daftar yang dibaca UI. */
  function syncRemoteContacts() {
    const hospitalContacts = hospitalStore.items.map(hospitalToContact);
    contactState.contactList = [
      ...hospitalContacts,
      ...contactApi.items,
    ];

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

  /** Lengkapi nama company pada response contact yang hanya membawa company_id. */
  function resolveContactCompanyNames() {
    if (!contactApi.items.length) return;

    contactApi.companies.forEach((company) => {
      if (company.label) companyNameCache.set(String(company.value), company.label);
    });
    hospitalStore.items.forEach((hospital) => {
      if (hospital.name) companyNameCache.set(String(hospital.id), hospital.name);
    });
    if (!companyNameCache.size) return;

    contactApi.items = contactApi.items.map((contact) => ({
      ...contact,
      company:
        contact.company || companyNameCache.get(String(contact.companyId ?? "")) || "",
    }));
  }

  /**
   * Endpoint daftar contact kadang hanya mengirim company_id, sementara endpoint
   * daftar company tidak selalu memuat seluruh ID. Resolve semua ID unik pada
   * halaman aktif agar setiap baris memperoleh nama Rumah Sakit.
   */
  async function hydrateContactCompanyNames() {
    resolveContactCompanyNames();

    const unresolvedCompanyIds = Array.from(
      new Set(
        contactApi.items
          .filter((contact) => !contact.company)
          .map((contact) => Number(contact.companyId))
          .filter((id) => Number.isSafeInteger(id) && id > 0),
      ),
    ).filter((id) => !companyNameCache.has(String(id)));

    await Promise.allSettled(
      unresolvedCompanyIds.map(async (id) => {
        const company = await hospitalStore.fetchHospitalById(id);
        if (company?.name) companyNameCache.set(String(id), company.name);
      }),
    );

    resolveContactCompanyNames();
  }

  /**
   * Memuat seluruh halaman Faskes dari backend supaya daftar Faskes bisa
   * dipaginasi 10 per halaman di frontend, lepas dari page size backend.
   */
  async function fetchAllHospitalsForList(search?: string) {
    await hospitalStore.fetchHospitals({ page: 1, per_page: HOSPITAL_LIST_FETCH_LIMIT, search });
    while (hospitalStore.pagination.page < hospitalStore.pagination.lastPage) {
      await hospitalStore.fetchHospitals(
        {
          page: hospitalStore.pagination.page + 1,
          per_page: HOSPITAL_LIST_FETCH_LIMIT,
          search,
        },
        { append: true },
      );
    }
  }

  async function loadRemoteContacts() {
    // Halaman Kontak hanya butuh endpoint /api/contact: sp_view_listcontact sudah
    // membawa company_name, total_peluang, total_faskes, aktifitas_terakhir, dsb.
    // Jadi untuk scope "contact" tidak perlu memanggil /api/company,
    // /api/contact/company, maupun /api/contact/fetchcontactbyid saat init.
    if (scope.value === "contact") {
      const contactResult = await Promise.allSettled([fetchAllRemoteContacts()]);
      syncRemoteContacts();
      if (contactResult[0].status === "rejected") {
        notifyError(contactError.value ?? "Gagal memuat data kontak.");
      }
      return;
    }

    // Scope "hospital": tetap muat Rumah Sakit + lookup Faskes untuk menampilkan
    // daftar faskes pada halaman Rumah Sakit.
    const lookupResults = await Promise.allSettled([
      scope.value === "hospital" ? fetchAllHospitalsForList() : hospitalStore.fetchHospitals(),
      fetchContactCompanies(),
    ]);

    const [contactResult] = await Promise.allSettled([fetchAllRemoteContacts()]);
    const results = [lookupResults[0], contactResult, lookupResults[1]];

    resolveContactCompanyNames();
    syncRemoteContacts();

    if (results.some((result) => result.status === "rejected")) {
      notifyError(hospitalStore.error ?? contactError.value ?? "Gagal memuat data.");
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
      await fetchAllHospitalsForList(hospitalSearch.value || undefined);
      contactState.activeContact = undefined;
      syncRemoteContacts();
    } catch {
      notifyError(hospitalStore.error ?? "Gagal mencari Faskes.");
    }
  }

  /** Mencari kontak melalui endpoint list dan kembali ke halaman pertama. */
  async function searchContacts(query: string) {
    contactApi.search = query.trim();

    try {
      await fetchAllRemoteContacts(contactApi.search || undefined);
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
        await hydrateContactCompanyNames();
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

  /**
   * Memuat seluruh halaman Contact dari backend untuk pagination lokal di frontend.
   * Jika backend mengembalikan paginator, semua page diambil lalu digabung tanpa duplikat.
   */
  function fetchAllRemoteContacts(search?: string) {
    return runApiAction({
      flag: contactLoading,
      error: contactError,
      fallbackMessage: "Gagal memuat seluruh data kontak.",
      task: async () => {
        const requestPage = async (page: number) => {
          const response = await api.getbydata(CONTACT_ENDPOINT, {
            page,
            per_page: CONTACT_LIST_FETCH_LIMIT,
            search,
          });
          return extractList(response.data, ["contacts"]);
        };

        const firstResult = await requestPage(1);
        const firstPageSize = firstResult.items.length;
        const knownTotal = firstResult.meta?.total;
        const lastPage = Math.max(
          1,
          firstResult.meta?.lastPage ?? 0,
          knownTotal !== undefined && firstPageSize > 0
            ? Math.ceil(knownTotal / firstPageSize)
            : 0,
        );
        const rawItems = [...firstResult.items];

        for (let page = 2; page <= lastPage; page += 1) {
          const result = await requestPage(page);
          rawItems.push(...result.items);
        }

        const uniqueContacts = new Map<number, Contact>();
        rawItems.filter(isRecord).forEach((raw) => {
          const contact = normalizeApiContact(raw);
          const key = Number(contact.remoteId ?? contact.id);
          if (Number.isFinite(key)) uniqueContacts.set(key, contact);
        });

        contactApi.items = [...uniqueContacts.values()];
        await hydrateContactCompanyNames();
        contactApi.pagination.page = 1;
        contactApi.pagination.perPage = 10;
        contactApi.pagination.total = contactApi.items.length;
        contactApi.pagination.lastPage = Math.max(
          1,
          Math.ceil(contactApi.items.length / contactApi.pagination.perPage),
        );
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
        const existingContact = contactApi.items.find((item) => item.remoteId === remoteId);
        detailedContact.createdById ??= existingContact?.createdById;
        if (!detailedContact.owner || detailedContact.owner === "-") {
          detailedContact.owner = existingContact?.owner;
        }

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
        resolveContactCompanyNames();
        syncRemoteContacts();
        return contactApi.companies;
      },
    });
  }

  function normalizeProjectLookup(payload: unknown, addressByCompanyId?: Map<number, string>) {
    const addresses =
      addressByCompanyId ??
      new Map(contactApi.companyLookup.map((company) => [Number(company.value), company.address ?? ""]));

    return extractList(payload, ["projects", "deals"]).items
      .filter(isRecord)
      .map((raw) => {
        const companyId = pickNumber(raw, "company_id");
        const companyName = pickString(raw, "company_name", "hospital_name", "customer_name");
        return {
          value: pickNumber(raw, "value", "project_id", "id", "ID"),
          label: pickString(raw, "label", "projects_name", "project_name", "deal_name"),
          // Peluang tidak punya alamat sendiri; tampilkan Faskes terkait + alamatnya.
          address: [companyName, pickString(raw, "address") || addresses.get(companyId)]
            .filter(Boolean)
            .join(", "),
          // Dipakai form Kontak untuk memfilter Peluang sesuai Faskes yang dipilih.
          companyId: companyId > 0 ? companyId : undefined,
        };
      })
      .filter((option) => option.value > 0 && option.label);
  }

  let projectSearchSeq = 0;

  /**
   * GET /api/contact/project?search=...&company_ids=1,2 untuk dropdown Peluang form Kontak.
   * Tanpa search & Faskes, hasil dikosongkan (null) agar dropdown kembali ke projectLookup penuh.
   * Hanya respons permintaan terakhir yang dipakai, supaya ketikan cepat tidak tertimpa hasil lama.
   */
  async function searchContactProjects(params: { search?: string; companyIds?: number[] } = {}) {
    const search = params.search?.trim() ?? "";
    const companyIds = params.companyIds ?? [];
    const seq = ++projectSearchSeq;

    if (!search && !companyIds.length) {
      contactApi.projectSearchResults = null;
      contactApi.projectSearching = false;
      return contactApi.projectLookup;
    }

    contactApi.projectSearching = true;
    try {
      const response = await api.getbydata(`${CONTACT_ENDPOINT}/project`, {
        ...(search ? { search } : {}),
        ...(companyIds.length ? { company_ids: companyIds.join(",") } : {}),
        limit: 100,
      });
      if (seq !== projectSearchSeq) return contactApi.projectSearchResults ?? [];
      contactApi.projectSearchResults = normalizeProjectLookup(response.data);
      return contactApi.projectSearchResults;
    } catch {
      // Gagal mencari di server: tetap pakai lookup penuh yang sudah dimuat.
      if (seq === projectSearchSeq) contactApi.projectSearchResults = null;
      return contactApi.projectLookup;
    } finally {
      if (seq === projectSearchSeq) contactApi.projectSearching = false;
    }
  }

  /**
   * Lookup Faskes & Peluang untuk form Buat/Edit Kontak.
   * GET /api/contact/company -> Faskes, GET /api/contact/project -> Peluang.
   * Sengaja tidak memakai items store Faskes/Peluang karena itu hanya berisi halaman aktif.
   */
  function fetchContactLookups() {
    return runApiAction({
      flag: toRef(contactApi, "lookupLoading"),
      error: contactError,
      fallbackMessage: "Gagal memuat daftar Faskes / Peluang.",
      task: async () => {
        const [companyResponse, projectResponse] = await Promise.all([
          api.get(`${CONTACT_ENDPOINT}/company`),
          // Backend default limit=100; minta lebih banyak agar filter per Faskes di FE tidak kehilangan data.
          api.getbydata(`${CONTACT_ENDPOINT}/project`, { limit: 1000 }),
        ]);

        const companies = extractList(companyResponse.data, ["companies"]).items
          .filter(isRecord)
          .map((raw) => ({
            value: pickNumber(raw, "value", "company_id", "id", "ID"),
            label: pickString(raw, "label", "company_name", "name", "Company Name"),
            address: pickString(raw, "address", "Address", "map_address", "mapAddress"),
          }))
          .filter((option) => option.value > 0 && option.label);
        const addressByCompanyId = new Map(
          companies.map((company) => [company.value, company.address]),
        );

        const projects = normalizeProjectLookup(projectResponse.data, addressByCompanyId);

        contactApi.companyLookup = companies;
        contactApi.projectLookup = projects;
        contactApi.projectSearchResults = null;
        if (!contactApi.companies.length) {
          contactApi.companies = companies.map(({ value, label }) => ({ value: String(value), label }));
          resolveContactCompanyNames();
        }
        return { companies, projects };
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

  /** GET /api/master-data/sources, master sumber kontak (dipakai lintas modul). */
  function fetchContactSources() {
    return runApiAction({
      flag: contactLoading,
      error: contactError,
      fallbackMessage: "Gagal memuat sumber kontak.",
      task: async () => {
        try {
          const response = await api.get("master-data/sources");
          const sources = normalizeOptions(response.data, ["sources", "source"])
            .filter((option) => option.value && option.label);
          contactApi.sources = sources;
        } catch (error) {
          console.warn("Endpoint sumber kontak tidak tersedia.", error);
          contactApi.sources = [];
        }
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
            const createdContact = await fetchRemoteContactById(createdId);
            if (createdContact) applySavedContactPayload(createdContact, payload);
            return createdContact;
          } catch {
            await fetchAllRemoteContacts(contactApi.search || undefined);
            const createdContact = contactApi.items.find((item) => item.remoteId === createdId);
            if (createdContact) applySavedContactPayload(createdContact, payload);
            syncRemoteContacts();
            return createdContact;
          }
        }

        await fetchAllRemoteContacts(contactApi.search || undefined);
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
          const updatedContact = await fetchRemoteContactById(remoteId);
          if (updatedContact) applySavedContactPayload(updatedContact, payload);
        } catch {
          await fetchAllRemoteContacts(contactApi.search || undefined);
          const updatedContact = contactApi.items.find((item) => item.remoteId === remoteId);
          if (updatedContact) applySavedContactPayload(updatedContact, payload);
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
          country: nullableText(contact?.country),
          province: nullableText(contact?.province),
          city: nullableText(contact?.city),
          pos_code: nullableText(contact?.posCode),
          kelurahan: nullableText(contact?.kdKelurahan),
          gender: nullableText(contact?.gender),
          project_name: nullableText(contact?.project),
          project_id: nullableId(contact?.projectId),
          latitude: nullableNumber(contact?.latitude),
          longitude: nullableNumber(contact?.longitude),
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

  async function hydrateHospitalContact(
    contact: Contact,
    options: { activate?: boolean; notifyOnError?: boolean } = {},
  ) {
    if (contact.origin !== "hospital" || contact.remoteId === undefined) return;

    const { activate = true, notifyOnError = true } = options;

    try {
      const hospital = await hospitalStore.fetchHospitalById(contact.remoteId);
      if (!hospital) return;

      const detailedContact = hospitalToContact(hospital);
      contactState.contactList = contactState.contactList.map((item) =>
        item.id === contact.id ? detailedContact : item,
      );
      if (activate) contactState.activeContact = detailedContact;
      return detailedContact;
    } catch {
      if (notifyOnError) {
        notifyError(hospitalStore.error ?? "Gagal memuat detail Faskes.");
      }
    }
  }

  /** Lengkapi seluruh baris Rumah Sakit pada halaman aktif, bukan hanya baris pertama. */
  async function hydrateHospitalPage() {
    const hospitals = [...filteredContact.value];
    if (!hospitals.length) return;

    await Promise.allSettled(
      hospitals.map((hospital) =>
        hydrateHospitalContact(hospital, { activate: false, notifyOnError: false }),
      ),
    );

    const activeId = contactState.activeContact?.id;
    contactState.activeContact =
      contactState.contactList.find((contact) => contact.id === activeId) ??
      filteredContact.value[0];
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
  async function deleteContact(): Promise<boolean> {
    const target = contactState.activeContact;

    if (target?.origin && target.remoteId !== undefined) {
      const result = await Swal.fire({
        title: "Hapus kontak?",
        text: "Data kontak ini akan dihapus dari database.",
        icon: "warning",
        confirmButtonText: "Ya, hapus",
        showCancelButton: true,
        cancelButtonText: "Batal",
        cancelButtonColor: "#898989",
      });
      if (!result.isConfirmed || target.remoteId === undefined) return false;

      try {
        if (target.origin === "hospital") {
          await hospitalStore.deleteHospital(target.remoteId);
        } else {
          await removeRemoteContact(target.remoteId, target);
        }
        syncRemoteContacts();
        return true;
      } catch {
        notifyError(
          (target.origin === "hospital" ? hospitalStore.error : contactError.value) ??
            "Gagal menghapus data.",
        );
        return false;
      }
    }

    return deleteLocalContact();
  }

  async function deleteLocalContact(): Promise<boolean> {
    const result = await Swal.fire({
      title: "Hapus kontak?",
      text: "Kontak ini akan dihapus dari daftar kontak pribadi dan daftar percakapan.",
      icon: "warning",
      confirmButtonText: "Ya, hapus",
      showCancelButton: true,
      cancelButtonText: "Batal",
      cancelButtonColor: "#898989",
    });
    if (!result.isConfirmed) return false;

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
    return true;
  }

  function showHistory() {
    contactState.historyVisible = true;
  }

  function printContact() {
    contactState.openPrintContactModal = true;
  }

  function prepareContactModal(company?: { id: number; name: string }) {
    contactState.hospitalEditId = null;
    contactState.hospitalEditLocation = null;
    contactState.rumahSakitForm = createRumahSakitForm();
    contactState.contactForm = createContactForm();
    if (company) {
      const option = { value: company.id, label: company.name };
      contactState.contactForm.company = {
        ...initSelectField(),
        selectedItems: [option],
        data: String(company.id),
      };
    }
    contactState.formSubmitted = false;
    contactState.openAddContactModal = true;
  }

  function openContactModal() {
    prepareContactModal();
  }

  function openContactModalForCompany(company: { id: number; name: string }) {
    prepareContactModal(company);
  }

  function openHospitalEditModal(hospital: Hospital) {
    prepareHospitalForm(hospital);
    contactState.openAddContactModal = true;
  }

  function prepareHospitalForm(hospital: Hospital) {
    contactState.hospitalEditId = hospital.id;
    contactState.hospitalEditLocation =
      hospital.latitude !== undefined && hospital.longitude !== undefined
        ? { lat: hospital.latitude, lng: hospital.longitude }
        : null;
    contactState.rumahSakitForm = createRumahSakitForm(hospital);
    contactState.formSubmitted = false;
  }

  async function saveContact() {
    contactState.formSubmitted = true;

    const { phoneNumbers, ...formFields } = contactState.contactForm;
    const optionalFields = [
      "lastName",
      "jobTitle",
      "email",
      "owner",
      "status",
      "contactNumber",
      "contactType",
      "address",
      "country",
      "posCode",
      "kdKelurahan",
      "latitude",
      "longitude",
      "company",
      "project",
    ];
    const validation = validateForm(formFields, optionalFields);
    // Form membatasi baris nomor ke MAX_PHONE_NUMBERS; slice di sini menjaga
    // payload tetap sesuai batas walau datanya berasal dari sumber lain.
    const normalizedPhoneNumbers = phoneNumbers
      .map((phone) => phone.data.trim())
      .filter(Boolean)
      .slice(0, MAX_PHONE_NUMBERS);

    const requiredLabels: Record<string, string> = {
      firstName: "Nama Depan",
      mapAddress: "Alamat Google Maps",
      province: "Provinsi",
      city: "Kota/Kabupaten",
      source: "Sumber",
      gender: "Jenis Kelamin",
    };
    Object.entries(requiredLabels).forEach(([key, label]) => {
      const field = formFields[key as keyof typeof formFields];
      if (field?.errorMessage) field.errorMessage = `${label} wajib diisi.`;
    });

    const firstPhone = phoneNumbers[0]?.data?.trim() ?? "";
    if (!firstPhone) {
      phoneNumbers[0].errorMessage = "Nomor telepon wajib diisi.";
    }
    if (!validation.isValid || !firstPhone) return;

    const formData = validation.formData;
    const selectedGender = contactState.contactForm.gender.selected;
    const selectedCompanies = contactState.contactForm.company.selectedItems ?? [];
    const selectedProjects = contactState.contactForm.project.selectedItems ?? [];
    const companyIds = selectedCompanies
      .map((item) => nullableId(item.value))
      .filter((id): id is number => id !== null);
    const projectIds = selectedProjects
      .map((item) => nullableId(item.value))
      .filter((id): id is number => id !== null);
    try {
      // Payload mengikuti parameter dbo.sp_contacts_crud secara eksplisit.
      const payload: ContactCrudPayload = {
        // Kolom tunggal di tabel contacts diisi pilihan pertama; seluruh pilihan dikirim via *_ids.
        company_id: companyIds[0] ?? null,
        first_name: textValue(formData.firstName),
        last_name: textValue(formData.lastName),
        job_title: nullableText(formData.jobTitle),
        email: nullableText(formData.email),
        // Endpoint Contact mengharuskan status berupa integer; kontak baru aktif secara default.
        status: textValue(formData.status) || DEFAULT_CONTACT_STATUS,
        telephone_1: normalizedPhoneNumbers[0] ?? "",
        telephone_2: normalizedPhoneNumbers.slice(1).join(", ") || null,
        // Endpoint kontak hanya menyediakan satu kolom alamat. Jika alamat manual
        // kosong, pertahankan hasil Google Maps sebagai alamat kontak.
        address: nullableText(formData.address) ?? nullableText(formData.mapAddress),
        // Seluruh pencarian Maps dibatasi ke Indonesia; kirim nilai baku agar
        // backend tidak menerima country kosong/bervariasi dari provider geocoding.
        country: INDONESIA_COUNTRY,
        province: nullableText(formData.province),
        city: nullableText(formData.city),
        pos_code: nullableText(formData.posCode),
        kelurahan: nullableText(formData.kdKelurahan),
        gender: nullableText(selectedGender?.label || formData.gender),
        project_name: nullableText(selectedProjects[0]?.label),
        project_id: projectIds[0] ?? null,
        company_ids: companyIds,
        project_ids: projectIds,
        latitude: nullableNumber(formData.latitude),
        longitude: nullableNumber(formData.longitude),
        source: nullableId(formData.source),
        created_by: nullableId(formData.owner),
      };
      const created = await createRemoteContact(payload);

      contactState.openAddContactModal = false;
      contactState.contactForm = createContactForm();
      contactState.formSubmitted = false;
      await showSaveSuccess({ entity: "Kontak" });
      return created;
    } catch {
      notifyError(contactError.value ?? "Gagal menyimpan kontak.");
      return undefined;
    }
  }

  async function saveRumahSakit(
    location?: { lat: number; lng: number } | null,
    closeAfterSave = true,
  ) {
    contactState.formSubmitted = true;

    const { phoneNumbers, ...formFields } = contactState.rumahSakitForm;
    // Backend CompanyController@input memvalidasi email sebagai required|string.
    const optionalFields = ["keterangan", "financeStatus"];
    const validation = validateForm(formFields, optionalFields);
    const normalizedPhoneNumbers = phoneNumbers
      .map((phone) => phone.data.trim())
      .filter(Boolean)
      .slice(0, MAX_PHONE_NUMBERS);
    const hasPhoneNumber = normalizedPhoneNumbers.length > 0;

    phoneNumbers.forEach((phone, index) => {
      phone.errorMessage =
        !hasPhoneNumber && index === 0 ? "Nomor telepon wajib diisi." : "";
    });

    const requiredLabels: Record<string, string> = {
      name: "Nama Faskes",
      email: "Email Faskes",
      mapAddress: "Alamat Google Maps",
      address: "Alamat",
      province: "Provinsi",
      city: "Kota/Kabupaten",
      jenis: "Jenis",
      tipe: "Tipe",
      penyelenggara: "Penyelenggara",
      tipeMarketingGo500: "Tipe Marketing G0500",
      sirs: "SIRS",
    };
    Object.entries(requiredLabels).forEach(([key, label]) => {
      const field = formFields[key as keyof typeof formFields];
      if (field?.errorMessage) field.errorMessage = `${label} wajib diisi.`;
    });

    const missingFields = Object.entries(requiredLabels)
      .filter(([key]) => {
        const field = formFields[key as keyof typeof formFields];
        return !String(field?.data ?? "").trim();
      })
      .map(([, label]) => label);
    if (!hasPhoneNumber) missingFields.splice(1, 0, "Nomor Telepon");

    if (!validation.isValid || !hasPhoneNumber) {
      await Swal.fire({
        icon: "warning",
        title: "Data Faskes belum lengkap",
        text: `Field berikut belum diisi: ${missingFields.join(", ")}.`,
        confirmButtonText: "Lengkapi Data",
        confirmButtonColor: "var(--theme-default)",
      });
      return false;
    }

    const formData = validation.formData;
    const jenis = textValue(formData.jenis).trim();
    const tipe = textValue(formData.tipe).trim();
    const penyelenggara = textValue(formData.penyelenggara).trim();
    const industryId = nullableId(
      contactState.rumahSakitForm.jenis.selected?.value,
    );
    const typeId = nullableId(contactState.rumahSakitForm.tipe.selected?.value);

    // `company_owner` diwajibkan endpoint Company dan sumber nilainya adalah
    // pilihan Penyelenggara pada form Rumah Sakit.
    if (!penyelenggara) {
      contactState.rumahSakitForm.penyelenggara.errorMessage =
        "Penyelenggara wajib diisi.";
      return false;
    }
    if (industryId === null) {
      contactState.rumahSakitForm.jenis.errorMessage =
        "Pilih Jenis dari daftar yang tersedia.";
      return false;
    }
    if (typeId === null) {
      contactState.rumahSakitForm.tipe.errorMessage =
        "Pilih Tipe dari daftar yang tersedia.";
      return false;
    }

    // Payload sementara mengikuti seluruh field pada Kerangka Menu RS.
    // Backend saat ini menyediakan satu field telephone, sehingga beberapa nomor
    // diserialisasi sebagai daftar yang dipisahkan koma tanpa membuang input pengguna.
    const payload: HospitalPayload = {
      company_name: textValue(formData.name),
      // Company owner mengikuti Penyelenggara, bukan diisi manual terpisah.
      company_owner: penyelenggara,
      telephone: normalizedPhoneNumbers.join(", "),
      email: textValue(formData.email),
      map_address: textValue(formData.mapAddress),
      address: textValue(formData.address),
      country: INDONESIA_COUNTRY,
      province: textValue(formData.province),
      city: textValue(formData.city),
      // Pertahankan key form lama dan kirim alias yang dipakai parameter SP.
      jenis,
      industry: industryId,
      tipe,
      type: typeId,
      penyelenggara,
      tipe_marketing_go500: textValue(formData.tipeMarketingGo500),
      description: textValue(formData.keterangan),
      sirs: textValue(formData.sirs),
      status_finance: textValue(formData.financeStatus),
      grading: textValue(formData.financeStatus),
      latitude: location?.lat ?? null,
      longitude: location?.lng ?? null,
    };

    try {
      const editId = contactState.hospitalEditId;
      const created = editId
        ? await hospitalStore.updateHospital(editId, payload)
        : await hospitalStore.createHospital(payload);

      // Response input/update hanya dapat berisi id. Ambil detail lagi supaya
      // profil dan form berikutnya selalu memakai data terbaru dari backend.
      if (editId) await hospitalStore.fetchHospitalById(editId);
      syncRemoteContacts();

      if (!editId && created) {
        const createdContact = contactState.contactList.find(
          (contact) => contact.id === HOSPITAL_ID_OFFSET + created.id,
        );
        if (createdContact) contactState.activeContact = createdContact;
      }
      if (closeAfterSave) closeRumahSakitModal();

      await showSaveSuccess({
        entity: "Faskes",
        action: editId ? "updated" : "created",
      });

      return true;
    } catch {
      notifyError(hospitalStore.error ?? "Gagal menyimpan Faskes.");
      return false;
    }
  }

  function closeRumahSakitModal() {
    contactState.openAddContactModal = false;
    contactState.formSubmitted = false;
    contactState.hospitalEditId = null;
    contactState.hospitalEditLocation = null;
    contactState.rumahSakitForm = createRumahSakitForm();
  }

  return {
    contactState,
    contactApi,

    initStore,
    setScope,
    handleActiveTab,
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
    openContactModalForCompany,
    openHospitalEditModal,
    prepareHospitalForm,
    saveContact,
    saveRumahSakit,
    closeRumahSakitModal,

    fetchRemoteContacts,
    fetchRemoteContactById,
    fetchContactCompanies,
    fetchContactLookups,
    searchContactProjects,
    fetchContactStatuses,
    fetchContactSources,
    createRemoteContact,
    updateRemoteContact,
    removeRemoteContact,
  };
});
