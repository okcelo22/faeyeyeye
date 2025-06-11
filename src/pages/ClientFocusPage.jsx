import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { motion } from 'framer-motion';
    import { Users, User, Heart, GitBranch, Users2 } from 'lucide-react';
    import { AnimatedSection } from '@/components/Layout';
    import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

    const ClientFocusPage = () => {
      const { t } = useTranslation();

      const focusAreas = [
        {
          icon: <User className="h-10 w-10 text-primary mb-4" />,
          titleKey: 'clientFocusPage.focusArea1Title',
          descriptionKey: 'clientFocusPage.focusArea1Desc',
        },
        {
          icon: <Users className="h-10 w-10 text-secondary mb-4" />,
          titleKey: 'clientFocusPage.focusArea2Title',
          descriptionKey: 'clientFocusPage.focusArea2Desc',
        },
        {
          icon: <Heart className="h-10 w-10 text-pink-500 mb-4" />,
          titleKey: 'clientFocusPage.focusArea3Title',
          descriptionKey: 'clientFocusPage.focusArea3Desc',
        },
        {
          icon: <Users2 className="h-10 w-10 text-accent mb-4" />,
          titleKey: 'clientFocusPage.focusArea4Title',
          descriptionKey: 'clientFocusPage.focusArea4Desc',
        },
        {
          icon: <GitBranch className="h-10 w-10 text-teal-500 mb-4" />,
          titleKey: 'clientFocusPage.focusArea5Title',
          descriptionKey: 'clientFocusPage.focusArea5Desc',
        },
      ];

      const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
      };

      const itemVariants = {
        initial: { opacity: 0, y: 30, scale: 0.95 },
        animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } },
      };
      
      const cardHoverEffect = {
        scale: 1.03,
        boxShadow: "0px 10px 20px rgba(var(--color-primary-rgb), 0.15)",
        transition: { duration: 0.3 }
      };

      return (
        <motion.div 
          className="space-y-12"
          variants={pageVariants}
          initial="initial"
          animate="animate"
        >
          <AnimatedSection amount={0.3}>
            <motion.h1 
              className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-6"
              variants={itemVariants}
            >
              {t('clientFocusPage.title')}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 text-center max-w-3xl mx-auto mb-12"
              variants={itemVariants}
            >
              {t('clientFocusPage.intro')}
            </motion.p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <AnimatedSection key={index} amount={0.2} className="h-full">
                 <motion.div 
                  variants={itemVariants}
                  whileHover={cardHoverEffect}
                  className="h-full"
                 >
                  <Card className="h-full flex flex-col items-center text-center p-6 bg-card border-border shadow-lg hover:shadow-primary/20 rounded-xl transition-all duration-300">
                    <CardHeader className="items-center pb-2">
                      {area.icon}
                      <CardTitle className="text-2xl font-semibold text-primary">{t(area.titleKey)}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70 leading-relaxed">{t(area.descriptionKey)}</p>
                    </CardContent>
                  </Card>
                 </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <motion.div variants={itemVariants}>
              <p className="text-xl text-foreground/90 font-medium max-w-3xl mx-auto">
                {t('clientFocusPage.commitment')}
              </p>
            </motion.div>
          </AnimatedSection>
        </motion.div>
      );
    };

    export default ClientFocusPage;