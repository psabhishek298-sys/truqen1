import React from 'react';
import {
  ClipboardList,
  Headset,
  MessageCircleMore,
  PanelsTopLeft,
  Rocket,
  ShieldCheck,
} from 'lucide-react';
import ScrollStack, { ScrollStackItem } from './ui/ScrollStack';

const steps = [
  {
    title: 'Free Demo Creation',
    tagline: 'See Your Idea Before We Build It.',
    icon: PanelsTopLeft,
    description: 'First, we listen to your idea and understand what you are looking for. Based on your basic requirements, our team creates an initial demo to show you how your website or application could look and work. You can review the design, explore the layout, and share your thoughts with us. We offer this initial demo for free, so you can see our work before making a decision. Once you are happy with the demo, we move to the next step.',
  },
  {
    title: 'Client Meeting & Discussion',
    tagline: "Let's Understand Your Vision.",
    icon: MessageCircleMore,
    description: 'After you approve the demo, we arrange a meeting with you, either online or offline. During this meeting, we discuss your project in detail and understand exactly what you need. We talk about the features, design preferences, project requirements, budget, and expected delivery time. This helps us make a clear plan before starting the actual development work.',
  },
  {
    title: 'Design & Development',
    tagline: 'Turning Ideas Into Reality.',
    icon: ClipboardList,
    description: 'Once everything is discussed and finalized, we start working on your project. Our team creates a clean, modern, and user-friendly design based on the approved demo. We then develop the website or application using suitable modern technologies. We focus on making everything work smoothly across mobile phones, tablets, and desktop devices. Throughout this stage, we keep the project aligned with your requirements.',
  },
  {
    title: 'Testing & Quality Assurance',
    tagline: 'Making Everything Work Perfectly.',
    icon: ShieldCheck,
    description: 'Before launching your project, we carefully test every important part of it. We check all pages, buttons, forms, links, and features to make sure everything works correctly. We also test the website on different screen sizes and devices to ensure a smooth experience for every visitor. If we find any issues, we fix them before moving forward. Our goal is to deliver a reliable and high-quality final product.',
  },
  {
    title: 'Deployment & Launch',
    tagline: 'Your Project Goes Live.',
    icon: Rocket,
    description: 'After completing development and testing, we prepare your project for launch. We handle the deployment process and configure the required domain, hosting, and server settings. We make sure your website or application is properly available online and ready for visitors. Before handing it over, we perform a final check to ensure everything is working as expected. Your digital journey officially begins here!',
  },
  {
    title: 'Free Maintenance & Support',
    tagline: "We're Here Even After Launch.",
    icon: Headset,
    description: 'Our relationship does not end when your project goes live. TRUQEN provides free maintenance and technical support for an agreed initial period after launch. During this period, we help with supported bug fixes, basic technical issues, and keeping your website running smoothly. We want you to feel confident even after your project is delivered. Our goal is to provide continued support and help your digital platform stay reliable.',
  },
];

export const HomeProcess: React.FC = () => (
  <section id="our-process" className="px-4 py-12 sm:px-6 md:px-12 md:py-16">
    <div className="mx-auto max-w-7xl">
      <header className="mx-auto mb-8 max-w-3xl text-center sm:mb-10">
        <p className="mb-3 font-accent text-[11px] font-semibold uppercase tracking-[0.3em] text-[#ED1C24]">
          HOW WE WORK
        </p>
        <h2 className="font-serif text-4xl font-normal tracking-tight text-[#111111] sm:text-5xl md:text-6xl">
          Our Process<span className="text-[#ED1C24]">.</span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#555555] sm:text-base sm:leading-8">
          Every successful project starts with a good idea. At TRUQEN, we follow a simple and clear process to turn your ideas into real digital solutions. From understanding your needs and creating a free demo to launching and maintaining your project, we work closely with you at every step.
        </p>
      </header>

      <ScrollStack
        className="mx-auto max-w-7xl"
        itemDistance={110}
        itemStackDistance={28}
        stackPosition="10vh"
        itemScale={0.035}
        baseScale={0.91}
        dimAmount={0.12}
        holdDistance={180}
        smoothScroll={false}
        useWindowScroll
      >
        {steps.map(({ title, tagline, description, icon: Icon }, index) => {
          const featured = index === 0;
          return (
            <ScrollStackItem
              key={title}
              itemClassName={`!flex !h-[32rem] !min-h-0 !items-center !justify-center !rounded-xl !border !p-5 sm:!h-[27rem] sm:!p-8 md:!h-[25rem] md:!p-10 ${featured ? '!border-[#D41514]/30 !bg-[#FFF9F8]' : '!border-[#E8E8EA] !bg-white'}`}
              style={featured ? { background: '#FFF9F8', boxShadow: '0 14px 38px rgba(212, 21, 20, 0.08)' } : { background: '#FFFFFF', boxShadow: '0 14px 38px rgba(20, 20, 20, 0.06)' }}
            >
              <article className="mx-auto w-full max-w-4xl">
                <div className="mb-4 flex items-center justify-between sm:mb-5">
                  <span className="font-accent text-[10px] font-bold uppercase tracking-[0.22em] text-[#D41514] sm:text-xs">
                    STEP {String(index + 1).padStart(2, '0')} <span className="mx-2 text-[#C8C8CC]">/</span> 06
                  </span>
                  <span className={`flex h-10 w-10 items-center justify-center rounded-lg border sm:h-11 sm:w-11 ${featured ? 'border-[#D41514]/20 bg-white' : 'border-[#E8E8EA] bg-white'}`}>
                    <Icon className="h-5 w-5 text-[#D41514]" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                </div>
                <h3 className="font-serif text-2xl font-normal leading-tight tracking-tight text-[#111111] sm:text-3xl md:text-4xl">
                  {title}<span className="text-[#D41514]">.</span>
                </h3>
                <p className="mt-2 text-sm font-semibold leading-6 text-[#333333] sm:mt-3 sm:text-base sm:leading-7">
                  {tagline}
                </p>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[#555555] sm:mt-4 sm:text-[15px] sm:leading-7">
                  {description}
                </p>
                <div className="mt-4 flex gap-1.5" aria-label={`Step ${index + 1} of 6`}>
                  {steps.map((step, dotIndex) => (
                    <span key={step.title} className={`h-1 rounded-full transition-colors ${dotIndex === index ? 'w-8 bg-[#D41514]' : 'w-3 bg-[#E8E8EA]'}`} />
                  ))}
                </div>
              </article>
            </ScrollStackItem>
          );
        })}
      </ScrollStack>
    </div>
  </section>
);
