
import React from 'react';
    import { Link } from 'react-router-dom';
    import { useTranslation } from 'react-i18next';
    import { Button } from '@/components/ui/button';
    import { HeartHandshake, CalendarCheck, ArrowRight } from 'lucide-react';

    const Footer = () => {
      const { t } = useTranslation();
      const currentYear = new Date().getFullYear();
      const consultationLink = "https://faye-youker.clientsecure.me/";

      const navLinks = [
        { to: '/', labelKey: 'nav.home' },
        { to: '/services', labelKey: 'nav.services' },
        { to: '/about', labelKey: 'nav.about' },
        { to: '/credentials', labelKey: 'nav.credentials' },
        { to: '/client-focus', labelKey: 'nav.clientFocus' },
        { to: '/fees', labelKey: 'nav.fees' },
        { to: '/contact', labelKey: 'nav.contact' },
      ];

      return (
        <footer className="bg-muted/50 text-muted-foreground border-t border-border">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 items-start">
              <div className="flex flex-col items-center lg:items-start">
                <Link to="/" className="flex items-center space-x-2 text-primary mb-3">
                  <HeartHandshake className="h-8 w-8" />
                  <span className="font-heading text-xl font-semibold">{t('footer.name')}</span>
                </Link>
                <p className="text-sm text-center lg:text-left max-w-xs">{t('footer.taglineExtended')}</p>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <span className="font-semibold text-foreground mb-3 text-lg">{t('footer.quickLinks')}</span>
                <nav className="grid grid-cols-2 gap-x-6 gap-y-2 text-sm">
                  {navLinks.map((link) => (
                    <Link
                      key={link.to}
                      to={link.to}
                      className="hover:text-primary transition-colors duration-200 ease-in-out"
                    >
                      {t(link.labelKey)}
                    </Link>
                  ))}
                </nav>
              </div>
              
              <div className="flex flex-col items-center lg:items-end space-y-6">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300 group w-full sm:w-auto">
                    <a href={consultationLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full">
                        <CalendarCheck className="mr-2 h-5 w-5" />
                        {t('hero.ctaSchedule')}
                        <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </a>
                </Button>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-border/50 text-center text-xs">
              <p>{t('footer.copyright', { year: currentYear })}</p>
              <p className="mt-1">{t('footer.licenseDisclaimer')}</p>
            </div>
          </div>
        </footer>
      );
    };

    export default Footer;
