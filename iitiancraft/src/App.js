import React, { useState } from "react";
import AppNavbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Pricing from "./pages/Pricing";
import Contact from "./pages/Contact";
import SignInSignUpModal from "./components/SignInSignUpModal";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import DemoPage from "./pages/DemoPage";
import AppDevelopment from './pages/AppDevelopment';
import GameDevelopment from './pages/GameDevelopment';
import LogoDesign from './pages/LogoDesign';
import SEOBacklinks from './pages/SEOBacklinks';
import VideoProduction from './pages/VideoProduction';
import ChatbotDevelopment from './pages/ChatbotDevelopment';
import CRMERPIntegration from './pages/CRMERPIntegration';
import CustomAPIDevelopment from './pages/CustomAPIDevelopment';
import ContentWriting from './pages/ContentWriting';
import WebsiteDevelopment from './pages/WebsiteDevelopment';
import UIUXDesign from './pages/UIUXDesign';
import RestaurantAppTemplate from './pages/RestaurantAppTemplate';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from './pages/AdminDashboard';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const stored = localStorage.getItem('darkMode');
    return stored ? JSON.parse(stored) : false;
  });

  React.useEffect(() => {
    if (darkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    setShowSignIn(false);
    toast.success("User login successfully!");
  };

  const handleLogout = () => {
    setUser(null);
    toast.info("Logged out successfully!");
  };

  return (
    <Router>
      <div className={darkMode ? 'App dark-mode' : 'App'}>
        <AppNavbar user={user} onSignInClick={() => setShowSignIn(true)} darkMode={darkMode} setDarkMode={setDarkMode} onLogout={handleLogout} />
        <SignInSignUpModal show={showSignIn} onHide={() => setShowSignIn(false)} darkMode={darkMode} onLoginSuccess={handleLoginSuccess} />
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Home darkMode={darkMode} />} />
          <Route path="/about" element={<About darkMode={darkMode} />} />
          <Route path="/services" element={<Navigate to="/" replace />} />
          <Route path="/pricing" element={<Pricing darkMode={darkMode} />} />
          <Route path="/contact" element={<Contact darkMode={darkMode} />} />
          <Route path="/demo" element={<DemoPage darkMode={darkMode} />} />
          <Route path="/services/app-development" element={<AppDevelopment darkMode={darkMode} />} />
          <Route path="/services/game-development" element={<GameDevelopment darkMode={darkMode} />} />
          <Route path="/services/logo-design" element={<LogoDesign darkMode={darkMode} />} />
          <Route path="/services/seo-backlinks" element={<SEOBacklinks darkMode={darkMode} />} />
          <Route path="/services/video-production" element={<VideoProduction darkMode={darkMode} />} />
          <Route path="/services/chatbot-development" element={<ChatbotDevelopment darkMode={darkMode} />} />
          <Route path="/services/crm-erp-integration" element={<CRMERPIntegration darkMode={darkMode} />} />
          <Route path="/services/custom-api-development" element={<CustomAPIDevelopment darkMode={darkMode} />} />
          <Route path="/services/content-writing" element={<ContentWriting darkMode={darkMode} />} />
          <Route path="/services/website-development" element={<WebsiteDevelopment darkMode={darkMode} />} />
          <Route path="/services/ui-ux-design" element={<UIUXDesign darkMode={darkMode} />} />
          <Route path="/restaurant-app-template" element={<RestaurantAppTemplate darkMode={darkMode} />} />
          <Route path="/admin-dashboard" element={<AdminDashboard darkMode={darkMode} />} />
        </Routes>
        <Footer darkMode={darkMode} />
      </div>
    </Router>
  );
}

export default App;