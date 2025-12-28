import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const templates = [
  {
    title: "Hotel Booking Website",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
    type: "Website",
  },
  {
    title: "Restaurant App",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80",
    type: "App",
  },
  {
    title: "eCommerce Web",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
    type: "Website",
  },
  {
    title: "Logo - Game Studio",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80",
    type: "Logo",
  },
  {
    title: "Taxi Booking App",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
    type: "App",
  },
  {
    title: "Portfolio UI",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    type: "UI/UX",
  },
  {
    title: "Portfolio Website",
    img: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    type: "Website",
  },
  {
    title: "Personal CV/Resume",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
    type: "Website",
  },
  {
    title: "Online Course/Education",
    img: "https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80",
    type: "Website",
  },
  {
    title: "Blog/Magazine",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
    type: "Website",
  },
];

const filters = ["All", "Website", "App", "Logo", "UI/UX"];

export default function TemplatesSection({ darkMode }) {
  const [active, setActive] = useState("All");

  const filteredTemplates =
    active === "All"
      ? templates
      : templates.filter((t) => t.type === active);

  return (
    <section className="section-alt" id="templates" style={{ position: 'relative', overflow: 'hidden', background: darkMode ? 'linear-gradient(120deg, #181c2f 60%, #232946 100%)' : 'linear-gradient(120deg, #e0e7ff 60%, #a084ee 100%)', color: darkMode ? '#e0e7ff' : '#232946' }}>
      {/* Decorative SVG wave */}
      <svg width="100%" height="48" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,48 L0,48 Z" fill={darkMode ? '#232946' : '#a084ee'} fillOpacity="0.18" />
      </svg>
      <Container>
        <h2 className="text-center mb-4" style={{ fontWeight: 700, color: darkMode ? '#fff' : '#232946' }}>
          Choose a Template
        </h2>
        <div className="d-flex justify-content-center mb-5 flex-wrap gap-2">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={active === filter ? "primary" : "outline-primary"}
              className={`rounded-pill px-4 py-2 filter-btn ${active === filter ? "active" : ""}`}
              onClick={() => setActive(filter)}
              style={{
                fontWeight: 600,
                fontSize: "1.05rem",
                boxShadow: active === filter ? "0 2px 12px rgba(79,70,229,0.08)" : "none",
                background: active === filter
                  ? "linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)"
                  : darkMode ? "#232946" : "#fff",
                color: active === filter ? "#fff" : darkMode ? "#e0e7ff" : "#2563eb",
                border: "2px solid #2563eb",
                transition: "all 0.2s"
              }}
            >
              {filter}
            </Button>
          ))}
        </div>
        <Row>
          {filteredTemplates.map((template, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="mb-4 d-flex">
              <Card
                className="template-card w-100"
                style={{
                  background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)',
                  color: darkMode ? '#e0e7ff' : '#232946',
                  border: "none",
                  minHeight: 320,
                  borderRadius: "1rem",
                  boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0 8px 20px rgba(0,0,0,0.2)"
                  }
                }}
              >
                <Card.Img
                  variant="top"
                  src={template.img}
                  style={{
                    borderTopLeftRadius: "1rem",
                    borderTopRightRadius: "1rem",
                    height: 180,
                    objectFit: "cover",
                  }}
                />
                <Card.Body className="text-center d-flex flex-column justify-content-end">
                  <Card.Title style={{ fontWeight: 600, color: darkMode ? '#fff' : '#232946' }}>
                    {template.title}
                  </Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}
