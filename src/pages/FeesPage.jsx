import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
    import { CreditCard, ShieldCheck, HelpCircle } from 'lucide-react';
    import { AnimatedSection } from '@/components/Layout';

    const FeesPage = () => {
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

      const paymentMethods = [
        { nameKey: "feesPage.paymentMethodCash", iconUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/bca7ffe4ceabf749063138a34ecb8ab8.jpg", altKey: "feesPage.paymentMethodCashAlt" },
        { nameKey: "feesPage.paymentMethodHSA", iconUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/db402e252d46170876a49958c8013cb7.jpg", altKey: "feesPage.paymentMethodHSAAlt" },
        { nameKey: "feesPage.paymentMethodCard", iconUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/9edc69f149046ae70de2c89276f15edf.jpg", altKey: "feesPage.paymentMethodCardAlt" },
        { nameKey: "feesPage.paymentMethodCheck", iconUrl: "https://storage.googleapis.com/hostinger-horizons-assets-prod/e528bbbf-645e-40f7-9b36-904fd322b4f1/461bd6bee867751eafd7daac60f6af08.jpg", altKey: "feesPage.paymentMethodCheckAlt" },
      ];
      
      const faqData = t('feesPage.faqList', { returnObjects: true });
      const faqItems = Array.isArray(faqData) ? faqData : [];
      
      const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      };

      const staggerContainer = {
        initial: {},
        animate: { transition: { staggerChildren: 0.1, delayChildren: 0.05 } }
      };

      const logoVariants = {
        hidden: { opacity: 0, y: 20, scale: 0.8 },
        visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 150, damping: 15 } },
      };

      return (
        <motion.div 
          className="space-y-16"
          variants={staggerContainer}
          initial="initial"
          animate="animate"
        >
          <AnimatedSection>
            <motion.h1 
              className="text-4xl md:text-5xl font-heading font-bold text-primary text-center"
              variants={fadeInUp}
            >
              {t('feesPage.title')}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground text-center mt-4 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              {t('feesPage.freeConsultationInfo')}
            </motion.p>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <Card className="shadow-xl border-secondary/30">
                 <CardHeader className="bg-secondary/10">
                   <div className="flex items-center space-x-3">
                    <CreditCard className="h-8 w-8 text-secondary" />
                    <CardTitle className="text-2xl text-secondary">{t('feesPage.paymentTitle')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-lg text-foreground/80 mb-6">{t('feesPage.paymentDesc')}</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {paymentMethods.map((method, index) => (
                      <motion.div 
                        key={index} 
                        className="flex flex-col items-center p-4 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                        variants={logoVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                      >
                        <img 
                          src={method.iconUrl} 
                          alt={t(method.altKey, { defaultValue: "Payment method icon"})} 
                          className="h-16 w-16 object-contain mb-3" 
                        />
                        <span className="text-md font-medium text-secondary-foreground text-center">{t(method.nameKey)}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <Card className="shadow-xl border-accent/30">
                <CardHeader className="bg-accent/10">
                  <div className="flex items-center space-x-3">
                    <ShieldCheck className="h-8 w-8 text-accent" />
                    <CardTitle className="text-2xl text-accent">{t('feesPage.insuranceTitle')}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-6 space-y-4">
                  <p className="text-lg text-foreground/80">{t('feesPage.insuranceDesc')}</p>
                  {insurancePlans.length > 0 && (
                    <>
                      <h3 className="font-semibold text-xl text-accent/90 pt-4 mb-4">{t('feesPage.insuranceInNetworkTitle')}</h3>
                      <motion.div 
                        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 items-center justify-center"
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.1 }}
                      >
                        {insurancePlans.map((plan) => (
                          <motion.div 
                            key={plan.logoKey}
                            className="p-3 bg-card rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-center items-center aspect-[3/2]"
                            variants={logoVariants}
                          >
                            <img 
                              src={plan.url} 
                              alt={t(plan.altKey, { defaultValue: plan.name })} 
                              className="max-h-16 md:max-h-20 w-auto object-contain" 
                            />
                          </motion.div>
                        ))}
                      </motion.div>
                    </>
                  )}
                   <p className="text-sm text-muted-foreground pt-6 text-center">{t('feesPage.verifyButton')}</p>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>


          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <h2 className="text-3xl font-heading font-semibold text-primary text-center mb-6 mt-16 flex items-center justify-center space-x-2">
                <HelpCircle className="h-8 w-8" />
                <span>{t('feesPage.faqTitle')}</span>
              </h2>
              {faqItems.length > 0 ? (
                <Accordion type="single" collapsible className="w-full bg-background p-4 md:p-6 rounded-lg shadow-lg border border-border">
                  {faqItems.map((item, index) => (
                    <AccordionItem value={`item-${index}`} key={index} className="border-b-primary/20 last:border-b-0">
                      <AccordionTrigger className="text-lg hover:text-primary font-medium text-left py-4">
                        {t(item.question)}
                      </AccordionTrigger>
                      <AccordionContent className="text-base text-foreground/80 leading-relaxed pt-1 pb-4">
                        {t(item.answer)}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              ) : (
                <p className="text-center text-muted-foreground">{t('feesPage.noFaqAvailable', { defaultValue: 'Frequently asked questions will be available soon.'})}</p>
              )}
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeInUp} className="mt-12 p-6 bg-muted/40 rounded-lg shadow border border-border">
                <h3 className="text-xl font-semibold text-primary mb-3">{t('feesPage.cancellationTitle')}</h3>
                <p className="text-foreground/80">{t('feesPage.cancellationDesc')}</p>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeInUp} className="mt-8 p-6 bg-blue-500/10 rounded-lg shadow border border-blue-500/30">
                <h3 className="text-xl font-semibold text-blue-700 dark:text-blue-400 mb-3">{t('feesPage.goodFaithTitle')}</h3>
                <p className="text-foreground/80 text-sm">
                    {t('feesPage.goodFaithDescP1')} <a href="https://www.cms.gov/nosurprises" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{t('feesPage.goodFaithLearnMore')}</a>.
                </p>
            </motion.div>
          </AnimatedSection>


        </motion.div>
      );
    };

    export default FeesPage;