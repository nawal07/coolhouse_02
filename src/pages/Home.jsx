import React from 'react';
import HeroSection from '../components/HeroSection';
import DecadesOfExcellence from '../components/DecadesOfExcellence';
import TrustBar from '../components/TrustBar';
import Overview from '../components/Overview';
import OurProducts from '../components/OurProducts';
import CTASection from '../components/CTASection';
import Seo from '../components/Seo';
import { SITE_NAME, SITE_URL } from '../constants/seo';
import { useLanguage } from '../i18n/LanguageContext';

const HOME_JSON_LD = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: SITE_NAME,
  url: SITE_URL,
};

function Home() {
  const { t } = useLanguage();
  return (
    <div className="mt-5">
      <Seo
        title={t.home.seo.title}
        description={t.home.seo.description}
        jsonLd={HOME_JSON_LD}
      />
      {/* Visually hidden page heading for SEO/accessibility — the carousel below carries its own visual headings per slide */}
      <h1 className="visually-hidden">{t.home.hiddenH1}</h1>

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
