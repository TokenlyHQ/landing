import { useLanguage } from '../i18n/LanguageContext'

export function Problems() {
  const { t } = useLanguage()

  return (
    <section className="py-14 sm:py-16" id="problems">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-sm font-semibold tracking-wide text-accent-600 uppercase">
          {t.problems.eyebrow}
        </p>
        <h2 className="mt-2 max-w-2xl text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
          {t.problems.title}
        </h2>

        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {t.problems.items.map((item) => (
            <li
              key={item}
              className="surface-card flex items-start gap-2 rounded-2xl px-4 py-3 text-sm font-medium text-navy-800"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600" aria-hidden />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
