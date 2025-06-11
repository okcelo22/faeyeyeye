import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { Menu, X, HeartHandshake } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: t('nav.home') },
    { to: '/services', label: t('nav.services') },
    { to: '/about', label: t('nav.about') },
    { to: '/credentials', label: t('nav.credentials') },
    // { to: '/treatment-methods', label: t('nav.treatmentMethods') }, // Removed as requested
    { to: '/fees', label: t('nav.fees') },
    { to: '/contact', label: t('nav.contact') },
  ];

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
    exit: { opacity: 0, y: -20 }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 50 }}
      className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur-md shadow-sm"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center space-x-2 text-primary hover:text-primary/80 transition-colors">
            <HeartHandshake className="h-8 w-8" />
            <div className="flex flex-col">
              <span className="font-heading text-xl font-bold">Faye Youker</span>
              <span className="text-xs text-muted-foreground">LMSW, LCSW</span>
            </div>
          </Link>

          <nav className="hidden md:flex space-x-2 lg:space-x-4 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted/50 hover:text-primary/90'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-2"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="md:hidden bg-background/95 backdrop-blur-md shadow-lg absolute top-full left-0 right-0 pb-4 z-50"
          >
            <nav className="flex flex-col space-y-2 px-4 pt-2">
              {navLinks.map((link) => (
                <motion.div key={link.to} variants={mobileLinkVariants}>
                  <NavLink
                    to={link.to}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                        isActive
                          ? 'bg-primary/10 text-primary'
                          : 'text-foreground hover:bg-muted hover:text-primary/90'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;