import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { Education as EducationType } from '../types';

const Education: React.FC = () => {
  const education: EducationType[] = [
    {
      id: '1',
      degree: 'M.Tech - Electronics Design & Technology',
      institution: 'Tezpur University',
      period: 'Oct 2021 - Oct 2023',
      details: 'CGPA: 8.49/10 · Graduated with distinction · Ranked 3rd in the postgraduate batch. Thesis focused on ECG-based biometric identification.'
    },
    {
      id: '2',
      degree: 'B.Tech - Electronics & Communication Engineering',
      institution: 'Gauhati University',
      period: 'Jun 2016 - Jul 2020',
      details: 'Foundation in electronics, communication systems and embedded programming.'
    },
    {
      id: '3',
      degree: 'Data Science & Generative AI',
      institution: 'SUNY Potsdam',
      period: '2024',
      details: 'Coursework in data science and generative AI.'
    },
    {
      id: '4',
      degree: 'Diploma in Data Science & Analytics',
      institution: '360DigiTMG',
      period: '',
      details: 'Training in data science and analytics.'
    }
  ];

  return (
    <section id="education" className="bg-[#f4f2ed] px-6 py-20 text-[#17221f] lg:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 border-t border-[#d3d5cc] pt-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718077]">Foundation</p><h2 className="mt-3 text-4xl font-semibold tracking-[-0.05em] text-[#17221f]">Education & research</h2>
          <p className="mt-3 max-w-2xl text-base text-[#68736c]">
            Academic foundation spanning electronics, data science, and machine learning.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2">
          {education.map((edu, index) => {
            const icons = [GraduationCap, Award, BookOpen];
            const IconComponent = icons[index % icons.length];

            return (
              <div
                key={edu.id}
                className="border-t border-[#cbd0c7] bg-transparent py-5 transition-colors hover:border-[#718777]"
              >
                <div className="flex items-start gap-4">
                  <div className="hidden">
                    <IconComponent className="text-slate-700" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold leading-tight tracking-tight text-[#17221f]">
                      {edu.degree}
                    </h3>
                    <p className="mb-1 font-medium text-[#536158]">{edu.institution}</p>
                    <p className="mb-3 text-sm text-[#818b83]">{edu.period && edu.period}</p>
                    {edu.details && (
                      <p className="text-sm leading-6 text-[#68736c]">{edu.details}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Education;