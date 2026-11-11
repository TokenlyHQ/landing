import { useLanguage } from '../i18n/LanguageContext'

export function WhyUs() {
  const { t } = useLanguage()

  return (
    <section className="py-14 sm:py-16">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-sm font-semibold tracking-wide text-accent-600 uppercase">
          {t.why.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
          {t.why.title}
        </h2>

        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {t.why.items.map((item) => (
            <li
              key={item}
              className="surface-card rounded-2xl px-4 py-3 text-sm font-medium text-navy-800"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
