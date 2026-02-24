import React from 'react';
import { Carousel, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <Carousel fade interval={2000} indicators={true} controls={true}>
      <Carousel.Item>
        <div
          className="hero text-center text-white d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url('/hero_1.jpg')`,
            // backgroundImage: `url('/carousel_1.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '85vh',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.45)',
              zIndex: 1,
            }}
          />
          <Container fluid style={{ position: 'relative', zIndex: 2 }}>
            <h1 className=" snowflake-accent mb-4 fw-medium display-5">
              The Future of Cooling Solutions
            </h1>
            <p
              className="lead mb-5 fs-4"
              style={{ maxWidth: '900px', margin: '0 auto' }}
            >
              We offer an extensive range of commercial freezers, chest freezers
              and upright Fridges at reasonable prices.
            </p>
            <div className="btn-group-single">
              <Button
                variant="primary"
                size="lg"
                className="me-3"
                as={Link}
                to="/products"
                style={{
                  backgroundColor: '#111f5a',
                  borderColor: '#111f5a',
                  borderRadius: '10px',
                }}
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
                }}
                className="btn-contact"
              >
                Contact Us
              </Button>
            </div>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="hero text-center text-white d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url('/hero_2.jpg')`,
            // backgroundImage: `url('/carousel_2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '85vh',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.45)',
              zIndex: 1,
            }}
          />

          <Container style={{ position: 'relative', zIndex: 2 }}>
            <h1 className="snowflake-accent display-3 mb-4">
              Trusted destination for commercial refrigeration equipment.
            </h1>
            <p
              className="lead mb-4"
              style={{ maxWidth: '800px', margin: '0 auto' }}
            >
              Ultra compact, convinient and made to fit anywhere.
            </p>
            <div className="btn-group-single">
              <Button
                variant="primary"
                style={{
                  backgroundColor: '#111f5a',
                  borderColor: '#111f5a',
                  borderRadius: '10px',
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
                }}
                className="btn-contact"
              >
                Contact Us
              </Button>
            </div>
          </Container>
        </div>
      </Carousel.Item>
      <Carousel.Item>
        <div
          className="hero text-center text-white d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: ` url('/hero_3.jpg')`,
            // backgroundImage: ` url('/carousel_3.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            minHeight: '85vh',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'rgba(0, 0, 0, 0.45)',
              zIndex: 1,
            }}
          />

          <Container style={{ position: 'relative', zIndex: 2 }}>
            <h1 className="snowflake-accent display-3 mb-4">
              Sustainably cooler
            </h1>
            <p
              className="lead mb-4"
              style={{ maxWidth: '800px', margin: '0 auto' }}
            >
              Coolers that comes with ecofriendly hydrocarbon refrigerant.
            </p>
            <div className="btn-group-single">
              <Button
                variant="primary"
                size="lg"
                className="me-3"
                as={Link}
                to="/products"
                style={{
                  backgroundColor: '#111f5a',
                  borderColor: '#111f5a',
                  borderRadius: '10px',
                }}
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
                }}
                className="btn-contact"
              >
                Contact Us
              </Button>
            </div>
          </Container>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}

export default HeroSection;
