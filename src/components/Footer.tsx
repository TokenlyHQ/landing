import { Link } from 'react-router-dom'
import { brand } from '../config/brand'
import { useLanguage } from '../i18n/LanguageContext'
import { Logo } from './Logo'

export function Footer() {
  const { t } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="relative mx-auto w-full max-w-[1160px] px-4 pb-10 pt-16 text-base text-[#9298a8] sm:px-8">
      <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-base leading-relaxed text-navy-600">{t.footer.blurb}</p>
          <p className="mt-3 text-base text-navy-600">
            <a href={brand.mailto} className="hover:text-navy-900">
              {brand.email}
            </a>
            <span className="mx-2">·</span>
            <a href={`tel:+${brand.whatsapp}`} className="hover:text-navy-900">
              {brand.phoneDisplay}
            </a>
          </p>
        </div>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-base text-navy-600">
          <a href="/#appointments" className="hover:text-navy-900">
            {t.footer.appointments}
          </a>
          <a href="/#hospital" className="hover:text-navy-900">
            {t.footer.hospital}
          </a>
          <a href="/#pharmacy" className="hover:text-navy-900">
            {t.footer.pharmacy}
          </a>
          <a href="/#custom" className="hover:text-navy-900">
            {t.footer.custom}
          </a>
          <a href="/#deployment" className="hover:text-navy-900">
            {t.footer.deployment}
          </a>
          <a href="/#contact" className="hover:text-navy-900">
            {t.footer.contact}
          </a>
          <a
            href={brand.mainSiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-navy-900"
          >
            {t.footer.tokenly}
          </a>
          <Link to="/privacy" className="hover:text-navy-900">
            {t.footer.privacy}
          </Link>
          <Link to="/terms" className="hover:text-navy-900">
            {t.footer.terms}
          </Link>
        </div>
      </div>

      <div className="mt-8 flex flex-col gap-2 border-t border-[rgba(15,15,20,0.08)] pt-5 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} {brand.legalName}. {t.footer.rights}
        </p>
        <p>{t.footer.tag}</p>
      </div>
    </footer>
  )
}
