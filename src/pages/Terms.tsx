import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { brand } from '../config/brand'
import { useLanguage } from '../i18n/LanguageContext'

export function Terms() {
  const { t } = useLanguage()

  useEffect(() => {
    document.title = `${t.terms.title} · ${brand.name}`
    return () => {
      document.title = `${brand.name} · ${t.hero.headline}`
    }
  }, [t])

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6 lg:px-8">
      <p className="text-sm font-medium text-accent-600">
        <Link to="/" className="hover:underline">
          ← {t.terms.back}
        </Link>
      </p>
      <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-navy-900">
        {t.terms.title}
      </h1>
      <p className="mt-3 text-sm text-navy-500">{t.terms.updated}</p>

      <div className="mt-8 space-y-6 text-base leading-relaxed text-navy-700">
        <p>
          These terms govern use of the {brand.name} website. By using this site, you agree to these
          terms.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">Website purpose</h2>
        <p>
          This website describes our custom software services for hospitals, pharmacies,
          pharmaceutical businesses and other organisations. Product interface mockups are
          illustrations of possible capabilities, not a warranty that every feature is already
          deployed for every customer.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">No professional advice</h2>
        <p>
          Content on this site is general information about our services. It is not medical, legal
          or regulatory advice. Engagement terms for software projects are set out separately in a
          proposal or agreement.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">Accuracy</h2>
        <p>
          We aim to keep information accurate, but features, deployment options and availability may
          change. Project scope is confirmed during consultation.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">Acceptable use</h2>
        <p>
          Do not misuse the contact form, attempt to disrupt the site, or submit unlawful or
          misleading information.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">Limitation of liability</h2>
        <p>
          To the fullest extent permitted by law, {brand.name} is not liable for indirect or
          consequential losses arising from use of this website. Software delivery obligations apply
          only under a signed commercial agreement.
        </p>
        <h2 className="font-display text-xl font-semibold text-navy-900">Contact</h2>
        <p>
          Questions about these terms can be sent
          {brand.hasEmail ? (
            <>
              {' '}
              to{' '}
              <a href={brand.mailto} className="text-accent-700 hover:underline">
                {brand.email}
              </a>
            </>
          ) : (
            ' through the contact options on this website'
          )}
          .
        </p>
      </div>
    </main>
  )
}
