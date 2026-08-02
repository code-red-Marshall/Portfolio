import React from 'react';
import { Brain, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">About</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-base">
              <p>
                My work sits at the intersection of product thinking, data, and applied AI. I started in electronics and computational analysis, moved into NLP and data engineering, and now focus on building systems that help teams make faster, better decisions.
              </p>
              <p>
                I’m especially interested in AI features that solve real operational problems, whether that means structuring messy datasets, improving analytics workflows, or translating technical complexity into something useful for end users and business teams.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">What I do</h2>
            <div className="grid gap-6">
              {[
                {
                  icon: Brain, 
                  title: 'Workflow Automation',
                  description: 'Build AI-assisted analytics and workflow tools that reduce manual effort and improve decision-making.'
                },
                {
                  icon: Target,
                  title: 'Product Delivery',
                  description: 'Work across product, data, and engineering teams to define requirements and ship practical solutions.'
                },
                {
                  icon: TrendingUp,
                  title: 'Technical Implementation',
                  description: 'Use Python, SQL, LLM integrations, and structured problem-solving to turn raw information into usable systems.'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-lg flex-shrink-0">
                      <item.icon className="text-slate-700" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;