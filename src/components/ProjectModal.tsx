import React from 'react';
import { X, ArrowUpRight, Award } from 'lucide-react';
import type { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
  onInquire: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/50 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-4xl theme-card bg-white shadow-2xl max-h-[92vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-20 p-2.5 text-[#111111] hover:text-[#D41514] bg-white/90 backdrop-blur-md border border-[#E8E8EA] transition-colors shadow-sm"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Visual in Modal */}
        <div className="relative aspect-[21/9] sm:aspect-[16/8] overflow-hidden bg-[#ECECEE] border-b border-[#E8E8EA]">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover contrast-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80"></div>
          
          <div className="absolute bottom-6 left-6 md:left-10 right-6">
            <div className="text-xs font-accent tracking-[0.25em] text-[#D41514] uppercase mb-1 font-semibold">
              // CASE ARCHIVE — {project.year}
            </div>
            <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl text-white font-normal">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Modal Content Details */}
        <div className="p-6 md:p-10 space-y-8">
          {/* Metadata Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-[#E8E8EA] text-xs font-accent tracking-[0.15em]">
            <div>
              <span className="text-[#111111]/50 block uppercase font-medium">CLIENT</span>
              <span className="text-[#111111] mt-1 block font-semibold">{project.client}</span>
            </div>
            <div>
              <span className="text-[#111111]/50 block uppercase font-medium">CATEGORY</span>
              <span className="text-[#111111] mt-1 block font-semibold">{project.category}</span>
            </div>
            <div>
              <span className="text-[#111111]/50 block uppercase font-medium">TIMELINE</span>
              <span className="text-[#111111] mt-1 block font-semibold">4 Months Delivery</span>
            </div>
            <div>
              <span className="text-[#111111]/50 block uppercase font-medium">STATUS</span>
              <span className="text-[#D41514] mt-1 block font-semibold">Live in Production</span>
            </div>
          </div>

          {/* Narrative & Impact */}
          <div className="space-y-3">
            <h3 className="font-serif text-2xl text-[#111111]">Architectural Summary</h3>
            <p className="text-base text-[#111111]/80 leading-relaxed font-light font-sans">
              {project.description} Engineered with strict zero-compromise criteria, integrating high-throughput data channels with a custom kinetic UI pipeline. The platform operates continuously with zero downtime and sub-20ms edge latency.
            </p>
          </div>

          {/* Highlight Badge */}
          <div className="p-5 border border-[#D41514]/20 bg-[#D41514]/[0.03] flex items-start space-x-4">
            <div className="p-2 bg-[#D41514]/10 text-[#D41514] shrink-0">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[11px] font-accent tracking-[0.2em] text-[#D41514] uppercase font-bold block">
                PERFORMANCE METRIC
              </span>
              <p className="text-sm text-[#111111] font-sans mt-0.5 font-medium">
                {project.highlight}
              </p>
            </div>
          </div>

          {/* Technical Specs Tags */}
          <div>
            <span className="text-xs font-accent tracking-[0.2em] text-[#111111]/60 uppercase block mb-3 font-semibold">
              TECHNOLOGY VECTOR APPLIED:
            </span>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 border border-[#E8E8EA] text-xs font-accent tracking-[0.15em] text-[#111111] bg-[#FFFFFF] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-[#E8E8EA] flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={() => {
                onClose();
                onInquire();
              }}
              className="w-full sm:w-auto px-8 py-3.5 bg-[#D41514] hover:bg-[#B51110] text-white font-accent text-xs tracking-[0.25em] font-semibold flex items-center justify-center space-x-2 transition-all shadow-[0_4px_20px_rgba(212,21,20,0.3)]"
            >
              <span>INQUIRE SIMILAR ARCHITECTURE</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={onClose}
              className="text-xs font-accent tracking-[0.2em] text-[#111111]/60 hover:text-[#111111] transition-colors font-medium"
            >
              RETURN TO ARCHIVES
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
