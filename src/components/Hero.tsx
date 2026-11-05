import React from 'react';
import { ArrowRight, Download, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-[#f4f2ed] px-6 pb-16 pt-28 text-[#17221f] sm:pt-32 lg:min-h-[calc(100vh-4rem)] lg:pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-20">
        <div className="order-2 lg:order-1">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#718077]">
            Solutions Engineer <span className="mx-2 text-[#a6aea6]">·</span> AI Product Builder
          </p>
          <h1 className="max-w-3xl text-5xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            I take products<br />
            from idea to<br />
            <span className="text-[#587263]">production —</span>
            <br />
            building with Claude.
          </h1>
          <p className="mt-6 text-sm font-medium text-[#35443c] sm:text-base">
            Bhargav Nath <span className="mx-2 text-[#a6aea6]">·</span> Solutions Engineer at Vantage Circle (enterprise HR tech)
          </p>
          <p className="mt-6 max-w-xl text-base leading-7 text-[#35443c] sm:text-lg">
            I use Claude across the whole product loop: framing the problem, writing the spec, prototyping in days, then shipping into real production codebases. Most recently I built a WhatsApp campaign module solo — from a Next.js prototype to a native Play/Scala module now running client campaigns.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <button onClick={scrollToProjects} className="inline-flex items-center gap-3 bg-[#17221f] px-6 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-[#40594b]">
              See how I build <ArrowRight size={17} />
            </button>
            <a href="/Bhargav_Nath_Resume_ai_PM.pdf" download="Bhargav_Nath_Resume_ai_PM.pdf" className="inline-flex items-center gap-2 border border-[#c9cec6] px-5 py-3.5 text-sm font-semibold text-[#35443c] transition-colors hover:border-[#718777] hover:bg-white/60">
              <Download size={16} /> Resume
            </a>
            <a href="https://github.com/code-red-Marshall/Portfolio" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#c9cec6] px-5 py-3.5 text-sm font-semibold text-[#35443c] transition-colors hover:border-[#718777] hover:bg-white/60">
              <Github size={16} /> GitHub
            </a>
          </div>
          <div className="mt-8 border-t border-[#d3d5cc] pt-5">
            <p className="text-sm font-semibold tracking-[-0.01em] text-[#35443c]">
              110K+ users in campaign audiences <span className="mx-2 text-[#a6aea6]">·</span> 8 production campaigns <span className="mx-2 text-[#a6aea6]">·</span> Prototype → production, solo
            </p>
            <p className="mt-3 text-sm text-[#68736c]">Guwahati, India (IST) <span className="mx-2 text-[#a6aea6]">·</span> Open to remote (EU/UK overlap) and relocation</p>
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