import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaMobileAlt, FaGamepad, FaPaintBrush, FaSearch, FaUserAlt, FaVideo, FaRobot, FaCogs, FaCode, FaPen } from 'react-icons/fa';

const services = [
  {
    title: "Website Development",
    desc: "Get modern, fast, responsive websites for your business or brand.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "App Development",
    desc: "We build Android & iOS apps tailored to your goals.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Game Development",
    desc: "2D/3D browser or mobile games built from scratch.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Logo Design",
    desc: "High-quality branding & logos that define your identity.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "SEO & Backlinks",
    desc: "Rank higher on Google with optimized SEO strategies.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "UI/UX Design",
    desc: "Clean, beautiful, user-friendly interfaces for web and apps.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Video Production & Animation",
    desc: "Professional video content and engaging animations for your brand.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Chatbot Development",
    desc: "Intelligent chatbots to enhance customer service and engagement.",
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "CRM/ERP Integrations",
    desc: "Seamless integration of business systems for better workflow.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Custom API Development",
    desc: "Robust APIs to connect your applications and services.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80"
  },
  {
    title: "Content Writing & Copywriting",
    desc: "Compelling content that converts visitors into customers.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80"
  },
];

const serviceIcons = [
  <FaLaptopCode size={36} color="#4f8cff" />,
  <FaMobileAlt size={36} color="#a084ee" />,
  <FaGamepad size={36} color="#ff7e5f" />,
  <FaPaintBrush size={36} color="#feb47b" />,
  <FaSearch size={36} color="#232946" />,
  <FaUserAlt size={36} color="#4f8cff" />,
  <FaVideo size={36} color="#ff6b6b" />,
  <FaRobot size={36} color="#4ecdc4" />,
  <FaCogs size={36} color="#45b7d1" />,
  <FaCode size={36} color="#96ceb4" />,
  <FaPen size={36} color="#feca57" />,
];

export default function ServicesSection({ darkMode }) {
  return (
    <section className="section" id="services" style={{ position: 'relative', overflow: 'hidden', background: darkMode ? 'linear-gradient(120deg, #181c2f 60%, #232946 100%)' : 'linear-gradient(120deg, #e0e7ff 60%, #a084ee 100%)', color: darkMode ? '#e0e7ff' : '#232946' }}>
      {/* Decorative SVG wave */}
      <svg width="100%" height="48" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,48 L0,48 Z" fill={darkMode ? '#232946' : '#a084ee'} fillOpacity="0.18" />
      </svg>
      <Container>
        <h2 className="text-center mb-5 section-title" style={{ color: darkMode ? '#fff' : '#232946' }}>Our Services</h2>
        <div className="services-grid">
          {services.map((service, idx) => (
            <div key={idx} className="service-card-wrapper">
              <Card className="service-card w-100" style={{ background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', color: darkMode ? '#e0e7ff' : '#232946' }}>
                <div className="service-icon-wrapper">{serviceIcons[idx]}</div>
                <Card.Img
                  variant="top"
                  src={service.img}
                  style={{ borderTopLeftRadius: "1rem", borderTopRightRadius: "1rem", height: 120, objectFit: "cover", opacity: 0.85 }}
                />
                <Card.Body className="text-center">
                  <Card.Title style={{ color: darkMode ? '#4f8cff' : '#4f8cff', fontWeight: 800, textShadow: darkMode ? '0 2px 8px rgba(35,41,70,0.10)' : '0 2px 8px rgba(35,41,70,0.10)' }}>
                    {service.title}
                  </Card.Title>
                  <Card.Text style={{ color: darkMode ? '#e0e7ff' : '#232946', fontWeight: 500, textShadow: darkMode ? '0 1px 4px rgba(0,0,0,0.12)' : '0 1px 4px rgba(255,255,255,0.12)' }}>
                    {service.desc}
                  </Card.Text>
                  <a
                    href={
                      service.title === 'Website Development' ? '/services/website-development' :
                      service.title === 'UI/UX Design' ? '/services/ui-ux-design' :
                      service.title === 'App Development' ? '/services/app-development' :
                      service.title === 'Game Development' ? '/services/game-development' :
                      service.title === 'Logo Design' ? '/services/logo-design' :
                      service.title === 'SEO & Backlinks' ? '/services/seo-backlinks' :
                      service.title === 'Video Production & Animation' ? '/services/video-production' :
                      service.title === 'Chatbot Development' ? '/services/chatbot-development' :
                      service.title === 'CRM/ERP Integrations' ? '/services/crm-erp-integration' :
                      service.title === 'Custom API Development' ? '/services/custom-api-development' :
                      service.title === 'Content Writing & Copywriting' ? '/services/content-writing' :
                      '#'
                    }
                    className="btn btn-outline-primary rounded-pill mt-2"
                    style={{ color: darkMode ? '#e0e7ff' : '#2563eb', borderColor: darkMode ? '#e0e7ff' : '#2563eb' }}
                  >
                    click here
                  </a>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </Container>
      <style>{`
        .service-card {
          border: none;
          border-radius: 1.5rem;
          box-shadow: 0 4px 24px 0 rgba(79,140,255,0.10);
          transition: transform 0.18s, box-shadow 0.18s;
          background: rgba(255,255,255,0.13);
          color: #e0e7ff;
          position: relative;
          overflow: hidden;
        }
        .service-card:hover {
          transform: translateY(-8px) scale(1.03);
          box-shadow: 0 8px 32px 0 rgba(79,140,255,0.18);
        }
        .service-icon-wrapper {
          position: absolute;
          top: -22px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(79,140,255,0.10);
          border-radius: 50%;
          box-shadow: 0 2px 8px #4f8cff22;
          padding: 12px;
          z-index: 2;
        }
        .service-card .card-title {
          color: #4f8cff;
          font-weight: 800;
          text-shadow: 0 2px 8px rgba(35,41,70,0.10);
        }
        .service-card .card-text {
          color: #232946;
          font-weight: 500;
          text-shadow: 0 1px 4px rgba(255,255,255,0.12);
        }
        .services-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 40px 24px; /* 40px vertical, 24px horizontal */
          margin-bottom: 2rem;
        }
        .service-card-wrapper {
          display: flex;
        }
      `}</style>
    </section>
  );
}
