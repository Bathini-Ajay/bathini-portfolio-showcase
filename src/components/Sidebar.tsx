
import React from 'react';

const Sidebar = () => {
  return (
    <div className="bg-[#2a2a2a] rounded-2xl p-8 h-fit sticky top-8">
      <div className="text-center mb-8">
        {/* Profile Photo */}
        <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-yellow-400 to-orange-500 mx-auto mb-6 flex items-center justify-center">
          <span className="text-3xl font-bold text-black">BA</span>
        </div>
        
        <h1 className="text-2xl font-bold text-white mb-2">Bathini Ajay</h1>
        <p className="text-yellow-400 font-medium mb-6">Java Developer</p>
        
        {/* Download Resume Button */}
        <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-3 px-6 rounded-lg transition-all duration-300 w-full">
          Download Resume
        </button>
      </div>
      
      {/* Contact Info */}
      <div className="space-y-6">
        <div>
          <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-3">Email</h3>
          <p className="text-white">ajaybathini08@gmail.com</p>
        </div>
        
        <div>
          <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-3">Phone</h3>
          <p className="text-white">+91-7997741184</p>
        </div>
        
        <div>
          <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-3">Languages</h3>
          <p className="text-white">Telugu, English</p>
        </div>
        
        <div>
          <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-3">GPA</h3>
          <p className="text-white">7.8</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
