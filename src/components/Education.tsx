import React from 'react';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: "Bachelor of Science in Computer Science & Engineering",
      institution: "Shahjalal University of Science and Technology",
      location: "Sylhet, Bangladesh",
      period: "2025 - Present",
      status: "Current",
      description: "Pursuing comprehensive education in computer science fundamentals, algorithms, data structures, AI/ML concepts, and software engineering with focus on preparing for MAANG companies.",
      color: "blue"
    },
    {
      degree: "Higher Secondary Certificate (HSC)",
      institution: "Notre Dame College",
      location: "Dhaka, Bangladesh", 
      period: "2023 - 2024",
      status: "Completed",
      description: "Completed higher secondary education with focus on science subjects, building strong foundation for engineering studies.",
      color: "green"
    }
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My academic journey in building a strong foundation in computer science and engineering.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow p-8">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
                <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                  <div className={`bg-${edu.color}-100 p-3 rounded-full`}>
                    <GraduationCap className={`h-6 w-6 text-${edu.color}-600`} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-lg text-gray-700 font-medium">
                      {edu.institution}
                    </p>
                  </div>
                </div>
                
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  edu.status === 'Current' 
                    ? 'bg-blue-100 text-blue-800' 
                    : 'bg-green-100 text-green-800'
                }`}>
                  {edu.status}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-4">
                <div className="flex items-center space-x-2 text-gray-600">
                  <Calendar className="h-4 w-4" />
                  <span>{edu.period}</span>
                </div>
                <div className="flex items-center space-x-2 text-gray-600">
                  <MapPin className="h-4 w-4" />
                  <span>{edu.location}</span>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed">
                {edu.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;