import { reactive, computed } from "vue";

import { defineStore } from "pinia";
import Swal from "sweetalert2";

import { initInputField, initSelectField } from "@/core/data/common";
import { contacts, contactSidebarList } from "@/core/data/contacts";
import type {
  Contact,
  ContactSidebarList,
  ContactState,
  RumahSakitForm,
} from "@/types/contacts";
import { validateForm } from "@/utils/validators/formValidators";

export const useContact = defineStore("contact", () => {
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

  function initStore() {
    handleActiveTab(contactState.tabList[0] as ContactSidebarList);
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

  const filteredContact = computed(() => {
    const contacts = contactState.contactList;

    if (contactState.currentTab.value && contactState.currentTab.value) {
      const value = contactState.currentTab.value;
      return contacts.filter((contact) => contact.category == value);
    }

    return [];
  });

  function handleContact(contact: Contact) {
    contactState.activeContact = contact;
  }

  function editContact() {
    contactState.isEditContact = true;
  }

  function deleteContact() {
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

  function saveContact() {
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

    if (validation.isValid && hasPhoneNumber) {
      const formData = validation.formData;
      const newContact: Contact = {
        id: Math.floor(Math.random() * 999) + 1,
        firstName: formData.firstName as string,
        lastName: formData.lastName as string,
        profile: "user/user.png",
        gender: (formData.gender as string) || "-",
        dob: "-",
        personality: "-",
        city: (formData.city as string) || "-",
        contactNumber: normalizedPhoneNumbers[0] as string,
        email: formData.email as string,
        website: "",
        interest: "-",
        category: "personal",
        contactType: "mobile",
        jobTitle: formData.jobTitle as string,
        owner: formData.owner as string,
        phoneNumbers: normalizedPhoneNumbers,
        mapAddress: formData.mapAddress as string,
        address: formData.address as string,
        province: formData.province as string,
        source: formData.source as string,
        company: formData.company as string,
        project: formData.project as string,
      };

      if (filteredContact.value && filteredContact.value?.length == 0) {
        contactState.activeContact = newContact;
      }

      contactState.contactList.push(newContact);
      contactState.openAddContactModal = false;
      contactState.contactForm = createContactForm();
      contactState.formSubmitted = false;
    }
  }

  function saveRumahSakit() {
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
    const newRumahSakit: Contact = {
      id: Math.floor(Math.random() * 999) + 1,
      firstName: formData.name as string,
      lastName: "",
      profile: "user/user.png",
      gender: "-",
      dob: "-",
      personality: "-",
      city: (formData.city as string) || "-",
      contactNumber: normalizedPhoneNumbers[0] as string,
      email: "",
      website: "",
      interest: "-",
      category: contactState.currentTab.value || "personal",
      contactType: "-",
      phoneNumbers: normalizedPhoneNumbers,
      mapAddress: formData.mapAddress as string,
      address: formData.address as string,
      province: formData.province as string,
      jenis: formData.jenis as string,
      tipe: formData.tipe as string,
      penyelenggara: formData.penyelenggara as string,
      tipeMarketingGo500: formData.tipeMarketingGo500 as string,
      keterangan: formData.keterangan as string,
      sirs: formData.sirs as string,
    };

    contactState.contactList.push(newRumahSakit);
    contactState.activeContact = newRumahSakit;
    closeRumahSakitModal();
  }

  function closeRumahSakitModal() {
    contactState.openAddContactModal = false;
    contactState.formSubmitted = false;
    contactState.rumahSakitForm = createRumahSakitForm();
  }

  return {
    contactState,

    initStore,
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
  };
});
