/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import About from '@/app/[locale]/(home)/_components/about';
import Companies from '@/app/[locale]/(home)/_components/companies';
import Gallery from '@/app/[locale]/(home)/_components/gallery';
import TestimonialsCarousel from './_components/testimonials';
import AppPagination from '@/components/shared/app-pagination';
import { Input } from '@/components/ui/input';

// Dummy to show pagination work delete after review
type DummyItem = {
  id: number;
  title: string;
  description: string;
};
const DUMMY_ITEMS: DummyItem[] = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  title: `Item ${index + 1}`,
  description: `This is dummy item number ${index + 1}`,
}));

// pagination-utils
export function paginate<T>(items: T[], currentPage: number, limit: number) {
  const start = (currentPage - 1) * limit;
  const end = start + limit;

  return items.slice(start, end);
}

export default function Home({ params, searchParams }:any) {
  // to display pagination  delete after revview
  const currentPage = Number(searchParams.page) || 5;
  const limit = 1;

  const paginatedItems = paginate(DUMMY_ITEMS, currentPage, limit);

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
        currentPage={currentPage}
        locale="en"
        pathname="/"
      />

      {/* Password-input to Show in PR */}
      <Input type="password" />
    </>
  );
}
