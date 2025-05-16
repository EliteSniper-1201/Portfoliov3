import React from 'react';
import { Monitor, Smartphone, Award, Code, Briefcase, GraduationCap } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: <Briefcase size={24} />, value: '7+', label: 'Years Experience' },
    { icon: <Code size={24} />, value: '50+', label: 'Projects Completed' },
    { icon: <Monitor size={24} />, value: '10+', label: 'Web Technologies' },
    { icon: <Smartphone size={24} />, value: '5+', label: 'Mobile Frameworks' }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-800">
      <div className="section-container">
        <h2 className="section-title">About Me</h2>
        <div className="flex flex-col lg:flex-row gap-12 mt-12">
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-4 text-blue-600 dark:text-blue-400">
              Full Stack Developer & Blockchain Specialist
            </h3>
            <div className="space-y-4 text-slate-700 dark:text-slate-300">
              <p>
                I'm a dedicated Full Stack Web and Mobile Developer with a total of 7 years of experience, 
                including 3 years of remote work. My journey in software development has equipped me with 
                a profound architectural understanding of Web and Mobile frameworks.
              </p>
              <p>
                Throughout my career, I've successfully completed over 50 web development projects, 
                specializing in modern technologies like React.js/Redux, React Native, Next.js, Angular, 
                Vue.js/Vuex, Nest.js, Node.js, Golang, PHP, and Java.
              </p>
              <p>
                I'm particularly passionate about blockchain technology and have developed several 
                NFT dApps and marketplaces based on EVM and Solana. I'm constantly expanding my knowledge 
                in emerging technologies, currently focusing on mastering Metaverse tech.
              </p>
              <p>
                My approach to development is comprehensive – from concept development to launch, 
                I provide solutions that align with your vision, timeline, and budget while accurately 
                reflecting your company's identity.
              </p>
            </div>
            <div className="mt-8 flex items-center">
              <GraduationCap size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
              <div>
                <h4 className="font-semibold">Bachelor's degree, Computer Science</h4>
                <p className="text-slate-700 dark:text-slate-300">The University of Electro-Communications, 2018</p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="card p-6 flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.value}</h3>
                  <p className="text-slate-700 dark:text-slate-300">{stat.label}</p>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Award size={20} className="text-blue-600 dark:text-blue-400 mr-2" />
                Professional Principles
              </h3>
              <ul className="space-y-3 text-slate-700 dark:text-slate-300">
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Project planning and execution excellence</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Thorough code reviews and quality assurance</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Comprehensive unit testing and test coverage</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Clean, consistent coding style and documentation</span>
                </li>
                <li className="flex items-start">
                  <div className="h-6 w-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600 dark:text-green-400 mr-3 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span>Commitment to long-term client relationships</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;