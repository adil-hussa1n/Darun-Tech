// ALL sections are eagerly imported — they download simultaneously during the preloader
// window instead of being fetched sequentially after Hero renders.
// This eliminates the "10-second wait" for below-fold content on slow connections.
import Hero from '../components/Hero';
import About from '../components/About';
import ServicesNew from '../components/Services.new';
import Team from '../components/Team';
import FAQ from '../components/FAQ';
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