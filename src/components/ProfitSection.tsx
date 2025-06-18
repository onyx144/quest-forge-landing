
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProfitSection = () => {
  const { t } = useLanguage();

  const benefits = [
    {
      icon: '💰',
      title: t('profit.lowcost.title'),
      description: t('profit.lowcost.desc'),
    },
    {
      icon: '📈',
      title: t('profit.scalable.title'),
      description: t('profit.scalable.desc'),
    },
    {
      icon: '🎫',
      title: t('profit.monetization.title'),
      description: t('profit.monetization.desc'),
    },
    {
      icon: '📊',
      title: t('profit.roi.title'),
      description: t('profit.roi.desc'),
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('profit.title')}
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            {t('profit.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
              <p className="text-blue-100 leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProfitSection;
