export function validateEmail(value: string) {
  const result = {
    valid: false,
    errorMessage: '',
  }
  if (String(value).length == 0) {
    result.valid = false
    result.errorMessage = 'Email wajib diisi'
  } else if (
    String(value)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    result.valid = true
    result.errorMessage = ''
  } else {
    result.valid = false
    result.errorMessage = 'Format email tidak valid. Contoh: nama@domain.com'
  }
  return result
}

export function validateNonEmptyFields(params: {
  value: string
  minLength?: number
  errorMessage?: string
}) {
  const result = {
      valid: false,
      errorMessage: '',
    },
    minLengthVar = params.minLength || 1
  if (params.value.length == 0) {
    result.valid = false
    result.errorMessage = params?.errorMessage ? params?.errorMessage : `Kolom ini wajib diisi`
  } else if (params.value.length >= minLengthVar) {
    result.valid = true
    result.errorMessage = ''
  } else {
    result.valid = false
    result.errorMessage = `Kolom ini minimal harus berisi ${params.minLength} karakter`
  }
  return result
}
