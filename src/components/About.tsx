import React from 'react';
import { Target, Heart, Zap } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I'm a passionate Computer Science student with a drive to make meaningful 
            contributions to the technology world.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Target className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">My Goal</h3>
            <p className="text-gray-600">
              To become an AI Engineer, secure a position at MAANG companies, and build a successful unicorn startup.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-green-50 hover:bg-green-100 transition-colors">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">My Passion</h3>
            <p className="text-gray-600">
              Competitive programming and solving complex algorithmic challenges across multiple platforms.
            </p>
          </div>

          <div className="text-center p-6 rounded-xl bg-purple-50 hover:bg-purple-100 transition-colors">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Zap className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">My Drive</h3>
            <p className="text-gray-600">
              Continuous learning and growth in programming languages and problem-solving techniques.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">My Journey</h3>
              <p className="text-gray-600 mb-4">
                I'm currently pursuing Computer Science Engineering at Shahjalal University of Science and Technology, 
                Bangladesh, starting my journey in 2025. My academic foundation was built at Notre Dame College, Dhaka, 
                where I completed my Higher Secondary education from 2023-2024.
              </p>
              <p className="text-gray-600">
                My programming journey began with C and C++, and I've expanded into competitive programming 
                across platforms like Codeforces, AtCoder, and CodeChef. My ultimate goal is to become an AI Engineer, 
                work at top-tier MAANG companies, and eventually build my own unicorn startup that transforms the tech landscape.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-semibold text-gray-900 mb-4">Quick Facts</h4>
              <ul className="space-y-2 text-gray-600">
                <li>🎓 CSE Student at Shahjalal University of Science and Technology</li>
                <li>📍 Based in Dhaka, Bangladesh</li>
                <li>💻 Proficient in C & C++</li>
                <li>🏆 Active Competitive Programmer</li>
                <li>🤖 Aspiring AI Engineer</li>
                <li>🏢 Target: MAANG Companies</li>
                <li>🚀 Future Unicorn Founder</li>
                <li>📧 sagorc.modak@gmail.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;