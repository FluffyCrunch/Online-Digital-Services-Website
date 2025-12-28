import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaUser, FaEnvelope, FaClipboardList, FaCommentDots } from 'react-icons/fa';

export default function QuotationSection({ darkMode }) {
  const [form, setForm] = useState({ name: '', email: '', service: '', details: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you could send the form data to a backend or email service
  };

  return (
    <section className="section" style={{ position: 'relative', overflow: 'hidden', background: darkMode ? 'linear-gradient(120deg, #181c2f 60%, #232946 100%)' : 'linear-gradient(120deg, #e0e7ff 60%, #a084ee 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Decorative SVG wave */}
      <svg width="100%" height="48" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,48 L0,48 Z" fill={darkMode ? '#232946' : '#a084ee'} fillOpacity="0.18" />
      </svg>
      <div style={{
        maxWidth: 520,
        width: '98vw',
        margin: '0 auto',
        background: 'rgba(255,255,255,0.13)',
        borderRadius: 18,
        boxShadow: '0 8px 32px #2563eb22',
        padding: 40,
        position: 'relative',
        textAlign: 'center',
        backdropFilter: 'blur(6px)',
        color: '#e0e7ff',
      }}>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: 18 }}>
          <Player
            autoplay
            loop={!submitted}
            src={submitted ? 'https://assets10.lottiefiles.com/packages/lf20_jbrw3hcz.json' : 'https://assets10.lottiefiles.com/packages/lf20_kyu7xb1v.json'}
            style={{ height: '120px', width: '120px', marginBottom: 8 }}
          />
        </div>
        <h2 style={{ textAlign: 'center', color: '#2563eb', marginBottom: 24, fontWeight: 800, fontSize: '2rem' }}>Get a Free Quotation</h2>
        {submitted ? (
          <div style={{ color: '#16a34a', textAlign: 'center', fontWeight: 600, fontSize: 18 }}>
            Thank you! We will contact you soon.<br />
            <span style={{ fontSize: 32 }}>🎉</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginTop: 12 }}>
            <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
              <FaUser color="#2563eb" />
              <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }} />
            </div>
            <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
              <FaEnvelope color="#2563eb" />
              <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }} />
            </div>
            <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
              <FaClipboardList color="#2563eb" />
              <input name="service" value={form.service} onChange={handleChange} required placeholder="Service" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ddd', fontSize: 16 }} />
            </div>
            <div style={{ marginBottom: 18, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
              <FaCommentDots color="#2563eb" style={{ marginTop: 6 }} />
              <textarea name="details" value={form.details} onChange={handleChange} required placeholder="Details" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ddd', fontSize: 16, minHeight: 80 }} />
            </div>
            <button type="submit" style={{ width: '100%', background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)', color: '#fff', padding: 14, border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 18, boxShadow: '0 2px 12px #2563eb22', transition: 'all 0.2s', cursor: 'pointer' }}>
              Request Quotation
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
