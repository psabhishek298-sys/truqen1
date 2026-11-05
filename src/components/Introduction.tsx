import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Introduction: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const textCol1Ref = useRef<HTMLDivElement>(null);
  const textCol2Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(headlineRef.current, {
        y: 22,
        autoAlpha: 0,
      }, {
        y: 0,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: headlineRef.current,
          start: 'top 88%',
          once: true,
        },
        duration: 0.8,
        ease: 'power2.out',
      });

      gsap.fromTo([textCol1Ref.current, textCol2Ref.current], {
        y: 18,
        autoAlpha: 0,
      }, {
        y: 0,
        autoAlpha: 1,
        scrollTrigger: {
          trigger: textCol1Ref.current,
          start: 'top 88%',
          once: true,
        },
        stagger: 0.12,
        duration: 0.7,
        ease: 'power2.out',
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      id="intro"
      className="relative py-16 md:py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Index Marker */}
        <div className="flex items-center space-x-3 text-xs font-accent tracking-[0.3em] text-[#D41514] mb-5 uppercase font-semibold">
          <span>00</span>
          <span className="w-6 h-[1.5px] bg-[#D41514]"></span>
          <span className="text-[#111111]/60">MANIFESTO</span>
        </div>

        {/* Editorial Headline */}
        <h2
          ref={headlineRef}
          className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl text-[#111111] font-normal leading-[1.05] tracking-tight max-w-5xl mb-10 md:mb-14"
        >
          Beyond Ordinary <br />
          <span className="italic font-serif text-[#D41514] transition-colors duration-500">
            Digital.
          </span>
        </h2>

        {/* Split Editorial Layout */}
        <div className="grid grid-cols-1 gap-8 border-t border-[#E8E8EA] pt-6 md:grid-cols-2 md:gap-10 lg:gap-12">
          <div ref={textCol1Ref} className="space-y-6">
            <h3 className="font-accent text-xs tracking-[0.25em] text-[#111111] uppercase font-bold">
              WHERE DISCIPLINE MEETS DIGITAL ARTISTRY
            </h3>
            <p className="text-[#111111]/85 text-base md:text-lg font-sans leading-relaxed">
              TRUQEN is a digital development studio focused on building modern websites, mobile applications, and custom software.
            </p>
            <p className="text-[#111111]/75 text-base md:text-lg leading-relaxed font-sans">
              We don&apos;t believe in ordinary templates or common designs. Every project is built with careful planning, creative design, and modern technology.
            </p>
            <p className="text-[#111111]/75 text-base md:text-lg leading-relaxed font-sans">
              Our goal is to turn ideas into simple, beautiful, and powerful digital experiences.
            </p>
          </div>

          <div ref={textCol2Ref} className="space-y-6">
            <div className="space-y-6">
              <h3 className="font-accent text-xs tracking-[0.25em] text-[#D41514] uppercase font-bold">
                THE TRUQEN CODE
              </h3>
              <p className="text-[#111111]/85 text-base md:text-lg font-sans leading-relaxed">
                We believe great digital experiences come from three simple principles: quality, creativity, and simplicity.
              </p>
              <p className="text-[#111111]/75 text-base md:text-lg leading-relaxed font-sans">
                Every detail matters. Every design has a purpose. Every solution is built to provide a smooth experience, strong performance, and lasting value.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
