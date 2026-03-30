import React, { useState } from 'react';
import PageHero from '../components/Hero';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from 'react-icons/fa';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const whatsappNumber = '+966594869891';

    const message = [
      'New Inquiry from Website!',
      '',
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone}`,
      `Subject: ${formData.subject || 'General Inquiry From Website'}`,
      '',
      'Message:',
      formData.message,
    ].join('\n');

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');

    // Show success message
    setSubmitted(true);

    // Optional: Reset form after 2 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 2500);
  };

  return (
    <div className="mt-5" style={{ backgroundColor: 'var(--bg-light)' }}>
      <PageHero
        title="Contact Us"
        backgroundImage="/hero.jpg" // or any other image
      />
      <Container fluid className="px-4 px-md-5">
        <div className="text-center mb-5 mt-5">
          {/* <h1 className="snowflake-accent display-5 fw-bold">Contact Us</h1> */}
        </div>

        <Row className="g-4 contact-row">
          <Col lg={5}>
            <Card className="p-4 h-100 shadow-sm border-0">
              <h1 className="mb-4" style={{ color: '#111f5a' }}>
                Get In Touch
              </h1>
              <p className="text-muted">
                Have questions about our commercial refrigeration systems? Our
                team is ready to assist you with product details, pricing, and
                custom solutions.
              </p>
              <p>
                <strong>Phone:</strong> +968 1234 5678
              </p>
              <p>
                <strong>Email:</strong> info@coolhousetrading.com
              </p>
              <p>
                <strong>Address:</strong> Building No. 4317, Ibn Shaddad,
                <br />
                Al Malaz, Riyadh
              </p>

              <div className="mt-4">
                <h5>Follow Us</h5>
                <div className="d-flex gap-3">
                  <a
                    href="https://facebook.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-4"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://instagram.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-4"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="https://twitter.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-4"
                  >
                    <FaTwitter />
                  </a>
                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fs-4"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </Card>
          </Col>

          <Col lg={7}>
            <Card className="p-4 shadow-sm border-0">
              {submitted && (
                <Alert variant="success">
                  Message sent to WhatsApp! Our team will reply shortly.
                </Alert>
              )}
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
      </Container>
      {/* Map Section */}
      <div className="mt-5 pt-4">
        <h4
          className="text-center mb-4 fw-bold"
          style={{ color: 'var(--primary-bold)' }}
        >
          Find Us in Al Malaz, Riyadh
        </h4>

        <div
          className="ratio map-container"
          style={{
            width: '100%',
            height: '50%',
            minHeight: '450px',
          }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2154.384478033849!2d46.72935260880804!3d24.665688331361526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f043f1e063065%3A0xb852619d37b50c!2s%D8%AD%D9%8A%2C%20REMA4317%2C%204317%20Ibn%20Shaddad%2C%207386%2C%20Al%20Malaz%2C%20Riyadh%2012629%2C%20Saudi%20Arabia!5e0!3m2!1sen!2sin!4v1771360231100!5m2!1sen!2sin"
            width="100%"
            height="100%"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Map of Al Malaz District, Riyadh"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
