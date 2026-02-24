import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  LB, // Lebanon
  LY, // Libya
  EG, // Egypt
  TN, // Tunisia
  IQ, // Iraq
  CF, // Central African Republic
  SA, // Saudi Arabia
  CY, // Cyprus
  SY, // Syria
  PS, // Palestine
} from 'country-flag-icons/react/3x2';

const countries = [
  { code: 'LB', name: 'Lebanon', Flag: LB },
  { code: 'LY', name: 'Libya', Flag: LY },
  { code: 'EG', name: 'Egypt', Flag: EG },
  { code: 'TN', name: 'Tunisia', Flag: TN },
  { code: 'IQ', name: 'Iraq', Flag: IQ },
  { code: 'CF', name: 'Central Africa', Flag: CF },
  { code: 'SA', name: 'Kingdom of Saudi Arabia', Flag: SA },
  { code: 'CY', name: 'Cyprus', Flag: CY },
  { code: 'SY', name: 'Syrian Arab Republic', Flag: SY },
  { code: 'PS', name: 'Palestine', Flag: PS },
];

function ExportsMap() {
  return (
    <section className="py-5 py-md-5">
      <Container fluid>
        <h2 className="text-center fw-bold mb-5 fs-1">Our Exports Map</h2>

        <Row className="g-4 g-lg-5 align-items-center justify-content-center">
          {/* LEFT: Map */}
          <Col lg={7} className="text-center">
            <div className="position-relative overflow-hidden ">
              <img
                src="exports_map.png"
                alt="Cool House Export Markets Map"
                className="img-fluid w-100"
                style={{ minHeight: '400px', objectFit: 'cover' }}
              />
            </div>
          </Col>

          {/* RIGHT: Country List */}
          <Col lg={12} style={{ backgroundColor: '#0a1f3f', color: '#ffffff' }}>
            <div
              className="py-5"
              style={{ backgroundColor: '#0a1f3f', color: '#ffffff' }}
            >
              <Container>
                <Row className="justify-content-center g-4 g-md-5">
                  {countries.map(({ name, Flag }) => (
                    <Col
                      key={name}
                      xs={6}
                      sm={4}
                      md={3}
                      lg={2}
                      className="text-center"
                    >
                      <div className="d-flex flex-column align-items-center">
                        <div
                          className="rounded-circle overflow-hidden border border-light border-2 shadow-sm mb-3"
                          style={{
                            width: '60px',
                            height: '60px',
                            backgroundColor: '#ffffff',
                          }}
                        >
                          <Flag
                            style={{
                              width: '100%',
                              height: '100%',
                              objectFit: 'cover',
                            }}
                          />
                        </div>
                        <p className="mb-0 fw-medium fs-6 text-white">{name}</p>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ExportsMap;
