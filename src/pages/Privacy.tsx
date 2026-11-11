import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../config/brand'
import { useLanguage } from '../i18n/LanguageContext'

export function Privacy() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = `${t.privacy.title} · ${brand.name}`
    return () => {
      document.title = `${brand.name} · ${t.hero.headline}`
    }
  }, [t])

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-accent-600">
        <Link to="/" className="hover:underline">
          ← {t.privacy.back}
        </Link>
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy-900">
        {t.privacy.title}
      </h1>
      <p className="mt-3 text-sm text-navy-500">{t.privacy.updated}</p>

      <div className="prose-navy mt-8 space-y-6 text-base leading-relaxed text-navy-700">
        <p>
          {brand.name} (&quot;we&quot;, &quot;us&quot;) builds custom healthcare and business
          software. This policy explains how we handle information submitted through this website.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">Information we collect</h2>
        <p>
          When you use the consultation form, you may provide your name, organisation, phone number,
          email address and a short description of your needs. If you contact us by email or
          WhatsApp, we receive the information you choose to send.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">How we use information</h2>
        <p>
          We use enquiry details only to respond to your request, discuss requirements and provide
          related services. We do not sell personal information.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">Storage and retention</h2>
        <p>
          Enquiry data may be stored in our email, messaging tools or a configured form backend
          (such as Formspree). We retain it only as long as needed to handle your request and
          maintain ordinary business records.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">Third-party services</h2>
        <p>
          If a form backend or hosting provider is configured, those services process submissions
          under their own terms. This marketing site may be served by a static host that logs
          standard request metadata.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">Contact</h2>
        <p>
          For privacy questions, contact us
          {brand.hasEmail ? (
            <>
              {' '}
              at{' '}
              <a href={brand.mailto} className="text-accent-700 hover:underline">
                {brand.email}
              </a>
            </>
          ) : (
            ' using the channels listed on the contact section of this website'
          )}
          .
        </p>
      </div>
    </main>
  )
}
