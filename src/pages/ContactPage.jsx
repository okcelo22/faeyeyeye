import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { motion } from 'framer-motion';
    import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
    import { Button } from '@/components/ui/button';
    import { Mail, Phone, MapPin, ArrowRight, CalendarCheck, Printer, MessageSquare } from 'lucide-react';
    import { AnimatedSection } from '@/components/Layout';

    const ContactPage = () => {
      const { t } = useTranslation();
      const consultationLink = "https://faye-youker.clientsecure.me/";
      
      const contactItems = [
        { icon: <Phone className="h-7 w-7 text-primary" />, labelKey: 'contactPage.phoneLabel', valueKey: 'contactPage.phoneNumber', hrefPrefix: 'tel:' },
        { icon: <Mail className="h-7 w-7 text-primary" />, labelKey: 'contactPage.emailLabel', valueKey: 'contactPage.emailAddress', hrefPrefix: 'mailto:' },
        { icon: <Printer className="h-7 w-7 text-primary" />, labelKey: 'contactPage.faxLabel', valueKey: 'contactPage.faxNumber' },
        { icon: <MapPin className="h-7 w-7 text-primary" />, labelKey: 'contactPage.officeLocationTitle', valueKey: 'contactPage.fullAddress', isHtml: true },
      ];

      const fadeInUp = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
      };

      const staggerContainer = {
        initial: {},
        animate: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } }
      };
      
      // Coordinates for Bay Area Pet Hospital, Traverse City, MI (approximate)
      // 844 E Front St, Traverse City, MI 49686
      const mapMarkerLat = "44.7640"; 
      const mapMarkerLon = "-85.6085";
      
      // Adjusted Bbox to center on the new marker
      const mapBbox = `${parseFloat(mapMarkerLon) - 0.004},${parseFloat(mapMarkerLat) - 0.002},${parseFloat(mapMarkerLon) + 0.004},${parseFloat(mapMarkerLat) + 0.002}`;

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
              {t('contactPage.title')}
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground text-center mt-4 max-w-2xl mx-auto"
              variants={fadeInUp}
            >
              {t('contactPage.intro')}
            </motion.p>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeInUp}>
              <Card className="shadow-xl border-primary/20 max-w-3xl mx-auto bg-gradient-to-br from-card via-muted/10 to-card">
                <CardHeader>
                  <CardTitle className="text-3xl text-primary text-center flex items-center justify-center space-x-2">
                    <MessageSquare className="h-8 w-8"/>
                    <span>{t('contactPage.directContactTitle')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-6 md:p-8">
                  {contactItems.map((item, index) => {
                    const value = t(item.valueKey);
                    const href = item.hrefPrefix ? `${item.hrefPrefix}${value}` : null;
                    return (
                      <div key={index} className="flex items-start space-x-4 p-4 bg-background/50 rounded-lg shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex-shrink-0 pt-1">{item.icon}</div>
                        <div className="flex flex-col">
                          <span className="font-semibold text-xl text-foreground/90">{t(item.labelKey)}</span>
                          {item.isHtml ? (
                             <div className="text-foreground/80 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: t(item.valueKey, { defaultValue: item.valueKey }).replace(/\n/g, '<br />') }} />
                          ) : href ? (
                            <a href={href} className="text-foreground/80 hover:text-primary transition-colors text-lg break-all">{value}</a>
                          ) : (
                            <p className="text-foreground/80 text-lg break-all">{value}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>
          
          <AnimatedSection>
            <motion.div variants={fadeInUp}>
                <Card className="shadow-xl border-accent/20 max-w-3xl mx-auto text-center bg-gradient-to-br from-card via-accent/5 to-card">
                    <CardHeader>
                        <CardTitle className="text-3xl text-accent flex items-center justify-center space-x-2">
                            <CalendarCheck className="h-8 w-8" />
                            <span>{t('contactPage.scheduleConsultationTitle')}</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="p-6 md:p-8 space-y-5">
                        <p className="text-lg text-foreground/80">{t('contactPage.scheduleConsultationText')}</p>
                        <Button size="lg" className="bg-gradient-to-r from-accent to-green-500 hover:opacity-90 text-white shadow-lg transform hover:scale-105 transition-transform duration-300 group text-lg px-8 py-3">
                            <a href={consultationLink} target="_blank" rel="noopener noreferrer" className="flex items-center">
                                {t('contactPage.scheduleButton')}
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                            </a>
                        </Button>
                    </CardContent>
                </Card>
            </motion.div>
          </AnimatedSection>

          <AnimatedSection>
            <motion.div variants={fadeInUp} className="mt-12">
              <Card className="shadow-xl overflow-hidden border-secondary/20">
                <CardHeader className="bg-secondary/10">
                  <CardTitle className="text-2xl text-secondary flex items-center space-x-2">
                    <MapPin className="h-7 w-7"/> 
                    <span>{t('contactPage.findOfficeTitle')}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <iframe
                    title={t('contactPage.mapAlt')}
                    width="100%"
                    height="450"
                    loading="lazy"
                    allowFullScreen
                    src={`https://www.openstreetmap.org/export/embed.html?bbox=${mapBbox}&layer=mapnik&marker=${mapMarkerLat},${mapMarkerLon}`}
                    className="rounded-b-lg"
                  ></iframe>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatedSection>

           <AnimatedSection>
                <motion.p 
                    variants={fadeInUp} 
                    className="text-center text-sm text-muted-foreground italic mt-10 max-w-xl mx-auto"
                >
                    {t('contactPage.privacyNote')}
                </motion.p>
            </AnimatedSection>
        </motion.div>
      );
    };

    export default ContactPage;