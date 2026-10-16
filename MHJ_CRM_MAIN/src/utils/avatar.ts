const avatarPalette = [
  { background: "#eff8ff", color: "#0284c7" },
  { background: "#f7f3ff", color: "#7c3aed" },
  { background: "#fff3f8", color: "#db2777" },
  { background: "#f1fcf5", color: "#16a34a" },
  { background: "#fffaf0", color: "#d97706" },
  { background: "#fff6f0", color: "#ea580c" },
  { background: "#effbf9", color: "#0f766e" },
  { background: "#fff3f3", color: "#dc2626" },
] as const;

function hashSeed(seed: string | number): number {
  return String(seed)
    .trim()
    .toLocaleLowerCase("id-ID")
    .split("")
    .reduce((hash, character) => (hash * 31 + character.charCodeAt(0)) >>> 0, 0);
}

/** Menghasilkan warna avatar yang konsisten untuk nama/ID yang sama. */
export function avatarColorStyle(seed: string | number) {
  return avatarPalette[hashSeed(seed) % avatarPalette.length];
}

/** Inisial nama depan + belakang, dengan dukungan data lama berupa satu nama lengkap. */
export function personInitials(firstName?: string, lastName?: string): string {
  const firstWords = String(firstName ?? "").trim().split(/\s+/).filter(Boolean);
  const lastWords = String(lastName ?? "").trim().split(/\s+/).filter(Boolean);

  if (firstWords.length && lastWords.length) {
    return `${firstWords[0][0]}${lastWords[lastWords.length - 1][0]}`.toUpperCase();
  }

  const words = firstWords.length ? firstWords : lastWords;
  if (!words.length) return "?";
  if (words.length === 1) return words[0][0].toUpperCase();
  return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}
