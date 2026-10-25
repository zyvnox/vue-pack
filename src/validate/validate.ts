// src/validate/validate.ts
import { ZodError } from 'zod'
import type { ZodType } from 'zod'

/**
 * Utility type to infer output type of a Zod schema or fallback to T
 */
export type InferSchema<T> = T extends ZodType<infer Output> ? Output : T

export interface ValidationSuccess<T> {
  success: true
  data: T
  error: null
}

export interface ValidationError {
  success: false
  data: null
  error: {
    message: string
    issues: ZodError['issues']
  }
}

export type ValidationResult<T> = ValidationSuccess<T> | ValidationError

/**
 * Validates data against a Zod schema synchronously
 * @param schema - The Zod schema to validate against
 * @param data - The data to validate
 * @returns The parsed data typed as T if validation succeeds
 * @throws Error with validation details if validation fails
 */
export function validate<T = any>(schema: ZodType<T>, data: unknown): T {
  try {
    return schema.parse(data)
  } catch (error) {
    if (error instanceof ZodError) {
      // In Zod v4+, use 'issues'
      const errorMessages = error.issues
        .map((issue) => {
          const path = issue.path.length > 0 ? issue.path.join('.') : 'root'
          return `${path}: ${issue.message}`
        })
        .join(', ')

      const err: any = new Error(`Validation failed: ${errorMessages}`)
      err.isValidationError = true
      err.status = 400
      err.statusCode = 400
      err.issues = error.issues
      throw err
    }

    // Re-throw non-Zod errors
    throw error
  }
}

/**
 * Safely validates data against a Zod schema without throwing
 * @param schema - The Zod schema to validate against
 * @param data - The data to validate
 * @returns Object with success flag and either typed data or error details
 */
export function safeValidate<T = any>(schema: ZodType<T>, data: unknown): ValidationResult<T> {
  const result = schema.safeParse(data)

  if (result.success) {
    return {
      success: true,
      data: result.data,
      error: null,
    }
  } else {
    const errorMessages = result.error.issues
      .map((issue) => {
        const path = issue.path.length > 0 ? issue.path.join('.') : 'root'
        return `${path}: ${issue.message}`
      })
      .join(', ')

    return {
      success: false,
      data: null,
      error: {
        message: `Validation failed: ${errorMessages}`,
        issues: result.error.issues,
      },
    }
  }
}
