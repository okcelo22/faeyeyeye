import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { motion } from 'framer-motion';
    import { AnimatedSection } from '@/components/Layout';

    const WhyChooseSection = ({ items }) => {
      const { t } = useTranslation();

      const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
      };
      
      const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1,
          },
        },
      };

      return (
        <AnimatedSection className="py-12 bg-muted/30 dark:bg-muted/10 rounded-xl">
          <motion.h2 
            className="text-3xl md:text-4xl font-heading font-semibold text-center text-primary mb-12"
            variants={fadeInUp}
          >
            {t('whyChoose.title')}
          </motion.h2>
          <motion.div 
            className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
            variants={staggerContainer}
          >
            {items.map((item, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center h-full shadow-lg hover:shadow-primary/20 dark:hover:shadow-primary/30 transition-all duration-300 transform hover:-translate-y-2 hover:scale-105 border border-border bg-card">
                  <CardHeader>
                    <div className="mx-auto bg-primary/10 dark:bg-primary/20 p-4 rounded-full w-fit mb-4">
                      {React.cloneElement(item.icon, { className: `${item.icon.props.className} h-10 w-10`})}
                    </div>
                    <CardTitle className="text-xl text-primary">{t(item.titleKey)}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80">{t(item.descriptionKey)}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </AnimatedSection>
      );
    };

    export default WhyChooseSection;