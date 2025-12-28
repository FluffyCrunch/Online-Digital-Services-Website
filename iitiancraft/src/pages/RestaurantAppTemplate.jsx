import React, { useState } from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { FaArrowLeft, FaStar, FaHeart, FaShoppingCart, FaSearch, FaFilter, FaMapMarkerAlt, FaPhone, FaClock, FaUsers, FaCreditCard, FaUtensils, FaBell, FaUser, FaHome, FaList, FaBookmark } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function RestaurantAppTemplate({ darkMode }) {
  const navigate = useNavigate();
  const [activeScreen, setActiveScreen] = useState('home');

  const screens = [
    {
      id: 'home',
      name: 'Home Screen',
      description: 'Main landing page with restaurant overview and quick access features',
      image: process.env.PUBLIC_URL + '/Home screen.png',
      features: [
        'Restaurant header with logo and branding',
        'Search bar for menu items and categories',
        'Quick action buttons (Order Now, Book Table)',
        'Featured dishes carousel',
        'Restaurant rating and review summary',
        'Operating hours and status indicator',
        'Distance and delivery time display',
        'Navigation menu with key sections'
      ]
    },
    {
      id: 'menu',
      name: 'Full Menu Screen',
      description: 'Complete menu browsing with categories and item details',
      image: process.env.PUBLIC_URL + '/Full menu.png',
      features: [
        'Category-based menu organization',
        'Search and filter functionality',
        'High-quality food images with descriptions',
        'Price display and currency formatting',
        'Popular item badges and recommendations',
        'Add to cart functionality',
        'Dietary preference indicators (Veg/Non-veg)',
        'Spice level indicators',
        'Allergen information display',
        'Portion size options'
      ]
    },
    {
      id: 'product-detail',
      name: 'Product Detail Screen',
      description: 'Detailed view of individual menu items with customization options',
      image: process.env.PUBLIC_URL + '/Product detail screen.png',
      features: [
        'Large product image gallery',
        'Detailed ingredient list and nutritional info',
        'Customization options (toppings, size, extras)',
        'Quantity selector with price updates',
        'Add to cart with special instructions',
        'Customer reviews and ratings',
        'Related items recommendations',
        'Preparation time display',
        'Availability status',
        'Share and favorite buttons'
      ]
    },
    {
      id: 'cart',
      name: 'Shopping Cart Screen',
      description: 'Order summary and checkout process management',
      image: process.env.PUBLIC_URL + '/Cart screen.png',
      features: [
        'Itemized order summary',
        'Quantity adjustment controls',
        'Price breakdown (subtotal, tax, delivery)',
        'Promo code application',
        'Delivery address selection',
        'Payment method selection',
        'Order notes and special requests',
        'Estimated delivery time',
        'Save cart for later option',
        'Clear cart functionality'
      ]
    },
    {
      id: 'payment',
      name: 'Payment Screen',
      description: 'Secure payment processing with multiple payment options',
      image: process.env.PUBLIC_URL + '/payment screen.png',
      features: [
        'Multiple payment methods (Card, UPI, Cash)',
        'Secure payment gateway integration',
        'Order review and confirmation',
        'Delivery address validation',
        'Contact information verification',
        'Order tracking number generation',
        'Email/SMS confirmation',
        'Estimated delivery time display',
        'Terms and conditions acceptance',
        'Order cancellation policy'
      ]
    },
    {
      id: 'order-confirmation',
      name: 'Order Confirmation Screen',
      description: 'Order confirmation with tracking details',
      image: process.env.PUBLIC_URL + '/order confirmation.png',
      features: [
        'Order confirmation number',
        'Order summary and details',
        'Estimated delivery time',
        'Payment confirmation',
        'Order tracking link',
        'Contact information',
        'Order modification options',
        'Support contact details',
        'Reorder functionality',
        'Share order details'
      ]
    },
    {
      id: 'tracking',
      name: 'Live Order Tracking Screen',
      description: 'Real-time order status and delivery tracking',
      image: process.env.PUBLIC_URL + '/Live Order Tracking Screen.png',
      features: [
        'Real-time order status updates',
        'Progress timeline with timestamps',
        'Delivery person details and contact',
        'Live location tracking on map',
        'Estimated arrival time countdown',
        'Order preparation status',
        'Delivery route visualization',
        'Contact delivery person option',
        'Order history and reorder',
        'Rating and feedback collection'
      ]
    },
    {
      id: 'order-history',
      name: 'Order History Screen',
      description: 'Complete order history and reorder functionality',
      image: process.env.PUBLIC_URL + '/Order History.png',
      features: [
        'Complete order history list',
        'Order status and details',
        'Reorder functionality',
        'Order tracking access',
        'Order ratings and reviews',
        'Order receipts and invoices',
        'Order filtering and search',
        'Order sharing options',
        'Order cancellation history',
        'Loyalty points tracking'
      ]
    },
    {
      id: 'signup',
      name: 'Sign Up Screen',
      description: 'User registration and account creation',
      image: process.env.PUBLIC_URL + '/sign up.png',
      features: [
        'User registration form',
        'Email and phone verification',
        'Password strength validation',
        'Terms and conditions acceptance',
        'Social media login options',
        'Profile information collection',
        'Dietary preferences setup',
        'Notification preferences',
        'Address book setup',
        'Payment method setup'
      ]
    },
    {
      id: 'account-settings',
      name: 'Account Settings Screen',
      description: 'Personal account management and preferences',
      image: process.env.PUBLIC_URL + '/Account Settings Screen.png',
      features: [
        'Personal information management',
        'Order history and favorites',
        'Saved addresses and payment methods',
        'Dietary preferences and allergies',
        'Notification preferences',
        'Loyalty points and rewards',
        'Account settings and privacy',
        'Support and help center',
        'Logout and security options',
        'Data export and deletion'
      ]
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh', 
      background: darkMode ? 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '20px 5%'
    }}>
      <div style={{ maxWidth: '100%' }}>
        {/* Header */}
        <Row className="mb-4">
          <Col>
            <div style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '15px',
              marginBottom: '20px'
            }}>
              <button 
                onClick={() => navigate('/services/app-development')}
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  border: 'none',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#fff',
                  cursor: 'pointer',
                  transition: 'all 0.3s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
              >
                <FaArrowLeft />
              </button>
              <div>
                <h1 style={{ 
                  color: '#fff', 
                  margin: 0, 
                  fontSize: '2.5rem', 
                  fontWeight: 700 
                }}>
                  Restaurant App Template
                </h1>
                <p style={{ 
                  color: 'rgba(255,255,255,0.8)', 
                  margin: 0, 
                  fontSize: '1.1rem' 
                }}>
                  Complete mobile app solution for restaurants and cafes
                </p>
              </div>
            </div>
          </Col>
        </Row>

        {/* Template Overview */}
        <Row className="mb-5">
          <Col>
            <Card style={{ 
              background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', 
              border: 'none', 
              borderRadius: '20px',
              padding: '50px',
              textAlign: 'center',
              marginBottom: '40px'
            }}>
              <div style={{ fontSize: '4rem', marginBottom: '20px' }}>🍽️</div>
              <h2 style={{ color: darkMode ? '#e0e7ff' : '#333', marginBottom: '15px', fontWeight: 700 }}>
                Complete Restaurant Management Solution
              </h2>
              <p style={{ color: darkMode ? '#b8c5d6' : '#666', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '30px' }}>
                Our restaurant app template includes 10 comprehensive screens designed to handle every aspect of restaurant operations, 
                from customer ordering to account management. Each screen is optimized for user experience and business efficiency.
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                <Badge style={{ background: '#667eea', padding: '10px 20px', fontSize: '1rem' }}>
                  10 Screens
                </Badge>
                <Badge style={{ background: '#28a745', padding: '10px 20px', fontSize: '1rem' }}>
                  Fully Responsive
                </Badge>
                <Badge style={{ background: '#ffc107', padding: '10px 20px', fontSize: '1rem' }}>
                  Customizable
                </Badge>
                <Badge style={{ background: '#dc3545', padding: '10px 20px', fontSize: '1rem' }}>
                  Production Ready
                </Badge>
              </div>
            </Card>
          </Col>
        </Row>

        {/* Screen Navigation */}
        <Row className="mb-5">
          <Col>
            <div style={{ 
              display: 'flex', 
              gap: '12px', 
              flexWrap: 'wrap',
              justifyContent: 'center',
              marginBottom: '30px'
            }}>
              {screens.map((screen) => (
                <button
                  key={screen.id}
                  onClick={() => setActiveScreen(screen.id)}
                  style={{
                    background: activeScreen === screen.id ? '#667eea' : 'rgba(255,255,255,0.1)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '20px',
                    padding: '10px 16px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    fontSize: '0.85rem',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseEnter={(e) => {
                    if (activeScreen !== screen.id) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (activeScreen !== screen.id) {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                    }
                  }}
                >
                  {screen.name}
                </button>
              ))}
            </div>
          </Col>
        </Row>

        {/* Screen Details */}
        {screens.map((screen) => (
          <Row key={screen.id} style={{ display: activeScreen === screen.id ? 'block' : 'none' }} className="mb-5">
            <Col>
              <Card style={{ 
                background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', 
                border: 'none', 
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                marginBottom: '40px'
              }}>
                <Row className="g-0">
                  <Col lg={6}>
                    <div style={{ position: 'relative', height: '700px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                      <img 
                        src={screen.image} 
                        alt={screen.name}
                        style={{ 
                          maxWidth: '100%', 
                          maxHeight: '100%', 
                          objectFit: 'contain',
                          borderRadius: '15px',
                          boxShadow: '0 15px 40px rgba(0,0,0,0.3)'
                        }}
                      />
                      <div style={{
                        position: 'absolute',
                        top: '30px',
                        left: '30px',
                        background: 'rgba(0,0,0,0.8)',
                        color: '#fff',
                        padding: '12px 24px',
                        borderRadius: '25px',
                        fontSize: '1rem',
                        fontWeight: 600
                      }}>
                        {screen.name}
                      </div>
                    </div>
                  </Col>
                  <Col lg={6}>
                    <div style={{ padding: '50px' }}>
                      <h3 style={{ color: darkMode ? '#e0e7ff' : '#333', marginBottom: '15px', fontWeight: 700 }}>
                        {screen.name}
                      </h3>
                      <p style={{ 
                        color: darkMode ? '#b8c5d6' : '#666', 
                        fontSize: '1.1rem', 
                        lineHeight: 1.6, 
                        marginBottom: '30px' 
                      }}>
                        {screen.description}
                      </p>
                      
                      <h5 style={{ color: '#667eea', marginBottom: '20px', fontWeight: 600 }}>
                        Key Features:
                      </h5>
                      <div style={{ display: 'grid', gap: '12px' }}>
                        {screen.features.map((feature, index) => (
                          <div key={index} style={{ 
                            display: 'flex', 
                            alignItems: 'center', 
                            gap: '12px',
                            padding: '10px',
                            background: darkMode ? 'rgba(255,255,255,0.1)' : '#f8f9fa',
                            borderRadius: '8px',
                            transition: 'all 0.3s ease'
                          }}
                          onMouseEnter={(e) => e.currentTarget.style.background = darkMode ? 'rgba(255,255,255,0.2)' : '#e9ecef'}
                          onMouseLeave={(e) => e.currentTarget.style.background = darkMode ? 'rgba(255,255,255,0.1)' : '#f8f9fa'}
                          >
                            <div style={{
                              width: '8px',
                              height: '8px',
                              borderRadius: '50%',
                              background: '#667eea',
                              flexShrink: 0
                            }}></div>
                            <span style={{ color: darkMode ? '#e0e7ff' : '#333', fontSize: '0.95rem' }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        ))}

        {/* Technical Specifications */}
        <Row className="mb-5">
          <Col>
            <Card style={{ 
              background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', 
              border: 'none', 
              borderRadius: '20px',
              padding: '50px',
              marginBottom: '40px'
            }}>
              <h2 style={{ textAlign: 'center', color: darkMode ? '#e0e7ff' : '#333', marginBottom: '40px', fontWeight: 700 }}>
                Technical Specifications
              </h2>
              <Row>
                <Col md={4} className="mb-4">
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>📱</div>
                    <h5 style={{ color: '#667eea', marginBottom: '10px' }}>Cross-Platform</h5>
                    <p style={{ color: darkMode ? '#b8c5d6' : '#666', fontSize: '0.9rem' }}>
                      Built with React Native for iOS and Android compatibility
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>⚡</div>
                    <h5 style={{ color: '#667eea', marginBottom: '10px' }}>Performance</h5>
                    <p style={{ color: darkMode ? '#b8c5d6' : '#666', fontSize: '0.9rem' }}>
                      Optimized for fast loading and smooth user experience
                    </p>
                  </div>
                </Col>
                <Col md={4} className="mb-4">
                  <div style={{ textAlign: 'center', padding: '20px' }}>
                    <div style={{ fontSize: '3rem', marginBottom: '15px' }}>🔧</div>
                    <h5 style={{ color: '#667eea', marginBottom: '10px' }}>Customizable</h5>
                    <p style={{ color: darkMode ? '#b8c5d6' : '#666', fontSize: '0.9rem' }}>
                      Easy to customize colors, fonts, and branding elements
                    </p>
                  </div>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>

        {/* Call to Action */}
        <Row>
          <Col>
            <div style={{ 
              background: darkMode ? 'rgba(35,41,70,0.9)' : 'rgba(248,249,250,0.95)', 
              borderRadius: '20px',
              padding: '50px',
              textAlign: 'center',
              boxShadow: '0 8px 32px rgba(0,0,0,0.1)',
              marginBottom: '40px'
            }}>
              <h2 style={{ fontWeight: 800, fontSize: '1.7rem', marginBottom: 12, color: darkMode ? '#e0e7ff' : '#333' }}>
                Ready to build your restaurant app?
              </h2>
              <p style={{ fontSize: 17, color: darkMode ? '#b8c5d6' : '#666', marginBottom: 18 }}>
                Get this complete template customized for your restaurant with all features and integrations.
              </p>
              <a href="/contact" style={{ 
                background: 'linear-gradient(90deg, #667eea 0%, #764ba2 100%)', 
                color: '#fff', 
                fontWeight: 700, 
                padding: '14px 44px', 
                borderRadius: 16, 
                textDecoration: 'none', 
                fontSize: 18, 
                boxShadow: '0 4px 24px rgba(102, 126, 234, 0.4)', 
                border: 'none', 
                transition: 'all 0.2s', 
                cursor: 'pointer', 
                display: 'inline-block' 
              }}>
                Get Started Today
              </a>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
} 