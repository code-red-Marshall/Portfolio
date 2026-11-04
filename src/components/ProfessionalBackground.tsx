import React from 'react';
import { Building2, CalendarDays, GraduationCap } from 'lucide-react';

const vantageRoles = [
  {
    role: 'Solutions Engineer I',
    period: 'Feb 2026 — Present',
    description: 'Work across product discovery, solution design and delivery for enterprise SaaS, with hands-on ownership of AI-enabled workflows, integrations and internal products.',
    achievements: [
      'Owned WhatsApp Campaign Manager from product workflow and UX/UI through a working prototype and a from-scratch production implementation in Play Framework and Scala',
      'Designed and built Solutions Central, an internal knowledge and workflow platform to make solution information easier to find and maintain',
      'Translate operational and user problems into product requirements, user flows, acceptance criteria and delivery plans',
      'Work across APIs, data flows, analytics and AI-assisted development to validate solutions and deliver usable product experiences',
      'Coordinate with engineering, design and business stakeholders through implementation, QA and release'
    ]
  },
  {
    role: 'Associate Project Coordinator',
    period: 'Feb 2025 — Jan 2026',
    description: 'Transitioned from an internship into a full-time role supporting enterprise product and project delivery.',
    achievements: [
      'Supported product coordination across engineering, design and business stakeholders',
      'Translated requirements into actionable delivery tasks and tracked execution',
      'Contributed to API integrations, workflow improvements and product releases'
    ]
  },
  {
    role: 'Intern',
    period: 'Nov 2024 — Jan 2025',
    description: 'Internship experience within an enterprise HR technology and rewards platform.',
    achievements: [
      'Supported product and project coordination activities',
      'Built familiarity with enterprise SaaS workflows and cross-functional delivery'
    ]
  }
];

const earlierExperience = [
  {
    company: 'Innodatatics',
    role: 'Gen AI Intern',
    period: 'Feb 2024 — Aug 2024',
    description: 'Worked on generative AI and retrieval-augmented applications.',
    achievements: [
      'Explored LLM-based solutions for domain-specific information retrieval',
      'Worked with retrieval-augmented generation, prompt design and application workflows',
      'Connected technical implementation choices with the needs of end users'
    ],
    type: 'AI'
  },
  {
    company: 'Bharat Intern',
    role: 'Data Science Intern',
    period: 'May 2024 — Jun 2024',
    description: 'Applied data science and natural language processing to classification problems.',
    achievements: [
      'Built a text classification project using Python and machine learning',
      'Worked through data preparation, model training and evaluation',
      'Presented model outputs through an accessible application interface'
    ],
    type: 'Data'
  },
  {
    company: 'Tezpur University',
    role: 'Research Assistant',
    period: 'Jan 2022 — Jun 2023',
    description: 'Research work involving ECG signals and biometric identification.',
    achievements: [
      'Worked on signal processing and machine learning approaches for ECG-based identification',
      'Applied feature extraction and model evaluation techniques',
      'Developed research experience in analytical problem solving'
    ],
    type: 'Research'
  }
];

const ProfessionalBackground: React.FC = () => {
  return (
    <section id="experience" className="bg-[#eeede6] px-6 py-20 text-[#17221f] lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 border-t border-[#d3d5cc] pt-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#718077]">Career / 2022—Now</p>
            <h2 className="mt-4 text-5xl font-semibold leading-[1.04] tracking-[-0.06em]">From engineering roots to product delivery.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#66736c]">
              A career shaped by engineering, data and AI — now focused on turning complex business problems into useful enterprise products.
            </p>
            <div className="mt-10 hidden border-l border-[#c8cec5] pl-5 lg:block">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#879188]">Career direction</p>
              <p className="mt-2 text-sm leading-6 text-[#46564d]">Technical foundation <span className="mx-1 text-[#a2aaa1]">→</span> AI applications <span className="mx-1 text-[#a2aaa1]">→</span> Enterprise products</p>
            </div>
          </div>

          <div className="min-w-0">
            <article className="overflow-hidden rounded-2xl border border-[#d3d9cf] bg-[#f8f7f2] shadow-sm">
              <div className="flex flex-wrap items-start justify-between gap-4 border-b border-[#d8dbd3] px-6 py-6 sm:px-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718077]">01 / Current organisation</p>
                  <h3 className="mt-2 text-3xl font-semibold tracking-[-0.045em]">Vantage Circle</h3>
                  <p className="mt-1 text-sm text-[#718077]">Enterprise HR technology · Nov 2024 — Present</p>
                </div>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#cbd8ca] bg-[#e9eee6] px-3 py-1.5 text-xs font-semibold text-[#365344]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#64866f]" /> Current
                </span>
              </div>
              <div className="px-6 py-6 sm:px-8">
                <div className="relative space-y-8 before:absolute before:bottom-2 before:left-[5px] before:top-2 before:w-px before:bg-[#d2d8ce]">
                  {vantageRoles.map((exp, index) => (
                    <div key={exp.role} className="relative pl-7">
                      <span className={`absolute left-0 top-1.5 h-[11px] w-[11px] rounded-full border-2 border-[#f8f7f2] ${index === 0 ? 'bg-[#547763] ring-2 ring-[#dce5d9]' : 'bg-[#a8b2a6]'}`} />
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h4 className="text-lg font-semibold tracking-[-0.025em] text-[#17221f]">{exp.role}</h4>
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#7b887f]"><CalendarDays size={13}/>{exp.period}</span>
                      </div>
                      <p className="mt-2 text-sm leading-6 text-[#66736c]">{exp.description}</p>
                      <ul className="mt-3 space-y-2">
                        {exp.achievements.map((item, i) => (
                          <li key={i} className="flex gap-2.5 text-[13px] leading-5 text-[#59675f]">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#829485]" />{item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </article>

            <div className="mb-5 mt-12 flex items-end justify-between gap-4 border-b border-[#d3d5cc] pb-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#879188]">02 / Earlier experience</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#46564d]">Building the foundation</h3>
              </div>
              <span className="hidden text-xs text-[#879188] sm:block">AI · Data · Research</span>
            </div>

            <div className="space-y-3">
              {earlierExperience.map((exp, index) => (
                <article key={exp.company} className="rounded-xl border border-[#d9ddd4] bg-[#f5f4ee] p-5 transition-colors hover:border-[#aab8aa] sm:p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 rounded-lg border border-[#d8dbd3] bg-[#e9ebe4] p-2 text-[#587263]">
                        {index === 2 ? <GraduationCap size={18}/> : <Building2 size={18}/>}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold tracking-[-0.03em] text-[#17221f]">{exp.company}</h4>
                        <p className="mt-0.5 text-sm text-[#59675f]">{exp.role}</p>
                      </div>
                    </div>
                    <span className="inline-flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-[#7b887f]"><CalendarDays size={13}/>{exp.period}</span>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-[#66736c]">{exp.description}</p>
                  <ul className="mt-3 grid gap-2 sm:grid-cols-2">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex gap-2 text-[13px] leading-5 text-[#66736c]">
                        <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#829485]" />{item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackground;
