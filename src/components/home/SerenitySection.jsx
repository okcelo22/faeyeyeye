import React, { useState, useEffect, useCallback } from 'react';
    import { useTranslation } from 'react-i18next';
    import { Button } from '@/components/ui/button';
    import { ChevronLeft, ChevronRight, Heart, CheckCircle, Coffee } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { AnimatedSection } from '@/components/Layout';

    const SerenitySection = ({ images, titleKey = 'homePage.galleryTitle' }) => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const { t } = useTranslation();
    
      const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, [images.length]);
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      };
    
      useEffect(() => {
        const timer = setTimeout(handleNext, 5500);
        return () => clearTimeout(timer);
      }, [currentIndex, handleNext]);
    
      if (!images || images.length === 0) {
        return (
          <AnimatedSection className="py-12 text-center">
            <p>{t('homePage.noImagesAvailable')}</p>
          </AnimatedSection>
        );
      }
    
      const imageVariants = {
        enter: { opacity: 0, scale: 0.9, x: 60 },
        center: { opacity: 1, scale: 1, x: 0, transition: { duration: 0.7, ease: [0.42,0,0.58,1] } },
        exit: { opacity: 0, scale: 0.9, x: -60, transition: { duration: 0.5, ease: [0.42,0,0.58,1] } },
      };

      const textPoints = [
        { icon: Heart, textKey: 'homePage.serenityPoint1', color: 'text-pink-500 dark:text-pink-400' },
        { icon: CheckCircle, textKey: 'homePage.serenityPoint2', color: 'text-green-500 dark:text-green-400' },
        { icon: Coffee, textKey: 'homePage.serenityPoint3', color: 'text-purple-500 dark:text-purple-400' },
      ];
    
      return (
        <AnimatedSection className="py-16 bg-gradient-to-bl from-background via-muted/10 to-background rounded-xl overflow-hidden">
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-center text-primary mb-12">
            {t(titleKey)}
          </h2>
          <div className="container mx-auto grid md:grid-cols-2 gap-10 md:gap-16 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              {textPoints.map((point, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-start space-x-4 p-5 bg-card rounded-lg shadow-xl hover:shadow-primary/10 transition-shadow duration-300 border border-border"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.15, ease: "easeOut" }}
                >
                  <point.icon className={`h-10 w-10 flex-shrink-0 mt-1 ${point.color}`} />
                  <div>
                    <h3 className="text-xl font-semibold text-foreground/90 mb-1">{t(point.textKey + 'Title')}</h3>
                    <p className="text-md text-foreground/80 leading-relaxed">
                      {t(point.textKey + 'Desc')}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
            <motion.div 
              className="relative max-w-md mx-auto md:mx-0 md:max-w-none h-[350px] md:h-[500px] overflow-hidden rounded-2xl shadow-2xl group border-2 border-primary/20"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            >
              <AnimatePresence initial={false} custom={currentIndex}>
                <motion.img
                  key={currentIndex}
                  src={images[currentIndex].src}
                  alt={`${t('homePage.galleryImageAlt')} ${currentIndex + 1} - ${images[currentIndex].alt}`}
                  variants={imageVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  className="w-full h-full object-cover"
                />
              </AnimatePresence>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full p-2.5"
                onClick={handlePrev}
                aria-label={t('homePage.previousImage')}
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full p-2.5"
                onClick={handleNext}
                aria-label={t('homePage.nextImage')}
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2.5">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary scale-125 ring-2 ring-primary/50' : 'bg-white/70 hover:bg-white'}`}
                    aria-label={`${t('homePage.goToSlide')} ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </AnimatedSection>
      );
    };

    export default SerenitySection;