import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SERVICES_DATA } from '../data';
import type { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => (
  <section id="services" className="px-4 py-16 sm:px-6 md:px-12 md:py-20">
    <div className="mx-auto w-full max-w-7xl">
      <header className="mb-8 flex items-end justify-between gap-4 px-1 sm:mb-10 sm:px-4 md:px-8">
        <div>
          <p className="mb-3 font-accent text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ED1C24]">
            01 / What we do
          </p>
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
            Services<span className="text-[#ED1C24]">.</span>
          </h2>
        </div>
        <span className="hidden pb-2 text-sm font-medium text-neutral-500 sm:block">
          Digital experiences, built to perform
        </span>
      </header>

      <div className="service-cinematic-list border-t border-neutral-200">
        {SERVICES_DATA.map((service) => (
          <button
            key={service.id}
            type="button"
            onClick={() => onSelectService(service)}
            aria-label={`Learn more about ${service.title}`}
            className="service-cinematic-item group relative flex w-full cursor-pointer flex-col justify-center overflow-hidden border-b border-neutral-200 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#ED1C24]"
          >
            <div className="service-cinematic-image pointer-events-none absolute inset-0 h-full w-full">
              <img
                src={service.image}
                alt=""
                aria-hidden="true"
                loading="lazy"
                className="h-full w-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-black/10" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>

            <div className="relative z-10 flex w-full items-center justify-between gap-3 px-2 sm:px-8 md:px-12">
              <div className="flex min-w-0 items-center gap-4 sm:gap-8 md:gap-12">
                <span className="shrink-0 font-mono text-sm font-medium text-neutral-500 transition-colors duration-500 group-hover:text-white/70 group-focus-visible:text-white/70">
                  {service.number}
                </span>
                <div className="relative flex min-w-0 flex-col">
                  <h3 className="m-0 text-left font-serif text-lg font-semibold uppercase leading-tight tracking-tight text-neutral-900 transition-colors duration-300 group-hover:text-white group-focus-visible:text-white sm:text-2xl md:text-4xl">
                    {service.title}
                  </h3>
                  <span className="mt-1 line-clamp-1 text-[10px] font-medium uppercase tracking-widest text-neutral-500 group-hover:text-white/80 group-focus-visible:text-white/80 sm:text-xs md:hidden">
                    {service.subtitle}
                  </span>
                  <span className="absolute left-0 top-[calc(100%+0.75rem)] hidden max-w-xl translate-y-2 text-sm leading-6 text-white/90 opacity-0 transition-[opacity,transform] duration-300 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 md:block">
                    {service.description}
                  </span>
                </div>
              </div>

              <div className="flex shrink-0 items-center gap-4 sm:gap-8">
                <span className="hidden max-w-56 translate-y-5 text-right text-xs font-bold uppercase tracking-widest text-white opacity-0 transition-all duration-700 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100 lg:block">
                  {service.subtitle}
                </span>
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-neutral-300 text-neutral-500 transition-all duration-500 group-hover:scale-110 group-hover:border-white group-hover:bg-white group-hover:text-black group-focus-visible:scale-110 group-focus-visible:border-white group-focus-visible:bg-white group-focus-visible:text-black">
                  <ArrowUpRight className="h-5 w-5 transition-transform duration-500 group-hover:rotate-45 group-focus-visible:rotate-45" aria-hidden="true" />
                </span>
              </div>
            </div>
          </button>
        ))}
        <div className="h-px w-full bg-neutral-200" />
      </div>
    </div>
  </section>
);
