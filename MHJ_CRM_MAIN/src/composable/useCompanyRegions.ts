import { ref } from "vue";

import { api } from "@/api";
import { extractList, isRecord, pickString, type Dict } from "@/api/response";
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

// Nama kolom dikonfirmasi dari response nyata:
// GET /api/master-data/provinsi -> kd_provinsi, nm_provinsi, nm_Province.
// GET /api/master-data/kotakabupaten -> kd_kota_kabupaten, nm_kota_kabupaten, kd_provinsi, nm_city.
function pickId(raw: Dict): string {
  // Kota dicek lebih dulu: baris kotakabupaten ikut membawa kd_provinsi juga (FK ke induk),
  // jadi kode miliknya sendiri (kd_kota_kabupaten dkk.) harus menang supaya tidak tertukar.
  return pickString(
    raw,
    "kd_kota_kabupaten",
    "kd_kotakabupaten",
    "kd_kota",
    "kd_kabupaten",
    "kd_provinsi",
    "id",
    "id_provinsi",
    "id_kota",
    "id_kabupaten",
    "kode",
    "kode_provinsi",
    "kode_kota",
    "value",
  );
}

function pickName(raw: Dict): string {
  // Sama seperti pickId: kota dicek lebih dulu, karena baris kotakabupaten kemungkinan
  // ikut membawa nm_provinsi/nm_Province (nama induk) selain nama kotanya sendiri.
  return pickString(
    raw,
    "nm_kota_kabupaten",
    "nm_kotakabupaten",
    "nm_city",
    "nm_kota",
    "nm_kabupaten",
    "nm_provinsi",
    "nm_Province",
    "nama",
    "nama_provinsi",
    "nama_kota",
    "nama_kabupaten",
    "name",
    "label",
  );
}

function pickProvinceRefId(raw: Dict): string {
  return pickString(raw, "kd_provinsi", "id_provinsi", "provinsi_id", "kode_provinsi");
}

function pickProvinceRefName(raw: Dict): string {
  return pickString(raw, "nm_provinsi", "nm_Province", "nama_provinsi", "provinsi", "province");
}

let regionsLoaded = false;
let regionsPromise: Promise<void> | null = null;

/**
 * GET /api/master-data/provinsi & /api/master-data/kotakabupaten.
 * Menggantikan dropdown statis dengan data resmi begitu endpoint berhasil dimuat;
 * jika gagal, dropdown statis (core/data/contactCrm) tetap dipakai sebagai cadangan.
 */
function loadRegionsFromApi(): Promise<void> {
  if (regionsLoaded) return Promise.resolve();
  if (regionsPromise) return regionsPromise;

  regionsPromise = (async () => {
    try {
      const [provinsiRes, kotaRes] = await Promise.all([
        api.get("master-data/provinsi"),
        api.get("master-data/kotakabupaten"),
      ]);
      const provinsiItems = extractList(provinsiRes.data).items.filter(isRecord);
      const kotaItems = extractList(kotaRes.data).items.filter(isRecord);
      if (!provinsiItems.length) return;

      const provinceIdToName = new Map<string, string>();
      const nextProvinceOptions: Select[] = provinsiItems
        .map((raw) => {
          const id = pickId(raw);
          const nama = pickName(raw);
          if (nama) provinceIdToName.set(id, nama);
          return { value: id || nama, label: nama };
        })
        .filter((option) => option.label);
      if (!nextProvinceOptions.length) return;

      const nextCityMap: Record<string, Select[]> = {};
      kotaItems.forEach((raw) => {
        const cityName = pickName(raw);
        if (!cityName) return;
        const provinceName =
          pickProvinceRefName(raw) || provinceIdToName.get(pickProvinceRefId(raw)) || "";
        if (!provinceName) return;
        const bucket = nextCityMap[provinceName] ?? [];
        bucket.push({ value: pickId(raw) || cityName, label: cityName });
        nextCityMap[provinceName] = bucket;
      });

      provinceOptions.value = nextProvinceOptions;
      if (Object.keys(nextCityMap).length) cityOptionsByProvince.value = nextCityMap;
      regionsLoaded = true;
    } catch (error) {
      console.warn("Gagal memuat provinsi/kotakabupaten dari master data, memakai data lokal.", error);
    } finally {
      regionsPromise = null;
    }
  })();

  return regionsPromise;
}

/**
 * Dropdown Provinsi/Kota (dari master data, dengan statis sebagai cadangan),
 * plus lookup alamat satu company (untuk auto-fill saat company dipilih).
 */
export function useCompanyRegions() {
  async function getCompanyAddress(companyId: string | number | null | undefined) {
    if (!companyId) return null;
    const address = await fetchCompanyAddress(String(companyId));
    if (!address || (!address.province && !address.city)) return null;
    return address;
  }

  return {
    provinceOptions,
    cityOptionsByProvince,
    getCompanyAddress,
    loadRegions: loadRegionsFromApi,
  };
}
