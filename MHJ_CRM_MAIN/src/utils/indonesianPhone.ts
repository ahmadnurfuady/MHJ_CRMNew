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
