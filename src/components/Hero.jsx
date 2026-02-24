import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function PageHero({ title, backgroundImage = '/images/hero.jpg' }) {
  const bgStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.55), rgba(0, 0, 0, 0.65)), url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    minHeight: '50vh',
    height: '50vh',
    display: 'flex',
    alignItems: 'center',
    color: 'white',
    position: 'relative',
  };

  return (
    <section style={bgStyle} className="page-hero">
      <Container className="text-center position-relative z-2">
        <h1 className="display-4 mb-3 text-white text-shadow">
          {title}
        </h1>

        {/* Breadcrumbs */}
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb justify-content-center bg-transparent p-0 m-0">
            <li className="breadcrumb-item">
              <Link
                to="/"
                className="text-white text-decoration-none fw-medium"
              >
                Home
              </Link>
            </li>
            <li
              className="breadcrumb-item active text-white fw-medium"
              aria-current="page"
            >
              {title}
            </li>
          </ol>
        </nav>
      </Container>
    </section>
  );
}

export default PageHero;
