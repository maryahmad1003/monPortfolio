import { CircleCheck as CheckCircle, Lightbulb } from 'lucide-react';
import { skills } from '../data/portfolio';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <Lightbulb className="text-primary mr-3" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white">Compétences</h2>
        </div>

        <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex items-start space-x-4 bg-gray-900 dark:bg-gray-900 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              <CheckCircle className="text-primary flex-shrink-0 mt-1" size={24} />
              <p className="text-gray-300 dark:text-gray-300 leading-relaxed">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
