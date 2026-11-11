import { useState, type ChangeEvent, type FormEvent } from 'react'
import { brand } from '../config/brand'
import { useLanguage } from '../i18n/LanguageContext'
import { Button } from './Button'

type FormState = {
  name: string
  organization: string
  phone: string
  email: string
  solution: string
  description: string
}

type FormErrors = Partial<Record<keyof FormState, string>>

const initialState: FormState = {
  name: '',
  organization: '',
  phone: '',
  email: '',
  solution: '',
  description: '',
}

export function ContactForm() {
  const { t } = useLanguage()
  const form = t.contact.form
  const [values, setValues] = useState<FormState>(initialState)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [statusMessage, setStatusMessage] = useState('')

  const update =
    (field: keyof FormState) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }

  function validate(next: FormState): FormErrors {
    const nextErrors: FormErrors = {}
    if (!next.name.trim() || next.name.trim().length < 2) nextErrors.name = form.errors.name
    if (!next.organization.trim()) nextErrors.organization = form.errors.organization
    if (!/^[6-9]\d{9}$/.test(next.phone.replace(/\s+/g, ''))) nextErrors.phone = form.errors.phone
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) nextErrors.email = form.errors.email
    if (!next.solution) nextErrors.solution = form.errors.solution
    if (!next.description.trim() || next.description.trim().length < 20) {
      nextErrors.description = form.errors.description
    }
    return nextErrors
  }

  function buildMessage(next: FormState) {
    return [
      `New consultation request from ${next.name}`,
      `Organisation: ${next.organization}`,
      `Phone: ${next.phone}`,
      `Email: ${next.email}`,
      `Solution: ${next.solution}`,
      '',
      next.description.trim(),
    ].join('\n')
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) {
      setStatus('error')
      setStatusMessage(form.errors.fix)
      return
    }

    setStatus('submitting')
    setStatusMessage('')
    const message = buildMessage(values)

    try {
      window.open(
        `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(message)}`,
        '_blank',
        'noopener,noreferrer',
      )
      setStatus('success')
      setStatusMessage(form.successWhatsapp)
    } catch {
      setStatus('error')
      setStatusMessage(form.errors.sendFail)
    }
  }

  const fieldClass =
    'mt-1.5 w-full rounded-xl border border-[rgba(15,15,20,0.08)] bg-white px-3.5 py-2.5 text-sm text-navy-900 transition placeholder:text-[#9298a8] focus:border-accent-600 focus:ring-2 focus:ring-accent-50'
  const errorClass = 'mt-1.5 text-xs font-medium text-red-600'

  return (
    <form
      onSubmit={onSubmit}
      className="surface-card rounded-2xl p-5 sm:p-6"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-sm font-medium text-navy-800">
            {form.name}
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            value={values.name}
            onChange={update('name')}
            className={fieldClass}
            aria-invalid={Boolean(errors.name)}
          />
          {errors.name ? <p className={errorClass}>{errors.name}</p> : null}
        </div>

        <div>
          <label htmlFor="organization" className="text-sm font-medium text-navy-800">
            {form.organization}
          </label>
          <input
            id="organization"
            name="organization"
            autoComplete="organization"
            value={values.organization}
            onChange={update('organization')}
            className={fieldClass}
            aria-invalid={Boolean(errors.organization)}
          />
          {errors.organization ? <p className={errorClass}>{errors.organization}</p> : null}
        </div>

        <div>
          <label htmlFor="phone" className="text-sm font-medium text-navy-800">
            {form.phone}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="numeric"
            value={values.phone}
            onChange={update('phone')}
            className={fieldClass}
            aria-invalid={Boolean(errors.phone)}
          />
          {errors.phone ? <p className={errorClass}>{errors.phone}</p> : null}
        </div>

        <div>
          <label htmlFor="email" className="text-sm font-medium text-navy-800">
            {form.email}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update('email')}
            className={fieldClass}
            aria-invalid={Boolean(errors.email)}
          />
          {errors.email ? <p className={errorClass}>{errors.email}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="solution" className="text-sm font-medium text-navy-800">
            {form.solution}
          </label>
          <select
            id="solution"
            name="solution"
            value={values.solution}
            onChange={update('solution')}
            className={fieldClass}
            aria-invalid={Boolean(errors.solution)}
          >
            <option value="">{form.solutionPlaceholder}</option>
            {form.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {errors.solution ? <p className={errorClass}>{errors.solution}</p> : null}
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="description" className="text-sm font-medium text-navy-800">
            {form.description}
          </label>
          <textarea
            id="description"
            name="description"
            rows={3}
            value={values.description}
            onChange={update('description')}
            placeholder={form.descriptionPlaceholder}
            className={`${fieldClass} resize-y`}
            aria-invalid={Boolean(errors.description)}
          />
          {errors.description ? <p className={errorClass}>{errors.description}</p> : null}
        </div>
      </div>

      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? form.submitting : form.submit}
        </Button>
        <Button
          href={brand.whatsappUrl}
          variant="secondary"
          size="lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          {form.whatsapp}
        </Button>
        <Button href={brand.mailto} variant="ghost" size="lg">
          {form.emailUs}
        </Button>
      </div>

      {statusMessage ? (
        <p
          className={`mt-3 text-sm ${status === 'error' ? 'text-red-600' : 'text-navy-700'}`}
          role="status"
          aria-live="polite"
        >
          {statusMessage}
        </p>
      ) : null}
    </form>
  )
}
