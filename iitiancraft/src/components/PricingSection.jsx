import React from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import { FaStar, FaRocket, FaCrown } from 'react-icons/fa';

const pricing = [
  {
    title: "Basic",
    price: "₹4,999",
    features: ["1 Page Website", "Responsive Design"],
  },
  {
    title: "Standard",
    price: "₹9,999",
    features: ["Multi Page Website", "Mobile Optimized"],
  },
  {
    title: "Premium",
    price: "₹14,999",
    features: ["Full Website + Logo", "SEO + Analytics"],
  },
];

const planIcons = [
  <FaStar size={32} color="#4f8cff" />,
  <FaRocket size={32} color="#a084ee" />,
  <FaCrown size={32} color="#ff7e5f" />,
];

export default function PricingSection() {
  return (
    <section className="section-alt" id="pricing">
      <div style={{ maxWidth: '100%', padding: '0 5%' }}>
        <h2 className="text-center mb-5 section-title">Our Pricing</h2>
        <Row className="justify-content-center">
          {pricing.map((plan, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="mb-5 d-flex">
              <Card className={`pricing-card w-100 ${idx === 1 ? 'featured' : ''}`} style={{ background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', color: darkMode ? '#e0e7ff' : '#232946' }}>
                <div className="pricing-icon-wrapper">{planIcons[idx]}</div>
                <Card.Body className="text-center">
                  <Card.Title>{plan.title}</Card.Title>
                  <h3 className="text-primary" style={{ fontWeight: 700, fontSize: "2.2rem" }}>{plan.price}</h3>
                  <ListGroup variant="flush" className="mb-3">
                    {plan.features.map((feature, i) => (
                      <ListGroup.Item key={i} style={{ border: "none", background: "#f7f8fa" }}>{feature}</ListGroup.Item>
                    ))}
                  </ListGroup>
                  <a href="#" className={`btn btn-${idx === 1 ? 'primary' : 'outline-primary'} rounded-pill`}>Choose Plan</a>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <style>{`
        .pricing-card {
          border: none;
          border-radius: 1.5rem;
          box-shadow: 0 4px 24px 0 rgba(160,132,238,0.10);
          transition: transform 0.18s, box-shadow 0.18s;
          background: rgba(255,255,255,0.13);
          color: #e0e7ff;
          position: relative;
          overflow: hidden;
        }
        .pricing-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px 0 rgba(160,132,238,0.18);
        }
        .pricing-card.featured {
          border: 2.5px solid #4f8cff;
          box-shadow: 0 8px 32px 0 rgba(79,140,255,0.18);
        }
        .pricing-icon-wrapper {
          position: absolute;
          top: -20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(79,140,255,0.10);
          border-radius: 50%;
          box-shadow: 0 2px 8px #a084ee22;
          padding: 10px;
          z-index: 2;
        }
        .pricing-card .card-title {
          color: #4f8cff;
          font-weight: 700;
        }
      `}</style>
    </section>
  );
}
