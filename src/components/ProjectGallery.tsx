import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import Modal from './ui/Modal';
import { Project } from '../types';

const ProjectGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
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
      image: '/Project 1.png'
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
      image: '/Project 2.png'
    },
    {
      id: '3',
      title: 'HerbTech Smart Cultivation System',
      description: 'AI-driven smart farming prototype for monitoring and automated irrigation',
      tools: ['ChatGPT', 'Perplexity AI', 'Cursor', 'Miro', 'Excalidraw'],
      outcomes: [
        'Functional AI-generated MVP for automation + monitoring',
        'Validated feasibility with iterative feedback',
        'Up to 60% faster ideation-to-MVP using AI tools'
      ],
      details:
        'Conceptualized and designed a smart cultivation system. Defined requirements, user journeys, and built a front-end simulation of the IoT interface using AI-assisted tools; produced architecture and flow diagrams for clarity.',
      metrics: '60% faster prototype • 35% projected water savings • 25% efficiency gains',
      role:
        'AI Product Manager leading ideation and prototype design using generative AI tools.',
      image: '/Project 3.png',
      link: 'https://github.com/code-red-Marshall/herbtech-smart-cultivation'
    },
    {
      id: '4',
      title: 'InvestQuest',
      description: 'Financial intelligence assistant prototype with AI insights and dashboards',
      tools: ['ChatGPT', 'Perplexity AI', 'Cursor', 'Miro', 'Excalidraw'],
      outcomes: [
        'Clickable prototype with portfolio analytics and Q&A',
        '50% faster MVP development speed',
        'Early feedback validated feature priorities and usability'
      ],
      details:
        'Ideated and prototyped an AI-powered assistant to simplify market analysis. Built high-fidelity concept flows, dashboards, and interactions to showcase insights and decision support.',
      metrics: '~50% faster build • 80% of testers found insights clear & actionable',
      role:
        'AI Product Manager & Prototype Developer responsible for user flows and high-fidelity concept.',
      image: '/Project 4.png',
      link: 'https://github.com/code-red-Marshall/InvestQuest'
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
      image: '/Project 5.png',
      link: 'https://github.com/code-red-Marshall/Sentiment-Analysis-Social-Buzz'
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
      image: '/Project 6.png',
      link: 'https://github.com/code-red-Marshall/Pharmabot--LLM-chatbot'
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
      image: '/Project 7.png'
    }
  ];

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
          <h2 className="text-4xl font-bold text-slate-900 mb-4">My Work</h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A showcase of products and systems I've built, each solving real problems with measurable impact.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group hover:scale-105"
              onClick={() => openModal(project)}
            >
              {project.image && (
                <div className="h-48 overflow-hidden rounded-t-xl">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
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