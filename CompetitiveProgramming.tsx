import React from 'react';
import { Trophy, Target, TrendingUp, ExternalLink } from 'lucide-react';

const CompetitiveProgramming = () => {
  const platforms = [
    {
      name: "Codeforces",
      url: "https://codeforces.com",
      description: "Participating in regular contests and solving algorithmic problems",
      color: "red",
      status: "Active"
    },
    {
      name: "AtCoder",
      url: "https://atcoder.jp",
      description: "Engaging with high-quality competitive programming contests",
      color: "orange",
      status: "Active"
    },
    {
      name: "CodeChef",
      url: "https://codechef.com",
      description: "Solving diverse programming challenges and monthly contests",
      color: "brown",
      status: "Active"
    }
  ];

  const achievements = [
    {
      title: "Started Competitive Programming Journey",
      description: "Began actively participating in competitive programming contests",
      icon: Target,
      year: "2025"
    },
    {
      title: "Multi-Platform Participation",
      description: "Actively solving problems across Codeforces, AtCoder, and CodeChef",
      icon: Trophy,
      year: "2025"
    },
    {
      title: "Continuous Improvement",
      description: "Focusing on algorithmic thinking and problem-solving skills",
      icon: TrendingUp,
      year: "Ongoing"
    }
  ];

  return (
    <section id="competitive" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Competitive Programming
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My journey in competitive programming across multiple platforms, 
            constantly improving my algorithmic thinking and problem-solving skills.
          </p>
        </div>

        {/* Platforms */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Active Platforms
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {platforms.map((platform, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between mb-4">
                  <h4 className="text-xl font-bold text-gray-900">
                    {platform.name}
                  </h4>
                  <div className="flex items-center space-x-2">
                    <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                      {platform.status}
                    </span>
                    <a 
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-blue-600 transition-colors"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>
                <p className="text-gray-600">
                  {platform.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Journey Timeline */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            My CP Journey
          </h3>
          <div className="space-y-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <achievement.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-gray-900">
                        {achievement.title}
                      </h4>
                      <span className="text-blue-600 font-medium">
                        {achievement.year}
                      </span>
                    </div>
                    <p className="text-gray-600">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Goals */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl p-8 text-white text-center">
          <Trophy className="h-12 w-12 mx-auto mb-4 opacity-90" />
          <h3 className="text-2xl font-bold mb-4">
            CP Goals & Career Vision
          </h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Competitive programming is building my foundation for AI Engineering. My goal is to leverage 
            these problem-solving skills to excel at MAANG companies and eventually build my own unicorn startup.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-center">
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">MAANG</div>
              <div className="text-blue-100 text-sm">Career Target</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">AI Engineer</div>
              <div className="text-blue-100 text-sm">Dream Role</div>
            </div>
            <div className="bg-white bg-opacity-10 rounded-lg p-4">
              <div className="text-2xl font-bold mb-1">Unicorn</div>
              <div className="text-blue-100 text-sm">Startup Vision</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompetitiveProgramming;