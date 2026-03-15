import React from 'react';
import { GraduationCap, Award, BookOpen } from 'lucide-react';
import { Education as EducationType } from '../types';

const Education: React.FC = () => {
  const education: EducationType[] = [
    {
      id: '1',
      degree: 'M.Tech - Electronics Design & Technology',
      institution: 'Tezpur University',
      period: '2020 - 2022',
      details: 'Specialized in signal processing and biometric systems. Thesis on ECG-based identification systems.'
    },
    {
      id: '2',
      degree: 'B.Tech - Electronics & Communication Engineering',
      institution: 'Gauhati University',
      period: '2016 - 2020',
      details: 'Foundation in electronics, communication systems, and embedded programming.'
    },
    {
      id: '3',
      degree: 'Data Science & Machine Learning Certification',
      institution: 'SUNY + 360DigiTMG',
      period: '2021 - 2022',
      details: 'Comprehensive program covering ML algorithms, data analysis, and AI applications.'
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Education</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Academic foundation spanning electronics, data science, and machine learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => {
            const icons = [GraduationCap, Award, BookOpen];
            const IconComponent = icons[index % icons.length];

            return (
              <div
                key={edu.id}
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg flex-shrink-0">
                    <IconComponent className="text-slate-700" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-slate-900 mb-2 leading-tight">
                      {edu.degree}
                    </h3>
                    <p className="text-slate-700 font-medium mb-1">{edu.institution}</p>
                    <p className="text-slate-500 text-sm mb-3">{edu.period}</p>
                    {edu.details && (
                      <p className="text-slate-600 text-sm">{edu.details}</p>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Core Competencies</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-slate-100 p-4 rounded-full inline-flex mb-4">
                <GraduationCap className="text-slate-700" size={32} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Technical Foundation</h4>
              <p className="text-slate-600 text-sm">Strong engineering background with deep understanding of systems and algorithms</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 p-4 rounded-full inline-flex mb-4">
                <Award className="text-emerald-600" size={32} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Research Excellence</h4>
              <p className="text-slate-600 text-sm"> Contributed in research and patent applications demonstrating innovation capability</p>
            </div>
            <div className="text-center">
              <div className="bg-slate-100 p-4 rounded-full inline-flex mb-4">
                <BookOpen className="text-slate-700" size={32} />
              </div>
              <h4 className="font-semibold text-slate-900 mb-2">Continuous Learning</h4>
              <p className="text-slate-600 text-sm">Committed to staying current with emerging technologies and methodologies</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;