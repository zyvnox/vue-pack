// util generic
export type Branded<T, B extends string> = T & { __brand: B }

// YYYY-MM-DD
export type DateOnly = Branded<
  `${number}${number}${number}${number}-${number}${number}-${number}${number}`,
  'DateOnly'
>

// HH:mm
export type TimeOnly = Branded<`${number}${number}:${number}${number}`, 'TimeOnly'>

// (YYYY-MM-DDTHH:mm:ss)
type DateTimeBase =
  `${number}${number}${number}${number}-${number}${number}-${number}${number}T${number}${number}:${number}${number}:${number}${number}`

// Definisikan tipe untuk offset
type TimezoneOffset = `${'+' | '-'}${number}${number}:${number}${number}`

export type DateTimeString = Branded<
  | DateTimeBase // Lokal tanpa offset (Implisit)
  | `${DateTimeBase}Z` // UTC
  | `${DateTimeBase}.${string}Z` // UTC dengan milidetik
  | `${DateTimeBase}${TimezoneOffset}` // <-- TAMBAHAN BARU (Lokal dengan offset)
  | `${DateTimeBase}.${string}${TimezoneOffset}`, // <-- TAMBAHAN BARU (Lokal dengan offset + milidetik)
  'DateTimeString'
>
