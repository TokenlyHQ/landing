const email = 'vigneshwaran@tokenly.in'
const whatsapp = '919789729792'
const phoneDisplay = '+91 97897 29792'

export const brand = {
  name: 'Tokenly',
  legalName: 'Tokenly',
  tagline: 'Software That Works the Way Your Business Does.',
  location: 'Tamil Nadu, India',
  mainSiteUrl: 'https://tokenly.in',
  email,
  whatsapp,
  phoneDisplay,
  hasEmail: true,
  hasWhatsApp: true,
  mailto: `mailto:${email}`,
  whatsappUrl: `https://wa.me/${whatsapp}?text=${encodeURIComponent(
    'Hi Tokenly — I would like to discuss healthcare software for our organisation.',
  )}`,
} as const
