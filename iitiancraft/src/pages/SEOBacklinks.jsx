import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaSearch, FaChartLine, FaLink, FaUsers, FaGlobe, FaRocket } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SlidingProjects from '../components/SlidingProjects';

export default function SEOBacklinks({ darkMode }) {
  const navigate = useNavigate();
  const projects = [
    {
      title: 'E-commerce SEO',
      desc: 'Comprehensive SEO strategy for an online retail store with 300% traffic increase.',
      img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=400&q=80',
      category: 'E-commerce'
    },
    {
      title: 'Local Business Optimization',
      desc: 'Local SEO campaign for a restaurant chain with improved local search rankings.',
      img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80',
      category: 'Local SEO'
    },
    {
      title: 'Backlink Building',
      desc: 'Strategic backlink campaign resulting in 500+ quality backlinks and improved domain authority.',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
      category: 'Link Building'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: darkMode ? 'linear-gradient(120deg, #181c2f 60%, #232946 100%)' : 'linear-gradient(120deg, #e0e7ff 60%, #a084ee 100%)', padding: '40px 5%' }}>
      <div style={{ maxWidth: '100%' }}>
        {/* Back Button */}
        <div style={{ marginBottom: 24 }}>
                      <button onClick={() => {
                        navigate('/');
                        window.scrollTo(0, 0);
                      }} style={{
            background: darkMode ? '#232946' : '#e0e7ff',
            color: darkMode ? '#fff' : '#232946',
            border: 'none',
            borderRadius: 8,
            padding: '10px 24px',
            fontWeight: 600,
            fontSize: 16,
            boxShadow: '0 2px 8px #4f8cff22',
            cursor: 'pointer',
            transition: 'background 0.2s',
            display: 'inline-block'
          }}>
            ← Back to Home
          </button>
        </div>
        {/* Hero Section */}
        <Row className="align-items-center mb-5">
          <Col lg={6} className="mb-4">
            <div style={{ textAlign: 'center' }}>
              <img src={process.env.PUBLIC_URL + '/loloIIT.jpg'} alt="IITIANCraft Logo" style={{ width: 340, height: 240, objectFit: 'cover', borderRadius: 24, boxShadow: '0 4px 32px rgba(79,140,255,0.10)' }} />
            </div>
          </Col>
          <Col lg={6}>
            <h1 style={{ fontSize: '2.5rem', fontWeight: 900, color: darkMode ? '#4f8cff' : '#232946', marginBottom: '20px' }}>
              SEO & Backlinks
            </h1>
            <p style={{ fontSize: '1.2rem', color: darkMode ? '#e0e7ff' : '#232946', marginBottom: '30px', lineHeight: 1.6 }}>
              We boost your website's search engine rankings through strategic SEO optimization and high-quality backlink building. Drive more organic traffic and increase your online visibility.
            </p>
          </Col>
        </Row>

        {/* Team Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <Card style={{ 
              background: darkMode ? 'rgba(35,41,70,0.8)' : 'rgba(255,255,255,0.9)', 
              border: 'none', 
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Row className="g-0">
                <Col md={6}>
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                    alt="SEO Team" 
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                </Col>
                <Col md={6} className="d-flex align-items-center">
                  <Card.Body style={{ padding: '40px' }}>
                    <h3 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '20px', fontWeight: 700 }}>
                      Our SEO Team
                    </h3>
                    <p style={{ color: darkMode ? '#e0e7ff' : '#232946', lineHeight: 1.6, marginBottom: '20px' }}>
                      Our experienced SEO specialists and digital marketers work together to improve your search engine rankings and build your online authority through strategic optimization and quality backlink campaigns.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                      <div style={{ textAlign: 'center' }}>
                        <FaSearch size={24} color="#4f8cff" />
                        <div style={{ fontSize: '0.9rem', color: darkMode ? '#e0e7ff' : '#232946', marginTop: '5px' }}>SEO</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <FaLink size={24} color="#4f8cff" />
                        <div style={{ fontSize: '0.9rem', color: darkMode ? '#e0e7ff' : '#232946', marginTop: '5px' }}>Backlinks</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <FaChartLine size={24} color="#4f8cff" />
                        <div style={{ fontSize: '0.9rem', color: darkMode ? '#e0e7ff' : '#232946', marginTop: '5px' }}>Analytics</div>
                      </div>
                    </div>
                  </Card.Body>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Services Overview */}
        <Row className="mb-5">
          <Col lg={12}>
            <h2 style={{ textAlign: 'center', color: darkMode ? '#4f8cff' : '#232946', marginBottom: '40px', fontWeight: 800 }}>
              What We Offer
            </h2>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={{ 
              background: darkMode ? 'rgba(35,41,70,0.8)' : 'rgba(255,255,255,0.9)', 
              border: 'none', 
              borderRadius: '16px',
              padding: '30px',
              textAlign: 'center',
              height: '100%'
            }}>
              <FaSearch size={48} color="#4f8cff" style={{ marginBottom: '20px' }} />
              <h4 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '15px' }}>Technical SEO</h4>
              <p style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>
                Comprehensive technical SEO optimization including site speed, mobile-friendliness, and crawlability improvements.
              </p>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={{ 
              background: darkMode ? 'rgba(35,41,70,0.8)' : 'rgba(255,255,255,0.9)', 
              border: 'none', 
              borderRadius: '16px',
              padding: '30px',
              textAlign: 'center',
              height: '100%'
            }}>
              <FaLink size={48} color="#4f8cff" style={{ marginBottom: '20px' }} />
              <h4 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '15px' }}>Backlink Building</h4>
              <p style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>
                Strategic backlink acquisition from high-authority websites to boost your domain authority and rankings.
              </p>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={{ 
              background: darkMode ? 'rgba(35,41,70,0.8)' : 'rgba(255,255,255,0.9)', 
              border: 'none', 
              borderRadius: '16px',
              padding: '30px',
              textAlign: 'center',
              height: '100%'
            }}>
              <FaGlobe size={48} color="#4f8cff" style={{ marginBottom: '20px' }} />
              <h4 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '15px' }}>Local SEO</h4>
              <p style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>
                Local search optimization to help your business rank higher in local search results and Google Maps.
              </p>
            </Card>
          </Col>
        </Row>

        {/* Templates Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <h2 style={{ textAlign: 'center', color: darkMode ? '#4f8cff' : '#232946', marginBottom: '40px', fontWeight: 800 }}>
              Available Templates
            </h2>
          </Col>
          {[
            { title: 'Local SEO', desc: 'Local business optimization with Google My Business, local citations, and location-based keywords.', icon: '📍' },
            { title: 'E-commerce SEO', desc: 'Product page optimization, category structure, and shopping feed management for online stores.', icon: '🛒' },
            { title: 'Technical SEO', desc: 'Website performance optimization, schema markup, and technical audit services.', icon: '⚙️' },
            { title: 'Content SEO', desc: 'Content strategy, keyword research, and on-page optimization for better rankings.', icon: '📝' },
            { title: 'Link Building', desc: 'High-quality backlink acquisition through guest posting, partnerships, and outreach.', icon: '🔗' },
            { title: 'Analytics', desc: 'SEO performance tracking, reporting, and data-driven optimization strategies.', icon: '📊' }
          ].map((template, idx) => (
            <Col lg={4} md={6} className="mb-4" key={idx}>
              <Card style={{ 
                background: darkMode ? 'rgba(35,41,70,0.8)' : 'rgba(255,255,255,0.9)', 
                border: 'none', 
                borderRadius: '16px',
                padding: '30px',
                textAlign: 'center',
                height: '100%',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-8px)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(79,140,255,0.2)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1)';
              }}
              >
                <div style={{ fontSize: '3rem', marginBottom: '20px' }}>{template.icon}</div>
                <h4 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '15px', fontWeight: 700 }}>{template.title}</h4>
                <p style={{ color: darkMode ? '#e0e7ff' : '#232946', fontSize: '0.95rem', lineHeight: 1.5 }}>
                  {template.desc}
                </p>
                <button className="btn btn-outline-primary rounded-pill mt-3" style={{ 
                  color: darkMode ? '#4f8cff' : '#4f8cff', 
                  borderColor: darkMode ? '#4f8cff' : '#4f8cff',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#4f8cff';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.borderColor = '#4f8cff';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = '#4f8cff';
                  e.currentTarget.style.borderColor = '#4f8cff';
                }}>
                  View Template
                </button>
              </Card>
            </Col>
          ))}
        </Row>

        {/* Live Projects */}
        <Row>
          <Col lg={12}>
            <h2 style={{ textAlign: 'center', color: darkMode ? '#4f8cff' : '#232946', marginBottom: '40px', fontWeight: 800 }}>
              Recent Projects
            </h2>
          </Col>
          <Col lg={12}>
            <SlidingProjects projects={projects} darkMode={darkMode} />
          </Col>
        </Row>

        {/* Contact Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col lg={12}>
            <div style={{ 
              background: darkMode ? 'rgba(35,41,70,0.8)' : 'rgba(255,255,255,0.9)', 
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.7rem', marginBottom: 12, color: darkMode ? '#4f8cff' : '#232946' }}>
                Ready to boost your rankings?
              </h2>
              <p style={{ fontSize: 17, color: darkMode ? '#e0e7ff' : '#232946', marginBottom: 18 }}>
                Contact us for a free SEO audit and see how we can improve your search engine visibility and drive more organic traffic.
              </p>
              <a href="/contact" style={{ 
                background: 'linear-gradient(90deg, #4f8cff 0%, #a084ee 100%)', 
                color: '#fff', 
                fontWeight: 700, 
                padding: '14px 44px', 
                borderRadius: 16, 
                textDecoration: 'none', 
                fontSize: 18, 
                boxShadow: '0 4px 24px #4f8cff44', 
                border: 'none', 
                transition: 'all 0.2s', 
                cursor: 'pointer', 
                display: 'inline-block' 
              }}>
                Contact Us
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
} 