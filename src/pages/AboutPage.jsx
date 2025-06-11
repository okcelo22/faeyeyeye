import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Quote, ArrowRight, User, Brain, Award, Building, MapPin, Sparkles, Camera, Heart, Users, ShieldCheck, TrendingUp, HeartHandshake as Handshake, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/Layout';

const AboutPage = () => {
  const { t } = useTranslation();
  
  const coreValuesData = [
    { key: "value1", icon: Heart, textKey: "aboutApproachPage.value1", color: "text-pink-500", bgColor: "bg-pink-500/10 hover:bg-pink-500/20" },
    { key: "value2", icon: Users, textKey: "aboutApproachPage.value2", color: "text-purple-500", bgColor: "bg-purple-500/10 hover:bg-purple-500/20" },
    { key: "value3", icon: ShieldCheck, textKey: "aboutApproachPage.value3", color: "text-green-500", bgColor: "bg-green-500/10 hover:bg-green-500/20" },
    { key: "value4", icon: Sparkles, textKey: "aboutApproachPage.value4", color: "text-yellow-500", bgColor: "bg-yellow-500/10 hover:bg-yellow-500/20" },
    { key: "value5", icon: TrendingUp, textKey: "aboutApproachPage.value5", color: "text-blue-500", bgColor: "bg-blue-500/10 hover:bg-blue-500/20" },
    { key: "value6", icon: Handshake, textKey: "aboutApproachPage.value6", color: "text-teal-500", bgColor: "bg-teal-500/10 hover:bg-teal-500/20" },
  ];


  const fayeImage = {
    src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/5cc01575a0083c477f79819de3127eb6.jpg",
    altKey: "aboutApproachPage.fayeImage1Alt"
  };

  const officeLocationImages = [
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/5cbec4180149e3f3131a9f88fe858387.jpg", altKey: "aboutApproachPage.officeImage1Alt" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/4adaf3e95949f8f0bebf0e2397736e20.jpg", altKey: "aboutApproachPage.officeImage2Alt" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/067620ef755a6477e5411bfac6afb0e3.jpg", altKey: "aboutApproachPage.officeImage3Alt" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/2c6d17bff3c091fd06f72ff01e263036.jpg", altKey: "aboutApproachPage.officeImage4Alt" },
  ];

  const uploadedOfficeImages = [
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/f72fb3a8488451138bcbfc60a994bcb5.jpg", altKey: "aboutApproachPage.officeGalleryImage1Alt" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/6692c376864fbda6de4161abcd0df9e0.jpg", altKey: "aboutApproachPage.officeGalleryImage2Alt" },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/77ef8bc43af1e5f68ca5e189c3708bc2.jpg", altKey: "aboutApproachPage.officeGalleryImage3Alt" },
  ];


  const fadeInUp = {
    initial: { opacity: 0, y: 30, scale: 0.95 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] } }
  };

  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const imageVariants = {
    initial: { opacity: 0, y: 20, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: 'easeOut' } },
    hover: { scale: 1.05, boxShadow: "0px 10px 20px rgba(var(--primary-rgb), 0.2)", transition: { duration: 0.3 } }
  };
  
  return (
    <motion.div 
      className="space-y-12 md:space-y-20"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <AnimatedSection className="!py-0 md:!py-0">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary text-center flex items-center justify-center space-x-3 mb-12 md:mb-16"
          variants={fadeInUp}
        >
          <User className="h-10 w-10 md:h-12 lg:h-14" />
          <span>{t('aboutApproachPage.pageTitle')}</span>
        </motion.h1>
      </AnimatedSection>

      <AnimatedSection className="!pt-0">
        <motion.div 
          className="bg-gradient-to-br from-card via-muted/30 to-card p-1 rounded-2xl shadow-2xl"
          variants={fadeInUp}
        >
          <Card className="overflow-hidden rounded-xl border-none shadow-inner bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6 md:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <motion.div 
                  className="lg:w-2/5"
                  variants={staggerContainer}
                >
                  <motion.img
                    src={fayeImage.src}
                    alt={t(fayeImage.altKey)}
                    className="rounded-lg shadow-lg object-cover w-full h-[400px]"
                    variants={imageVariants}
                    whileHover="hover"
                  />
                </motion.div>
                <motion.div className="lg:w-3/5 space-y-6" variants={fadeInUp}>
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary flex items-center">
                    <Sparkles className="h-8 w-8 mr-3 text-accent" />
                    {t('aboutApproachPage.welcomeTitle')}
                  </h2>
                  <div className="prose prose-lg xl:prose-xl max-w-none dark:prose-invert text-foreground/90 leading-relaxed">
                    <p>{t('aboutApproachPage.fullTextP1').replace("Welcome! I'm Faye Youker, a", "I'm Faye Youker, a")}</p>
                    <p>{t('aboutApproachPage.fullTextP2')}</p>
                    <p>{t('aboutApproachPage.fullTextP3')}</p>
                    <p>{t('aboutApproachPage.fullTextP4')}</p>
                  </div>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-6 flex items-center justify-center">
            <Lightbulb className="h-8 w-8 mr-3 text-accent" />
            {t('aboutApproachPage.philosophyTitle')}
          </h2>
          <p className="text-lg text-foreground/90 leading-relaxed mb-8">{t('aboutApproachPage.philosophyText')}</p>
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-lg shadow-lg border-primary/30 md:mx-auto md:max-w-2xl">
            <CardContent className="p-0 flex flex-col items-center justify-center">
              <blockquote className="text-xl italic text-primary font-medium text-center">
                <Quote className="h-8 w-8 text-primary/70 mb-2 inline-block transform -scale-x-100" />
                {t('aboutApproachPage.quoteText')}
                <Quote className="h-8 w-8 text-primary/70 mt-2 inline-block" />
              </blockquote>
              <p className="text-right mt-4 text-foreground/80 w-full">- {t('aboutApproachPage.quoteAuthor')}</p>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatedSection>
      
      <AnimatedSection>
        <motion.div
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary text-center mb-12 flex items-center justify-center">
            <Award className="h-8 w-8 mr-3 text-accent" />
            {t('aboutApproachPage.valuesTitle')}
          </h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
          >
            {coreValuesData.map((value) => {
              const IconComponent = value.icon;
              return (
                <motion.div key={value.key} variants={fadeInUp}>
                  <Card className={`h-full ${value.bgColor} border-transparent shadow-lg hover:shadow-xl transition-all duration-300 group rounded-xl overflow-hidden`}>
                    <CardContent className="p-6 text-center flex flex-col items-center justify-center h-full">
                      <div className={`p-4 rounded-full bg-background/20 mb-4 transition-transform duration-300 group-hover:scale-110`}>
                        <IconComponent className={`h-10 w-10 ${value.color}`} />
                      </div>
                      <p className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{t(value.textKey)}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.div 
          className="bg-gradient-to-br from-card via-muted/30 to-card p-1 rounded-2xl shadow-2xl"
          variants={fadeInUp}
        >
          <Card className="overflow-hidden rounded-xl border-none shadow-inner bg-card/80 backdrop-blur-sm">
            <CardContent className="p-6 md:p-10 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
                <motion.div className="lg:w-3/5 space-y-6" variants={fadeInUp}>
                  <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary flex items-center">
                    <Building className="h-8 w-8 mr-3 text-accent" />
                    {t('aboutApproachPage.officeTitle')}
                  </h2>
                  <p className="text-lg text-foreground/90 leading-relaxed">{t('aboutApproachPage.officeText')}</p>
                  <div className="mt-6">
                    <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center">
                      <MapPin className="h-6 w-6 mr-2 text-primary" />
                      {t('aboutApproachPage.locationTitle')}
                    </h3>
                    <p className="text-foreground/80">{t('aboutApproachPage.address')}</p>
                    <p className="text-sm text-foreground/70 mt-1">{t('aboutApproachPage.accessibilityInfo')}</p>
                     <Link to="/contact" className="inline-flex items-center text-primary hover:underline mt-4 group">
                        {t('contactPage.findOfficeTitle')}
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                  </div>
                </motion.div>
                <motion.div 
                  className="lg:w-2/5 grid grid-cols-2 gap-4"
                  variants={staggerContainer}
                >
                  {officeLocationImages.map((img, index) => (
                    <motion.img
                      key={index}
                      src={img.src}
                      alt={t(img.altKey)}
                      className="rounded-lg shadow-md object-cover w-full h-40 hover:shadow-xl transition-shadow duration-300"
                      variants={imageVariants}
                      whileHover="hover"
                    />
                  ))}
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </AnimatedSection>

      <AnimatedSection>
        <motion.div
          variants={fadeInUp}
        >
          <h2 className="text-3xl md:text-4xl font-heading font-semibold text-primary text-center mb-10 flex items-center justify-center">
            <Camera className="h-8 w-8 mr-3 text-accent" />
            {t('aboutApproachPage.officeGalleryTitle')}
          </h2>
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            variants={staggerContainer}
          >
            {uploadedOfficeImages.map((img, index) => (
              <motion.div 
                key={index} 
                variants={fadeInUp}
                className="overflow-hidden rounded-xl shadow-lg group"
              >
                <motion.img
                  src={img.src}
                  alt={t(img.altKey)}
                  className="w-full h-72 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                  variants={imageVariants}
                  
                />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </AnimatedSection>

    </motion.div>
  );
};

export default AboutPage;