import { Briefcase } from 'lucide-react';
import { experience } from '../data/portfolio';

const Experience = () => {
  return (
    <section id="experience" className="h-full py-20 bg-gray-900 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <Briefcase className="text-primary mr-3" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white">Expérience Professionnelle</h2>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experience.map((exp) => (
            <div
              key={exp.id}
              className="bg-gray-900 dark:bg-gray-900 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white dark:text-white mb-1">{exp.position}</h3>
                  <p className="text-primary font-medium text-lg">{exp.company}</p>
                </div>
                <span className="text-gray-400 dark:text-gray-400 font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>

              <p className="text-gray-300 dark:text-gray-300 mb-3 leading-relaxed">{exp.description}</p>
              <p className="text-gray-400 dark:text-gray-400 leading-relaxed">{exp.achievements}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
