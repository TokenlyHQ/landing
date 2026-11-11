import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export function Solutions() {
  const { t } = useLanguage()
  const [openId, setOpenId] = useState<string | null>(t.solutions.items[0]?.id ?? null)

  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.replace('#', '')
      if (t.solutions.items.some((item) => item.id === id)) {
        setOpenId(id)
      }
    }
    syncFromHash()
    window.addEventListener('hashchange', syncFromHash)
    return () => window.removeEventListener('hashchange', syncFromHash)
  }, [t.solutions.items])

  return (
    <section className="py-14 sm:py-16" id="solutions">
      <div className="mx-auto max-w-[1160px] px-4 sm:px-8">
        <p className="text-base font-semibold tracking-wide text-accent-600 uppercase">
          {t.solutions.eyebrow}
        </p>
        <h2 className="mt-2 text-3xl font-semibold tracking-tight text-navy-900 sm:text-4xl">
          {t.solutions.title}
        </h2>
        <p className="mt-3 max-w-3xl text-lg leading-relaxed text-navy-600">{t.solutions.sub}</p>
        <p className="mt-2 max-w-3xl text-base text-[#9298a8]">{t.solutions.disclaimer}</p>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {t.solutions.items.map((item) => {
            const open = openId === item.id
            return (
              <article
                key={item.id}
                id={item.id}
                className="surface-card flex flex-col rounded-2xl p-5 sm:p-6"
              >
                <h3 className="text-xl font-semibold text-navy-900 sm:text-2xl">{item.title}</h3>
                <p className="mt-3 text-base leading-relaxed text-navy-600">{item.description}</p>
                <p className="mt-3 text-base font-medium text-navy-800">{item.value}</p>

                <button
                  type="button"
                  className="mt-5 inline-flex items-center gap-2 self-start text-base font-semibold text-accent-700 hover:text-accent-600"
                  aria-expanded={open}
                  onClick={() => setOpenId(open ? null : item.id)}
                >
                  {open ? t.solutions.collapse : t.solutions.expand}
                  <span aria-hidden className={`transition ${open ? 'rotate-180' : ''}`}>
                    ▾
                  </span>
                </button>

                {open ? (
                  <div className="mt-5 space-y-5 border-t border-[rgba(15,15,20,0.08)] pt-5">
                    {item.capabilities.map((capability) => (
                      <div key={capability.title}>
                        <h4 className="text-base font-semibold text-navy-900">{capability.title}</h4>
                        {'value' in capability && capability.value ? (
                          <p className="mt-1 text-sm text-navy-600 sm:text-base">{capability.value}</p>
                        ) : null}
                        {'note' in capability && capability.note ? (
                          <p className="mt-1 text-sm font-medium text-accent-700">{capability.note}</p>
                        ) : null}
                        <ul className="mt-2 space-y-1.5">
                          {capability.points.map((point) => (
                            <li
                              key={point}
                              className="flex items-start gap-2.5 text-base text-navy-700"
                            >
                              <span
                                className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-600"
                                aria-hidden
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                ) : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
