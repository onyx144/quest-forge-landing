
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const DemoSection = () => {
  const { t } = useLanguage();

  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('demo.title')}
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            {t('demo.subtitle')}
          </p>
          <p className="text-lg text-purple-200 mb-10 leading-relaxed">
            {t('demo.desc')}
          </p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
            <div className="bg-gradient-to-r from-yellow-400 to-orange-500 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
              <span className="text-4xl">🎮</span>
            </div>
            
            <Button 
              size="lg"
              className="bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
            >
              {t('demo.cta')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
