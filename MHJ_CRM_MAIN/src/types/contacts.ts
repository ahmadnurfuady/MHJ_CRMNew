import type { InputField, SelectField } from "./common";

export interface ContactSidebarList {
  id: number;
  title: string;
  value?: string;
}

export interface Contact {
  id: number;
  /** Penanda asal data dari backend: "hospital" (endpoint Company) atau "api" (endpoint Contact). */
  origin?: "hospital" | "api";
  /** ID asli dari backend, dipakai untuk request update/delete. */
  remoteId?: number;
  firstName: string;
  lastName: string;
  profile: string;
  gender: string;
  dob: string;
  personality: string;
  city: string;
  contactNumber: string;
  email: string;
  website: string;
  interest: string;
  category: string;
  contactType: string;
  jobTitle?: string;
  companyId?: string;
  sourceId?: string;
  status?: string;
  telephone1?: string;
  telephone2?: string;
  owner?: string;
  phoneNumbers?: string[];
  mapAddress?: string;
  address?: string;
  province?: string;
  country?: string;
  posCode?: string;
  kdKelurahan?: string;
  industry?: string;
  aktif?: number;
  source?: string;
  company?: string;
  project?: string;
  jenis?: string;
  tipe?: string;
  penyelenggara?: string;
  tipeMarketingGo500?: string;
  keterangan?: string;
  sirs?: string;
}

export interface RumahSakitForm {
  name: InputField;
  phoneNumbers: InputField[];
  mapAddress: InputField;
  address: InputField;
  province: SelectField;
  city: SelectField;
  jenis: InputField;
  tipe: InputField;
  penyelenggara: InputField;
  tipeMarketingGo500: InputField;
  keterangan: InputField;
  sirs: InputField;
}

export interface ContactForm {
  firstName: InputField;
  lastName: InputField;
  jobTitle: InputField;
  owner: SelectField;
  email: InputField;
  /** Legacy fields kept for the Rumah Sakit contact view that shares this store. */
  contactNumber: InputField;
  contactType: SelectField;
  phoneNumbers: InputField[];
  mapAddress: InputField;
  address: InputField;
  province: SelectField;
  city: SelectField;
  source: SelectField;
  gender: SelectField;
  company: SelectField;
  project: SelectField;
}

export interface ContactState {
  tabList: ContactSidebarList[];
  activeTab: string;
  currentTab: ContactSidebarList;
  activeContact: Contact | undefined;
  contactList: Contact[];
  isEditContact: boolean;
  historyVisible: boolean;
  openPrintContactModal: boolean;
  openAddContactModal: boolean;
  openCategoryModal: boolean;
  formSubmitted: boolean;
  contactForm: ContactForm;
  rumahSakitForm: RumahSakitForm;
}

export interface ContactFormState {
  firstName: InputField;
  lastName: InputField;
  email: InputField;
  contactNumber: InputField;
  contactType: SelectField;
  gender: string;
  dob: InputField;
  personality: InputField;
  interest: InputField;
  city: InputField;
}
