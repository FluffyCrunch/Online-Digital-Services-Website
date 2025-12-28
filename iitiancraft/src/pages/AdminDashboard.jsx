import React, { useState, useEffect } from 'react';
import { FaEye, FaCheck, FaTimes, FaClock, FaCalendarCheck, FaEnvelope } from 'react-icons/fa';

export default function AdminDashboard({ darkMode }) {
  const [meetings, setMeetings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMeeting, setSelectedMeeting] = useState(null);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetchMeetings();
  }, []);

  const fetchMeetings = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/meetings');
      const result = await response.json();
      
      if (response.ok && result.success) {
        setMeetings(result.data);
      } else {
        console.error('Failed to fetch meetings:', result.message);
      }
    } catch (error) {
      console.error('Error fetching meetings:', error);
    } finally {
      setLoading(false);
    }
  };

  const updateMeetingStatus = async (id, status, meetingLink = null) => {
    try {
      const response = await fetch(`http://localhost:5000/api/meetings/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status, meetingLink })
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        fetchMeetings(); // Refresh the list
        setShowModal(false);
        setSelectedMeeting(null);
      } else {
        alert(result.message || 'Failed to update meeting status');
      }
    } catch (error) {
      console.error('Error updating meeting status:', error);
      alert('Failed to update meeting status');
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'pending': return <FaClock color="#f59e0b" />;
      case 'confirmed': return <FaCheck color="#10b981" />;
      case 'completed': return <FaCalendarCheck color="#3b82f6" />;
      case 'cancelled': return <FaTimes color="#ef4444" />;
      default: return <FaClock color="#6b7280" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'pending': return '#f59e0b';
      case 'confirmed': return '#10b981';
      case 'completed': return '#3b82f6';
      case 'cancelled': return '#ef4444';
      default: return '#6b7280';
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString();
  };

  if (loading) {
    return (
      <div style={{ 
        minHeight: '100vh', 
        background: darkMode ? 'linear-gradient(135deg, #181c2f 0%, #232946 100%)' : 'linear-gradient(135deg, #e0e7ff 0%, #a084ee 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: darkMode ? '#e0e7ff' : '#232946'
      }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 600 }}>Loading meetings...</div>
      </div>
    );
  }

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: darkMode ? 'linear-gradient(135deg, #181c2f 0%, #232946 100%)' : 'linear-gradient(135deg, #e0e7ff 0%, #a084ee 100%)',
      padding: '40px 5%',
      color: darkMode ? '#e0e7ff' : '#232946'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: 900, 
          color: '#4f8cff', 
          marginBottom: '2rem',
          textAlign: 'center'
        }}>
          Meeting Requests Dashboard
        </h1>

        <div style={{ 
          background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)',
          borderRadius: 20,
          padding: '2rem',
          boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
          marginBottom: '2rem'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
            <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: darkMode ? '#e0e7ff' : '#232946' }}>
              All Meeting Requests ({meetings.length})
            </h2>
            <button 
              onClick={fetchMeetings}
              style={{
                background: 'linear-gradient(90deg, #4f8cff 0%, #a084ee 100%)',
                color: '#fff',
                padding: '10px 20px',
                border: 'none',
                borderRadius: 8,
                fontWeight: 600,
                cursor: 'pointer'
              }}
            >
              Refresh
            </button>
          </div>

          {meetings.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem', color: darkMode ? '#bfcfff' : '#6b7280' }}>
              <FaEnvelope size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
              <p>No meeting requests found</p>
            </div>
          ) : (
            <div style={{ display: 'grid', gap: '1rem' }}>
              {meetings.map((meeting) => (
                <div key={meeting._id} style={{
                  background: darkMode ? 'rgba(24,28,47,0.8)' : 'rgba(255,255,255,0.8)',
                  borderRadius: 12,
                  padding: '1.5rem',
                  border: `2px solid ${getStatusColor(meeting.status)}20`,
                  transition: 'all 0.2s',
                  cursor: 'pointer'
                }}
                onClick={() => {
                  setSelectedMeeting(meeting);
                  setShowModal(true);
                }}
                onMouseEnter={(e) => e.target.style.transform = 'translateY(-2px)'}
                onMouseLeave={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        {getStatusIcon(meeting.status)}
                        <span style={{ 
                          fontWeight: 700, 
                          fontSize: '1.1rem',
                          color: darkMode ? '#e0e7ff' : '#232946'
                        }}>
                          {meeting.name}
                        </span>
                        <span style={{
                          background: getStatusColor(meeting.status),
                          color: '#fff',
                          padding: '4px 8px',
                          borderRadius: 6,
                          fontSize: '0.8rem',
                          fontWeight: 600,
                          textTransform: 'uppercase'
                        }}>
                          {meeting.status}
                        </span>
                      </div>
                      <div style={{ color: darkMode ? '#bfcfff' : '#6b7280', marginBottom: '0.5rem' }}>
                        {meeting.email}
                      </div>
                      {meeting.message && (
                        <div style={{ 
                          color: darkMode ? '#bfcfff' : '#6b7280',
                          fontSize: '0.9rem',
                          fontStyle: 'italic'
                        }}>
                          "{meeting.message.substring(0, 100)}..."
                        </div>
                      )}
                      <div style={{ 
                        fontSize: '0.8rem', 
                        color: darkMode ? '#8b9dc3' : '#9ca3af',
                        marginTop: '0.5rem'
                      }}>
                        Requested: {formatDate(meeting.createdAt)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Meeting Detail Modal */}
      {showModal && selectedMeeting && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          background: 'rgba(0,0,0,0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: darkMode ? 'rgba(24,28,47,0.95)' : 'rgba(255,255,255,0.95)',
            borderRadius: 20,
            padding: '2rem',
            maxWidth: '600px',
            width: '90vw',
            maxHeight: '80vh',
            overflow: 'auto',
            position: 'relative'
          }}>
            <button
              onClick={() => {
                setShowModal(false);
                setSelectedMeeting(null);
              }}
              style={{
                position: 'absolute',
                top: '1rem',
                right: '1rem',
                background: 'none',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                color: darkMode ? '#e0e7ff' : '#232946'
              }}
            >
              ×
            </button>

            <h3 style={{ 
              fontSize: '1.5rem', 
              fontWeight: 700, 
              marginBottom: '1rem',
              color: darkMode ? '#e0e7ff' : '#232946'
            }}>
              Meeting Request Details
            </h3>

            <div style={{ marginBottom: '1.5rem' }}>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: darkMode ? '#4f8cff' : '#4f8cff' }}>Name:</strong>
                <div style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>{selectedMeeting.name}</div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: darkMode ? '#4f8cff' : '#4f8cff' }}>Email:</strong>
                <div style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>{selectedMeeting.email}</div>
              </div>
              {selectedMeeting.message && (
                <div style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: darkMode ? '#4f8cff' : '#4f8cff' }}>Message:</strong>
                  <div style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>{selectedMeeting.message}</div>
                </div>
              )}
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: darkMode ? '#4f8cff' : '#4f8cff' }}>Status:</strong>
                <div style={{ 
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  background: `${getStatusColor(selectedMeeting.status)}20`,
                  color: getStatusColor(selectedMeeting.status),
                  padding: '4px 8px',
                  borderRadius: 6,
                  fontWeight: 600,
                  textTransform: 'uppercase'
                }}>
                  {getStatusIcon(selectedMeeting.status)}
                  {selectedMeeting.status}
                </div>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <strong style={{ color: darkMode ? '#4f8cff' : '#4f8cff' }}>Requested:</strong>
                <div style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>{formatDate(selectedMeeting.created_at)}</div>
              </div>
              {selectedMeeting.meeting_link && (
                <div style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: darkMode ? '#4f8cff' : '#4f8cff' }}>Meeting Link:</strong>
                  <div style={{ color: darkMode ? '#e0e7ff' : '#232946' }}>
                    <a href={selectedMeeting.meeting_link} target="_blank" rel="noopener noreferrer" style={{ color: '#4f8cff' }}>
                      {selectedMeeting.meeting_link}
                    </a>
                  </div>
                </div>
              )}
            </div>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              {selectedMeeting.status === 'pending' && (
                <>
                  <button
                    onClick={() => updateMeetingStatus(selectedMeeting._id, 'confirmed')}
                    style={{
                      background: 'linear-gradient(90deg, #10b981 0%, #059669 100%)',
                      color: '#fff',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: 8,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Confirm Meeting
                  </button>
                  <button
                    onClick={() => updateMeetingStatus(selectedMeeting._id, 'cancelled')}
                    style={{
                      background: 'linear-gradient(90deg, #ef4444 0%, #dc2626 100%)',
                      color: '#fff',
                      padding: '10px 20px',
                      border: 'none',
                      borderRadius: 8,
                      fontWeight: 600,
                      cursor: 'pointer'
                    }}
                  >
                    Cancel Meeting
                  </button>
                </>
              )}
              {selectedMeeting.status === 'confirmed' && (
                <button
                  onClick={() => updateMeetingStatus(selectedMeeting._id, 'completed')}
                  style={{
                    background: 'linear-gradient(90deg, #3b82f6 0%, #2563eb 100%)',
                    color: '#fff',
                    padding: '10px 20px',
                    border: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Mark as Completed
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 