import React from 'react';
import { Target, Users, TrendingUp, Lightbulb } from 'lucide-react';

const ProductThinking: React.FC = () => {
  const frameworks = [
    { name: 'Frame the problem', icon: Target, description: 'Start with a user problem and the business outcome it affects—not a feature request or a technology looking for a use case.' },
    { name: 'Understand the workflow', icon: Users, description: 'Map how work happens today, where users lose time and where software, automation or AI can make a meaningful difference.' },
    { name: 'Define how to evaluate', icon: TrendingUp, description: 'Agree on success measures and quality criteria before building, including reliability, adoption, cost and user trust.' },
    { name: 'Ship, learn and iterate', icon: Lightbulb, description: 'Use prototypes and feedback to reduce uncertainty, deliver in stages and learn from real usage after release.' }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">How I approach product work</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A few principles guide how I understand problems, make trade-offs and decide what is worth building.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {frameworks.map((framework) => (
            <div key={framework.name} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1">
              <div className="text-center">
                <div className="bg-slate-100 p-4 rounded-full inline-flex mb-4">
                  <framework.icon className="text-slate-700" size={32} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-3">{framework.name}</h3>
                <p className="text-sm text-slate-600">{framework.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-12 max-w-3xl mx-auto text-center">
          <p className="text-lg text-slate-700 leading-relaxed">
            Good product work is not just about shipping features. It is about understanding what matters, making clear decisions and learning from what happens after launch.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductThinking;
