import { useState } from 'react';
import { Code, ChevronRight } from 'lucide-react';
import { projects } from '../data/portfolio';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const toggleProject = (id) => {
    setExpandedProject(expandedProject === id ? null : id);
  };

  return (
    <section id="projects" className="h-full py-20 bg-black dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <Code className="text-primary mr-3" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white">Projets & Réalisations</h2>
        </div>

        <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
              onClick={() => toggleProject(project.id)}
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white dark:text-white flex-1 pr-2">
                    {project.title}
                  </h3>
                  <ChevronRight
                    className={`text-primary flex-shrink-0 transition-transform duration-300 ${
                      expandedProject === project.id ? 'rotate-90' : ''
                    }`}
                    size={24}
                  />
                </div>

                <p className="text-sm text-primary font-medium mb-3">{project.tech}</p>
                <p className="text-gray-300 dark:text-gray-300 text-sm leading-relaxed mb-3">{project.description}</p>

                {expandedProject === project.id && (
                  <div className="mt-4 pt-4 border-t border-gray-600 dark:border-gray-600 animate-fade-in">
                    <p className="text-gray-400 dark:text-gray-400 text-sm leading-relaxed">{project.details}</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
