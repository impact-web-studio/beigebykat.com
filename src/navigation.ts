import { getPermalink, getHomePermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Home',
      href: getHomePermalink(),
      isHome: true, // Special flag for home link
      sectionId: 'home',
    },
    {
      text: 'About',
      href: getHomePermalink() + '#about',
      sectionId: 'about',
    },
    {
      text: 'Services',
      href: getHomePermalink() + '#services',
      sectionId: 'services',
    },
    {
      text: 'FAQs',
      href: getHomePermalink() + '#faqs',
      sectionId: 'faqs',
    },
  ],
  actions: [
    { text: 'Contact', href: '/contact' },
    {
      text: 'Book Appointment',
      href: 'https://github.com/onwidget/astrowind',
      target: '_blank',
      icon: 'material-symbols-light:arrow-outward-rounded',
    },
  ],
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
  Designed & Developed by <a class="text-primary hover:underline hover:text-black transition-colors duration-300 ease-in-out" href="https://impactwebstudio.ca/"> Impact Web Studio</a> · All rights reserved.
`,
};
