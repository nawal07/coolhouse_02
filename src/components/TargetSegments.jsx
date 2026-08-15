import React from 'react';
import { Row, Card, Stack } from 'react-bootstrap';
import { FaMapLocation, FaLightbulb } from 'react-icons/fa6';
import { FaFirstAid } from 'react-icons/fa';
import { useLanguage } from '../i18n/LanguageContext';

const ICONS = [FaMapLocation, FaLightbulb, FaFirstAid];

function TargetSegments() {
  const { t } = useLanguage();
  const { heading, cards } = t.about.targetSegments;

  return (
    <div className="section px-4 px-md-5 ">
      <div className="text-center mb-5">
        <h2 className="display-6 mb-4">{heading}</h2>
      </div>
      <div className="col-lg-8 col-xl-5 max-w-6xl mx-auto">
        <Stack gap={4} className="mt-4">
          <Row className="g-4 justify-content-center">
            {cards.map((card, i) => {
              const Icon = ICONS[i];
              return (
                <Card
                  className="h-100 text-center border-0 shadow-sm p-4"
                  key={card.title}
                >
                  <div className="mb-3">
                    <span style={{ fontSize: '3rem', color: '#111f5a' }}>
                      <Icon />
                    </span>
                  </div>
                  <Card.Title className="fw-bold fs-4 mb-3">
                    {card.title}
                  </Card.Title>
                  <Card.Text className="text-muted">
                    {card.items.map(item => (
                      <React.Fragment key={item}>
                        {item}
                        <br />
                      </React.Fragment>
                    ))}
                  </Card.Text>
                </Card>
              );
            })}
          </Row>
        </Stack>
      </div>
    </div>
  );
}

export default TargetSegments;
