import React from 'react';
import { Download, ExternalLink, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I'm <span className="text-slate-900">Bhargav</span>.
              </h1>
              <p className="text-xl lg:text-2xl text-gray-600 font-medium">
                AI-native. Data-driven. User-obsessed.
              </p>
              <p className="text-lg text-slate-500 max-w-lg">
                I design systems, connect the dots, and build with purpose.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="/BHARGAV_NATH.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-all duration-200 hover:scale-105 shadow-lg"
              >
                <Download size={18} />
                View Resume
              </a>
              <button
                onClick={() => scrollToSection('projects')}
                className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-medium border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200 hover:scale-105"
              >
                <ExternalLink size={18} />
                Explore Projects
              </button>
              <a 
                href="https://www.linkedin.com/in/bhargav-nath" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-all duration-200 hover:scale-105"
              >
                <Linkedin size={18} />
                Connect on LinkedIn
              </a>
              <a 
                href="https://github.com/code-red-Marshall" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-700 transition-all duration-200 hover:scale-105"
              >
                {/* Using ExternalLink icon to represent GitHub for now */}
                <ExternalLink size={18} />
                GitHub
              </a>
            </div>

            {/* Quick Contact */}
            <div className="flex items-center gap-4 pt-4">
              <a
                href="mailto:bhargavnth07@gmail.com"
                className="inline-flex items-center gap-2 text-slate-500 hover:text-slate-900 transition-colors"
              >
                <Mail size={18} />
                <span className="text-sm">bhargavnth07@gmail.com</span>
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-delayed">
            <div className="relative">
              <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                <img
                  src="https://i.postimg.cc/021ZLmb2/505802200-17866137195403794-942808867213714615-n.jpg"
                  alt="Bhargav Nath"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;