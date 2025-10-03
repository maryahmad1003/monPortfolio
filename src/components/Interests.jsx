import { Heart } from 'lucide-react';
import { interests } from '../data/portfolio';

const Interests = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center mb-12">
          <Heart className="text-primary mr-3" size={32} />
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Centres d'intérêt</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-sm">
            <p className="text-gray-700 text-lg leading-relaxed">{interests}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interests;
