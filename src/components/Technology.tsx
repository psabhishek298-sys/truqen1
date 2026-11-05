import React from 'react';
import { TECH_STACK } from '../data';

export const Technology: React.FC = () => {
  return (
    <section id="technology" className="relative py-16 md:py-20 px-6 md:px-12 bg-[#FFFFFF] border-t border-[#E8E8EA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center space-x-3 text-xs font-accent tracking-[0.3em] text-[#D41514] mb-4 uppercase font-semibold">
              <span>05</span>
              <span className="w-6 h-[1.5px] bg-[#D41514]"></span>
              <span className="text-[#111111]/60">STACK & INFRASTRUCTURE</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#111111] font-normal tracking-tight">
              Technology Behind <br />
              <span className="italic font-serif text-[#D41514]">Every Idea.</span>
            </h2>
          </div>

          <p className="mt-6 md:mt-0 max-w-md text-sm md:text-base font-sans text-[#111111]/70 font-light leading-relaxed">
            Curated modern technologies optimized for peak resilience, cryptographic security, and sub-millisecond execution.
          </p>
        </div>

        {/* Crisp Monochromatic Grid of Technologies with Crimson Hover State */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {TECH_STACK.map((tech, index) => (
            <div
              key={index}
              className="group relative p-6 md:p-8 theme-card-interactive flex flex-col justify-between h-40 overflow-hidden"
            >
              {/* Category & Status */}
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-accent tracking-[0.2em] text-[#111111]/50 uppercase font-semibold group-hover:text-[#D41514] transition-colors">
                  {tech.category}
                </span>
                <span className="w-2 h-2 rounded-full bg-[#E2E2E6] group-hover:bg-[#D41514] transition-colors"></span>
              </div>

              {/* Name & Tag */}
              <div>
                <h3 className="font-serif text-xl sm:text-2xl text-[#111111] group-hover:text-[#D41514] transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-xs font-accent tracking-[0.15em] text-[#111111]/50 mt-1 font-medium">
                  {tech.tag}
                </p>
              </div>

              {/* Subtle crimson accent line on bottom */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D41514] group-hover:w-full transition-all duration-300 ease-out"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
