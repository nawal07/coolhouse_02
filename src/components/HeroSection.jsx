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
            backgroundImage: `url('/hero_1.png')`,
            // backgroundImage: `url('/carousel_1.png')`,
            backgroundSize: 'contain',
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
            <h1
              className="snowflake-accent display-4 mb-4"
              style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                lineHeight: '1.1',
              }}
            >
              General Deluxe Upright Fridges & Freezers.
            </h1>
            <p
              className="lead mb-4"
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                fontSize: 'clamp(1rem, 5vw, 1.5rem)',
                lineHeight: '1.5',
              }}
            >
              Premium commercial refrigeration solutions by General Deluxe –
              distributed exclusively by Coolhouse Trading.
            </p>
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
      <Carousel.Item>
        <div
          className="hero text-center text-white d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: `url('/hero_2.jpg')`,
            // backgroundImage: `url('/carousel_2.png')`,
            backgroundSize: 'contain',
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
            <h1
              className="snowflake-accent display-4 mb-4"
              style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                lineHeight: '1.1',
              }}
            >
              The Future of Cooling Solutions.
            </h1>
            <p
              className="lead mb-4"
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                fontSize: 'clamp(1rem, 5vw, 1.5rem)',
                lineHeight: '1.5',
              }}
            >
              Leading the Future of Commercial Refrigeration & Home Appliances
              in the Middle East.
            </p>
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
      <Carousel.Item>
        <div
          className="hero text-center text-white d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: ` url('/hero_3.jpg')`,
            // backgroundImage: ` url('/carousel_3.png')`,
            backgroundSize: 'contain',
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
            <h1
              className="snowflake-accent display-4 mb-4"
              style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                lineHeight: '1.1',
              }}
            >
              Your Partner in Cooling and Comfort.
            </h1>
            <p
              className="lead mb-4"
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                fontSize: 'clamp(1rem, 5vw, 1.5rem)',
                lineHeight: '1.5',
              }}
            >
              Trusted Commercial Refrigeration Solutions for Modern Businesses &
              Home Comfort Across the Region
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
                  fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                  minWidth: '150px',
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
      <Carousel.Item>
        <div
          className="hero text-center text-white d-flex align-items-center justify-content-center"
          style={{
            backgroundImage: ` url('/hero_4.png')`,
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

          <Container fluid style={{ position: 'relative', zIndex: 2 }}>
            <h1
              className="snowflake-accent display-4 mb-4"
              style={{
                fontSize: 'clamp(2rem, 6vw, 3rem)',
                lineHeight: '1.1',
              }}
            >
              Your Partner in Cooling and Comfort.
            </h1>
            <p
              className="lead mb-4"
              style={{
                maxWidth: '800px',
                margin: '0 auto',
                fontSize: 'clamp(1rem, 5vw, 1.5rem)',
                lineHeight: '1.5',
              }}
            >
              Trusted Commercial Refrigeration Solutions for Modern Businesses &
              Home Comfort Across the Region
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
                  fontSize: 'clamp(1rem, 3vw, 1.2rem)',
                  minWidth: '150px',
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
    </Carousel>
  );
}

export default HeroSection;
