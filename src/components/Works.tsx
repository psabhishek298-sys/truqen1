import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import type { ProjectItem } from '../types';

interface WorksProps {
  onSelectProject: (project: ProjectItem) => void;
}

export const Works: React.FC<WorksProps> = ({ onSelectProject }) => {
  return (
    <section id="work" className="relative py-16 md:py-20 px-6 md:px-12 bg-[#FFFFFF] border-t border-[#E8E8EA]">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="flex items-center space-x-3 text-xs font-accent tracking-[0.3em] text-[#D41514] mb-4 uppercase font-semibold">
              <span>03</span>
              <span className="w-6 h-[1.5px] bg-[#D41514]"></span>
              <span className="text-[#111111]/60">PORTFOLIO</span>
            </div>
            <h2 className="font-serif text-4xl sm:text-6xl md:text-7xl text-[#111111] font-normal tracking-tight">
              Selected Works<span className="text-[#D41514]">.</span>
            </h2>
          </div>

          <div className="mt-6 md:mt-0 flex items-center space-x-6 text-xs font-accent tracking-[0.2em] text-[#111111]/60 font-medium">
            <span>SHOWCASING 2024—2026 ARCHIVES</span>
          </div>
        </div>

        {/* Asymmetrical Project Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-10">
          {PROJECTS_DATA.map((project, index) => {
            const isWide = index % 2 === 0;
            const colSpan = isWide ? 'md:col-span-7' : 'md:col-span-5';

            return (
              <div
                key={project.id}
                className={`${colSpan} group cursor-pointer`}
                onClick={() => onSelectProject(project)}
              >
                {/* Visual Image Container with Minimal White Card & Crimson Hover Border */}
                <div className="relative aspect-[16/10] overflow-hidden bg-[#ECECEE] border border-[#E2E2E6] group-hover:border-[#D41514] transition-all duration-500 shadow-sm group-hover:shadow-[0_12px_30px_rgba(212,21,20,0.1)]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover contrast-105 opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                  
                  {/* Subtle Light Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>

                  {/* Corner Accent Button */}
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#E2E2E6] flex items-center justify-center group-hover:bg-[#D41514] group-hover:border-[#D41514] transition-all duration-300 shadow-sm">
                    <ArrowUpRight className="w-4 h-4 text-[#111111] group-hover:text-white transition-colors" />
                  </div>

                  {/* Badges on bottom-left */}
                  <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
                    {project.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-accent tracking-[0.15em] bg-white/90 backdrop-blur-sm border border-white text-[#111111] px-2.5 py-1 font-medium shadow-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Metadata */}
                <div className="pt-6 space-y-2">
                  <div className="flex items-center justify-between text-xs font-accent tracking-[0.2em] text-[#111111]/50 font-medium">
                    <span className="uppercase">{project.category}</span>
                    <span>{project.year}</span>
                  </div>

                  <h3 className="font-serif text-2xl sm:text-3xl text-[#111111] group-hover:text-[#D41514] transition-colors duration-300 font-normal">
                    {project.title}
                  </h3>

                  <p className="text-xs md:text-sm text-[#111111]/70 line-clamp-2 font-light">
                    {project.description}
                  </p>

                  <div className="pt-2 flex items-center space-x-2 text-xs font-accent tracking-[0.2em] text-[#D41514] group-hover:text-[#111111] transition-colors font-semibold">
                    <span>VIEW CASE STUDY</span>
                    <span className="w-4 h-[1.5px] bg-[#D41514] group-hover:w-8 transition-all duration-300"></span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
