import React, { useState } from 'react';
import { Briefcase, ExternalLink } from 'lucide-react';

interface Job {
  id: string;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

const Experience: React.FC = () => {
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  
  const toggleJob = (id: string) => {
    if (expandedJob === id) {
      setExpandedJob(null);
    } else {
      setExpandedJob(id);
    }
  };
  
  const jobs: Job[] = [
    {
      id: 'stackblitz',
      company: 'StackBlitz',
      position: 'Senior Full Stack Developer',
      period: 'Jan 2024 - Present',
      location: 'Remote',
      description: 'Leading development of cloud-based development environments and real-time collaboration features.',
      responsibilities: [
        'Architected and implemented real-time collaboration features using WebRTC and WebSocket technologies',
        'Developed microservices architecture for scalable cloud development environments',
        'Led team of 5 developers in implementing new features and maintaining existing codebase',
        'Improved system performance by 40% through optimization of resource allocation and caching strategies',
        'Implemented automated testing and CI/CD pipelines reducing deployment time by 60%'
      ],
      technologies: ['React', 'TypeScript', 'Node.js', 'WebRTC', 'Docker', 'Kubernetes', 'Redis', 'PostgreSQL']
    },
    {
      id: 'rotationsplus',
      company: 'RotationsPlus',
      position: 'Senior Full Stack Developer',
      period: 'Nov 2022 – Dec 2023',
      location: 'Remote',
      description: 'Led development of high-performance customer-facing web applications using modern technologies.',
      responsibilities: [
        'Developed high performance customer facing web application using ReactJS, Redux-saga, and TypeScript',
        'Implemented real-time data synchronization reducing data inconsistencies by 95%',
        'Developed custom API layer with JWT token management and custom header interceptors',
        'Orchestrated AWS infrastructure deployment and management',
        'Containerized applications using Docker and implemented CI/CD pipelines'
      ],
      technologies: ['React', 'Redux-saga', 'TypeScript', 'AWS', 'Docker', 'Strapi', 'PostgreSQL']
    },
    {
      id: 'metaverseme',
      company: 'MetaverseMe Limited',
      position: 'Senior Blockchain Developer & Advisor',
      period: 'Feb 2022 – Oct 2022',
      location: 'Remote',
      description: 'Built NFT marketplace for MetaverseMe game avatars, implementing both crypto and fiat payment methods.',
      responsibilities: [
        'Architected and developed NFT marketplace supporting multiple payment methods',
        'Implemented smart contracts on multiple chains (Ethereum, Polygon, BSC, Avalanche)',
        'Developed Solana programs for high-performance NFT minting and trading',
        'Integrated fiat payment gateway reducing barrier to entry for non-crypto users',
        'Implemented automated testing suite for smart contracts achieving 95% coverage'
      ],
      technologies: ['Solidity', 'Rust', 'Web3.js', 'React', 'Node.js', 'Solana', 'PostgreSQL']
    },
    {
      id: 'blockletegames',
      company: 'BlockleteGames',
      position: 'Senior Blockchain Developer & Advisor',
      period: 'Mar 2020 – Dec 2021',
      location: 'Remote',
      description: 'Led development of P2E golf game and migration from Ethereum to Flow network.',
      responsibilities: [
        'Architected and implemented smart contracts for P2E golf game',
        'Led migration from Ethereum to Flow network improving transaction speed by 200%',
        'Developed comprehensive testing framework for smart contracts',
        'Implemented automated reward distribution system',
        'Optimized gas usage reducing transaction costs by 45%'
      ],
      technologies: ['Solidity', 'Cadence', 'Flow Network', 'Node.js', 'React', 'PostgreSQL']
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="mt-12">
          <div className="relative space-y-8">
            {jobs.map((job, index) => (
              <div key={job.id} className={`timeline-item ${index === jobs.length - 1 ? 'border-l-0' : ''}`}>
                <div className="timeline-date">{job.period}</div>
                <div
                  className="card p-6 cursor-pointer transition-all duration-300"
                  onClick={() => toggleJob(job.id)}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-blue-600 dark:text-blue-400">{job.position}</h3>
                      <h4 className="text-lg font-medium flex items-center">
                        <Briefcase size={16} className="mr-2" />
                        {job.company} 
                        <span className="text-sm ml-2 text-slate-500 dark:text-slate-400">({job.location})</span>
                      </h4>
                    </div>
                    <button
                      className={`w-8 h-8 rounded-full border border-slate-300 dark:border-slate-700 flex items-center justify-center transition-transform duration-300 ${
                        expandedJob === job.id ? 'rotate-180' : ''
                      }`}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </button>
                  </div>
                  
                  <p className="mt-2 text-slate-700 dark:text-slate-300">{job.description}</p>
                  
                  <div
                    className={`mt-4 overflow-hidden transition-all duration-300 ${
                      expandedJob === job.id ? 'max-h-[1000px]' : 'max-h-0'
                    }`}
                  >
                    <h5 className="font-medium mb-2">Key Responsibilities:</h5>
                    <ul className="list-disc pl-5 mb-4 space-y-1 text-slate-700 dark:text-slate-300">
                      {job.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                    
                    <h5 className="font-medium mb-2">Technologies Used:</h5>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, idx) => (
                        <span key={idx} className="skill-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-12 text-center">
          <a
            href="/juri-miyazawa-resume.pdf"
            download
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
          >
            <span>Download Full Resume</span>
            <ExternalLink size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;