import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { Introduction } from '../components/Introduction';
import { Services } from '../components/Services';
import { HomeProcess } from '../components/HomeProcess';
import { Testimonials } from '../components/Testimonials';
import { Clients } from '../components/Clients';
import type { ServiceItem } from '../types';

interface HomePageProps {
  onSelectService: (service: ServiceItem) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onSelectService }) => {
  const navigate = useNavigate();

  return (
    <div className="relative isolate min-h-screen bg-white">
      <div className="relative z-10">
        <Hero
          onStartProject={() => navigate('/contact')}
        />
        <Introduction />
        {/* Services embedded on Home page as requested */}
        <Services onSelectService={onSelectService} />
        <HomeProcess />
        <Testimonials />
        <Clients />
      </div>
    </div>
  );
};

