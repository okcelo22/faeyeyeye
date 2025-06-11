import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';
import { AnimatedSection } from '@/components/Layout';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const CredentialsPage = () => {
  const { t } = useTranslation();
  
  const licenses = [
    { titleKey: "credentialsPage.license1" },
    { titleKey: "credentialsPage.license2" },
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
    borderColor: "hsl(var(--primary))",
    boxShadow: "0px 8px 15px rgba(var(--color-primary-rgb), 0.1)",
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
          className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12"
          variants={itemVariants}
        >
          {t('credentialsPage.title')}
        </motion.h1>
      </AnimatedSection>

      <AnimatedSection amount={0.2}>
        <motion.div variants={itemVariants}>
          <h2 className="flex items-center text-3xl font-semibold text-primary mb-6">
            <Award className="h-8 w-8 text-primary mr-3" />
            {t('credentialsPage.licensesTitle')}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {licenses.map((license, index) => (
              <motion.div 
                key={index} 
                whileHover={cardHoverEffect}
                className="h-full"
              >
                <Card className="h-full bg-card border-border shadow-md rounded-lg transition-all duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{t(license.titleKey)}</CardTitle>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </AnimatedSection>
    </motion.div>
  );
};

export default CredentialsPage;