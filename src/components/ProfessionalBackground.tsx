import React from 'react';
import { Building2, Calendar } from 'lucide-react';
import { Experience } from '../types';

const ProfessionalBackground: React.FC = () => {
  const experiences: Experience[] = [
    {
      id: '1',
      company: 'Vantage Circle',
      role: 'Product Analyst',
      period: '2023 - Present',
      description: 'APM-style coordination for SaaS AI features and product delivery',
      achievements: [
        'Coordinated cross-functional teams for AI feature development',
        'Improved feature delivery timeline by 30%',
        'Led stakeholder management and requirement gathering',
        'Implemented data-driven decision making processes'
      ]
    },
    {
      id: '2',
      company: 'Innodatatics',
      role: 'Gen AI Intern',
      period: '2022 - 2023',
      description: 'Built pharmaceutical LLM chatbot and AI solutions',
      achievements: [
        'Developed LLM chatbot with 40% faster query resolution',
        'Generated $20K ROI in first quarter',
        'Implemented RAG architecture for accurate responses',
        'Designed user-friendly interfaces for technical solutions'
      ]
    },
    {
      id: '3',
      company: 'Bharat Intern',
      role: 'Data Science Intern',
      period: '2022',
      description: 'Spam classifier project using NLP and machine learning',
      achievements: [
        'Built spam classifier with 95% accuracy',
        'Deployed real-time processing system',
        'Created intuitive Streamlit interface',
        'Processed 1000+ user interactions successfully'
      ]
    },
    {
      id: '4',
      company: 'Tezpur University',
      role: 'Research Assistant',
      period: '2021 - 2022',
      description: 'ECG biometric identification system research',
      achievements: [
        'Achieved 100% identification accuracy',
        'Published research paper in peer-reviewed journal',
        'Filed patent application for novel approach',
        'Developed anti-spoofing mechanisms'
      ]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Experience</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A journey from electronics research to AI-powered product development, building systems that scale.
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-200"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={exp.id} className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 bg-slate-900 rounded-full border-4 border-white shadow-lg z-10"></div>

                {/* Content Card */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
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