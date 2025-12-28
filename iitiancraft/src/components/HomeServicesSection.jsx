import React, { useState } from 'react';
import { Container, Row, Col, Card, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaLaptopCode, FaMobileAlt, FaGamepad, FaPaintBrush, FaSearch, FaUserAlt, FaVideo, FaRobot, FaCogs, FaCode, FaPen, FaTimes } from 'react-icons/fa';

const services = [
  {
    title: "Website Development",
    desc: "Get modern, fast, responsive websites for your business or brand.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80",
    icon: <FaLaptopCode size={36} color="#4f8cff" />,
    route: "/services/website-development",
    templates: ["E-commerce", "Portfolio", "Business", "Blog", "Landing Page"]
  },
  {
    title: "App Development",
    desc: "We build Android & iOS apps tailored to your goals.",
    img: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    icon: <FaMobileAlt size={36} color="#a084ee" />,
    route: "/services/app-development",
    templates: ["Social Media", "E-commerce", "Fitness", "Food Delivery", "Education"]
  },
  {
    title: "Game Development",
    desc: "2D/3D browser or mobile games built from scratch.",
    img: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80",
    icon: <FaGamepad size={36} color="#ff7e5f" />,
    route: "/services/game-development",
    templates: ["Puzzle", "Action", "Strategy", "Racing", "Adventure"]
  },
  {
    title: "Logo Design",
    desc: "High-quality branding & logos that define your identity.",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    icon: <FaPaintBrush size={36} color="#feb47b" />,
    route: "/services/logo-design",
    templates: ["Minimalist", "Vintage", "Modern", "Abstract", "Typography"]
  },
  {
    title: "SEO & Backlinks",
    desc: "Rank higher on Google with optimized SEO strategies.",
    img: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=400&q=80",
    icon: <FaSearch size={36} color="#232946" />,
    route: "/services/seo-backlinks",
    templates: ["Local SEO", "E-commerce SEO", "Technical SEO", "Content SEO", "Link Building"]
  },
  {
    title: "UI/UX Design",
    desc: "Clean, beautiful, user-friendly interfaces for web and apps.",
    img: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    icon: <FaUserAlt size={36} color="#4f8cff" />,
    route: "/services/ui-ux-design",
    templates: ["Dashboard", "Mobile App", "Web App", "Landing Page", "E-commerce"]
  },
  {
    title: "Video Production & Animation",
    desc: "Professional video content and engaging animations for your brand.",
    img: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=400&q=80",
    icon: <FaVideo size={36} color="#ff6b6b" />,
    route: "/services/video-production",
    templates: ["Promotional", "Explainer", "Product Demo", "Corporate", "Social Media"]
  },
  {
    title: "Chatbot Development",
    desc: "Intelligent chatbots to enhance customer service and engagement.",
    img: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=400&q=80",
    icon: <FaRobot size={36} color="#4ecdc4" />,
    route: "/services/chatbot-development",
    templates: ["Customer Support", "E-commerce", "Lead Generation", "FAQ", "Booking"]
  },
  {
    title: "CRM/ERP Integrations",
    desc: "Seamless integration of business systems for better workflow.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80",
    icon: <FaCogs size={36} color="#45b7d1" />,
    route: "/services/crm-erp-integration",
    templates: ["Salesforce", "HubSpot", "Zoho", "SAP", "Oracle"]
  },
  {
    title: "Custom API Development",
    desc: "Robust APIs to connect your applications and services.",
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=400&q=80",
    icon: <FaCode size={36} color="#96ceb4" />,
    route: "/services/custom-api-development",
    templates: ["REST API", "GraphQL", "Payment Gateway", "Social Media", "Analytics"]
  },
  {
    title: "Content Writing & Copywriting",
    desc: "Compelling content that converts visitors into customers.",
    img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=400&q=80",
    icon: <FaPen size={36} color="#feca57" />,
    route: "/services/content-writing",
    templates: ["Blog Posts", "Website Copy", "Email Marketing", "Social Media", "Product Descriptions"]
  },
];

