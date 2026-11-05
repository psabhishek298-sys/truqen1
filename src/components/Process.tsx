import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data';
import { Check } from 'lucide-react';

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="process" className="relative py-16 md:py-20 px-6 md:px-12 bg-[#FFFFFF] border-t border-[#E8E8EA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center space-x-3 text-xs font-accent tracking-[0.3em] text-[#D41514] mb-4 uppercase font-semibold">
              <span>04</span>
              <span className="w-6 h-[1.5px] bg-[#D41514]"></span>
              <span className="text-[#111111]/60">METHODOLOGY</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#111111] font-normal tracking-tight">
              Our Process<span className="text-[#D41514]">.</span>
            </h2>
          </div>

          <p className="mt-6 md:mt-0 max-w-md text-sm md:text-base font-sans text-[#111111]/70 font-light leading-relaxed">
            A linear, zero-friction progression engineered to transform complex hypotheses into production milestones.
          </p>
        </div>

        {/* Minimal Timeline Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-6">
          {PROCESS_STEPS.map((step, idx) => {
            const isActive = activeStep === idx;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`text-left p-4 md:p-6 border-0 bg-transparent transition-colors duration-300 relative ${
                  isActive
                    ? 'text-[#111111]'
                    : 'text-[#111111]/75 hover:text-[#D41514]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-xs font-accent tracking-[0.25em] font-semibold ${isActive ? 'text-[#D41514]' : 'text-[#111111]/50'}`}>
                    {step.step}
                  </span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-[#D41514]"></span>}
                </div>
                <div className={`text-sm md:text-base font-serif font-medium ${isActive ? 'text-[#111111]' : 'text-[#111111]/60'}`}>
                  {step.title}
                </div>

                {/* Progress underline */}
                {isActive && (
                  <div className="absolute -bottom-[1px] left-0 right-0 h-[2.5px] bg-[#D41514]"></div>
                )}
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Card in Crisp Light Studio Theme */}
        <div className="p-8 md:p-14 theme-card relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#D41514]/[0.025] blur-3xl rounded-full pointer-events-none"></div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            <div className="md:col-span-3">
              <span className="font-serif text-6xl md:text-8xl text-[#111111]/15 font-light block">
                {PROCESS_STEPS[activeStep].step}
              </span>
              <h3 className="font-serif text-3xl md:text-4xl text-[#111111] mt-1">
                {PROCESS_STEPS[activeStep].title}
              </h3>
            </div>

            <div className="md:col-span-5">
              <p className="text-base md:text-lg text-[#111111]/85 leading-relaxed font-light">
                {PROCESS_STEPS[activeStep].description}
              </p>
            </div>

            <div className="md:col-span-4 pl-0 md:pl-6 border-l-0 md:border-l border-[#E8E8EA]">
              <span className="text-[11px] font-accent tracking-[0.25em] text-[#D41514] uppercase font-bold block mb-4">
                KEY DELIVERABLES:
              </span>
              <ul className="space-y-3">
                {PROCESS_STEPS[activeStep].deliverables.map((item, dIdx) => (
                  <li key={dIdx} className="flex items-center space-x-3 text-xs md:text-sm text-[#111111]/80 font-sans">
                    <Check className="w-4 h-4 text-[#D41514] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
