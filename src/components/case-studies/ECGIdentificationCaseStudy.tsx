import React, { useEffect } from 'react';
import { 
  ArrowLeft, Heart, Activity, Brain, Shield, 
  CheckCircle, Zap, Cpu, BarChart3, TrendingUp
} from 'lucide-react';

const ECGIdentificationCaseStudy: React.FC<{ onBack: () => void }> = ({ onBack }) => {
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
        {/* Hero Section */}
        <header className="mb-20 animate-fade-in">
          <div className="flex flex-wrap items-center gap-4 mb-6">
            <div className="inline-block px-4 py-1.5 bg-blue-100 text-blue-700 font-semibold tracking-wide rounded-full text-sm border border-blue-200">
              Biometric Research
            </div>
            <div className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-700 font-semibold tracking-wide rounded-full text-sm border border-indigo-200">
              Deep Learning
            </div>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-6 leading-tight tracking-tight">
            ECG-based Biometric <span className="text-blue-600 block md:inline mt-2 md:mt-0">Identification</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 font-light border-l-4 border-blue-500 pl-6 leading-relaxed">
            Patient Classification and Recognition using ANN Models and Pan-Tompkins Algorithm
          </p>

          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                <Shield className="text-blue-600" size={20}/> 
                Project Details
              </h3>
              <ul className="space-y-3 text-slate-600">
                <li><strong className="text-slate-900">Role:</strong> ML Research Engineer</li>
                <li><strong className="text-slate-900">Dataset:</strong> PTB Diagnostic ECG Database</li>
                <li><strong className="text-slate-900">Models:</strong> ANN (TensorFlow/Keras), Pan-Tompkins Algo</li>
              </ul>
            </div>
            <div>
              <h3 className="text-slate-900 font-bold mb-4 flex items-center gap-2">
                <Cpu className="text-blue-600" size={20}/> 
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {['Python', 'TensorFlow', 'Keras', 'NumPy', 'Pandas', 'Scikit-learn', 'Signal Processing'].map(tech => (
                  <span key={tech} className="px-3 py-1 bg-slate-100 border border-slate-200 rounded-lg text-sm text-slate-700 font-medium">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        {/* 1. Project Overview */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 border-b border-slate-200 pb-4">Project Overview</h2>
          <div className="prose prose-slate max-w-none text-lg leading-relaxed text-slate-600">
            <p>
              This project focuses on identifying individuals through the unique electrical activity of their hearts. By measuring <strong>P, Q, R, S, and T waves</strong>, we can extract distinctive biometric markers that are intrinsically tied to an individual's physiology.
            </p>
            <p className="mt-4">
              The core of the system is a <strong>deep learning ANN model</strong> integrated with precise signal processing techniques like the <strong>Pan-Tompkins Algorithm</strong> for real-time R-peak detection.
            </p>
            <div className="bg-blue-50 border border-blue-100 p-6 rounded-xl mt-6">
              <p className="text-blue-800 font-medium m-0 flex gap-3 items-start">
                <Activity className="shrink-0 mt-1" size={20} />
                <span>The <strong>QRS complex</strong> serves as the primary feature for classification due to its critical representation of ventricular activity.</span>
              </p>
            </div>
          </div>
        </section>

        {/* 2. Technical Methodology */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Methodology & Workflow</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-10">
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Zap className="text-amber-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pan-Tompkins Algorithm</h3>
              <p className="text-slate-600 text-sm">
                Utilized a <strong>Moving Integrated Window</strong> approach for robust R peak detection. This minimizes interference from noise and baseline wander, ensuring high-fidelity extraction of cardiac beats.
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
              <Brain className="text-indigo-500 mb-4" size={32} />
              <h3 className="text-xl font-bold text-slate-900 mb-3">Artificial Neural Network</h3>
              <p className="text-slate-600 text-sm">
                Built using <strong>TensorFlow and Keras</strong>, the model features multiple dense layers with optimized activation functions to map complex morphological features to specific patient identifies.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border border-slate-200 rounded-xl p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-6">7-Stage Pipeline</h3>
            <div className="space-y-4">
              {[
                { step: '1. Import Libraries', detail: 'NumPy, Pandas, TensorFlow, Keras, SKLearn' },
                { step: '2. Data Preprocessing', detail: 'Label encoding, splitting PTB Diagnostic ECG Database' },
                { step: '3. Model Architecture', detail: 'Multi-layer ANN with Dense layers' },
                { step: '4. Model Training', detail: 'Optimized via cross-entropy loss and accuracy metrics' },
                { step: '5. Model Evaluation', detail: 'F1-score, Precision, Recall tracking' },
                { step: '6. Live Predictions', detail: 'Classification on unseen cardiac recordings' },
                { step: '7. Performance Analysis', detail: 'ROC Curves, Confusion Matrix, and loss visualization' }
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white text-xs font-bold shrink-0">{i+1}</div>
                  <div>
                    <h4 className="text-slate-900 font-bold text-sm">{item.step}</h4>
                    <p className="text-slate-500 text-xs">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Results & Evaluation */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 border-b border-slate-200 pb-4">Performance Metrics</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="bg-white shadow-sm p-6 rounded-xl border border-slate-200 text-center">
              <TrendingUp className="text-blue-500 mx-auto mb-4" size={32} />
              <div className="text-3xl font-bold text-slate-900 mb-2">95%+</div>
              <div className="text-slate-600 text-sm font-medium">Model Accuracy</div>
            </div>
            <div className="bg-white shadow-sm p-6 rounded-xl border border-slate-200 text-center">
               <Heart className="text-rose-500 mx-auto mb-4" size={32} />
               <div className="text-3xl font-bold text-slate-900 mb-2">PTB</div>
               <div className="text-slate-600 text-sm font-medium">Gold Standard Dataset</div>
            </div>
            <div className="bg-white shadow-sm p-6 rounded-xl border border-slate-200 text-center">
               <BarChart3 className="text-blue-500 mx-auto mb-4" size={32} />
               <div className="text-3xl font-bold text-slate-900 mb-2">ROC</div>
               <div className="text-slate-600 text-sm font-medium">Superior AUC Scores</div>
            </div>
             <div className="bg-white shadow-sm p-6 rounded-xl border border-slate-200 text-center">
               <Shield className="text-indigo-500 mx-auto mb-4" size={32} />
               <div className="text-3xl font-bold text-slate-900 mb-2">0.9+</div>
               <div className="text-slate-600 text-sm font-medium">F1-Score / Precision</div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 mb-4">Key Takeaways</h3>
            <p className="text-slate-600 mb-6">
              The project successfully demonstrated that a deep learning approach, combined with traditional signal processing like Pan-Tompkins, can create a highly reliable biometric recognition system.
            </p>
            <ul className="space-y-3">
              {[
                'Robust R-peak detection in noisy environments',
                'Scalable deep learning architecture for biometric data',
                'Comprehensive evaluation using state-of-the-art metrics',
                'End-to-end pipeline from raw data to prediction'
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-slate-600">
                  <CheckCircle className="text-blue-600 shrink-0" size={20} />
                  <span className="font-medium">{item}</span>
                </li>
              ))}
            </ul>
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

export default ECGIdentificationCaseStudy;
