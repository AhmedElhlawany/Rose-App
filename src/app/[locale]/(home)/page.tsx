import MainHeading from '../components/main-heading';
import Testimonials from '../components/testimonials';

export default function Home() {
  return (
    <div className="min-h-screen py-10">
      <MainHeading
        heading="TESTIMONIALS"
        paragraph="Real Words from Happy Customers"
      />

      <Testimonials />
    </div>
  );
}
