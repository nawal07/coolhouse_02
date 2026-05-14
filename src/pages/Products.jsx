import React, { useState } from 'react';
import { HERO, PRODUCTS } from '../constants/images';
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

const products = [
  {
    title: 'GVC 406 Up-right Showcase Refrigerator (Single Door)',
    shortDesc:
      '320 Liters | Climate Class 5 | Dynamic cooling (No-Frost) | R290',
    image: PRODUCTS.gvc_406,
    specs: {
      'Capacity (Liters)': '320',
      'Climate Class': '5',
      'External Dimensions (W*D*H) cm': '60*58*186',
      'Gross weight (kg)': '63',
      '40HQ container loading': '75',
      'Truck loading (L*W*H) (13.5*2.48*3)m': '81',
    },
    features: [
      'Canopy',
      'Dynamic cooling (no-frost)',
      'White pre-painted steel inner liner',
      '5 adjustable shelves',
      'Double tempered glass door with Low E-film',
      'LED Lights (two sides)',
      'Door Lock and self closing',
      'Four wheels',
      'Adjustable feet in the front',
      'Wide steel condenser with cooling fan',
      'CFC free environmentally friendly',
      'Gas charge : R290',
      '220-240 V / 50Hz/60Hz',
      'Digital Thermometer',
    ],
  },
  {
    title: 'GVC 526 Up-right Showcase Refrigerator (Single Door)',
    shortDesc:
      '435 Liters | Climate Class 5 | LED Lighting | Self Closing Door | R290',
    image: PRODUCTS.gvc_526,
    specs: {
      'Capacity (Liters)': '435',
      'Climate Class': '5',
      'External Dimensions (W*D*H) cm': '66*68*210',
      'Gross weight (kg)': '78',
      '40HQ container loading': '54',
      'Truck loading (L*W*H) (13.5*2.48*3)m': '60',
    },
    features: [
      'Canopy',
      'Dynamic cooling (no-frost)',
      'White pre-painted steel inner liner',
      '5 adjustable shelves',
      'Double tempered glass door with Low E-film',
      'LED Lights (two sides)',
      'Door Lock and self closing',
      'Four wheels',
      'Adjustable feet in the front',
      'Wide steel condenser with cooling fan',
      'CFC free environmentally friendly',
      'Gas charge : R290',
      '220-240 V / 50Hz/60Hz',
      'Digital Thermometer',
    ],
  },
  {
    title: 'GVC 636 Up-right Showcase Refrigerator (Single Door)',
    shortDesc: '532 Liters | Climate Class 5 | Heavy Duty | LED Lights | R290',
    image: PRODUCTS.gvc_636,
    specs: {
      'Capacity (Liters)': '532',
      'Climate Class': '5',
      'External Dimensions (W*D*H) cm': '80*68*210',
      'Gross weight (kg)': '96',
      '40HQ container loading': '40',
      'Truck loading (L*W*H) (13.5*2.48*3)m': '45',
    },
    features: [
      'Canopy',
      'Dynamic cooling (no-frost)',
      'White pre-painted steel inner liner',
      '6 adjustable shelves',
      'Double tempered glass door with Low E-film',
      'LED Lights (two sides)',
      'Door Lock and self closing',
      'Four wheels',
      'Adjustable feet in the front',
      'Wide steel condenser with cooling fan',
      'CFC free environmentally friendly',
      'Gas charge : R290',
      '220-240 V / 50Hz/60Hz',
      'Digital Thermometer',
    ],
  },

  {
    title: 'GVC 646 Up-right Showcase Refrigerator (Single Door)',
    shortDesc: '532 Liters | Black or White',
    image: PRODUCTS.gvc_646,
    specs: {
      'Capacity (Liters)': '532',
      'External Dimensions (W*D*H) cm': '80*68*200',
    },
    features: [
      'Double tempered glass ',
      'Adjustable shelves 5',
      'Door Lock and self closing',
      'Four wheels',
      'LED Lights',
    ],
  },

  {
    title: 'GVC 1100 Refrigerator (Swing Doors)',
    shortDesc: '1060 Liters | White',
    image: PRODUCTS.gvc_1100,
    specs: {
      'Capacity (Liters)': '1060',
      'External Dimensions (W*D*H) cm': '120*72*200',
    },
    features: [
      'Canopy and Without canopy',
      'Vertical Bottle cooler ',
      'Dynamic cooling (no-frost)',
      'Double tempered glass door ',
      'Double swing doors',
      'Wide steel condenser with cooling fan',
    ],
  },
  {
    title: 'GVC 1101 Up-right Refrigerator (Swing Doors)',
    shortDesc: '1060 Liters | Black',
    image: PRODUCTS.gvc_1101,
    specs: {
      'Capacity (Liters)': '1060',
      'External Dimensions (W*D*H) cm': '120*72*200',
    },
    features: [
      'Canopy and Without canopy',
      'Vertical Bottle cooler ',
      'Dynamic cooling (no-frost)',
      'Double tempered glass door ',
      'Double swing doors',
      'Wide steel condenser with cooling fan',
    ],
  },
  {
    title: 'GVC 1106 Up-right Showcase Refrigerator (Double Swing Door)',
    shortDesc:
      '1060 Liters | Climate Class 5 | Double Swing Doors | Vertical Bottle Cooler | R290',
    image: PRODUCTS.gvc_1106,
    specs: {
      'Capacity (Liters)': '1060',
      'Climate Class': '5',
      'External Dimensions (W*D*H) cm': '120*72*225',
      'Gross weight (kg)': '145',
      '40HQ container loading': '24',
      'Truck loading (L*W*H) (13.5*2.48*3)m': '27',
    },
    features: [
      'Canopy',
      'Dynamic cooling (no-frost)',
      'White pre-painted steel inner liner',
      '8 adjustable shelves',
      'Double tempered glass doors with Low E-film',
      'LED Lights (two sides)',
      'Door Lock and self closing',
      'Six wheels',
      'Adjustable feet in the front',
      'Wide steel condenser with cooling fan',
      'CFC free environmentally friendly',
      'Gas charge : R290',
      '220-240 V / 50Hz/60Hz',
      'Digital Thermometer',
    ],
  },
  // {
  //   title: 'GVC 1200 Up-right Showcase Refrigerator (Double Sliding Door)',
  //   shortDesc:
  //     '1023 Liters | Climate Class 5 | Double Sliding Doors | Large Display Area | R290',
  //   image: 'gvc_1200.png',
  //   specs: {
  //     'Capacity (Liters)': '1023',
  //     'Climate Class': '5',
  //     'External Dimensions (W*D*H) cm': '122*65*202',
  //     'Gross weight (kg)': '138',
  //     '40HQ container loading': '27',
  //     'Truck loading (L*W*H) (13.5*2.48*3)m': '30',
  //   },
  //   features: [
  //     'Canopy',
  //     'Dynamic cooling (no-frost)',
  //     'White pre-painted steel inner liner',
  //     '8 adjustable shelves',
  //     'Double sliding tempered glass doors with Low E-film',
  //     'LED Lights (two sides)',
  //     'Door Lock and self closing',
  //     'Six wheels',
  //     'Adjustable feet in the front',
  //     'Wide steel condenser with cooling fan',
  //     'CFC free environmentally friendly',
  //     'Gas charge : R290',
  //     '220-240 V / 50Hz/60Hz',
  //     'Digital Thermometer',
  //   ],
  // },
  // {
  //   title: 'GVC 1350 Up-right Showcase Refrigerator (Double Sliding Door)',
  //   shortDesc:
  //     '1147 Liters | Climate Class 5 | Large Capacity | Sliding Doors | R290',
  //   image: 'gvc_1350.png',
  //   specs: {
  //     'Capacity (Liters)': '1147',
  //     'Climate Class': '5',
  //     'External Dimensions (W*D*H) cm': '135*65*202',
  //     'Gross weight (kg)': '152',
  //     '40HQ container loading': '24',
  //     'Truck loading (L*W*H) (13.5*2.48*3)m': '26',
  //   },
  //   features: [
  //     'Canopy',
  //     'Dynamic cooling (no-frost)',
  //     'White pre-painted steel inner liner',
  //     '10 adjustable shelves',
  //     'Double sliding tempered glass doors with Low E-film',
  //     'LED Lights (two sides)',
  //     'Door Lock and self closing',
  //     'Six wheels',
  //     'Adjustable feet in the front',
  //     'Wide steel condenser with cooling fan',
  //     'CFC free environmentally friendly',
  //     'Gas charge : R290',
  //     '220-240 V / 50Hz/60Hz',
  //     'Digital Thermometer',
  //   ],
  // },
  // {
  //   title: 'GVC 1950 Up-right Showcase Refrigerator (3 Swing Doors)',
  //   shortDesc:
  //     '1793 Liters | Climate Class 5 | Triple Swing Doors | Maximum Display | R290',
  //   image: 'gvc_1950.png',
  //   specs: {
  //     'Capacity (Liters)': '1793',
  //     'Climate Class': '5',
  //     'External Dimensions (W*D*H) cm': '206*65*202',
  //     'Gross weight (kg)': '210',
  //     '40HQ container loading': '16',
  //     'Truck loading (L*W*H) (13.5*2.48*3)m': '18',
  //   },
  //   features: [
  //     'Canopy',
  //     'Dynamic cooling (no-frost)',
  //     'White pre-painted steel inner liner',
  //     '12 adjustable shelves',
  //     'Triple tempered glass swing doors with Low E-film',
  //     'LED Lights (two sides)',
  //     'Door Lock and self closing',
  //     'Eight wheels',
  //     'Adjustable feet in the front',
  //     'Wide steel condenser with cooling fan',
  //     'CFC free environmentally friendly',
  //     'Gas charge : R290',
  //     '220-240 V / 50Hz/60Hz',
  //     'Digital Thermometer',
  //   ],
  // },
  {
    title: 'GVF 565 Upright Freezer',
    shortDesc:
      '465 Liters | Climate Class T | Tropical Class | Triple Tempered Glass | R290',
    image: PRODUCTS.gvf_565,
    specs: {
      'Capacity (Liters)': '465',
      'Climate Class': 'T',
      'External Dimensions (W*D*H) cm': '66*74*203',
      'Gross weight (kg)': '85',
      '40HQ container loading': '48',
      'Truck loading (L*W*H) (13.5*2.48*3)m': '52',
    },
    features: [
      'Canopy',
      'Static cooling',
      'White pre-painted steel inner liner',
      '6 adjustable shelves',
      'Triple tempered glass door',
      'LED Lights (two sides)',
      'Door Lock and self closing',
      'Four wheels',
      'Adjustable feet in the front',
      'Wide steel condenser with cooling fan',
      'CFC free environmentally friendly',
      'Gas charge : R290',
      '220-240 V / 50Hz/60Hz',
      'Digital Thermometer',
    ],
  },
  {
    title: 'GSC 407 Inclined Showcase Chest Freezer',
    shortDesc:
      '376 Liters | Climate Class T | Tempered Glass Door | LED Light | R290',
    image: PRODUCTS.gsc_407,
    specs: {
      'Capacity (Liters)': '376',
      'Climate Class': 'T',
      'External Dimensions (W*D*H) cm': '143*70*89',
      'Gross weight (kg)': '68',
      '40HQ container loading': '72',
      'Truck loading (L*W*H) (13.5*2.48*3)m': '78',
    },
    features: [
      'Inclined tempered glass door',
      'Static cooling',
      'LED interior lighting',
      'Door lock',
      'Adjustable thermostat',
      'CFC free environmentally friendly',
      'Gas charge : R290',
      '220-240 V / 50Hz/60Hz',
    ],
  },
  {
    title: 'GSC 507 Inclined Showcase Chest Freezer',
    shortDesc:
      '410 Liters | Climate Class T | Tempered Glass | LED Light | R290',
    image: PRODUCTS.gsc_507,
    specs: {
      'Capacity (Liters)': '410',
      'Climate Class': 'T',
      'External Dimensions (W*D*H) cm': '152*70*89',
      'Gross weight (kg)': '74',
      '40HQ container loading': '66',
      'Truck loading (L*W*H) (13.5*2.48*3)m': '72',
    },
    features: [
      'Inclined tempered glass door',
      'Static cooling',
      'LED interior lighting',
      'Door lock',
      'Adjustable thermostat',
      'CFC free environmentally friendly',
      'Gas charge : R290',
      '220-240 V / 50Hz/60Hz',
    ],
  },
  {
    title: 'GSC 550 Flat Showcase Chest Freezer',
    shortDesc:
      '482 Liters | Climate Class T | Flat Glass Top | 2 Baskets | R290',
    image: PRODUCTS.gsc_550,
    specs: {
      'Capacity (Liters)': '482',
      'Climate Class': 'T',
      'External Dimensions (W*D*H) cm': '152*67*87',
      'Gross weight (kg)': '78',
      '40HQ container loading': '60',
      'Truck loading (L*W*H) (13.5*2.48*3)m': '65',
    },
    features: [
      'Flat tempered glass top',
      'Static cooling',
      'LED interior lighting',
      '2 storage baskets',
      'Door lock',
      'CFC free environmentally friendly',
      'Gas charge : R290',
      '220-240 V / 50Hz/60Hz',
    ],
  },
  {
    title: 'GSC 650 Flat Showcase Chest Freezer',
    shortDesc:
      '586 Liters | Climate Class T | Flat Glass Top | 2 Baskets | R290',
    image: PRODUCTS.gsc_650,
    specs: {
      'Capacity (Liters)': '586',
      'Climate Class': 'T',
      'External Dimensions (W*D*H) cm': '180*67*87',
      'Gross weight (kg)': '92',
      '40HQ container loading': '48',
      'Truck loading (L*W*H) (13.5*2.48*3)m': '52',
    },
    features: [
      'Flat tempered glass top',
      'Static cooling',
      'LED interior lighting',
      '2 storage baskets',
      'Door lock',
      'CFC free environmentally friendly',
      'Gas charge : R290',
      '220-240 V / 50Hz/60Hz',
    ],
  },
];

