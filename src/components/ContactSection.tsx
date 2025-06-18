
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            {t('contact.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.phone')}</h3>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">✉️</div>
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.email')}</h3>
              <p className="text-gray-400">hello@questcraft.com</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">Launch Time</h3>
              <p className="text-gray-400">2-4 weeks</p>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200"
          >
            {t('contact.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
