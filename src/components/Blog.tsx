import React from 'react';
import { BarChart3, Cloud, Activity, ExternalLink } from 'lucide-react';

type BlogPost = {
  title: string;
  url: string;
  // tailwind classes for gradient background
  bgClass: string;
  // icon component to render
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const posts: BlogPost[] = [
  {
    title: 'The First Data Expedition: From FIFA 23 Dataset to Insights',
    url: 'https://medium.com/@bhargavnth07/the-first-data-expedition-from-fifa-23-dataset-to-insights-cde47a5437e2',
    bgClass: 'from-blue-500 via-sky-500 to-cyan-400',
    Icon: BarChart3,
  },
  {
    title: 'Mounting Amazon S3 Bucket to Databricks',
    url: 'https://medium.com/@bhargavnth07/mounting-amazon-s3-bucket-to-databricks-2ad695ec4073',
    bgClass: 'from-amber-500 via-orange-500 to-rose-500',
    Icon: Cloud,
  },
  {
    title: 'Biometric Human Identification for Patient Classification using ECG',
    url: 'https://medium.com/@bhargavnth07/biometric-human-identification-for-patient-classification-using-ecg-b05f51846194',
    bgClass: 'from-emerald-500 via-teal-500 to-cyan-500',
    Icon: Activity,
  },
];

const Blog: React.FC = () => {
  return (
    <section id="blog" className="px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Blog</h2>
          <p className="mt-3 text-slate-600">Writing about data, AI, and building useful systems.</p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <a
              key={post.url}
              href={post.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block rounded-xl overflow-hidden border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all"
            >
              <div className={`aspect-video overflow-hidden bg-gradient-to-br ${post.bgClass} relative`}>
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.35),transparent_45%),radial-gradient(circle_at_70%_60%,rgba(255,255,255,0.2),transparent_45%)]" />
                <div className="relative w-full h-full flex items-center justify-center">
                  <post.Icon className="text-white/90 drop-shadow-lg" size={56} />
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900 leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-slate-500 inline-flex items-center gap-1">
                  medium.com <ExternalLink size={14} className="text-slate-400" />
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;


