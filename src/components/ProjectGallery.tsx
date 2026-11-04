import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Modal from './ui/Modal';
import { Project } from '../types';

const ProjectGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: '12',
      title: 'WhatsApp Campaign Manager',
      description: 'A WhatsApp campaign workflow built as a native module within the existing enterprise Campaign Manager.',
      tools: ['Meta WhatsApp Business Platform', 'Play Framework', 'Scala', 'MySQL', 'Webhooks'],
      outcomes: [
        'Designed the production workflow around the platform’s existing data boundaries',
        'Worked through campaign execution and operational safety requirements',
        'Used a standalone prototype to explore the workflow before the native production implementation'
      ],
      details: 'Independently owned the WhatsApp campaign product from prototype through production. Designed the UX/UI and built the frontend, backend and Meta WhatsApp Business Platform integration for a Vercel-hosted Next.js/Supabase prototype, then implemented the production version natively in the existing Play/Scala Campaign Manager. Used Claude Code as an AI-assisted development tool while retaining responsibility for product decisions, implementation, integration and delivery.',
      metrics: '8 campaigns launched • 110,000+ distinct users in aggregate campaign audiences',
      role: 'Solo end-to-end builder — product, UX/UI, frontend, backend and production implementation; AI-assisted with Claude Code',
      image: '/whatsapp-campaign-thumbnail.png',
      link: 'https://whatsapp-campaign-manager-eta.vercel.app/',
      category: 'Work'
    },
    {
      id: '11',
      title: 'Solutions Central',
      description: 'Internal product built primarily for Solutions Consultants within the Solutions Engineering team, connecting request intake, project tracking, knowledge search and in-workflow assistance.',
      tools: ['Next.js', 'Python', 'GitHub API', 'Chrome Extension', 'Confluence API'],
      outcomes: [
        'Designed and built an end-to-end self-serve knowledge hub and Chrome assistant solo',
        'Automated ingestion via Python & Graph API, diffing and committing changes every 15 minutes',
        'Integrated BM25 search index over solution requests, RFPs, and docs with role-scoped auth'
      ],
      details: 'Designed and built Solutions Central primarily for internal use by Solutions Consultants within the Solutions Engineering team. The platform connects request intake, project context and knowledge discovery: it pulls information from MS Forms/SharePoint Excel through a Python Graph API integration, maintains versioned Markdown and JSON in GitHub, and presents a Next.js dashboard. I also built a Confluence-native project tracker and a Chrome side-panel assistant with Okapi BM25 search, source citations and invite-code role authentication.',
      metrics: 'Built primarily for Solutions Consultants within Solutions Engineering',
      role: 'Solutions Engineer — product design and end-to-end implementation for Solutions Consultants',
      image: '/solutions-central-thumbnail.jpg',
      category: 'Work'
    },
    {
      id: '1',
      title: 'Switchfly API Integration',
      description: 'Integrated travel tech (hotels, cabs, experiences) into HR SaaS platform',
      tools: ['Postman', 'Miro', 'Google Analytics', 'JIRA', 'Confluence'],
      outcomes: [
        'Integrated travel inventory into the existing employee rewards experience',
        'Coordinated API validation, requirements, QA and release preparation',
        'Supported rollout and post-launch feedback tracking'
      ],
      details:
        'Coordinated the Switchfly integration into the HR Tech SaaS platform to add travel and experience redemptions. Worked across requirements, API validation with Switchfly, stakeholder communication, QA coordination, launch planning and post-launch feedback.',
      metrics: 'Adoption and commercial outcomes not yet quantified.',
      role:
        'Associate Project Coordinator — coordinating engineering, design and business stakeholders through API integration, QA and go-live.',
      image: '/Project 1.webp',
      category: 'Work'
    },
    {
      id: '2',
      title: 'Snappy API Integration',
      description: 'Swag Store upgrade: merchandise redemption with customizable branding',
      tools: ['Postman', 'Miro', 'JIRA', 'Google Analytics', 'Confluence'],
      outcomes: [
        'Integrated a merchandise redemption partner into the Swag Store experience',
        'Coordinated requirements, logistics validation, engineering and QA',
        'Supported launch feedback and adoption tracking'
      ],
      details:
        'Supported delivery of the Snappy integration as an e-commerce redemption channel. Worked on requirements, logistics validation, engineering coordination during the backend changes, QA and post-launch feedback tracking.',
      metrics: 'Adoption and commercial outcomes not yet quantified.',
      role:
        'Associate Project Coordinator — supporting requirements, partner integration, engineering coordination, QA and launch follow-through.',
      image: '/Project 2.webp',
      category: 'Work'
    },
    {
      id: '3',
      title: 'Drops: Smart Irrigation System',
      description: 'A plug-and-play smart irrigation kit for urban plant owners featuring a single-unit water tank, electronics hub, and a coiled stretchable probe.',
      tools: ['ESP32', 'Firebase', 'Flutter', 'Wi-Fi', 'Fusion 360', 'IoT'],
      outcomes: [
        'Designed a single-unit hardware prototype integrating a 1.2L reservoir, ESP32, and a patentable magnetic coiled probe.',
        'Created a three-stream business model yielding a 48% gross margin with clear path to profitability by Year 2.',
        'Developed system automation logic via companion Flutter app for real-time soil moisture thresholds and Firebase sync.'
      ],
      details:
        'Led end-to-end development of Drops, a smart irrigation solution for urban gardeners. Designed the hardware layout integrating a 1.2L food-grade water tank with a submersible DC pump and ESP32 hub that connects via a magnetic port to a stretchable coiled soil probe. Drafted the commercial strategy, including unit economics (INR 1,299 COGS vs. INR 2,500 retail), supply chain sourcing across local manufacturing hubs, and prepared the financial model for an INR 60 Lakh seed round to fund the 500-unit pilot launch.',
      metrics: '48% Gross Margin • 500-Unit Pilot • INR 87.5L Yr 2 Revenue Projection',
      role:
        'Lead Product Manager directing product lifecycle, hardware-software integration, and business forecasting.',
      image: '/Project 3.webp',
      link: 'https://github.com/code-red-Marshall/drops-smart-irrigation',
      category: 'Personal'
    },
    {
      id: '5',
      title: 'Sentiment Analysis: Social Buzz',
      description: 'Analytics + visualization to guide content strategy from engagement + sentiment',
      tools: ['Python', 'pandas', 'numpy', 'Matplotlib', 'Seaborn', 'Plotly', 'Jupyter'],
      outcomes: [
        'Identified top-performing categories and optimal posting times',
        'Revealed formats with highest positive sentiment and engagement',
        'Informed evidence-driven content planning'
      ],
      details:
        'Built a pipeline to mine engagement, content types, and timing. Delivered exploratory analyses and visualizations to distill actionable recommendations for content teams.',
      metrics:
        'Improved planning clarity • better scheduling • alignment to positive sentiment',
      role:
        'Product strategist + data analyst defining goals, data model, and insight delivery.',
      image: '/Project 5.webp',
      link: 'https://github.com/code-red-Marshall/Sentiment-Analysis-Social-Buzz',
      category: 'Internship'
    },
    {
      id: '9',
      title: "SMS/Email Spam Classifier",
      description: "End-to-end machine learning pipeline for real-time spam detection using NLP techniques and Naive Bayes algorithm.",
      tools: ["Python", "Scikit-learn", "NLTK", "Pandas", "Streamlit"],
      image: "/spam-classifier-thumbnail.webp",
      outcomes: [
        "Achieved 99%+ precision on test data",
        "Built full EDA and preprocessing pipeline",
        "Developed production-ready Streamlit app"
      ],
      details: "Developed a comprehensive machine learning application that identifies spam messages with high precision. The project implementation involved systematic data cleaning, exploratory data analysis of message patterns, and a multi-stage NLP preprocessing pipeline. The final model utilizes a Naive Bayes algorithm, optimized for high precision to minimize false positives.",
      metrics: "99%+ Precision • 7-Step Pipeline • Real-time Detection",
      role: "ML Engineer",
      link: "https://email-sms-spam-classifier-erf7teejfi7xyzdy8ejsml.streamlit.app/",
      category: 'Internship'
    },
    {
      id: '6',
      title: 'Pharmabot — LLM Chatbot for Drug Classification',
      description: 'RAG-enhanced LLM chatbot for reliable drug classification and QA',
      tools: ['LangChain', 'LangGraph', 'HuggingFace', 'Streamlit', 'Python', 'RAG'],
      outcomes: [
        'Production-ready chatbot grounded in pharmaceutical data',
        'Improved response accuracy via custom routing and prompts',
        'Reduced hallucinations with retrieval checks'
      ],
      details:
        'Built a domain-specific chatbot with a robust RAG pipeline, Streamlit front end, and tuned prompts to ensure grounded, interpretable outputs.',
      metrics: '95% accurate classification • 40% faster responses • near-zero hallucinations',
      role:
        'LLM Developer Intern leading architecture, front end, and deployment.',
      image: '/Project 6.webp',
      link: 'https://github.com/code-red-Marshall/Pharmabot--LLM-chatbot',
      category: 'Internship'
    },
    {
      id: '7',
      title: 'Hallucination-Free RAG Model',
      description: 'Self-correcting RAG with routing, grading, and validation for factuality',
      tools: ['LangGraph', 'GPT4All Embeddings', 'ChromaDB', 'Python', 'RAG', 'LLM Eval'],
      outcomes: [
        '95% grounded response accuracy across test prompts',
        '<3% hallucination rate via validation + feedback loop',
        'Modular architecture adaptable to multiple domains'
      ],
      details:
        'Designed a node-based flow with dynamic retrieval and hallucination grading. Added automated ingestion and refinement to keep responses on-topic and grounded.',
      metrics: '95% grounding • <3% hallucination • 100% automated ingestion',
      role:
        'AI Research Developer designing, implementing, and evaluating the full system.',
      image: '/Project 7.webp',
      category: 'Personal'
    },
    {
      id: '8',
      title: 'Breakage Intelligence Lab',
      description: 'Privacy-first AI analytics platform for automated cohort analysis and QA',
      tools: ['Next.js', 'FastAPI', 'DuckDB', 'Ollama', 'React', 'Tailwind CSS'],
      outcomes: [
        'Combined transaction data preparation with cohort analytics and reporting',
        'Explored natural-language access to analytics using a local LLM',
        'Designed the workflow to keep analytical calculations grounded in structured data'
      ],
      details: 'Built RedemptionIQ, a multi-layer analytics platform that ingests server dumps and serves an executive dashboard. Included an intent-parsing AI chat interface powered by a local Llama 3 model for secure, natural language analytics queries without raw SQL exposure.',
      metrics: 'Performance and usage metrics to be added after verification.',
      role: 'AI & Analytics Developer building the frontend, backend, and deterministic AI pipeline.',
      image: '/breakage-intelligence-final.webp',
      category: 'Work'
    },
    {
      id: '10',
      title: 'ECG-based Biometric Identification',
      description: 'Patient classification and biometric recognition using ANN models and the Pan-Tompkins algorithm on ECG signals.',
      tools: ['Python', 'TensorFlow', 'Keras', 'Scikit-learn', 'Signal Processing'],
      outcomes: [
        '95%+ identification accuracy',
        'Automated R-peak detection using Pan-Tompkins',
        'High-precision ANN model for feature classification'
      ],
      details:
        'Developed a deep learning pipeline for patient classification and biometric identification using the PTB Diagnostic ECG Database. Implemented the Pan-Tompkins algorithm for robust R-peak detection and built a multi-layer ANN using TensorFlow/Keras to classify subjects based on morphological heart patterns.',
      metrics: '95%+ Accuracy • 310 Recordings • Real-time Extraction',
      role:
        'ML Research Engineer investigating feature selection and SVM performance on biomedical data.',
      image: '/ecg-biometric-thumbnail.webp',
      link: 'https://github.com/code-red-Marshall/Biometric-Human-Identification-using-ECG.git',
      category: 'Academic'
    }
  ];

  const workPriority = ['12', '11', '8', '1', '2'];
  const workProjects = projects
    .filter(project => project.category === 'Work')
    .sort((a, b) => workPriority.indexOf(a.id) - workPriority.indexOf(b.id));
  const secondaryProjects = projects.filter(project => project.category !== 'Work');

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  const renderProjectCard = (project: Project, compact = false) => (
    <article
      key={project.id}
      className={`group cursor-pointer rounded-2xl border border-[#d9ddd4] bg-[#f8f7f2] p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#aab8aa] hover:shadow-md ${compact ? 'opacity-90' : ''} ${project.id === '12' && !compact ? 'md:col-span-2' : ''}`}
      onClick={() => openModal(project)}
    >
      {project.image && (
        <div className={`overflow-hidden rounded-xl bg-[#e3e5dc] ring-1 ring-[#d8dbd3] ${compact ? 'aspect-[16/9] max-h-[150px]' : 'aspect-[16/9] max-h-[190px]'}`}>
          <img src={project.image} alt={project.title} loading="lazy" decoding="async"
            className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.025]" />
        </div>
      )}
      <div className={compact ? 'pt-3' : 'pt-4'}>
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className={`${compact ? 'text-xl' : 'text-2xl'} font-semibold tracking-[-0.04em] text-[#17221f] transition-colors group-hover:text-[#587263]`}>{project.title}</h3>
          <ExternalLink className="mt-1 shrink-0 text-[#7b887f] transition-colors group-hover:text-[#17221f]" size={16} />
        </div>
        <p className="mb-3 text-[13px] leading-5 text-[#66736c] line-clamp-3">{project.description}</p>
        <div className="mb-3 flex flex-wrap gap-1.5">
          {project.tools.slice(0, compact ? 2 : 3).map((tool, index) => (
            <span key={index} className="border border-[#d6d9d1] px-3 py-1 text-[11px] font-medium text-[#69766e]">{tool}</span>
          ))}
          {project.tools.length > (compact ? 2 : 3) && (
            <span className="px-3 py-1 text-[11px] font-medium text-[#7b887f]">+{project.tools.length - (compact ? 2 : 3)} more</span>
          )}
        </div>
        {!compact && (
          <div className="mt-5 space-y-2 border-t border-[#d8dbd3] pt-4">
            {project.outcomes.slice(0, 2).map((outcome, index) => (
              <div key={index} className="flex items-start gap-2">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#718777]" />
                <span className="text-xs leading-5 text-[#66736c]">{outcome}</span>
              </div>
            ))}
          </div>
        )}
        {project.link && !project.link.includes('github.com') && (
          <div className="mt-4 flex items-center justify-between border-t border-[#d8dbd3] pt-3">
            <span className="text-xs font-medium text-[#7b887f]">Prototype preview</span>
            <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1.5 border border-[#c8cec5] px-3 py-1 text-xs font-semibold text-[#365344] transition-colors hover:bg-[#e7ebe4]">
              Explore <ExternalLink size={12} />
            </a>
          </div>
        )}
      </div>
    </article>
  );

  return (
    <section id="projects" className="bg-[#f4f2ed] px-6 py-20 text-[#17221f] lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 grid gap-6 border-t border-[#d3d5cc] pt-8 md:grid-cols-[0.65fr_1.35fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#718077]">Selected work / 2024—26</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em]">Products, not just projects.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#66736c] md:justify-self-end">
            Professional product work first. Independent experiments and research sit separately, adding technical range without competing with the work delivered in a business environment.
          </p>
        </div>

        <section aria-labelledby="professional-work-heading">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#718077]">01 / Professional experience</p>
              <h3 id="professional-work-heading" className="mt-2 text-3xl font-semibold tracking-[-0.045em]">Work-related products</h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#718077]">Products and integrations delivered in a professional environment.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {workProjects.map(project => renderProjectCard(project))}
          </div>
        </section>

        <section aria-labelledby="independent-projects-heading" className="mt-24 border-t border-[#d3d5cc] pt-10">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8a948b]">02 / Beyond the day job</p>
              <h3 id="independent-projects-heading" className="mt-2 text-2xl font-semibold tracking-[-0.04em] text-[#46564d]">Independent, internship & research projects</h3>
            </div>
            <p className="max-w-sm text-sm leading-6 text-[#879188]">Selected experiments and academic work. Useful context, with less emphasis than professional delivery.</p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {secondaryProjects.map(project => renderProjectCard(project, true))}
          </div>
        </section>
      </div>
      <Modal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </section>
  );
};

export default ProjectGallery;