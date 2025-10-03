import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Interests from './components/Interests';
import Contact from './components/Contact';
import Footer from './components/Footer';
import QuoteModal from './components/QuoteModal';

function App() {
  const [activeSection, setActiveSection] = useState('hero');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const renderActiveSection = () => {
    console.log('Rendering section:', activeSection);
    switch (activeSection) {
      case 'hero':
        return <Hero onOpenQuoteModal={() => setIsModalOpen(true)} />;
      case 'about':
        return <About />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects />;
      case 'experience':
        return <Experience />;
      case 'education':
        return <Education />;
      case 'interests':
        return <Interests />;
      case 'contact':
        return <Contact onOpenQuoteModal={() => setIsModalOpen(true)} />;
      default:
        return <Hero onOpenQuoteModal={() => setIsModalOpen(true)} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="flex-1 h-full">
        <div className="h-full">
          {renderActiveSection()}
        </div>
      </main>
      <Footer activeSection={activeSection} />
      <QuoteModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
