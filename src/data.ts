import type { ServiceItem, ProjectItem, ProcessStep } from './types';

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
    id: 'project-aurora',
    title: 'AETHEL PRIVATE WEALTH',
    category: 'Fintech Platform & Architecture',
    year: '2026',
    client: 'Aethel Financial AG — Zurich',
    description: 'An institutional asset management terminal and bespoke portal designed for ultra-high-net-worth family offices. Features real-time liquidity telemetries and zero-latency transaction verification.',
    highlight: 'Processed $4.2B in annualized institutional settlements with 12ms interface responsiveness.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1800&q=85',
    tags: ['Distributed Systems', 'Ultra-Performance UI', 'Fintech']
  },
  {
    id: 'project-kuro',
    title: 'NOVA AERO-AUTONOMY',
    category: 'Avionics Fleet Interface',
    year: '2025',
    client: 'Nova Autonomous Systems — Munich',
    description: 'Next-generation telemetry command center for electric autonomous vertical takeoff transport. Orchestrates multi-vector route simulation with military-grade precision and dark-mode ergonomic clarity.',
    highlight: 'Real-time 60fps tracking across 400+ simultaneous airspace vectors.',
    image: 'https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=1800&q=85',
    tags: ['Aero Interface', 'Real-Time Telemetry', 'Precision Design']
  },
  {
    id: 'project-chronos',
    title: 'VALOIS HAUTE HORLOGERIE',
    category: 'Luxury Brand Experience',
    year: '2025',
    client: 'Maison Valois — Geneva',
    description: 'A sensory digital atelier for an independent Swiss horology manufacture. Micro-interactions mirror mechanical balance wheels, offering buyers high-magnification caliber exploration.',
    highlight: '320% increase in collector reservation inquiries within 90 days of launch.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1800&q=85',
    tags: ['Luxury E-Commerce', 'Kinetic Typography', 'Editorial']
  },
  {
    id: 'project-synapse',
    title: 'SYNAPSE QUANTUM LABS',
    category: 'Deep Tech & Research Ecosystem',
    year: '2024',
    client: 'Synapse Core — Tokyo & San Francisco',
    description: 'An interactive scientific data visualization suite for quantum algorithm compilation and error-correction modeling, bringing intuitive clarity to complex qubit state spaces.',
    highlight: 'Adopted by 8 top-tier research institutions and global quantum consortiums.',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=85',
    tags: ['Quantum Computing', 'Scientific Viz', 'Enterprise Platform']
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'DISCOVER',
    description: 'We deconstruct your core strategic objectives, technological friction points, and market nuances through surgical audit and deep architectural discovery.',
    deliverables: ['System Architecture Blueprint', 'Technical Feasibility Audit', 'User Persona Vectors']
  },
  {
    step: '02',
    title: 'STRATEGIZE',
    description: 'Formulating rigorous technological roadmaps and aesthetic philosophies that eliminate bloat and maximize competitive velocity.',
    deliverables: ['Product Scope & Phasing', 'Technology Stack Selection', 'Risk Mitigation Framework']
  },
  {
    step: '03',
    title: 'DESIGN',
    description: 'Obsessively sculpting bespoke visual identities, fluid kinetic micro-animations, and ergonomic user flows that feel tactile and authoritative.',
    deliverables: ['Editorial Design Language', 'Interactive Prototypes', 'Complete Design System']
  },
  {
    step: '04',
    title: 'DEVELOP',
    description: 'Writing precision, test-driven code with uncompromising attention to clean structure, performance benchmarks, and bank-grade security protocols.',
    deliverables: ['Production-Grade Codebase', 'Automated CI/CD Pipelines', 'Penetration & Performance Audits']
  },
  {
    step: '05',
    title: 'LAUNCH',
    description: 'Zero-downtime global rollout across edge delivery networks with continuous monitoring, telemetry analysis, and post-launch evolution.',
    deliverables: ['Edge Deployment & CDN', 'Real-Time Observability Suite', 'Continuous Scalability Support']
  }
];

export const TECH_STACK = [
  { name: 'TypeScript', tag: 'Core Language', category: 'Language' },
  { name: 'React 19', tag: 'UI Framework', category: 'Frontend' },
  { name: 'Next.js', tag: 'Fullstack / Edge', category: 'Framework' },
  { name: 'Rust', tag: 'High Performance', category: 'Systems' },
  { name: 'Go', tag: 'Microservices', category: 'Backend' },
  { name: 'Node.js', tag: 'Runtime Environment', category: 'Backend' },
  { name: 'PostgreSQL', tag: 'Relational Database', category: 'Data' },
  { name: 'Redis', tag: 'In-Memory Caching', category: 'Data' },
  { name: 'GraphQL', tag: 'API Layer', category: 'Architecture' },
  { name: 'Docker / K8s', tag: 'Container Orchestration', category: 'DevOps' },
  { name: 'AWS / Cloudflare', tag: 'Edge Infrastructure', category: 'Cloud' },
  { name: 'GSAP', tag: 'Kinetic Motion Engine', category: 'Motion' },
  { name: 'Tailwind CSS', tag: 'Design Architecture', category: 'Styling' },
  { name: 'PyTorch', tag: 'Applied Neural Models', category: 'AI & Data' },
  { name: 'Kafka', tag: 'Event Streaming', category: 'Data' },
  { name: 'Terraform', tag: 'Infra as Code', category: 'DevOps' }
];
