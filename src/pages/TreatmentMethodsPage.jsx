import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { motion } from 'framer-motion';
    import { Brain, MessageCircle, Eye, Zap, Users, Puzzle, UserCheck } from 'lucide-react';
    import { AnimatedSection } from '@/components/Layout';
    import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '@/components/ui/card';

    const TreatmentMethodsPage = () => {
      const { t } = useTranslation();

      const methods = [
        {
          icon: <Brain className="h-10 w-10 text-primary mb-4" />,
          titleKey: 'treatmentMethodsPage.method1Title',
          descriptionKey: 'treatmentMethodsPage.method1Desc',
        },
        {
          icon: <MessageCircle className="h-10 w-10 text-secondary mb-4" />,
          titleKey: 'treatmentMethodsPage.method2Title',
          descriptionKey: 'treatmentMethodsPage.method2Desc',
        },
        {
          icon: <Eye className="h-10 w-10 text-accent mb-4" />,
          titleKey: 'treatmentMethodsPage.method3Title',
          descriptionKey: 'treatmentMethodsPage.method3Desc',
        },
        {
          icon: <Zap className="h-10 w-10 text-pink-500 mb-4" />,
          titleKey: 'treatmentMethodsPage.method4Title',
          descriptionKey: 'treatmentMethodsPage.method4Desc',
        },
        {
          icon: <UserCheck className="h-10 w-10 text-teal-500 mb-4" />,
          titleKey: 'treatmentMethodsPage.method5Title',
          descriptionKey: 'treatmentMethodsPage.method5Desc',
        },
        {
          icon: <Puzzle className="h-10 w-10 text-indigo-500 mb-4" />,
          titleKey: 'treatmentMethodsPage.method6Title',
          descriptionKey: 'treatmentMethodsPage.method6Desc',
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
              {t('treatmentMethodsPage.title')}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-foreground/80 text-center max-w-3xl mx-auto mb-12"
              variants={itemVariants}
            >
              {t('treatmentMethodsPage.intro')}
            </motion.p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {methods.map((method, index) => (
              <AnimatedSection key={index} amount={0.2} className="h-full">
                <motion.div 
                  variants={itemVariants}
                  whileHover={cardHoverEffect}
                  className="h-full"
                >
                  <Card className="h-full flex flex-col items-center text-center p-6 bg-card border-border shadow-lg hover:shadow-primary/20 rounded-xl transition-all duration-300">
                    <CardHeader className="items-center pb-2">
                      {method.icon}
                      <CardTitle className="text-2xl font-semibold text-primary">{t(method.titleKey)}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/70 leading-relaxed">{t(method.descriptionKey)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center mt-16">
            <motion.div variants={itemVariants}>
              <p className="text-xl text-foreground/90 font-medium max-w-3xl mx-auto">
                {t('treatmentMethodsPage.collaborativeProcess')}
              </p>
            </motion.div>
          </AnimatedSection>
        </motion.div>
      );
    };

    export default TreatmentMethodsPage;