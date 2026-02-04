import { Hero } from '@/components/hero';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Projects limit={3} />
      <Contact />
      <Footer />
    </div>
  );
}
