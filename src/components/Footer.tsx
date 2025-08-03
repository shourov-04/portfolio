import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Code className="h-6 w-6 text-blue-400" />
            <span className="text-xl font-bold">Shourov aka Sagor</span>
          </div>
          
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            CSE Student at Shahjalal University of Science and Technology | Aspiring AI Engineer | Future MAANG Employee | Unicorn Startup Founder | 
            Competitive Programming Enthusiast
          </p>
          
          <div className="flex items-center justify-center space-x-1 text-gray-400">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>by Shourov</span>
          </div>
          
          <div className="mt-4 text-sm text-gray-500">
            © 2025 Shourov aka Sagor. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;