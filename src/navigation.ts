import { getHomePermalink } from './utils/permalinks';

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
      previousSectionId: 'home',
    },
    {
      text: 'Services',
      href: getHomePermalink() + '#services',
      sectionId: 'services',
      previousSectionId: 'about',
    },
    {
      text: 'FAQs',
      href: getHomePermalink() + '#faqs',
      sectionId: 'faqs',
      previousSectionId: 'services',
    },
  ],
  actions: [
    { text: 'Contact', href: '/contact' },
    {
      text: 'Book Online',
      href: 'https://www.fresha.com/book-now/beanbeauty-mti2rkmw/all-offer?share&pId=386078',
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
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    {
      ariaLabel: 'Instagram',
      icon: 'tabler:brand-instagram',
      href: 'https://www.instagram.com/beigebykat',
      target: '_blank',
    },
  ],
  footNote: `
  Designed & Developed by <a class="text-white/80 underline underline-offset-4 hover:text-accent transition-colors duration-300 ease-in-out" href="https://impactwebstudio.ca/"> Impact Web Studio</a> · All rights reserved.
`,
};
