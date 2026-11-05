import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowUp,
  ArrowUpRight,
  BriefcaseBusiness,
  Camera,
  Code2,
  Music2,
} from 'lucide-react';
import { SERVICES_DATA } from '../data';

interface FooterProps {
  onOpenContactModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContactModal }) => {
  const currentYear = new Date().getFullYear();
  const socials = [
    { name: 'GitHub', href: 'https://github.com', Icon: Code2 },
    { name: 'LinkedIn', href: 'https://linkedin.com', Icon: BriefcaseBusiness },
    { name: 'Instagram', href: 'https://instagram.com', Icon: Camera },
    { name: 'TikTok', href: 'https://tiktok.com', Icon: Music2 },
  ];

  return (
    <>
      <footer className="border-t border-[#111111]/10 bg-white text-[#111111]">
        <div className="mx-auto max-w-[1600px] px-6 py-12 sm:px-10 md:px-12 md:py-16">
          <div className="grid gap-x-8 gap-y-10 border-b border-[#111111]/15 pb-9 sm:grid-cols-2 lg:grid-cols-[1.05fr_1.15fr_1.05fr_0.65fr_1fr] lg:items-start lg:gap-8">
            <div>
              <Link to="/" aria-label="TRUQEN home" className="inline-block font-accent text-3xl font-black tracking-[-0.07em]">
                TRUQEN
              </Link>
              <p className="mt-3 max-w-xs text-sm leading-6 text-[#111111]/65">
                Transforming Ideas Into Powerful Digital Experiences.
              </p>
            </div>

            <nav aria-label="Footer pages">
              <h2 className="mb-4 font-accent text-sm font-bold tracking-[0.14em] text-[#111111]/60">
                Pages
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li><Link className="transition-opacity hover:opacity-60" to="/">Home</Link></li>
                <li><Link className="transition-opacity hover:opacity-70" to="/about">About</Link></li>
                <li><Link className="transition-opacity hover:opacity-70" to="/work">Projects</Link></li>
                <li><Link className="transition-opacity hover:opacity-70" to="/process">Process</Link></li>
                <li><Link className="transition-opacity hover:opacity-70" to="/contact">Contact</Link></li>
              </ul>
            </nav>

            <nav aria-label="Our services">
              <h2 className="mb-4 font-accent text-sm font-bold tracking-[0.14em] text-[#111111]/60">
                Services
              </h2>
              <ul className="space-y-2.5 text-sm">
                {SERVICES_DATA.map((service) => (
                  <li key={service.id}>
                    <Link className="transition-opacity hover:opacity-60" to="/#services">
                      {service.title.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase())}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            <address aria-labelledby="footer-contact-heading" className="not-italic">
              <h2 id="footer-contact-heading" className="mb-4 font-accent text-sm font-bold tracking-[0.14em] text-[#111111]/60">
                Contact
              </h2>
              <ul className="space-y-2.5 text-sm">
                <li><a className="transition-opacity hover:opacity-60" href="mailto:truqenco@gmail.com">truqenco@gmail.com</a></li>
                <li><a className="transition-opacity hover:opacity-60" href="https://wa.me/918921345678" target="_blank" rel="noreferrer">+91 9207322053</a></li>
                <li><a className="transition-opacity hover:opacity-60" href="https://wa.me/918921345678" target="_blank" rel="noreferrer">+91 7994828412</a></li>
                <li className="text-[#111111]/75">Kozhikode, Kerala, India</li>
              </ul>
            </address>

            <div className="sm:col-span-2 lg:col-span-1 lg:text-right">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between lg:flex-col lg:items-end lg:justify-start">
                <div>
                  <h2 className="font-accent text-xl font-bold">Have a project in mind?</h2>
                  <p className="mt-1 text-sm text-[#111111]/65">Let&apos;s make something meaningful.</p>
                </div>
                <button
                  type="button"
                  onClick={onOpenContactModal}
                  className="inline-flex w-fit items-center gap-2 self-start rounded-full bg-[#111111] px-5 py-3 font-accent text-sm font-bold text-white transition-transform hover:-translate-y-0.5 lg:self-end"
                >
                  Let&apos;s Chat <ArrowUpRight className="h-4 w-4" />
                </button>
              </div>
              <div className="mt-5 flex items-center gap-2.5 lg:justify-end">
                {socials.map(({ name, href, Icon }) => (
                  <a
                    key={name}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={name}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#111111]/30 transition-colors hover:bg-[#111111] hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col items-start justify-between gap-3 pt-5 text-xs text-[#111111]/60 sm:flex-row sm:items-center">
            <span>© {currentYear} TRUQEN DIGITAL AG. ALL RIGHTS RESERVED.</span>
            <div className="flex items-center gap-5">
              <span>Engineering Tomorrow, Today.</span>
              <button
                type="button"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-[#111111]"
              >
                Back to top <ArrowUp className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
