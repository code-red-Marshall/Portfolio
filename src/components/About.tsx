import React from 'react';
import { Brain, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">About Me</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                My journey began in electronics, evolved through data science, and now focuses on 
                SaaS product delivery. I bridge the gap between technical complexity and user needs, 
                building systems that scale and solutions that matter.
              </p>
              <p>
                With deep AI fluency and a product mindset, I turn data into insights, insights into 
                strategy, and strategy into action. Every project I touch becomes more user-centered 
                and data-driven.
              </p>
              <blockquote className="border-l-4 border-slate-900 pl-4 italic text-lg font-medium text-slate-700">
                "Build what matters. Measure what moves. Learn what lasts."
              </blockquote>
            </div>
          </div>

          <div className="grid gap-6">
            {[
              {
                icon: Brain, 
                title: 'AI-Native Thinking',
                description: 'Deep expertise in LLMs, automation, and intelligent systems that enhance human capabilities.'
              },
              {
                icon: Target,
                title: 'Product Focus',
                description: 'User-obsessed approach with frameworks like PMF, AARRR, and JTBD to build what people actually need.'
              },
              {
                icon: TrendingUp,
                title: 'Data-Driven Decisions',
                description: 'Turning complex data into clear insights and actionable strategies for sustainable growth.'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-slate-100 p-3 rounded-lg">
                    <item.icon className="text-slate-700" size={24} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                    <p className="text-slate-600 text-sm">{item.description}</p>
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

export default About;