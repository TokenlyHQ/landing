import { useLanguage } from '../i18n/LanguageContext'

export function Industries() {
  const { t } = useLanguage()

  return (
    <section className="py-12 sm:py-14" id="industries">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-base font-semibold tracking-wide text-accent-600 uppercase">
          {t.industries.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          {t.industries.title}
        </h2>
        <ul className="mt-7 flex flex-wrap gap-2.5">
          {t.industries.items.map((industry) => (
            <li
              key={industry}
              className="surface-card rounded-xl px-4 py-2 text-base font-medium text-navy-800"
            >
              {industry}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
