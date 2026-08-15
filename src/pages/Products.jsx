import React, { useState } from 'react';
import { HERO } from '../constants/images';
import PageHero from '../components/Hero';
import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Modal,
  Table,
} from 'react-bootstrap';
import Seo from '../components/Seo';
import { buildBreadcrumbJsonLd, absoluteUrl } from '../constants/seo';
import { useLanguage } from '../i18n/LanguageContext';
import {
  PRODUCTS_CATALOG,
  PRODUCT_SECTIONS,
  SPEC_LABELS,
  FEATURE_LABELS,
  CATEGORY_LABELS,
} from '../data/products';

function Products() {
  const { t, language } = useLanguage();
  const p = t.products;
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = PRODUCTS_CATALOG.map(product => ({
    ...product,
    title: product.title[language],
    shortDesc: product.shortDesc[language],
    specs: product.specs.map(spec => ({
      label: SPEC_LABELS[language][spec.key],
      value: spec.value,
    })),
    features: product.features.map(key => FEATURE_LABELS[language][key]),
  }));

  const sections = PRODUCT_SECTIONS.map(category => ({
    id: category,
    title: CATEGORY_LABELS[language][category],
    items: products.filter(product => product.category === category),
  }));

  const PRODUCTS_JSON_LD = [
    buildBreadcrumbJsonLd([
      { name: t.nav.home, path: '/' },
      { name: p.pageTitle, path: '/products' },
    ]),
    {
      '@context': 'https://schema.org',
      '@type': 'ItemList',
      itemListElement: products.map((product, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
          '@type': 'Product',
          name: product.title,
          description: product.shortDesc,
          image: product.image,
          brand: { '@type': 'Brand', name: 'General Deluxe' },
          url: absoluteUrl('/products'),
        },
      })),
    },
  ];

  const handleShow = product => {
    setSelectedProduct(product);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div
      className="section py-5"
      style={{ backgroundColor: 'var(--bg-light)' }}
    >
      <Seo
        title={p.seo.title}
        description={p.seo.description}
        jsonLd={PRODUCTS_JSON_LD}
      />
      <PageHero title={p.pageTitle} backgroundImage={HERO} />
      <Container fluid className="px-4 px-md-5 mt-4">
        <div className="text-center my-5">
          <h2 className="snowflake-accent display-6 fw-bold">{p.heading}</h2>
          <p className="lead fs-4">{p.lead}</p>
        </div>

        {/* ── Product Sections ── */}
        {sections.map(section => {
          if (section.items.length === 0) return null;
          return (
            <div key={section.id} className="mb-5 pb-3">
              <h3
                className="mb-4 fw-bold"
                style={{
                  color: '#111f5a',
                  borderBottom: '3px solid #40c4ff',
                  paddingBottom: '0.5rem',
                  display: 'inline-block',
                }}
              >
                {section.title}
              </h3>
              <Row className="g-4 g-lg-5">
                {section.items.map((product, index) => {
                  return (
                    <Col md={6} lg={4} xl={3} key={index}>
                      <Card className="h-100 border-0 shadow-sm overflow-hidden hover-lift">
                        <Card.Img
                          variant="top"
                          src={product.image}
                          alt={product.title}
                          style={{
                            height: '260px',
                            objectFit: 'contain',
                            padding: '1rem',
                            backgroundColor: '#f4f8fc',
                          }}
                        />
                        <Card.Body className="text-center p-4 d-flex flex-column">
                          <Card.Title
                            className="mt-2 fw-bold"
                            style={{ fontSize: '1.1rem' }}
                          >
                            {product.title}
                          </Card.Title>
                          <Card.Text className="text-muted small flex-grow-1 mt-2">
                            {product.shortDesc}
                          </Card.Text>
                        </Card.Body>
                        <Card.Footer className="bg-white border-0 text-center pb-4">
                          <Button
                            variant="primary"
                            style={{
                              backgroundColor: '#111f5a',
                              borderColor: '#111f5a',
                              borderRadius: '20px',
                            }}
                            size="sm"
                            className="px-4"
                            onClick={() => handleShow(product)}
                          >
                            {p.viewDetails}
                          </Button>
                        </Card.Footer>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          );
        })}
      </Container>

      {/* Modal - View Details */}
      <Modal
        show={showModal}
        onHide={handleClose}
        size="lg"
        centered
        dialogClassName="product-modal"
      >
        {selectedProduct && (
          <>
            <Modal.Header closeButton>
              <Modal.Title className="fw-bold">
                {selectedProduct.title}
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row>
                <Col md={5} className="text-center mb-4 mb-md-0">
                  <img
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    className="img-fluid rounded-3 shadow"
                    style={{
                      maxHeight: '450px',
                      objectFit: 'contain',
                      background: '#f8f9fa',
                    }}
                  />
                </Col>
                <Col md={7}>
                  <h5 className="mb-3 fw-bold" style={{ color: '#1f3691' }}>
                    {p.modal.specifications}
                  </h5>
                  <Table
                    striped
                    bordered
                    hover
                    size="sm"
                    className="mb-4 table-responsive"
                  >
                    <tbody>
                      {selectedProduct.specs.map(spec => (
                        <tr key={spec.label}>
                          <td className="fw-medium">{spec.label}</td>
                          <td>{spec.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>

                  <h5 className="mb-3 fw-bold" style={{ color: '#1f3691' }}>
                    {p.modal.features}
                  </h5>
                  <ul className="list-unstyled ps-0">
                    {selectedProduct.features.map((feature, i) => (
                      <li key={i} className="mb-2 d-flex align-items-start">
                        <span
                          className="me-3"
                          style={{
                            color: '#324fc7',
                            fontSize: '1.3rem',
                          }}
                        >
                          ✓
                        </span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-secondary" onClick={handleClose}>
                {p.modal.close}
              </Button>
              <Button
                variant="primary"
                style={{
                  backgroundColor: '#324fc7',
                  borderColor: '#324fc7',
                }}
                onClick={() => {
                  const msg = p.modal.whatsappMessage.replace(
                    '{title}',
                    selectedProduct.title
                  );
                  window.open(
                    `https://wa.me/966540008457?text=${encodeURIComponent(msg)}`,
                    '_blank'
                  );
                }}
              >
                {p.modal.requestQuote}
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Products;
