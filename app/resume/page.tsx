'use client';

import React from 'react';
import Link from 'next/link';

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans print:bg-white print:text-black">
      {/* Header / Controls */}
      <div className="max-w-4xl mx-auto p-8 print:p-0 print:m-0 print:max-w-none">
        <div className="flex justify-between items-center mb-8 print:hidden">
          <Link href="/" className="text-blue-600 hover:underline flex items-center gap-2 font-medium">
            ← Back to Portfolio
          </Link>
          <button 
            onClick={() => window.print()}
            className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-gray-800 transition-colors shadow-sm flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
            Download PDF
          </button>
        </div>

        {/* Resume Content */}
        <div className="bg-white p-10 shadow-md print:shadow-none print:p-0 print:m-0 mx-auto border border-gray-200 print:border-none">
          <header className="border-b-2 border-gray-800 pb-4 mb-6 text-center">
            <h1 className="text-4xl font-bold uppercase tracking-wide">Salman Kotabal</h1>
            <p className="text-lg text-gray-600 mt-1">MCA Student · Full-Stack Developer · AI/ML Enthusiast</p>
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2 mt-3 text-sm text-gray-700">
              <a href="mailto:salman17nadaf@gmail.com" className="hover:text-blue-600">salman17nadaf@gmail.com</a>
              <span>·</span>
              <span>+91 7022349473</span>
              <span>·</span>
              <span>Hubli, Karnataka</span>
              <span>·</span>
              <a href="https://www.linkedin.com/in/salman-k-392188246" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <span>·</span>
              <a href="https://github.com/mrsalmanjr" className="hover:text-blue-600" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
          </header>

          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 mb-3 pb-1">Career Objective</h2>
            <p className="text-sm leading-relaxed text-gray-800">
              MCA student at KLE Technological University skilled in Python, web technologies, and AI-powered applications. Certified in AI, Generative AI, and Cloud fundamentals with active focus on ML and Data Analysis.
            </p>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 mb-3 pb-1">Experience</h2>
            
            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-base font-semibold text-gray-900">AI Data Annotator / AI Model Evaluator (Freelance)</h3>
                <span className="text-sm font-medium text-gray-700">May 2026 – Present</span>
              </div>
              <div className="text-sm text-gray-600 mb-2 font-medium">Alignerr · Remote</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-800 space-y-1">
                <li>Evaluating AI model responses for quality, accuracy, and instruction-following; identifying errors and reasoning gaps.</li>
                <li>Reviewing code-related tasks and applying structured evaluation guidelines and quality standards.</li>
              </ul>
            </div>

            <div className="mb-4">
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-base font-semibold text-gray-900">AI Data Trainer | AI Evaluation Specialist | Full-Stack Developer</h3>
                <span className="text-sm font-medium text-gray-700">Nov 2025 – Present</span>
              </div>
              <div className="text-sm text-gray-600 mb-2 font-medium">Outlier AI · Remote</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-800 space-y-1">
                <li>Evaluated AI-generated responses for quality, accuracy, and safety; designed prompts to improve model reasoning.</li>
                <li>Worked with memory-based workflows, tool selection, and task evaluation frameworks using Python and web tools.</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 mb-3 pb-1">Internship</h2>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-base font-semibold text-gray-900">Digital Marketing Intern</h3>
                <span className="text-sm font-medium text-gray-700">Jan – Mar 2026</span>
              </div>
              <div className="text-sm text-gray-600 mb-2 font-medium">InAmigos Foundation (Internshala) · 3 months</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-800 space-y-1">
                <li>Covered SEO, social media strategy, and content campaigns; supported outreach for community education mission.</li>
              </ul>
            </div>
          </section>

          <section className="mb-6">
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 mb-3 pb-1">Projects</h2>
            
            <div className="mb-3 break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-semibold text-gray-900">Personal Finance Aggregator & Cashflow Forecaster [Live]</h3>
              </div>
              <div className="text-sm text-gray-600 mb-1 font-medium italic">Next.js · Supabase · TypeScript · ML (Linear Regression)</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-800">
                <li>Multi-account finance platform with ML cashflow forecasting, confidence scoring, and INR-first UPI/Net Banking support.</li>
              </ul>
            </div>

            <div className="mb-3 break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-semibold text-gray-900">ReliefSync AI – Crisis Coordination Platform [Live]</h3>
              </div>
              <div className="text-sm text-gray-600 mb-1 font-medium italic">Next.js · Supabase · Google Gemini AI · Geospatial</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-800">
                <li>AI-powered disaster relief platform with Gemini-driven risk scoring, volunteer assignment, and live incident tracking.</li>
              </ul>
            </div>

            <div className="mb-3 break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-semibold text-gray-900">CodeReview OpenEnv – AI-Powered Code Bug Detection</h3>
              </div>
              <div className="text-sm text-gray-600 mb-1 font-medium italic">Python · FastAPI · Reinforcement Learning · Docker</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-800">
                <li>Minimal RL environment for AI code review with 3 difficulty tiers and RESTful endpoints for AI agent evaluation.</li>
              </ul>
            </div>

            <div className="mb-3 break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-semibold text-gray-900">WorthSolving – Startup Problem Discovery Platform [Live]</h3>
                <span className="text-sm font-medium text-gray-700">Nov 2025 – Present</span>
              </div>
              <div className="text-sm text-gray-600 mb-1 font-medium italic">Python · Supabase · AI · Vercel</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-800">
                <li>Full-stack platform for founders with AI-generated insights, idea submission, and admin moderation; live in production.</li>
              </ul>
            </div>

            <div className="mb-3 break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-semibold text-gray-900">EcoSphere AI – Carbon-Aware Cloud Intelligence SaaS [Live]</h3>
              </div>
              <div className="text-sm text-gray-600 mb-1 font-medium italic">React · Vite · Supabase</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-800">
                <li>Analyzes cloud workload data, detects CO₂ spikes, generates sustainability recommendations, and provides ESG analytics dashboards.</li>
              </ul>
            </div>

            <div className="mb-3 break-inside-avoid">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-semibold text-gray-900">Warehouse Management System</h3>
                <span className="text-sm font-medium text-gray-700">Jan – Jun 2025</span>
              </div>
              <div className="text-sm text-gray-600 mb-1 font-medium italic">Python · SQLite</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-800">
                <li>Inventory, supplier, and order management with end-to-end CRUD and relational DB integrity.</li>
              </ul>
            </div>
          </section>

          <section className="mb-6 break-inside-avoid">
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 mb-3 pb-1">Technical Skills</h2>
            <div className="text-sm text-gray-800 grid grid-cols-1 md:grid-cols-2 gap-y-2">
              <div><span className="font-semibold text-gray-900">Languages:</span> Python, Java, C, JavaScript</div>
              <div><span className="font-semibold text-gray-900">Frontend:</span> HTML, CSS, React, Next.js</div>
              <div><span className="font-semibold text-gray-900">Backend / DB:</span> FastAPI, Supabase, SQLite, Firebase</div>
              <div><span className="font-semibold text-gray-900">AI / ML:</span> Machine Learning, Pandas, Google Gemini, AI Integration</div>
              <div><span className="font-semibold text-gray-900">Tools:</span> Git, VS Code, Docker, Vercel</div>
            </div>
          </section>

          <section className="mb-6 break-inside-avoid">
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 mb-3 pb-1">Education</h2>
            <div className="mb-2">
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-semibold text-gray-900">MCA – KLE Technological University, Hubli</h3>
                <span className="text-sm font-medium text-gray-700">2025–2027</span>
              </div>
              <div className="text-sm text-gray-600">CGPA: 7.6/10</div>
            </div>
            <div>
              <div className="flex justify-between items-baseline">
                <h3 className="text-base font-semibold text-gray-900">BCA – Karnataka University, Dharwad</h3>
                <span className="text-sm font-medium text-gray-700">2022–2025</span>
              </div>
              <div className="text-sm text-gray-600">68.0%</div>
            </div>
          </section>

          <section className="mb-6 break-inside-avoid">
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 mb-3 pb-1">Certifications</h2>
            <ul className="list-disc list-outside ml-4 text-sm text-gray-800 space-y-1">
              <li><span className="font-semibold">Y Combinator</span> – SWE at a Startup (Job Simulation) — Forage · Apr 2026</li>
              <li><span className="font-semibold">JPMorganChase</span> – Software Engineering Job Simulation — Forage · Mar 2026</li>
              <li><span className="font-semibold">Deloitte</span> – Technology Job Simulation — Forage · Mar 2026</li>
              <li><span className="font-semibold">Oracle OCI 2025</span> – AI Foundations Associate — Oracle · Aug–Sep 2025</li>
              <li><span className="font-semibold">Oracle OCI 2025</span> – Generative AI Professional — Oracle · Jun–Sep 2025</li>
              <li><span className="font-semibold">AWS Educate</span> – Machine Learning Foundations — AWS Educate · Jul–Aug 2025</li>
              <li><span className="font-semibold">Full Stack Web Development with React</span> — Seminarroom, Gadag · May 2025</li>
            </ul>
          </section>

          <section className="break-inside-avoid">
            <h2 className="text-lg font-bold uppercase tracking-wider text-gray-900 border-b border-gray-300 mb-3 pb-1">Volunteering</h2>
            <div>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-base font-semibold text-gray-900">Business Development Volunteer</h3>
                <span className="text-sm font-medium text-gray-700">Sep 2024</span>
              </div>
              <div className="text-sm text-gray-600 mb-1 font-medium">Jankalyan Multipurpose Education Society · Virtual</div>
              <ul className="list-disc list-outside ml-4 text-sm text-gray-800 space-y-1">
                <li>Led outreach campaigns supporting fundraising and community educational initiatives</li>
              </ul>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