const SECTIONS = [
  {
    id: 'single',
    title: 'Single Door Models',
    filter: p => p.title.includes('Single Door') || p.title.includes('SLIM'),
  },
  {
    id: 'double',
    title: 'Double Door Models',
    filter: p =>
      p.title.includes('Double') ||
      p.title.includes('Swing Door') ||
      p.title.includes('3 Swing Doors') ||
      p.title.includes('Sliding Door'),
  },
  {
    id: 'chest',
    title: 'Freezers',
    filter: p => p.title.includes('Freezer'),
  },
];

function Products() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
      <PageHero title="Products" backgroundImage={HERO} />
      <Container fluid className="px-4 px-md-5 mt-4">
        <div className="text-center my-5">
          <h2 className="snowflake-accent display-6 fw-bold">
            Commercial Fridges &amp; Freezers | Cool House Products
          </h2>
          <p className="lead fs-4">
            Explore Cool House commercial refrigeration products including
            upright freezers, slim refrigerators, chest freezers, and double
            door refrigerators.
          </p>
        </div>

        {/* ── Product Sections ── */}
        {SECTIONS.map(section => {
          const items = products.filter(section.filter);
          if (items.length === 0) return null;
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
                {items.map((product, index) => {
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
                            View Details
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

        {/* <div className="text-center mt-5 pt-4">
          <Button variant="primary" size="lg" className="px-5 py-3">
            View Full Catalogue PDF / Request Quote
          </Button>
        </div> */}
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
                    Specifications
                  </h5>
                  <Table
                    striped
                    bordered
                    hover
                    size="sm"
                    className="mb-4 table-responsive"
                  >
                    <tbody>
                      {Object.entries(selectedProduct.specs).map(
                        ([key, value]) => (
                          <tr key={key}>
                            <td className="fw-medium">{key}</td>
                            <td>{value}</td>
                          </tr>
                        )
                      )}
                    </tbody>
                  </Table>

                  <h5 className="mb-3 fw-bold" style={{ color: '#1f3691' }}>
                    Features
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
                Close
              </Button>
              <Button
                variant="primary"
                style={{
                  backgroundColor: '#324fc7',
                  borderColor: '#324fc7',
                }}
                onClick={() => {
                  const msg = `Interested in: ${selectedProduct.title}\n\nPlease send full details, pricing & availability.`;
                  window.open(
                    `https://wa.me/966540008457?text=${encodeURIComponent(msg)}`,
                    '_blank'
                  );
                }}
              >
                Request Quote on WhatsApp
              </Button>
            </Modal.Footer>
          </>
        )}
      </Modal>
    </div>
  );
}

export default Products;
