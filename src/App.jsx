import React, { Suspense } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Layout from '@/components/Layout';
import HomePage from '@/pages/HomePage';
import ServicesPage from '@/pages/ServicesPage';
import AboutPage from '@/pages/AboutPage';
import CredentialsPage from '@/pages/CredentialsPage';
import ClientFocusPage from '@/pages/ClientFocusPage';
// TreatmentMethodsPage import is removed as it's now part of HomePage
import FeesPage from '@/pages/FeesPage';
import ContactPage from '@/pages/ContactPage';
import NotFoundPage from '@/pages/NotFoundPage';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  in: {
    opacity: 1,
    y: 0,
  },
  out: {
    opacity: 0,
    y: -20,
  },
};

const pageTransition = {
  type: 'tween',
  ease: 'easeInOut',
  duration: 0.3,
};

function App() {
  const location = useLocation();

  return (
    <Layout>
      <Suspense fallback={<div className="flex justify-center items-center min-h-[60vh]"><p className="text-primary text-xl">Loading...</p></div>}>
        <AnimatePresence mode="wait" initial={false}>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<AnimatedPage><HomePage /></AnimatedPage>} />
            <Route path="/services" element={<AnimatedPage><ServicesPage /></AnimatedPage>} />
            <Route path="/about" element={<AnimatedPage><AboutPage /></AnimatedPage>} />
            <Route path="/credentials" element={<AnimatedPage><CredentialsPage /></AnimatedPage>} />
            <Route path="/client-focus" element={<AnimatedPage><ClientFocusPage /></AnimatedPage>} />
            {/* Route for /treatment-methods is removed */}
            <Route path="/fees" element={<AnimatedPage><FeesPage /></AnimatedPage>} />
            <Route path="/contact" element={<AnimatedPage><ContactPage /></AnimatedPage>} />
            <Route path="*" element={<AnimatedPage><NotFoundPage /></AnimatedPage>} />
          </Routes>
        </AnimatePresence>
      </Suspense>
    </Layout>
  );
}

const AnimatedPage = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
    className="min-h-[60vh]"
  >
    {children}
  </motion.div>
);

export default App;