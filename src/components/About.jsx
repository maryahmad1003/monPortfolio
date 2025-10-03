import { User, Code, Server, Database, Palette, Users, MoreHorizontal } from 'lucide-react';
import { personalInfo, skillLevels } from '../data/portfolio';

const About = () => {
  const skillCategories = [
    { key: 'frontend', title: 'Frontend', icon: Code, color: 'bg-blue-500' },
    { key: 'backend', title: 'Backend', icon: Server, color: 'bg-green-500' },
    { key: 'database', title: 'Base de données', icon: Database, color: 'bg-purple-500' },
    { key: 'design', title: 'Design', icon: Palette, color: 'bg-pink-500' },
    { key: 'uiux', title: 'UI/UX Design', icon: Users, color: 'bg-indigo-500' },
    { key: 'autres', title: 'Autres', icon: MoreHorizontal, color: 'bg-yellow-500' }
  ];

  return (
    <section id="about" className="h-full py-20 bg-black dark:bg-black">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <User className="text-primary mr-3" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-white dark:text-white">À propos de moi</h2>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <div className="bg-gray-800 dark:bg-gray-800 p-8 rounded-lg shadow-sm mb-12">
            <p className="text-gray-300 dark:text-gray-300 leading-relaxed text-lg">
              {personalInfo.description}
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {skillCategories.map((category) => (
              <div
                key={category.key}
                className="bg-gray-800 dark:bg-gray-800 p-6 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  <category.icon className="text-primary mr-3" size={24} />
                  <h3 className="text-xl font-bold text-white dark:text-white">{category.title}</h3>
                </div>

                <div className="space-y-3">
                  {skillLevels[category.key].map((skill, index) => (
                    <div key={index}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-gray-300 dark:text-gray-300 text-sm">{skill.name}</span>
                        <span className="text-primary text-sm font-medium">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full ${category.color} transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
