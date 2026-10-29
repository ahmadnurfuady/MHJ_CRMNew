import type { Select } from "@/types/common";

export const genderOptions: Select[] = [
  { value: "Laki-laki", label: "Laki-laki" },
  { value: "Perempuan", label: "Perempuan" },
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
  email: string;
  projects: CompanyProject[];
  installedProducts: InstalledProduct[];
}
