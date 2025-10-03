import { useState, useEffect } from 'react';
import { Menu, X, Sun, Moon, Home, User, Code, Briefcase, GraduationCap, Mail, Lightbulb, Heart } from 'lucide-react';

const Header = ({ activeSection, setActiveSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const newIsDark = !isDark;
    console.log('Toggling theme:', newIsDark ? 'dark' : 'light');
    setIsDark(newIsDark);
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
    console.log('HTML classes:', document.documentElement.className);
  };

  const navItems = [
    { label: 'Accueil', href: 'hero', icon: Home },
    { label: 'À propos', href: 'about', icon: User },
    { label: 'Compétences', href: 'skills', icon: Lightbulb },
    { label: 'Projets', href: 'projects', icon: Code },
    { label: 'Expérience', href: 'experience', icon: Briefcase },
    { label: 'Formation', href: 'education', icon: GraduationCap },
    { label: "Centres d'intérêt", href: 'interests', icon: Heart },
    { label: 'Contact', href: 'contact', icon: Mail }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white dark:bg-black shadow-md' : 'bg-white dark:bg-black'
    }`}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo on Left */}
          <div className="flex items-center space-x-3 animate-fade-in">
            <div className="text-gray-900 dark:text-white text-2xl font-mono font-bold">
              <span className="text-gray-900 dark:text-white">{'<'}</span>
              <div className="inline-block relative">
                <span className="absolute -top-1 left-1/2 transform -translate-x-1/2 text-yellow-400 text-sm">★</span>
                <span className="text-gray-900 dark:text-white">/</span>
              </div>
              <span className="text-gray-900 dark:text-white">{'>'}</span>
            </div>
            <span className="text-[#00ff99] text-2xl font-light uppercase tracking-wider animate-slide-in">
              Portfolio
            </span>
          </div>

          {/* Desktop Navigation Right */}
          <div className="flex items-center space-x-4">
            <ul className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href="#"
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 font-medium ${
                      activeSection === item.href
                        ? 'bg-primary text-white shadow-lg'
                        : 'text-gray-700 dark:text-gray-300 hover:text-white dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                    onClick={(e) => {
                      e.preventDefault();
                      setActiveSection(item.href);
                    }}
                  >
                    <item.icon size={18} />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleDarkMode}
              className="text-gray-900 dark:text-white hover:text-primary transition-colors"
              aria-label="Toggle dark mode"
            >
              {isDark ? <Sun size={24} /> : <Moon size={24} />}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-gray-900 dark:text-white hover:text-primary transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <ul className="md:hidden mt-4 space-y-4 pb-4">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setIsMobileMenuOpen(false);
                    setActiveSection(item.href);
                  }}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 font-medium ${
                    activeSection === item.href
                      ? 'bg-primary text-white shadow-lg'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  <item.icon size={20} />
                  <span>{item.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
