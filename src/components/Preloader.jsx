import { useEffect, useState } from 'react';
import { logo } from '../assets';

// Pure CSS preloader — zero JS library dependencies.
// framer-motion, GSAP etc. all load in the background during these 800ms.
const Preloader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const duration = 750;
    const intervalTime = 25;
    const steps = duration / intervalTime;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const next = Math.min(Math.round((step / steps) * 100), 100);
      setProgress(next);
      if (next >= 100) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes _blobA {
          0%,100%{transform:scale(1);opacity:.15}
          50%{transform:scale(1.15);opacity:.25}
        }
        @keyframes _blobB {
          0%,100%{transform:scale(1.1);opacity:.1}
          50%{transform:scale(1);opacity:.2}
        }
        @keyframes _cardIn {
          from{opacity:0;transform:scale(.95)}
          to{opacity:1;transform:scale(1)}
        }
        @keyframes _spinCW  { to{transform:rotate(360deg)} }
        @keyframes _spinCCW { to{transform:rotate(-360deg)} }
        @keyframes _logoIn {
          from{transform:scale(.8);opacity:0}
          to{transform:scale(1);opacity:1}
        }
        @keyframes _letterUp {
          from{transform:translateY(24px);opacity:0}
          to{transform:translateY(0);opacity:1}
        }
        @keyframes _shimmer {
          from{transform:translateX(-100%)}
          to{transform:translateX(300%)}
        }
        .pl-blob1{animation:_blobA 6s ease-in-out infinite}
        .pl-blob2{animation:_blobB 7s ease-in-out 1s infinite}
        .pl-card {animation:_cardIn .4s ease-out forwards}
        .pl-ring1{animation:_spinCW  3s linear infinite}
        .pl-ring2{animation:_spinCCW 8s linear infinite}
        .pl-logo {animation:_logoIn .5s cubic-bezier(.34,1.56,.64,1) forwards;opacity:0}
        .pl-letter{display:inline-block;opacity:0;animation:_letterUp .35s ease-out forwards}
        .pl-tagline{opacity:0;animation:_letterUp .35s ease-out .55s forwards}
        .pl-shimmer{animation:_shimmer 1.5s linear infinite}
      `}</style>

      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#050816] overflow-hidden">

        {/* Ambient blobs — pure CSS */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="pl-blob1 absolute top-10 left-10 w-64 h-64 bg-[#915EFF] rounded-full"
               style={{filter:'blur(100px)', opacity:.15}} />
          <div className="pl-blob2 absolute bottom-10 right-10 w-80 h-80 bg-blue-500 rounded-full"
               style={{filter:'blur(120px)', opacity:.1}} />
        </div>

        {/* Card */}
        <div className="pl-card glassmorphism p-8 md:p-12 rounded-[32px] max-w-[420px] w-[90%]
                        flex flex-col items-center border border-white/10 shadow-2xl
                        relative z-10 glow-shadow-purple">

          {/* Spinning rings + logo */}
          <div className="relative mb-6">
            <div className="pl-ring1 absolute -inset-2.5 rounded-full border border-dashed border-[#915EFF]/40" />
            <div className="pl-ring2 absolute -inset-4   rounded-full border border-double border-blue-500/20" />
            <div className="pl-logo relative w-24 h-24 rounded-full bg-[#151030]
                            flex items-center justify-center p-2 border border-white/10">
              <img src={logo} alt="Darun Tech Logo" className="w-full h-full object-contain rounded-full" />
            </div>
          </div>

          {/* Letters */}
          <div className="flex items-center justify-center mb-3">
            <div className="flex">
              {['D','A','R','U','N'].map((l, i) => (
                <span key={i} className="pl-letter text-2xl font-black text-white mx-0.5"
                      style={{animationDelay:`${.15 + i*.07}s`}}>{l}</span>
              ))}
              <span className="pl-letter text-2xl font-black text-[#915EFF] mx-0.5"
                    style={{animationDelay:`${.15 + 5*.07}s`}}>TECH</span>
            </div>
          </div>

          {/* Tagline */}
          <p className="pl-tagline text-gray-400 text-xs font-semibold uppercase tracking-widest
                        text-center max-w-[280px]">
            Unlock the Power of Reviews
          </p>

          {/* Progress bar */}
          <div className="w-full mt-8">
            <div className="flex justify-between text-xs font-bold text-gray-400 mb-2 px-1">
              <span className="uppercase tracking-wider">Loading Assets</span>
              <span className="text-[#915EFF]">{progress}%</span>
            </div>
            <div className="relative w-full h-2 bg-[#050816]/80 rounded-full overflow-hidden border border-white/5">
              <div className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#915EFF] to-blue-500
                              rounded-full transition-all duration-75 ease-linear"
                   style={{width:`${progress}%`}} />
              <div className="pl-shimmer absolute inset-y-0 left-0 w-1/3
                              bg-gradient-to-r from-transparent via-white/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Preloader;