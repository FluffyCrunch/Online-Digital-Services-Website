import React, { useState, useEffect, useRef } from 'react';
import { Card } from 'react-bootstrap';

export default function SlidingProjects({ projects, darkMode }) {
  const [isPaused, setIsPaused] = useState(false);
  const [position, setPosition] = useState(0);
  const projectsContainerRef = useRef(null);

  // Animation logic for continuous sliding
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setPosition((prevPosition) => {
          // Move left by 1px each time for slow movement
          const newPosition = prevPosition - 1;
          // Reset to start when we've moved past the first project width
          if (newPosition <= -350) {
            return 0;
          }
          return newPosition;
        });
      }, 50); // Move every 50ms for slow continuous motion

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div 
      ref={projectsContainerRef}
      style={{
        overflow: 'hidden',
        position: 'relative',
        padding: '20px 0',
        width: '100%'
      }}
    >
      <div
        style={{
          display: 'flex',
          transition: isPaused ? 'none' : 'transform 0.05s linear',
          transform: `translateX(${position}px)`,
          width: 'max-content',
          gap: '36px' // increased gap
        }}
      >
        {/* Duplicate projects to create seamless loop */}
        {[...projects, ...projects, ...projects].map((project, idx) => (
          <div
            key={idx}
            style={{
              width: '270px', // decreased card width
              flexShrink: 0
            }}
          >
            <Card 
              style={{ 
                background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)',
                border: 'none', 
                borderRadius: '16px',
                overflow: 'hidden',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                cursor: 'pointer',
                height: '100%'
              }}
              onMouseEnter={(e) => {
                setIsPaused(true);
                e.currentTarget.style.transform = 'translateY(-8px) scale(1.02)';
                e.currentTarget.style.boxShadow = '0 12px 40px rgba(79,140,255,0.3)';
              }}
              onMouseLeave={(e) => {
                setIsPaused(false);
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,0,0,0.1)';
              }}
            >
              <Card.Img 
                variant="top" 
                src={project.img} 
                style={{ height: '240px', objectFit: 'cover' }} // increased image height
              />
              <Card.Body style={{ padding: '25px', marginTop: '18px' }}> {/* more space between image and text */}
                <div style={{ 
                  background: '#4f8cff', 
                  color: 'white', 
                  padding: '4px 12px', 
                  borderRadius: 8, 
                  fontWeight: 700, 
                  display: 'inline-block', 
                  marginBottom: 8 
                }}>{project.category}</div>
                <h5 style={{ color: darkMode ? '#4f8cff' : '#232946', fontWeight: 700 }}>{project.title}</h5>
                <p style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>{project.desc}</p>
                {project.link && (
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-outline-primary rounded-pill mt-2" 
                    style={{ 
                      color: darkMode ? '#e0e7ff' : '#4f8cff', 
                      borderColor: darkMode ? '#e0e7ff' : '#4f8cff', 
                      fontWeight: 600,
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#4f8cff';
                      e.currentTarget.style.color = '#fff';
                      e.currentTarget.style.borderColor = '#4f8cff';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.color = darkMode ? '#e0e7ff' : '#4f8cff';
                      e.currentTarget.style.borderColor = darkMode ? '#e0e7ff' : '#4f8cff';
                    }}
                  >
                    Visit Live Site
                  </a>
                )}
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
} 