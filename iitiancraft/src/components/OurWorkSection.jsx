import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const works = [
  {
    title: 'Travel Booking Website',
    img: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80',
    url: 'https://exploreindiaview.com/'
  },
  {
    title: 'E-Commerce App',
    img: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80',
    url: 'https://ecom-demo.vercel.app/'
  },
  {
    title: 'Portfolio Site',
    img: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80',
    url: 'https://my-portfolio.vercel.app/'
  },
];

export default function OurWorkSection({ darkMode }) {
  return (
    <section className="section" id="ourwork" style={{ position: 'relative', overflow: 'hidden', background: darkMode ? 'linear-gradient(120deg, #181c2f 60%, #232946 100%)' : 'linear-gradient(120deg, #e0e7ff 60%, #a084ee 100%)', color: darkMode ? '#e0e7ff' : '#232946' }}>
      {/* Decorative SVG wave */}
      <svg width="100%" height="48" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,48 L0,48 Z" fill={darkMode ? '#232946' : '#a084ee'} fillOpacity="0.18" />
      </svg>
      <div style={{ maxWidth: '100%', padding: '0 5%' }}>
        <h2 className="text-center mb-5" style={{ fontWeight: 700, color: darkMode ? '#fff' : '#232946' }}>Our Work</h2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '12px',
          justifyItems: 'center',
          alignItems: 'start',
          width: '100%'
        }}>
          {works.map((work, idx) => (
            <div key={idx} style={{ width: '350px', minWidth: '180px', maxWidth: '100%' }}>
              <Card className="shadow-sm rounded-4" style={{ border: 'none', minHeight: 320, width: '100%', background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', color: darkMode ? '#e0e7ff' : '#232946', display: 'flex', flexDirection: 'column', height: '340px' }}>
                <div style={{ flex: '0 0 60%', width: '100%' }}>
                  <Card.Img
                    variant="top"
                    src={work.img}
                    style={{ borderTopLeftRadius: '1rem', borderTopRightRadius: '1rem', width: '100%', height: '100%', minHeight: 0, objectFit: 'cover', opacity: 0.92, transition: 'transform 0.3s ease' }}
                  />
                </div>
                <Card.Body className="d-flex flex-column justify-content-end" style={{ flex: '1 1 40%', padding: '14px 12px 10px 12px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <Card.Title style={{ fontWeight: 700, color: darkMode ? '#fff' : '#232946', marginBottom: '0.5rem' }}>{work.title}</Card.Title>
                  <a
                    href={work.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: darkMode ? '#4f8cff' : '#4f46e5', fontWeight: 600, textDecoration: 'none', marginTop: 8 }}
                  >
                    View Live
                  </a>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
