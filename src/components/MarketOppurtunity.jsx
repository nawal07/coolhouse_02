import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaCartShopping, FaClipboardCheck } from 'react-icons/fa6';
import { FaDolly, FaRegSnowflake } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

const ICONS = [FaCartShopping, FaDolly, FaClipboardCheck, FaRegSnowflake];

function MarketOpportunity() {
  const { t } = useLanguage();
  const { heading, subheading, desc, cards } = t.about.marketOpportunity;

  return (
    <section
      className="market-opportunity py-5 "
      style={{ background: '#e6f2ff' }}
    >
      <Container>
        <div className="text-center mb-5">
          <h2 className="display-6 fw-bold" style={{ color: '#111f5a' }}>
            {heading}
          </h2>
          <p className="lead fw-medium">{subheading}</p>
          <p className="text-muted">{desc}</p>
        </div>

        <Row className="g-4 justify-content-center">
          {cards.map((card, i) => {
            const Icon = ICONS[i];
            return (
              <Col lg={6} xl={3} key={card.title}>
                <Card className="h-100 border-0 shadow-sm text-center p-4">
                  <div className="mb-4">
                    <div className="mb-3">
                      <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                        <Icon />
                      </span>
                    </div>
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
      </Container>
    </section>
  );
}

export default MarketOpportunity;
