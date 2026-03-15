import React, { useEffect } from 'react';
import { ArrowLeft, BarChart3, TrendingUp, Target, Users, AlertCircle, CheckCircle2, XCircle, HelpCircle } from 'lucide-react';

const LeadQualityCaseStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-slate-50 min-h-screen font-inter pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/90 backdrop-blur-lg border-b border-slate-200 z-50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            Back to Portfolio
          </button>
        </div>
      </nav>

      <article className="pt-32 px-6 max-w-4xl mx-auto">
        {/* 1. Hero Section */}
        <header className="mb-16 animate-fade-in">
          <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold tracking-wide rounded-full text-sm mb-6">
            Data Analysis Case Study
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
            Finding the Real Lever Behind Lead Quality
          </h1>
          <p className="text-xl text-slate-600 mb-8 border-l-4 border-blue-500 pl-4 py-1">
            A data analysis case study on improving digital advertising performance.
          </p>
          <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200">
            <p className="text-slate-700 leading-relaxed text-lg">
              This analysis investigates <strong>3,000 leads generated for a debt reduction advertiser</strong> and explores how lead quality behaves, what drives successful outcomes, and where the biggest improvement opportunities exist.
            </p>
          </div>
        </header>

        {/* 2. The Business Problem */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
            <Target className="text-blue-500" /> The Business Problem
          </h2>
          <p className="text-slate-700 mb-8 leading-relaxed text-lg">
            In the lead generation ecosystem, advertisers buy leads, but only some leads become real prospects. The journey looks like this:
          </p>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 mb-10 overflow-x-auto">
            <div className="flex flex-col md:flex-row items-center justify-between min-w-full gap-4">
              <div className="w-full md:w-auto flex-1 bg-slate-100 p-4 rounded-lg text-center font-medium text-slate-700 whitespace-nowrap">Traffic Sources</div>
              <ArrowLeft className="text-slate-400 rotate-[-90deg] md:rotate-180 flex-shrink-0" />
              <div className="w-full md:w-auto flex-1 bg-slate-100 p-4 rounded-lg text-center font-medium text-slate-700 whitespace-nowrap">Lead Generation</div>
              <ArrowLeft className="text-slate-400 rotate-[-90deg] md:rotate-180 flex-shrink-0" />
              <div className="w-full md:w-auto flex-1 bg-slate-100 p-4 rounded-lg text-center font-medium text-slate-700 whitespace-nowrap">Call Center Follow-Up</div>
              <ArrowLeft className="text-slate-400 rotate-[-90deg] md:rotate-180 flex-shrink-0" />
              <div className="w-full md:w-auto flex-1 bg-blue-50 border border-blue-200 p-4 rounded-lg text-center font-semibold text-blue-700 whitespace-nowrap">Lead Outcomes</div>
            </div>
          </div>

          <h3 className="text-xl font-bold text-slate-800 mb-6">Lead Outcome Groups</h3>
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-emerald-50 p-6 rounded-xl border border-emerald-100">
              <h4 className="font-semibold text-emerald-800 flex items-center gap-2 mb-4 text-lg">
                <CheckCircle2 size={24} /> Good Leads
              </h4>
              <ul className="space-y-3 text-emerald-700">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Closed</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> EP Sent</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> EP Received</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> EP Confirmed</li>
              </ul>
            </div>
            <div className="bg-rose-50 p-6 rounded-xl border border-rose-100">
              <h4 className="font-semibold text-rose-800 flex items-center gap-2 mb-4 text-lg">
                <XCircle size={24} /> Bad Leads
              </h4>
              <ul className="space-y-3 text-rose-700">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Unable to Contact</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Invalid Profile</li>
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-rose-500"></div> Doesn't Qualify</li>
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded-xl border border-slate-200">
              <h4 className="font-semibold text-slate-700 flex items-center gap-2 mb-4 text-lg">
                <HelpCircle size={24} /> Neutral Leads
              </h4>
              <ul className="space-y-3 text-slate-600">
                <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-slate-500"></div> Leads without a final outcome</li>
              </ul>
            </div>
          </div>

          <div className="bg-blue-900 text-white p-8 rounded-xl shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10">
              <BarChart3 size={120} />
            </div>
            <h3 className="text-xl font-semibold mb-6 text-blue-100 relative z-10">The Lead Quality Rate Metric</h3>
            <div className="text-2xl md:text-3xl font-mono bg-blue-950 p-6 rounded-xl text-center mb-6 border border-blue-800 shadow-inner relative z-10">
              Lead Quality Rate = Good Leads / (Good + Bad)
            </div>
            <p className="text-blue-200 text-lg relative z-10">
              Neutral leads are excluded because they have unresolved outcomes.
            </p>
          </div>
        </section>

        {/* 3. Establishing the Baseline */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <BarChart3 className="text-emerald-500" /> Establishing the Baseline
          </h2>
          
          <div className="grid md:grid-cols-5 gap-6 mb-10">
            <div className="md:col-span-3 bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col justify-center">
              <h3 className="text-xl font-bold text-slate-800 mb-8">Baseline Distribution</h3>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-slate-600 font-semibold text-lg">Neutral Leads (2,140)</span>
                    <span className="text-slate-600 font-bold text-lg">70.8%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-5">
                    <div className="bg-slate-400 h-5 rounded-full transition-all duration-1000" style={{ width: '70.8%' }}></div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-rose-600 font-semibold text-lg">Bad Leads (488)</span>
                    <span className="text-rose-600 font-bold text-lg">16.1%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-5">
                    <div className="bg-rose-400 h-5 rounded-full transition-all duration-1000" style={{ width: '16.1%' }}></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between mb-2">
                    <span className="text-emerald-600 font-semibold text-lg">Good Leads (393)</span>
                    <span className="text-emerald-600 font-bold text-lg">13.0%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-5">
                    <div className="bg-emerald-400 h-5 rounded-full transition-all duration-1000" style={{ width: '13%' }}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2 grid grid-rows-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
                <span className="text-slate-500 font-semibold mb-2 text-lg">Quality Rate</span>
                <span className="text-5xl font-bold text-blue-600">44.6%</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 flex flex-col items-center justify-center text-center">
                <span className="text-slate-500 font-semibold mb-2 text-lg">Resolution Rate</span>
                <span className="text-5xl font-bold text-purple-600">29.0%</span>
              </div>
            </div>
          </div>

          <div className="flex justify-center mb-8">
            <div className="bg-amber-50 border-2 border-amber-200 p-6 rounded-2xl w-full max-w-2xl text-center shadow-sm">
              <p className="text-amber-900 text-2xl font-bold">"Over 70% of leads were never resolved."</p>
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <div className="bg-slate-900 text-white rounded-2xl p-6 shadow-xl max-w-lg w-full text-center relative overflow-hidden transform -rotate-1">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-400 to-purple-500"></div>
              <HelpCircle className="mx-auto mb-3 text-slate-300 opacity-50" size={32} />
              <p className="text-xl font-medium">
                Why are the majority of leads never resolved?
              </p>
            </div>
          </div>
        </section>

        {/* 4. Investigating Trends Over Time */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <TrendingUp className="text-purple-500" /> Investigating Trends Over Time
          </h2>
          
          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 mb-8">
            <div className="h-64 flex items-end justify-between gap-2 border-b-2 border-l-2 border-slate-200 p-4 pt-10 relative">
              <span className="absolute -left-12 top-1/2 -rotate-90 text-sm font-semibold text-slate-500 w-32 text-center">Quality Rate (%)</span>
              
              {[62, 58, 51, 46, 42, 39].map((height, i) => (
                 <div key={i} className="w-[12%] flex flex-col items-center justify-end h-full group">
                   <span className="text-slate-600 font-bold mb-2 opacity-0 group-hover:opacity-100 transition-opacity">{height}%</span>
                   <div className="w-full max-w-[48px] bg-gradient-to-t from-purple-600 to-indigo-400 rounded-t-lg shadow-sm" style={{ height: `${height}%` }}></div>
                   <span className="text-sm font-medium text-slate-500 mt-4 absolute -bottom-8">Month {i+1}</span>
                 </div>
              ))}
              
              {/* Overlay line for volume */}
              <svg className="absolute inset-0 h-full w-full pointer-events-none drop-shadow-md" preserveAspectRatio="none">
                <polyline 
                  points="10%,70% 26%,60% 42%,45% 58%,30% 74%,20% 90%,10%" 
                  fill="none" 
                  stroke="#ef4444" 
                  strokeWidth="4"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>
            <div className="flex justify-center mt-12 gap-8 text-slate-700 font-medium">
              <span className="flex items-center gap-2"><div className="w-5 h-5 bg-purple-500 rounded"></div> Quality Rate</span>
              <span className="flex items-center gap-2"><div className="w-6 h-0 border-t-4 border-dashed border-red-500"></div> Lead Volume</span>
            </div>
          </div>

          <p className="text-slate-700 mb-8 leading-relaxed text-lg">
            As seen above, quality fluctuates significantly as campaigns scale. Higher lead volumes often correspond with <strong>lower quality rates</strong>, suggesting that rapid scaling introduces lower-quality traffic sources.
          </p>

          <div className="bg-indigo-50 p-8 rounded-xl border border-indigo-100 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4 opacity-5 text-indigo-900">
              <TrendingUp size={100} />
            </div>
            <h4 className="font-bold text-indigo-900 mb-3 text-xl relative z-10">Performance Marketing Insight</h4>
            <p className="text-indigo-800 text-lg relative z-10 leading-relaxed">
              There is an inherent trade-off between <strong>scale and efficiency</strong>. Pushing for maximum volume almost inevitably requires tapping into broader, less targeted traffic sources, which dilutes average lead quality.
            </p>
          </div>
        </section>

        {/* 5. Do Some Traffic Sources Perform Better? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center gap-3">
            <Users className="text-blue-500" /> Do Some Traffic Sources Perform Better?
          </h2>

          <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 mb-8">
            <h3 className="text-xl font-bold text-slate-800 mb-8">Partner Quality Rates</h3>
            <div className="space-y-6">
              {[
                { name: 'AdKnowledge', rate: 58, color: 'bg-emerald-500' },
                { name: 'Yahoo', rate: 48, color: 'bg-blue-400' },
                { name: 'Google', rate: 41, color: 'bg-indigo-400' },
                { name: 'Call Center', rate: 40, color: 'bg-slate-400' }
              ].map(partner => (
                <div key={partner.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold text-slate-700 text-lg">{partner.name}</span>
                    <span className="font-bold text-slate-800 text-lg">{partner.rate}%</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-4">
                    <div className={`${partner.color} h-4 rounded-full`} style={{ width: `${partner.rate}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p className="text-slate-700 leading-relaxed mb-8 text-lg">
            Although Google has lower efficiency, it generates the <strong>largest number of good leads due to scale</strong>. 
          </p>

          <div className="bg-white border-l-4 border-blue-500 shadow-sm p-6 rounded-r-xl my-8">
            <h4 className="font-bold text-slate-900 text-xl flex items-center gap-2">
              <AlertCircle className="text-blue-500" size={24} /> Key Principle
            </h4>
            <p className="text-slate-700 mt-3 text-lg leading-relaxed">
              High-volume channels may look inefficient on a percentage basis, but they still drive significant absolute conversions. Avoid recommending removal of major channels simply based on rate without assessing total volume impact.
            </p>
          </div>
        </section>

        {/* 6. What Makes a Lead More Likely to Convert? */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">What Makes a Lead More Likely to Convert?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone Validation Score */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Phone Validation Score</h3>
              <p className="text-slate-600 mb-8 text-lg">
                Higher phone reliability increases the probability of successful contact and correlation.
              </p>
              
              <div className="flex items-center justify-between mt-auto pt-8 border-t border-slate-100">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-rose-100 border-2 border-rose-200 text-rose-600 rounded-full flex items-center justify-center font-bold text-lg mb-3 shadow-sm">Low</div>
                  <span className="text-sm font-medium text-slate-500">PhoneScore</span>
                </div>
                <div className="flex-1 px-4 flex items-center relative h-16">
                  <div className="w-full h-2 bg-gradient-to-r from-rose-200 via-amber-300 to-emerald-400 rounded-full"></div>
                  <ArrowLeft className="rotate-180 text-emerald-500 absolute right-1 drop-shadow-sm" size={28} />
                </div>
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 bg-emerald-100 border-2 border-emerald-200 text-emerald-600 rounded-full flex items-center justify-center font-bold text-lg mb-3 shadow-sm">High</div>
                  <span className="text-sm font-medium text-slate-500">Conversion Prob.</span>
                </div>
              </div>
            </div>

            {/* Debt Level */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-200 flex flex-col">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Debt Level</h3>
              <p className="text-slate-600 mb-8 text-lg">
                Higher debt levels strongly correlate with conversion probability.
              </p>
              
              <div className="space-y-6 mt-auto">
                {[
                  { range: '$7.5k–10k', rate: 22, color: 'bg-blue-300' },
                  { range: '$20k–50k', rate: 50, color: 'bg-blue-500' },
                  { range: '$70k–90k', rate: 60, color: 'bg-blue-700' }
                ].map(tier => (
                  <div key={tier.range} className="flex items-center gap-4">
                    <span className="w-24 font-bold text-slate-700">{tier.range}</span>
                    <div className="flex-1 bg-slate-100 rounded-full h-8 shadow-inner">
                      <div className={`${tier.color} h-8 rounded-full flex items-center px-4 shadow-sm`} style={{ width: `${tier.rate}%` }}>
                        <span className="text-sm font-bold text-white tracking-wide">{tier.rate}%</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 bg-purple-50 border border-purple-100 text-purple-900 p-6 rounded-xl flex items-start gap-4 shadow-sm">
            <div className="bg-purple-200 p-2 rounded-lg"><Users className="text-purple-700" size={24} /></div>
            <div>
              <h4 className="font-bold text-purple-900 text-lg mb-1">Behavioral Insight</h4>
              <p className="text-purple-800 text-lg">People with higher debt have stronger motivation to seek assistance.</p>
            </div>
          </div>
        </section>

        {/* 7. Optimization Scenario Modeling */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Optimization Scenario Modeling</h2>
          <p className="text-slate-700 mb-8 max-w-2xl text-lg">
            Traffic filtering improves efficiency but reduces scale. Let's compare the simulated strategies.
          </p>

          <div className="overflow-x-auto rounded-2xl shadow-sm border border-slate-200 mb-8 bg-white">
            <table className="w-full text-left border-collapse min-w-[600px]">
              <thead>
                <tr className="bg-slate-100 border-b-2 border-slate-200">
                  <th className="p-5 font-bold text-slate-800 text-lg">Scenario</th>
                  <th className="p-5 font-bold text-slate-800 text-lg text-right">Quality Rate</th>
                  <th className="p-5 font-bold text-slate-800 text-lg text-right w-40">Good Leads</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 text-slate-700 font-semibold text-lg">Baseline</td>
                  <td className="p-5 text-slate-600 text-right font-mono text-lg">44.6%</td>
                  <td className="p-5 text-slate-800 text-right font-bold w-40 border-l border-slate-100 bg-slate-50/50 text-xl">393</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 text-slate-700 font-medium text-lg">Remove Google</td>
                  <td className="p-5 text-blue-600 text-right font-mono font-bold text-lg">47.4%</td>
                  <td className="p-5 text-rose-600 text-right font-bold w-40 border-l border-slate-100 bg-slate-50/50 flex items-center justify-end gap-2 text-xl"><ArrowLeft className="rotate-90 text-rose-400" size={20}/> 213</td>
                </tr>
                <tr className="border-b border-slate-100 hover:bg-slate-50 transition-colors">
                  <td className="p-5 text-slate-700 font-medium text-lg">Remove Low-Debt Leads</td>
                  <td className="p-5 text-emerald-600 text-right font-mono font-bold text-lg">48.9%</td>
                  <td className="p-5 text-rose-600 text-right font-bold w-40 border-l border-slate-100 bg-slate-50/50 flex items-center justify-end gap-2 text-xl"><ArrowLeft className="rotate-90 text-rose-400" size={20}/> 362</td>
                </tr>
                <tr className="bg-emerald-50 border-emerald-200 border-b-0">
                  <td className="p-5 text-emerald-900 font-bold text-lg">Increase Resolution to 50%</td>
                  <td className="p-5 text-slate-600 text-right font-mono text-lg">44.6%</td>
                  <td className="p-5 text-emerald-700 text-right font-black w-40 border-l border-emerald-100 text-2xl flex items-center justify-end gap-2 bg-emerald-100/50"><ArrowLeft className="-rotate-90 text-emerald-500" size={24}/> 673</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="flex items-center gap-4 bg-blue-50 text-blue-900 p-6 rounded-xl border border-blue-100 shadow-sm">
            <div className="bg-blue-100 p-3 rounded-full flex-shrink-0">
              <CheckCircle2 size={32} className="text-blue-600" />
            </div>
            <div>
              <p className="font-bold text-xl mb-1">Major Finding</p>
              <p className="text-blue-800 text-lg">Operational improvements produce the largest absolute gains.</p>
            </div>
          </div>
        </section>

        {/* 8. The Real Insight */}
        <section className="mb-16">
          <div className="bg-slate-900 rounded-3xl p-12 shadow-2xl text-center relative overflow-hidden transform hover:-translate-y-1 transition-transform duration-300">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500 rounded-full blur-[100px] opacity-20 -translate-x-1/3 translate-y-1/3"></div>
            
            <h2 className="text-4xl font-black text-white mb-10 relative z-10 uppercase tracking-wide">The Real Insight</h2>
            
            <div className="space-y-8 text-2xl text-slate-300 relative z-10 font-light max-w-3xl mx-auto leading-relaxed">
              <p>Most marketing optimization focuses on traffic sources.</p>
              <p>However, this dataset reveals that the biggest opportunity lies in <strong className="text-white font-bold bg-blue-600/30 border border-blue-500/30 px-3 py-1.5 rounded-lg inline-block shadow-lg">lead processing efficiency.</strong></p>
              <p className="text-blue-200">With <strong>over 70% unresolved leads</strong>, improving follow-up operations could unlock far more value than filtering traffic sources.</p>
            </div>
          </div>
        </section>

        {/* 9. Final Recommendation */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">Final Recommendations</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-emerald-50 border-2 border-emerald-200 p-10 rounded-2xl relative overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="absolute top-0 right-0 p-6 opacity-10 text-emerald-600">
                <Target size={180} className="-rotate-12" />
              </div>
              <h3 className="text-2xl font-black text-emerald-900 mb-4 relative z-10">Primary Lever</h3>
              <h4 className="text-xl font-bold text-emerald-800 mb-6 relative z-10">Improve Lead Resolution</h4>
              <p className="text-emerald-700 relative z-10 text-lg leading-relaxed">
                Increasing resolution from <strong>29% to 50%</strong> could generate <strong>~280 additional good leads.</strong>
              </p>
            </div>

            <div className="bg-white border-2 border-slate-200 p-10 rounded-2xl shadow-sm relative overflow-hidden hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-black text-slate-800 mb-4">Secondary Lever</h3>
              <h4 className="text-xl font-bold text-slate-700 mb-6">Targeted Campaign Optimization</h4>
              <ul className="space-y-4 text-slate-600 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 font-bold">•</span>
                  Reduce low-debt segments
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 font-bold">•</span>
                  Optimize weak segments within Google traffic
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-500 mt-1 font-bold">•</span>
                  Allocate more budget to high-performing partners
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="inline-block bg-slate-800 text-white font-semibold text-lg px-8 py-4 rounded-full shadow-lg">
              Emphasize balanced optimization rather than aggressive traffic removal.
            </p>
          </div>
        </section>

        {/* 10. What This Case Study Demonstrates */}
        <section className="border-t-2 border-slate-100 pt-16">
          <div className="bg-white p-10 rounded-2xl shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">What This Case Study Demonstrates</h2>
            
            <div className="flex flex-wrap gap-4 mb-12">
              {[
                'Exploratory data analysis',
                'Marketing performance diagnostics',
                'Behavioral drivers of conversion',
                'Scenario modeling',
                'Translating insights into business recommendations'
              ].map(skill => (
                <span key={skill} className="bg-blue-50 border border-blue-200 text-blue-800 px-5 py-2.5 rounded-full font-semibold shadow-sm text-center">
                  {skill}
                </span>
              ))}
            </div>

            <div className="border-l-4 border-slate-900 pl-8 py-4 bg-slate-50 rounded-r-xl">
              <p className="text-xl text-slate-700 italic font-medium">
                "The most valuable insights often come not from complex models, but from asking the right questions about how a system actually operates."
              </p>
            </div>
          </div>
        </section>
      </article>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate-400">
            © 2024 Bhargav Nath. Built with purpose, designed for impact.
          </p>
          <p className="text-slate-500 text-sm mt-2">
            "Build what matters. Measure what moves. Learn what lasts."
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LeadQualityCaseStudy;
