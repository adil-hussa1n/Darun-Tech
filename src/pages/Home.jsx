import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import FAQ from '../components/FAQ';
import Team from '../components/Team';

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <div className="relative">
        <About />
        <Team />
        <Services />
        <FAQ />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default Home;