
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const OfferSection = () => {
  const { t } = useLanguage();

  const offers = [
    {
      icon: '🎯',
      title: t('offer.marketing.title'),
      description: t('offer.marketing.desc'),
    },
    {
      icon: '🤝',
      title: t('offer.teambuilding.title'),
      description: t('offer.teambuilding.desc'),
    },
    {
      icon: '📚',
      title: t('offer.onboarding.title'),
      description: t('offer.onboarding.desc'),
    },
    {
      icon: '🎉',
      title: t('offer.events.title'),
      description: t('offer.events.desc'),
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('offer.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('offer.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {offers.map((offer, index) => (
            <div 
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 border border-white/50"
            >
              <div className="text-4xl mb-4">{offer.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{offer.title}</h3>
              <p className="text-gray-600 leading-relaxed">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
