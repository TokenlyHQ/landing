import { useLanguage } from '../i18n/LanguageContext'

export function HowWeWork() {
  const { t } = useLanguage()

  return (
    <section className="py-14 sm:py-16" id="about">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-base font-semibold tracking-wide text-accent-600 uppercase">
          {t.process.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          {t.process.title}
        </h2>

        <ol className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {t.process.steps.map((step, index) => (
            <li key={step.title} className="surface-card rounded-2xl px-4 py-5">
              <span className="text-2xl font-semibold text-accent-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 text-base font-semibold text-navy-900">{step.title}</h3>
              <p className="mt-1.5 text-base text-navy-600">{step.detail}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
