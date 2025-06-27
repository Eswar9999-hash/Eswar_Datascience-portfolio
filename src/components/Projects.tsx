import React from 'react';
import { ExternalLink, Github, Users, Zap, Palette, ArrowRight } from 'lucide-react';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Share Ride',
      description: 'A comprehensive platform bringing shared autos and cabs onto a unified online ecosystem, making urban transportation more accessible and efficient for users across the city.',
      role: 'Product Lead & Strategist',
      technologies: ['Market Research', 'Product Strategy', 'User Experience', 'Leadership'],
      icon: Users,
      color: 'from-blue-500 to-cyan-500',
      highlights: [
        'Led conceptualization and ideation phases',
        'Conducted comprehensive market research and user analysis',
        'Defined product roadmap and feature prioritization',
        'Coordinated with development and design teams',
      ],
    },
    {
      title: 'Patrolling Robot with Intruder Alert',
      description: 'An autonomous robotic security system designed to patrol designated areas and provide real-time intruder detection and alert capabilities using advanced sensors and AI.',
      role: 'Technical Lead & Developer',
      technologies: ['Python', 'Arduino', 'ESP32', 'Computer Vision', 'IoT', 'Machine Learning'],
      icon: Zap,
      color: 'from-green-500 to-emerald-500',
      highlights: [
        'Designed system architecture and hardware integration',
        'Developed autonomous navigation algorithms',
        'Implemented intruder detection using sensors and AI',
        'Successfully deployed autonomous patrolling system',
      ],
    },
    {
      title: 'Urrban Tailor',
      description: 'An innovative fashion recommendation platform that provides personalized styling suggestions and connects users with local tailoring services for custom clothing solutions.',
      role: 'Data Analyst & UX Researcher',
      technologies: ['Data Analysis', 'Python', 'User Research', 'A/B Testing', 'Recommendation Systems'],
      icon: Palette,
      color: 'from-purple-500 to-pink-500',
      demoLink: '#',
      highlights: [
        'Analyzed user behavior and fashion preferences',
        'Developed recommendation algorithms',
        'Conducted user research and A/B testing',
        'Improved user engagement by 40% through data-driven recommendations',
      ],
    },
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Key projects that demonstrate my technical skills, leadership abilities, and passion for creating impactful solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <div
                key={index}
                className="group relative bg-slate-800/50 backdrop-blur-sm rounded-xl border border-blue-500/20 overflow-hidden hover:border-blue-400/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:scale-105"
              >
                {/* Gradient Header */}
                <div className={`h-32 bg-gradient-to-r ${project.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-black/20"></div>
                  <Icon className="h-16 w-16 text-white relative z-10 group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <div className="flex gap-2">
                      {project.demoLink && (
                        <a
                          href={project.demoLink}
                          className="p-2 bg-blue-500/20 rounded-lg hover:bg-blue-500/30 transition-colors duration-300"
                          title="View Demo"
                        >
                          <ExternalLink className="h-4 w-4 text-blue-400" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-gray-300 leading-relaxed text-sm">{project.description}</p>

                  <div className="mb-4">
                    <div className="flex items-center mb-2">
                      <ArrowRight className="h-4 w-4 text-blue-400 mr-2" />
                      <h4 className="font-semibold text-white text-sm">My Role: {project.role}</h4>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Key Highlights</h4>
                    <ul className="space-y-1">
                      {project.highlights.slice(0, 3).map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start text-xs text-gray-300">
                          <div className="w-1.5 h-1.5 bg-green-400 rounded-full mt-1.5 mr-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Technologies Used</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 bg-slate-700/50 text-blue-300 text-xs rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-colors duration-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-2 py-1 bg-slate-700/50 text-blue-300 text-xs rounded-full border border-blue-500/30">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Hover Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`}></div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">
            Want to see more of my work or discuss potential collaborations?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
          >
            <span className="relative flex items-center gap-2">
              Get in Touch
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;