import React from 'react';
import { Heart, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900/95 backdrop-blur-sm text-white py-12 border-t border-blue-500/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Eswar Yarragolla
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Data Analyst passionate about transforming data into actionable insights that drive business growth and strategic decision-making.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              {['About', 'Experience', 'Projects', 'Education', 'Contact'].map((link) => (
                <button
                  key={link}
                  onClick={() => {
                    const element = document.getElementById(link.toLowerCase());
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="text-gray-400 hover:text-blue-300 transition-colors duration-300 text-left"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/eswarvenkataakash-yarragolla-310a49305/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-xl border border-blue-500/20 hover:border-blue-400/40 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="h-5 w-5 text-blue-400" />
              </a>
              <a
                href="https://github.com/Eswar9999-hash"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 rounded-xl border border-gray-500/20 hover:border-gray-400/40 hover:bg-gray-500/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="h-5 w-5 text-gray-400" />
              </a>
              <a
                href="mailto:yeswarvenkataakash2003@gmail.com"
                className="p-3 bg-slate-800/50 rounded-xl border border-red-500/20 hover:border-red-400/40 hover:bg-red-500/10 transition-all duration-300 hover:scale-110"
              >
                <Mail className="h-5 w-5 text-red-400" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-blue-500/20">
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Built with</span>
            <Heart className="h-4 w-4 text-red-400 fill-current animate-pulse" />
            <span>using React & Tailwind CSS</span>
          </div>

          <div className="flex items-center gap-4">
            <p className="text-gray-400">
              © {new Date().getFullYear()} Eswar Yarragolla. All rights reserved.
            </p>
            
            <button
              onClick={scrollToTop}
              className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white p-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;