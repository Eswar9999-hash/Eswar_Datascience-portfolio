import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
  const education = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'Vellore Institute of Technology (VIT)',
      location: 'Vellore, Tamil Nadu',
      period: '2020-2024',
      grade: 'CGPA: 8.18',
      type: 'Bachelor\'s Degree',
      highlights: [
        'Specialized in Data Structures and Algorithms',
        'Completed projects in Machine Learning and Data Analysis',
        'Active member of coding and technical clubs',
      ],
    },
    {
      degree: 'Intermediate (MPC)',
      institution: 'Narayana Junior College',
      location: 'Andhra Pradesh',
      period: '2018-2020',
      grade: 'Percentage: 95%',
      type: 'Higher Secondary',
      highlights: [
        'Mathematics, Physics, and Chemistry specialization',
        'Consistently ranked in top 5% of the class',
        'Participated in state-level science competitions',
      ],
    },
    {
      degree: 'Secondary Education',
      institution: 'Sri Chaitanya Techno School',
      location: 'Andhra Pradesh',
      period: '2017-2018',
      grade: 'CGPA: 9.5',
      type: 'Secondary School',
      highlights: [
        'All-round academic excellence',
        'Leadership roles in student activities',
        'Strong foundation in mathematics and sciences',
      ],
    },
  ];

  return (
    <section id="education" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Education</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Academic foundation that supports my data analysis expertise and analytical thinking
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row items-start md:items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full border-4 border-slate-900 shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 w-full md:w-5/12 ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'}`}>
                  <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="h-6 w-6 text-blue-400 mr-3" />
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                    </div>
                    <h4 className="text-lg text-blue-300 font-semibold mb-3">{edu.institution}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-1" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{edu.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Award className="h-4 w-4 mr-1" />
                        <span className="font-semibold text-cyan-300">{edu.grade}</span>
                      </div>
                    </div>

                    <div>
                      <h5 className="text-sm font-semibold text-white mb-2">Key Highlights</h5>
                      <ul className="space-y-1">
                        {edu.highlights.map((highlight, hIndex) => (
                          <li key={hIndex} className="flex items-start text-sm text-gray-300">
                            <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;