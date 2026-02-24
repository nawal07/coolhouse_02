import React from 'react';
import { Row, Card, Stack } from 'react-bootstrap';
import { FaMapLocation, FaLightbulb } from 'react-icons/fa6';
import { FaFirstAid } from 'react-icons/fa';

function TargetSegments() {
  return (
    <div className="section px-4 px-md-5 ">
      <div className="text-center mb-5">
        <h2 className="display-6 mb-4">Target B2B Segments</h2>
        <p
          className="lead text-muted"
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          Serving Diverse Industries Across the Region.
        </p>
      </div>
      <div className="col-lg-8 col-xl-5 max-w-6xl mx-auto">
        <Stack gap={4} className="mt-4">
          <Row className="g-4 justify-content-center">
            {/* Retail */}
            {/* <Col xs="auto"> */}
            <Card className="h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3">
                <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                  <FaMapLocation />
                </span>
              </div>
              <Card.Title className="fw-bold fs-4 mb-3">
                Key Accounts &amp; Retail
              </Card.Title>
              <Card.Text className="text-muted">
                Supermarket Chains
                <br />
                Hypermarkets
                <br />
                Convenience Stores
                <br />
                Gas Station Networks
                <br />
              </Card.Text>
            </Card>
            {/* </Col> */}
            {/* Food & Beverage */}
            {/* <Col xs="auto"> */}
            <Card className="h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3">
                <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                  <FaLightbulb />
                </span>
              </div>
              <Card.Title className="fw-bold fs-4 mb-3">
                Food &amp; Beverage
              </Card.Title>
              <Card.Text className="text-muted text">
                Beverage Companies
                <br />
                Ice Cream Manufacturers
                <br />
                Frozen Food Producers
                <br />
                Confectionery Brands
                <br />
              </Card.Text>
            </Card>
            {/* </Col> */}
            {/* Institutional */}
            {/* <Col xs="auto"> */}
            <Card className="h-100 text-center border-0 shadow-sm p-4">
              <div className="mb-3">
                <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                  <FaFirstAid />
                </span>
              </div>
              <Card.Title className="fw-bold fs-4 mb-3">
                Institutional &amp; Service
              </Card.Title>
              <Card.Text className="text-muted">
                Hospitals &amp; Clinics
                <br />
                Pharmacies
                <br />
                Hotels &amp; Restaurants
                <br />
                Food Service Suppliers
                <br />
              </Card.Text>
            </Card>
            {/* </Col> */}
          </Row>
        </Stack>
      </div>
    </div>
  );
}

export default TargetSegments;
