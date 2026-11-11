import { useLanguage } from '../i18n/LanguageContext'

export function Problems() {
  const { t } = useLanguage()

  return (
    <section className="py-14 sm:py-16" id="problems">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-base font-semibold tracking-wide text-accent-600 uppercase">
          {t.problems.eyebrow}
        </p>
        <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          {t.problems.title}
        </h2>

        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {t.problems.items.map((item) => (
            <li
              key={item}
              className="surface-card flex items-start gap-3 rounded-2xl px-4 py-4 text-base font-medium text-navy-800"
            >
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-600" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
