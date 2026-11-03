import React from 'react';
import { Brain, Database, BarChart3, Zap, Code, Monitor } from 'lucide-react';

const AILiteracy: React.FC = () => {
  const categories = [
    { title: 'AI Prototyping', subtitle: 'Rapid prototyping with AI-assisted development tools', icon: Monitor },
    { title: 'LLM Applications', subtitle: 'RAG, prompt design, LangChain, LlamaIndex and LangGraph', icon: Brain },
    { title: 'Data & Insights', subtitle: 'SQL, analytics, data preparation and visualisation', icon: BarChart3 },
    { title: 'Technical Collaboration', subtitle: 'APIs, integrations, data flows and software delivery', icon: Code },
    { title: 'AI Product Thinking', subtitle: 'Use-case selection, evaluation and user experience', icon: Zap },
    { title: 'Responsible AI', subtitle: 'Reliability, privacy, bias and human oversight', icon: Database },
    { title: 'Experimentation', subtitle: 'Prototyping, testing, feedback and iteration', icon: Monitor },
    { title: 'Product Strategy', subtitle: 'Roadmaps, prioritisation and cross-functional leadership', icon: Brain },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Working across product and technology</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
            I’m interested in the practical side of AI: choosing the right problems, understanding the trade-offs and building experiences people can rely on.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div key={item.title} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 group">
              <div className="flex flex-col items-center text-center">
                <div className="bg-slate-100 group-hover:bg-slate-200 p-4 rounded-full mb-4 transition-colors">
                  <item.icon className="text-slate-700" size={32} />
                </div>
                <h3 className="font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AILiteracy;
