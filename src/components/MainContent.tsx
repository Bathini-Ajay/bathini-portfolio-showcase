
import React, { useState } from 'react';
import { User, FileText, Code, Award } from 'lucide-react';

const MainContent = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'About Me', icon: User },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'projects', label: 'Projects', icon: Code },
    { id: 'certifications', label: 'Certifications', icon: Award },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'about':
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary">About Me</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">Career Objective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To secure a challenging and responsible career in a company where I can effectively 
                  contribute my skills and knowledge to achieve great heights.
                </p>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <h3 className="text-xl font-semibold mb-4 text-primary">Technical Skills</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Programming</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Java</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">JDBC</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Web Technologies</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">HTML</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">CSS</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">JavaScript</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Database</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">MySQL</span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2 text-foreground">Tools & OS</h4>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">MS Office</span>
                      <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Windows</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'resume':
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary">Education</h2>
            <div className="space-y-6">
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Bachelor of Technology - CSE</h3>
                    <p className="text-primary font-medium">Pace Institute of Technology and Science</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">2019 – 2023</p>
                    <p className="text-primary font-bold">GPA: 7.8</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Intermediate - MPC</h3>
                    <p className="text-primary font-medium">M.S.R Junior College</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">2017 – 2019</p>
                    <p className="text-primary font-bold">GPA: 9.86</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-card p-6 rounded-lg border border-border">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground">Secondary School Certificate</h3>
                    <p className="text-primary font-medium">Z.P High School</p>
                  </div>
                  <div className="text-right">
                    <p className="text-muted-foreground">2015 – 2017</p>
                    <p className="text-primary font-bold">GPA: 8.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'projects':
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary">Projects</h2>
            <div className="bg-card p-6 rounded-lg border border-border">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">Real-Time Banking Application</h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                A comprehensive simulation of modern banking functionalities including secure user authentication, 
                real-time balance inquiry, and comprehensive transaction management system.
              </p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2 text-primary">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Java</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">JDBC</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">HTML</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">CSS</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">JavaScript</span>
                  <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">MySQL</span>
                </div>
              </div>
              
              <div>
                <h4 className="font-medium mb-3 text-primary">Key Features:</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Secure login system with user authentication</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Real-time balance inquiry functionality</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Transaction management with database updates</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <span className="text-primary">•</span>
                    <span>Modern web interface for seamless user experience</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'certifications':
        return (
          <div className="animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-primary">Certifications</h2>
            <div className="bg-card p-6 rounded-lg border border-border">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">Java Programming</h3>
                  <p className="text-primary font-medium">CISCO Networking Academy</p>
                  <p className="text-muted-foreground text-sm mt-1">
                    Comprehensive certification covering core Java concepts, object-oriented programming, 
                    and application development.
                  </p>
                </div>
              </div>
            </div>
          </div>
        );
      
      default:
        return null;
    }
  };

  return (
    <div className="flex-1 flex flex-col h-screen">
      {/* Tab Navigation */}
      <div className="bg-card border-b border-border px-8 py-4">
        <div className="flex space-x-1">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-primary text-primary-foreground'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </div>
      
      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-8">
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;
