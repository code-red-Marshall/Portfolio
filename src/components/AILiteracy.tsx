import React from 'react';
import { Brain, Database, BarChart3, Zap, Code, Monitor } from 'lucide-react';

const AILiteracy: React.FC = () => {
  const categories = [
    { title: 'AI Prototyping', subtitle: 'No/low‑code: Lovable, Bolt, Cursor AI', icon: Monitor },
    { title: 'Agentic Frameworks', subtitle: 'RAG • COT • Responsible AI • LangChain • LlamaIndex • LangGraph', icon: Brain },
    { title: 'Data & Insights', subtitle: 'SQL • Power BI • Data Preparation', icon: BarChart3 },
    { title: 'AI Coding Assistants', subtitle: 'Cursor AI • Antigravity • Replit', icon: Code },
    { title: 'User‑centric AI/UX', subtitle: 'G-Stitch • Gamma • Magic Patterns', icon: Zap },
    { title: 'AI Risk & Ethics', subtitle: 'Bias • Fairness • Explainability • Compliance', icon: Database },
    { title: 'Experimentation & Iteration', subtitle: 'Rapid prototyping • A/B testing • Feedback loops', icon: Monitor },
    { title: 'Strategic AI Integration', subtitle: 'Translate AI for business • Roadmap • XFN leadership', icon: Brain },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">AI Literacy</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-6">
            Proficient in the latest AI tools and frameworks, building intelligent systems that scale.
          </p>
          <blockquote className="text-lg font-medium text-slate-700 italic">
            "AI tools are powerful — but only when used with intent."
          </blockquote>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-[transform,box-shadow] duration-300 hover:-translate-y-1 group"
            >
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

        <div className="mt-12 bg-white p-8 rounded-2xl shadow-lg">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-slate-900 mb-2">5+</div>
              <p className="text-slate-600">AI Projects Delivered</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-emerald-600 mb-2">1K+</div>
              <p className="text-slate-600">Users Impacted</p>
            </div>
            <div>
              <div className="text-3xl font-bold text-slate-700 mb-2">95%</div>
              <p className="text-slate-600">Average Model Accuracy</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AILiteracy;