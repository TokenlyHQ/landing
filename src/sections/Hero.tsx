import { Button } from '../components/Button'
import { brand } from '../config/brand'
import { useLanguage } from '../i18n/LanguageContext'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="relative" id="top">
      <div className="animate-fade-up mx-auto max-w-[820px] px-4 py-16 text-center sm:px-8 sm:py-20 lg:py-24">
        <p className="text-5xl font-semibold tracking-tight text-navy-900 sm:text-6xl">
          {brand.name}
        </p>
        <h1 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl sm:leading-snug">
          {t.hero.headline}
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-navy-600 sm:text-xl">
          {t.hero.sub}
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button href="#contact" size="lg">
            {t.hero.ctaPrimary}
          </Button>
          <Button href="#solutions" variant="secondary" size="lg">
            {t.hero.ctaSecondary}
          </Button>
        </div>

        <p className="mt-6 text-base font-medium text-navy-700 sm:text-lg">{t.hero.support}</p>
        <p className="mt-3 text-base text-[#9298a8]">{t.hero.served}</p>
      </div>
    </section>
  )
}
