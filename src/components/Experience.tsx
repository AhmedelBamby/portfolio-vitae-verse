
import { Building, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: "NeuronetX",
      position: "Machine Learning Engineer Intern",
      period: "August 2024 – Sep 2024",
      description: "Developed and implemented machine learning models, focusing on neural networks and deep learning applications.",
      color: "bg-purple-500"
    },
    {
      company: "Alex Petroleum Company",
      position: "Intern",
      period: "July 2024 – August 2024",
      description: "Applied data science techniques in the petroleum industry, analyzing operational data and developing predictive models.",
      color: "bg-blue-500"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Artificial Intelligence",
      institution: "Arab Academy for Science, Technology and Maritime Transport",
      period: "Sep 2024 - Dec 2026",
      status: "In Progress"
    },
    {
      degree: "Bachelor of Computer Science in Artificial Intelligence",
      institution: "King Salman International University",
      period: "Oct 2022 – Sep 2024",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-center lg:text-left">Professional Experience</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-gray-600">
                  <div className={`absolute -left-3 top-0 w-6 h-6 ${exp.color} rounded-full flex items-center justify-center shadow-lg`}>
                    <Building size={12} className="text-white" />
                  </div>
                  <div className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                    <h3 className="text-xl font-semibold text-purple-400 mb-2">{exp.position}</h3>
                    <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
                    <div className="flex items-center text-gray-400 mb-3">
                      <Calendar size={16} className="mr-2" />
                      <span>{exp.period}</span>
                    </div>
                    <p className="text-gray-300 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <h2 className="text-4xl font-bold mb-12 text-center lg:text-left">Education</h2>
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-gray-800 p-6 rounded-lg shadow-xl hover:shadow-2xl transition-shadow duration-300">
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{edu.degree}</h3>
                  <h4 className="text-lg text-gray-300 mb-2">{edu.institution}</h4>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-400">
                      <Calendar size={16} className="mr-2" />
                      <span>{edu.period}</span>
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm ${
                      edu.status === 'In Progress' 
                        ? 'bg-green-500/20 text-green-400' 
                        : 'bg-blue-500/20 text-blue-400'
                    }`}>
                      {edu.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
