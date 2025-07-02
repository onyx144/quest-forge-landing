
import React from 'react';
import { LanguageProvider } from '@/contexts/LanguageContext';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import QuestInfoSection from '@/components/QuestInfoSection';
import ProfitSection from '@/components/ProfitSection';
import ProcessSection from '@/components/ProcessSection';
import DemoSection from '@/components/DemoSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen">
        <Navigation />
        <HeroSection />
        <QuestInfoSection />
        <ProfitSection />
        <ProcessSection />
        <DemoSection />
        <ContactSection />
      </div>
    </LanguageProvider>
  );
};

export default Index;
