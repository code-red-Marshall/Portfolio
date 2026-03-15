import React from 'react';
import { Target, Users, TrendingUp, Lightbulb } from 'lucide-react';

const ProductThinking: React.FC = () => {
  const frameworks = [
    {
      name: 'Product-Market Fit',
      icon: Target,
      description: 'Finding the sweet spot between user needs and market demand'
    },
    {
      name: 'AARRR Metrics',
      icon: TrendingUp,
      description: 'Acquisition, Activation, Retention, Referral, Revenue optimization'
    },
    {
      name: 'Jobs-to-be-Done',
      icon: Lightbulb,
      description: 'Understanding the job users hire your product to do'
    },
    {
      name: 'User-Centric Design',
      icon: Users,
      description: 'Building with empathy and continuous user feedback'
    }
  ];

  const philosophies = [
    {
      quote: "PMF is like brewing the perfect chai.",
      explanation: "Too weak and nobody wants it. Too strong and it's overwhelming. Just right, and everyone comes back for more."
    },
    {
      quote: "Great products aren't talked into existence — they're listened into clarity.",
      explanation: "The best insights come from understanding user pain points, not pushing features."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Product Thinking</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Frameworks and philosophy that drive product decisions and create meaningful user experiences.
          </p>
        </div>

        {/* Frameworks */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {frameworks.map((framework, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1"
            >
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

        {/* Philosophy Cards */}
        <div className="grid md:grid-cols-2 gap-8">
          {philosophies.map((philosophy, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
              <blockquote className="text-xl font-semibold text-slate-900 mb-4 italic">
                "{philosophy.quote}"
              </blockquote>
              <p className="text-slate-600 leading-relaxed">{philosophy.explanation}</p>
            </div>
          ))}
        </div>

        {/* Product Metrics */}
        <div className="mt-16 bg-gradient-to-r from-slate-800 to-slate-900 p-8 rounded-2xl text-white">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">Product Impact</h3>
            <p className="text-slate-300">Measurable outcomes from product-focused initiatives</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-2">40%</div>
              <p className="text-slate-300">Faster Time-to-Market</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">25%</div>
              <p className="text-slate-300">User Engagement Increase</p>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">60%</div>
              <p className="text-slate-300">Support Ticket Reduction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductThinking;