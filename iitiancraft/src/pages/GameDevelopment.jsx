import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaGamepad, FaCode, FaRocket, FaUsers, FaMobileAlt, FaDesktop } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import SlidingProjects from '../components/SlidingProjects';

export default function GameDevelopment({ darkMode }) {
  const navigate = useNavigate();
  const projects = [
    {
      title: 'Space Adventure',
      desc: 'A 2D space shooter game with multiple levels and power-ups.',
      img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80',
      category: '2D Game'
    },
    {
      title: 'Puzzle Quest',
      desc: 'A brain-teasing puzzle game with beautiful graphics and smooth animations.',
      img: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=400&q=80', 
      category: 'Puzzle'
    },
    {
      title: 'Racing Legends',
      desc: 'A high-speed racing game with realistic physics and stunning visuals.',
      img: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?auto=format&fit=crop&w=400&q=80', 
      category: 'Racing'
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
              Game Development
            </h1>
            <p style={{ fontSize: '1.2rem', color: darkMode ? '#e0e7ff' : '#232946', marginBottom: '30px', lineHeight: 1.6 }}>
              We create engaging 2D and 3D games that captivate players and deliver immersive experiences. From concept to deployment, we bring your gaming ideas to life.
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
                    src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80" 
                    alt="Game Development Team" 
                    style={{ width: '100%', height: '300px', objectFit: 'cover' }}
                  />
                </Col>
                <Col md={6} className="d-flex align-items-center">
                  <Card.Body style={{ padding: '40px' }}>
                    <h3 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '20px', fontWeight: 700 }}>
                      Our Game Development Team
                    </h3>
                    <p style={{ color: darkMode ? '#e0e7ff' : '#232946', lineHeight: 1.6, marginBottom: '20px' }}>
                      Our passionate team of game developers, artists, and designers work together to create captivating gaming experiences. We specialize in Unity, Unreal Engine, and custom game development for multiple platforms.
                    </p>
                    <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
                      <div style={{ textAlign: 'center' }}>
                        <FaGamepad size={24} color="#4f8cff" />
                        <div style={{ fontSize: '0.9rem', color: darkMode ? '#e0e7ff' : '#232946', marginTop: '5px' }}>Game Design</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <FaCode size={24} color="#4f8cff" />
                        <div style={{ fontSize: '0.9rem', color: darkMode ? '#e0e7ff' : '#232946', marginTop: '5px' }}>Development</div>
                      </div>
                      <div style={{ textAlign: 'center' }}>
                        <FaDesktop size={24} color="#4f8cff" />
                        <div style={{ fontSize: '0.9rem', color: darkMode ? '#e0e7ff' : '#232946', marginTop: '5px' }}>3D/2D</div>
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
              <FaMobileAlt size={48} color="#4f8cff" style={{ marginBottom: '20px' }} />
              <h4 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '15px' }}>Mobile Games</h4>
              <p style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>
                Engaging mobile games for iOS and Android with intuitive touch controls and addictive gameplay.
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
              <FaDesktop size={48} color="#4f8cff" style={{ marginBottom: '20px' }} />
              <h4 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '15px' }}>Web Games</h4>
              <p style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>
                Browser-based games that work across all devices with HTML5, JavaScript, and WebGL technologies.
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
              <FaRocket size={48} color="#4f8cff" style={{ marginBottom: '20px' }} />
              <h4 style={{ color: darkMode ? '#4f8cff' : '#232946', marginBottom: '15px' }}>3D Games</h4>
              <p style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>
                Immersive 3D games with stunning graphics, realistic physics, and engaging storylines.
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
            { title: 'Puzzle', desc: 'Brain-teasing puzzle games with multiple difficulty levels and engaging mechanics.', icon: '🧩' },
            { title: 'Action', desc: 'Fast-paced action games with dynamic gameplay, combat systems, and exciting challenges.', icon: '⚔️' },
            { title: 'Strategy', desc: 'Strategic thinking games with resource management, planning, and tactical decision-making.', icon: '🎯' },
            { title: 'Racing', desc: 'High-speed racing games with multiple tracks, vehicles, and competitive multiplayer.', icon: '🏎️' },
            { title: 'Adventure', desc: 'Story-driven adventure games with exploration, quests, and immersive narratives.', icon: '🗺️' },
            { title: 'Arcade', desc: 'Classic arcade-style games with simple controls and addictive gameplay loops.', icon: '🎮' }
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
        {/* Game Development Team Members */}
        <Row className="mb-5" style={{ marginTop: '60px' }}>
          <Col lg={12}>
            <h2 style={{ textAlign: 'center', color: darkMode ? '#4f8cff' : '#232946', marginBottom: '40px', fontWeight: 800 }}>
              Meet the Game Development Team
            </h2>
          </Col>
          {[{
            name: 'Tanish',
            img: process.env.PUBLIC_URL + '/Tanish.jpg',
            bio: 'Tanish Ahmed is a creative game designer and level designer with a BCA in Game Development. He excels in Unity, C#, and QA testing, and has built a range of engaging 2D and 3D games, including AR experiences.'
          }, {
            name: 'Yug',
            img: process.env.PUBLIC_URL + '/Yug.jpg',
            bio: 'Yug Mittal is a passionate game developer with 2+ years of experience in Unity and Unreal Engine. He has built multiplayer, mobile, and AR/VR games, and brings a strong narrative and technical focus to every project.'
          }, {
            name: 'Anusheel',
            img: process.env.PUBLIC_URL + '/Anusheel.jpg',
            bio: 'Anusheel is an innovative game developer skilled in Unity, C#, and C++. He specializes in game mechanics, prototyping, and collaborative development, and is known for his strong problem-solving and leadership skills.'
          }, {
            name: 'Raman',
            img: process.env.PUBLIC_URL + '/Raman.jpg',
            bio: 'Raman is a Unity developer with hands-on experience in 2D and 3D games, including multiplayer and mobile projects. He excels in AI, camera systems, and backend integration, blending creativity with technical expertise.'
          }, {
            name: 'Nikhilesh',
            img: process.env.PUBLIC_URL + '/Nikhilesh.jpg',
            bio: 'Nikhilesh Patil is a third-year BSc CS student with a year of experience in graphic design, bringing a creative visual edge to game projects.'
          }, {
            name: 'Prabhu',
            img: process.env.PUBLIC_URL + '/Prabhu.webp',
            bio: 'Prabhu is a Unity game developer with 2 years of experience in 2D, 3D, and AR/VR games. He is skilled in debugging and teamwork, delivering polished and immersive gaming experiences.'
          }].map((member, idx) => (
            <Col md={4} sm={6} xs={12} key={idx} className="mb-4 d-flex align-items-stretch">
              <Card style={{
                background: darkMode ? 'rgba(35,41,70,0.8)' : 'rgba(255,255,255,0.9)',
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
              background: darkMode ? 'rgba(35,41,70,0.8)' : 'rgba(255,255,255,0.9)', 
              borderRadius: '20px',
              padding: '40px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)'
            }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.7rem', marginBottom: 12, color: darkMode ? '#4f8cff' : '#232946' }}>
                Ready to create your game?
              </h2>
              <p style={{ fontSize: 17, color: darkMode ? '#e0e7ff' : '#232946', marginBottom: 18 }}>
                Contact us for a free consultation and see how we can turn your gaming vision into an engaging reality.
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