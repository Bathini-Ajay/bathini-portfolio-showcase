
import React, { useState } from 'react';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('resume');

  const tabs = [
    { id: 'about', label: 'About' },
    { id: 'resume', label: 'Resume' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'certifications', label: 'Certifications' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="section-content">
            <div>
              <h2 className="section-title">About Me</h2>
              <p className="about-text">
                To secure a challenging and responsible career in a company where I can effectively 
                contribute my skills and knowledge to achieve great heights.
              </p>
            </div>
            
            <div>
              <h3 className="section-title">Technical Skills</h3>
              <div className="skills-grid">
                <div className="skill-category">
                  <h4>Programming</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">Java</span>
                    <span className="skill-tag">JDBC</span>
                  </div>
                </div>
                <div className="skill-category">
                  <h4>Web Technologies</h4>
                  <div className="skill-tags">
                    <span className="skill-tag">HTML</span>
                    <span className="skill-tag">CSS</span>
                    <span className="skill-tag">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'resume':
        return (
          <div className="section-content">
            <div>
              <h2 className="section-title">Resume</h2>
              <div className="section-underline"></div>
            </div>
            
            <div>
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '24px' }}>
                <div style={{ width: '24px', height: '24px', backgroundColor: '#fbbf24', borderRadius: '2px', marginRight: '16px' }}></div>
                <h3 className="section-title">Education</h3>
              </div>
              
              <div className="education-timeline">
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-title">Bachelor of Technology - CSE</h4>
                      <p className="timeline-institution">Pace Institute of Technology and Science</p>
                    </div>
                    <span className="timeline-date">2019 — 2023</span>
                  </div>
                  <p className="timeline-gpa">GPA: 7.8</p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-title">Intermediate - MPC</h4>
                      <p className="timeline-institution">M.S.R Junior College</p>
                    </div>
                    <span className="timeline-date">2017 — 2019</span>
                  </div>
                  <p className="timeline-gpa">GPA: 9.86</p>
                </div>
                
                <div className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-header">
                    <div>
                      <h4 className="timeline-title">Secondary School Certificate</h4>
                      <p className="timeline-institution">Z.P High School</p>
                    </div>
                    <span className="timeline-date">2015 — 2017</span>
                  </div>
                  <p className="timeline-gpa">GPA: 8.5</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'portfolio':
        return (
          <div className="section-content">
            <div>
              <h2 className="section-title">Portfolio</h2>
              <div className="section-underline"></div>
            </div>
            
            <div className="project-card">
              <h3 className="project-title">Real-Time Banking Application</h3>
              <p className="project-description">
                A comprehensive simulation of modern banking functionalities including secure user authentication, 
                real-time balance inquiry, and comprehensive transaction management system.
              </p>
              
              <div className="project-section">
                <h4>Technologies Used:</h4>
                <div className="tech-tags">
                  <span className="tech-tag">Java</span>
                  <span className="tech-tag">JDBC</span>
                  <span className="tech-tag">HTML</span>
                  <span className="tech-tag">CSS</span>
                  <span className="tech-tag">JavaScript</span>
                  <span className="tech-tag">MySQL</span>
                </div>
              </div>
              
              <div className="project-section">
                <h4>Key Features:</h4>
                <ul className="feature-list">
                  <li className="feature-item">
                    <span className="feature-bullet">•</span>
                    <span>Secure login system with user authentication</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-bullet">•</span>
                    <span>Real-time balance inquiry functionality</span>
                  </li>
                  <li className="feature-item">
                    <span className="feature-bullet">•</span>
                    <span>Transaction management with database updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'certifications':
        return (
          <div className="section-content">
            <div>
              <h2 className="section-title">Certifications</h2>
              <div className="section-underline"></div>
            </div>
            
            <div className="certification-card">
              <div className="cert-icon">
                <span className="cert-icon-text">J</span>
              </div>
              <div className="cert-details">
                <h3>Java Programming</h3>
                <p className="cert-issuer">CISCO Networking Academy</p>
                <p className="cert-description">
                  Comprehensive certification covering core Java concepts, object-oriented programming, 
                  and application development.
                </p>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="main-content">
      {/* Navigation */}
      <nav className="navigation">
        <div className="nav-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`nav-tab ${activeTab === tab.id ? 'active' : ''}`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
      
      {/* Content */}
      <div className="content-section">
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;
