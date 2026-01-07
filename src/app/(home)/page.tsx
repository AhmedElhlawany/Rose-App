import { occasionCard } from '@/lib/constants/occasion-card';
import Hero from './_components/hero';
import OccasionCard from './_components/occasion-card';

export default function Home() {
  return (
    <main className="mx-auto flex flex-col items-center justify-center">
      {/* Hero Section */}
      <Hero />

      {/* Occasions Section */}
      <section className="grid w-full grid-cols-1 gap-6 px-10 pb-10 sm:px-20 md:grid-cols-2 lg:grid-cols-3">
        {occasionCard.map((occasion) => (
          <OccasionCard
            key={occasion.id}
            img={occasion.img}
            alt={occasion.alt}
            text={occasion.text}
            badge={occasion.badge}
            width={occasion.width}
          />
        ))}
      </section>
    </main>
  );
}
