import type { Contact } from "@/types/contacts";

/** Satu fixture lokal untuk menguji kontak dengan banyak faskes dan peluang. */
export const DEMO_CONTACT_ID = 930_000_001;
export const CONTACT_DEMO_ENABLED = true;

export const DEMO_CONTACT: Contact = {
  id: DEMO_CONTACT_ID,
  isDemo: true,
  firstName: "dr. Rina",
  lastName: "Kusumawardani, M.Kes.",
  profile: "user/user.png",
  gender: "Perempuan",
  dob: "1982-08-17",
  personality: "Kolaboratif, teliti, dan berorientasi pada hasil",
  city: "Surabaya",
  contactNumber: "0812-3456-7801",
  telephone1: "0812-3456-7801",
  telephone2: "(031) 555-0177",
  phoneNumbers: ["0812-3456-7801", "(031) 555-0177"],
  email: "rina.kusumawardani@medika-nusantara.test",
  website: "https://medika-nusantara.test/profil/rina-kusumawardani",
  interest: "Transformasi layanan radiologi, ICU, dan diagnostik terpadu",
  category: "personal",
  contactType: "Decision Maker",
  jobTitle: "Direktur Pengembangan Jaringan Faskes",
  companyId: "demo-network-001",
  company: "RS Mata Surabaya",
  companyNames: ["RS Mata Surabaya", "RSUD Dr. Soetomo", "RS Siloam Surabaya"],
  sourceId: "2",
  source: "Referral",
  status: "Pengambil Keputusan",
  statusId: 1,
  createdById: 2,
  owner: "Fuad",
  mapAddress: "Jl. Raya Darmo No. 88, Surabaya, Jawa Timur 60241",
  address: "Jl. Raya Darmo No. 88, Wonokromo",
  country: "Indonesia",
  province: "Jawa Timur",
  posCode: "60241",
  kdKelurahan: "3578031005",
  aktif: 1,
  project: "Pengadaan CT Scan 128 Slice",
  projectId: "PRJ-2026-001",
  latitude: -7.289166,
  longitude: 112.739944,
  createdAt: "2026-01-15T09:00:00+07:00",
  lastActivity: "Rapat koordinasi portofolio alat medis tiga faskes",
  lastContactedAt: "2026-10-23T14:30:00+07:00",
};

export function createDemoContact(): Contact {
  return {
    ...DEMO_CONTACT,
    companyNames: [...(DEMO_CONTACT.companyNames ?? [])],
    phoneNumbers: [...(DEMO_CONTACT.phoneNumbers ?? [])],
  };
}

export function isDemoContactId(id: unknown): boolean {
  return Number(id) === DEMO_CONTACT_ID;
}

export function demoContactMatchesSearch(search?: string): boolean {
  const query = String(search ?? "")
    .trim()
    .toLocaleLowerCase("id-ID");
  if (!query) return true;

  return [
    DEMO_CONTACT.firstName,
    DEMO_CONTACT.lastName,
    DEMO_CONTACT.email,
    DEMO_CONTACT.contactNumber,
    DEMO_CONTACT.jobTitle,
    ...(DEMO_CONTACT.companyNames ?? []),
  ].some((value) => String(value).toLocaleLowerCase("id-ID").includes(query));
}
