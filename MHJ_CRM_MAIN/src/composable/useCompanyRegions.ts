import { ref } from "vue";

import { api } from "@/api";
import { isRecord, pickString } from "@/api/response";
import {
  cityOptionsByProvince as baseCityOptionsByProvince,
  provinceOptions as baseProvinceOptions,
} from "@/core/data/contactCrm";
import type { Select } from "@/types/common";

interface CompanyAddress {
  province: string;
  city: string;
}

/**
 * GET /api/company (list) tidak mengembalikan province/city (cuma Address gabungan).
 * Data province/city asli cuma ada di GET /api/company/fetchcompanybyid?id=<id>,
 * jadi diambil per-company saat dibutuhkan (bukan sekali ambil semua).
 */
const addressCache = new Map<string, CompanyAddress | null>();
const pendingFetches = new Map<string, Promise<CompanyAddress | null>>();

/**
 * Opsi dropdown dimulai dari daftar statis (core/data/contactCrm), lalu makin lama
 * makin lengkap setiap kali ketemu provinsi/kota real dari data company.
 */
const provinceOptions = ref<Select[]>([...baseProvinceOptions]);
const cityOptionsByProvince = ref<Record<string, Select[]>>(
  Object.fromEntries(
    Object.entries(baseCityOptionsByProvince).map(([key, value]) => [key, [...value]]),
  ),
);

function rememberOptions(address: CompanyAddress) {
  const province = address.province.trim();
  const city = address.city.trim();

  if (province && !provinceOptions.value.some((option) => option.label === province)) {
    provinceOptions.value = [...provinceOptions.value, { value: province, label: province }];
  }

  if (province && city) {
    const bucket = cityOptionsByProvince.value[province] ?? [];
    if (!bucket.some((option) => option.label === city)) {
      cityOptionsByProvince.value = {
        ...cityOptionsByProvince.value,
        [province]: [...bucket, { value: city, label: city }],
      };
    }
  }
}

/** Menemukan satu row company pada response detail yang mungkin dibungkus companies/data/dsb. */
function findCompanyRecord(payload: unknown, depth = 0): Record<string, unknown> | null {
  if (depth > 4) return null;

  if (Array.isArray(payload)) {
    for (const item of payload) {
      const found = findCompanyRecord(item, depth + 1);
      if (found) return found;
    }
    return null;
  }

  if (!isRecord(payload)) return null;

  const companyFields = ["id", "ID", "company_name", "Company Name", "name"];
  if (companyFields.some((field) => field in payload)) return payload;

  for (const key of ["company", "companies", "data", "item"]) {
    const found = findCompanyRecord((payload as Record<string, unknown>)[key], depth + 1);
    if (found) return found;
  }

  return null;
}

async function fetchCompanyAddress(companyId: string): Promise<CompanyAddress | null> {
  if (addressCache.has(companyId)) return addressCache.get(companyId) ?? null;
  if (pendingFetches.has(companyId)) return pendingFetches.get(companyId)!;

  const request = (async () => {
    try {
      const response = await api.getbydata("company/fetchcompanybyid", { id: companyId });
      const raw = findCompanyRecord(response.data);
      if (!raw) {
        addressCache.set(companyId, null);
        return null;
      }

      const address: CompanyAddress = {
        province: pickString(raw, "Province", "province"),
        city: pickString(raw, "City", "city"),
      };
      addressCache.set(companyId, address);
      rememberOptions(address);
      return address;
    } catch (error) {
      console.error("Gagal memuat alamat company.", error);
      addressCache.delete(companyId);
      return null;
    } finally {
      pendingFetches.delete(companyId);
    }
  })();

  pendingFetches.set(companyId, request);
  return request;
}

/**
 * Dropdown Provinsi/Kota (statis + temuan real dari data company),
 * plus lookup alamat satu company (untuk auto-fill saat company dipilih).
 */
export function useCompanyRegions() {
  async function getCompanyAddress(companyId: string | number | null | undefined) {
    if (!companyId) return null;
    const address = await fetchCompanyAddress(String(companyId));
    if (!address || (!address.province && !address.city)) return null;
    return address;
  }

  return { provinceOptions, cityOptionsByProvince, getCompanyAddress };
}
