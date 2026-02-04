import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-white mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
            Page Not Found
          </h2>
          <p className="text-gray-400 text-lg mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition-colors font-medium"
          >
            <Home size={20} />
            Go Home
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-white rounded-lg hover:border-white/40 hover:bg-white/5 transition-colors font-medium"
          >
            <ArrowLeft size={20} />
            View Projects
          </Link>
        </div>
      </div>
    </div>
  );
}
