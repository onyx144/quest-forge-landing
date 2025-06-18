
import React, { createContext, useContext, useState } from 'react';

interface LanguageContextType {
  language: 'en' | 'uk';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    'nav.demo': 'Try Demo',
    'nav.contact': 'Contact Us',
    
    // Hero Section
    'hero.title': 'Launch Your Branded Online Quest',
    'hero.subtitle': 'Transform your business with interactive escape games that engage customers, build teams, and drive revenue',
    'hero.cta': 'Get Your Custom Quest',
    'hero.demo': 'Try Demo Quest',
    
    // What We Offer
    'offer.title': 'What We Offer',
    'offer.subtitle': 'Turnkey interactive online quests tailored for your business goals',
    'offer.marketing.title': 'Marketing Campaigns',
    'offer.marketing.desc': 'Boost engagement with gamified product promotions and brand experiences',
    'offer.teambuilding.title': 'Team Building',
    'offer.teambuilding.desc': 'Strengthen remote teams with collaborative puzzle-solving adventures',
    'offer.onboarding.title': 'Staff Onboarding',
    'offer.onboarding.desc': 'Make employee training memorable with interactive learning experiences',
    'offer.events.title': 'Virtual Events',
    'offer.events.desc': 'Create unforgettable celebrations and corporate gatherings online',
    
    // Why Profitable
    'profit.title': 'Why It\'s Profitable',
    'profit.subtitle': 'Smart investment with proven returns',
    'profit.lowcost.title': 'Low Costs',
    'profit.lowcost.desc': 'No physical venue or equipment needed - pure digital scalability',
    'profit.scalable.title': 'High Scalability',
    'profit.scalable.desc': 'Serve unlimited participants simultaneously worldwide',
    'profit.monetization.title': 'Multiple Revenue Streams',
    'profit.monetization.desc': 'Tickets, subscriptions, corporate packages, and licensing',
    'profit.roi.title': '3.5x ROI',
    'profit.roi.desc': 'Proven return on investment from gamified marketing campaigns',
    
    // How We Work
    'process.title': 'How We Work',
    'process.subtitle': 'From concept to launch in 5 simple steps',
    'process.step1.title': 'Idea & Strategy',
    'process.step1.desc': 'We analyze your goals and create the perfect quest concept',
    'process.step2.title': 'Script & Storyline',
    'process.step2.desc': 'Professional writers craft engaging narratives and puzzles',
    'process.step3.title': 'Design & Video',
    'process.step3.desc': 'Stunning visuals and immersive multimedia content',
    'process.step4.title': 'Development & Testing',
    'process.step4.desc': 'Technical implementation with rigorous quality assurance',
    'process.step5.title': 'Launch & Support',
    'process.step5.desc': 'Smooth delivery with ongoing technical support',
    
    // Use Cases
    'cases.title': 'Use Cases',
    'cases.subtitle': 'Versatile solutions for every business need',
    
    // Demo
    'demo.title': 'Try Our Demo Quest',
    'demo.subtitle': 'Experience the magic yourself before making a decision',
    'demo.cta': 'Play Demo Now',
    'demo.desc': 'Test our sample escape room and see how engaging online quests can be for your audience',
    
    // Contact
    'contact.title': 'Ready to Start?',
    'contact.subtitle': 'Let\'s discuss your custom online quest project',
    'contact.cta': 'Get Free Consultation',
    'contact.phone': 'Call Us',
    'contact.email': 'Email Us',
  },
  uk: {
    // Navigation
    'nav.demo': 'Спробувати Демо',
    'nav.contact': 'Контакти',
    
    // Hero Section
    'hero.title': 'Запустіть Ваш Брендований Онлайн Квест',
    'hero.subtitle': 'Трансформуйте свій бізнес з інтерактивними іграми-квестами, які залучають клієнтів, згуртовують команди та приносять прибуток',
    'hero.cta': 'Замовити Унікальний Квест',
    'hero.demo': 'Спробувати Демо',
    
    // What We Offer
    'offer.title': 'Що Ми Пропонуємо',
    'offer.subtitle': 'Готові інтерактивні онлайн квести, адаптовані під цілі вашого бізнесу',
    'offer.marketing.title': 'Маркетингові Кампанії',
    'offer.marketing.desc': 'Підвищуйте залученість через геймифіковані промо-акції та брендові досвіди',
    'offer.teambuilding.title': 'Тімбілдинг',
    'offer.teambuilding.desc': 'Згуртовуйте віддалені команди через спільне розв\'язання головоломок',
    'offer.onboarding.title': 'Навчання Персоналу',
    'offer.onboarding.desc': 'Зробіть навчання співробітників незабутнім через інтерактивний досвід',
    'offer.events.title': 'Віртуальні Події',
    'offer.events.desc': 'Створюйте незабутні свята та корпоративні заходи онлайн',
    
    // Why Profitable
    'profit.title': 'Чому Це Вигідно',
    'profit.subtitle': 'Розумна інвестиція з доведеною окупністю',
    'profit.lowcost.title': 'Низькі Витрати',
    'profit.lowcost.desc': 'Не потрібно фізичних приміщень чи обладнання - чиста цифрова масштабованість',
    'profit.scalable.title': 'Високая Масштабованість',
    'profit.scalable.desc': 'Обслуговуйте необмежену кількість учасників одночасно по всьому світу',
    'profit.monetization.title': 'Множинні Джерела Доходу',
    'profit.monetization.desc': 'Квитки, підписки, корпоративні пакети та ліцензування',
    'profit.roi.title': '3.5x ROI',
    'profit.roi.desc': 'Доведена окупність інвестицій від геймифікованих маркетингових кампаній',
    
    // How We Work
    'process.title': 'Як Ми Працюємо',
    'process.subtitle': 'Від концепції до запуску за 5 простих кроків',
    'process.step1.title': 'Ідея і Стратегія',
    'process.step1.desc': 'Аналізуємо ваші цілі та створюємо ідеальну концепцію квесту',
    'process.step2.title': 'Сценарій і Сюжет',
    'process.step2.desc': 'Професійні сценаристи створюють захоплюючі історії та головоломки',
    'process.step3.title': 'Дизайн і Відео',
    'process.step3.desc': 'Приголомшлива візуалізація та імерсивний мультимедійний контент',
    'process.step4.title': 'Розробка і Тестування',
    'process.step4.desc': 'Технічна реалізація з ретельним контролем якості',
    'process.step5.title': 'Запуск і Підтримка',
    'process.step5.desc': 'Плавна передача з постійною технічною підтримкою',
    
    // Use Cases
    'cases.title': 'Сфери Застосування',
    'cases.subtitle': 'Універсальні рішення для будь-яких бізнес-потреб',
    
    // Demo
    'demo.title': 'Спробуйте Наш Демо Квест',
    'demo.subtitle': 'Відчуйте магію самостійно перед прийняттям рішення',
    'demo.cta': 'Грати Демо Зараз',
    'demo.desc': 'Протестуйте наш зразковий ескейп-рум і побачте, наскільки захоплюючими можуть бути онлайн квести для вашої аудиторії',
    
    // Contact
    'contact.title': 'Готові Почати?',
    'contact.subtitle': 'Давайте обговоримо ваш проект індивідуального онлайн квесту',
    'contact.cta': 'Безкоштовна Консультація',
    'contact.phone': 'Зателефонувати',
    'contact.email': 'Написати Email',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<'en' | 'uk'>('en');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'uk' : 'en');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.en] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
