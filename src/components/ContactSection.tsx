
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Анимированные элементы фона */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-36 h-36 bg-green-500/10 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-12 animate-fade-in">
            {t('contact.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <a
              href="https://t.me/questcraft_support"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group animate-scale-in block"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">💬</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t('contact.phone')} &nbsp;
                <span className="text-xs text-gray-400">(Telegram)</span>
              </h3>
            </a>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group animate-scale-in">
              <div className="text-4xl mb-4 group-hover:animate-pulse">✉️</div>
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.email')}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">hello@questcraft.com</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group animate-scale-in">
              <div className="text-4xl mb-4 group-hover:animate-spin">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.launch')}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">4-6 weeks</p>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer relative group"
          >
            <span className="relative z-10">{t('contact.cta')}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
