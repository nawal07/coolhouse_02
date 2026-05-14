import React from 'react';
import { DOUBLE_DOOR_IMG, SINGLE_DOOR_IMG, UPRIGHT_FREEZER_IMG } from '../constants/images';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function OurProducts() {
  return (
    <section
      className="section py-5 border-bottom"
      style={{ backgroundColor: 'var(--bg-light)' }}
    >
      <Container fluid className="px-4 px-md-5">
        <h2 className="section-heading">Our Products</h2>
        <p className="section-subheading">
          Premium Commercial Refrigeration Solutions – Upright Fridges &
          Freezers
        </p>

        <Row className="g-5">
          <Col ms={12}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <Card.Img
                variant="top"
                className="mt-3"
                src={DOUBLE_DOOR_IMG}
                style={{
                  height: '250px',
                  objectFit: 'contain',
                  // background: 'rgb(29 39 79)',
                }}
              />
              <Card.Body className="text-center p-4">
                <h5 className="fw-bold mt-3">Double Door GVC 1106</h5>
                {/* <p className="text-muted small">1100 liters</p> */}
              </Card.Body>
            </Card>
          </Col>

          <Col ms={12}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <Card.Img
                variant="top"
                className="mt-3"
                src={SINGLE_DOOR_IMG}
                style={{
                  height: '250px',
                  objectFit: 'contain',
                  // background: 'rgb(29 39 79)',
                }}
              />
              <Card.Body className="text-center p-4">
                <h5 className="fw-bold mt-3">Single Door GVC 646</h5>
                {/* <p className="text-muted small">530 liters</p> */}
              </Card.Body>
            </Card>
          </Col>

          <Col ms={12}>
            <Card className="h-100 border-0 shadow-sm overflow-hidden">
              <Card.Img
                variant="top"
                className="mt-3"
                src={UPRIGHT_FREEZER_IMG}
                style={{
                  height: '250px',
                  objectFit: 'contain',
                  // background: 'rgb(29 39 79)',
                }}
              />
              <Card.Body className="text-center p-4">
                <h5 className="fw-bold mt-3">Upright Freezer GVF 565</h5>
                {/* <p className="text-muted small">465 liters</p> */}
              </Card.Body>
            </Card>
          </Col>

          {/* <Col md={6} lg={4}>
              <Card className="h-100 border-0 shadow-sm overflow-hidden">
                <Card.Img
                  variant="top"
                  src="https://res.cloudinary.com/dznlq0as1/image/upload/q_auto,f_auto/v1778748833/gvc_1350_rm6tyz.png"
                  style={{ height: '250px', objectFit: 'cover' }}
                />
                <Card.Body className="text-center p-4">
                  <h5 className="fw-bold mt-3">
                    GVC 1350 Up-right Showcase Refrigerator (Double Sliding
                    Door)
                  </h5>
                  <p className="text-muted small">
                    AMC, emergency repair, genuine spare supply
                  </p>
                </Card.Body>
              </Card>
            </Col>  */}
        </Row>

        <div className=" text-center mt-5 pt-4">
          <Button size="md" className="service-btn" as={Link} to="/products">
            View All Products
          </Button>
        </div>
      </Container>
    </section>
  );
}

export default OurProducts;
