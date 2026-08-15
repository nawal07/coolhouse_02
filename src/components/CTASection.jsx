import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLanguage } from '../i18n/LanguageContext';

function CTASection() {
  const { t } = useLanguage();
  const { heading, desc, btn } = t.home.cta;

  return (
    <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <Container className="d-flex justify-content-center">
        {/* Inner Card */}
        <div className="text-center px-4 py-5 cta-card">
          <h2 className="mb-3 cta-head">{heading}</h2>

          <p className="mb-4 cta-content">{desc}</p>

          <Button size="md cta-button" as={Link} to="/contact">
            {btn}
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;
