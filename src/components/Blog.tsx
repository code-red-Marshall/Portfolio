import React from 'react';
import { Activity, ArrowUpRight, BarChart3, Cloud, ExternalLink } from 'lucide-react';

type BlogPost = {
  title: string;
  url: string;
  topic: string;
  year: string;
  summary: string;
  Icon: React.ComponentType<{ size?: number; className?: string }>;
};

const posts: BlogPost[] = [
  {
    title: 'The First Data Expedition: From FIFA 23 Dataset to Insights',
    url: 'https://medium.com/@bhargavnth07/the-first-data-expedition-from-fifa-23-dataset-to-insights-cde47a5437e2',
    topic: 'Data exploration',
    year: 'Data science',
    summary: 'An exploratory analysis journey using the FIFA 23 dataset to surface patterns and turn raw data into insights.',
    Icon: BarChart3,
  },
  {
    title: 'Mounting Amazon S3 Bucket to Databricks',
    url: 'https://medium.com/@bhargavnth07/mounting-amazon-s3-bucket-to-databricks-2ad695ec4073',
    topic: 'Cloud & data engineering',
    year: 'Technical walkthrough',
    summary: 'A practical walkthrough connecting cloud storage with a Databricks workspace.',
    Icon: Cloud,
  },
  {
    title: 'Biometric Human Identification for Patient Classification using ECG',
    url: 'https://medium.com/@bhargavnth07/biometric-human-identification-for-patient-classification-using-ecg-b05f51846194',
    topic: 'Research',
    year: 'Biomedical signals',
    summary: 'Research writing on ECG signals and biometric identification for patient classification.',
    Icon: Activity,
  },
];

const Blog: React.FC = () => {
  const [featured, ...more] = posts;

  return (
    <section id="blog" className="bg-[#eeede6] px-6 py-20 text-[#17221f] lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 border-t border-[#d3d5cc] pt-8 md:grid-cols-[0.65fr_1.35fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#718077]">Notes, research & explorations</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em]">Ideas beyond the interface.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#66736c] md:justify-self-end">
            Writing from earlier explorations in data science, cloud infrastructure and biomedical research.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.12fr_0.88fr]">
          <a href={featured.url} target="_blank" rel="noopener noreferrer" className="group flex min-h-[360px] flex-col justify-between overflow-hidden rounded-2xl border border-[#d3d9cf] bg-[#e5eae1] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#aab8aa] hover:shadow-md sm:p-9">
            <div className="flex items-start justify-between gap-4">
              <span className="rounded-full border border-[#cbd5c9] bg-[#f4f5ef] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#587263]">{featured.topic}</span>
              <div className="rounded-xl border border-[#cbd5c9] bg-[#f4f5ef] p-3 text-[#587263]"><featured.Icon size={23}/></div>
            </div>
            <div className="mt-16">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#879188]">01 / Featured article · Medium</p>
              <h3 className="mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#17221f] sm:text-4xl">{featured.title}</h3>
              <p className="mt-4 max-w-lg text-sm leading-6 text-[#66736c]">{featured.summary}</p>
              <span className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-[#365344]">Read article <ArrowUpRight size={17} className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"/></span>
            </div>
          </a>

          <div className="flex flex-col gap-5">
            {more.map((post, index) => (
              <a key={post.url} href={post.url} target="_blank" rel="noopener noreferrer" className="group flex flex-1 flex-col justify-between rounded-2xl border border-[#d9ddd4] bg-[#f8f7f2] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#aab8aa] hover:shadow-md sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#879188]">0{index + 2} / {post.topic}</span>
                  <div className="rounded-lg border border-[#d8dbd3] bg-[#e9ebe4] p-2.5 text-[#587263]"><post.Icon size={19}/></div>
                </div>
                <div className="mt-10">
                  <h3 className="text-xl font-semibold leading-snug tracking-[-0.035em] text-[#17221f]">{post.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-[#66736c]">{post.summary}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-[#536b5b]">Read on Medium <ExternalLink size={13}/></span>
                </div>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-[#d3d5cc] pt-5">
          <p className="text-xs text-[#879188]">A selection of published writing and academic work.</p>
          <a href="https://medium.com/@bhargavnth07" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#365344] transition-colors hover:text-[#17221f]">More on Medium <ArrowUpRight size={16}/></a>
        </div>
      </div>
    </section>
  );
};

export default Blog;
