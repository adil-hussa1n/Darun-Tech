import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Packages from '../components/Packages';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <div className="relative">
        <About />
        <Services />
        
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default Home; 