import React from 'react';
import { EXPORTS_MAP } from '../constants/images';
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
import { useLanguage } from '../i18n/LanguageContext';

const COUNTRY_FLAGS = [
  { code: 'LB', Flag: LB },
  { code: 'LY', Flag: LY },
  { code: 'EG', Flag: EG },
  { code: 'TN', Flag: TN },
  { code: 'IQ', Flag: IQ },
  { code: 'CF', Flag: CF },
  { code: 'SA', Flag: SA },
  { code: 'CY', Flag: CY },
  { code: 'SY', Flag: SY },
  { code: 'PS', Flag: PS },
];

function ExportsMap() {
  const { t } = useLanguage();
  const { heading, countries } = t.about.exportsMap;

  return (
    <section className="py-5 py-md-5">
      <Container fluid>
        <h2 className="text-center fw-bold mb-5 fs-1">{heading}</h2>

        <Row className="g-4 g-lg-5 align-items-center justify-content-center">
          {/* LEFT: Map */}
          <Col lg={7} className="text-center">
            <div className="position-relative overflow-hidden ">
              <img
                src={EXPORTS_MAP}
                alt={heading}
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
                  {COUNTRY_FLAGS.map(country => {
                    const FlagIcon = country.Flag;
                    return (
                      <Col
                        key={country.code}
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
                            <FlagIcon
                              style={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                            />
                          </div>
                          <p className="mb-0 fw-medium fs-6 text-white">
                            {countries[country.code]}
                          </p>
                        </div>
                      </Col>
                    );
                  })}
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
