import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../data';

export const Works: React.FC = () => (
  <section id="work" className="relative border-t border-[#E8E8EA] bg-white px-6 py-16 md:px-12 md:py-20">
    <div className="mx-auto max-w-[1600px]">
      <div className="mb-10 flex flex-col justify-between md:flex-row md:items-end">
        <div>
          <div className="mb-4 flex items-center gap-3 font-accent text-xs font-semibold uppercase tracking-[0.3em] text-[#D41514]">
            <span>03</span>
            <span className="h-px w-6 bg-[#D41514]" />
            <span className="text-[#111111]/60">PORTFOLIO</span>
          </div>
          <h2 className="font-serif text-4xl font-normal tracking-tight text-[#111111] sm:text-6xl md:text-7xl">
            Projects<span className="text-[#D41514]">.</span>
          </h2>
        </div>
        <p className="mt-5 font-accent text-xs font-medium tracking-[0.2em] text-[#111111]/60 md:mt-0">
          2 SELECTED PROJECTS
        </p>
      </div>

      <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:gap-12">
        {PROJECTS_DATA.map((project) => {
          const card = (
            <>
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-[#E2E2E6] bg-[#ECECEE]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                  loading="lazy"
                />
                {project.link && (
                  <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border border-[#E2E2E6] bg-white/95 shadow-sm transition-colors duration-300 group-hover:bg-[#D41514] group-hover:text-white">
                    <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                  </span>
                )}
              </div>
              <div className="pt-5">
                <h3 className="font-serif text-2xl font-normal text-[#111111] transition-colors group-hover:text-[#D41514] sm:text-3xl">
                  {project.title}
                </h3>
                <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 font-accent text-[11px] font-medium uppercase tracking-[0.16em] text-[#111111]/55 sm:text-xs">
                  <span>{project.year}</span>
                  <span aria-hidden="true" className="h-1 w-1 rounded-full bg-[#D41514]" />
                  <span>{project.category}</span>
                </div>
              </div>
            </>
          );

          return project.link ? (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${project.title} website`}
              className="group block min-w-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D41514]"
            >
              {card}
            </a>
          ) : (
            <article key={project.id} className="group min-w-0">
              {card}
            </article>
          );
        })}
      </div>
    </div>
  </section>
);
