import { Button } from '../components/Button'
import { useLanguage } from '../i18n/LanguageContext'

export function CustomDevelopment() {
  const { t } = useLanguage()

  return (
    <section className="py-14 sm:py-16" id="custom">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-base font-semibold tracking-wide text-accent-600 uppercase">
          {t.custom.eyebrow}
        </p>
        <h2 className="mt-2 max-w-3xl text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          {t.custom.title}
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-navy-600">{t.custom.sub}</p>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-navy-900">{t.custom.examplesTitle}</h3>
          <ul className="mt-4 flex flex-wrap gap-2.5">
            {t.custom.examples.map((example) => (
              <li
                key={example}
                className="surface-card rounded-xl px-4 py-2 text-base font-medium text-navy-800"
              >
                {example}
              </li>
            ))}
          </ul>
        </div>

        <h3 className="mt-10 text-lg font-semibold text-navy-900">{t.custom.pathsTitle}</h3>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {t.custom.paths.map((path, index) => (
            <article key={path.title} className="surface-card rounded-2xl p-5 sm:p-6">
              <span className="text-2xl font-semibold text-accent-600">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h4 className="mt-3 text-lg font-semibold text-navy-900">{path.title}</h4>
              <p className="mt-2 text-base text-navy-600">{path.detail}</p>
            </article>
          ))}
        </div>

        <div className="mt-8">
          <Button href="#contact" size="lg">
            {t.custom.cta}
          </Button>
        </div>
      </div>
    </section>
  )
}
