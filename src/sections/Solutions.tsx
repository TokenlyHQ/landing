import { useLanguage } from '../i18n/LanguageContext'

export function Solutions() {
  const { t } = useLanguage()

  return (
    <section className="py-14 sm:py-16" id="solutions">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-sm font-semibold tracking-wide text-accent-600 uppercase">
          {t.solutions.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
          {t.solutions.title}
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.solutions.items.map((solution) => (
            <article key={solution.title} className="surface-card rounded-2xl p-5">
              <h3 className="text-lg font-semibold text-navy-900">{solution.title}</h3>
              {'note' in solution && solution.note ? (
                <p className="mt-2 text-xs font-medium text-accent-700">{solution.note}</p>
              ) : null}
              <ul className="mt-4 space-y-1.5">
                {solution.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm text-navy-700">
                    <span
                      className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600"
                      aria-hidden
                    />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
