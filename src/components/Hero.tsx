import React from 'react';
import { ArrowDown, MapPin, Calendar } from 'lucide-react';

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-10 lg:mb-0">
            <div className="flex items-center space-x-2 text-blue-600 mb-4">
              <MapPin className="h-4 w-4" />
              <span className="text-sm font-medium">Dhaka, Bangladesh</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Hi, I'm <span className="text-blue-600">Shourov</span>
              <br />
              <span className="text-2xl lg:text-3xl text-gray-600 font-normal">
                aka Sagor
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Computer Science student at SUST, aspiring AI Engineer with dreams of joining MAANG companies 
              and building a successful unicorn startup.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors text-center"
              >
                Get In Touch
              </a>
              <a 
                href="#about" 
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors text-center"
              >
                Learn More
              </a>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full flex items-center justify-center shadow-2xl">
                <img 
                  src="./IMG_6741~2 copy.JPG" 
                  alt="Sagor Chandra Modak"
                  className="w-72 h-72 rounded-full object-cover border-4 border-white shadow-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white p-4 rounded-full shadow-lg">
                <div className="flex items-center space-x-1 text-blue-600">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm font-medium">Since 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-16">
          <ArrowDown className="h-6 w-6 text-gray-400 mx-auto animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;