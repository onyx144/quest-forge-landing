
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

const HeroSection = () => {
  const { t } = useLanguage();

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo');
    if (demoSection) {
      demoSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-500/20 rounded-full animate-ping"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 mb-8 max-w-3xl mx-auto animate-fade-in">
            {t('hero.subtitle')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center animate-scale-in">
            <ContactForm>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer"
              >
                {t('hero.cta')}
              </Button>
            </ContactForm>
            
            <Button 
              size="lg"
              variant="outline"
              onClick={scrollToDemo}
              className="border-2 border-white/30 text-black hover:text-white hover:bg-white/10 px-8 py-4 text-lg font-bold rounded-xl backdrop-blur-sm transform hover:scale-105 transition-all duration-200 cursor-pointer"
            >
              {t('hero.demo')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
