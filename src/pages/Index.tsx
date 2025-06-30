
import React from 'react';
import Sidebar from '../components/Sidebar';
import MainContent from '../components/MainContent';

const Index = () => {
  return (
    <div className="min-h-screen gradient-bg">
      <div className="flex">
        {/* Sidebar - Hidden on mobile, shown on desktop */}
        <div className="hidden lg:block">
          <Sidebar />
        </div>
        
        {/* Main Content */}
        <MainContent />
      </div>
      
      {/* Mobile Sidebar - Simple mobile layout */}
      <div className="lg:hidden fixed inset-0 bg-background p-4">
        <div className="text-center mb-8">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
            <span className="text-2xl font-bold text-primary-foreground">BA</span>
          </div>
          <h1 className="text-xl font-bold text-foreground mb-2">Bathini Ajay</h1>
          <p className="text-primary text-sm mb-4">Java Developer | Full Stack Enthusiast</p>
          <button className="bg-primary text-primary-foreground px-4 py-2 rounded-lg text-sm">
            Download Resume
          </button>
        </div>
        
        <div className="space-y-4 text-sm">
          <div className="bg-card p-4 rounded-lg">
            <h3 className="font-semibold text-primary mb-2">Contact</h3>
            <p className="text-muted-foreground">ajaybathini08@gmail.com</p>
            <p className="text-muted-foreground">+91-7997741184</p>
          </div>
          
          <div className="bg-card p-4 rounded-lg">
            <h3 className="font-semibold text-primary mb-2">Skills</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">Java</span>
              <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">HTML/CSS</span>
              <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">JavaScript</span>
              <span className="px-2 py-1 bg-primary/20 text-primary rounded text-xs">MySQL</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
