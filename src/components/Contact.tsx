import React, { useState } from 'react';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Code2,
  Database,
  LockKeyhole,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  PanelsTopLeft,
  ShoppingCart,
  Smartphone,
  UserRound,
  Workflow,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data';
import type { ServiceItem } from '../types';

interface ContactProps {
  onDirectSubmitSuccess?: () => void;
}

const serviceIcons = [Code2, Smartphone, PanelsTopLeft, Database, Workflow, ShoppingCart];

const ContactDetail: React.FC<{
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}> = ({ icon: Icon, title, children }) => (
  <div className="flex items-center gap-4 border-b border-[#111111]/10 py-3 last:border-0">
    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#D41514]/[0.07] text-[#D41514]">
      <Icon className="h-5 w-5" aria-hidden="true" />
    </span>
    <div className="min-w-0">
      <p className="text-sm font-semibold text-[#111111]">{title}</p>
      <div className="mt-0.5 text-sm text-[#111111]/75">{children}</div>
    </div>
  </div>
);

const FormField: React.FC<{
  label: string;
  icon: React.ElementType;
  children: React.ReactNode;
  required?: boolean;
}> = ({ label, icon: Icon, children, required = false }) => (
  <label className="block min-w-0">
    <span className="mb-2 block text-sm font-semibold text-[#111111]">
      {label}{required && <span className="ml-1 text-[#D41514]">*</span>}
    </span>
    <span className="relative block">
      <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-[#111111]/75" aria-hidden="true" />
      {children}
    </span>
  </label>
);

export const Contact: React.FC<ContactProps> = ({ onDirectSubmitSuccess }) => {
  const [submitted, setSubmitted] = useState(false);
  const isMobileDevice = typeof navigator !== 'undefined' && /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    service: SERVICES_DATA[0]?.title ?? '',
    subject: '',
    message: '',
  });

  const updateField = (field: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    onDirectSubmitSuccess?.();
  };

  return (
    <section id="contact" className="relative overflow-hidden px-6 pb-12 pt-8 sm:px-10 lg:px-12 lg:pb-14">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background-image:radial-gradient(rgba(212,21,20,0.18)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]" />

      <div className="relative mx-auto grid max-w-[1440px] items-start gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 xl:gap-20">
        <div className="flex min-h-full flex-col">
          <div className="mb-7 flex items-center gap-3 font-accent text-xs font-bold uppercase tracking-[0.22em] text-[#111111]">
            <span className="h-[2px] w-5 bg-[#D41514]" />
            Get in touch
          </div>

          <h1 className="max-w-[620px] font-serif text-[clamp(3.2rem,6vw,5.2rem)] font-normal leading-[0.94] tracking-[-0.055em] text-[#111111]">
            Let&apos;s Build
            <br />
            Something Great
            <br />
            <span className="italic text-[#D41514]">Together.</span>
          </h1>

          <p className="mt-7 max-w-[520px] text-base leading-7 text-[#111111]/70 sm:text-lg">
            Have a project in mind? A new website, mobile app, or custom digital solution? Let&apos;s talk and turn your idea into a real product.
          </p>

          <div className="mt-5 max-w-[520px]">
            <ContactDetail icon={Mail} title="Email Us">
              <a className="transition-colors hover:text-[#D41514]" href="mailto:truqenco@gmail.com">truqenco@gmail.com</a>
            </ContactDetail>
            <ContactDetail icon={MessageCircle} title="Chat on WhatsApp">
              <a className="block leading-6 transition-colors hover:text-[#D41514]" href={isMobileDevice ? 'tel:+919207322053' : 'https://wa.me/919207322053'} target={isMobileDevice ? undefined : '_blank'} rel={isMobileDevice ? undefined : 'noreferrer'}>+91 9207322053</a>
              <a className="block leading-6 transition-colors hover:text-[#D41514]" href={isMobileDevice ? 'tel:+917994828412' : 'https://wa.me/917994828412'} target={isMobileDevice ? undefined : '_blank'} rel={isMobileDevice ? undefined : 'noreferrer'}>+91 7994828412</a>

            </ContactDetail>
            <ContactDetail icon={MapPin} title="Our Location">
              Kerala, India
            </ContactDetail>
          </div>

          <div className="mt-6 flex flex-wrap gap-3" aria-label="Connect with TRUQEN">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-[#C13584]/20 px-4 py-2.5 text-sm text-[#111111] transition-colors hover:border-[#C13584]/45 hover:bg-[#C13584]/[0.035]"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-[#FEDA75] via-[#D62976] to-[#4F5BD5] text-white shadow-sm">
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.8" />
                  <circle cx="17.6" cy="6.5" r="1.1" fill="currentColor" />
                </svg>
              </span>
              <span>Instagram</span>
            </a>
            <a
              href="https://wa.me/919207322053"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 rounded-lg border border-[#25D366]/25 px-4 py-2.5 text-sm text-[#111111] transition-colors hover:border-[#25D366]/60 hover:bg-[#25D366]/[0.05]"
            >
              <span className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-[#25D366] text-white shadow-sm">
                <MessageCircle className="h-6 w-6" strokeWidth={2.2} aria-hidden="true" />
                <Phone className="absolute h-2.5 w-2.5" strokeWidth={2.8} aria-hidden="true" />
              </span>
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

        <div className="min-w-0">
          <div className="rounded-[26px] border border-[#D41514]/15 bg-white/95 p-6 shadow-[0_18px_70px_rgba(17,17,17,0.07)] sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[430px] flex-col items-center justify-center px-4 text-center">
                <CheckCircle2 className="h-14 w-14 text-[#D41514]" aria-hidden="true" />
                <h2 className="mt-5 font-serif text-3xl text-[#111111]">Message received</h2>
                <p className="mt-3 max-w-md text-sm leading-6 text-[#111111]/65">
                  Thanks for getting in touch. We&apos;ll review your message and get back to you as soon as possible.
                </p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-6 text-sm font-semibold text-[#D41514] underline underline-offset-4">
                  Send another message
                </button>
              </div>
            ) : (
              <>
                <p className="font-accent text-xs font-bold uppercase tracking-[0.22em] text-[#D41514]">Contact form</p>
                <h2 className="mt-1 font-serif text-3xl font-normal tracking-tight text-[#111111] sm:text-4xl">Send Us a Message</h2>

                <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    <FormField label="Full Name" icon={UserRound} required>
                      <input required autoComplete="name" value={formData.name} onChange={(event) => updateField('name', event.target.value)} placeholder="Your name" className="w-full rounded-xl border border-[#111111]/15 bg-white py-3 pl-11 pr-4 text-sm text-[#111111] outline-none transition focus:border-[#D41514] focus:ring-2 focus:ring-[#D41514]/10" />
                    </FormField>
                    <FormField label="Email Address" icon={Mail} required>
                      <input required type="email" autoComplete="email" value={formData.email} onChange={(event) => updateField('email', event.target.value)} placeholder="you@example.com" className="w-full rounded-xl border border-[#111111]/15 bg-white py-3 pl-11 pr-4 text-sm text-[#111111] outline-none transition focus:border-[#D41514] focus:ring-2 focus:ring-[#D41514]/10" />
                    </FormField>
                    <FormField label="Mobile Number" icon={Smartphone}>
                      <input type="tel" inputMode="tel" autoComplete="tel" value={formData.mobile} onChange={(event) => updateField('mobile', event.target.value)} placeholder="Your phone number" className="w-full rounded-xl border border-[#111111]/15 bg-white py-3 pl-11 pr-4 text-sm text-[#111111] outline-none transition focus:border-[#D41514] focus:ring-2 focus:ring-[#D41514]/10" />
                    </FormField>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <FormField label="Service Interested In" icon={Code2} required>
                      <>
                        <select required value={formData.service} onChange={(event) => updateField('service', event.target.value)} className="w-full appearance-none rounded-xl border border-[#111111]/15 bg-white py-3 pl-11 pr-10 text-sm text-[#111111] outline-none transition focus:border-[#D41514] focus:ring-2 focus:ring-[#D41514]/10">
                          {SERVICES_DATA.map((service: ServiceItem) => <option key={service.id} value={service.title}>{service.title}</option>)}
                        </select>
                        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[#111111]/70" aria-hidden="true" />
                      </>
                    </FormField>
                    <FormField label="Subject" icon={MessageCircle}>
                      <input value={formData.subject} onChange={(event) => updateField('subject', event.target.value)} placeholder="Project, inquiry, or collaboration" className="w-full rounded-xl border border-[#111111]/15 bg-white py-3 pl-11 pr-4 text-sm text-[#111111] outline-none transition placeholder:text-[#111111]/50 focus:border-[#D41514] focus:ring-2 focus:ring-[#D41514]/10" />
                    </FormField>
                  </div>

                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#111111]">Message<span className="ml-1 text-[#D41514]">*</span></span>
                    <textarea required rows={4} value={formData.message} onChange={(event) => updateField('message', event.target.value)} placeholder="Tell us about your project, idea, or requirement..." className="w-full resize-y rounded-xl border border-[#111111]/15 bg-white px-4 py-3 text-sm leading-6 text-[#111111] outline-none transition placeholder:text-[#111111]/50 focus:border-[#D41514] focus:ring-2 focus:ring-[#D41514]/10" />
                  </label>

                  <div className="flex flex-col items-start justify-between gap-4 pt-1 sm:flex-row sm:items-center">
                    <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D41514] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_8px_24px_rgba(212,21,20,0.2)] transition hover:bg-[#B51110]">
                      Send Message <ArrowUpRight className="h-4 w-4" />
                    </button>
                    <p className="flex max-w-[280px] items-center gap-3 text-xs leading-5 text-[#111111]/65">
                      <LockKeyhole className="h-5 w-5 shrink-0 text-[#111111]/70" aria-hidden="true" />
                      Your information is safe with us. We&apos;ll get back to you as soon as possible.
                    </p>
                  </div>
                </form>
              </>
            )}
          </div>

          <div className="mt-10">
            <p className="mb-4 font-accent text-xs font-bold uppercase tracking-[0.22em] text-[#D41514]">Our Services</p>
            <div className="grid grid-cols-2 divide-x divide-y divide-[#111111]/10 rounded-xl border-y border-[#111111]/10 sm:grid-cols-3 xl:grid-cols-6 xl:divide-y-0">
              {SERVICES_DATA.map((service, index) => {
                const Icon = serviceIcons[index % serviceIcons.length];
                return (
                  <Link key={service.id} to="/#services" className="flex min-h-[112px] flex-col items-center justify-center gap-2 px-2 py-4 text-center transition-colors hover:bg-[#D41514]/[0.04]">
                    <Icon className="h-6 w-6 text-[#D41514]" aria-hidden="true" />
                    <span className="max-w-[130px] text-xs font-semibold leading-4 text-[#111111]">{service.title}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
