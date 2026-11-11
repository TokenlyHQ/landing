import { useLanguage } from '../i18n/LanguageContext'

export function Deployment() {
  const { t } = useLanguage()

  return (
    <section className="py-14 sm:py-16" id="deployment">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-sm font-semibold tracking-wide text-accent-600 uppercase">
          {t.deployment.eyebrow}
        </p>
        <h2 className="mt-2 text-2xl font-semibold tracking-tight text-navy-900 sm:text-3xl">
          {t.deployment.title}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-navy-600 sm:text-base">
          {t.deployment.sub}
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-3">
          {t.deployment.items.map((model) => (
            <article key={model.title} className="surface-card rounded-2xl p-5">
              <h3 className="text-base font-semibold text-navy-900">{model.title}</h3>
              <p className="mt-1.5 text-sm text-navy-600">{model.detail}</p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs text-[#9298a8]">{t.deployment.note}</p>
      </div>
    </section>
  )
}
