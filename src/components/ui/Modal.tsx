import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
import { Project } from '../../types';

interface ModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ project, isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      // Prevent background scroll without jumping the page position
      const scrollY = window.scrollY;
      const root = document.documentElement;
      // Disable smooth scroll to avoid weird jumps during open/close
      const previousScrollBehavior = root.style.scrollBehavior;
      root.setAttribute('data-prev-scroll-behavior', previousScrollBehavior || '');
      root.style.scrollBehavior = 'auto';

      // Lock scroll on both html and body
      root.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';

      // Fix body position to prevent layout shift
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = '0';
      document.body.style.right = '0';
      document.body.style.width = '100%';
    } else {
      // Restore scroll position and body styles on close
      const top = document.body.style.top;
      const root = document.documentElement;
      const prev = root.getAttribute('data-prev-scroll-behavior') || '';
      root.style.scrollBehavior = prev;
      root.removeAttribute('data-prev-scroll-behavior');

      root.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      if (top) {
        const y = parseInt(top || '0', 10);
        window.scrollTo(0, -y);
      }
    }

    return () => {
      const top = document.body.style.top;
      const root = document.documentElement;
      const prev = root.getAttribute('data-prev-scroll-behavior') || '';
      root.style.scrollBehavior = prev;
      root.removeAttribute('data-prev-scroll-behavior');

      root.style.overflow = '';
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.left = '';
      document.body.style.right = '';
      document.body.style.width = '';
      if (top) {
        const y = parseInt(top || '0', 10);
        window.scrollTo(0, -y);
      }
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const content = (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in"
    >
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-scale-in">
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-slate-900">{project.title}</h2>
            <button
              onClick={onClose}
              className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {project.image && (
          <div className="w-full h-56 overflow-hidden rounded-t-2xl">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <div className="p-6 space-y-6">
          <p className="text-slate-600 leading-relaxed">{project.details}</p>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">My Role</h3>
            <p className="text-slate-600">{project.role}</p>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Tools & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-slate-100 text-slate-800 px-3 py-1 rounded-full text-sm font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-slate-900 mb-3">Key Outcomes</h3>
            <ul className="space-y-2">
              {project.outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                  <span className="text-slate-600">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>

          {project.metrics && (
            <div className="bg-emerald-50 p-4 rounded-lg">
              <h3 className="font-semibold text-emerald-800 mb-2">Impact Metrics</h3>
              <p className="text-emerald-700">{project.metrics}</p>
            </div>
          )}
          {project.link && (
            <div>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                View Project
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(content, document.body);
};

export default Modal;