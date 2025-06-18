
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const ProcessSection = () => {
  const { t } = useLanguage();

  const steps = [
    {
      number: '01',
      title: t('process.step1.title'),
      description: t('process.step1.desc'),
    },
    {
      number: '02',
      title: t('process.step2.title'),
      description: t('process.step2.desc'),
    },
    {
      number: '03',
      title: t('process.step3.title'),
      description: t('process.step3.desc'),
    },
    {
      number: '04',
      title: t('process.step4.title'),
      description: t('process.step4.desc'),
    },
    {
      number: '05',
      title: t('process.step5.title'),
      description: t('process.step5.desc'),
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('process.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('process.subtitle')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative text-center group"
            >
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <span className="text-white font-bold text-lg">{step.number}</span>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-4">{step.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-purple-200 to-blue-200 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
