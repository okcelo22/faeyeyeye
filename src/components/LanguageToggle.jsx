import React from 'react';
    import { useTranslation } from 'react-i18next';
    import { Globe, ChevronDown } from 'lucide-react';
    import { Button } from '@/components/ui/button';
    import {
      DropdownMenu,
      DropdownMenuContent,
      DropdownMenuItem,
      DropdownMenuTrigger,
    } from '@/components/ui/dropdown-menu';

    const LanguageToggle = () => {
      const { i18n } = useTranslation();

      const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
      };

      // Ensure currentLanguage is always 'EN' or 'ES'
      let currentLanguageDisplay = 'EN';
      if (i18n.language) {
        const langPrefix = i18n.language.split('-')[0].toUpperCase();
        if (langPrefix === 'ES') {
          currentLanguageDisplay = 'ES';
        }
      }
      

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="sm" className="flex items-center space-x-1 text-sm">
              <Globe className="h-4 w-4" />
              <span>{currentLanguageDisplay}</span>
              <ChevronDown className="h-3 w-3 opacity-70" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-background border-border shadow-lg rounded-md">
            <DropdownMenuItem
              onClick={() => changeLanguage('en')}
              className="cursor-pointer hover:bg-accent/50 focus:bg-accent/70"
              disabled={currentLanguageDisplay === 'EN'}
            >
              English (EN)
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => changeLanguage('es')}
              className="cursor-pointer hover:bg-accent/50 focus:bg-accent/70"
              disabled={currentLanguageDisplay === 'ES'}
            >
              Español (ES)
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    };

    export default LanguageToggle;