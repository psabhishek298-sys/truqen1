import React from 'react';
import { Works } from '../components/Works';
import type { ProjectItem } from '../types';

interface WorkPageProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const WorkPage: React.FC<WorkPageProps> = ({ onSelectProject }) => {
  return (
    <div className="pt-24">
      {/* Editorial Page Header */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-4">
        <div className="flex items-center space-x-3 text-xs font-accent tracking-[0.3em] text-[#D41514] mb-6 uppercase font-semibold">
          <span>// CURATED PORTFOLIO</span>
        </div>
        <h1 className="font-serif text-5xl sm:text-7xl md:text-8xl text-[#111111] font-normal leading-tight tracking-tight">
          Selected Works & <br />
          <span className="italic font-serif text-[#D41514]">Digital Flagships.</span>
        </h1>
        <p className="mt-5 text-lg md:text-xl text-[#111111]/80 max-w-3xl font-light leading-relaxed">
          Explore a curation of high-impact platforms, fintech systems, and luxury digital ateliers developed by TRUQEN.
        </p>
      </div>

      {/* Main Works Grid */}
      <Works onSelectProject={onSelectProject} />
    </div>
  );
};

