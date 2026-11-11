import { useLanguage, type Locale } from '../i18n/LanguageContext'
import translations from '../i18n/translations.json'

export function LanguageSwitch({ className = '' }: { className?: string }) {
  const { locale, setLocale, locales } = useLanguage()

  return (
    <div
      className={`inline-flex rounded-[10px] border border-[rgba(15,15,20,0.08)] bg-white/70 p-0.5 text-sm backdrop-blur-sm ${className}`}
      role="group"
      aria-label="Language"
    >
      {locales.map((code) => {
        const active = locale === code
        const label = translations[code as Locale].langShort
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLocale(code)}
            className={`rounded-md px-2.5 py-1.5 font-medium transition ${
              active
                ? 'bg-navy-900 text-white'
                : 'text-navy-600 hover:bg-black/[0.03] hover:text-navy-900'
            }`}
            aria-pressed={active}
          >
            {label}
          </button>
        )
      })}
    </div>
  )
}
