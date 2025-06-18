
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  const handleLanguageSelect = (selectedLanguage: 'en' | 'uk') => {
    if (selectedLanguage !== language) {
      toggleLanguage();
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-colors duration-200 cursor-pointer min-w-[80px] justify-center">
          <span className="text-sm font-medium">
            {language === 'en' ? '🇺🇸 EN' : '🇺🇦 UK'}
          </span>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="bg-white/95 backdrop-blur-sm border border-white/20 shadow-lg"
      >
        <DropdownMenuItem
          onClick={() => handleLanguageSelect('en')}
          className={`cursor-pointer flex items-center space-x-2 px-3 py-2 ${
            language === 'en' ? 'bg-purple-100/50' : 'hover:bg-purple-50/50'
          }`}
        >
          <span className="text-lg">🇺🇸</span>
          <span className="font-medium">English</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => handleLanguageSelect('uk')}
          className={`cursor-pointer flex items-center space-x-2 px-3 py-2 ${
            language === 'uk' ? 'bg-purple-100/50' : 'hover:bg-purple-50/50'
          }`}
        >
          <span className="text-lg">🇺🇦</span>
          <span className="font-medium">Українська</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageToggle;
