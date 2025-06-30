
import React from 'react';
import { Download, Mail, Phone, MapPin, Globe } from 'lucide-react';

const Sidebar = () => {
  return (
    <div className="w-80 bg-card border-r border-border p-6 h-screen sticky top-0 animate-slide-in">
      <div className="text-center mb-8">
        {/* Profile Photo Placeholder */}
        <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center golden-glow">
          <span className="text-4xl font-bold text-primary-foreground">BA</span>
        </div>
        
        <h1 className="text-2xl font-bold text-foreground mb-2">Bathini Ajay</h1>
        <p className="text-primary font-medium mb-4">Java Developer | Full Stack Enthusiast</p>
        
        {/* Contact Info */}
        <div className="space-y-3 text-sm text-muted-foreground">
          <div className="flex items-center justify-center space-x-2">
            <Mail className="w-4 h-4 text-primary" />
            <span>ajaybathini08@gmail.com</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Phone className="w-4 h-4 text-primary" />
            <span>+91-7997741184</span>
          </div>
          <div className="flex items-center justify-center space-x-2">
            <Globe className="w-4 h-4 text-primary" />
            <span>Telugu, English</span>
          </div>
        </div>
      </div>
      
      {/* Download Resume Button */}
      <button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3 px-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 golden-glow hover:scale-105">
        <Download className="w-4 h-4" />
        <span>Download Resume</span>
      </button>
      
      {/* Quick Stats */}
      <div className="mt-8 pt-6 border-t border-border">
        <div className="grid grid-cols-2 gap-4 text-center">
          <div>
            <div className="text-2xl font-bold text-primary">7.8</div>
            <div className="text-xs text-muted-foreground">B.Tech GPA</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-primary">1+</div>
            <div className="text-xs text-muted-foreground">Projects</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
