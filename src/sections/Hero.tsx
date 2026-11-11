import { Button } from '../components/Button'
import { brand } from '../config/brand'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative">
      <div className="animate-fade-up mx-auto max-w-[720px] px-4 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
        <p className="text-4xl font-semibold tracking-tight text-navy-900 sm:text-5xl">
          {brand.name}
        </p>
        <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight text-navy-900 sm:text-[2rem] sm:leading-snug">
          {t.hero.headline}
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-[17px] leading-relaxed text-navy-600">
          {t.hero.sub}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#contact" size="lg">
            {t.hero.ctaPrimary}
          </Button>
          <Button href="#solutions" variant="secondary" size="lg">
            {t.hero.ctaSecondary}
          </Button>
        </div>

        <p className="mt-6 text-sm text-[#9298a8]">{t.hero.served}</p>
      </div>
    </section>
  )
}
