
import React from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white">
      <div className="flex min-h-screen">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:flex lg:w-1/3 xl:w-1/4 p-8">
          <div className="w-full">
            <Sidebar />
          </div>
        </div>
        
        {/* Main Content */}
        <div className="flex-1 lg:w-2/3 xl:w-3/4">
          <MainContent />
        </div>
      </div>
      
      {/* Mobile Layout */}
      <div className="lg:hidden p-6">
        <div className="max-w-sm mx-auto bg-[#2a2a2a] rounded-2xl p-6 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 mx-auto mb-4 flex items-center justify-center">
              <span className="text-2xl font-bold text-black">BA</span>
            </div>
            <h1 className="text-xl font-bold mb-2">Bathini Ajay</h1>
            <p className="text-yellow-400 text-sm mb-4">Java Developer</p>
            <button className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-2 rounded-lg text-sm font-medium">
              Download Resume
            </button>
          </div>
          
          <div className="mt-6 space-y-4 text-sm">
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
              <span className="text-gray-300">ajaybathini08@gmail.com</span>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-4 h-4 bg-yellow-400 rounded-sm"></div>
              <span className="text-gray-300">+91-7997741184</span>
            </div>
          </div>
        </div>
        
        <div className="space-y-6">
          <div>
            <h2 className="text-2xl font-bold mb-4">About</h2>
            <p className="text-gray-300 leading-relaxed">
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
