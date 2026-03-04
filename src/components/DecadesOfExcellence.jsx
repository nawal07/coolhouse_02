import React, { useEffect, useState, useRef } from 'react';
import CountUp from 'react-countup';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Container, Row, Col } from 'react-bootstrap';

function DecadesOfExcellence() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      mirror: true,
      offset: 100,
      easing: 'ease-out-cubic',
    });
  }, []);

  const [countersStarted, setCountersStarted] = useState(false);
  const countersRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCountersStarted(true);
          // observer.disconnect();
        } else {
          setCountersStarted(false);
        }
      },
      { threshold: 0.3 }
    );

    if (countersRef.current) {
      observer.observe(countersRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section
        className="decades-section px-4 px-md-5 py-5 bg-white"
        ref={countersRef}
      >
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-5 fw-bold" style={{ color: '#0d47a1' }}>
              DECADES OF EXCELLENCE
            </h2>
            <p className="lead" style={{ color: '#0000000' }}>
              OUR EVOLUTION SINCE 1960
            </p>
            <p className="lead fw-medium" style={{ color: '#092f67' }}>
              The Legacy of General Deluxe – Our Trusted Manufacturing Partner
            </p>
          </div>

          {/* Timeline Container */}
          <div
            className="timeline-wrapper position-relative mx-auto"
            style={{ maxWidth: '950px' }}
          >
            {/* Vertical Center Line */}
            <div className="timeline-line position-absolute top-0 bottom-0 start-50 translate-middle-x rounded"></div>

            {/* 1960 - Right Side */}
            <div
              className="timeline-item mb-5"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="row align-items-center">
                <div className="col-lg-6 text-end pe-5">
                  <div className="dialog-box text-white p-4 rounded-4 position-relative">
                    <h5 className="fw-bold mb-2">Founding</h5>
                    <p className="mb-0 small">
                      Established by Mr. M. Abu Haltam as a premier importer of
                      high-end German, Italian, and Korean appliances.
                    </p>
                    <div className="dialog-arrow-right"></div>
                  </div>
                </div>
                <div className="dialog-year col-lg-1">
                  <div className="timeline-circle mx-auto">1960</div>
                </div>
              </div>
            </div>

            {/* 1960 - Right Side */}
            <div
              className="timeline-item mb-5"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="row align-items-center">
                <div className="col-lg-6 text-end pe-5">
                  <div className="dialog-box text-white p-4 rounded-4 position-relative">
                    <h5 className="fw-bold mb-2">Manufacturing Transition</h5>
                    <p className="mb-0 small">
                      Established advanced production capabilities in
                      collaboration with global technology partners.
                    </p>
                    <div className="dialog-arrow-right"></div>
                  </div>
                </div>
                <div className="dialog-year col-lg-1">
                  <div className="timeline-circle mx-auto">1990</div>
                </div>
              </div>
            </div>

            {/* 2026 - Right Side */}
            <div
              className="timeline-item"
              data-aos="fade-right"
              data-aos-mirror="true"
              data-aos-once="false"
            >
              <div className="row align-items-center">
                <div className="col-lg-6 text-end pe-5">
                  <div className="dialog-box text-white p-4 rounded-4 position-relative">
                    <h5 className="fw-bold mb-2">Regional Leadership</h5>
                    <p className="mb-0 small">
                      Fully integrated manufacturing operation with an annual
                      production capacity of 300,000 units.
                    </p>
                    <div className="dialog-arrow-right"></div>
                  </div>
                </div>
                <div className="dialog-year col-lg-1">
                  <div className="timeline-circle mx-auto">2026</div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Counters */}
          <div className="mt-5 pt-5 text-center">
            <Row className="g-4 justify-content-center">
              <Col xs={12} sm={6} md={4} lg={3}>
                <div className="counter-item p-4">
                  <h3 className="fw-bold display-5 mb-1">
                    {countersStarted ? (
                      <CountUp end={300} duration={3} separator="," />
                    ) : (
                      '0'
                    )}
                    K
                  </h3>
                  <p className="text-muted fw-medium fs-5">ANNUAL UNITS</p>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4} lg={3}>
                <div className="counter-item p-4">
                  <h3 className="fw-bold display-5 mb-1">
                    {countersStarted ? <CountUp end={6} duration={3} /> : '0'}+
                  </h3>
                  <p className="text-muted fw-medium fs-5">EXPORT MARKETS</p>
                </div>
              </Col>

              <Col xs={12} sm={6} md={4} lg={3}>
                <div className="counter-item p-4">
                  <h3 className="fw-bold display-5 mb-1">
                    {countersStarted ? <CountUp end={60} duration={3} /> : '0'}+
                  </h3>
                  <p className="text-muted fw-medium fs-5">YEARS LEGACY</p>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </section>
    </>
  );
}

export default DecadesOfExcellence;
