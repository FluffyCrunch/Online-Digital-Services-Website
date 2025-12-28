import React, { useState } from 'react';
import { Modal, Button, Form, Nav, Alert, Spinner } from 'react-bootstrap';
import { FaUserCircle, FaGoogle, FaFacebook, FaEnvelope } from 'react-icons/fa';

export default function SignInSignUpModal({ show, onHide, darkMode, onLoginSuccess }) {
  const [isSignUp, setIsSignUp] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const baseURL = 'http://localhost:5000'; // Change this if deployed
      const endpoint = isSignUp ? `${baseURL}/api/auth/signup` : `${baseURL}/api/auth/login`;
      const payload = isSignUp
        ? { name: form.name, email: form.email, password: form.password }
        : { email: form.email, password: form.password };

      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || 'Something went wrong');
      } else {
        // Save token to localStorage
        localStorage.setItem('token', data.data.token);

        // Notify parent
        if (onLoginSuccess) {
          onLoginSuccess(data.data.user);
        }

        setForm({ name: '', email: '', password: '' });
        setError('');
        onHide(); // Close modal after login/signup
      }
    } catch (err) {
      console.error(err);
      setError('Network error: Could not reach the server');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Modal show={show} onHide={onHide} centered contentClassName="signin-modal-modern">
      <div className={`signin-modal-bg${darkMode ? ' dark' : ''}`} />
      <Modal.Header closeButton style={{ border: 'none', background: 'transparent', zIndex: 2, justifyContent: 'center' }}>
        <Modal.Title style={{ fontWeight: 800, fontSize: '2rem', letterSpacing: -1, width: '100%', textAlign: 'center', color: darkMode ? '#4f8cff' : undefined }}>
          {isSignUp ? "Sign Up" : "Sign In"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: darkMode ? '#e0e7ff' : undefined }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
          <FaUserCircle size={64} color={darkMode ? '#4f8cff' : '#2563eb'} style={{ marginBottom: 8 }} />
        </div>

        {error && <Alert variant="danger" style={{ width: '100%', maxWidth: 350 }}>{error}</Alert>}

        <Form autoComplete="off" style={{ animation: 'fadeInUp 0.5s', width: '100%', maxWidth: 350, margin: '0 auto' }} onSubmit={handleSubmit}>
          {isSignUp && (
            <Form.Group className="mb-3" controlId="formBasicName">
              <Form.Label style={{ color: darkMode ? '#e0e7ff' : undefined }}>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                placeholder="Enter your name"
                autoComplete="off"
                style={{ background: darkMode ? '#232946' : undefined, color: darkMode ? '#e0e7ff' : undefined }}
                value={form.name}
                onChange={handleChange}
                required
              />
            </Form.Group>
          )}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: darkMode ? '#e0e7ff' : undefined }}>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              autoComplete="off"
              style={{ background: darkMode ? '#232946' : undefined, color: darkMode ? '#e0e7ff' : undefined }}
              value={form.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: darkMode ? '#e0e7ff' : undefined }}>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              autoComplete="off"
              style={{ background: darkMode ? '#232946' : undefined, color: darkMode ? '#e0e7ff' : undefined }}
              value={form.password}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            style={{
              fontWeight: 700,
              fontSize: '1.1rem',
              borderRadius: 12,
              marginBottom: 10,
              boxShadow: '0 2px 12px #2563eb22',
              background: darkMode ? 'linear-gradient(90deg, #4f8cff 0%, #2563eb 100%)' : undefined,
              color: darkMode ? '#fff' : undefined
            }}
            disabled={loading}
          >
            {loading ? <Spinner animation="border" size="sm" /> : isSignUp ? "Sign Up" : "Sign In"}
          </Button>
        </Form>

        <div className="text-center mb-2" style={{ color: darkMode ? '#bfcfff' : '#888', fontWeight: 500, fontSize: 15 }}>or</div>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, marginBottom: 10 }}>
          <Button variant="outline-primary" style={{ borderRadius: '50%', width: 44, height: 44, fontSize: 22, background: darkMode ? '#232946' : undefined, color: darkMode ? '#4f8cff' : undefined, borderColor: darkMode ? '#4f8cff' : undefined }}>
            <FaGoogle />
          </Button>
          <Button variant="outline-primary" style={{ borderRadius: '50%', width: 44, height: 44, fontSize: 22, background: darkMode ? '#232946' : undefined, color: darkMode ? '#4f8cff' : undefined, borderColor: darkMode ? '#4f8cff' : undefined }}>
            <FaFacebook />
          </Button>
          <Button variant="outline-primary" style={{ borderRadius: '50%', width: 44, height: 44, fontSize: 22, background: darkMode ? '#232946' : undefined, color: darkMode ? '#4f8cff' : undefined, borderColor: darkMode ? '#4f8cff' : undefined }}>
            <FaEnvelope />
          </Button>
        </div>

        <div className="text-center mt-2">
          <Nav.Link
            as="button"
            style={{
              background: "none",
              border: "none",
              color: darkMode ? "#4f8cff" : "#2563eb",
              cursor: "pointer",
              fontWeight: 600,
              fontSize: 15
            }}
            onClick={() => setIsSignUp(!isSignUp)}
          >
            {isSignUp ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
          </Nav.Link>
        </div>
      </Modal.Body>

      <style>{`
        .signin-modal-modern {
          overflow: visible;
          border-radius: 1.5rem;
          box-shadow: 0 8px 32px #23294622;
          background: transparent;
        }
        .signin-modal-bg {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: linear-gradient(120deg, #e0e7ff 60%, #f7f8fa 100%);
          z-index: 1;
          border-radius: 1.5rem;
        }
        .signin-modal-bg.dark {
          background: linear-gradient(120deg, #181c2f 60%, #232946 100%);
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </Modal>
  );
}
