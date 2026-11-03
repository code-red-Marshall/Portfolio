import React from 'react';
import { Mail, MapPin, Linkedin, Download, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const interests = [
    'AI Product Management',
    'Technical Product Management',
    'Applied AI and workflow automation',
    'Enterprise SaaS products',
    'Product strategy and platform integrations'
  ];

  return (
    <section id="contact" className="bg-[#e9ebe4] px-6 py-20 text-[#17221f] lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 grid gap-6 border-t border-[#cbd0c7] pt-8 md:grid-cols-[0.65fr_1.35fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#718077]">Contact</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em]">Let’s talk.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#59665f] md:justify-self-end">
            I’m open to conversations about AI and Technical Product Management opportunities, interesting product problems and teams building useful technology.
          </p>
        </div>

        <div className="grid gap-12 border-b border-[#cbd0c7] pb-12 md:grid-cols-[1fr_0.8fr]">
          <div className="space-y-9">
            <div>
              <h3 className="mb-5 text-xl font-semibold tracking-tight">Get in touch</h3>
              <div className="space-y-5">
                <a href="mailto:bhargavnth07@gmail.com?subject=Let's Connect&body=Hi Bhargav,%0D%0A%0D%0AI'd love to connect and discuss opportunities.%0D%0A%0D%0ABest regards," className="group flex items-center gap-4 text-[#59665f] transition-colors hover:text-[#17221f]">
                  <span className="flex h-11 w-11 items-center justify-center border border-[#cbd0c7] bg-[#f4f2ed] text-[#587263]"><Mail size={19}/></span>
                  <span><span className="block text-sm font-semibold text-[#17221f]">Email</span><span className="text-sm">bhargavnth07@gmail.com</span></span>
                </a>
                <div className="flex items-center gap-4 text-[#59665f]">
                  <span className="flex h-11 w-11 items-center justify-center border border-[#cbd0c7] bg-[#f4f2ed] text-[#587263]"><MapPin size={19}/></span>
                  <span><span className="block text-sm font-semibold text-[#17221f]">Location</span><span className="text-sm">India · Open to international opportunities</span></span>
                </div>
                <a href="https://linkedin.com/in/bhargav-nath" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 text-[#59665f] transition-colors hover:text-[#17221f]">
                  <span className="flex h-11 w-11 items-center justify-center border border-[#cbd0c7] bg-[#f4f2ed] text-[#587263]"><Linkedin size={19}/></span>
                  <span><span className="block text-sm font-semibold text-[#17221f]">LinkedIn</span><span className="text-sm">Connect professionally</span></span>
                </a>
              </div>
            </div>

            <div>
              <h3 className="mb-4 text-xl font-semibold tracking-tight">Quick actions</h3>
              <div className="flex flex-wrap gap-3">
                <a href="/Bhargav_Resume.pdf" download="Bhargav_Resume.pdf" className="inline-flex items-center gap-2 bg-[#17221f] px-5 py-3 text-sm font-semibold text-[#f4f2ed] transition-colors hover:bg-[#34463b]">
                  <Download size={17}/> Download Resume
                </a>
                <a href="https://www.linkedin.com/in/bhargav-nath" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-[#bfc8bd] px-5 py-3 text-sm font-semibold text-[#34463b] transition-colors hover:bg-[#f4f2ed]">
                  <ExternalLink size={17}/> LinkedIn Profile
                </a>
              </div>
            </div>
          </div>

          <div className="border-l border-[#cbd0c7] pl-0 md:pl-10">
            <h3 className="mb-5 text-xl font-semibold tracking-tight">Areas of interest</h3>
            <ul className="space-y-4">
              {interests.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-[#59665f]">
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#718777]"/>
                  {item}
                </li>
              ))}
            </ul>
            <p className="mt-8 border-t border-[#cbd0c7] pt-5 text-sm leading-6 text-[#718077]">
              Interested in opportunities across India and Europe.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
