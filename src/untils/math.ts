/**
 * Menghitung Faktor Persekutuan Terbesar (FPB) atau Greatest Common Divisor (GCD).
 * Fungsi ini penting untuk menyederhanakan pecahan atau rasio.
 * @param a - Angka pertama.
 * @param b - Angka kedua.
 * @returns FPB dari a dan b.
 */
export function gcd(a: number, b: number): number {
  a = Math.abs(a)
  b = Math.abs(b)
  while (b !== 0) {
    const t = a % b
    a = b
    b = t
  }
  return a || 1 // Mengembalikan 1 jika hasilnya 0 untuk menghindari rasio 0:0
}

/**
 * Menyederhanakan lebar dan tinggi ke rasio terkecil dalam bentuk angka.
 * Contoh: simplifyRatio(1920, 1080) akan menghasilkan { w: 16, h: 9 }
 * @param w - Lebar (width).
 * @param h - Tinggi (height).
 * @returns Objek yang berisi lebar dan tinggi yang telah disederhanakan.
 */
export function simplifyRatio(w: number, h: number): { w: number; h: number } {
  if (w === 0 || h === 0) {
    return { w, h }
  }
  const d = gcd(w, h)
  return { w: Math.round(w / d), h: Math.round(h / d) }
}

/**
 * Mendapatkan string rasio yang paling sesuai.
 * Fungsi ini akan mencoba mencocokkan dengan rasio umum (16:9, 4:3, dll.).
 * Jika tidak ada yang cocok, fungsi akan mengembalikan rasio dinamis yang paling sederhana.
 * @param w - Lebar (width).
 * @param h - Tinggi (height).
 * @returns String rasio, contoh: "16:9" atau "20:3".
 */
export function getCommonRatio(w: number, h: number): string {
  // Menghindari pembagian dengan nol
  if (h === 0) {
    return `${w}:0`
  }

  const ratioValue = w / h
  const commonRatios: Record<string, number> = {
    '16:9': 16 / 9,
    '4:3': 4 / 3,
    '3:2': 3 / 2,
    '1:1': 1,
    '21:9': 21 / 9,
  }

  // Toleransi untuk pencocokan, karena perhitungan desimal tidak selalu presisi.
  const tolerance = 0.01

  for (const [label, value] of Object.entries(commonRatios)) {
    if (Math.abs(ratioValue - value) < tolerance) {
      return label // KEMBALIKAN RASIO UMUM JIKA COCOK
    }
  }

  // JIKA TIDAK ADA RASIO UMUM YANG COCOK, hitung rasio dinamisnya.
  const simplified = simplifyRatio(w, h)
  return `${simplified.w}:${simplified.h}`
}
