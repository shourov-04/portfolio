import React from 'react';
import { Code2, Cpu, Trophy, Lightbulb } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      color: "blue",
      skills: [
        { name: "C", level: 85 },
        { name: "C++", level: 80 }
      ]
    },
    {
      title: "Core Concepts",
      icon: Cpu,
      color: "green",
      skills: [
        { name: "Data Structures", level: 75 },
        { name: "Algorithms", level: 70 },
        { name: "Problem Solving", level: 80 }
      ]
    },
    {
      title: "Competitive Programming",
      icon: Trophy,
      color: "purple",
      skills: [
        { name: "Codeforces", level: 60 },
        { name: "AtCoder", level: 55 },
        { name: "CodeChef", level: 65 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Lightbulb,
      color: "orange",
      skills: [
        { name: "Analytical Thinking", level: 85 },
        { name: "Continuous Learning", level: 90 },
        { name: "Team Collaboration", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My technical skills and areas of expertise in programming and competitive programming.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 rounded-2xl p-8 hover:bg-gray-100 transition-colors">
              <div className="flex items-center space-x-3 mb-6">
                <div className={`bg-${category.color}-100 p-3 rounded-full`}>
                  <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                </div>
                <h3 className="text-xl font-bold text-gray-900">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className={`bg-${category.color}-600 h-2 rounded-full transition-all duration-1000 ease-out`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Learning Path to AI Engineering
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            I'm strategically building skills for AI Engineering and preparing for MAANG companies. 
            My competitive programming foundation is strengthening my algorithmic thinking for advanced AI concepts.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
              Machine Learning
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
              Deep Learning
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
              Python & AI Libraries
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
              System Design
            </span>
            <span className="bg-white px-4 py-2 rounded-full text-gray-700 font-medium shadow-sm">
              Advanced Algorithms
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;