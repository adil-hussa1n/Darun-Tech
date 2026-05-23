import { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const Home = lazy(() => import('./pages/Home'));

const App = () => {
  const [loading, setLoading] = useState(true);
  const [renderPreloader, setRenderPreloader] = useState(true);

  useEffect(() => {
    // Short preloader — just long enough for the animation, then get out of the way
    const timer = setTimeout(() => {
      setLoading(false);
      const unmountTimer = setTimeout(() => {
        setRenderPreloader(false);
      }, 400);
      return () => clearTimeout(unmountTimer);
    }, 800);
    
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
            </Routes>
          </Suspense>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
