import React from 'react';
import { Building2, Calendar } from 'lucide-react';
import { Experience } from '../types';

const ProfessionalBackground: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Vantage Circle',
      role: 'Solutions Engineer - I',
      period: '2024 - Present',
      description: 'Working across enterprise SaaS product delivery, integrations and AI-enabled solutions.',
      achievements: [
        'Translate business and user needs into product requirements and delivery plans',
        'Coordinate with product, design, engineering and business stakeholders',
        'Contribute to the design and delivery of workflow, analytics and AI-powered capabilities',
        'Work across APIs, data flows and integrations to support reliable product experiences'
      ]
    },
    {
      id: '2',
      company: 'Innodatatics',
      role: 'Gen AI Intern',
      period: '2023 - 2024',
      description: 'Worked on generative AI and retrieval-augmented applications.',
      achievements: [
        'Explored LLM-based solutions for domain-specific information retrieval',
        'Worked with retrieval-augmented generation, prompt design and application workflows',
        'Connected technical implementation choices with the needs of end users'
      ]
    },
    {
      id: '3',
      company: 'Bharat Intern',
      role: 'Data Science Intern',
      period: '2023',
      description: 'Applied data science and natural language processing to classification problems.',
      achievements: [
        'Built a text classification project using Python and machine learning',
        'Worked through data preparation, model training and evaluation',
        'Presented model outputs through an accessible application interface'
      ]
    },
    {
      id: '4',
      company: 'Tezpur University',
      role: 'Research Assistant',
      period: '2022 - 2023',
      description: 'Research work involving ECG signals and biometric identification.',
      achievements: [
        'Worked on signal processing and machine learning approaches for ECG-based identification',
        'Applied feature extraction and model evaluation techniques',
        'Developed research experience in analytical problem solving'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A background spanning engineering, data and AI — now focused on building useful enterprise products.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-200"></div>
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-white shadow-lg z-10"></div>
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start gap-3 mb-4">
                      <div className="bg-slate-100 p-2 rounded-lg">
                        <Building2 className="text-slate-700" size={20} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold text-slate-900">{exp.role}</h3>
                        <p className="text-slate-700 font-medium">{exp.company}</p>
                        <div className="flex items-center gap-1 text-slate-500 text-sm mt-1">
                          <Calendar size={14} />
                          <span>{exp.period}</span>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-600 mb-4">{exp.description}</p>
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, achievementIndex) => (
                        <div key={achievementIndex} className="flex items-start gap-2">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-600 text-sm">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalBackground;
