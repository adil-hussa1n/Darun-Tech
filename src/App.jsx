import { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Hero = lazy(() => import('./components/Hero'));
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./components/About'));
const Services = lazy(() => import('./components/Services.new'));
const Contact = lazy(() => import('./components/Contact'));

// Packages are now integrated directly into the Services component

const App = () => {
  const [loading, setLoading] = useState(true);
  const [renderPreloader, setRenderPreloader] = useState(true);

  useEffect(() => {
    // Set a shorter timeout for the preloader to improve user experience
    const timer = setTimeout(() => {
      setLoading(false);
      // Completely unmount preloader contents 500ms after fade-out completes
      const unmountTimer = setTimeout(() => {
        setRenderPreloader(false);
      }, 500);
      return () => clearTimeout(unmountTimer);
    }, 1500); // Reduced to 1500ms for faster parallel load completion
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative z-0 bg-primary overflow-x-hidden w-full">
        {/* Full-screen Preloader Overlay using standard CSS transition for 100% reliability */}
        <div 
          className={`fixed inset-0 z-50 transition-opacity duration-500 ease-in-out bg-[#050816] ${
            loading ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        >
          {renderPreloader && <Preloader />}
        </div>

        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center w-full overflow-x-hidden">
          <Navbar />
          <Suspense fallback={
            <div className="flex justify-center items-center min-h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-[#915EFF]"></div>
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/hero" element={<Hero />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
