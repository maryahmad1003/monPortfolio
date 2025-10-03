import { Heart, ChevronDown, MessageCircle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-12 relative">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          {/* Left Section */}
          <div className="flex items-center justify-center md:justify-start space-x-3">
            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">P</span>
            </div>
            <span className="text-xl font-light">Portfolio</span>
          </div>

          {/* Center Section */}
          <div className="text-center">
            <p className="text-gray-300 text-lg font-light italic">
              Créé avec ❤️ et beaucoup de ☕
            </p>
          </div>

          {/* Right Section */}
          <div className="text-center md:text-right">
            <p className="text-gray-400 text-sm mb-2">
              © {currentYear} Mary Vonne Diallo. Tous droits réservés.
            </p>
            <p className="text-gray-500 text-xs">
              Développé avec React, Framer Motion et Tailwind CSS.
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex items-center justify-between pt-8 border-t border-gray-800">
          {/* Down Arrow */}
          <div className="flex-1 flex justify-center">
            <button
              onClick={() => window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })}
              className="w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors"
              aria-label="Scroll to bottom"
            >
              <ChevronDown size={20} className="text-white" />
            </button>
          </div>

          {/* Cat Icon */}
          <div className="flex justify-end">
            <button
              className="w-10 h-10 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors"
              aria-label="Contact support"
            >
              <MessageCircle size={18} className="text-white" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
