import React from 'react';
import { BarChart3, Database, PieChart, Code, TrendingUp, Wrench, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const skills = [
    { name: 'Excel', icon: BarChart3 },
    { name: 'Google Sheets', icon: BarChart3 },
    { name: 'Tableau', icon: PieChart },
    { name: 'Power BI', icon: PieChart },
    { name: 'Python', icon: Code },
    { name: 'Pandas', icon: Code },
    { name: 'NumPy', icon: Code },
    { name: 'SQL', icon: Database },
    { name: 'Matplotlib', icon: BarChart3 },
    { name: 'Seaborn', icon: BarChart3 },
    { name: 'ESP32', icon: Wrench },
    { name: 'Embedded Programming', icon: Wrench },
    { name: 'SAP-MM', icon: GraduationCap },
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Section */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-600/20 backdrop-blur-sm border border-blue-500/30 shadow-2xl overflow-hidden">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <BarChart3 className="h-24 w-24 text-blue-400 mx-auto" />
                    <p className="text-lg font-semibold text-white">Data Analysis</p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-purple-600 opacity-20 blur-2xl rounded-2xl"></div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">About Me</h2>
              <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
                <p>
                  I'm a detail-oriented Data Analyst with 1+ years of experience in data cleaning, 
                  reporting, and visualization. I specialize in transforming complex datasets into 
                  clear, actionable insights that drive business decisions.
                </p>
                <p>
                  My expertise spans across modern analytics tools including Python, SQL, Tableau, 
                  and Power BI. I'm passionate about uncovering patterns in data and presenting 
                  findings in ways that stakeholders can easily understand and act upon.
                </p>
                <p>
                  Currently working as a Data Analyst at Avigna AB, where I focus on data cleaning, 
                  exploratory data analysis, and creating comprehensive reports for internal stakeholders.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Technical Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-slate-800/50 rounded-xl border border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-105"
                    >
                      <Icon className="h-5 w-5 text-blue-400" />
                      <span className="text-white font-medium text-sm">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;