const email = import.meta.env.VITE_CONTACT_EMAIL?.trim() || ''
const whatsapp = (import.meta.env.VITE_WHATSAPP_NUMBER || '').replace(/\D/g, '')
const siteUrl = (import.meta.env.VITE_SITE_URL || 'https://health.tokenly.in').replace(/\/$/, '')
const formspreeEndpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() || ''

export const brand = {
  name: 'Tokenly',
  legalName: 'Tokenly',
  tagline: 'Healthcare Software Built Around Your Business.',
  location: 'Tamil Nadu, India',
  mainSiteUrl: 'https://tokenly.in',
  email,
  whatsapp,
  siteUrl,
  formspreeEndpoint,
  hasEmail: Boolean(email),
  hasWhatsApp: Boolean(whatsapp),
  hasFormBackend: Boolean(formspreeEndpoint),
  mailto: email ? `mailto:${email}` : '',
  whatsappUrl: whatsapp
    ? `https://wa.me/${whatsapp}?text=${encodeURIComponent(
        'Hi Tokenly — I would like to discuss healthcare software for our organisation.',
      )}`
    : '',
} as const
