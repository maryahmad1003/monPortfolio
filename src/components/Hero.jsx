import { ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const Hero = ({ onOpenQuoteModal }) => {
  return (
    <section id="hero" className="h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-black dark:to-gray-900 pt-16">
      <div className="container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column */}
          <div className="text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
              Bonjour, je suis {personalInfo.name}
            </h1>

            <p className="text-gray-600 dark:text-gray-300 max-w-3xl mb-8 leading-relaxed">
              {personalInfo.description}
            </p>

            {/* Social Icons */}
            <div className="flex space-x-4 mb-6">
              <a
                href={`https://github.com/${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <Github className="text-white" size={24} />
              </a>
              <a
                href={`https://www.linkedin.com/in/${personalInfo.linkedin.toLowerCase().replace(/\s/g, '-')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <Linkedin className="text-white" size={24} />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-12 h-12 bg-gray-800 dark:bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-700 dark:hover:bg-gray-600 transition-colors"
              >
                <Mail className="text-white" size={24} />
              </a>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="bg-green-600 dark:bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-700 dark:hover:bg-green-800 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-1 inline-block"
            >
              Demander un devis
            </button>
          </div>

          {/* Right Column */}
          <div className="flex justify-center md:justify-end">
            <img
              src="/image.png"
              alt={personalInfo.name}
              className="w-80 h-80 md:w-96 md:h-96 object-cover shadow-lg ring-4 ring-white dark:ring-gray-700"
            />
          </div>
        </div>

        <div className="flex justify-center mt-16 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <ChevronDown size={32} className="text-gray-400 dark:text-gray-500" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
