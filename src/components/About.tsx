import React from 'react';

const About: React.FC = () => (
  <section id="about" className="bg-[#f4f2ed] px-6 py-20 text-[#17221f] lg:py-28">
    <div className="mx-auto grid max-w-7xl gap-12 border-t border-[#d3d5cc] pt-8 lg:grid-cols-[0.65fr_1.35fr] lg:gap-24">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#718077]">A little context</p>
        <h2 className="mt-5 max-w-sm text-4xl font-semibold leading-tight tracking-[-0.05em]">Product thinking with an engineer’s instinct.</h2>
      </div>
      <div>
        <p className="max-w-3xl text-2xl leading-[1.45] tracking-[-0.035em] text-[#35443c]">
          My background spans electronics engineering, data science and enterprise software. Today, I focus on turning messy operational problems into clear product experiences—especially where AI can make work more useful, not just more automated.
        </p>
        <div className="mt-10 grid gap-8 border-t border-[#d3d5cc] pt-6 sm:grid-cols-3">
          <div><p className="text-xs uppercase tracking-[0.18em] text-[#718077]">01 / Discover</p><p className="mt-3 text-sm leading-6 text-[#59665f]">Understand users, workflows and the actual problem before reaching for a feature or model.</p></div>
          <div><p className="text-xs uppercase tracking-[0.18em] text-[#718077]">02 / Shape</p><p className="mt-3 text-sm leading-6 text-[#59665f]">Translate ambiguity into product flows, priorities, requirements and testable assumptions.</p></div>
          <div><p className="text-xs uppercase tracking-[0.18em] text-[#718077]">03 / Deliver</p><p className="mt-3 text-sm leading-6 text-[#59665f]">Work with engineering across APIs, data, AI and release details to get useful products into users’ hands.</p></div>
        </div>
      </div>
    </div>
  </section>
);

export default About;