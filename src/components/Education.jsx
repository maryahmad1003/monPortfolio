import { GraduationCap } from 'lucide-react';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="h-full py-20 bg-black dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <GraduationCap className="text-primary mr-3" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white">Formation</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-8 p-6 bg-gray-800 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <p className="text-gray-300 dark:text-gray-300 text-lg leading-relaxed italic">
              Mon parcours de formation est le reflet de ma double passion : coder et sécuriser.
            </p>
          </div>

          <div className="space-y-8">
            {education.map((edu) => (
              <div
                key={edu.id}
                className="bg-gray-800 dark:bg-gray-800 p-8 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white dark:text-white mb-1">{edu.institution}</h3>
                    <p className="text-primary font-medium text-lg">{edu.degree}</p>
                  </div>
                  <span className="text-gray-400 dark:text-gray-400 font-medium mt-2 md:mt-0">{edu.duration}</span>
                </div>

                <p className="text-gray-300 dark:text-gray-300 leading-relaxed">{edu.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 p-6 bg-gradient-to-r from-primary/10 to-primary/20 dark:from-primary/10 dark:to-primary/20 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
            <p className="text-gray-300 dark:text-gray-300 leading-relaxed">
              Ces deux univers complémentaires me permettent aujourd'hui de bâtir des solutions robustes, performantes et sécurisées.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
