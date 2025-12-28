import React, { useState } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';

const steps = [
  {
    icon: '📁',
    title: 'Browse Templates',
    desc: 'Explore a variety of modern website and app templates tailored for different industries.',
    modal: {
      heading: 'Browse Templates',
      content: (
        <>
          <p>Discover a curated collection of beautiful, responsive templates for every business type. Filter by category, preview live, and pick the perfect starting point for your project.</p>
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80" alt="Templates Preview" style={{ width: '100%', borderRadius: 12, marginTop: 12 }} />
        </>
      )
    }
  },
  {
    icon: '🛠️',
    title: 'Customize Instantly',
    desc: 'See how easy it is to personalize your site with our intuitive editor and live preview.',
    modal: {
      heading: 'Customize Instantly',
      content: (
        <>
          <p>Use our drag-and-drop editor to change colors, fonts, images, and layout. Instantly preview your changes and make your site truly yours—no coding required!</p>
          <img src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80" alt="Editor Preview" style={{ width: '100%', borderRadius: 12, marginTop: 12 }} />
        </>
      )
    }
  },
  {
    icon: '🚦',
    title: 'Go Live',
    desc: 'Launch your site in one click and track your growth with real-time analytics.',
    modal: {
      heading: 'Go Live',
      content: (
        <>
          <p>Publish your website instantly and start reaching your audience. Monitor your site's performance with our real-time analytics dashboard.</p>
          <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=400&q=80" alt="Analytics Preview" style={{ width: '100%', borderRadius: 12, marginTop: 12 }} />
        </>
      )
    }
  }
];

const testimonials = [
  {
    quote: 'IITIAN CRAFT made launching my business website effortless and fun! Highly recommended.',
    name: '— Happy Client',
    emoji: '🌟'
  },
  {
    quote: 'The customization options are amazing and the support team is super helpful.',
    name: '— Startup Founder',
    emoji: '🚀'
  },
  {
    quote: 'I love the analytics dashboard. It helped me grow my audience fast!',
    name: '— Digital Marketer',
    emoji: '📈'
  }
];

function StepModal({ open, onClose, heading, children }) {
  if (!open) return null;
  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(36, 41, 54, 0.45)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ background: 'rgba(24,28,47,0.92)', borderRadius: 28, maxWidth: 700, width: '96vw', padding: 48, boxShadow: '0 12px 48px #23294655', position: 'relative', animation: 'fadeInUp 0.4s', color: '#e0e7ff' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: 18, right: 24, background: 'none', border: 'none', fontSize: 36, color: '#232946', cursor: 'pointer', fontWeight: 700 }} aria-label="Close">×</button>
        <h2 style={{ fontWeight: 900, fontSize: '2.2rem', color: '#2563eb', marginBottom: 24 }}>{heading}</h2>
        <div style={{ fontSize: '1.25rem' }}>{children}</div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}

