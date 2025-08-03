import React from 'react';
import { Mail, Code } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <Code className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold text-gray-900">Shourov</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#education" className="text-gray-700 hover:text-blue-600 transition-colors">Education</a>
            <a href="#skills" className="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#competitive" className="text-gray-700 hover:text-blue-600 transition-colors">Competitive Programming</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>

          <div className="flex items-center space-x-4">
            <a 
              href="mailto:sagorc.modak@gmail.com" 
              className="text-gray-600 hover:text-blue-600 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;