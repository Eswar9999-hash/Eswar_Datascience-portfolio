import React from 'react';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience: React.FC = () => {
  const experiences = [
    {
      title: 'Data Analyst',
      company: 'Avigna AB',
      location: 'Remote',
      period: 'August 2024 – Present',
      type: 'Full-time',
      description: 'Leading data collection, cleaning, and analysis initiatives while developing comprehensive reports and dashboards for internal stakeholders.',
      responsibilities: [
        'Collected, cleaned, and organized large datasets from internal sources for analysis and reporting',
        'Developed reports and dashboards using Excel, Google Sheets, and began using Power BI for internal stakeholders',
        'Conducted exploratory data analysis (EDA) to identify patterns, outliers, and business insights for ongoing projects',
        'Maintained documentation for data workflows to support team knowledge-sharing and process continuity',
        'Shadowed data science teams and contributed to early-stage predictive analysis efforts helping in preparing datasets and understanding modelling workflows',
      ],
      achievements: [
        'Shadowed data science teams and contributed to early-stage predictive analysis efforts',
        'Supported data validation tasks and participated in internal QA processes for analytics delivery',
      ],
    },
    {
      title: 'Data Analyst Intern',
      company: 'Avigna AB',
      location: 'Remote',
      period: 'February 2024 – July 2024',
      type: 'Internship',
      description: 'Gained hands-on experience in data analysis while supporting senior analysts in various data-driven projects.',
      responsibilities: [
        'Performed data cleaning and preprocessing on customer datasets',
        'Assisted in creating data visualizations for monthly business reviews',
        'Learned advanced Excel functions and SQL queries for data manipulation',
        'Supported senior analysts in ad-hoc analysis requests',
        'Participated in daily stand-ups and project planning sessions',
      ],
      achievements: [
        'Successfully completed 15+ data analysis projects during internship',
        'Received commendation for attention to detail and analytical thinking',
      ],
    },
    {
      title: 'Project Management Fellow',
      company: 'Foruppo',
      location: 'Remote',
      period: 'May 2024 – December 2024',
      type: 'Fellowship',
      description: 'Applied project management methodologies to coordinate data-driven solutions and facilitate cross-functional collaboration.',
      responsibilities: [
        'Coordinated cross-functional project teams to deliver data-driven solutions',
        'Managed project timelines and ensured deliverables met quality standards',
        'Facilitated communication between technical and non-technical stakeholders',
        'Applied project management methodologies to data analysis workflows',
        'Mentored junior team members on best practices and analytical techniques',
      ],
      achievements: [
        'Led 3 successful data analysis projects from conception to completion',
        'Improved project delivery time by 25% through process optimization',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My journey in data analysis, from internship to full-time analyst role
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-400 to-purple-600"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
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
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center mb-2">
                          <Briefcase className="h-5 w-5 text-blue-400 mr-2" />
                          <h3 className="text-xl font-bold text-white">{exp.title}</h3>
                        </div>
                        <h4 className="text-lg text-blue-300 font-semibold mb-2">{exp.company}</h4>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center">
                            <MapPin className="h-4 w-4 mr-1" />
                            <span>{exp.location}</span>
                          </div>
                          <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs">
                            {exp.type}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>

                    <div className="space-y-4">
                      <div>
                        <h5 className="text-sm font-semibold text-white mb-2">Key Responsibilities</h5>
                        <ul className="space-y-1">
                          {exp.responsibilities.slice(0, 3).map((responsibility, respIndex) => (
                            <li key={respIndex} className="flex items-start text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span>{responsibility}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h5 className="text-sm font-semibold text-white mb-2 flex items-center">
                          <TrendingUp className="h-4 w-4 mr-2 text-green-400" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start text-sm text-gray-300">
                              <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
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

export default Experience;