import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaBullseye, FaEye } from 'react-icons/fa6';

function MissionAndVision() {
  return (
    <>
      <div className="px-4 px-md-5 ">
        <div className="text-center mb-2 pb-4">
          <h2
            className="display-6 fw-bold mt-4 mb-2"
            style={{ color: '#111f5a' }}
          >
            Our Vision & Mission
          </h2>
        </div>

        <Row className="g-5 mb-5">
          {/* Vision Card */}
          <Col lg={6}>
            <Card className="h-100 border-0 shadow-lg p-4 p-md-5 text-center">
              <Card.Body>
                <div
                  className="mb-4"
                  style={{ fontSize: '5rem', color: '#111f5a' }}
                >
                  <FaEye />
                </div>
                <Card.Title className="fw-bold fs-3 mb-4">
                  Our Vision
                </Card.Title>
                <Card.Text className="fs-5 text-muted lh-lg">
                  To become a trusted regional leader in commercial
                  refrigeration and home appliance solutions, driven by
                  innovation, quality engineering, and sustainable growth -
                  supporting businesses and improving quality of life
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Mission Card */}
          <Col lg={6}>
            <Card className="h-100 border-0 shadow-lg p-4 p-md-5 text-center">
              <Card.Body>
                <div
                  className="mb-4"
                  style={{ fontSize: '5rem', color: '#111f5a' }}
                >
                  <FaBullseye />
                </div>
                <Card.Title className="fw-bold fs-3 mb-4">
                  Our Mission
                </Card.Title>
                <Card.Text className="fs-5 text-muted lh-lg">
                  To deliver high-quality, safe, and reliable refrigeration and
                  appliance solutions that meet evolving customer needs while
                  ensuring operational efficiency and regulatory compliance.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default MissionAndVision;
