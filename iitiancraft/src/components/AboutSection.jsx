import React from 'react';
import { FaUsers, FaBullseye, FaLightbulb, FaHeart } from 'react-icons/fa';

export default function AboutSection({ darkMode }) {
  return (
    <section className="about-modern-section" style={{ position: 'relative', overflow: 'hidden', background: darkMode ? 'linear-gradient(120deg, #181c2f 60%, #232946 100%)' : 'linear-gradient(120deg, #e0e7ff 60%, #a084ee 100%)' }}>
      {/* Decorative SVG wave */}
      <svg width="100%" height="48" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,48 L0,48 Z" fill={darkMode ? '#232946' : '#a084ee'} fillOpacity="0.18" />
      </svg>
      <div className="about-modern-container">
        {/* Left: Text Content */}
        <div className="about-modern-text-card">
          <div className="about-modern-icon-title">
            <FaUsers size={48} color="#2563eb" style={{ display: 'block', margin: '0 auto 8px auto' }} />
            <h2>About <span>IITIAN CRAFT</span></h2>
            <div className="about-underline" />
            <p className="about-modern-subtitle">
              We are a results-driven digital agency helping brands grow in the online world.
            </p>
          </div>
          <div className="about-modern-info">
            <div className="about-modern-info-block">
              <FaBullseye color="#2563eb" className="about-modern-info-icon" />
              <div>
                <strong>Our Mission:</strong>
                <p>Empowering businesses with innovative, user-friendly digital solutions that drive engagement and results.</p>
              </div>
            </div>
            <div className="about-modern-info-block">
              <FaLightbulb color="#2563eb" className="about-modern-info-icon" />
              <div>
                <strong>Our Vision:</strong>
                <p>To be the leading digital agency known for creativity, reliability, and client success.</p>
              </div>
            </div>
            <div className="about-modern-info-block">
              <FaHeart color="#2563eb" className="about-modern-info-icon" />
              <div>
                <strong>Our Values:</strong>
                <p>Integrity, innovation, collaboration, and a passion for excellence.</p>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Images Creative Grid - Centered and with new main image */}
        <div className="about-modern-images about-modern-images-centered">
          <div className="about-modern-img about-modern-img-main">
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80" alt="Digital Agency Teamwork" />
          </div>
          <div className="about-modern-img about-modern-img-1">
            <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Work Environment" />
          </div>
          <div className="about-modern-img about-modern-img-2">
            <img src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=400&q=80" alt="Team Collaboration" />
          </div>
        </div>
      </div>
      {/* Section Divider */}
      <svg className="section-divider" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,48 L0,48 Z" fill="#4f8cff" fillOpacity="0.10" />
      </svg>
      <style>{`
        .about-modern-section {
          background: none;
          padding: 80px 0 60px 0;
        }
        .about-modern-container {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
          gap: 60px;
          padding: 0 5%;
        }
        .about-modern-text-card {
          background: rgba(24,28,47,0.92);
          box-shadow: 0 8px 32px rgba(79,140,255,0.18);
          border-radius: 2rem;
          padding: 40px 36px 32px 36px;
          max-width: 520px;
          min-width: 320px;
          flex: 1 1 350px;
          backdrop-filter: blur(6px);
          color: #e0e7ff;
        }
        .about-modern-icon-title {
          text-align: center;
        }
        .about-modern-icon-title h2 {
          font-weight: 900;
          font-size: 2.6rem;
          margin: 12px 0 0 0;
          letter-spacing: -1px;
        }
        .about-modern-icon-title h2 span {
          color: #2563eb;
        }
        .about-underline {
          width: 60px;
          height: 5px;
          background: #2563eb;
          border-radius: 3px;
          margin: 16px auto 18px auto;
        }
        .about-modern-subtitle {
          font-size: 1.18rem;
          font-weight: 500;
          color: #bfcfff;
          margin-bottom: 18px;
        }
        .about-modern-info {
          margin-top: 18px;
        }
        .about-modern-info-block {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          background: rgba(35,41,70,0.85);
          border-radius: 1rem;
          padding: 16px 18px 10px 14px;
          margin-bottom: 16px;
          box-shadow: 0 2px 12px rgba(37,99,235,0.04);
          color: #e0e7ff;
        }
        .about-modern-info-block strong {
          font-size: 1.08rem;
          color: #fff;
        }
        .about-modern-info-block p {
          margin: 2px 0 0 0;
          font-size: 1rem;
          color: #bfcfff;
        }
        .about-modern-info-icon {
          margin-top: 2px;
          font-size: 1.3rem;
        }
        .about-modern-images {
          position: relative;
          min-width: 320px;
          flex: 1 1 320px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0;
          height: 420px;
          max-width: 400px;
        }
        .about-modern-images-centered {
          align-items: center;
          justify-content: center;
          margin: 0 auto;
        }
        .about-modern-img {
          position: absolute;
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 4px 24px rgba(0,0,0,0.10);
          background: rgba(24,28,47,0.92);
        }
        .about-modern-img-main {
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 180px;
          height: 180px;
          z-index: 3;
        }
        .about-modern-img-1 {
          top: 120px;
          left: 10%;
          width: 170px;
          height: 120px;
          z-index: 2;
        }
        .about-modern-img-2 {
          top: 260px;
          left: 55%;
          width: 200px;
          height: 120px;
          z-index: 1;
        }
        .about-modern-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        @media (max-width: 900px) {
          .about-modern-container {
            flex-direction: column;
            gap: 32px;
          }
          .about-modern-images {
            height: 340px;
            max-width: 100%;
            min-width: 220px;
          }
          .about-modern-img-main {
            width: 120px; height: 120px;
          }
          .about-modern-img-1 {
            width: 110px; height: 80px; left: 5%; top: 80px;
          }
          .about-modern-img-2 {
            width: 140px; height: 80px; left: 55%; top: 180px;
          }
        }
        @media (max-width: 600px) {
          .about-modern-section {
            padding: 40px 0 24px 0;
          }
          .about-modern-text-card {
            padding: 24px 10px 18px 10px;
            min-width: unset;
          }
          .about-modern-images {
            height: 220px;
          }
          .about-modern-img-main {
            width: 70px; height: 70px;
          }
          .about-modern-img-1 {
            width: 60px; height: 40px; left: 5%; top: 40px;
          }
          .about-modern-img-2 {
            width: 80px; height: 40px; left: 55%; top: 100px;
          }
        }
      `}</style>
    </section>
  );
}