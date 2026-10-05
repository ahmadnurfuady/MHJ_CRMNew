import { reactive, computed, ref, toRef } from "vue";

import { defineStore } from "pinia";
import Swal from "sweetalert2";

import { api } from "@/api";
import {
  extractItem,
  extractList,
  isRecord,
  normalizeOptions,
  pickNumber,
  pickString,
  type Dict,
} from "@/api/response";
import { initInputField, initSelectField } from "@/core/data/common";
import { contacts, contactSidebarList } from "@/core/data/contacts";
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

// ID dari backend diberi offset agar tidak bentrok dengan data contoh yang dipakai UI.
const HOSPITAL_ID_OFFSET = 1_000_000;
const CONTACT_ID_OFFSET = 2_000_000;
const CONTACT_ENDPOINT = "contact";

type ContactPayload = Record<string, unknown>;

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
    address: hospital.address,
    province: hospital.province,
    keterangan: hospital.description,
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
    owner: pickString(raw, "owner"),
    phoneNumbers: [phone1, phone2].filter(Boolean),
    mapAddress: pickString(raw, "mapAddress", "map_address"),
    address: pickString(raw, "address", "Address"),
    province: pickString(raw, "province", "Province"),
    source: pickString(raw, "sourcename", "source"),
    company: pickString(raw, "company_name", "company"),
    project: pickString(raw, "project"),
  };
}

export const useContact = defineStore("contact", () => {
  const hospitalStore = useHospitalStore();

  const createContactForm = () => ({
    firstName: initInputField(),
    lastName: initInputField(),
    jobTitle: initInputField(),
    owner: initSelectField(),
    email: initInputField(),
    contactNumber: initInputField(),
    contactType: initSelectField(),
    phoneNumbers: [initInputField()],
    mapAddress: initInputField(),
    address: initInputField(),
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
    contactList: contacts,
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
    companies: [] as Select[],
    loading: false,
    submitting: false,
    error: null as string | null,
    pagination: { page: 1, perPage: 10, total: 0, lastPage: 1 } as Pagination,
  });
  const contactLoading = toRef(contactApi, "loading");
  const contactSubmitting = toRef(contactApi, "submitting");
  const contactError = toRef(contactApi, "error");

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
        if (meta) Object.assign(contactApi.pagination, meta);
        return contactApi.items;
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

  /** POST /api/contact/input dengan choice "i". */
  function createRemoteContact(payload: ContactPayload) {
    return runApiAction({
      flag: contactSubmitting,
      error: contactError,
      fallbackMessage: "Gagal menyimpan kontak.",
      task: async () => {
        const response = await api.post(`${CONTACT_ENDPOINT}/input`, { choice: "i", ...payload });
        const raw = extractItem(response.data, ["contact"]);

        if (raw && pickNumber(raw, "id", "ID") > 0) {
          contactApi.items = [normalizeApiContact(raw), ...contactApi.items];
        } else {
          await fetchRemoteContacts();
        }
        syncRemoteContacts();
      },
    });
  }

  /** POST /api/contact/input dengan choice "u". */
  function updateRemoteContact(remoteId: number, payload: ContactPayload) {
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
        const raw = extractItem(response.data, ["contact"]);

        if (raw) {
          const updated = normalizeApiContact(raw);
          contactApi.items = contactApi.items.map((item) =>
            item.remoteId === remoteId ? updated : item,
          );
        } else {
          await fetchRemoteContacts();
        }
        syncRemoteContacts();
      },
    });
  }

  /** POST /api/contact/input dengan choice "d". */
  function removeRemoteContact(remoteId: number) {
    return runApiAction({
      flag: contactSubmitting,
      error: contactError,
      fallbackMessage: "Gagal menghapus kontak.",
      task: async () => {
        await api.post(`${CONTACT_ENDPOINT}/input`, { choice: "d", id: remoteId });
        contactApi.items = contactApi.items.filter((item) => item.remoteId !== remoteId);
        syncRemoteContacts();
      },
    });
  }

  function handleContact(contact: Contact) {
    contactState.activeContact = contact;
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
            await removeRemoteContact(target.remoteId);
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
      // Kolom tabel contacts. Field owner, gender, mapAddress, project, source, dan company
      // belum dikirim: belum ada kolomnya yang terkonfirmasi, atau berupa ID lookup (source_id, company_id).
      await createRemoteContact({
        first_name: textValue(formData.firstName),
        last_name: textValue(formData.lastName),
        job_title: textValue(formData.jobTitle),
        email: textValue(formData.email),
        telephone_1: normalizedPhoneNumbers[0] ?? "",
        telephone_2: normalizedPhoneNumbers[1] ?? null,
        address: textValue(formData.address),
        province: textValue(formData.province),
        city: textValue(formData.city),
      });

      contactState.openAddContactModal = false;
      contactState.contactForm = createContactForm();
      contactState.formSubmitted = false;
    } catch {
      notifyError(contactError.value ?? "Gagal menyimpan kontak.");
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
    fetchContactCompanies,
    createRemoteContact,
    updateRemoteContact,
    removeRemoteContact,
  };
});
