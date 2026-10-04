import type { Select } from "@/types/common";

export const ownerOptions: Select[] = [
  { value: "andhi", label: "Andhi" },
  { value: "fuad", label: "Fuad" },
  { value: "sarah", label: "Sarah Wijaya" },
];

export const provinceOptions: Select[] = [
  { value: "dki-jakarta", label: "DKI Jakarta" },
  { value: "jawa-barat", label: "Jawa Barat" },
  { value: "jawa-tengah", label: "Jawa Tengah" },
  { value: "jawa-timur", label: "Jawa Timur" },
  { value: "bali", label: "Bali" },
];

export const cityOptionsByProvince: Record<string, Select[]> = {
  "DKI Jakarta": [
    { value: "jakarta-barat", label: "Jakarta Barat" },
    { value: "jakarta-pusat", label: "Jakarta Pusat" },
    { value: "jakarta-selatan", label: "Jakarta Selatan" },
    { value: "jakarta-timur", label: "Jakarta Timur" },
    { value: "jakarta-utara", label: "Jakarta Utara" },
  ],
  "Jawa Barat": [
    { value: "bandung", label: "Bandung" },
    { value: "bekasi", label: "Bekasi" },
    { value: "bogor", label: "Bogor" },
    { value: "depok", label: "Depok" },
  ],
  "Jawa Tengah": [
    { value: "semarang", label: "Semarang" },
    { value: "surakarta", label: "Surakarta" },
    { value: "magelang", label: "Magelang" },
  ],
  "Jawa Timur": [
    { value: "surabaya", label: "Surabaya" },
    { value: "malang", label: "Malang" },
    { value: "sidoarjo", label: "Sidoarjo" },
  ],
  Bali: [
    { value: "denpasar", label: "Denpasar" },
    { value: "badung", label: "Badung" },
  ],
};

export const sourceOptions: Select[] = [
  { value: "referral", label: "Referral" },
  { value: "website", label: "Website" },
  { value: "event", label: "Event / Pameran" },
  { value: "social-media", label: "Social Media" },
  { value: "cold-call", label: "Cold Call" },
  { value: "other", label: "Lainnya" },
];

export const genderOptions: Select[] = [
  { value: "L", label: "Laki-laki" },
  { value: "P", label: "Perempuan" },
];

export const companyOptions: Select[] = [
  { value: "rs-mata-surabaya", label: "RS Mata Surabaya" },
  { value: "rsud-dr-soetomo", label: "RSUD Dr. Soetomo" },
  { value: "rs-siloam-surabaya", label: "RS Siloam Surabaya" },
];

export const projectOptions: Select[] = [
  { value: "PRJ-2026-001", label: "Pengadaan CT Scan 128 Slice" },
  { value: "PRJ-2026-002", label: "Upgrade MRI System" },
  { value: "PRJ-2026-003", label: "Pengadaan USG POC" },
  { value: "PRJ-2026-004", label: "Maintenance Cathlab" },
];

export interface CompanyProject {
  id: string;
  name: string;
  stage: string;
  value: number;
}

export interface InstalledProduct {
  product: string;
  serialNumber: string;
  installedAt: string;
  status: string;
}

export interface CompanyDetail {
  name: string;
  type: string;
  address: string;
  phone: string;
  website: string;
  projects: CompanyProject[];
  installedProducts: InstalledProduct[];
}

export const companyDetails: Record<string, CompanyDetail> = {
  "RS Mata Surabaya": {
    name: "RS Mata Surabaya",
    type: "Rumah Sakit Khusus Mata",
    address: "Jl. Raya Darmo, Surabaya, Jawa Timur",
    phone: "(031) 555-0188",
    website: "https://example.com/rs-mata-surabaya",
    projects: [
      {
        id: "PRJ-2026-003",
        name: "Pengadaan USG POC",
        stage: "Proposal",
        value: 625000000,
      },
      {
        id: "PRJ-2025-018",
        name: "Pengadaan OCT",
        stage: "Closed Won",
        value: 2500000000,
      },
    ],
    installedProducts: [
      {
        product: "OCT",
        serialNumber: "OCT-240018",
        installedAt: "15 Jan 2025",
        status: "Aktif",
      },
      {
        product: "Fundus Camera",
        serialNumber: "FC-230112",
        installedAt: "10 Nov 2023",
        status: "Aktif",
      },
    ],
  },
  "RSUD Dr. Soetomo": {
    name: "RSUD Dr. Soetomo",
    type: "Rumah Sakit Pemerintah",
    address: "Jl. Mayjen Prof. Dr. Moestopo, Surabaya, Jawa Timur",
    phone: "(031) 550-1078",
    website: "https://example.com/rsud-dr-soetomo",
    projects: [
      {
        id: "PRJ-2026-001",
        name: "Pengadaan CT Scan 128 Slice",
        stage: "Negotiation",
        value: 8500000000,
      },
      {
        id: "PRJ-2026-004",
        name: "Maintenance Cathlab",
        stage: "Qualification",
        value: 1250000000,
      },
      {
        id: "PRJ-2025-011",
        name: "Pengadaan MRI System",
        stage: "Closed Won",
        value: 15000000000,
      },
    ],
    installedProducts: [
      {
        product: "MRI System",
        serialNumber: "MRI-250011",
        installedAt: "22 Agu 2025",
        status: "Aktif",
      },
      {
        product: "C-Arm",
        serialNumber: "CA-220091",
        installedAt: "03 Mar 2022",
        status: "Perawatan",
      },
    ],
  },
  "RS Siloam Surabaya": {
    name: "RS Siloam Surabaya",
    type: "Rumah Sakit Swasta",
    address: "Jl. Raya Gubeng, Surabaya, Jawa Timur",
    phone: "(031) 503-1333",
    website: "https://example.com/rs-siloam-surabaya",
    projects: [
      {
        id: "PRJ-2026-002",
        name: "Upgrade MRI System",
        stage: "Proposal",
        value: 15000000000,
      },
      {
        id: "PRJ-2025-022",
        name: "Pengadaan Patient Monitor",
        stage: "Closed Won",
        value: 1800000000,
      },
    ],
    installedProducts: [
      {
        product: "Patient Monitor",
        serialNumber: "PM-250022",
        installedAt: "18 Des 2025",
        status: "Aktif",
      },
    ],
  },
};
