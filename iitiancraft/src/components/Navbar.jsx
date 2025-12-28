import React, { useEffect, useState, useRef } from 'react';
import { Navbar, Nav, Container, Dropdown } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import { FaMoon, FaSun, FaUserCircle, FaSignOutAlt } from 'react-icons/fa';
import { IoLogoIonic } from 'react-icons/io';

const SECTIONS = [
  { id: 'home', label: 'HOME', to: '/' },
  { id: 'about', label: 'ABOUT', to: '/about' },
  { id: 'pricing', label: 'PRICING', to: '/pricing' },
  { id: 'contact', label: 'CONTACT', to: '/contact' },
];

export default function AppNavbar({ user, onSignInClick, darkMode, setDarkMode, onLogout }) {
  const location = useLocation();
  const pathname = location.pathname;
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef();

  // Map pathname to section id
  const getActiveSection = () => {
    if (pathname === '/') return 'home';
    const match = SECTIONS.find(section => section.to === pathname);
    return match ? match.id : 'home';
  };
  const activeSection = getActiveSection();

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [darkMode]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className="shadow-sm py-2"
      style={{ 
        borderBottom: "1px solid #222",
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        background: darkMode ? 'linear-gradient(90deg, #181c2f 0%, #232946 100%)' : 'linear-gradient(90deg, #f8fafc 0%, #e2e8f0 100%)',
        color: darkMode ? '#fff' : '#232946',
        transition: 'background 0.3s, color 0.3s',
      }}
      sticky="top"
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center" style={{ gap: 10 }}>
          <img
            src="/loloIIT.jpg"
            alt="IITianCraft Logo"
            style={{ height: 40, width: 40, marginRight: 8, objectFit: 'contain' }}
          />
          <span style={{
            fontWeight: 800,
            fontSize: '2rem',
            letterSpacing: '1px',
            color: darkMode ? '#4f8cff' : '#232946'
          }}>
            IITianCraft
          </span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-navbar-nav" />
        <Navbar.Collapse id="main-navbar-nav">
          <Nav className="mx-auto" style={{ fontWeight: 700, fontSize: "1.2rem" }}>
            {SECTIONS.map((section) => (
              <Nav.Link
                as={Link}
                to={section.to}
                className={`mx-3${activeSection === section.id ? ' active-section' : ''}`}
                key={section.id}
                style={activeSection === section.id ? { borderBottom: `3px solid ${darkMode ? '#4f8cff' : '#232946'}`, color: darkMode ? '#4f8cff' : '#232946', background: 'transparent' } : { color: darkMode ? '#fff' : '#232946', background: 'transparent' }}
              >
                {section.label}
              </Nav.Link>
            ))}
          </Nav>
          <div className="d-flex align-items-center ms-auto" style={{ gap: 16 }}>
            {!user ? (
              <Nav.Link
                as="button"
                className="mx-2"
                style={{
                  fontWeight: 700,
                  color: darkMode ? "#4f8cff" : "#232946",
                  fontSize: "1.1rem",
                  background: 'transparent',
                  padding: '6px 16px',
                  borderRadius: 6,
                  border: 'none',
                  transition: 'background 0.2s, color 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  height: '100%',
                  outline: 'none',
                  boxShadow: 'none',
                  textDecoration: 'none',
                  cursor: 'pointer',
                }}
                onClick={onSignInClick}
                onMouseOver={e => { e.currentTarget.style.background = darkMode ? '#232946' : '#e2e8f0'; e.currentTarget.style.color = darkMode ? '#fff' : '#4f8cff'; }}
                onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = darkMode ? '#4f8cff' : '#232946'; }}
              >
                SIGN-IN/SIGN-UP
              </Nav.Link>
            ) : (
              <div ref={dropdownRef} style={{ position: 'relative' }}>
                <span
                  style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8, fontWeight: 700, color: darkMode ? '#4f8cff' : '#232946', fontSize: 18 }}
                  onClick={() => setShowDropdown((v) => !v)}
                >
                  <FaUserCircle size={28} /> {user.name}
                </span>
                {showDropdown && (
                  <div style={{
                    position: 'absolute',
                    right: 0,
                    top: '110%',
                    background: darkMode ? '#232946' : '#fff',
                    color: darkMode ? '#e0e7ff' : '#232946',
                    border: '1px solid #ccc',
                    borderRadius: 8,
                    boxShadow: '0 2px 12px #23294622',
                    minWidth: 160,
                    zIndex: 1001,
                    padding: 8
                  }}>
                    <div
                      style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', cursor: 'pointer', borderRadius: 6, fontWeight: 600 }}
                      onClick={() => { setShowDropdown(false); onLogout(); }}
                      onMouseOver={e => e.currentTarget.style.background = darkMode ? '#181c2f' : '#f8fafc'}
                      onMouseOut={e => e.currentTarget.style.background = 'transparent'}
                    >
                      <FaSignOutAlt /> Logout
                    </div>
                  </div>
                )}
              </div>
            )}
            <span
              style={{ cursor: 'pointer', fontSize: 22, marginLeft: 8, color: darkMode ? '#ffd700' : '#232946', display: 'flex', alignItems: 'center' }}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              onClick={() => setDarkMode((d) => !d)}
            >
              {darkMode ? <FaSun /> : <FaMoon />}
            </span>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
