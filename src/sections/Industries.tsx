import { useLanguage } from '../i18n/LanguageContext'

export function Industries() {
  const { t } = useLanguage()

  return (
    <section className="py-12" id="industries">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-sm font-semibold tracking-wide text-accent-600 uppercase">
          {t.industries.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy-900">
          {t.industries.title}
        </h2>
        <ul className="mt-6 flex flex-wrap gap-2">
          {t.industries.items.map((industry) => (
            <li key={industry} className="surface-card rounded-xl px-3 py-1.5 text-sm font-medium text-navy-800">
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
