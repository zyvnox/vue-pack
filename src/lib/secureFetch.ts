// lib/secureFetch.ts
import type { errorMessage } from '../configs/types/submit-options.types'

export type AuthType = 'cookie' | 'bearer' | 'none' | 'custom'

export interface SecureFetchOptions extends RequestInit {
  authType?: AuthType
  token?: string
  customHeaders?: Record<string, string>
}

/**
 * Custom Error class for secureFetch HTTP errors
 */
export class SecureFetchError extends Error implements errorMessage {
  status: number
  response?: Response
  errorBody?: any

  constructor(status: number, message: string, response?: Response, errorBody?: any) {
    super(message)
    this.name = 'SecureFetchError'
    this.status = status
    this.response = response
    this.errorBody = errorBody
    Object.setPrototypeOf(this, SecureFetchError.prototype)
  }
}

/**
 * Authenticated HTTP request wrapper with support for cookies, Bearer tokens, and custom headers
 * @param input URL string, Request object, or URL instance
 * @param options SecureFetchOptions including authType, token, and RequestInit options
 * @returns Standard fetch Response
 * @throws SecureFetchError on non-2xx status code
 */
export async function secureFetch(
  input: RequestInfo | URL,
  options: SecureFetchOptions = {},
): Promise<Response> {
  const { authType = 'cookie', token, customHeaders, ...init } = options

  const headers = new Headers(init.headers || {})

  if (authType === 'bearer' && token) {
    headers.set('Authorization', `Bearer ${token}`)
  } else if (authType === 'custom' && customHeaders) {
    for (const [key, value] of Object.entries(customHeaders)) {
      headers.set(key, value)
    }
  }

  const response = await fetch(input, {
    ...init,
    headers,
    credentials: authType === 'cookie' ? 'include' : 'omit',
  })

  if (!response.ok) {
    let errorBody: any = null
    try {
      errorBody = await response.json()
    } catch {
      errorBody = null
    }

    const message =
      errorBody?.message ??
      errorBody?.error ??
      errorBody?.errors ??
      response.statusText ??
      'Unknown error'

    throw new SecureFetchError(response.status, String(message), response, errorBody)
  }

  return response
}

/**
 * Convenient helper to fetch and parse JSON directly with TypeScript generics
 * @param input URL string or Request object
 * @param options SecureFetchOptions
 * @returns Parsed JSON body typed as T
 */
export async function secureFetchJson<T = any>(
  input: RequestInfo | URL,
  options: SecureFetchOptions = {},
): Promise<T> {
  const response = await secureFetch(input, options)
  return (await response.json()) as T
}
