import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Modal from './ui/Modal';
import { Project } from '../types';

const ProjectGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: '11',
      title: 'Solutions Central',
      description: 'Self-serve internal platform designed to turn a scattered intake process into a unified dashboard, Confluence project tracker, and Chrome assistant.',
      tools: ['Next.js', 'Python', 'GitHub API', 'Chrome Extension', 'Confluence API'],
      outcomes: [
        'Designed and built an end-to-end self-serve knowledge hub and Chrome assistant solo',
        'Automated ingestion via Python & Graph API, diffing and committing changes every 15 minutes',
        'Integrated BM25 search index over solution requests, RFPs, and docs with role-scoped auth'
      ],
      details: 'Designed, built, and shipped Solutions Central end-to-end. The platform programmatically pulls data from MS Forms/SharePoint Excel via a Python Graph API puller, writes them as versioned markdown and JSON files to a GitHub repository, and serves a live Next.js dashboard at request time. Built a Confluence-native project tracker that directly reads/writes pages to prevent drift, alongside a Chrome side-panel assistant for sales team queries featuring Okapi BM25 search indexing, source citations, and invite-code role authentication.',
      metrics: '289 requests tracked • Solo 0 to 1 Delivery • Real-time BM25 search',
      role: 'Solutions Engineer (Designed, built, and shipped end-to-end)',
      image: '/solutions-central-thumbnail.jpg',
      category: 'Work'
    },
    {
      id: '1',
      title: 'Switchfly API Integration',
      description: 'Integrated travel tech (hotels, cabs, experiences) into HR SaaS platform',
      tools: ['Postman', 'Miro', 'Google Analytics', 'JIRA', 'Confluence'],
      outcomes: [
        'Rolled out for 133 global clients across 37 countries',
        '$50K new revenue in first quarter',
        '+14% Monthly Active Users post-integration'
      ],
      details:
        'Led the integration of Switchfly into our HR Tech SaaS platform to enable travel and experience redemptions. Drove end-to-end delivery: requirements, API validation with Switchfly, stakeholder comms, launch planning, and analytics tracking to measure adoption.',
      metrics: '$50K revenue • 133 clients • +14% MAU',
      role:
        'Associate Product Manager coordinating engineering, design, and business; managed API integration, QA, and go-live.',
      image: '/Project 1.webp',
      category: 'Work'
    },
    {
      id: '2',
      title: 'Snappy API Integration',
      description: 'Swag Store upgrade: merchandise redemption with customizable branding',
      tools: ['Postman', 'Miro', 'JIRA', 'Google Analytics', 'Confluence'],
      outcomes: [
        'Launched across 30+ global clients with positive feedback',
        '$4K in first-quarter revenue (best-ever Swag Store performance)',
        'Boosted global engagement metrics'
      ],
      details:
        'Delivered end-to-end Snappy integration as an e-commerce redemption channel. Scoped requirements, validated logistics parameters, coordinated with engineering during backend renovation, led QA and post-launch feedback tracking.',
      metrics: '$4K Q1 revenue • 30+ clients • record engagement growth',
      role:
        'Associate Product Manager driving lifecycle across research, integration, QA, and adoption tracking.',
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
        'Automated analytics saving 4 hours per month',
        'Sub-100ms dashboard build via embedded DuckDB',
        '100% on-premise execution ensuring data privacy'
      ],
      details: 'Built RedemptionIQ, a multi-layer analytics platform that ingests server dumps and serves an executive dashboard. Included an intent-parsing AI chat interface powered by a local Llama 3 model for secure, natural language analytics queries without raw SQL exposure.',
      metrics: '4 hrs saved/mo • <100ms load time • 65.8M points analyzed',
      role: 'AI & Analytics Developer building the frontend, backend, and deterministic AI pipeline.',
      image: '/breakage-intelligence-final.webp',
      link: 'https://github.com/code-red-Marshall/Breakage-Intelligence-Lab',
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

  const [activeCategory, setActiveCategory] = useState<string>('Work');

  const categories = ['Work', 'Internship', 'Academic', 'Personal'];

  const filteredProjects = projects.filter(project => project.category === activeCategory);

  const openModal = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  // No carousel logic; simple grid layout

  return (
    <section id="projects" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Projects</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of products and systems I've built, each solving real problems with measurable impact.
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 animate-fade-in">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-slate-900 text-white shadow-md scale-105'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-[transform,box-shadow] duration-300 cursor-pointer group hover:-translate-y-1 contain-paint"
              onClick={() => openModal(project)}
            >
              {project.image && (
                <div className="h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 will-change-transform"
                  />
                </div>
              )}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-slate-900 group-hover:text-slate-700 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="text-slate-400 group-hover:text-slate-700 transition-colors flex-shrink-0" size={20} />
                </div>
                
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tools.slice(0, 3).map((tool, index) => (
                    <span
                      key={index}
                      className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 3 && (
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-sm font-medium">
                      +{project.tools.length - 3} more
                    </span>
                  )}
                </div>

                <div className="space-y-1">
                  {project.outcomes.slice(0, 2).map((outcome, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                      <span className="text-sm text-slate-600">{outcome}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
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