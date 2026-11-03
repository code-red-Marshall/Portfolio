import React from 'react';
import { ArrowDownRight, ArrowUpRight, Linkedin, Mail } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToSection = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section id="hero" className="relative overflow-hidden bg-[#f4f2ed] px-6 pb-16 pt-32 text-[#17221f] lg:pb-24 lg:pt-40">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[34rem] w-[34rem] rounded-full border border-[#d8d8cf] opacity-70" />
      <div className="pointer-events-none absolute -right-16 -top-16 h-[22rem] w-[22rem] rounded-full border border-[#d8d8cf] opacity-70" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-[0.22em] text-[#65716b]">
          <span>Independent product portfolio</span>
          <span>India · Open to Europe</span>
        </div>
        <div className="grid items-end gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
          <div>
            <p className="mb-6 flex items-center gap-3 text-sm font-medium text-[#68756e]">
              <span className="h-px w-10 bg-[#8a9b8e]" /> AI Product Manager · Technical Product
            </p>
            <h1 className="max-w-4xl text-[clamp(3.5rem,8vw,7.7rem)] font-semibold leading-[0.91] tracking-[-0.075em]">
              I turn complex problems into <span className="font-serif font-normal italic text-[#5f796b]">useful products.</span>
            </h1>
            <div className="mt-10 flex flex-col gap-8 border-t border-[#d3d5cc] pt-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-md text-base leading-7 text-[#56635d]">
                I work across product discovery, UX, AI, data and engineering to take enterprise workflows from an unclear problem to a product people can use.
              </p>
              <button onClick={() => scrollToSection('projects')} className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold text-[#17221f]">
                Explore selected work <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#9aa69c] transition-all group-hover:bg-[#17221f] group-hover:text-white"><ArrowDownRight size={19}/></span>
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden bg-[#dce4dd]">
              <img src="/whatsapp-campaign-thumbnail.png" alt="WhatsApp Campaign Manager product interface" className="aspect-[5/4] w-full object-cover object-top" />
            </div>
            <div className="mt-4 flex items-start justify-between gap-4 border-b border-[#d3d5cc] pb-4">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#718077]">Featured work · 01</p>
                <p className="mt-1 text-lg font-medium tracking-tight">WhatsApp Campaign Manager</p>
                <p className="mt-1 text-sm text-[#69756f]">From prototype to native production module</p>
              </div>
              <a href="/case-study/whatsapp-campaign-manager" className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#17221f] text-white transition-transform hover:-translate-y-1" aria-label="Open WhatsApp Campaign Manager case study"><ArrowUpRight size={18}/></a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap items-center justify-between gap-5 border-t border-[#d3d5cc] pt-5 text-xs text-[#6b7770]">
          <span>Product strategy / Applied AI / Enterprise SaaS</span>
          <div className="flex items-center gap-5">
            <a className="inline-flex items-center gap-2 hover:text-[#17221f]" href="mailto:bhargavnth07@gmail.com"><Mail size={14}/> Email</a>
            <a className="inline-flex items-center gap-2 hover:text-[#17221f]" href="https://www.linkedin.com/in/bhargav-nath" target="_blank" rel="noopener noreferrer"><Linkedin size={14}/> LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;