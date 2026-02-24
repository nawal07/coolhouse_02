import React from 'react';
import HeroSection from '../components/HeroSection';
import DecadesOfExcellence from '../components/DecadesOfExcellence';
import TrustBar from '../components/TrustBar';
import Overview from '../components/Overview';
import OurProducts from '../components/OurProducts';
import CTASection from '../components/CTASection';

function Home() {
  return (
    <div className="mt-5">
      {/* Hero Carousel */}
      <HeroSection />

      {/* Trust bar */}
      <TrustBar />

      {/* About Summary and Why Choose Us */}
      <Overview />

      {/* Decades of excellence*/}
      <DecadesOfExcellence />

      {/* Core Products */}
      <OurProducts />

      {/* Final CTA */}
      <CTASection />

    </div>
  );
}

export default Home;