export default function HomeServicesSection({ darkMode }) {
  const [selectedService, setSelectedService] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleCardClick = (service) => {
    setSelectedService(service);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedService(null);
  };

  return (
    <section className="section" id="services" style={{ 
      position: 'relative', 
      overflow: 'hidden', 
      background: darkMode ? 'linear-gradient(120deg, #181c2f 60%, #232946 100%)' : 'linear-gradient(120deg, #e0e7ff 60%, #a084ee 100%)', 
      color: darkMode ? '#e0e7ff' : '#232946',
      padding: '80px 0'
    }}>
      {/* Decorative SVG wave */}
      <svg width="100%" height="48" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,48 L0,48 Z" fill={darkMode ? '#232946' : '#a084ee'} fillOpacity="0.18" />
      </svg>
      
      <div style={{ width: '100%', padding: 0, position: 'relative', zIndex: 1 }}>
        <h2 className="text-center mb-5 section-title" style={{ 
          color: darkMode ? '#fff' : '#232946',
          fontSize: '2.5rem',
          fontWeight: '800',
          marginBottom: '3rem'
        }}>
          Our Services
        </h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          justifyItems: 'center',
          alignItems: 'start',
          width: '100%'
        }}>
          {services.map((service, idx) => (
            <div key={idx} style={{ width: '380px', minWidth: '220px', maxWidth: '100%' }}>
              <Card 
                className="service-card"
                style={{ 
                  background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)',
                  color: darkMode ? '#e0e7ff' : '#232946',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  width: '100%',
                  height: '400px',
                  display: 'flex',
                  flexDirection: 'column',
                  borderRadius: '18px',
                  boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
                }}
                onClick={() => handleCardClick(service)}
              >
                <div style={{ flex: '0 0 60%', width: '100%' }}>
                  <Card.Img
                    variant="top"
                    src={service.img}
                    style={{ 
                      borderTopLeftRadius: "1rem", 
                      borderTopRightRadius: "1rem", 
                      width: '100%',
                      height: '100%',
                      minHeight: '0',
                      objectFit: "cover", 
                      opacity: 0.92,
                      transition: 'transform 0.3s ease',
                    }}
                    className="service-image"
                  />
                  <div className="service-icon-wrapper" style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(79,140,255,0.15)', borderRadius: '50%', boxShadow: '0 4px 16px rgba(79,140,255,0.3)', padding: 10, zIndex: 2 }}>
                    {React.cloneElement(service.icon, { size: 54 })}
                  </div>
                </div>
                <Card.Body className="text-center" style={{ flex: '1 1 40%', padding: '18px 12px 16px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center', overflow: 'visible' }}>
                  <Card.Title style={{ 
                    color: darkMode ? '#4f8cff' : '#4f8cff', 
                    fontWeight: 800, 
                    fontSize: '1.15rem',
                    marginBottom: '0.5rem'
                  }}>
                    {service.title}
                  </Card.Title>
                  <Card.Text style={{ 
                    color: darkMode ? '#e0e7ff' : '#232946', 
                    fontWeight: 500,
                    fontSize: '0.93rem',
                    lineHeight: '1.4',
                    marginBottom: 0,
                    overflow: 'visible',
                    textOverflow: 'unset',
                    whiteSpace: 'normal',
                    wordBreak: 'break-word'
                  }}>
                    {service.desc}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for service details */}
      <Modal 
        show={showModal} 
        onHide={handleCloseModal}
        size="lg"
        centered
        style={{ zIndex: 9999 }}
      >
        <Modal.Header closeButton style={{ 
          background: darkMode ? '#232946' : '#fff',
          borderBottom: darkMode ? '1px solid #4f8cff' : '1px solid #e0e7ff'
        }}>
          <Modal.Title style={{ 
            color: darkMode ? '#4f8cff' : '#232946',
            fontWeight: '800'
          }}>
            {selectedService?.title}
          </Modal.Title>
        </Modal.Header>
        
        <Modal.Body style={{ 
          background: darkMode ? '#232946' : '#fff',
          color: darkMode ? '#e0e7ff' : '#232946'
        }}>
          <div className="row">
            <div className="col-md-6">
              <img 
                src={selectedService?.img} 
                alt={selectedService?.title}
                style={{ 
                  width: '100%', 
                  height: '200px', 
                  objectFit: 'cover',
                  borderRadius: '12px'
                }}
              />
            </div>
            <div className="col-md-6">
              <h5 style={{ color: darkMode ? '#4f8cff' : '#4f8cff', fontWeight: '700' }}>
                Available Templates
              </h5>
              <div className="template-list">
                {selectedService?.templates.map((template, index) => (
                  <div key={index} className="template-item">
                    <span className="template-bullet">•</span>
                    <span>{template}</span>
                  </div>
                ))}
              </div>
              <p style={{ marginTop: '1rem', fontSize: '0.9rem', opacity: 0.8 }}>
                {selectedService?.desc}
              </p>
            </div>
          </div>
        </Modal.Body>
        
        <Modal.Footer style={{ 
          background: darkMode ? '#232946' : '#fff',
          borderTop: darkMode ? '1px solid #4f8cff' : '1px solid #e0e7ff'
        }}>
          <button 
            className="btn btn-secondary" 
            onClick={handleCloseModal}
            style={{ 
              background: darkMode ? '#4f8cff' : '#6c757d',
              border: 'none',
              color: '#fff'
            }}
          >
            Close
          </button>
          <Link 
            to={selectedService?.route || '#'} 
            className="btn btn-primary"
            style={{ 
              background: 'linear-gradient(90deg, #4f8cff 0%, #a084ee 100%)',
              border: 'none',
              color: '#fff',
              fontWeight: '600'
            }}
            onClick={() => {
              handleCloseModal();
              // Scroll to top when navigating to service page
              window.scrollTo(0, 0);
            }}
          >
            View Service Details
          </Link>
        </Modal.Footer>
      </Modal>

      <style>{`
        .service-card {
          border: none;
          border-radius: 1.5rem;
          box-shadow: 0 4px 24px 0 rgba(79,140,255,0.10);
          transition: all 0.3s ease;
          background: rgba(255,255,255,0.13);
          color: #e0e7ff;
          position: relative;
          overflow: hidden;
          min-height: 320px;
        }
        
        .service-card:hover {
          transform: translateY(-12px) scale(1.02);
          box-shadow: 0 12px 40px 0 rgba(79,140,255,0.25);
        }
        
        .service-card:hover .service-image {
          transform: scale(1.1);
        }
        
        .service-icon-wrapper {
          position: absolute;
          top: -22px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(79,140,255,0.15);
          border-radius: 50%;
          box-shadow: 0 4px 16px rgba(79,140,255,0.3);
          padding: 12px;
          z-index: 2;
          transition: all 0.3s ease;
        }
        
        .service-card:hover .service-icon-wrapper {
          transform: translateX(-50%) scale(1.1);
          box-shadow: 0 6px 20px rgba(79,140,255,0.4);
        }
        
        .service-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(79,140,255,0.95) 0%, rgba(160,132,238,0.95) 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: all 0.3s ease;
          border-radius: 1.5rem;
        }
        
        .service-card:hover .service-overlay {
          opacity: 1;
        }
        
        .overlay-content {
          text-align: center;
          color: white;
          padding: 20px;
        }
        
        .overlay-content h4 {
          font-weight: 700;
          margin-bottom: 15px;
          font-size: 1.2rem;
        }
        
        .template-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .template-tag {
          background: rgba(255,255,255,0.2);
          padding: 4px 12px;
          border-radius: 20px;
          font-size: 0.8rem;
          font-weight: 500;
          backdrop-filter: blur(10px);
        }
        
        .explore-btn {
          background: rgba(255,255,255,0.9);
          color: #4f8cff;
          border: none;
          padding: 10px 24px;
          border-radius: 25px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        
        .explore-btn:hover {
          background: white;
          transform: scale(1.05);
        }
        
        .template-list {
          margin-top: 15px;
        }
        
        .template-item {
          display: flex;
          align-items: center;
          margin-bottom: 8px;
          font-size: 0.9rem;
        }
        
        .template-bullet {
          color: #4f8cff;
          font-weight: bold;
          margin-right: 8px;
        }
        
        @media (max-width: 768px) {
          .service-card {
            min-height: 280px;
          }
          
          .service-overlay {
            padding: 15px;
          }
          
          .overlay-content h4 {
            font-size: 1rem;
          }
          
          .template-tags {
            gap: 6px;
          }
          
          .template-tag {
            font-size: 0.7rem;
            padding: 3px 8px;
          }
        }
      `}</style>
    </section>
  );
} 