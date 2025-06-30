
import React from 'react';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="profile-section">
        {/* Profile Photo */}
        <div className="profile-photo">
          <span className="profile-initials">BA</span>
        </div>
        
        <h1 className="profile-name">Bathini Ajay</h1>
        <p className="profile-title">Java Developer</p>
        
        {/* Download Resume Button */}
        <button className="download-btn">
          Download Resume
        </button>
      </div>
      
      {/* Contact Info */}
      <div className="contact-info">
        <div className="contact-item">
          <h3>Email</h3>
          <p>ajaybathini08@gmail.com</p>
        </div>
        
        <div className="contact-item">
          <h3>Phone</h3>
          <p>+91-7997741184</p>
        </div>
        
        <div className="contact-item">
          <h3>Languages</h3>
          <p>Telugu, English</p>
        </div>
        
        <div className="contact-item">
          <h3>GPA</h3>
          <p>7.8</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
