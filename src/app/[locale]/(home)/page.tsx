import About from '@/app/[locale]/(home)/_components/about';
import Companies from '@/app/[locale]/(home)/_components/companies';
import Gallery from '@/app/[locale]/(home)/_components/gallery';
import TestimonialsCarousel from './_components/testimonials';

export default function Home() {
  return (
    <>
      <About />
      <Gallery />
      <TestimonialsCarousel />
      <Companies />
    </>
  );
}
