import React from 'react';
import { Process } from '../components/Process';
import { Technology } from '../components/Technology';

export const ProcessPage: React.FC = () => {
  return (
    <div className="pt-24">
      {/* Editorial Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-4">
        <div className="flex items-center space-x-3 text-xs font-accent tracking-[0.3em] text-[#D41514] mb-6 uppercase font-semibold">
          <span>// METHODOLOGY & RIGOR</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#111111] font-normal leading-tight tracking-tight">
          How We Build <br />
          <span className="italic font-serif text-[#D41514]">High-Calibre Software.</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-[#111111]/80 max-w-3xl font-light leading-relaxed">
          From surgical discovery to edge network deployment: our 5-phase engineering protocol guarantees mathematical precision and delivery velocity.
        </p>
      </div>

      {/* Process Section */}
      <Process />

      {/* Technology Stack Grid */}
      <Technology />
    </div>
  );
};

