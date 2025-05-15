import Hero from '../components/Hero';
import About from '../components/About';
import ServicesNew from '../components/Services.new';
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
        <div id="services">
          <ServicesNew />
        </div>
        <Team />
        <FAQ />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
};

export default Home;