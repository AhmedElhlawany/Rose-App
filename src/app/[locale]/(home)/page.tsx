import About from '@/app/[locale]/(home)/_components/about';
import Companies from '@/app/[locale]/(home)/_components/companies';
import Gallery from '@/app/[locale]/(home)/_components/gallery';
import TestimonialsCarousel from './_components/testimonials';
import AppPagination from '@/components/shared/app-pagination';

export default function Home({ params, searchParams }) {
  return (
    <>
      <About />
      <Gallery />
      <TestimonialsCarousel />
      <Companies />
      {/* Pagination  Props Add Manually For Trial */}
      <AppPagination
        searchParams={searchParams}
        show={true}
        totalPages={10}
        currentPage={5}
        locale="en"
        pathname="/"
      />
    </>
  );
}
