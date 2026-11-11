import { useLanguage } from '../i18n/LanguageContext'

export function HowWeWork() {
  const { t } = useLanguage()

  return (
    <section className="py-14 sm:py-16" id="about">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-sm font-semibold tracking-wide text-accent-600 uppercase">
          {t.process.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
          {t.process.title}
        </h2>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {t.process.steps.map((step, index) => (
            <li key={step} className="surface-card rounded-2xl px-4 py-4">
              <span className="text-xl font-semibold text-accent-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="mt-2 text-sm font-semibold text-navy-900">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
