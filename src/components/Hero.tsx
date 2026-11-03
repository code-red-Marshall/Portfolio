import React from 'react';
import { ArrowRight, Linkedin } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-[#f4f2ed] px-6 pb-16 pt-28 text-[#17221f] sm:pt-32 lg:min-h-[calc(100vh-4rem)] lg:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#718077]">
            AI Product Manager <span className="mx-2 text-[#a6aea6]">/</span> Technical Product
          </p>
          <h1 className="text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            Hi, I’m<br />
            <span className="text-[#587263]">Bhargav Nath.</span>
          </h1>
          <p className="mt-8 max-w-xl text-xl leading-relaxed tracking-[-0.02em] text-[#35443c] sm:text-2xl">
            I turn complex business problems into useful digital and AI-powered products.
          </p>
          <p className="mt-5 max-w-lg text-base leading-7 text-[#68736c]">
            I work across product discovery, UX, data, AI and engineering—shaping workflows, prototyping ideas and helping take solutions into production.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button onClick={scrollToProjects} className="inline-flex items-center gap-3 bg-[#17221f] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#40594b]">
              Explore my work <ArrowRight size={17} />
            </button>
            <a href="https://www.linkedin.com/in/bhargav-nath" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#c9cec6] px-5 py-3.5 text-sm font-semibold text-[#35443c] transition-colors hover:border-[#718777] hover:bg-white/60">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
          <div className="mt-12 border-t border-[#d3d5cc] pt-5">
            <p className="text-xs font-medium uppercase tracking-[0.16em] text-[#7b867e]">
              Product strategy · Applied AI · Enterprise SaaS
            </p>
            <p className="mt-2 text-sm text-[#68736c]">India · Open to international opportunities</p>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <div className="overflow-hidden bg-[#e4e5df]">
            <img
              src="https://i.postimg.cc/021ZLmb2/505802200-17866137195403794-942808867213714615-n.jpg"
              alt="Portrait of Bhargav Nath"
              className="aspect-[4/5] w-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;