import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Link } from 'react-router-dom';
    import { ArrowRight } from 'lucide-react';
    import { AnimatedSection } from '@/components/Layout';

    const ServicesPage = () => {
      const { t } = useTranslation();

      const services = [
        { 
          id: 'anxiety', 
          titleKey: 'servicesPage.anxiety', 
          descriptionKey: 'servicesPage.anxietyDesc',
          imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/5e0c6f2ef93496af5e6b327de5bb336a.jpg',
          altTextKey: 'servicesPage.anxietyImageAlt'
        },
        { 
          id: 'trauma', 
          titleKey: 'servicesPage.trauma', 
          descriptionKey: 'servicesPage.traumaDesc',
          imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/fa09840d0d851218a9fdd73504f52835.jpg',
          altTextKey: 'servicesPage.traumaImageAlt'
        },
        { 
          id: 'depression', 
          titleKey: 'servicesPage.depression', 
          descriptionKey: 'servicesPage.depressionDesc',
          imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/9b8464ed1b8867337f02d9e66fb49861.jpg',
          altTextKey: 'servicesPage.depressionImageAlt'
        },
        { 
          id: 'lgbtq', 
          titleKey: 'servicesPage.lgbtq', 
          descriptionKey: 'servicesPage.lgbtqDesc',
          imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/f2eff5aabbac96b94bff70255b2cad2e.jpg',
          altTextKey: 'servicesPage.lgbtqImageAlt'
        },
        { 
          id: 'couples', 
          titleKey: 'servicesPage.couples', 
          descriptionKey: 'servicesPage.couplesDesc',
          imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/48810309a65ebc16014f08af6df02494.jpg',
          altTextKey: 'servicesPage.couplesImageAlt'
        },
        { 
          id: 'womensIssues', 
          titleKey: 'servicesPage.womensIssues', 
          descriptionKey: 'servicesPage.womensIssuesDesc',
          imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/5b2c3e2ba0dd2ea335b0d11560c738f6.jpg',
          altTextKey: 'servicesPage.womensIssuesImageAlt'
        },
        { 
          id: 'lifeTransitions', 
          titleKey: 'servicesPage.lifeTransitions', 
          descriptionKey: 'servicesPage.lifeTransitionsDesc',
          imageUrl: 'https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/77affe72f3927237ba056470012ced85.jpg',
          altTextKey: 'servicesPage.lifeTransitionsImageAlt'
        },
      ];

      const pageVariants = {
        initial: { opacity: 0 },
        animate: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
      };

      const itemVariants = {
        initial: { opacity: 0, y: 30, scale: 0.9 },
        animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: [0.6, -0.05, 0.01, 0.99] } },
      };

      return (
        <motion.div 
          className="space-y-16"
          variants={pageVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-heading font-bold text-primary text-center mb-12"
            variants={itemVariants}
          >
            {t('servicesPage.title')}
          </motion.h1>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service) => (
              <AnimatedSection key={service.id} amount={0.2} className="h-full">
                <motion.div variants={itemVariants} className="h-full">
                  <Card className="group h-full shadow-xl hover:shadow-primary/25 transition-all duration-300 transform hover:-translate-y-2 hover:scale-103 flex flex-col overflow-hidden border-border bg-card rounded-xl">
                    <div className="relative h-56 w-full overflow-hidden">
                      <img 
                        src={service.imageUrl} 
                        alt={t(service.altTextKey, { defaultValue: "Service illustration" })} 
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20"></div>
                    </div>
                    <CardHeader className="pt-6">
                      <CardTitle className="text-2xl text-primary font-semibold">{t(service.titleKey)}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex-grow pb-6">
                      <p className="text-foreground/80 leading-relaxed">{t(service.descriptionKey)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          
          <AnimatedSection className="text-center mt-20">
            <motion.div variants={itemVariants}>
              <p className="text-lg text-foreground/90 mb-6 max-w-2xl mx-auto">
                {t('servicesPage.flexibleApproach')}
              </p>
              <Button asChild size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-95 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300 group px-10 py-3 text-lg">
                <Link to="/contact" className="flex items-center">
                  {t('hero.ctaSchedule')}
                  <ArrowRight className="ml-2.5 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
                </Link>
              </Button>
            </motion.div>
          </AnimatedSection>
        </motion.div>
      );
    };

    export default ServicesPage;