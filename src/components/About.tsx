import React, { useEffect, useRef } from 'react';
import { ShieldCheck, Compass, Zap, Cpu } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const pillars = [
  {
    icon: ShieldCheck,
    number: '01',
    title: 'Reliable Work',
    desc: 'We build with care and check every detail so each product works well and is easy to maintain.',
  },
  {
    icon: Compass,
    number: '02',
    title: 'Clear Design',
    desc: 'We create simple layouts that are easy to understand and pleasant to use.',
  },
  {
    icon: Zap,
    number: '03',
    title: 'Useful Motion',
    desc: 'We use animation to guide people and make each step clear.',
  },
  {
    icon: Cpu,
    number: '04',
    title: 'Ready to Grow',
    desc: 'We build digital products that can change and grow with a business.',
  },
];

export const About: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-philosophy-card]',
        { y: 18, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power2.out',
          scrollTrigger: { trigger: section, start: 'top 80%', once: true },
        },
      );
    }, section);

    return () => context.revert();
  }, []);

  return (
    <section ref={sectionRef} id="about" className="relative bg-white px-6 py-14 md:px-12 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="mb-4 flex items-center gap-3 font-accent text-xs font-semibold uppercase tracking-[0.3em] text-[#D41514]">
          <span>02</span>
          <span className="h-px w-6 bg-[#D41514]" />
          <span className="text-[#111111]/60">PHILOSOPHY</span>
        </div>

        <div className="mb-12 grid grid-cols-1 items-start gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl font-normal leading-[1.05] tracking-tight text-[#111111] sm:text-6xl md:text-7xl">
              Good Work, <span className="italic text-[#D41514]">Built with Care.</span>
            </h2>
          </div>
          <div className="space-y-4 pt-2 lg:col-span-5">
            <p className="text-base font-light leading-relaxed text-[#263344] md:text-lg">
              We believe good digital work should look clear, feel easy to use, and work reliably. Design and technology belong together.
            </p>
            <p className="text-sm font-light leading-relaxed text-[#263344]/80 md:text-base">
              We work closely with each client, keep projects focused, and give every detail care.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 pt-4 md:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {pillars.map(({ icon: Icon, number, title, desc }) => (
            <article key={number} data-philosophy-card className="group relative p-6 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-accent text-xs font-bold tracking-[0.25em] text-[#D41514]">{number}</span>
                <Icon className="h-5 w-5 text-[#111111]/40 transition-colors duration-300 group-hover:text-[#D41514]" aria-hidden="true" />
              </div>
              <h3 className="mb-3 font-serif text-xl text-[#111111] transition-colors group-hover:text-[#D41514]">{title}</h3>
              <p className="text-sm font-light leading-relaxed text-[#263344]/80">{desc}</p>
              <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D41514] transition-all duration-300 group-hover:w-full" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
