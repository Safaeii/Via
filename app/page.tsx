import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { SearchBar } from '@/components/SearchBar';
import { DestinationsSection } from '@/components/DestinationsSection';
import { HotelsSection } from '@/components/HotelsSection';
import { ExperiencesSection } from '@/components/ExperiencesSection';
import { PromoSection } from '@/components/PromoSection';
import { Footer } from '@/components/Footer';

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <section className="relative">
        <Navbar />
        <Hero />
        <div className="relative z-20 mx-auto -mt-20 max-w-5xl px-6">
          <SearchBar />
        </div>
      </section>

      <DestinationsSection />
      <HotelsSection />
      <ExperiencesSection />
      <PromoSection />
      <Footer />
    </main>
  );
}
