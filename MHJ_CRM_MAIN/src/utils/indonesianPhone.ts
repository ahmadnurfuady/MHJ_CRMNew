const INDONESIAN_MOBILE_PATTERN = /^08\d{8,11}$/;
const PHONE_INPUT_PATTERN = /^\+?\d+$/;

/** Hanya izinkan digit dan satu tanda + di awal input. */
export function sanitizeIndonesianPhoneInput(value: string): string {
  const hasLeadingPlus = value.trimStart().startsWith("+");
  const digits = value.replace(/\D/g, "");
  return `${hasLeadingPlus ? "+" : ""}${digits}`;
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
      .split(/[,;|\n]+/)
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

  const normalized = normalizeIndonesianMobilePhone(phone);
  const hasValidPrefix = phone.startsWith("+")
    ? phone.startsWith("+628")
    : phone.startsWith("08") || phone.startsWith("628");
  if (
    !PHONE_INPUT_PATTERN.test(phone) ||
    !hasValidPrefix ||
    !INDONESIAN_MOBILE_PATTERN.test(normalized)
  ) {
    return "Gunakan nomor HP Indonesia, contoh 081234567890 atau +6281234567890.";
  }

  return "";
}
