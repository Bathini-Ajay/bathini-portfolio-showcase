
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
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Me</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To secure a challenging and responsible career in a company where I can effectively 
                contribute my skills and knowledge to achieve great heights.
              </p>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-6">Technical Skills</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-yellow-400">Programming</h4>
                  <div className="space-y-2">
                    <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm">Java</span>
                    <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm ml-2">JDBC</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-yellow-400">Web Technologies</h4>
                  <div className="space-y-2">
                    <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm">HTML</span>
                    <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm ml-2">CSS</span>
                    <span className="inline-block bg-gray-700 px-3 py-1 rounded-full text-sm ml-2">JavaScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'resume':
        return (
          <div className="space-y-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Resume</h2>
              <div className="w-12 h-1 bg-yellow-400 mb-8"></div>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-6 h-6 bg-yellow-400 rounded-sm mr-4"></div>
                <h3 className="text-2xl font-bold">Education</h3>
              </div>
              
              <div className="space-y-8">
                <div className="border-l-2 border-gray-600 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Bachelor of Technology - CSE</h4>
                      <p className="text-yellow-400">Pace Institute of Technology and Science</p>
                    </div>
                    <span className="text-gray-400">2019 — 2023</span>
                  </div>
                  <p className="text-gray-300 mb-2">GPA: 7.8</p>
                </div>
                
                <div className="border-l-2 border-gray-600 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Intermediate - MPC</h4>
                      <p className="text-yellow-400">M.S.R Junior College</p>
                    </div>
                    <span className="text-gray-400">2017 — 2019</span>
                  </div>
                  <p className="text-gray-300 mb-2">GPA: 9.86</p>
                </div>
                
                <div className="border-l-2 border-gray-600 pl-6 relative">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-400 rounded-full"></div>
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="text-xl font-semibold text-white">Secondary School Certificate</h4>
                      <p className="text-yellow-400">Z.P High School</p>
                    </div>
                    <span className="text-gray-400">2015 — 2017</span>
                  </div>
                  <p className="text-gray-300 mb-2">GPA: 8.5</p>
                </div>
              </div>
            </div>
          </div>
        );
      
      case 'portfolio':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">Portfolio</h2>
              <div className="w-12 h-1 bg-yellow-400 mb-8"></div>
            </div>
            
            <div className="bg-[#2a2a2a] p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Real-Time Banking Application</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                A comprehensive simulation of modern banking functionalities including secure user authentication, 
                real-time balance inquiry, and comprehensive transaction management system.
              </p>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 text-yellow-400">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">Java</span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">JDBC</span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">HTML</span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">CSS</span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">JavaScript</span>
                  <span className="bg-gray-700 px-3 py-1 rounded-full text-sm">MySQL</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-3 text-yellow-400">Key Features:</h4>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Secure login system with user authentication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Real-time balance inquiry functionality</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-yellow-400 mr-2">•</span>
                    <span>Transaction management with database updates</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        );
      
      case 'certifications':
        return (
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-2">Certifications</h2>
              <div className="w-12 h-1 bg-yellow-400 mb-8"></div>
            </div>
            
            <div className="bg-[#2a2a2a] p-8 rounded-2xl">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-400 rounded-xl flex items-center justify-center">
                  <span className="text-black font-bold">J</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">Java Programming</h3>
                  <p className="text-yellow-400 mb-2">CISCO Networking Academy</p>
                  <p className="text-gray-300">
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
    <div className="p-8 lg:p-12">
      {/* Navigation */}
      <nav className="mb-12">
        <div className="flex space-x-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`text-lg font-medium transition-colors duration-300 ${
                activeTab === tab.id
                  ? 'text-yellow-400'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </nav>
      
      {/* Content */}
      <div className="max-w-4xl">
        {renderContent()}
      </div>
    </div>
  );
};

export default MainContent;
