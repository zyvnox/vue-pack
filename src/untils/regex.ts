import type { DateOnly, TimeOnly, DateTimeString } from '..'

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
export const DATE_REGEX = /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/
export const TIME_REGEX = /^([01]\d|2[0-3]):([0-5]\d)$/
export const telRegex = /^[+]?[\d\s-]{7,15}$/
export const DATETIME_REGEX =
  /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])T([01]\d|2[0-3]):([0-5]\d)(:[0-5]\d)?$/

export function toDateOnly(value: string): DateOnly {
  if (!DATE_REGEX.test(value)) {
    throw new Error(`Invalid DateOnly format: ${value}. Use YYYY-MM-DD`)
  }
  return value as DateOnly
}

export function toTimeOnly(value: string): TimeOnly {
  if (!TIME_REGEX.test(value)) {
    throw new Error(`Invalid TimeOnly format: ${value}. Use HH:mm`)
  }
  return value as TimeOnly
}

export function toDateTimeString(value: string): DateTimeString {
  if (!DATETIME_REGEX.test(value)) {
    throw new Error(`Invalid DateTimeString format: ${value}. Use ISO YYYY-MM-DDTHH:mm[:ss]`)
  }
  return value as DateTimeString
}
