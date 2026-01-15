import Hero from './_components/hero';
import OccasionSection from './_components/occasion-section';
import HeroServiceSection from './_components/hero-service-section';
import ThemeToggleIcon from '@/components/layout/app/theme-toggle';

export default function Home() {
  return (
    <main className="mx-auto flex flex-col items-center justify-center">
      <ThemeToggleIcon />
      {/* Hero Section */}
      <Hero />

      {/* Occasions Section */}
      <OccasionSection />

      {/* Hero Service */}
      <HeroServiceSection />
    </main>
  );
}
