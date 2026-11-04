import React from 'react';
import { Award, BookOpen, GraduationCap } from 'lucide-react';

const Education: React.FC = () => {
  return (
    <section id="education" className="bg-[#f4f2ed] px-6 py-20 text-[#17221f] lg:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 grid gap-6 border-t border-[#d3d5cc] pt-8 md:grid-cols-[0.65fr_1.35fr] md:items-end">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#718077]">Academic foundation</p>
            <h2 className="mt-4 text-5xl font-semibold tracking-[-0.06em]">Engineering, then intelligence.</h2>
          </div>
          <p className="max-w-xl text-base leading-7 text-[#66736c] md:justify-self-end">
            Formal training in electronics and engineering, extended through postgraduate research and focused study in data science and generative AI.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <article className="relative overflow-hidden rounded-2xl border border-[#d3d9cf] bg-[#e8ece4] p-7 sm:p-9">
            <div className="absolute -right-10 -top-12 h-56 w-56 rounded-full border border-[#cbd5c9] opacity-70" />
            <div className="absolute -right-2 -top-4 h-40 w-40 rounded-full border border-[#cbd5c9] opacity-70" />
            <div className="relative">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#cbd5c9] bg-[#f3f4ee] px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[#587263]">
                  <GraduationCap size={14}/> Postgraduate
                </span>
                <span className="text-xs font-medium text-[#7b887f]">Oct 2021 — Oct 2023</span>
              </div>
              <h3 className="mt-9 max-w-xl text-3xl font-semibold leading-tight tracking-[-0.045em] text-[#17221f] sm:text-4xl">M.Tech — Electronics Design & Technology</h3>
              <p className="mt-3 text-base font-medium text-[#536158]">Tezpur University</p>
              <p className="mt-5 max-w-xl text-sm leading-6 text-[#66736c]">Postgraduate study in electronics and technology, with thesis research focused on ECG-based biometric identification.</p>

              <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl border border-[#d2d9ce] bg-[#f4f5ef] p-4">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-[#294638]">8.49/10</p>
                  <p className="mt-1 text-xs text-[#718077]">CGPA</p>
                </div>
                <div className="rounded-xl border border-[#d2d9ce] bg-[#f4f5ef] p-4">
                  <p className="text-2xl font-semibold tracking-[-0.04em] text-[#294638]">3rd</p>
                  <p className="mt-1 text-xs text-[#718077]">Postgraduate batch</p>
                </div>
                <div className="col-span-2 rounded-xl border border-[#d2d9ce] bg-[#f4f5ef] p-4 sm:col-span-1">
                  <div className="flex items-center gap-2 text-[#587263]"><Award size={17}/><span className="text-sm font-semibold">Distinction</span></div>
                  <p className="mt-1 text-xs text-[#718077]">Graduated with distinction</p>
                </div>
              </div>
            </div>
          </article>

          <div className="flex flex-col gap-5">
            <article className="flex-1 rounded-2xl border border-[#d9ddd4] bg-[#f8f7f2] p-6 sm:p-7">
              <div className="flex items-center justify-between gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#718077]">Undergraduate</span>
                <span className="text-xs text-[#879188]">2016 — 2020</span>
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.04em]">B.Tech — Electronics & Communication Engineering</h3>
              <p className="mt-2 text-sm font-medium text-[#536158]">Gauhati University</p>
              <p className="mt-4 text-sm leading-6 text-[#66736c]">Foundation in electronics, communication systems and embedded programming.</p>
            </article>

            <article className="rounded-2xl border border-[#d9ddd4] bg-[#f8f7f2] p-6 sm:p-7">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#718077]"><BookOpen size={14}/> Focused study</div>
              <div className="mt-5 space-y-5">
                <div>
                  <h3 className="text-lg font-semibold tracking-[-0.025em]">Data Science & Generative AI</h3>
                  <p className="mt-1 text-sm text-[#536158]">SUNY Potsdam · 2024</p>
                </div>
                <div className="border-t border-[#d8dbd3] pt-4">
                  <h3 className="text-lg font-semibold tracking-[-0.025em]">Diploma in Data Science & Analytics</h3>
                  <p className="mt-1 text-sm text-[#536158]">360DigiTMG</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
