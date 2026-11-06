import React, { useEffect } from 'react';
import { ArrowLeft, Search, Workflow, Users, Database, CheckCircle2 } from 'lucide-react';
import ShareButton from '../ui/ShareButton';
import { getCaseStudyUrl } from '../../utils/routes';

const SolutionsCentralCaseStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const productAreas = [
    { icon: Workflow, title: 'Request intake and tracking', description: 'A shared view of incoming requests, ownership and delivery status, reducing the need to reconstruct context across disconnected tools.' },
    { icon: Database, title: 'Connected information', description: 'A structured way to bring request information and supporting knowledge together, with a clearer source of truth.' },
    { icon: Search, title: 'Search and knowledge discovery', description: 'A searchable knowledge experience that helps the team find related past work instead of repeatedly asking colleagues to locate it.' },
    { icon: Users, title: 'In-workflow assistance', description: 'A lightweight browser-based assistant that brings relevant knowledge closer to the sales workflow.' }
  ];

  const decisions = [
    ['Start with the workflow, not the interface', 'The problem crossed intake, tracking and knowledge retrieval. Treating each as a separate screen would preserve the handoffs that made the process difficult.'],
    ['Make existing knowledge easier to find', 'The team already had useful experience and documentation. Improving access to that material was more practical than asking people to create a parallel knowledge base.'],
    ['Meet users where they work', 'Different workflows benefited from different entry points: a dashboard for the internal team and a browser-based assistant for retrieving relevant knowledge closer to the point of work. The trade-off was maintaining multiple surfaces while drawing from connected information sources.']
  ];

  return (
    <div className="min-h-screen bg-[#f4f2ed] font-inter text-[#17221f]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#d8dbd3] bg-[#f4f2ed]/95 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-4">
          <button onClick={onBack} className="inline-flex items-center gap-2 text-sm font-medium text-[#59665f] hover:text-[#17221f]"><ArrowLeft size={18}/> Back to portfolio</button>
          <ShareButton url={getCaseStudyUrl('case-study-solutions-central')} variant="ghost" size="sm" label="Share case study"/>
        </div>
      </nav>

      <main className="mx-auto max-w-5xl px-5 pb-24 pt-32">
        <header className="mb-16">
          <div className="mb-5 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-wider text-violet-800">
            <span className="rounded-full border border-violet-200 bg-violet-50 px-3 py-1">Internal product</span>
            <span className="rounded-full border border-[#c8cec5] bg-white px-3 py-1">Workflow improvement</span>
            <span className="rounded-full border border-[#c8cec5] bg-white px-3 py-1">Knowledge discovery</span>
          </div>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#17221f] sm:text-6xl">Solutions Central</h1>
          <p className="max-w-3xl border-l-4 border-violet-500 pl-5 text-xl leading-relaxed text-[#59665f] sm:text-2xl">An internal product built primarily for Solutions Consultants within the Solutions Engineering team, making scattered requests, project context and past solutions easier to manage and find.</p>
          <div className="mt-8 grid gap-4 rounded-2xl border border-[#d8dbd3] bg-white p-6 sm:grid-cols-3">
            <div><p className="text-xs uppercase tracking-wider text-[#718077]">Users</p><p className="mt-1 font-semibold text-[#17221f]">Solutions Consultants (Solutions Engineering)</p></div>
            <div><p className="text-xs uppercase tracking-wider text-[#718077]">My role</p><p className="mt-1 font-semibold text-[#17221f]">Product design and implementation</p></div>
            <div><p className="text-xs uppercase tracking-wider text-[#718077]">Product scope</p><p className="mt-1 font-semibold text-[#17221f]">Intake · Tracking · Search</p></div>
          </div>
          <div className="mt-8 overflow-hidden rounded-2xl border border-[#d8dbd3] bg-white">
            <img src="/solutions-central-thumbnail.jpg" alt="Solutions Central internal product overview" className="h-auto w-full object-cover"/>
          </div>
        </header>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-700">01 · The problem</p>
          <h2 className="mb-5 text-3xl font-bold text-[#17221f]">Useful information was spread across too many places</h2>
          <div className="space-y-4 text-lg leading-relaxed text-[#59665f]">
            <p>Requests, project updates and previously delivered solutions lived across forms, spreadsheets, documentation and conversations. Moving between those sources created manual work and made it difficult to maintain a reliable view of what was happening.</p>
            <p>Finding out whether a similar request had been solved before often depended on knowing who to ask. The underlying knowledge existed, but it was not easy for the team to discover and reuse. I built Solutions Central primarily for Solutions Consultants within the Solutions Engineering team, grounding the product in their day-to-day workflows and information needs.</p>
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-700">02 · The product</p>
          <h2 className="mb-6 text-3xl font-bold text-[#17221f]">One connected experience for the team's everyday work</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {productAreas.map((area) => (
              <div key={area.title} className="rounded-xl border border-[#d8dbd3] bg-white p-6">
                <area.icon className="mb-4 text-violet-800" size={24}/>
                <h3 className="mb-2 text-lg font-semibold text-[#17221f]">{area.title}</h3>
                <p className="text-sm leading-relaxed text-[#66736c]">{area.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-700">03 · Product decisions</p>
          <h2 className="mb-6 text-3xl font-bold text-[#17221f]">Designing around how people actually work</h2>
          <div className="space-y-4">
            {decisions.map(([title, description], index) => (
              <div key={title} className="flex gap-4 rounded-xl border border-[#d8dbd3] bg-white p-5">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-violet-950 text-sm font-bold text-violet-800">{index + 1}</span>
                <div><h3 className="mb-2 font-semibold text-[#17221f]">{title}</h3><p className="text-sm leading-relaxed text-[#66736c]">{description}</p></div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-700">04 · Product surfaces</p>
          <h2 className="mb-5 text-3xl font-bold text-[#17221f]">A few connected views, designed for different jobs</h2>
          <div className="space-y-8">
            {[
              { title: 'Team dashboard', src: '/solutions-central-overview.png', alt: 'Solutions Central team dashboard' },
              { title: 'Request management', src: '/solutions-central-requests.png', alt: 'Solutions Central request management view' },
              { title: 'Project tracking', src: '/solutions-central-tracker.png', alt: 'Solutions Central project tracking view' },
              { title: 'Knowledge discovery', src: '/solutions-central-hub.png', alt: 'Solutions Central knowledge search view' }
            ].map((screen) => (
              <div key={screen.title}>
                <h3 className="mb-3 text-lg font-semibold text-[#17221f]">{screen.title}</h3>
                <div className="overflow-hidden rounded-xl border border-[#d8dbd3] bg-white p-2">
                  <img src={screen.src} alt={screen.alt} loading="lazy" className="h-auto w-full rounded-lg"/>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-2xl border border-[#d8dbd3] bg-white p-6 sm:p-8">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-violet-700">05 · What this work demonstrates</p>
          <h2 className="mb-5 text-3xl font-bold text-[#17221f]">Designing for real internal users, not just a demo</h2>
          <p className="mb-6 max-w-3xl leading-relaxed text-[#59665f]">Built primarily around the real internal workflows of Solutions Consultants in the Solutions Engineering team, Solutions Central brought together workflow mapping, information architecture, user needs and technical implementation. The key product move was to make existing information easier to maintain and reuse, rather than adding another disconnected place to store it.</p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div><Workflow className="mb-2 text-violet-800" size={22}/><h3 className="font-semibold text-[#17221f]">Workflow design</h3><p className="mt-1 text-sm text-[#66736c]">Connecting steps that previously relied on manual handoffs.</p></div>
            <div><Search className="mb-2 text-violet-800" size={22}/><h3 className="font-semibold text-[#17221f]">Information discovery</h3><p className="mt-1 text-sm text-[#66736c]">Making prior work easier to search and reuse.</p></div>
            <div><CheckCircle2 className="mb-2 text-violet-800" size={22}/><h3 className="font-semibold text-[#17221f]">Practical delivery</h3><p className="mt-1 text-sm text-[#66736c]">Building around existing team habits and tools.</p></div>
          </div>
        </section>

        <section className="border-t border-[#d8dbd3] pt-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-violet-700">05 · Measured impact</p>
          <h2 className="mt-2 text-2xl font-bold text-[#17221f]">Less manual coordination, faster solution delivery</h2>
          <div className="mt-6 grid gap-4">
            <div className="rounded-xl border border-[#d8dbd3] bg-white p-6">
              <p className="text-3xl font-bold tracking-tight text-[#17221f]">4 days / month</p>
              <p className="mt-2 text-sm leading-relaxed text-[#66736c]">Manual work saved for Solutions Consultants through connected intake, tracking and knowledge workflows.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SolutionsCentralCaseStudy;
