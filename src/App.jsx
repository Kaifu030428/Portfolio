import React, { Suspense, useState, useEffect } from 'react';
import { BrowserRouter } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import {
  LazyHero as Hero,
  LazyAbout as About,
  LazyTech as Tech,
  LazyExperience as Experience,
  LazyWorks as Works,
  LazyFeedbacks as Feedbacks,
  LazyContact as Contact,
  Navbar,
  StarsCanvas,
} from './components';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      {!loading && (
        <BrowserRouter>
          <div className='relative z-0 bg-primary'>
            <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
              <Navbar />
              <Suspense fallback={<div>Loading...</div>}>
                <Hero />
              </Suspense>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <About />
              <Experience />
              <Tech />
              <Works />
              <Feedbacks />
              <Contact />
            </Suspense>
            <div className='relative z-0'>
              <StarsCanvas />
            </div>
            <Footer />
          </div>
        </BrowserRouter>
      )}
    </>
  );
};

export default App;
