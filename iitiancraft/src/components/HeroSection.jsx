import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const clientLogos = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg',
  'https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg',
  'https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png',
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg',
  'https://upload.wikimedia.org/wikipedia/commons/9/96/Sass_Logo_Color.svg',
];

const typewriterPhrases = [
  'Empowering your digital presence.',
  'Modern web solutions for your business.',
  'Build, grow, and shine online with us!',
];

export default function HeroSection({ darkMode }) {
  const [animate, setAnimate] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 200);
  }, []);

  useEffect(() => {
    if (charIdx < typewriterPhrases[phraseIdx].length) {
      const timeout = setTimeout(() => {
        setTypedText((prev) => prev + typewriterPhrases[phraseIdx][charIdx]);
        setCharIdx(charIdx + 1);
      }, 40);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setTypedText('');
        setCharIdx(0);
        setPhraseIdx((prev) => (prev + 1) % typewriterPhrases.length);
      }, 1800);
      return () => clearTimeout(timeout);
    }
  }, [charIdx, phraseIdx]);

  return (
    <section className="section hero-interactive-section">
      {/* Modern abstract SVG illustration */}
      <svg width="320" height="180" viewBox="0 0 320 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, right: 0, zIndex: 1, opacity: 0.18 }}>
        <ellipse cx="160" cy="90" rx="160" ry="90" fill="url(#paint0_linear)" />
        <defs>
          <linearGradient id="paint0_linear" x1="0" y1="0" x2="320" y2="180" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4f8cff" />
            <stop offset="1" stopColor="#a084ee" />
          </linearGradient>
        </defs>
      </svg>
      {/* Animated background shapes */}
      <div className="hero-bg-shape hero-bg-shape-1" />
      <div className="hero-bg-shape hero-bg-shape-2" />
      <div className="hero-bg-shape hero-bg-shape-3" />
      <div className="hero-content-wrapper">
        <h1 className="hero-title">
          <span className="hero-title-main">IITIAN <span className="hero-title-highlight">CRAFT</span></span>
        </h1>
        <div className="hero-typewriter">
          {typedText}
          <span className="hero-cursor">|</span>
        </div>
        <Link to="/demo" className="hero-cta-btn">Book a Free Demo</Link>
        <div className="hero-trusted-by">
          <span>Trusted by:</span>
          <div className="hero-client-logos">
            {clientLogos.map((logo, idx) => (
              <img src={logo} alt="Client Logo" key={idx} />
            ))}
          </div>
        </div>
        <div className="hero-scroll-indicator">
          <span className="hero-scroll-arrow">↓</span>
          <span className="hero-scroll-text">Scroll Down</span>
        </div>
      </div>
      <style>{`
        .hero-interactive-section {
          min-height: 100vh;
          width: 100vw;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
          background: linear-gradient(135deg, #181c2f 0%, #232946 60%, #4f8cff 100%);
        }
        .hero-bg-shape {
          position: absolute;
          border-radius: 50%;
          filter: blur(40px);
          opacity: 0.5;
          z-index: 0;
          animation: hero-shape-float 8s ease-in-out infinite alternate;
        }
        .hero-bg-shape-1 {
          width: 420px; height: 420px;
          background: #ff7e5f;
          top: -120px; left: -120px;
          animation-delay: 0s;
        }
        .hero-bg-shape-2 {
          width: 320px; height: 320px;
          background: #2563eb;
          bottom: -100px; right: -100px;
          animation-delay: 2s;
        }
        .hero-bg-shape-3 {
          width: 180px; height: 180px;
          background: #fcb69f;
          top: 60%; left: 70%;
          animation-delay: 4s;
        }
        @keyframes hero-shape-float {
          0% { transform: translateY(0) scale(1); }
          100% { transform: translateY(-30px) scale(1.08); }
        }
        .hero-content-wrapper {
          position: relative;
          z-index: 2;
          background: rgba(255,255,255,0.13);
          color: #232946;
          box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
          border-radius: 24px;
          padding: 3rem 2.5rem 2.5rem 2.5rem;
          max-width: 540px;
          width: 90vw;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.18);
          display: flex;
          flex-direction: column;
          align-items: center;
          box-sizing: border-box;
          margin: 3rem 0;
          opacity: ${animate ? 1 : 0};
          transform: ${animate ? 'translateY(0)' : 'translateY(40px)'};
          transition: opacity 0.8s cubic-bezier(.4,2,.6,1), transform 0.8s cubic-bezier(.4,2,.6,1);
        }
        .hero-title {
          font-size: 3rem;
          font-weight: 900;
          letter-spacing: 2px;
          margin-bottom: 18px;
          text-align: center;
        }
        .hero-title-main {
          background: linear-gradient(90deg, #4f8cff 0%, #a084ee 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 0 2px 8px #23294622;
        }
        .hero-title-highlight {
          color: #4f8cff;
          -webkit-text-fill-color: #4f8cff;
          text-shadow: 0 2px 8px #23294644;
        }
        .hero-typewriter {
          font-size: 1.25rem;
          font-weight: 600;
          color:rgb(225, 227, 238);
          margin-bottom: 32px;
          line-height: 1.7;
          text-align: center;
          min-height: 32px;
          letter-spacing: 0.2px;
          text-shadow: 0 1px 4px rgba(255,255,255,0.12);
        }
        .hero-cursor {
          color: #fcb69f;
          font-weight: bold;
          animation: hero-cursor-blink 1s steps(2, start) infinite;
        }
        @keyframes hero-cursor-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .hero-cta-btn {
          background: linear-gradient(90deg, #ff7e5f 0%, #feb47b 100%);
          color: #232946;
          font-weight: 800;
          padding: 16px 48px;
          border-radius: 12px;
          text-decoration: none;
          font-size: 22px;
          box-shadow: 0 4px 24px #ff7e5f44;
          border: none;
          transition: all 0.2s;
          cursor: pointer;
          display: inline-block;
          outline: none;
          margin-bottom: 28px;
        }
        .hero-cta-btn:hover {
          background: linear-gradient(90deg, #feb47b 0%, #ff7e5f 100%);
          color: #232946;
          transform: scale(1.05) translateY(-2px);
          box-shadow: 0 8px 32px #ff7e5f55;
        }
        .hero-trusted-by {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-bottom: 18px;
        }
        .hero-trusted-by span {
          color: #fff;
          font-size: 1rem;
          font-weight: 600;
          margin-bottom: 8px;
        }
        .hero-client-logos {
          display: flex;
          gap: 18px;
          align-items: center;
        }
        .hero-client-logos img {
          width: 38px;
          height: 38px;
          object-fit: contain;
          filter: grayscale(1) brightness(1.2) drop-shadow(0 2px 8px #23294622);
          opacity: 0.85;
          transition: filter 0.2s, opacity 0.2s;
        }
        .hero-client-logos img:hover {
          filter: grayscale(0) brightness(1.1) drop-shadow(0 4px 16px #ff7e5f44);
          opacity: 1;
        }
        .hero-scroll-indicator {
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-top: 18px;
          animation: hero-scroll-bounce 2s infinite;
        }
        .hero-scroll-arrow {
          font-size: 2.2rem;
          color: #fcb69f;
          margin-bottom: 2px;
        }
        .hero-scroll-text {
          color: #fff;
          font-size: 1rem;
          font-weight: 500;
        }
        @keyframes hero-scroll-bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(10px); }
        }
        .section-divider {
          width: 100%;
          height: 48px; /* Adjust height as needed */
          position: absolute;
          bottom: 0;
          left: 0;
          z-index: 1;
          opacity: 0.1;
        }
        @media (max-width: 700px) {
          .hero-content-wrapper {
            padding: 2rem 0.7rem 1.5rem 0.7rem;
            max-width: 98vw;
          }
          .hero-title {
            font-size: 2.1rem;
          }
          .hero-typewriter {
            font-size: 1.05rem;
          }
          .hero-cta-btn {
            font-size: 1rem;
            padding: 12px 24px;
          }
        }
      `}</style>
    </section>
  );
}
