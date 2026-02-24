import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CTASection() {
  return (
    <section className="py-5" style={{ backgroundColor: '#ffffff' }}>
      <Container className="d-flex justify-content-center">
        {/* Inner Card */}
        <div className="text-center px-4 py-5 cta-card">
          <h2 className="mb-3 cta-head">
            Looking for Reliable Commercial Refrigeration Solutions?
          </h2>

          <p className="mb-4 cta-content">
            Contact our team today to discuss your business requirements.
          </p>

          <Button size="md cta-button" as={Link} to="/contact">
            Contact Us Today
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default CTASection;
