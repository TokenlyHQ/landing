import { useLanguage } from '../i18n/LanguageContext'

export function Deployment() {
  const { t } = useLanguage()

  return (
    <section className="py-14 sm:py-16" id="deployment">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-base font-semibold tracking-wide text-accent-600 uppercase">
          {t.deployment.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          {t.deployment.title}
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-navy-600">{t.deployment.sub}</p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {t.deployment.items.map((model) => (
            <article key={model.title} className="surface-card rounded-2xl p-5 sm:p-6">
              <h3 className="text-lg font-semibold text-navy-900 sm:text-xl">{model.title}</h3>
              <p className="mt-2 text-base leading-relaxed text-navy-600">{model.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
