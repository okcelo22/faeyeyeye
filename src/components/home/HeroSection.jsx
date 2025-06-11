import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { Button } from '@/components/ui/button';
    import { motion } from 'framer-motion';
    import { ArrowDown } from 'lucide-react';
    import { Link } from 'react-router-dom';

    const HeroSection = () => {
      const { t } = useTranslation();
      const consultationLink = "https://faye-youker.clientsecure.me/";

      const heroVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } },
      };

      const contentVariants = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.2, ease: "easeOut" } },
      };
      
      const imageVariants = {
        initial: { scale: 0.8, opacity: 0 },
        animate: { scale: 1, opacity: 1, transition: { duration: 0.7, delay: 0.1, type: "spring", stiffness: 150 } },
      }

      const nameVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.4, ease: "easeOut" } },
      };

      const subtitleVariants = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.7, delay: 0.6, ease: "easeOut" } },
      };

      const buttonVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1, transition: { duration: 0.5, delay: 0.8, type: "spring", stiffness: 200, damping: 15 } },
      };
      
      const arrowVariants = {
        initial: { opacity: 0, y: -10 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.2, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" } },
      };

      return (
        <motion.section
          className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center text-center py-16 px-4 sm:px-6 lg:px-8 overflow-hidden"
          variants={heroVariants}
          initial="initial"
          animate="animate"
        >
          <div className="absolute inset-0 z-0">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="xMidYMid slice">
              <defs>
                <filter id="watercolorPaintEffect" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="20" result="blurred" />
                  <feTurbulence type="fractalNoise" baseFrequency="0.008 0.015" numOctaves="3" seed="25" result="turbulence"/>
                  <feDisplacementMap in2="turbulence" in="blurred" scale="80" xChannelSelector="R" yChannelSelector="G" result="displaced"/>
                  <feGaussianBlur in="displaced" stdDeviation="5" result="softDisplaced"/>
                  <feComponentTransfer in="softDisplaced" result="finalAlpha">
                    <feFuncA type="table" tableValues="0 0.3 0.5 0.3 0"/>
                  </feComponentTransfer>
                  <feMerge>
                    <feMergeNode in="finalAlpha"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
                <linearGradient id="pinkWashGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" style={{stopColor: 'rgba(244, 114, 182, 0.15)', stopOpacity: 1}} /> 
                  <stop offset="50%" style={{stopColor: 'rgba(236, 72, 153, 0.08)', stopOpacity: 1}} /> 
                  <stop offset="100%" style={{stopColor: 'rgba(244, 114, 182, 0.12)', stopOpacity: 1}} />
                </linearGradient>
              </defs>
              
              <rect width="100%" height="100%" fill="url(#pinkWashGradient)" filter="url(#watercolorPaintEffect)" className="opacity-80" />

              <ellipse cx="20%" cy="25%" rx="30%" ry="30%" fill="rgba(244, 114, 182, 0.08)" filter="url(#watercolorPaintEffect)" className="opacity-70" />
              <ellipse cx="80%" cy="75%" rx="35%" ry="35%" fill="rgba(236, 72, 153, 0.06)" filter="url(#watercolorPaintEffect)" className="opacity-60" />
              <ellipse cx="50%" cy="50%" rx="40%" ry="40%" fill="rgba(192, 132, 252, 0.04)" filter="url(#watercolorPaintEffect)" className="opacity-50" />
            </svg>
          </div>

          <motion.div 
            className="relative z-10 flex flex-col items-center"
            variants={contentVariants}
          >
            <motion.div
              className="mb-6 md:mb-8"
              variants={imageVariants}
            >
              <img 
                className="w-36 h-36 md:w-44 md:h-44 rounded-full object-cover shadow-xl border-4 border-white dark:border-slate-800"
                alt={t('hero.portraitAlt')}
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/8003a3fabfe8e10e795c24812b6882fc.jpg" />
            </motion.div>

            <motion.h1
              className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-slate-800 dark:text-slate-100 mb-3 md:mb-4"
              variants={nameVariants}
            >
              {t('hero.name')}
            </motion.h1>

            <motion.p
              className="font-sans text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-8 md:mb-10 max-w-xl"
              variants={subtitleVariants}
            >
              {t('hero.newSubtitle')}
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 mb-12 md:mb-16"
              variants={staggerContainer}
            >
              <motion.div variants={buttonVariants}>
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg rounded-lg px-8 py-3 text-base md:text-lg w-full sm:w-auto" asChild>
                  <a href={consultationLink} target="_blank" rel="noopener noreferrer">
                    {t('hero.ctaSchedule')}
                  </a>
                </Button>
              </motion.div>
              <motion.div variants={buttonVariants}>
                <Button variant="outline" size="lg" className="border-primary text-primary bg-white hover:bg-primary/5 dark:bg-slate-800 dark:text-primary dark:hover:bg-primary/10 dark:border-primary shadow-lg rounded-lg px-8 py-3 text-base md:text-lg w-full sm:w-auto" asChild>
                  <Link to="/services">
                    {t('hero.ctaExplore')}
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            
            <motion.div variants={arrowVariants}>
              <ArrowDown className="h-8 w-8 text-slate-500 dark:text-slate-400" />
            </motion.div>
          </motion.div>
        </motion.section>
      );
    };

    const staggerContainer = {
      initial: {},
      animate: { transition: { staggerChildren: 0.1 } },
    };
    
    export default HeroSection;