import { useLanguage } from '../i18n/LanguageContext'

export function Solutions() {
  const { t } = useLanguage()

  return (
    <section className="py-14 sm:py-16" id="solutions">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-base font-semibold tracking-wide text-accent-600 uppercase">
          {t.solutions.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          {t.solutions.title}
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {t.solutions.items.map((solution) => (
            <article key={solution.title} className="surface-card rounded-2xl p-5 sm:p-6">
              <h3 className="text-xl font-semibold text-navy-900 sm:text-2xl">{solution.title}</h3>
              {'note' in solution && solution.note ? (
                <p className="mt-2 text-sm font-medium text-accent-700 sm:text-base">
                  {solution.note}
                </p>
              ) : null}
              <ul className="mt-4 space-y-2">
                {solution.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-base text-navy-700">
                    <span
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent-600"
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
