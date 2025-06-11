import React, { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Users, Leaf, ShieldCheck, Brain, MessageCircle, Eye, Zap, UserCheck, Puzzle, Smile, CalendarDays } from 'lucide-react';
import { motion, useScroll, useTransform, useInView, animate } from 'framer-motion';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/Layout';
import HeroSection from '@/components/home/HeroSection';
// TestimonialCarousel import is removed
import SerenitySection from '@/components/home/SerenitySection';
import WhyChooseSection from '@/components/home/WhyChooseSection';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

const ParallaxImageCard = ({ alt, src, className }) => {
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ['-10%', '10%']);

  return (
    <div ref={ref} className={`overflow-hidden rounded-lg shadow-xl border-secondary/50 hover:shadow-2xl transition-shadow duration-300 ${className}`}>
      <motion.img
        style={{ y }}
        className="object-cover w-full h-auto md:h-[450px] transform hover:scale-105 transition-transform duration-500 ease-in-out"
        alt={alt}
        src={src}
      />
    </div>
  );
};

const InsuranceLogosSection = () => {
  const { t } = useTranslation();
  const insurancePlans = [
    { name: "Blue Cross Blue Shield", logoKey: "bcbsLogo", altKey: "homePage.bcbsLogoAlt", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/2eac064511cdbed1658f706410efe674.png" },
    { name: "Aetna", logoKey: "aetnaLogo", altKey: "homePage.aetnaLogoAlt", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/636fc4e61d5931aa67bbbc2ca2fcb77b.png" },
    { name: "Priority Health", logoKey: "priorityHealthLogo", altKey: "homePage.priorityHealthLogoAlt", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/c0075b590dcdb09e35c2d705eb115fc8.png" },
    { name: "Medicaid", logoKey: "medicaidLogo", altKey: "feesPage.medicaidLogoAlt", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/9502f79c80161bab356e9479699e6997.png" },
    { name: "Medicare", logoKey: "medicareLogo", altKey: "feesPage.medicareLogoAlt", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/751cbda2596a5bd61b1c18d09453cfc4.png" },
    { name: "Optum", logoKey: "optumLogo", altKey: "feesPage.optumLogoAlt", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/d5d812839d7f5b729a184b44af439207.png" },
    { name: "TRICARE", logoKey: "tricareLogo", altKey: "feesPage.tricareLogoAlt", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/9570b5e4c7604b1b04adbe4fa83c90c4.png" },
    { name: "United Healthcare", logoKey: "unitedHealthcareLogo", altKey: "feesPage.unitedHealthcareLogoAlt", url: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/c779a3dfb97fc7fd8c9444fc1d4265a5.png" },
  ];
  
  const duplicatedPlans = [...insurancePlans, ...insurancePlans, ...insurancePlans, ...insurancePlans];

  const sectionVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const textContentVariants = { 
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 150, damping: 15 } },
  };

  return (
    <AnimatedSection className="py-16 bg-muted/20 dark:bg-muted/10 rounded-xl overflow-hidden">
      <motion.div 
        className="container mx-auto text-center"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.h2 
          className="text-3xl md:text-4xl font-heading font-semibold text-primary mb-4"
          variants={textContentVariants}
        >
          {t('feesPage.insuranceInNetworkTitle')}
        </motion.h2>
        <motion.p 
          className="text-lg text-foreground/70 mb-12 max-w-2xl mx-auto"
          variants={textContentVariants}
        >
          {t('homePage.insuranceSectionSubtitle')}
        </motion.p>
      </motion.div>
      <div className="scrolling-logos-container">
        <div className="scrolling-logos">
          {duplicatedPlans.map((plan, index) => (
            <div 
              key={`${plan.logoKey}-${index}`}
              className="logo-item p-1 bg-card rounded-md shadow-sm mx-1 flex-shrink-0" 
            >
              <img 
                src={plan.url} 
                alt={t(plan.altKey, plan.name)} 
                className="h-6 md:h-8 object-contain" 
              />
            </div>
          ))}
        </div>
      </div>
      <motion.div 
        className="container mx-auto text-center mt-12" 
        variants={textContentVariants} 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.2 }}
      >
        <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 dark:hover:bg-primary/10">
          <Link to="/fees">
            {t('homePage.insuranceLearnMore')} <ShieldCheck className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>
    </AnimatedSection>
  );
};

const Counter = ({ from, to, duration = 2, className, suffix = "" }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView && ref.current) {
      const controls = animate(from, to, {
        duration: duration,
        onUpdate(value) {
          if (ref.current) {
            ref.current.textContent = Math.round(value).toLocaleString() + suffix;
          }
        }
      });
      return () => controls.stop();
    }
  }, [from, to, duration, isInView, suffix]);

  return <span ref={ref} className={className}>{from.toLocaleString()}{suffix}</span>;
};

const StatsSection = () => {
  const { t } = useTranslation();
  const stats = [
    { icon: <Smile className="h-10 w-10 text-secondary" />, value: 500, labelKey: "homePage.statsHappyClients", suffix: "+" },
    { icon: <CalendarDays className="h-10 w-10 text-accent" />, value: 5, labelKey: "homePage.statsYearsExperience", suffix: "+" },
  ];

  return (
    <AnimatedSection className="py-16 bg-gradient-to-tr from-primary/5 via-background to-secondary/5 rounded-xl">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 text-center">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="p-6 bg-card rounded-xl shadow-xl border border-border hover:shadow-primary/10 transition-shadow duration-300"
              initial={{ opacity: 0, y: 30, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
            >
              <div className="flex justify-center mb-4">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                <Counter from={0} to={stat.value} duration={2.5} suffix={stat.suffix} />
              </div>
              <p className="text-lg text-foreground/80">{t(stat.labelKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

const TherapeuticApproachesSection = () => {
  const { t } = useTranslation();
  const methods = [
    { icon: <Brain className="h-10 w-10 text-primary mb-4" />, titleKey: 'treatmentMethodsPage.method1Title', descriptionKey: 'treatmentMethodsPage.method1Desc' },
    { icon: <MessageCircle className="h-10 w-10 text-secondary mb-4" />, titleKey: 'treatmentMethodsPage.method2Title', descriptionKey: 'treatmentMethodsPage.method2Desc' },
    { icon: <Eye className="h-10 w-10 text-accent mb-4" />, titleKey: 'treatmentMethodsPage.method3Title', descriptionKey: 'treatmentMethodsPage.method3Desc' },
    { icon: <Zap className="h-10 w-10 text-pink-500 mb-4" />, titleKey: 'treatmentMethodsPage.method4Title', descriptionKey: 'treatmentMethodsPage.method4Desc' },
    { icon: <UserCheck className="h-10 w-10 text-teal-500 mb-4" />, titleKey: 'treatmentMethodsPage.method5Title', descriptionKey: 'treatmentMethodsPage.method5Desc' },
    { icon: <Puzzle className="h-10 w-10 text-indigo-500 mb-4" />, titleKey: 'treatmentMethodsPage.method6Title', descriptionKey: 'treatmentMethodsPage.method6Desc' },
  ];

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
    <AnimatedSection className="py-16">
      <motion.h2 
        className="text-3xl md:text-4xl font-heading font-semibold text-center text-primary mb-6"
        variants={itemVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        {t('homePage.therapeuticApproachesTitle')}
      </motion.h2>
      <motion.p 
        className="text-lg md:text-xl text-foreground/80 text-center max-w-3xl mx-auto mb-12"
        variants={itemVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        {t('treatmentMethodsPage.intro')}
      </motion.p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {methods.map((method, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.2 }}
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
        ))}
      </div>
      <motion.div 
        className="text-center mt-16"
        variants={itemVariants}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
      >
        <p className="text-xl text-foreground/90 font-medium max-w-3xl mx-auto">
          {t('treatmentMethodsPage.collaborativeProcess')}
        </p>
      </motion.div>
    </AnimatedSection>
  );
};


const HomePage = () => {
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
        staggerChildren: 0.25,
        delayChildren: 0.2,
      },
    },
  };
  
  // Testimonials data is removed as the section is removed.

  const serenityImages = [
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/86030b6fdf3bec5b86d5a304299f4e84.jpg", alt: t('homePage.serenityImage1Alt') },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/2939322e6e532b33499344c02debd964.jpg", alt: t('homePage.serenityImage2Alt') },
    { src: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/075155cdeff49148fbd6b0c8d1afe2c7.jpg", alt: t('homePage.serenityImage3Alt') },
  ];

  const whyChooseItems = [
    { icon: <Sparkles className="h-10 w-10 text-secondary" />, titleKey: "whyChoose.item1Title", descriptionKey: "whyChoose.item1Desc" },
    { icon: <Leaf className="h-10 w-10 text-accent" />, titleKey: "whyChoose.item2Title", descriptionKey: "whyChoose.item2Desc" },
    { icon: <Users className="h-10 w-10 text-primary" />, titleKey: "whyChoose.item3Title", descriptionKey: "whyChoose.item3Desc" }
  ];

  return (
    <div className="space-y-20 md:space-y-32">
      <HeroSection />
      
      <StatsSection />

      <SerenitySection images={serenityImages} titleKey="homePage.galleryTitle" />

      <AnimatedSection className="py-12">
        <motion.h2 
          className="text-3xl md:text-4xl font-heading font-semibold text-center text-primary mb-12"
        >
          {t('aboutFaye.title')}
        </motion.h2>
        <motion.div 
          className="grid md:grid-cols-2 gap-10 md:gap-16 items-center"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <motion.div variants={fadeInUp}>
            <ParallaxImageCard
                alt={t('aboutFaye.imageAlt')}
                src="https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/8003a3fabfe8e10e795c24812b6882fc.jpg"
            />
          </motion.div>
          <motion.div className="space-y-6" variants={fadeInUp}>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t('aboutFaye.intro1')}
            </p>
            <p className="text-lg text-foreground/90 leading-relaxed">
              {t('aboutFaye.intro2')}
            </p>
            <Button asChild variant="link" className="text-primary text-lg p-0 h-auto hover:underline group">
              <Link to="/about">
                {t('aboutFaye.learnMore')} <ArrowRight className="ml-1 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </AnimatedSection>

      <TherapeuticApproachesSection />

      {/* TestimonialCarousel component usage is removed */}

      <WhyChooseSection items={whyChooseItems} />

      <InsuranceLogosSection />
    </div>
  );
};

export default HomePage;
