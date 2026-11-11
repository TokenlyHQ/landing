import { Link } from 'react-router-dom'
import { brand } from '../config/brand'
import { useLanguage } from '../i18n/LanguageContext'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  const links = [
    { href: '/#appointments', label: t.footer.appointments },
    { href: '/#hospital', label: t.footer.hospital },
    { href: '/#pharmacy', label: t.footer.pharmacy },
    { href: '/#custom', label: t.footer.custom },
    { href: '/#deployment', label: t.footer.deployment },
    { href: '/#contact', label: t.footer.contact },
    { href: brand.mainSiteUrl, label: t.footer.tokenly, external: true },
    { to: '/privacy', label: t.footer.privacy },
    { to: '/terms', label: t.footer.terms },
  ] as const

  return (
    <footer className="relative w-full border-t border-[rgba(15,15,20,0.08)]">
      <div className="mx-auto flex w-full max-w-[1160px] flex-col gap-5 px-4 py-10 sm:px-8 sm:py-12">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between md:gap-8">
          <div className="shrink-0">
            <Logo />
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-navy-600 sm:text-base">
              {t.footer.blurb}
            </p>
          </div>

          <nav
            aria-label="Footer"
            className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-navy-600 md:max-w-[58%] md:justify-end sm:text-base"
          >
            {links.map((link) => {
              if ('to' in link && link.to) {
                return (
                  <Link key={link.to} to={link.to} className="whitespace-nowrap hover:text-navy-900">
                    {link.label}
                  </Link>
                )
              }

              if ('external' in link && link.external) {
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap hover:text-navy-900"
                  >
                    {link.label}
                  </a>
                )
              }

              return (
                <a key={link.href} href={link.href} className="whitespace-nowrap hover:text-navy-900">
                  {link.label}
                </a>
              )
            })}
          </nav>
        </div>

        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy-600 sm:text-base">
          <a href={brand.mailto} className="hover:text-navy-900">
            {brand.email}
          </a>
          <span className="text-[#9298a8]" aria-hidden>
            ·
          </span>
          <a href={`tel:+${brand.whatsapp}`} className="hover:text-navy-900">
            {brand.phoneDisplay}
          </a>
          <span className="text-[#9298a8]" aria-hidden>
            ·
          </span>
          <a
            href={brand.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy-900"
          >
            WhatsApp
          </a>
        </div>

        <div className="flex flex-col gap-2 border-t border-[rgba(15,15,20,0.08)] pt-5 text-sm text-[#9298a8] sm:flex-row sm:items-center sm:justify-between sm:text-base">
          <p>
            © {year} {brand.legalName}. {t.footer.rights}
          </p>
          <p className="sm:text-right">{t.footer.tag}</p>
        </div>
      </div>
    </footer>
  )
}
