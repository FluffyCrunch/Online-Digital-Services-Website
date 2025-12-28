import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaCode, FaRocket, FaUsers, FaMobileAlt, FaDatabase } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SlidingProjects from '../components/SlidingProjects';

export default function WebsiteDevelopment({ darkMode }) {
  const navigate = useNavigate();
  
  const projects = [
    {
      title: 'Grocery Delivery Platform',
      desc: 'A real-time grocery ordering and delivery web app for local stores.',
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80', 
      category: 'Live Project',
      link: 'https://grocery.iitiancraft.com'
    },
    {
      title: 'Event Management Portal',
      desc: 'A platform for managing, promoting, and registering for events online.',
      img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80', 
      category: 'Live Project',
      link: 'https://event.iitiancraft.com'
    },
    {
      title: 'Angel Watch',
      desc: 'A safety and monitoring web app for families and caregivers.',
      img: 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=400&q=80', 
      category: 'Live Project',
      link: 'https://angelwatchapp.netlify.app/'
    },
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
            display: 'flex',
            alignItems: 'center',
            gap: 8
          }}>
            <span style={{ fontSize: 20, marginRight: 8, color: darkMode ? '#4f8cff' : '#232946' }}>&larr;</span>
            Back to Home
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
              Website Development
            </h1>
            <p style={{ fontSize: '1.2rem', color: darkMode ? '#e0e7ff' : '#232946', marginBottom: '30px', lineHeight: 1.6 }}>
              We build modern, responsive, and high-performance websites that drive results. From simple landing pages to complex web applications, we deliver exceptional digital experiences.
            </p>
          </Col>
        </Row>
        {/* Team Section */}
        <Row className="mb-5">
          <Col lg={12}>
            <Card style={{ 
              background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', 
              border: 'none', 
              borderRadius: '20px',
              overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <Row className="g-0">
                <Col md={6}>
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=600&q=80" 
                    alt="Website Development Team" 
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                </Col>
                <Col md={6} className="d-flex align-items-center">
                  <Card.Body style={{ padding: '40px' }}>
                    <h3 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '20px', fontWeight: 700 }}>
                      Our Development Team
                    </h3>
                    <p style={{ color: darkMode ? '#e0e7ff' : '#232946', lineHeight: 1.6, marginBottom: '20px' }}>
                      Our experienced web developers, designers, and digital strategists work together to create websites that not only look great but also perform exceptionally well.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                      <div style={{ textAlign: 'center' }}>
                        <FaCode size={24} color="#4f8cff" />
                        <div style={{ fontSize: '0.9rem', color: darkMode ? '#e0e7ff' : '#232946', marginTop: '5px' }}>Frontend</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <FaDatabase size={24} color="#4f8cff" />
                        <div style={{ fontSize: '0.9rem', color: darkMode ? '#e0e7ff' : '#232946', marginTop: '5px' }}>Backend</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <FaMobileAlt size={24} color="#4f8cff" />
                        <div style={{ fontSize: '0.9rem', color: darkMode ? '#e0e7ff' : '#232946', marginTop: '5px' }}>Responsive</div>
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
              background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', 
              border: 'none', 
              borderRadius: '16px',
              padding: '30px',
              textAlign: 'center',
              height: '100%'
            }}>
              <FaCode size={48} color="#4f8cff" style={{ marginBottom: '20px' }} />
              <h4 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '15px' }}>Custom Websites</h4>
              <p style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>
                Bespoke websites tailored to your brand, goals, and target audience with modern technologies.
              </p>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={{ 
              background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', 
              border: 'none', 
              borderRadius: '16px',
              padding: '30px',
              textAlign: 'center',
              height: '100%'
            }}>
              <FaMobileAlt size={48} color="#4f8cff" style={{ marginBottom: '20px' }} />
              <h4 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '15px' }}>Responsive Design</h4>
              <p style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>
                Mobile-first design approach ensuring your website looks perfect on all devices and screen sizes.
              </p>
            </Card>
          </Col>
          <Col md={4} className="mb-4">
            <Card style={{ 
              background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', 
              border: 'none', 
              borderRadius: '16px',
              padding: '30px',
              textAlign: 'center',
              height: '100%'
            }}>
              <FaRocket size={48} color="#4f8cff" style={{ marginBottom: '20px' }} />
              <h4 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '15px' }}>Performance</h4>
              <p style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>
                Optimized for speed, SEO, and user experience with modern development practices.
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
            { title: 'Business', desc: 'Professional business websites with modern design, contact forms, and service showcases.', icon: '🏢' },
            { title: 'E-commerce', desc: 'Online stores with product catalogs, shopping carts, payment integration, and inventory management.', icon: '🛍️' },
            { title: 'Portfolio', desc: 'Creative portfolio websites with galleries, project showcases, and personal branding elements.', icon: '🎨' },
            { title: 'Blog', desc: 'Content-focused websites with blog functionality, SEO optimization, and social media integration.', icon: '📝' },
            { title: 'Landing Page', desc: 'High-converting landing pages with clear CTAs, lead capture forms, and conversion optimization.', icon: '🎯' },
            { title: 'Corporate', desc: 'Corporate websites with company information, team profiles, and professional presentation.', icon: '🏛️' }
          ].map((template, idx) => (
            <Col lg={4} md={6} className="mb-4" key={idx}>
              <Card style={{ 
                background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', 
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
        {/* Web Development Team Members */}
        <Row className="mb-5" style={{ marginTop: '60px' }}>
          <Col lg={12}>
            <h2 style={{ textAlign: 'center', color: darkMode ? '#4f8cff' : '#232946', marginBottom: '40px', fontWeight: 800 }}>
              Meet the Web Development Team
            </h2>
          </Col>
          {[{
            name: 'Amrita',
            img: process.env.PUBLIC_URL + '/Amrita.jpg',
            bio: 'Amrita is a skilled backend developer with expertise in Python, Django, and MySQL. She has built robust management systems and brings a strong understanding of both backend and frontend technologies.'
          }, {
            name: 'Sahil',
            img: process.env.PUBLIC_URL + '/Sahil.jpg',
            bio: 'Sahil is a versatile developer with a passion for creative projects, from mood-based apps to large-scale management systems. He excels in JavaScript, TypeScript, and collaborative software development.'
          }, {
            name: 'Tanisha',
            img: process.env.PUBLIC_URL + '/Tanisha.jpg',
            bio: 'Tanisha specializes in backend development with Java and MySQL, and has delivered dynamic web solutions for real-world businesses. She also brings a keen eye for frontend design.'
          }, {
            name: 'Shravani',
            img: process.env.PUBLIC_URL + '/Shravani.jpg',
            bio: 'Shravani is a dedicated full-stack developer, experienced in React, Node.js, and MongoDB. She is known for building user-friendly interfaces and reliable backend systems.'
          }].map((member, idx) => (
            <Col md={3} sm={6} xs={12} key={idx} className="mb-4 d-flex align-items-stretch">
              <Card style={{
                background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)',
                border: 'none',
                borderRadius: '16px',
                padding: '24px',
                textAlign: 'center',
                height: '100%',
                boxShadow: '0 4px 24px rgba(79,140,255,0.10)',
                color: darkMode ? '#e0e7ff' : '#232946',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'flex-start'
              }}>
                <img src={member.img} alt={member.name} style={{ width: 100, height: 100, objectFit: 'cover', borderRadius: '50%', marginBottom: 18, boxShadow: '0 2px 8px #4f8cff22' }} />
                <h5 style={{ color: darkMode ? '#4f8cff' : '#232946', fontWeight: 700, marginBottom: 10 }}>{member.name}</h5>
                <p style={{ fontSize: '0.98rem', color: darkMode ? '#e0e7ff' : '#232946', lineHeight: 1.5 }}>{member.bio}</p>
              </Card>
            </Col>
          ))}
        </Row>
        {/* Contact Section */}
        <Row style={{ marginTop: '60px' }}>
          <Col lg={12}>
            <div style={{ 
              background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', 
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.7rem', marginBottom: 12, color: darkMode ? '#4f8cff' : '#232946' }}>
                Ready to build your website?
              </h2>
              <p style={{ fontSize: 17, color: darkMode ? '#e0e7ff' : '#232946', marginBottom: 18 }}>
                Contact us for a free consultation and see how we can create a stunning website for your business.
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