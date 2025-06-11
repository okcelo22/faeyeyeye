import React, { useState, useEffect, useCallback } from 'react';
    import { useTranslation } from 'react-i18next';
    import { Button } from '@/components/ui/button';
    import { Card, CardContent } from '@/components/ui/card';
    import { ChevronLeft, ChevronRight, Star, UserCircle2 } from 'lucide-react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { AnimatedSection } from '@/components/Layout';

    const TestimonialCarousel = ({ testimonials }) => {
      const [currentIndex, setCurrentIndex] = useState(0);
      const { t } = useTranslation();

      const handleNext = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
      }, [testimonials.length]);

      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
      };

      useEffect(() => {
        const timer = setTimeout(handleNext, 8000); // Slightly longer for reading
        return () => clearTimeout(timer);
      }, [currentIndex, handleNext]);
      
      if (!testimonials || testimonials.length === 0) {
        return null;
      }

      const currentTestimonial = testimonials[currentIndex];

      const slideVariants = {
        enter: (direction) => ({
          x: direction > 0 ? '100%' : '-100%',
          opacity: 0,
          scale: 0.95,
        }),
        center: {
          zIndex: 1,
          x: 0,
          opacity: 1,
          scale: 1,
        },
        exit: (direction) => ({
          zIndex: 0,
          x: direction < 0 ? '100%' : '-100%',
          opacity: 0,
          scale: 0.95,
        }),
      };
      
      const swipeConfidenceThreshold = 10000;
      const swipePower = (offset, velocity) => Math.abs(offset) * velocity;

      return (
        <AnimatedSection className="py-16 bg-gradient-to-b from-muted/20 via-background to-muted/20 overflow-hidden">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-heading font-semibold text-primary mb-3">
              {t('homePage.testimonialsTitleNew')}
            </h2>
            <p className="text-lg text-foreground/70 max-w-xl mx-auto">
              {t('homePage.testimonialsSubtitle')}
            </p>
          </div>
          
          <div className="relative max-w-3xl mx-auto px-4">
            <div className="overflow-hidden relative min-h-[420px] md:min-h-[380px]">
              <AnimatePresence initial={false} custom={currentIndex}>
                <motion.div
                  key={currentIndex}
                  custom={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.4 },
                    scale: { duration: 0.4}
                  }}
                  drag="x"
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.6}
                  onDragEnd={(e, { offset, velocity }) => {
                    const swipe = swipePower(offset.x, velocity.x);
                    if (swipe < -swipeConfidenceThreshold) {
                      handleNext();
                    } else if (swipe > swipeConfidenceThreshold) {
                      handlePrev();
                    }
                  }}
                  className="absolute inset-0"
                >
                  <Card className="h-full flex flex-col justify-between text-left shadow-2xl border-border bg-card p-6 md:p-8 rounded-xl">
                    <div>
                      <div className="flex items-start space-x-4 mb-4">
                        <UserCircle2 className="h-16 w-16 text-primary/70 opacity-80 flex-shrink-0 mt-1" />
                        <div>
                          <h3 className="text-xl font-semibold text-foreground">{currentTestimonial.author}</h3>
                          <p className="text-sm text-foreground/60">{currentTestimonial.meta}</p>
                        </div>
                      </div>
                      <div className="flex items-center mb-5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className={`h-5 w-5 ${i < (currentTestimonial.rating || 5) ? 'text-yellow-400 fill-yellow-400' : 'text-muted-foreground/30'}`} />
                        ))}
                      </div>
                      <CardContent className="p-0">
                        <p className="text-md md:text-lg text-foreground/80 leading-relaxed">"{currentTestimonial.quote}"</p>
                      </CardContent>
                    </div>
                  </Card>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-center items-center space-x-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                className="bg-background/80 hover:bg-muted text-primary rounded-full shadow-md w-12 h-12 border-primary/30 hover:border-primary"
                onClick={handlePrev}
                aria-label={t('homePage.previousTestimonial')}
              >
                <ChevronLeft className="h-7 w-7" />
              </Button>
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${currentIndex === index ? 'bg-primary scale-125 ring-2 ring-primary/30 ring-offset-2 ring-offset-background' : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'}`}
                    aria-label={`${t('homePage.goToSlide')} ${index + 1}`}
                  />
                ))}
              </div>
              <Button
                variant="outline"
                size="icon"
                className="bg-background/80 hover:bg-muted text-primary rounded-full shadow-md w-12 h-12 border-primary/30 hover:border-primary"
                onClick={handleNext}
                aria-label={t('homePage.nextTestimonial')}
              >
                <ChevronRight className="h-7 w-7" />
              </Button>
            </div>
          </div>
        </AnimatedSection>
      );
    };

    export default TestimonialCarousel;