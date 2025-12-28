import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { FaUser, FaEnvelope, FaCommentDots, FaPhoneAlt, FaMapMarkerAlt, FaHandshake, FaRocket, FaSmile } from 'react-icons/fa';

export default function ContactSection({ darkMode }) {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formToSend = { ...form };
      if (!formToSend.subject) delete formToSend.subject;

      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formToSend)
      });

      const data = await res.json();
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("❌ Error submitting form:", error);
      alert("Failed to send message. Please try again later.");
    }
  };

  return (
    <section style={{ minHeight: '100vh', background: darkMode ? 'linear-gradient(120deg, #181c2f 60%, #232946 100%)' : 'linear-gradient(120deg, #e0e7ff 60%, #a084ee 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 0', position: 'relative' }} id="contact">
      <svg width="100%" height="48" viewBox="0 0 1440 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', top: 0, left: 0, zIndex: 0 }}>
        <path d="M0,32 C360,64 1080,0 1440,32 L1440,48 L0,48 Z" fill={darkMode ? '#232946' : '#a084ee'} fillOpacity="0.18" />
      </svg>
      <div style={{ background: darkMode ? 'rgba(24,28,47,0.92)' : 'rgba(255,255,255,0.13)', borderRadius: 24, maxWidth: '90%', margin: '0 auto', boxShadow: '0 8px 32px #23294633', padding: 48, position: 'relative', color: darkMode ? '#e0e7ff' : '#232946', backdropFilter: 'blur(10px)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', width: '90%' }}>
        <div style={{ 
          background: 'linear-gradient(135deg, #4f8cff 0%, #a084ee 100%)', 
          borderRadius: '50%', 
          width: '120px', 
          height: '120px', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          marginBottom: 8,
          boxShadow: '0 8px 32px rgba(79,140,255,0.3)'
        }}>
          <span style={{ 
            fontSize: '2.5rem', 
            fontWeight: 900, 
            color: '#fff', 
            letterSpacing: '-2px',
            textShadow: '0 2px 8px rgba(0,0,0,0.3)'
          }}>
            IC
          </span>
        </div>
        <h2 style={{ fontWeight: 900, fontSize: '2.2rem', color: darkMode ? '#4f8cff' : '#232946', marginBottom: 8 }}>Let's Connect</h2>
        <p style={{ fontSize: '1.15rem', color: darkMode ? '#e0e7ff' : '#232946', marginBottom: 32, textAlign: 'center', maxWidth: 700 }}>
          Have a project in mind or just want to say hello? Fill out the form and our team will get back to you soon!
        </p>
        <div style={{ display: 'flex', gap: 40, flexWrap: 'wrap', justifyContent: 'center', alignItems: 'flex-start', width: '100%' }}>
          {/* Contact Form */}
          <div style={{ flex: '1 1 400px', minWidth: 320, maxWidth: 500, background: darkMode ? '#232946' : '#fff', borderRadius: 18, boxShadow: '0 4px 24px rgba(79,140,255,0.10)', padding: 32, display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '0 auto' }}>
            <Player
              autoplay
              loop={!submitted}
              src={submitted ? 'https://assets10.lottiefiles.com/packages/lf20_jbrw3hcz.json' : 'https://assets10.lottiefiles.com/packages/lf20_2ks3pjua.json'}
              style={{ height: '90px', width: '90px', marginBottom: 8 }}
            />
            {submitted ? (
              <div style={{ color: '#16a34a', textAlign: 'center', fontWeight: 600, fontSize: 18, marginTop: 16 }}>
                Thank you for reaching out!<br />We will get back to you soon.<br />
                <span style={{ fontSize: 32 }}>💬</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: 8 }}>
                <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <FaUser color="#2563eb" />
                  <input name="name" value={form.name} onChange={handleChange} required placeholder="Name" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ddd', fontSize: 16, background: darkMode ? '#181c2f' : '#fff', color: darkMode ? '#e0e7ff' : '#232946' }} />
                </div>
                <div style={{ marginBottom: 18, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <FaEnvelope color="#2563eb" />
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="Email" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ddd', fontSize: 16, background: darkMode ? '#181c2f' : '#fff', color: darkMode ? '#e0e7ff' : '#232946' }} />
                </div>
                <div style={{ marginBottom: 18, display: 'flex', alignItems: 'flex-start', gap: 10 }}>
                  <FaCommentDots color="#2563eb" style={{ marginTop: 6 }} />
                  <textarea name="message" value={form.message} onChange={handleChange} required placeholder="Message" style={{ width: '100%', padding: 10, borderRadius: 8, border: '1px solid #ddd', fontSize: 16, minHeight: 80, background: darkMode ? '#181c2f' : '#fff', color: darkMode ? '#e0e7ff' : '#232946' }} />
                </div>
                <button type="submit" style={{ width: '100%', background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)', color: '#fff', padding: 14, border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 18, boxShadow: '0 2px 12px #2563eb22', transition: 'all 0.2s', cursor: 'pointer' }}>
                  Send
                </button>
              </form>
            )}
          </div>

          {/* Contact Info & Highlights */}
          <div style={{ flex: '1 1 340px', minWidth: 260, maxWidth: 400, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 24, justifyContent: 'center', margin: '0 auto' }}>
            <div style={{ background: darkMode ? 'linear-gradient(120deg, #fcb69f 60%, #ffecd2 100%)' : 'linear-gradient(120deg, #fcb69f 60%, #ffecd2 100%)', color: '#232946', borderRadius: 18, boxShadow: '0 4px 24px rgba(79,140,255,0.10)', padding: 28, width: '100%', textAlign: 'center', marginBottom: 8 }}>
              <Player
                autoplay
                loop
                src="https://assets10.lottiefiles.com/packages/lf20_8wREpI.json"
                style={{ height: '70px', width: '70px', marginBottom: 8 }}
              />
              <div style={{ marginBottom: 12, fontWeight: 700, fontSize: 18 }}>Contact Info</div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, justifyContent: 'center' }}>
                <FaEnvelope color="#2563eb" /> <span>info@iitiancraft.com</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8, justifyContent: 'center' }}>
                <FaPhoneAlt color="#2563eb" /> <span>+91 98765 43210</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center' }}>
                <FaMapMarkerAlt color="#2563eb" /> <span>Indore, India</span>
              </div>
            </div>

            <div style={{ background: darkMode ? '#181c2f' : '#f7f8fa', borderRadius: 18, boxShadow: '0 2px 12px rgba(79,140,255,0.08)', padding: 22, width: '100%', textAlign: 'center', color: darkMode ? '#e0e7ff' : '#232946' }}>
              <div style={{ fontWeight: 700, fontSize: 17, marginBottom: 10 }}>Why Contact Us?</div>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 18, marginBottom: 10 }}>
                <span title="Friendly Support"><FaSmile size={22} color="#4f8cff" /></span>
                <span title="Quick Response"><FaRocket size={22} color="#4f8cff" /></span>
                <span title="Partnership"><FaHandshake size={22} color="#4f8cff" /></span>
              </div>
              <div style={{ fontSize: 15 }}>
                Friendly support, quick response, and a true partnership for your success.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
