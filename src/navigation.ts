import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: '#',
    },
    {
      text: 'About',
      href: '#about',
    },
    {
      text: 'Services',
      href: '#services',
    },
    {
      text: 'Pricing',
      href: '#pricing',
    },
  ],
  actions: [{text: 'Contact', href: '/contact'}, { text: 'Book Appointment', href: 'https://github.com/onwidget/astrowind', target: '_blank' , icon:'material-symbols-light:arrow-outward-rounded'},],
};

export const footerData = {
  links: [
    {
      title: 'Quick Links',
      links: [
        { text: 'Home', href: '#' },
        { text: 'About', href: '#' },
        { text: 'Services', href: '#' },
        { text: 'Pricing', href: '#' },
        { text: 'Products', href: '#' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: '#' },
    { ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },
  ],
 footNote: `
  Designed & Developed by <a class="text-accent underline dark:text-default" href="https://impactwebstudio.ca/"> Impact Web Studio</a> · All rights reserved.
`,
};
