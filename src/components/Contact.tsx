import React from 'react';
import { Mail, MapPin, Linkedin, Download, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Ready to build something amazing together? Let's discuss how we can create products that matter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <div className="space-y-4">
                <a
                  href="mailto:bhargav@example.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="bg-slate-700 p-3 rounded-lg group-hover:bg-slate-600 transition-colors">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm">bhargav@example.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300">
                  <div className="bg-slate-700 p-3 rounded-lg">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm">India (Open to Remote)</p>
                  </div>
                </div>

                <a
                  href="https://linkedin.com/in/bhargav-nath"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="bg-slate-700 p-3 rounded-lg group-hover:bg-slate-600 transition-colors">
                    <Linkedin size={20} />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm">Connect professionally</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Quick Actions</h4>
              <div className="flex flex-wrap gap-4">
                <button className="inline-flex items-center gap-2 bg-white text-slate-900 px-6 py-3 rounded-lg font-medium hover:bg-slate-50 transition-all duration-200 hover:scale-105">
                  <Download size={18} />
                  Download Resume
                </button>
                <button className="inline-flex items-center gap-2 bg-slate-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-600 transition-all duration-200 hover:scale-105">
                  <ExternalLink size={18} />
                  Schedule Call
                </button>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <h3 className="text-xl font-semibold mb-4">Looking for:</h3>
            <div className="space-y-3">
              {[
                'Associate Product Manager roles',
                'Product Analyst positions',
                'AI/ML product opportunities',
                'Consulting projects',
                'Speaking engagements',
                'Collaboration opportunities'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                  <span className="text-slate-300">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-white/10 rounded-lg">
              <p className="text-sm text-slate-300 italic">
                "The best products are built when diverse minds come together with a shared vision. Let's create something meaningful."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;