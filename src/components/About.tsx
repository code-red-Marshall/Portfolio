import React from 'react';
import { Brain, Target, TrendingUp } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">A little about me</h2>
            <div className="space-y-6 text-slate-600 leading-relaxed text-base">
              <p>
                I’m an AI Product Manager with an engineering and data background. I work at the intersection of user problems, business priorities and technical execution — shaping product workflows, building prototypes and taking solutions into production.
              </p>
              <p>
                My approach is hands-on: understand the problem, define the right experience, test assumptions quickly and work through the technical trade-offs required to ship. I’m particularly interested in applied AI, LLM-enabled workflows and enterprise products where reliability and usefulness matter as much as the model itself.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-slate-900">Where I focus</h2>
            <div className="grid gap-6">
              {[
                {
                  icon: Brain,
                  title: 'AI & Intelligent Products',
                  description: 'Explore practical uses of AI and LLMs, with attention to usefulness, reliability and the experience around the model.'
                },
                {
                  icon: Target,
                  title: 'Product Strategy & Delivery',
                  description: 'Turn business and user problems into clear requirements, priorities and product experiences — then work with teams to ship them.'
                },
                {
                  icon: TrendingUp,
                  title: 'Technical Product Thinking',
                  description: 'Work comfortably across APIs, integrations, data and software architecture to make informed product decisions with engineering.'
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
