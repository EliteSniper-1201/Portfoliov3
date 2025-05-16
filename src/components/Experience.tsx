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
      id: 'rotationsplus',
      company: 'RotationsPlus',
      position: 'Senior Full Stack Developer',
      period: 'Nov 2022 – Nov 2024',
      location: 'Remote',
      description: 'Developed high-performance customer-facing web applications using modern technologies.',
      responsibilities: [
        'Developed high performance customer facing web application using ReactJS, Redux-saga, React Hooks, React-Router, JavaScript, HTML5, CSS3 and SASS.',
        'Maintained high-level expertise in React state management strategies, including Redux, Redux Persist and redux-saga.',
        'Developed custom API layer to handle all CRUD transactions, JWT token management and implemented interceptors to embed custom headers.',
        'Have worked on AWS to integrate the server-side and client-side code.',
        'Experienced with Docker container service and applications by creating Docker images from Docker.',
        'Involved in developing RESTful Web Services using Strapi frameworks.'
      ],
      technologies: ['React', 'Redux-saga', 'React Hooks', 'JavaScript', 'HTML5', 'CSS3', 'SASS', 'AWS', 'Docker', 'Strapi']
    },
    {
      id: 'metaverseme',
      company: 'MetaverseMe Limited',
      position: 'Senior Blockchain Developer & Advisor',
      period: 'Feb 2022 – Oct 2022',
      location: 'Remote',
      description: 'Built NFT marketplace for MetaverseMe game avatars, implementing both crypto and fiat payment methods.',
      responsibilities: [
        'Built a Market place to create and mint NFT collections for MetaverseMe game avatars, to list orders and to sell/buy it.',
        'Implemented not only the payment method by crypto but also the payment method by fiat.',
        'Wrote smart contract based on EVM(Ethereum, Polygon, BSC, Avalanche) and Solana.'
      ],
      technologies: ['Blockchain', 'Smart Contracts', 'Solidity', 'Web3.js', 'EVM', 'Solana', 'NFT', 'React', 'Node.js']
    },
    {
      id: 'blockletegames',
      company: 'BlockleteGames',
      position: 'Senior Blockchain Developer & Advisor',
      period: 'Mar 2020 – Dec 2021',
      location: 'Part-time / Remote',
      description: 'Created smart contracts for P2E golf game and updated from Ethereum to Flow network.',
      responsibilities: [
        'Created smart contract for P2E golf game.',
        'Embedded business logic on backend and contract thru node.js and solidity.',
        'Updated v1 (Ethereum network) to v2 based on flow network.',
        'Made out test cases for workflow.'
      ],
      technologies: ['Blockchain', 'Solidity', 'Smart Contracts', 'Node.js', 'Flow Network', 'Ethereum', 'P2E', 'Testing']
    },
    {
      id: 'clarusrd',
      company: 'Clarus R+D',
      position: 'Full-Stack Engineer',
      period: 'Apr 2020 – Oct 2021',
      location: 'Contract / Remote',
      description: 'Provided technology infrastructure for entertainment service and built various web projects.',
      responsibilities: [
        'Provided a technology infrastructure to empower the business to serve its clients efficiently.',
        'Built TypeScript, Nest.js, PostgreSQL based Back-End project for an entertainment service.',
        'Built Next.js, Feather.js and PostgreSQL based WebAR Project.',
        'Built Ruby on Rails and PostgreSQL based Employee Cooperation System for SupriseHR Inc',
        'Built Shopify based Ecommerce Systems',
        'Built Angular, JavaScript and Golang based Job Hiring Platform.'
      ],
      technologies: ['TypeScript', 'Nest.js', 'PostgreSQL', 'Next.js', 'Feather.js', 'WebAR', 'Ruby on Rails', 'Shopify', 'Angular', 'Golang']
    },
    {
      id: 'greenbay',
      company: 'Greenbay Payment, LTD',
      position: 'Full-Stack Engineer',
      period: 'Jan 2019 – Apr 2020',
      location: 'Remote',
      description: 'Achieved a Blockchain payment and money transfer service based on IBM Hyperledger Fabric.',
      responsibilities: [
        'Achieved a Blockchain payment and money transfer service based on IBM Hyperledger Fabric.',
        'Worked on Fortify for finding security flaws in the code we build and fixed the security issues.',
        'Implemented e-wallet api service using Node.js, Express.js.',
        'Used Appium, Selenium, JMeter unit test framework to write unit tests for JavaScript code and Jest for the client-side unit testing.',
        'Worked on IBM cloud, HCL cloud and AWS to integrate the server side and client-side code.',
        'Experienced with Docker container service and applications by creating Docker images from Docker file.',
        'Used Jenkins for continuous integration and continuous deployment pipeline.'
      ],
      technologies: ['Blockchain', 'IBM Hyperledger Fabric', 'Node.js', 'Express.js', 'Appium', 'Selenium', 'JMeter', 'Jest', 'IBM Cloud', 'AWS', 'Docker', 'Jenkins']
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