
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import LanguageToggle from './LanguageToggle';
import ContactForm from './ContactForm';


const Navigation = () => {
  const { t } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between min-h-[72px]">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-xl">Q</span>
          </div>
          <span className="text-white font-bold text-xl">Questalize</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#demo" className="text-white/80 hover:text-white transition-colors py-2">{t('nav.demo')}</a>
          <a href="#contact" className="text-white/80 hover:text-white transition-colors py-2">{t('nav.contact')}</a>
        </div>
        
        <div className="flex items-center space-x-4">
          <LanguageToggle />
          <ContactForm>
          <Button 
            size="sm"
            className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transform transition-all duration-200 hover:scale-105"
          >
            {t('nav.contact')}
          </Button>
          </ContactForm>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
