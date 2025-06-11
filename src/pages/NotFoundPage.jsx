import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { Link } from 'react-router-dom';
    import { Button } from '@/components/ui/button';
    import { Frown } from 'lucide-react';
    import { motion } from 'framer-motion';

    const NotFoundPage = () => {
      const { t } = useTranslation();

      return (
        <motion.div 
          className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] text-center p-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Frown className="w-24 h-24 text-primary mb-8" />
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-primary mb-4">
            {t('pageNotFound.title')}
          </h1>
          <p className="text-xl text-foreground/80 mb-8 max-w-md">
            {t('pageNotFound.message')}
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary text-primary-foreground shadow-lg hover:opacity-90">
            <Link to="/">{t('pageNotFound.goHome')}</Link>
          </Button>
        </motion.div>
      );
    };

    export default NotFoundPage;