import React from 'react';
import { Card, Col } from 'react-bootstrap';

function SkeletonCard() {
  return (
    <Col md={6} lg={4} xl={3}>
      <Card className="h-100 border-0 shadow-sm overflow-hidden" style={{ borderRadius: '16px' }}>
        {/* Image placeholder */}
        <div
          className="skeleton-shimmer"
          style={{ height: '260px', width: '100%' }}
        />
        <Card.Body className="text-center p-4">
          {/* Badge */}
          <div
            className="skeleton-shimmer mx-auto mb-3"
            style={{ height: '20px', width: '110px', borderRadius: '20px' }}
          />
          {/* Title */}
          <div
            className="skeleton-shimmer mx-auto mb-2"
            style={{ height: '16px', width: '80%', borderRadius: '8px' }}
          />
          <div
            className="skeleton-shimmer mx-auto mb-4"
            style={{ height: '16px', width: '60%', borderRadius: '8px' }}
          />
          {/* Description lines */}
          <div
            className="skeleton-shimmer mx-auto mb-2"
            style={{ height: '13px', width: '90%', borderRadius: '6px' }}
          />
          <div
            className="skeleton-shimmer mx-auto"
            style={{ height: '13px', width: '70%', borderRadius: '6px' }}
          />
        </Card.Body>
        <Card.Footer className="bg-white border-0 text-center pb-4">
          {/* Button */}
          <div
            className="skeleton-shimmer mx-auto"
            style={{ height: '34px', width: '120px', borderRadius: '20px' }}
          />
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default SkeletonCard;
