import React from 'react';
import { Download, Mail, Linkedin, Github, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const handleDownloadResume = () => {
    window.open('https://drive.google.com/file/d/18vZbYNM_sF28F3WaXLDBgydCDl90Q-zH/view?usp=sharing', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/eswarvenkataakash-yarragolla-310a49305/', '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/Eswar9999-hash', '_blank');
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center space-y-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1 shadow-2xl">
                <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                  <span className="text-6xl font-bold text-white">E</span>
                </div>
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 opacity-20 blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* Hero Content */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              <span className="text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Eswar Yarragolla
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Detail-oriented Data Analyst with 1+ years of experience in data cleaning, reporting, and visualization. 
              Passionate about transforming data into actionable insights.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <button
                onClick={handleDownloadResume}
                className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  View Resume
                </div>
              </button>
              
              <button
                onClick={handleLinkedInClick}
                className="group relative px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-xl hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center gap-2">
                  <Linkedin className="h-5 w-5" />
                  Connect on LinkedIn
                </div>
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-6 pt-8">
              <button
                onClick={() => window.location.href = 'mailto:yeswarvenkataakash2003@gmail.com'}
                className="p-3 bg-slate-800/50 rounded-xl border border-red-500/20 hover:border-red-400/40 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-6 w-6 text-red-400" />
              </button>
              <button
                onClick={handleLinkedInClick}
                className="p-3 bg-slate-800/50 rounded-xl border border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-6 w-6 text-blue-400" />
              </button>
              <button
                onClick={handleGitHubClick}
                className="p-3 bg-slate-800/50 rounded-xl border border-gray-500/20 hover:border-gray-400/40 hover:bg-gray-500/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-6 w-6 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;