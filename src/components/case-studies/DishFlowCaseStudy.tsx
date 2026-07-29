import React, { useEffect, useState } from 'react';
import { 
  ArrowLeft, Utensils, ChefHat, LayoutDashboard, TrendingUp, 
  ShoppingCart, ShieldCheck, Scale, Layers, Activity, Cpu, 
  BookOpen, Database, Sparkles, Clock, CheckCircle2, AlertTriangle, ArrowRight
} from 'lucide-react';

interface DishFlowCaseStudyProps {
  onBack: () => void;
}

type TabType = 'dashboard' | 'recipes' | 'sales' | 'procurement';

const DishFlowCaseStudy: React.FC<DishFlowCaseStudyProps> = ({ onBack }) => {
  const [activeTab, setActiveTab] = useState<TabType>('dashboard');

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

  const tabInfo = {
    dashboard: {
      title: 'Inventory Dashboard',
      subtitle: 'Real-Time Inventory Overview & AI Insights',
      image: '/dishflow-inventory.png',
      description: 'The core control center. Instead of just listing raw ingredients, it surfaces inventory valuation, wastage percentages, stockout risks, and immediate AI operations recommendations.',
      bullets: [
        'Real-time valuation metrics (e.g., total current inventory value and accuracy index).',
        'Automatic expiration monitoring and visual alert triggers.',
        'High-priority warning alerts indicating risk areas (e.g. "3 stockout risk items").',
        'AI Operations Insight panel mapping abnormal consumption directly to the culprit recipes.'
      ]
    },
    recipes: {
      title: 'Recipe Builder',
      subtitle: 'Recipe-to-Ingredient Cost Intelligence',
      image: '/dishflow-recipe-builder.png',
      description: 'Maps the kitchen to the supply chain. Converts menu items into a live Bill of Materials (BOM), enabling automated deduction on POS sales and real-time margin checking.',
      bullets: [
        'Dynamic ingredient list with customizable quantity and weight conversions.',
        'Automatic cost-per-dish calculating and live ideal food cost comparison (e.g., target 28%-35%).',
        'Direct POS mapping configurations synced with backend menu items.',
        'Visual cost trends showing expected vs. actual costs over a 30-day window.'
      ]
    },
    sales: {
      title: 'Sales Tracker',
      subtitle: 'POS Sales Sync & Real-Time Depletion',
      image: '/dishflow-sales-tracker.png',
      description: 'The bridge between front-of-house transactions and back-of-house storage. It ingests POS activity and immediately decrements corresponding ingredient volumes.',
      bullets: [
        'Live POS transaction feed showing individual items sold and estimated weights deducted.',
        'Daily inventory impact meters detailing starting and current stock per ingredient.',
        'AI Restock Forecast indicating the exact time remaining before depletion (e.g., "Paneer: 2.5 days left").',
        'AI Sales Intelligence panel highlighting menu performance trends and potential supply issues.'
      ]
    },
    procurement: {
      title: 'Procurement & Forecasting',
      subtitle: 'Demand Signals to Approved Purchase Orders',
      image: '/dishflow-procurement.png',
      description: 'Turns historical demand patterns and upcoming shifts into actionable orders. Reduces procurement overhead from hours of guesswork to a simple confirmation click.',
      bullets: [
        'Next-14-day demand forecast graphs mapping historical consumption against predictions.',
        'AI Procurement Agent recommendations listing exact weights to purchase with confidence scores.',
        'Supplier price trend trackers plotting cost fluctuations (e.g., Paneer +6% this month).',
        'Direct purchase order workflow featuring pending, approved, and ordered status updates.'
      ]
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen font-inter pb-20 text-slate-600">
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
        {/* Hero Header */}
        <header className="mb-16 animate-fade-in">
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="inline-block px-3.5 py-1 bg-emerald-100 text-emerald-800 font-semibold tracking-wide rounded-full text-xs border border-emerald-200">
              Product Management
            </span>
            <span className="inline-block px-3.5 py-1 bg-teal-100 text-teal-800 font-semibold tracking-wide rounded-full text-xs border border-teal-200">
              AI System Design
            </span>
            <span className="inline-block px-3.5 py-1 bg-slate-100 text-slate-700 font-semibold tracking-wide rounded-full text-xs border border-slate-200">
              Venture Studio Sprint
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            DishFlow
          </h1>
          <p className="text-xl md:text-2xl text-slate-700 mb-8 font-light border-l-4 border-emerald-500 pl-6 leading-relaxed">
            AI-Powered Restaurant Inventory Intelligence Platform
          </p>

          {/* Project Details Grid */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-slate-900 font-bold flex items-center gap-2 border-b border-slate-100 pb-2">
                <ChefHat className="text-emerald-600" size={18} />
                Sprint Constraints & Role
              </h3>
              <ul className="space-y-2.5 text-slate-600">
                <li><strong className="text-slate-900 font-medium">Role:</strong> Product Manager (Sprint Lead)</li>
                <li><strong className="text-slate-900 font-medium">Timeline:</strong> 36-hour sprint window</li>
                <li><strong className="text-slate-900 font-medium">Objective:</strong> 0-to-1 product strategy, technical design, and high-fidelity prototype</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-slate-900 font-bold flex items-center gap-2 border-b border-slate-100 pb-2">
                <Cpu className="text-emerald-600" size={18} />
                Methodologies Demonstrated
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {[
                  'Product Discovery', 'Competitive Analysis', 'AI Product Strategy',
                  'Rule-based vs. AI System Design', 'BOM Systems Design', 'High-Fidelity Prototyping'
                ].map((tech) => (
                  <span key={tech} className="px-2.5 py-1 bg-slate-100 border border-slate-200 rounded-lg text-xs text-slate-700 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* Introduction */}
        <section className="mb-16">
          <p className="text-lg leading-relaxed text-slate-700">
            <strong>DishFlow</strong> is an AI-powered inventory intelligence platform for restaurants designed to reduce food waste, prevent stockouts, and improve profit margins. Rather than serving as another static inventory tracker, it introduces a localized intelligence layer that explains <em>why</em> inventory variance happens, predicts upcoming stockouts, and recommends optimal procurement decisions.
          </p>
          <p className="text-lg leading-relaxed text-slate-700 mt-4">
            The project was conceived, designed, and prototyped in a compressed <strong>36-hour build window</strong> for Pallet, a venture studio. It treats a real 0-to-1 restaurant operational headache with startup rigor: combining fast customer discovery, architectural system partitioning, and interactive product prototypes.
          </p>
        </section>

        {/* The Problem */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <AlertTriangle className="text-amber-500" size={24} />
            The Problem: Reactive Operations
          </h2>
          <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-6 mb-6">
            <p className="text-slate-700">
              Restaurant inventory management is fundamentally reactive. Front-of-house sales, kitchen operations, and supply procurement systems operate in silos. This fragmentation forces kitchen managers into manual audits, creates unexpected ingredient shortages, and leaves food waste unnoticed until the end of the month.
            </p>
          </div>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: 'High Food Wastage',
                desc: 'Unseen ingredient expiry and spoilage due to lack of real-time shelf life transparency.'
              },
              {
                title: 'Frequent Stockouts',
                desc: 'Menu items blocked mid-service because procurement is disconnected from real-time customer sales.'
              },
              {
                title: 'Opaque Cost Mapping',
                desc: 'Inability to track exact recipe-level margins as ingredient market prices fluctuate.'
              },
              {
                title: 'Manual Overhead',
                desc: 'Kitchen staff spending hours manually checking shelves and spreadsheets instead of cooking.'
              }
            ].map((item, idx) => (
              <li key={idx} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm">
                <h4 className="font-semibold text-slate-900 mb-1.5 flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  {item.title}
                </h4>
                <p className="text-sm text-slate-600">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* Product Vision */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Sparkles className="text-emerald-500" size={24} />
            Product Vision: Intelligent Actions
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            The core mission of DishFlow is to transition restaurant management from knowing <strong>what</strong> inventory is in stock to understanding <strong>why</strong> it changed and <strong>what action</strong> to take next.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: '01',
                title: 'Exposing Variance',
                desc: 'Automatically flag variance between expected consumption (calculated from sales recipes) and actual stock.'
              },
              {
                step: '02',
                title: 'Explaining Causes',
                desc: 'Identify underlying leakage sources (e.g. over-portioning in specific recipes, supplier shortage, or kitchen wastage).'
              },
              {
                step: '03',
                title: 'Automating Decisions',
                desc: 'Generate pre-filled purchase orders and menu updates that procurement managers can execute with one click.'
              }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm flex flex-col relative overflow-hidden group hover:border-emerald-300 transition-colors">
                <span className="text-5xl font-extrabold text-slate-100 absolute top-2 right-2 select-none group-hover:text-emerald-50 transition-colors">
                  {step.step}
                </span>
                <h4 className="font-bold text-slate-900 mb-2 relative z-10">{step.title}</h4>
                <p className="text-sm text-slate-600 relative z-10 flex-1 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <BookOpen className="text-emerald-600" size={24} />
            My Approach: Strategy & Competitive Research
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            Building 0-to-1 features under strict timelines requires structured prioritization over immediate coding. The sprint followed a three-step Discovery approach:
          </p>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">User Persona Mapping</h4>
                <p className="text-slate-600">
                  Segmented stakeholders into three core roles: <strong>Restaurant Owners</strong> (focused on high-level food cost % and gross margin), <strong>Kitchen Managers</strong> (focused on daily prep sheets, recipe building, and shelf expiry), and <strong>Procurement Leads</strong> (focused on supplier price trends, stockouts, and PO releases). This mapping dictated a modular UI design rather than a single dashboard.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">Competitive Benchmarking</h4>
                <p className="text-slate-600">
                  Analyzed major point-of-sale and kitchen platforms: Toast, MarketMan, Petpooja, and Restroworks. The evaluation showed that while existing players excel at operational data logging, they fall short at cognitive decision support. They tell users that inventory went down, but never explain *why* or automate the correct reorder trigger.
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-bold text-slate-900 mb-1">The Core Product Loop</h4>
                <p className="text-slate-600">
                  Established the proprietary value chain: <strong>POS Integration</strong> (deducting raw ingredients) → <strong>Shelf Audits</strong> (flagging variance) → <strong>AI Analysis</strong> (investigating root causes) → <strong>Procurement & Forecasting</strong> (recommending reorders before stockouts occur).
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* AI System Partitioning */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Cpu className="text-emerald-600" size={24} />
            AI Architecture: Rules vs. AI Boundary
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            A key architectural focus was deciding where to implement generative AI versus deterministic algorithms. Using an LLM everywhere leads to cost inflation, high latency, and accuracy risks. Instead, DishFlow partitions the intelligence stack logically:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-slate-100 rounded-2xl p-6 border border-slate-200">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-slate-400"></div>
                Deterministic Logic (Rules Engine)
              </h4>
              <p className="text-sm text-slate-600 mb-4">
                Handles quantitative, rule-based operations where zero margin of error is acceptable.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-slate-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Recipe Deductions:</strong> Math-based ingredient depletion based on POS sales.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-slate-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Reorder Thresholds:</strong> Triggers alerts immediately when stock hits configured limits.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-slate-500 mt-0.5 flex-shrink-0" />
                  <span><strong>Expiry Schedules:</strong> Calendar-based shelf tracking mapping intake dates.</span>
                </li>
              </ul>
            </div>

            <div className="bg-emerald-50/50 rounded-2xl p-6 border border-emerald-200">
              <h4 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Sparkles size={18} className="text-emerald-600" />
                Cognitive Layer (AI Agent)
              </h4>
              <p className="text-sm text-slate-600 mb-4">
                Runs on local LLM nodes, taking summary data tables to interpret trends and recommend actions.
              </p>
              <ul className="space-y-2.5 text-sm text-slate-600">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Variance Diagnostics:</strong> Explains discrepancies between actual vs. theoretical usage.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Demand Forecasting:</strong> Extrapolates volume requirements from historical seasonal trends.</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={16} className="text-emerald-600 mt-0.5 flex-shrink-0" />
                  <span><strong>Strategic Recommendations:</strong> Advises on menu pricing, vendor shifts, and waste reduction.</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-slate-700">
            This aligns with real-world system design principles: let SQL/DuckDB and math do the heavy calculation, and deploy the language model exclusively for contextual analysis, reasoning, and qualitative recommendation summaries.
          </p>
        </section>

        {/* Prototype Showcase (Interactive!) */}
        <section id="prototype" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <LayoutDashboard className="text-emerald-600" size={24} />
            High-Fidelity Interface Prototype
          </h2>
          <p className="text-lg leading-relaxed mb-8">
            Click the tabs below to explore the core modules of the DishFlow prototype.
          </p>

          {/* Interactive Tabs */}
          <div className="bg-white border border-slate-200 rounded-2xl shadow-md overflow-hidden">
            {/* Tab Headers */}
            <div className="flex flex-wrap gap-2 p-3 bg-slate-900 border-b border-slate-800 overflow-x-auto scrollbar-none">
              {(Object.keys(tabInfo) as TabType[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 min-w-[150px] px-5 py-3 text-center font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 outline-none flex items-center justify-center gap-2 ${
                    activeTab === tab
                      ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-950/20'
                      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/60'
                  }`}
                >
                  {tab === 'dashboard' && <LayoutDashboard size={14} />}
                  {tab === 'recipes' && <ChefHat size={14} />}
                  {tab === 'sales' && <Activity size={14} />}
                  {tab === 'procurement' && <ShoppingCart size={14} />}
                  {tabInfo[tab].title}
                </button>
              ))}
            </div>

            {/* Tab Body */}
            <div className="p-6 md:p-8">
              <div className="grid lg:grid-cols-5 gap-8 items-start">
                <div className="lg:col-span-2 space-y-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600">Active Module</span>
                    <h3 className="text-2xl font-bold text-slate-900 mt-1">{tabInfo[activeTab].title}</h3>
                    <p className="text-sm font-medium text-slate-500 mt-0.5">{tabInfo[activeTab].subtitle}</p>
                  </div>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {tabInfo[activeTab].description}
                  </p>
                  <div className="border-t border-slate-100 pt-4">
                    <h4 className="text-xs font-bold uppercase text-slate-900 tracking-wider mb-2">Key Screen Features</h4>
                    <ul className="space-y-2">
                      {tabInfo[activeTab].bullets.map((bullet, index) => (
                        <li key={index} className="flex items-start gap-2 text-xs text-slate-600 leading-relaxed">
                          <CheckCircle2 size={14} className="text-emerald-500 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="lg:col-span-3">
                  <div className="bg-slate-900 p-2 rounded-2xl shadow-lg border border-slate-800 overflow-hidden group">
                    <div className="flex gap-1.5 mb-2 px-2 pt-1">
                      <div className="w-2.5 h-2.5 rounded-full bg-rose-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500"></div>
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500"></div>
                    </div>
                    <div className="relative overflow-hidden rounded-lg bg-slate-950 aspect-[4/3]">
                      <img 
                        src={tabInfo[activeTab].image} 
                        alt={tabInfo[activeTab].title}
                        className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scalability */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <Layers className="text-emerald-600" size={24} />
            Scalability & Future Architecture
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            While scoped for single-outlet operations during the initial sprint, the database schema and API routing models were structured to support multi-outlet franchises from day one:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <Database size={18} className="text-emerald-600" />
                Central Kitchen Dispatch
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Supports cross-outlet ingredient transfers and central warehouse allocation, permitting franchise-level replenishment commands based on sub-outlet demands.
              </p>
            </div>
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
              <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                <TrendingUp size={18} className="text-emerald-600" />
                POS-Agnostic Ingestion
              </h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Utilizes a unified adapter interface, meaning changing a restaurant client from Toast to Restroworks or Petpooja requires changing an integration key without rewrite of the core deduction pipeline.
              </p>
            </div>
          </div>
        </section>

        {/* Conclusion / Summary */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-6 flex items-center gap-2">
            <CheckCircle2 className="text-emerald-600" size={24} />
            Why This Approach Works
          </h2>
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed">
            <p>
              Drawing on experience building integration pipelines and retrieval architectures, my design approach emphasizes <strong>where technology can genuinely provide business leverage</strong>.
            </p>
            <p className="mt-4">
              By prioritizing the boundary between deterministic math (for calculations) and predictive models (for context interpretation), DishFlow remains fast, highly accurate, and affordable to scale. The prototype moves inventory tools out of the spreadsheet era and into active operation partners for restaurant teams.
            </p>
          </div>
        </section>

        {/* Footnote */}
        <footer className="border-t border-slate-200 pt-8 mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors font-medium"
          >
            <ArrowLeft size={16} />
            Back to Home
          </button>
          <span className="text-xs text-slate-400">
            Case Study compiled inside 36 hours. All Mockup UI designs generated and validated.
          </span>
        </footer>
      </article>
    </div>
  );
};

export default DishFlowCaseStudy;
