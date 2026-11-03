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
                I’m a product professional with a technical background and a growing focus on AI. My work has taken me from electronics and data analysis into enterprise software, where I enjoy connecting the needs of users and businesses with what technology can make possible.
              </p>
              <p>
                I’m interested in products that make complicated work simpler. That means getting close to the problem, asking the right questions, making thoughtful trade-offs and working with design and engineering teams to deliver something people can actually use.
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
