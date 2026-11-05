import React from 'react';

const TESTIMONIALS = [
  {
    id: 'arjun',
    name: 'Ar.Sibin.M.Sabu',
    role: 'Principle Architect, Green Realm Landscape',
    image: '/assets/testimonials/sibin-sabu.png',
    quote:
      'TRUQEN delivered a clean, modern, and high-performing website for our business. The design, speed, and overall experience were exactly what we needed.',
  },
  {
    id: 'sneha',
    name: 'Sneha P',
    role: 'Owner, ',
    image: '/assets/testimonials/sneha-p.webp',
    quote:
      'Professional, responsive, and easy to work with. TRUQEN understood our requirements perfectly and built a solution that truly added value to our business.',
  },
];

export const Testimonials: React.FC = () => (
  <section
    aria-labelledby="testimonials-title"
    className="px-6 py-10 md:px-12 md:py-12"
  >
    <div className="mx-auto max-w-7xl">
      <header className="mx-auto mb-6 max-w-4xl text-center sm:mb-8">
        <div className="mb-3 flex items-center justify-center gap-3 font-accent text-[10px] font-bold uppercase tracking-[0.3em] text-[#ED1C24] sm:text-xs">
          <span className="h-px w-6 bg-[#ED1C24] sm:w-8" />
          <span>Testimonials</span>
          <span className="h-px w-6 bg-[#ED1C24] sm:w-8" />
        </div>
        <h2
          id="testimonials-title"
          className="font-sans text-3xl font-extrabold tracking-tight text-[#111111] sm:text-4xl md:text-[2.25rem]"
        >
          What Our <span className="text-[#ED1C24]">Clients</span> Say
        </h2>
        <p className="mt-2 text-sm text-[#111111]/65 sm:text-base">
          Real feedback from businesses we&apos;ve helped grow digitally.
        </p>
      </header>

      <div className="mx-auto grid max-w-5xl grid-cols-1 items-stretch gap-5 md:grid-cols-2 md:gap-6">
        {TESTIMONIALS.map((testimonial) => (
          <figure
            key={testimonial.id}
            className="flex h-full flex-col items-center rounded-2xl border border-[#111111]/10 bg-white p-5 text-center shadow-[0_8px_30px_rgba(17,17,17,0.035)] sm:p-6"
          >
            <div
              aria-label="5 out of 5 stars"
              className="mb-4 flex gap-1 text-base leading-none text-[#ED1C24]"
            >
              {Array.from({ length: 5 }, (_, index) => (
                <span key={index} aria-hidden="true">★</span>
              ))}
            </div>

            <figcaption className="flex min-h-14 items-center justify-center gap-3">
              <span className="h-12 w-12 shrink-0 overflow-hidden rounded-xl border border-[#ED1C24] sm:h-14 sm:w-14">
                <img
                  src={testimonial.image}
                  alt={`${testimonial.name}, ${testimonial.role}`}
                  className={`h-full w-full object-cover ${testimonial.id === 'arjun' ? 'scale-125 origin-top' : 'scale-110'}`}
                  loading="lazy"
                />
              </span>
              <div className="min-w-0 text-left">
                <h3 className="font-sans text-base font-bold text-[#111111] sm:text-lg">
                  {testimonial.name}
                </h3>
                <p className="mt-1 text-xs leading-snug text-[#111111]/65 sm:text-sm">
                  {testimonial.role}
                </p>
              </div>
            </figcaption>

            <blockquote className="mt-4 w-full max-w-[42ch] flex-1 text-center text-sm leading-6 text-[#111111] sm:text-base sm:leading-7">
              “{testimonial.quote}”
            </blockquote>
          </figure>
        ))}
      </div>
    </div>
  </section>
);
