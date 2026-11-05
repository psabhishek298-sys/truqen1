import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import {
  Braces,
  Cloud,
  Code2,
  Database,
  Layers3,
  ShieldCheck,
} from 'lucide-react';

export interface LogoEntry {
  icon?: React.ReactNode;
  image?: string;
  name: string;
  id: string;
}

interface LogoCloudSwapProps {
  title?: string;
  subtitle?: string;
  eyebrow?: string;
  logos?: LogoEntry[];
  className?: string;
  monochrome?: boolean;
}

const DEFAULT_LOGOS: LogoEntry[] = [
  { id: 'react', name: 'React', icon: <Code2 /> },
  { id: 'typescript', name: 'TypeScript', icon: <Braces /> },
  { id: 'cloud', name: 'Cloud', icon: <Cloud /> },
  { id: 'data', name: 'Data Systems', icon: <Database /> },
  { id: 'architecture', name: 'Architecture', icon: <Layers3 /> },
  { id: 'security', name: 'Security', icon: <ShieldCheck /> },
];

const LogoCloudSwap: React.FC<LogoCloudSwapProps> = ({
  title = 'Built on a considered stack',
  subtitle = 'Modern tools, composed into dependable digital experiences.',
  eyebrow = '// ENGINEERED WITH INTENT',
  logos = DEFAULT_LOGOS,
  className = '',
  monochrome = false,
}) => {
  const [waving, setWaving] = React.useState(false);
  const reduceMotion = useReducedMotion();

  React.useEffect(() => {
    if (reduceMotion) return;
    const timer = window.setInterval(() => setWaving(true), 3800);
    return () => window.clearInterval(timer);
  }, [reduceMotion]);

  return (
    <section
      aria-label="Technology capabilities"
      className={`w-full bg-transparent px-6 py-10 md:px-12 md:py-12 ${className}`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center">
          {eyebrow && (
            <p className={`mb-2 font-accent text-[10px] font-semibold uppercase tracking-[0.3em] ${monochrome ? 'text-[#111111]' : 'text-[#D41514]'}`}>
              {eyebrow}
            </p>
          )}
          <h2 className="font-serif text-2xl font-normal tracking-tight text-[#111111] sm:text-3xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mx-auto mt-2 max-w-xl text-sm font-light leading-relaxed text-[#111111]/65">
              {subtitle}
            </p>
          )}
        </div>

        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-8 gap-y-6 sm:gap-x-12 md:gap-x-16">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.id}
              aria-label={logo.name}
              animate={
                reduceMotion || !waving
                  ? { clipPath: 'inset(0 0% 0 0)', filter: 'blur(0px)', opacity: 1 }
                  : {
                      clipPath: ['inset(0 0% 0 0)', 'inset(0 100% 0 0)', 'inset(0 0% 0 0)'],
                      filter: ['blur(0px)', 'blur(5px)', 'blur(0px)'],
                      opacity: [1, 0.25, 1],
                    }
              }
              transition={
                waving && !reduceMotion
                  ? {
                      duration: 0.85,
                      delay: index * 0.11,
                      times: [0, 0.45, 1],
                      ease: 'easeInOut',
                    }
                  : { duration: 0.25 }
              }
              onAnimationComplete={() => {
                if (waving && index === logos.length - 1) setWaving(false);
              }}
              whileHover={reduceMotion ? undefined : { scale: 1.06 }}
              className={`flex min-w-[88px] flex-col items-center gap-2 text-[#111111]/65 transition-colors ${logo.image ? 'min-w-[252px]' : ''} ${monochrome ? 'hover:text-[#111111]' : 'hover:text-[#D41514]'}`}
            >
              {logo.image ? (
                <img src={logo.image} alt={logo.name} loading="lazy" className="h-[5.6rem] w-full max-w-[308px] object-contain" />
              ) : (
                <>
                  {logo.icon && (
                    <span className="flex h-10 w-10 items-center justify-center [&>svg]:h-7 [&>svg]:w-7 [&>svg]:stroke-[1.5]">
                      {logo.icon}
                    </span>
                  )}
                  <span className="whitespace-nowrap font-accent text-[10px] font-medium tracking-[0.08em] sm:text-[11px]">
                    {logo.name}
                  </span>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoCloudSwap;
