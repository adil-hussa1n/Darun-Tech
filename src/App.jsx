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

  useEffect(() => {
    // Set a shorter timeout for the preloader to improve user experience
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2500); // Reduced from 5000ms to 2500ms for faster loading
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="relative z-0 bg-primary">
        {loading ? (
          <Preloader />
        ) : (
          <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
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
        )}
      </div>
    </Router>
  );
};

export default App;
