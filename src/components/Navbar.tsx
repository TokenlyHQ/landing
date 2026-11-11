import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'
import { Button } from './Button'
import { LanguageSwitch } from './LanguageSwitch'
import { Logo } from './Logo'

const navHrefs = [
  { key: 'solutions', href: '#solutions' },
  { key: 'custom', href: '#custom' },
  { key: 'deployment', href: '#deployment' },
  { key: 'about', href: '#about' },
  { key: 'contact', href: '#contact' },
] as const

export function Navbar() {
  const { t } = useLanguage()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md">
      <div className="mx-auto flex h-[72px] max-w-[1160px] items-center justify-between gap-3 px-4 sm:px-8">
        <Logo />

        <nav className="hidden items-center gap-5 lg:flex" aria-label="Primary">
          {navHrefs.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-base text-navy-600 transition hover:text-navy-900"
            >
              {t.nav[item.key]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <LanguageSwitch />
          <Button href="#contact" size="md">
            {t.nav.cta}
          </Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <LanguageSwitch />
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-[10px] border border-[rgba(15,15,20,0.08)] bg-white/70 text-navy-800"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? t.nav.menuClose : t.nav.menuOpen}
            onClick={() => setOpen((value) => !value)}
          >
            <span aria-hidden="true" className="flex flex-col gap-1.5">
              <span
                className={`block h-0.5 w-5 bg-current transition ${open ? 'translate-y-2 rotate-45' : ''}`}
              />
              <span className={`block h-0.5 w-5 bg-current transition ${open ? 'opacity-0' : ''}`} />
              <span
                className={`block h-0.5 w-5 bg-current transition ${open ? '-translate-y-2 -rotate-45' : ''}`}
              />
            </span>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="mobile-nav"
          className="border-t border-[rgba(15,15,20,0.08)] bg-[#fafaf9]/95 px-4 py-4 backdrop-blur-md md:hidden"
        >
          <nav className="flex flex-col gap-1" aria-label="Mobile">
            {navHrefs.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3.5 text-lg font-medium text-navy-800 hover:bg-black/[0.03]"
                onClick={() => setOpen(false)}
              >
                {t.nav[item.key]}
              </a>
            ))}
            <Button href="#contact" className="mt-3 w-full" onClick={() => setOpen(false)}>
              {t.nav.cta}
            </Button>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
