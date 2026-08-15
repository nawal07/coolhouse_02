import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaBullseye, FaEye } from 'react-icons/fa6';
import { useLanguage } from '../i18n/LanguageContext';

function MissionAndVision() {
  const { t } = useLanguage();
  const { heading, vision, mission } = t.about.missionVision;

  return (
    <>
      <div className="px-4 px-md-5 ">
        <div className="text-center mb-2 pb-4">
          <h2
            className="display-6 fw-bold mt-4 mb-2"
            style={{ color: '#111f5a' }}
          >
            {heading}
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
                  {vision.title}
                </Card.Title>
                <Card.Text className="fs-5 text-muted lh-lg">
                  {vision.text}
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
                  {mission.title}
                </Card.Title>
                <Card.Text className="fs-5 text-muted lh-lg">
                  {mission.text}
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
