import { lazy, Suspense } from 'react';
import Hero from '../components/Hero';

const About = lazy(() => import('../components/About'));
const ServicesNew = lazy(() => import('../components/Services.new'));
const Team = lazy(() => import('../components/Team'));
const FAQ = lazy(() => import('../components/FAQ'));
const Testimonials = lazy(() => import('../components/Testimonials'));
const Contact = lazy(() => import('../components/Contact'));

// Minimal skeleton shown while a section's JS chunk is loading
const SectionSkeleton = () => (
  <div className="w-full py-24 flex justify-center items-center">
    <div className="w-8 h-8 rounded-full border-2 border-[#915EFF]/40 border-t-[#915EFF] animate-spin" />
  </div>
);

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <div className="relative">
        <Suspense fallback={<SectionSkeleton />}>
          <About />
        </Suspense>
        <div id="services">
          <Suspense fallback={<SectionSkeleton />}>
            <ServicesNew />
          </Suspense>
        </div>
        <Suspense fallback={<SectionSkeleton />}>
          <Team />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <FAQ />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Testimonials />
        </Suspense>
        <Suspense fallback={<SectionSkeleton />}>
          <Contact />
        </Suspense>
      </div>
    </div>
  );
};

export default Home;