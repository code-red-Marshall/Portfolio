import React from 'react';
import { ArrowRight, Download, Github } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="bg-[#f4f2ed] px-6 pb-10 pt-16 text-[#17221f] sm:pt-20 lg:min-h-[calc(100svh-5rem)] lg:pb-8 lg:pt-8">
      <div className="mx-auto grid max-w-6xl items-center gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
        <div className="order-2 lg:order-1">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#718077]">
            Solutions Engineer <span className="mx-2 text-[#a6aea6]">·</span> AI Product Builder
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-[1.02] tracking-[-0.06em] sm:text-5xl lg:text-[3.25rem]">
            I take products<br />
            from idea to<br />
            <span className="text-[#587263]">production —</span>
            <br />
            building with Claude.
          </h1>
          <p className="mt-4 text-sm font-medium text-[#35443c]">
            Bhargav Nath <span className="mx-2 text-[#a6aea6]">·</span> Solutions Engineer at Vantage Circle (enterprise HR tech)
          </p>
          <p className="mt-4 max-w-xl text-sm leading-6 text-[#35443c] sm:text-base sm:leading-6">
            I use Claude across the whole product loop: framing the problem, writing the spec, prototyping in days, then shipping into real production codebases. Most recently I built a WhatsApp campaign module solo — from a Next.js prototype to a native Play/Scala module now running client campaigns.
          </p>
          <div className="mt-5 flex flex-wrap items-center gap-3">
            <button onClick={scrollToProjects} className="inline-flex items-center gap-3 bg-[#17221f] px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#40594b]">
              See how I build <ArrowRight size={16} />
            </button>
            <a href="/Bhargav_Nath_Resume_ai_PM.pdf" download="Bhargav_Nath_Resume_ai_PM.pdf" className="inline-flex items-center gap-2 border border-[#c9cec6] px-4 py-3 text-sm font-semibold text-[#35443c] transition-colors hover:border-[#718777] hover:bg-white/60">
              <Download size={15} /> Resume
            </a>
            <a href="https://github.com/code-red-Marshall/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#c9cec6] px-4 py-3 text-sm font-semibold text-[#35443c] transition-colors hover:border-[#718777] hover:bg-white/60">
              <Github size={15} /> GitHub
            </a>
          </div>
          <div className="mt-6 border-t border-[#d3d5cc] pt-4">
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#7b867e]">
              Selected product impact
            </p>
            <div className="grid grid-cols-3 gap-3 sm:gap-5">
              <div>
                <p className="text-xl font-semibold tracking-[-0.05em] text-[#17221f] sm:text-2xl">$14K+</p>
                <p className="mt-1 text-[11px] font-medium leading-4 text-[#35443c] sm:text-xs">Revenue impact</p>
                <p className="text-[10px] leading-4 text-[#7b867e] sm:text-[11px]">Travel experience booking</p>
              </div>
              <div className="border-l border-[#d3d5cc] pl-3 sm:pl-5">
                <p className="text-xl font-semibold tracking-[-0.05em] text-[#17221f] sm:text-2xl">110K+</p>
                <p className="mt-1 text-[11px] font-medium leading-4 text-[#35443c] sm:text-xs">Audience users</p>
                <p className="text-[10px] leading-4 text-[#7b867e] sm:text-[11px]">WhatsApp · 8 campaigns</p>
              </div>
              <div className="border-l border-[#d3d5cc] pl-3 sm:pl-5">
                <p className="text-xl font-semibold tracking-[-0.05em] text-[#17221f] sm:text-2xl">176+</p>
                <p className="mt-1 text-[11px] font-medium leading-4 text-[#35443c] sm:text-xs">Countries supported</p>
                <p className="text-[10px] leading-4 text-[#7b867e] sm:text-[11px]">Global merchandise redemption</p>
              </div>
            </div>
            <p className="mt-3 text-xs text-[#68736c]">Guwahati, India (IST) <span className="mx-2 text-[#a6aea6]">·</span> Open to remote (EU/UK overlap) and relocation</p>
          </div>
        </div>

        <div className="order-1 mx-auto w-full max-w-md lg:order-2 lg:max-w-none">
          <div className="overflow-hidden bg-[#e4e5df] lg:max-h-[560px]">
            <img
              src="https://d2ol7oe51mr4n9.cloudfront.net/user_3Gw5Yl0heenscNlRDkWnQHiIF8r/a6f00f74-d99c-4473-8ba0-7d7286f95fc9.png"
              alt="Portrait of Bhargav Nath"
              className="aspect-[4/5] w-full object-cover object-center lg:aspect-auto lg:max-h-[560px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;