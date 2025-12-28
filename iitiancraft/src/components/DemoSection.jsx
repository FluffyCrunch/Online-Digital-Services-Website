import React from 'react';
import { Link } from 'react-router-dom';

export default function DemoSection({ darkMode }) {
  return (
    <section className="section-alt" style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '60vh',
      background: darkMode ? 'linear-gradient(120deg, #232946 60%, #181c2f 100%)' : 'linear-gradient(120deg, #f7f8fa 60%, #e0e7ff 100%)'
    }}>
      <div className="demo-container" style={{ 
        background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(255,255,255,0.13)', 
        color: darkMode ? '#e0e7ff' : '#232946', 
        boxShadow: darkMode ? '0 8px 32px rgba(79,140,255,0.2)' : '0 8px 32px rgba(79,140,255,0.18)', 
        margin: '0 auto', 
        textAlign: 'center' 
      }}>
        <h2 className="demo-title" style={{ 
          color: darkMode ? '#4f8cff' : '#4f8cff', 
          fontWeight: 900, 
          textShadow: darkMode ? '0 2px 8px rgba(35,41,70,0.3)' : '0 2px 8px rgba(35,41,70,0.10)' 
        }}>
          Try Our Live Demo
        </h2>
        <p className="demo-desc" style={{ 
          color: darkMode ? '#e0e7ff' : '#232946', 
          fontWeight: 500, 
          textShadow: darkMode ? '0 1px 4px rgba(0,0,0,0.2)' : '0 1px 4px rgba(255,255,255,0.12)' 
        }}>
          Experience the power of our digital solutions firsthand. Book a free demo and see how we can help your business grow online!
        </p>
        <Link to="/demo" className="demo-btn" style={{ 
          background: 'linear-gradient(90deg, #4f8cff 0%, #a084ee 100%)', 
          color: '#fff' 
        }}>
          Book Your Free Demo
        </Link>
      </div>
      <style>{`
        .demo-section {
          background: linear-gradient(120deg, #f7f8fa 60%, #e0e7ff 100%);
          padding: 80px 0 60px 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .demo-container {
          background: #fff;
          border-radius: 2rem;
          box-shadow: 0 8px 32px rgba(0,0,0,0.08);
          padding: 48px 32px 40px 32px;
          max-width: 300px;
          width: 180vw;
          text-align: center;
        }
        .demo-title {
          font-size: 2.2rem;
          font-weight: 800;
          color: #232946;
          margin-bottom: 18px;
        }
        .demo-desc {
          font-size: 1.18rem;
          color: #444;
          margin-bottom: 32px;
        }
        .demo-btn {
          background: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%);
          color: #232946;
          font-weight: 700;
          padding: 16px 48px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 1.2rem;
          box-shadow: 0 4px 24px #ff7e5f44;
          border: none;
          transition: all 0.2s;
          cursor: pointer;
          display: inline-block;
        }
        .demo-btn:hover {
          background: linear-gradient(90deg, #feb47b 0%, #ff7e5f 100%);
          color: #232946;
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 8px 32px #ff7e5f55;
        }
        @media (max-width: 700px) {
          .demo-container {
            padding: 24px 8px 18px 8px;
          }
          .demo-title {
            font-size: 1.3rem;
          }
          .demo-desc {
            font-size: 1rem;
          }
        }
      `}</style>
    </section>
  );
} 