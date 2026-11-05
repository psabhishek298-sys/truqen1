import React from 'react';
import { Smartphone, Layers, CodeXml, BriefcaseBusiness, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { HeroDotGrid } from './ui/HeroDotGrid';

interface HeroProps {
  onStartProject: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onStartProject }) => {
  const heroRef = React.useRef<HTMLElement>(null);
  const services = [
    { title: 'Web Development', subtitle: 'Modern & Scalable', icon: <span className="font-mono text-xl font-semibold">&lt;/&gt;</span> },
    { title: 'App Development', subtitle: 'Android & iOS', icon: <Smartphone className="h-6 w-6" /> },
    { title: 'UI/UX Design', subtitle: 'User-Centric', icon: <Layers className="h-6 w-6" /> },
    { title: 'Custom Software Development', subtitle: 'Built Around Your Needs', icon: <CodeXml className="h-6 w-6" /> },
    { title: 'Custom Business Management Systems', subtitle: 'Streamline Your Business', icon: <BriefcaseBusiness className="h-6 w-6" /> },
  ];

  return (
    <section ref={heroRef} id="hero" className="relative flex min-h-[calc(100svh-120px)] flex-col overflow-hidden px-6 pb-4 pt-4 md:px-12 lg:px-16">
      <HeroDotGrid containerRef={heroRef} />
      <div className="pointer-events-none absolute -right-24 top-28 h-96 w-96 rounded-full bg-red-50/70 blur-3xl" />
      <div className="relative z-10 mx-auto flex w-full max-w-[1500px] items-center justify-between pt-2">
        <Link to="/" aria-label="TRUQEN home" className="group inline-flex items-center">
          <img
            src="/assets/truqen-logo-transparent.png"
            alt="TRUQEN — Websites, Brands, Digital Experiences"
            className="h-14 w-32 object-contain transition-transform duration-300 group-hover:scale-[1.02] md:h-16 md:w-36"
          />
        </Link>
        <button
          type="button"
          onClick={onStartProject}
          className="group inline-flex items-center gap-1.5 rounded-full border border-[#D41514]/70 bg-white px-5 py-2.5 text-[#111111] shadow-sm transition-colors hover:bg-[#D41514] hover:text-white"
        >
          <span className="text-xs font-medium tracking-wide">Let's Talk</span>
          <ArrowUpRight className="h-3.5 w-3.5 text-[#D41514] transition-colors group-hover:text-white" />
        </button>
      </div>
      <div className="relative mx-auto grid w-full max-w-[1500px] flex-1 items-center gap-4 lg:grid-cols-2 lg:gap-0">
        <div className="z-10 py-8 lg:py-10">
          <div className="mb-6 flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-900 sm:text-xs">
            <span className="h-[2px] w-4 shrink-0 bg-[#ed1c24]" />
            <span>Independent Digital Technology Studio</span>
          </div>
          <h1 className="max-w-[800px] font-serif text-[clamp(3.25rem,5.35vw,5.6rem)] font-normal leading-[0.96] tracking-[-0.05em] text-[#17171b]">
            We Build<br />
            <span className="relative inline-block whitespace-nowrap italic text-[#D41514]">Digital Products
              <svg aria-hidden="true" className="absolute -bottom-2 left-8 h-3 w-[58%]" viewBox="0 0 240 16" fill="none"><path d="M3 12C60 2 153 2 237 9" stroke="currentColor" strokeWidth="2" /></svg>
            </span><br />
            <span className="inline-block whitespace-nowrap text-[0.62em] tracking-[-0.045em]">That Create Real Impact<span className="text-[#ed1c24]">.</span></span>
          </h1>
          <p className="mt-6 max-w-[570px] text-base leading-7 text-neutral-600 sm:text-lg sm:leading-8">
            Transforming ambitious ideas into powerful digital experiences through{' '}
            <strong className="font-semibold text-neutral-900 underline decoration-[#ed1c24] decoration-1 underline-offset-4">design</strong>,{' '}
            <strong className="font-semibold text-neutral-900 underline decoration-[#ed1c24] decoration-1 underline-offset-4">development</strong>, and{' '}
            <strong className="font-semibold text-neutral-900 underline decoration-[#ed1c24] decoration-1 underline-offset-4">technology</strong>.
          </p>
        </div>

        <div className="relative flex min-h-[300px] items-end justify-center lg:min-h-[560px]">
          <div className="pointer-events-none absolute bottom-8 left-1/2 h-56 w-[90%] -translate-x-1/2 rounded-full bg-red-100/50 blur-[70px]" />
          <img src="/assets/hero-team.png" alt="TRUQEN-ന്റെ ഡിസൈൻ, ഡെവലപ്‌മെന്റ് ടീം ഒരുമിച്ച് പ്രവർത്തിക്കുന്നു" className="relative z-[1] h-auto w-full max-w-[820px] object-contain lg:translate-y-4" />
        </div>
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1500px] pt-5 md:pt-6">
        <div className="grid grid-cols-2 gap-y-5 md:grid-cols-5 md:gap-0">
          {services.map((service) => (
            <div key={service.title} className="flex items-center gap-3 px-2 md:px-5 lg:px-7">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center text-[#ed1c24]">{service.icon}</span>
              <span className="min-w-0"><span className="block text-xs font-bold text-neutral-900 sm:text-sm">{service.title}</span><span className="mt-0.5 block text-[11px] text-neutral-500 sm:text-sm">{service.subtitle}</span></span>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};