export default function DemoPage({ darkMode }) {
  const [testimonialIdx, setTestimonialIdx] = useState(0);
  const [modalIdx, setModalIdx] = useState(null);
  const [showMeetForm, setShowMeetForm] = useState(false);
  const [meetForm, setMeetForm] = useState({ name: '', email: '', message: '' });
  const [meetFormSubmitted, setMeetFormSubmitted] = useState(false);

  // Carousel effect for testimonials
  React.useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIdx((idx) => (idx + 1) % testimonials.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section style={{ minHeight: '100vh', background: darkMode ? 'linear-gradient(135deg, #181c2f 0%, #232946 60%, #4f8cff 100%)' : 'linear-gradient(135deg, #181c2f 0%, #232946 60%, #4f8cff 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', padding: '40px 0', position: 'relative' }}>
      {/* Logo and Title Row */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24 }}>
        <span style={{ fontSize: '2.2rem', fontWeight: 800, color: '#4f8cff', letterSpacing: -1 }}>IITianCraft</span>
      </div>
      <div style={{ background: darkMode ? 'rgba(24,28,47,0.92)' : 'rgba(255,255,255,0.13)', borderRadius: 18, maxWidth: '1500px', width: '92vw', padding: 64, boxShadow: '0 8px 32px #23294633', position: 'relative', animation: 'fadeInUp 0.4s', color: darkMode ? '#e0e7ff' : '#232946', textAlign: 'center', backdropFilter: 'blur(10px)', margin: '0 auto' }}>
        <h2 style={{ fontSize: '3rem', fontWeight: 900, color: '#4f8cff', marginBottom: 28, letterSpacing: -1 }}>
          <span role="img" aria-label="Rocket">🚀</span> Explore Our Live Demo
        </h2>
        <p style={{ fontSize: '1.35rem', color: darkMode ? '#e0e7ff' : '#232946', marginBottom: 40, fontWeight: 500 }}>
          See how <span style={{ color: '#2563eb', fontWeight: 700 }}>IITIAN CRAFT</span> can transform your digital presence! Follow the steps below to experience our features in action.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 40 }}>
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_kyu7xb1v.json"
            style={{ height: '260px', width: '260px' }}
          />
        </div>
        {/* Step Cards Grid: 3 on top row, 2 on bottom row */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 36, alignItems: 'center', marginBottom: 48 }}>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
            {steps.slice(0, 3).map((step, idx) => (
              <div key={idx} style={{
                background: darkMode ? 'rgba(35,41,70,0.85)' : (idx === modalIdx ? 'linear-gradient(90deg, #4f8cff 0%, #a084ee 100%)' : 'rgba(255,255,255,0.18)'),
                borderRadius: 24,
                padding: '36px 32px',
                minWidth: 270,
                maxWidth: 340,
                boxShadow: idx === modalIdx ? '0 6px 32px #4f8cff44' : '0 2px 16px rgba(37,99,235,0.08)',
                border: idx === modalIdx ? '3px solid #4f8cff' : '2.5px solid #e0e7ff',
                transition: 'all 0.3s',
                position: 'relative',
                zIndex: idx === modalIdx ? 2 : 1,
                transform: idx === modalIdx ? 'scale(1.09)' : 'scale(1)',
                cursor: 'pointer',
                margin: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                animation: 'fadeInUp 0.7s',
                color: darkMode ? '#e0e7ff' : '#232946',
                fontWeight: 600
              }}
              onClick={() => setModalIdx(idx)}
              >
                <span style={{ fontSize: 48, marginBottom: 16 }}>{step.icon}</span>
                <div style={{ fontWeight: 800, fontSize: 24, marginBottom: 10, color: '#4f8cff' }}>{idx + 1}. {step.title}</div>
                <div style={{ fontSize: 18, color: darkMode ? '#e0e7ff' : '#232946' }}>{step.desc}</div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: 32, justifyContent: 'center', width: '100%', flexWrap: 'wrap' }}>
            {steps.slice(3).map((step, idx) => (
              <div key={idx + 3} style={{
                background: darkMode ? 'rgba(35,41,70,0.85)' : ((idx + 3) === modalIdx ? 'linear-gradient(90deg, #4f8cff 0%, #a084ee 100%)' : 'rgba(255,255,255,0.18)'),
                borderRadius: 24,
                padding: '36px 32px',
                minWidth: 270,
                maxWidth: 340,
                boxShadow: (idx + 3) === modalIdx ? '0 6px 32px #4f8cff44' : '0 2px 16px rgba(37,99,235,0.08)',
                border: (idx + 3) === modalIdx ? '3px solid #4f8cff' : '2.5px solid #e0e7ff',
                transition: 'all 0.3s',
                position: 'relative',
                zIndex: (idx + 3) === modalIdx ? 2 : 1,
                transform: (idx + 3) === modalIdx ? 'scale(1.09)' : 'scale(1)',
                cursor: 'pointer',
                margin: 6,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                animation: 'fadeInUp 0.7s',
                color: darkMode ? '#e0e7ff' : '#232946',
                fontWeight: 600
              }}
              onClick={() => setModalIdx(idx + 3)}
              >
                <span style={{ fontSize: 48, marginBottom: 16 }}>{step.icon}</span>
                <div style={{ fontWeight: 800, fontSize: 24, marginBottom: 10, color: '#4f8cff' }}>{idx + 4}. {step.title}</div>
                <div style={{ fontSize: 18, color: darkMode ? '#e0e7ff' : '#232946' }}>{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Demo Options */}
        <div style={{ margin: '48px 0' }}>
          <h3 style={{ fontSize: '2rem', fontWeight: 700, color: '#4f8cff', marginBottom: 40 }}>How would you like your demo?</h3>
          <div style={{ display: 'flex', gap: 60, justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="/contact" style={{ 
              background: 'linear-gradient(135deg, #4f8cff 0%, #a084ee 100%)', 
              color: '#fff', 
              fontWeight: 700, 
              padding: '40px 60px', 
              borderRadius: 24, 
              textDecoration: 'none', 
              fontSize: '1.4rem', 
              boxShadow: '0 8px 32px #4f8cff44', 
              border: 'none', 
              transition: 'all 0.3s', 
              cursor: 'pointer', 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
              minWidth: '280px',
              minHeight: '200px',
              justifyContent: 'center',
              animation: 'pulse 1.5s infinite alternate',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px) scale(1.05)';
              e.target.style.boxShadow = '0 12px 40px #4f8cff66';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 32px #4f8cff44';
            }}
            >
              <span role="img" aria-label="Phone" style={{ fontSize: '3rem' }}>📞</span>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Phone Call</div>
                <div style={{ fontSize: '1rem', opacity: 0.9 }}>Get our contact info</div>
              </div>
            </a>
            <button onClick={() => setShowMeetForm(true)} style={{ 
              background: 'linear-gradient(135deg, #34a853 0%, #0f9d58 100%)', 
              color: '#fff', 
              fontWeight: 700, 
              padding: '40px 60px', 
              borderRadius: 24, 
              textDecoration: 'none', 
              fontSize: '1.4rem', 
              boxShadow: '0 8px 32px #34a85344', 
              border: 'none', 
              transition: 'all 0.3s', 
              cursor: 'pointer', 
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 16,
              minWidth: '280px',
              minHeight: '200px',
              justifyContent: 'center',
              animation: 'pulse 1.5s infinite alternate',
              position: 'relative',
              overflow: 'hidden'
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = 'translateY(-8px) scale(1.05)';
              e.target.style.boxShadow = '0 12px 40px #34a85366';
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = 'translateY(0) scale(1)';
              e.target.style.boxShadow = '0 8px 32px #34a85344';
            }}
            >
              <span role="img" aria-label="Video" style={{ fontSize: '3rem' }}>🎥</span>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontWeight: 800, marginBottom: 8 }}>Google Meet</div>
                <div style={{ fontSize: '1rem', opacity: 0.9 }}>Schedule a video call</div>
              </div>
            </button>
          </div>
        </div>
        {/* Testimonial Carousel */}
        <div style={{ marginTop: 24, background: 'rgba(255,255,255,0.18)', borderRadius: 16, padding: 24, fontStyle: 'italic', color: '#232946', fontSize: 18, boxShadow: '0 2px 12px rgba(37,99,235,0.04)', minHeight: 90, maxWidth: 500, marginLeft: 'auto', marginRight: 'auto', transition: 'all 0.3s', fontWeight: 500 }}>
          <span style={{ fontSize: 26, marginRight: 8 }}>{testimonials[testimonialIdx].emoji}</span>
          "{testimonials[testimonialIdx].quote}"<br />
          <span style={{ fontWeight: 700, color: '#4f8cff' }}>{testimonials[testimonialIdx].name}</span>
        </div>
      </div>
      {/* Floating Chat/Help Widget */}
      <a href="/contact" style={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        background: 'linear-gradient(90deg, #2563eb 0%, #4f46e5 100%)',
        color: '#fff',
        borderRadius: '50%',
        width: 64,
        height: 64,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 24px #2563eb44',
        fontSize: 32,
        zIndex: 1000,
        textDecoration: 'none',
        transition: 'transform 0.2s',
        animation: 'pulse 1.5s infinite alternate',
      }}
        title="Need help? Chat with us!"
      >
        💬
      </a>
      <StepModal
        open={modalIdx !== null}
        onClose={() => setModalIdx(null)}
        heading={modalIdx !== null ? steps[modalIdx].modal.heading : ''}
      >
        {modalIdx !== null ? steps[modalIdx].modal.content : null}
      </StepModal>

      {/* Google Meet Form Modal */}
      {showMeetForm && (
        <div style={{
          position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', background: 'rgba(36, 41, 54, 0.85)', zIndex: 2000, display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{ 
            background: 'rgba(24,28,47,0.95)', 
            borderRadius: 28, 
            maxWidth: 500, 
            width: '90vw', 
            padding: 48, 
            boxShadow: '0 12px 48px #23294655', 
            position: 'relative', 
            animation: 'fadeInUp 0.4s', 
            color: '#e0e7ff',
            backdropFilter: 'blur(10px)'
          }}>
            <button onClick={() => {
              setShowMeetForm(false);
              setMeetFormSubmitted(false);
              setMeetForm({ name: '', email: '', message: '' });
            }} style={{ 
              position: 'absolute', 
              top: 18, 
              right: 24, 
              background: 'none', 
              border: 'none', 
              fontSize: 36, 
              color: '#e0e7ff', 
              cursor: 'pointer', 
              fontWeight: 700 
            }} aria-label="Close">×</button>
            
            {!meetFormSubmitted ? (
              <>
                <div style={{ textAlign: 'center', marginBottom: 32 }}>
                  <span role="img" aria-label="Video" style={{ fontSize: '3rem', marginBottom: 16, display: 'block' }}>🎥</span>
                  <h2 style={{ fontWeight: 900, fontSize: '2rem', color: '#34a853', marginBottom: 12 }}>Schedule Google Meet</h2>
                  <p style={{ fontSize: '1.1rem', color: '#bfcfff' }}>Enter your details and we'll send you a meeting link via email</p>
                </div>
                
                <form onSubmit={async (e) => {
                  e.preventDefault();
                  try {
                    const response = await fetch('http://localhost:5000/api/meetings/schedule', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify(meetForm)
                    });
                    
                    const result = await response.json();
                    
                    if (response.ok && result.success) {
                      setMeetFormSubmitted(true);
                    } else {
                      alert(result.message || 'Failed to submit meeting request');
                    }
                  } catch (error) {
                    console.error('Error submitting form:', error);
                    alert('Failed to submit meeting request. Please try again.');
                  }
                }} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                  <div>
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#fff' }}>Name *</label>
                    <input 
                      type="text" 
                      required 
                      value={meetForm.name}
                      onChange={(e) => setMeetForm({...meetForm, name: e.target.value})}
                      style={{ 
                        width: '100%', 
                        padding: 16, 
                        borderRadius: 12, 
                        border: '2px solid #232946', 
                        fontSize: 16, 
                        background: '#181c2f', 
                        color: '#e0e7ff',
                        boxSizing: 'border-box'
                      }}
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#fff' }}>Email *</label>
                    <input 
                      type="email" 
                      required 
                      value={meetForm.email}
                      onChange={(e) => setMeetForm({...meetForm, email: e.target.value})}
                      style={{ 
                        width: '100%', 
                        padding: 16, 
                        borderRadius: 12, 
                        border: '2px solid #232946', 
                        fontSize: 16, 
                        background: '#181c2f', 
                        color: '#e0e7ff',
                        boxSizing: 'border-box'
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label style={{ display: 'block', marginBottom: 8, fontWeight: 600, color: '#fff' }}>Message (Optional)</label>
                    <textarea 
                      value={meetForm.message}
                      onChange={(e) => setMeetForm({...meetForm, message: e.target.value})}
                      style={{ 
                        width: '100%', 
                        padding: 16, 
                        borderRadius: 12, 
                        border: '2px solid #232946', 
                        fontSize: 16, 
                        background: '#181c2f', 
                        color: '#e0e7ff',
                        minHeight: 100,
                        resize: 'vertical',
                        boxSizing: 'border-box'
                      }}
                      placeholder="Tell us about your project or any specific requirements..."
                    />
                  </div>
                  
                  <button 
                    type="submit" 
                    style={{ 
                      background: 'linear-gradient(90deg, #34a853 0%, #0f9d58 100%)', 
                      color: '#fff', 
                      padding: 18, 
                      border: 'none', 
                      borderRadius: 12, 
                      fontWeight: 700, 
                      fontSize: 18, 
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      marginTop: 8
                    }}
                    onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                  >
                    Send Meeting Request
                  </button>
                </form>
              </>
            ) : (
              <div style={{ textAlign: 'center', padding: '20px 0' }}>
                <span role="img" aria-label="Success" style={{ fontSize: '4rem', marginBottom: 16, display: 'block' }}>✅</span>
                <h3 style={{ fontWeight: 900, fontSize: '1.8rem', color: '#34a853', marginBottom: 16 }}>Request Sent!</h3>
                <p style={{ fontSize: '1.1rem', color: '#bfcfff', marginBottom: 24 }}>
                  Thank you for your interest! We'll send you a Google Meet link via email within 24 hours.
                </p>
                <button 
                  onClick={() => {
                    setShowMeetForm(false);
                    setMeetFormSubmitted(false);
                    setMeetForm({ name: '', email: '', message: '' });
                  }}
                  style={{ 
                    background: 'linear-gradient(90deg, #4f8cff 0%, #a084ee 100%)', 
                    color: '#fff', 
                    padding: 14, 
                    border: 'none', 
                    borderRadius: 12, 
                    fontWeight: 600, 
                    fontSize: 16, 
                    cursor: 'pointer',
                    transition: 'all 0.2s'
                  }}
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes pulse {
          0% { box-shadow: 0 4px 24px #ff7e5f44, 0 0 0 0 #ff7e5f33; }
          100% { box-shadow: 0 8px 32px #ff7e5f55, 0 0 0 12px #ffecd233; }
        }
      `}</style>
    </section>
  );
}
