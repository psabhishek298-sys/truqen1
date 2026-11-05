import type { ServiceItem, ProjectItem } from './types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'web-development',
    number: '01',
    title: 'WEB DEVELOPMENT',
    subtitle: 'Modern Websites Built for Your Business',
    description: 'We create modern, responsive, and professional websites that help businesses build a strong online presence. From business websites and portfolio websites to landing pages, we develop digital experiences that look great on every device and provide a smooth user experience.',
    image: '/assets/services/web-development.webp',
    imageAlt: 'Responsive website displayed across a laptop, tablet, and phone in a soft ivory and crimson studio scene'
  },
  {
    id: 'app-development',
    number: '02',
    title: 'APP DEVELOPMENT',
    subtitle: 'Mobile Applications Made for Real Needs',
    description: 'We develop modern mobile applications designed to make everyday tasks easier and improve how people interact with technology. From business applications to custom mobile solutions, we focus on simple designs, smooth performance, and useful features.',
    image: '/assets/services/app-development.webp',
    imageAlt: 'Mobile app concept on a smartphone and tablet with soft ivory and crimson interface panels'
  },
  {
    id: 'ui-ux-design',
    number: '03',
    title: 'UI/UX DESIGN',
    subtitle: 'Simple Designs. Better Experiences.',
    description: 'We design clean, modern, and user-friendly interfaces for websites and mobile applications. Every design is carefully planned to make products easy to understand, comfortable to use, and visually appealing.',
    image: '/assets/services/uiux-design.webp',
    imageAlt: 'UI and UX design workspace with interface mockups, wireframes, and a tablet in pale blush tones'
  },
  {
    id: 'custom-software',
    number: '04',
    title: 'CUSTOM SOFTWARE DEVELOPMENT',
    subtitle: 'Software Designed Around Your Business',
    description: 'We build custom software solutions based on your business needs. From management systems and admin dashboards to employee management, order tracking, and reporting systems, we create tools that help businesses manage their work more efficiently.',
    image: '/assets/services/custom-software.webp',
    imageAlt: 'Custom business software dashboard on a desktop monitor with crimson charts and data panels'
  },
  {
    id: 'business-automation',
    number: '05',
    title: 'BUSINESS AUTOMATION',
    subtitle: 'Less Manual Work. More Productivity.',
    description: 'We help businesses reduce repetitive tasks through smart automation solutions. From automated workflows and data management to notifications and system integrations, we build solutions that save time and make daily operations easier.',
    image: '/assets/services/business-automation.webp',
    imageAlt: 'Connected workflow cards and an automated operations laptop in an ivory and crimson palette'
  },
  {
    id: 'ecommerce-development',
    number: '06',
    title: 'E-COMMERCE DEVELOPMENT',
    subtitle: 'Online Stores Built for Growth',
    description: 'We build modern and user-friendly online stores that help businesses sell products and reach more customers. From product management and shopping carts to secure payment integration and order tracking, we create complete e-commerce solutions that make online shopping simple and convenient.',
    image: '/assets/services/ecommerce-development.webp',
    imageAlt: 'Online storefront shown on laptop and phone with product displays and shopping cart'
  }
];
export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 'project-green-realm',
    title: 'Green Realm Landscape',
    category: 'Landscape Architecture',
    year: '2026',
    image: '/photos/Green+%20Realm%20Desk%20Showcase.png',
    link: 'https://www.greenrealmlandscape.com/',
  },
  {
    id: 'project-kuro',
    title: 'NOVA AERO-AUTONOMY',
    category: 'Avionics Fleet Interface',
    year: '2025',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1800&q=85',
  }
];
