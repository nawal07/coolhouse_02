import React from 'react';
import { HERO_1, HERO_2, HERO_3, HERO_4 } from '../constants/images';
import { Carousel, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

const SLIDE_IMAGES = [HERO_1, HERO_2, HERO_3, HERO_4];

function HeroSection() {
  const { t, language } = useLanguage();
  const slides = t.home.hero.slides.map((slide, i) => ({
    ...slide,
    image: SLIDE_IMAGES[i],
  }));

  return (
    <div style={{ animation: 'pageFadeIn 0.6s ease forwards', opacity: 0 }}>
      {/*
        key={language} forces a full remount when the language toggles.
        Without it, react-bootstrap's fade transition can be left mid-flight
        (stuck with its transitional carousel-item-start/-end class), which
        keeps the base (non-fade) float/negative-margin rule in effect and
        shoves the slide a full viewport-width off-screen — invisible in
        both languages, but only surfacing right when new content swaps in.
      */}
      <Carousel key={language} fade interval={3500} indicators controls>
        {slides.map((slide, i) => (
          <Carousel.Item key={i}>
            {/*
              Using a <div> with position:relative and an <img> absolutely
              placed inside keeps the background & overlay always in sync —
              no more "overlay appears before the image" flash.
            */}
            <div
              className="hero hero-slide text-center text-white d-flex align-items-center justify-content-center"
              style={{ position: 'relative', overflow: 'hidden' }}
            >
              {/* Background image — first slide loads eagerly for LCP, the rest lazily */}
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
                loading={i === 0 ? 'eager' : 'lazy'}
                fetchPriority={i === 0 ? 'high' : 'auto'}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center',
                  userSelect: 'none',
                  pointerEvents: 'none',
                }}
              />

              {/* Dark overlay — always rendered on top of img, no timing mismatch */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(0, 0, 0, 0.40)',
                  zIndex: 1,
                }}
              />

              {/* Text content */}
              <Container fluid style={{ position: 'relative', zIndex: 2 }}>
                <h2 className="snowflake-accent display-4 mb-4 hero-title">
                  {slide.title}
                </h2>
                <p className="lead mb-4 hero-desc">{slide.desc}</p>
                <div className="btn-group-single">
                  <Button
                    variant="primary"
                    style={{
                      backgroundColor: '#111f5a',
                      borderColor: '#111f5a',
                      borderRadius: '10px',
                      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                      minWidth: '150px',
                    }}
                    size="lg"
                    className="me-3"
                    as={Link}
                    to="/products"
                  >
                    {t.home.hero.btnProducts}
                  </Button>
                  <Button
                    variant="primary"
                    size="lg"
                    as={Link}
                    to="/contact"
                    style={{
                      backgroundColor: '#111f5a',
                      borderColor: '#111f5a',
                      borderRadius: '10px',
                      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                      minWidth: '150px',
                    }}
                    className="btn-contact"
                  >
                    {t.home.hero.btnContact}
                  </Button>
                </div>
              </Container>
            </div>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default HeroSection;
