import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const testimonials = [
  {
    name: "Ravi Kumar",
    role: "Travel Agency Owner",
    text: "The team delivered a beautiful website for our travel agency. Highly professional!",
    img: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Pooja Sharma",
    role: "E-Commerce Entrepreneur",
    text: "Their mobile app development helped us grow sales. Highly recommended!",
    img: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    name: "David Singh",
    role: "Startup Founder",
    text: "Clean UI/UX design and quick turnaround. I'll definitely hire again!",
    img: "https://randomuser.me/api/portraits/men/54.jpg"
  },
];

export default function TestimonialsSection({ darkMode }) {
  return (
    <section className="section" id="testimonials" style={{ position: 'relative', overflow: 'hidden', background: darkMode ? 'linear-gradient(120deg, #181c2f 60%, #232946 100%)' : 'linear-gradient(120deg, #e0e7ff 60%, #a084ee 100%)', color: darkMode ? '#e0e7ff' : '#232946' }}>
      {/* Decorative SVG wave */}
      <svg width="100%" height="48" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,48 L0,48 Z" fill={darkMode ? '#232946' : '#a084ee'} fillOpacity="0.18" />
      </svg>
      <div style={{ maxWidth: '100%', padding: '0 5%' }}>
        <h2 className="text-center mb-5 section-title" style={{ color: darkMode ? '#fff' : '#232946' }}>What Our Clients Say</h2>
        <Row className="justify-content-center">
          {testimonials.map((t, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="mb-5 d-flex justify-content-center">
              <Card className="testimonial-card w-100 text-center" style={{ background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', color: darkMode ? '#e0e7ff' : '#232946', width: '340px', minWidth: '220px', maxWidth: '100%' }}>
                <Card.Body>
                  <div className="testimonial-avatar-wrapper">
                    <img
                      src={t.img}
                      alt={t.name}
                      style={{ width: 70, height: 70, borderRadius: "50%", objectFit: "cover", marginBottom: 16, border: '3px solid #4f8cff', boxShadow: '0 2px 8px #4f8cff22' }}
                    />
                  </div>
                  <Card.Text style={{ fontStyle: "italic", minHeight: 70, color: darkMode ? '#e0e7ff' : '#232946' }}>
                    "{t.text}"
                  </Card.Text>
                  <Card.Title className="mt-3" style={{ color: darkMode ? '#4f8cff' : '#4f8cff' }}>{t.name}</Card.Title>
                  <Card.Subtitle className="testimonial-role-subtitle">{t.role}</Card.Subtitle>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
      <style>{`
        .testimonial-card {
          border: none;
          border-radius: 1.5rem;
          box-shadow: 0 4px 24px 0 rgba(79,140,255,0.10);
          transition: transform 0.18s, box-shadow 0.18s;
          background: rgba(255,255,255,0.13);
          color: #e0e7ff;
          position: relative;
          overflow: hidden;
        }
        .testimonial-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px 0 rgba(79,140,255,0.18);
        }
        .testimonial-avatar-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 8px;
        }
        .testimonial-card .card-title {
          color: #4f8cff;
          font-weight: 700;
        }
        .testimonial-card .card-text {
          color: #232946;
          font-weight: 500;
          text-shadow: 0 1px 4px rgba(255,255,255,0.12);
        }
        .testimonial-role-subtitle {
          color: #232323 !important;
        }
        .dark-mode .testimonial-role-subtitle {
          color: #fff !important;
        }
      `}</style>
    </section>
  );
}
