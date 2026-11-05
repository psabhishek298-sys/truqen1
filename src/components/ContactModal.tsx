import React, { useState } from 'react';
import { X, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import type { ServiceItem } from '../types';
import { SERVICES_DATA } from '../data';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: ServiceItem | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  preselectedService,
}) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '$50k - $150k',
    service: preselectedService ? preselectedService.title : SERVICES_DATA[0]?.title ?? '',
    message: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/50 backdrop-blur-md animate-in fade-in duration-300">
      <div className="relative w-full max-w-3xl theme-card bg-white p-6 sm:p-10 md:p-12 shadow-2xl max-h-[90vh] overflow-y-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#111111] hover:text-[#D41514] border border-[#E8E8EA] hover:border-[#D41514] transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-12 text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-[#D41514]/10 border border-[#D41514] flex items-center justify-center mx-auto text-[#D41514]">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl md:text-4xl text-[#111111]">Project Request Transmitted</h3>
            <p className="text-sm font-sans text-[#111111]/70 max-w-md mx-auto leading-relaxed">
              We have received your specifications. Our technical partner will contact you directly within 12 hours with an initial architectural perspective.
            </p>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-6 px-8 py-3 bg-[#D41514] text-white font-accent text-xs tracking-[0.25em] font-semibold"
            >
              CLOSE WINDOW
            </button>
          </div>
        ) : (
          <div>
            <div className="mb-8">
              <div className="flex items-center space-x-2 text-xs font-accent tracking-[0.25em] text-[#D41514] uppercase mb-2 font-semibold">
                <span>// ENGAGEMENT INITIATION</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-[#111111] font-normal">
                Start a Project<span className="text-[#D41514]">.</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#111111]/60 font-light mt-2">
                Tell us about the digital project you have in mind.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-accent tracking-[0.2em] uppercase text-[#111111]/70 mb-2 font-semibold">
                    NAME *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Marcus Sterling"
                      className="w-full theme-control px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-accent tracking-[0.2em] uppercase text-[#111111]/70 mb-2 font-semibold">
                    DIRECT EMAIL *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="marcus@sterling.ch"
                      className="w-full theme-control px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 outline-none"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[11px] font-accent tracking-[0.2em] uppercase text-[#111111]/70 mb-2 font-semibold">
                    ORGANIZATION
                  </label>
                  <input
                    type="text"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="Sterling & Co."
                      className="w-full theme-control px-4 py-3 text-sm text-[#111111] placeholder-[#111111]/30 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-accent tracking-[0.2em] uppercase text-[#111111]/70 mb-2 font-semibold">
                    SERVICE
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full theme-control px-4 py-3 text-sm text-[#111111] outline-none"
                  >
                    {SERVICES_DATA.map((service) => (
                      <option key={service.id} value={service.title}>{service.number} — {service.title}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-accent tracking-[0.2em] uppercase text-[#111111]/70 mb-2 font-semibold">
                  ESTIMATED CAPITAL ALLOCATION
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {['$25k - $50k', '$50k - $100k', '$100k - $250k', '$250k+'].map((budgetOption) => (
                    <button
                      key={budgetOption}
                      type="button"
                      onClick={() => setFormData({ ...formData, budget: budgetOption })}
                      className={`py-2 px-3 text-xs font-accent tracking-[0.1em] border transition-colors ${
                        formData.budget === budgetOption
                          ? 'border-[#D41514] bg-[#D41514] text-white font-semibold'
                          : 'border-[#E8E8EA] bg-[#FFFFFF] text-[#111111]/70 hover:border-[#111111]/30'
                      }`}
                    >
                      {budgetOption}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-accent tracking-[0.2em] uppercase text-[#111111]/70 mb-2 font-semibold">
                  PROJECT SPECIFICATION *
                </label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline key targets, timeline requirements, and functional scope..."
                  className="w-full theme-control p-4 text-sm text-[#111111] placeholder-[#111111]/30 outline-none resize-none"
                ></textarea>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-4 bg-[#D41514] hover:bg-[#B51110] text-white font-accent text-xs tracking-[0.25em] font-semibold flex items-center justify-center space-x-2 transition-all shadow-[0_4px_20px_rgba(212,21,20,0.3)] hover:shadow-[0_6px_25px_rgba(212,21,20,0.45)]"
                >
                  <span>SUBMIT TRANSMISSION</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
