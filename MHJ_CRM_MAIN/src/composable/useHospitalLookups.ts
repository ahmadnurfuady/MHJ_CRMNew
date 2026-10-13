import { ref, type Ref } from "vue";

import { api } from "@/api";
import { extractList, isRecord, pickString, type Dict } from "@/api/response";
import type { Select } from "@/types/common";

/**
 * Nama kolom asli tiap endpoint belum terkonfirmasi (butuh token untuk dicoba manual),
 * jadi daftar kandidat dibuat seluas mungkin: id/kode umum di satu sisi, dan nama/label
 * umum di sisi lain, ditambah nama kolom yang kemungkinan besar sama dengan nama endpoint-nya
 * sendiri (mis. "jenis", "tipe", "penyelenggara", "tipe_marketing").
 */
function pickOptionValue(raw: Dict): string {
  return pickString(raw, "id", "value", "kode", "code", "kd", "ID", "Id");
}

function pickOptionLabel(raw: Dict): string {
  return pickString(
    raw,
    "nama",
    "name",
    "label",
    "title",
    "jenis",
    "jenis_rs",
    "tipe",
    "tipe_rs",
    "penyelenggara",
    "tipe_marketing",
    "tipe_marketing_go500",
    "keterangan",
    "deskripsi",
  );
}

function toOptions(payload: unknown): Select[] {
  const { items } = extractList(payload);
  return items
    .filter(isRecord)
    .map((raw) => {
      const label = pickOptionLabel(raw);
      const value = pickOptionValue(raw) || label;
      return { value, label };
    })
    .filter((option) => option.label);
}

interface LookupState {
  endpoint: string;
  options: Ref<Select[]>;
  loaded: boolean;
  promise: Promise<void> | null;
}

function createLookup(endpoint: string): LookupState {
  return { endpoint, options: ref<Select[]>([]), loaded: false, promise: null };
}

const lookups = {
  jenis: createLookup("company/jenisrs"),
  tipe: createLookup("company/tipers"),
  penyelenggara: createLookup("company/penyelenggarars"),
  tipeMarketing: createLookup("company/tipemarketing"),
};

function loadLookup(key: keyof typeof lookups): Promise<void> {
  const state = lookups[key];
  if (state.loaded) return Promise.resolve();
  if (state.promise) return state.promise;

  state.promise = (async () => {
    try {
      const response = await api.get(state.endpoint);
      state.options.value = toOptions(response.data);
      state.loaded = true;
    } catch (error) {
      console.error(`Gagal memuat ${state.endpoint}.`, error);
    } finally {
      state.promise = null;
    }
  })();

  return state.promise;
}

/**
 * Dropdown pencarian untuk Jenis/Tipe/Penyelenggara/Tipe Marketing G0500 Rumah Sakit,
 * masing-masing dari GET /api/company/{jenisrs,tipers,penyelenggarars,tipemarketing}.
 */
export function useHospitalLookups() {
  function loadHospitalLookups() {
    return Promise.all([
      loadLookup("jenis"),
      loadLookup("tipe"),
      loadLookup("penyelenggara"),
      loadLookup("tipeMarketing"),
    ]);
  }

  return {
    jenisOptions: lookups.jenis.options,
    tipeOptions: lookups.tipe.options,
    penyelenggaraOptions: lookups.penyelenggara.options,
    tipeMarketingOptions: lookups.tipeMarketing.options,
    loadHospitalLookups,
  };
}
