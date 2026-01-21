import About from '@/app/[locale]/(home)/_components/about';
import Companies from '@/app/[locale]/(home)/_components/companies';
import Gallery from '@/app/[locale]/(home)/_components/gallery';
import TestimonialsCarousel from './_components/testimonials';
import AppPagination from '@/components/shared/app-pagination';
import { Input } from '@/components/ui/input';
export default function Home({ params, searchParams }) {
  return (
    <>
      <About />
      <Gallery />
      <TestimonialsCarousel />
      <Companies />
      {/* Pagination  Props Add Manually  to show in PR */}
      <AppPagination
        searchParams={searchParams}
        show={true}
        totalPages={10}
        currentPage={5}
        locale="en"
        pathname="/"
      />

      {/* Password-input to Show in PR */}
      <Input type="password" />
    </>
  );
}
