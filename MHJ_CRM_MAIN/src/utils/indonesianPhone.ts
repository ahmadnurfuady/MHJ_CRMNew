// Minimal 8 digit total (termasuk prefix). Prefix wajib: 08 atau 62.
const PHONE_MIN_DIGITS = 8;
const PHONE_INPUT_PATTERN = /^\d+$/;

/** Hanya izinkan digit pada input nomor telepon. */
export function sanitizeIndonesianPhoneInput(value: string): string {
  return value.replace(/\D/g, "");
}

/** Simpan nomor HP Indonesia dalam format lokal 08xxxxxxxxxx. */
export function normalizeIndonesianMobilePhone(value: string): string {
  const digits = value.replace(/\D/g, "");
  if (digits.startsWith("62")) return `0${digits.slice(2)}`;
  return digits;
}

/** Pecah isi telephone_1/telephone_2 menjadi daftar nomor individual tanpa duplikat. */
export function splitPhoneNumbers(
  ...values: Array<string | null | undefined>
): string[] {
  const seen = new Set<string>();
  const phones: string[] = [];

  values.forEach((value) => {
    String(value ?? "")
      .split(/[,;|\s\n]+/)
      .map((phone) => phone.trim())
      .filter(Boolean)
      .forEach((phone) => {
        const key = phone.replace(/\D/g, "");
        if (!key || seen.has(key)) return;
        seen.add(key);
        phones.push(phone);
      });
  });

  return phones;
}

/** Format internasional tanpa tanda + untuk tautan WhatsApp. */
export function toIndonesianWhatsAppNumber(value: string): string {
  const localPhone = normalizeIndonesianMobilePhone(value);
  return localPhone.startsWith("0") ? `62${localPhone.slice(1)}` : localPhone;
}

export function indonesianPhoneCallUrl(value: string): string {
  const whatsappNumber = toIndonesianWhatsAppNumber(value);
  return whatsappNumber ? `tel:+${whatsappNumber}` : "";
}

export function indonesianWhatsAppUrl(value: string): string {
  const whatsappNumber = toIndonesianWhatsAppNumber(value);
  return whatsappNumber ? `https://wa.me/${whatsappNumber}` : "";
}

export function indonesianMobilePhoneError(
  value: string,
  required = false,
): string {
  const phone = value.trim();
  if (!phone) return required ? "Nomor HP wajib diisi." : "";

  if (!PHONE_INPUT_PATTERN.test(phone)) {
    return "Nomor telepon hanya boleh berisi angka.";
  }

  // Prefix wajib: 08 atau 62.
  const hasValidPrefix =
    phone.startsWith("08") ||
    phone.startsWith("62");
  if (!hasValidPrefix) {
    return "Nomor telepon harus diawali 08 atau 62.";
  }

  // Minimal 8 digit total.
  if (phone.length < PHONE_MIN_DIGITS) {
    return `Nomor telepon minimal ${PHONE_MIN_DIGITS} digit.`;
  }

  return "";
}
