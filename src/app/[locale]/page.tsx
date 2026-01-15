import React from 'react';
import MainHeading from './components/main-heading';
import TestimonialsCarousel from './components/testimonials';
export default function page() {
  return (
    <div className="py-12">
      <MainHeading
        heading="Testimonials"
        paragraph="Real Words from Happy Customers"
      />

      <TestimonialsCarousel />
    </div>
  );
}
