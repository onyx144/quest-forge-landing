
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-200"
    >
      <span className="text-sm font-medium">
        {language === 'en' ? '🇺🇸 EN' : '🇺🇦 UK'}
      </span>
    </button>
  );
};

export default LanguageToggle;
