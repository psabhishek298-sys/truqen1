import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';
import { ContactModal } from './components/ContactModal';
import { ProjectModal } from './components/ProjectModal';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { WorkPage } from './pages/WorkPage';
import { ProcessPage } from './pages/ProcessPage';
import { ContactPage } from './pages/ContactPage';

import type { ServiceItem, ProjectItem } from './types';

gsap.registerPlugin(ScrollTrigger);

export function App() {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);
  const [selectedService, setSelectedService] = React.useState<ServiceItem | null>(null);
  const [selectedProject, setSelectedProject] = React.useState<ProjectItem | null>(null);

  // Initialize Lenis Smooth Scroll and sync with GSAP
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const updateGsap = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateGsap);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateGsap);
      lenis.destroy();
    };
  }, []);

  const handleSelectService = (service: ServiceItem) => {
    setSelectedService(service);
    setIsContactModalOpen(true);
  };

  const handleSelectProject = (project: ProjectItem) => {
    setSelectedProject(project);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="site-typography relative min-h-screen bg-[#FFFFFF] text-[#111111] selection:bg-[#D41514] selection:text-white font-sans flex flex-col justify-between">
        {/* Subtle Luxury Paper Texture Overlay */}
        <div className="grain-overlay" />

        {/* Global Navigation: HOME, ABOUT, WORK, PROCESS, CONTACT */}
        <Navbar />

        {/* Multi-Page Routes */}
        <main className="flex-grow">
          <Routes>
            <Route
              path="/"
              element={<HomePage onSelectService={handleSelectService} />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route
              path="/work"
              element={<WorkPage onSelectProject={handleSelectProject} />}
            />
            <Route path="/process" element={<ProcessPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer onOpenContactModal={() => setIsContactModalOpen(true)} />

        {/* Modals */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          preselectedService={selectedService}
        />

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
          onInquire={() => {
            setSelectedProject(null);
            setIsContactModalOpen(true);
          }}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
