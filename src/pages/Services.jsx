import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const services = [
  {
    title: 'Air Conditioning Systems',
    description:
      'Split, cassette, ducted, VRV/VRF systems for residential, commercial & industrial use.',
    icon: '❄',
    image:
      'https://images.pexels.com/photos/4167541/pexels-photo-4167541.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Refrigeration Spare Parts',
    description:
      'Compressors, condensers, evaporators, thermostats, valves, and all major brands.',
    icon: '🧊',
    image:
      'https://images.pexels.com/photos/5816792/pexels-photo-5816792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Cold Room & Freezer Solutions',
    description:
      'Complete cold storage rooms, blast freezers, insulation panels & temperature control.',
    icon: '🏭',
    image:
      'https://images.pexels.com/photos/8818912/pexels-photo-8818912.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Ventilation & Air Handling Units',
    description:
      'Fresh air systems, exhaust fans, AHUs, and heat recovery ventilation units.',
    icon: '💨',
    image:
      'https://images.pexels.com/photos/5854189/pexels-photo-5854189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Controls & Automation',
    description:
      'Thermostats, BMS integration, sensors, and smart climate control systems.',
    icon: '📱',
    image:
      'https://images.pexels.com/photos/6691961/pexels-photo-6691961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Maintenance & After-Sales',
    description:
      'Annual maintenance contracts, emergency repairs, and genuine spare parts supply.',
    icon: '🛠️',
    image:
      'https://images.pexels.com/photos/4498370/pexels-photo-4498370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

function Services() {
  return (
    <div
      className="section py-5"
      style={{ backgroundColor: 'var(--bg-light)' }}
    >
      <Container fluid className="px-4 px-md-5">
        <div className="text-center mb-5">
          <h1 className="snowflake-accent display-4 fw-bold">Our Services</h1>
          <p className="lead text-muted fs-4">
            Comprehensive cooling solutions from supply to support
          </p>
        </div>

        <Row className="g-5">
          {services.map((service, index) => (
            <Col md={6} lg={4} key={index}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden hover-lift">
                <Card.Img
                  variant="top"
                  src={service.image}
                  alt={service.title}
                  style={{ height: '280px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <div
                    style={{ fontSize: '4rem', color: 'var(--primary-cool)' }}
                  >
                    {service.icon}
                  </div>
                  <Card.Title className="mt-3 fw-bold fs-4">
                    {service.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {service.description}
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div className="text-center mt-5">
          <Button variant="primary" size="lg" className="px-4 py-2">
            Request a Quote
          </Button>
        </div>
      </Container>
    </div>
  );
}

export default Services;
