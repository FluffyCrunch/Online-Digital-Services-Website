import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter, FaEnvelope, FaPhoneAlt, FaArrowUp } from 'react-icons/fa';

export default function Footer({ darkMode }) {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: darkMode ? 'linear-gradient(120deg, #181c2f 60%, #232946 100%)' : 'linear-gradient(90deg, #e0e7ff 0%, #a084ee 100%)',
      color: darkMode ? '#e0e7ff' : '#232946',
      padding: '48px 0 0 0',
      marginTop: 0,
      position: 'relative',
      boxShadow: '0 -2px 24px #23294622',
    }}>
      <div style={{
        maxWidth: 1200,
        margin: '0 auto',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        gap: 32,
        padding: '0 32px',
      }}>
        {/* Logo & Tagline */}
        <div style={{ flex: '1 1 220px', minWidth: 200 }}>
          <div style={{ fontWeight: 900, fontSize: 28, letterSpacing: 1, marginBottom: 8, color: darkMode ? '#fcb69f' : '#232946' }}>IITIAN CRAFT</div>
          <div style={{ fontSize: 15, color: darkMode ? '#e0e7ff' : '#232946', marginBottom: 18 }}>
            Modern web solutions for your business.
          </div>
          <div style={{ display: 'flex', gap: 16, marginTop: 8 }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: darkMode ? '#e0e7ff' : '#232946' }}><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: darkMode ? '#e0e7ff' : '#232946' }}><FaLinkedin /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ ...iconStyle, color: darkMode ? '#e0e7ff' : '#232946' }}><FaTwitter /></a>
          </div>
        </div>
        {/* Quick Links */}
        <div style={{ flex: '1 1 160px', minWidth: 140 }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, color: darkMode ? '#fcb69f' : '#232946' }}>Quick Links</div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, lineHeight: 2 }}>
            <li><a href="/" style={{ ...linkStyle, color: darkMode ? '#e0e7ff' : '#232946' }}>Home</a></li>
            <li><a href="/about" style={{ ...linkStyle, color: darkMode ? '#e0e7ff' : '#232946' }}>About</a></li>
            <li><a href="/pricing" style={{ ...linkStyle, color: darkMode ? '#e0e7ff' : '#232946' }}>Pricing</a></li>
          </ul>
        </div>
        {/* Contact Info */}
        <div style={{ flex: '1 1 220px', minWidth: 200 }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, color: darkMode ? '#fcb69f' : '#232946' }}>Contact Us</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, color: darkMode ? '#e0e7ff' : '#232946' }}>
            <FaEnvelope color={darkMode ? '#e0e7ff' : '#232946'} /> <span>info@iitiancraft.com</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, color: darkMode ? '#e0e7ff' : '#232946' }}>
            <FaPhoneAlt color={darkMode ? '#e0e7ff' : '#232946'} /> <span>+91 98765 43210</span>
          </div>
          <div style={{ fontSize: 14, color: darkMode ? '#e0e7ffcc' : '#232946', marginTop: 8 }}>Indore, India</div>
        </div>
        {/* Newsletter Signup */}
        <div style={{ flex: '1 1 260px', minWidth: 220 }}>
          <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 10, color: darkMode ? '#fcb69f' : '#232946' }}>Stay Updated</div>
          <form onSubmit={e => { e.preventDefault(); alert('Thank you for subscribing!'); }} style={{ display: 'flex', gap: 8 }}>
            <input type="email" placeholder="Your email" required style={{
              borderRadius: 20,
              border: 'none',
              padding: '8px 16px',
              fontSize: 15,
              outline: 'none',
              background: '#fff',
              color: '#232946',
              flex: 1,
            }} />
            <button type="submit" style={{
              borderRadius: 20,
              border: 'none',
              background: 'linear-gradient(90deg, #fcb69f 0%, #ff7e5f 100%)',
              color: '#232946',
              fontWeight: 700,
              padding: '8px 18px',
              cursor: 'pointer',
              transition: 'background 0.2s',
            }}>Subscribe</button>
          </form>
        </div>
      </div>
      {/* Copyright & Scroll to Top */}
      <div style={{
        borderTop: '1px solid #e0e7ff22',
        marginTop: 36,
        padding: '18px 0 12px 0',
        textAlign: 'center',
        color: darkMode ? '#e0e7ffcc' : '#232946',
        fontSize: 15,
        position: 'relative',
      }}>
        <span>&copy; {new Date().getFullYear()} IITIAN CRAFT. All rights reserved.</span>
        <button onClick={scrollToTop} style={{
          position: 'absolute',
          right: 32,
          top: '50%',
          transform: 'translateY(-50%)',
          background: 'none',
          border: 'none',
          color: darkMode ? '#fcb69f' : '#232946',
          fontSize: 22,
          cursor: 'pointer',
          transition: 'color 0.2s',
        }} title="Back to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

// Inline styles for links and icons
const linkStyle = {
  color: '#e0e7ff',
  textDecoration: 'none',
  fontSize: 16,
  transition: 'color 0.2s',
  fontWeight: 500,
};

const iconStyle = {
  color: '#e0e7ff',
  fontSize: 22,
  marginRight: 8,
  transition: 'color 0.2s',
  textDecoration: 'none',
};
