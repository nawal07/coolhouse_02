import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaMapLocation, FaLightbulb, FaLeaf } from 'react-icons/fa6';
import { FaFirstAid } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

const ICONS = [FaMapLocation, FaLightbulb, FaFirstAid, FaLeaf];

function FutureAndSustainability() {
  const { t } = useLanguage();
  const { heading, subheading, cards } = t.about.futureSustainability;

  return (
    <div className="section" style={{ background: '#e6f2ff' }}>
      <div className="text-center mb-5">
        <h2 className="display-6 mb-4 fw-bold" style={{ color: '#111f5a' }}>
          {heading}
        </h2>
        <p
          className="lead fw-medium"
          style={{ maxWidth: '800px', margin: '0 auto' }}
        >
          {subheading}
        </p>
      </div>

      <Row className="g-4 justify-content-center px-4 px-md-5 ">
        {cards.map((card, i) => {
          const Icon = ICONS[i];
          return (
            <Col md={6} lg={3} key={card.title}>
              <Card className="h-100 text-center border-0 shadow-sm p-4">
                <div className="mb-3">
                  <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                    <Icon />
                  </span>
                </div>
                <Card.Title className="fw-bold fs-4 mb-3">
                  {card.title}
                </Card.Title>
                <Card.Text className="text-muted">{card.desc}</Card.Text>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default FutureAndSustainability;
