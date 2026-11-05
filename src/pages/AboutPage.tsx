import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { About } from '../components/About';
import { Testimonials } from '../components/Testimonials';
import { Clients } from '../components/Clients';

gsap.registerPlugin(ScrollTrigger);

const storyStages = [
  {
    number: '01',
    title: 'The Beginning',
    copy: 'TRUQEN started with a passion for technology and a vision to build something meaningful. We wanted to help people and businesses bring their ideas to life.',
  },
  {
    number: '02',
    title: 'Our Vision',
    copy: 'Our goal is simple: make technology useful, accessible, and easy to use. We want to create digital solutions that solve real problems.',
  },
  {
    number: '03',
    title: 'Our Approach',
    copy: 'We listen, plan, design, and build. Every project starts with understanding what the client needs. We focus on quality, creativity, and attention to detail.',
  },
  {
    number: '04',
    title: 'What We Do',
    copy: 'We build modern websites, mobile applications, custom software, and e-commerce platforms. Every solution is designed to help businesses move forward.',
  },
  {
    number: '05',
    title: 'Looking Ahead',
    copy: 'We are always learning, improving, and exploring new ideas. Our journey is about building better digital experiences and creating lasting value.',
  },
];

export const AboutPage: React.FC = () => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const page = pageRef.current;
    if (!page || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const context = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('[data-about-reveal]').forEach((element) => {
        gsap.fromTo(
          element,
          { y: 22, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 88%', once: true },
          },
        );
      });
    }, page);

    return () => context.revert();
  }, []);

  return (
    <div ref={pageRef} className="pt-24">
      <header className="mx-auto grid max-w-7xl items-center gap-8 px-6 pb-14 pt-10 md:px-12 md:pb-20 lg:grid-cols-12 lg:gap-12">
        <div className="lg:col-span-6">
          <div className="mb-6 flex items-center gap-3 font-accent text-xs font-semibold uppercase tracking-[0.3em] text-[#D41514]">
            <span>// STUDIO PROFILE</span>
          </div>
          <h1 className="max-w-6xl font-serif text-5xl font-normal leading-[1.04] tracking-tight text-[#111111] sm:text-7xl lg:text-7xl xl:text-8xl">
            Ideas Made <span className="italic text-[#D41514]">Real.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base leading-7 text-[#263344] sm:text-lg sm:leading-8">
            TRUQEN builds websites, mobile apps, and software that help businesses grow. We turn clear ideas into useful digital products.
          </p>
        </div>
        <div className="flex justify-center lg:col-span-6" data-about-reveal>
          <img
            src="/assets/about-studio.webp"
            alt="TRUQEN workspace with a laptop and books for web development, UI and UX design, mobile app development, and custom software development"
            className="h-auto w-full object-contain drop-shadow-[0_24px_32px_rgba(17,17,17,0.18)] lg:scale-105"
            fetchPriority="high"
          />
        </div>
      </header>

      <section aria-labelledby="our-story-title" className="px-6 py-14 md:px-12 md:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5" data-about-reveal>
            <p className="mb-5 font-accent text-xs font-semibold uppercase tracking-[0.3em] text-[#D41514]">
              // OUR STORY
            </p>
            <h2 id="our-story-title" className="font-serif text-4xl font-normal leading-[1.08] tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
              Every Great Idea <span className="italic text-[#D41514]">Starts Somewhere.</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#263344]">
              TRUQEN started with a simple idea: to help businesses grow through technology and make their ideas come to life. We believe every business deserves a strong online presence, a well-designed digital identity, and smart solutions that make everyday work easier. Our passion for technology and creativity drives us to build digital experiences that are both beautiful and useful.

We work on building modern websites, mobile applications, custom software, and e-commerce platforms that help businesses connect with people, improve their services, and reach new opportunities. Every project is a chance to create something meaningful. We take time to understand each idea, focus on the details, and turn plans into reliable digital solutions.

At TRUQEN, we see every project as more than just a piece of work. It is an opportunity to learn, create, and make a positive difference. Our journey is driven by curiosity, continuous improvement, and a strong belief in the power of technology.

We believe good design should always have a purpose. Every detail matters, from the first idea to the final result. We focus on creating solutions that are easy to use, work smoothly, and deliver real value. By combining creativity with the right technology, we aim to build long-term relationships with our clients. As we move forward, we continue to explore new ideas, improve our skills, and create digital solutions that help businesses build a better future.
            </p>
          </div>

          <ol className="relative space-y-0 before:absolute before:bottom-8 before:left-[15px] before:top-8 before:w-px before:bg-[#111111]/10 before:content-[''] sm:before:left-[19px] lg:col-span-7" aria-label="The TRUQEN story">
            {storyStages.map((stage) => (
              <li key={stage.number} className="relative grid grid-cols-[32px_minmax(0,1fr)] gap-4 py-5 first:pt-0 last:pb-0 sm:grid-cols-[40px_minmax(0,1fr)] sm:gap-6 sm:py-7" data-about-reveal>
                <span className="relative z-10 mt-1 flex h-8 w-8 items-center justify-center rounded-full border border-[#D41514]/50 bg-white font-accent text-[10px] font-semibold text-[#D41514] sm:h-10 sm:w-10 sm:text-xs">
                  {stage.number}
                </span>
                <div className="border-b border-[#111111]/10 pb-5 last:border-0 sm:pb-7">
                  <h3 className="font-serif text-2xl font-medium text-[#111111] sm:text-3xl">{stage.title}</h3>
                  <p className="mt-2 max-w-2xl text-sm leading-6 text-[#263344] sm:text-base sm:leading-7">{stage.copy}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <About />

      <Testimonials />
      <Clients />
    </div>
  );
};
