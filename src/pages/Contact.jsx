import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram
} from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // You can add fetch to backend here
    console.log('Form submitted:', formData);
    alert('Thank you! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  return (
    <div className="section" style={{ backgroundColor: 'var(--bg-light)' }}>
      <Container fluid className="px-4 px-md-5">
        <div className="text-center mb-5">
          <h1 className="snowflake-accent">Get in Touch</h1>
          <p className="lead text-muted">
            We're here to help with all your cooling needs
          </p>
        </div>

        <Row className="g-4 contact-row">
          <Col lg={5}>
            <Card className="p-4 h-100 shadow-sm border-0">
              <h4 className="mb-4">Contact Information</h4>
              <p>
                <strong>Phone:</strong> +968 1234 5678
              </p>
              <p>
                <strong>Email:</strong> info@coolhousetrading.com
              </p>
              <p>
                <strong>Address:</strong> Office No. 12, Business Bay,
                <br />
                Al Malaz, Riyadh
              </p>
              <p>
                <strong>Working Hours:</strong> Sunday – Thursday: 8:00 AM –
                5:00 PM
              </p>

              <div className="mt-4">
                <h5>Follow Us</h5>
                <div className="d-flex gap-3">
                  <a
                    href="#"
                    style={{ color: 'var(--primary-cool)', fontSize: '1.8rem' }}
                  >
                    <FaFacebookF/>
                  </a>
                  <a
                    href="#"
                    style={{ color: 'var(--primary-cool)', fontSize: '1.8rem' }}
                  >
                    <FaInstagram/>
                  </a>
                  <a
                    href="#"
                    style={{ color: 'var(--primary-cool)', fontSize: '1.8rem' }}
                  >
                    <FaLinkedinIn/>
                  </a>
                  <a
                    href="#"
                    style={{ color: 'var(--primary-cool)', fontSize: '1.8rem' }}
                  >
                    <FaTwitter/>
                  </a>
                </div>
              </div>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="p-4 shadow-sm border-0">
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Full Name</Form.Label>
                      <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-100"
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Row>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Phone</Form.Label>
                      <Form.Control
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-4">
                  <Form.Label>Message</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>

                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  className="w-100"
                >
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>

        {/* Map Section */}
        <div className="mt-5 pt-4">
          <h4
            className="text-center mb-4 fw-bold"
            style={{ color: 'var(--primary-bold)' }}
          >
            Find Us in Al Malaz, Riyadh
          </h4>

          <div
            className="ratio rounded-4 overflow-hidden shadow-lg border border-3 map-container mx-auto"
            style={{
              borderColor: 'var(--primary-cool)',
              width: '100%',
              height: '50%', // 60% of its parent's height
              minHeight: '450px', // fallback minimum
            }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.5!2d46.730!3d24.665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f1d8a0b0b0b0b%3A0x0!2sAl%20Malaz%2C%20Riyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Map of Al Malaz District, Riyadh"
            ></iframe>
          </div>

          {/* <p className="text-center mt-3 text-muted small">
            Al Malaz, Riyadh • Centrally located near major roads
          </p> */}
        </div>
      </Container>
    </div>
  );
}

export default Contact;
