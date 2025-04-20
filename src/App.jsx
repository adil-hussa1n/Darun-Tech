import { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const Contact = lazy(() => import('./pages/Contact'));

// Packages are now integrated directly into the Services component

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Set a timeout to match the preloader duration
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // Match this with the preloader duration (20s delay + 3s fade)
    
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
            <Suspense fallback={null}> {/* No loader shown after preloader is done */}
              <Routes>
                <Route path="/" element={<Home />} />
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
