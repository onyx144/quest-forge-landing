
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import DemoForm from './DemoForm';

const DemoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 relative overflow-hidden">
      {/* Анимированный фон */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-pink-500/20 rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-yellow-500/20 rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {t('demo.title')}
          </h2>
          <p className="text-xl text-purple-100 mb-8 animate-fade-in">
            {t('demo.subtitle')}
          </p>
          <p className="text-lg text-purple-200 mb-10 leading-relaxed animate-fade-in">
            {t('demo.desc')}
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300 cursor-pointer group animate-scale-in">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300">
              <span className="text-4xl animate-bounce">🎮</span>
            </div>
            
            <DemoForm>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer relative group"
              >
                <span className="relative z-10">{t('demo.cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </DemoForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
