import React from 'react';
import HeroSection from '../components/HeroSection';
import HomeServicesSection from '../components/HomeServicesSection';
import OurWorkSection from '../components/OurWorkSection';
import TestimonialsSection from '../components/TestimonialsSection';
import DemoSection from '../components/DemoSection';

export default function Home({ darkMode }) {
  return (
    <>
      <HeroSection darkMode={darkMode} />
      <HomeServicesSection darkMode={darkMode} />
      <OurWorkSection darkMode={darkMode} />
      <TestimonialsSection darkMode={darkMode} />
    </>
  );
}
