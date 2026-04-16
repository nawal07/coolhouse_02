import React, { useState, useEffect } from 'react';
import { Carousel, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: '/hero_1.png',
    title: 'General Deluxe Upright Fridges & Freezers.',
    desc: 'Premium commercial refrigeration solutions for modern businesses — distributed by Cool House Trading.',
  },
  {
    image: '/hero_2.png',
    title: 'The Future of Cooling Solutions.',
    desc: 'Leading the Future of Commercial Refrigeration & Home Appliances in the Middle East.',
  },
  {
    image: '/hero_3.png',
    title: 'Your Partner in Cooling and Comfort.',
    desc: 'Trusted Commercial Refrigeration Solutions for Modern Businesses & Home Comfort Across the Region',
  },
  {
    image: '/hero_4.png',
    title: 'Your Partner in Cooling and Comfort.',
    desc: 'Trusted Commercial Refrigeration Solutions for Modern Businesses & Home Comfort Across the Region',
  },
];

function HeroSection() {
  const [ready, setReady] = useState(false);

  // Preload every image before rendering the carousel
  useEffect(() => {
    let loaded = 0;
    const total = slides.length;

    slides.forEach(slide => {
      const img = new Image();
      img.src = slide.image;
      const next = () => {
        loaded += 1;
        if (loaded >= total) setReady(true);
      };
      img.onload = next;
      img.onerror = next; // don't block on broken images
    });
  }, []);

  // Skeleton shimmer while images are preloading
  if (!ready) {
    return (
      <div
        className="skeleton-shimmer"
        style={{ minHeight: '85vh', width: '100%' }}
      />
    );
  }

  return (
    <div style={{ animation: 'pageFadeIn 0.6s ease forwards', opacity: 0 }}>
      <Carousel fade interval={3500} indicators controls>
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
              {/* Background image — loaded eagerly before render */}
              <img
                src={slide.image}
                alt=""
                aria-hidden="true"
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
                <h1 className="snowflake-accent display-4 mb-4 hero-title">
                  {slide.title}
                </h1>
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
                    Our Products
                  </Button>
                  <Button
                    variant="outline-primary"
                    size="lg"
                    as={Link}
                    to="/contact"
                    style={{
                      color: '#ffffff',
                      borderColor: '#ffffff',
                      borderRadius: '10px',
                      fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                      minWidth: '150px',
                    }}
                    className="btn-contact"
                  >
                    Contact Us
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
