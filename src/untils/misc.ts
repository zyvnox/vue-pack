export function setUID(): string {
  return Math.random().toString(36).substring(2, 9)
}

export function isSameMessage(a: string | string[] | undefined, b: string | string[]): boolean {
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) return false
    for (let i = 0; i < a.length; i++) if (a[i] !== b[i]) return false
    return true
  }
  return a === b
}

export function hasAnyError(val: unknown): boolean {
  if (Array.isArray(val)) return val.some(hasAnyError)
  if (val && typeof val === 'object')
    return Object.values(val as Record<string, unknown>).some(hasAnyError)
  return typeof val === 'string' ? val.trim().length > 0 : false
}
