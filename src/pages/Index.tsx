
import React from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';
import '../styles/portfolio.css';

const Index = () => {
  return (
    <div className="portfolio-container">
      {/* Sidebar - Hidden on mobile, shown on desktop */}
      <div className="sidebar-container">
        <Sidebar />
      </div>
      
      {/* Main Content */}
      <div style={{ flex: 1 }}>
        <MainContent />
      </div>
      
      {/* Mobile Layout */}
      <div className="mobile-sidebar">
        <div className="mobile-card">
          <div className="mobile-profile">
            <div className="mobile-profile-photo">
              <span className="mobile-initials">BA</span>
            </div>
            <h1 className="mobile-name">Bathini Ajay</h1>
            <p className="mobile-title">Java Developer</p>
            <button className="mobile-download-btn">
              Download Resume
            </button>
          </div>
          
          <div className="mobile-contact">
            <div className="mobile-contact-item">
              <div className="mobile-contact-icon"></div>
              <span className="mobile-contact-text">ajaybathini08@gmail.com</span>
            </div>
            <div className="mobile-contact-item">
              <div className="mobile-contact-icon"></div>
              <span className="mobile-contact-text">+91-7997741184</span>
            </div>
          </div>
        </div>
        
        <div className="section-content">
          <div>
            <h2 className="section-title">About</h2>
            <p className="about-text">
              To secure a challenging and responsible career in a company where I can effectively 
              contribute my skills and knowledge to achieve great heights.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
