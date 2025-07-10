import { createContext, useContext, useState } from "react";

interface LanguageContextType {
  language: 'en' | 'uk';
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    "nav.demo": "Try Demo Quest",
    "nav.contact": "Contact Us",

    // Hero Section
    "hero.title": "Launch Your Own Interactive Online Quest",
    "hero.subtitle": "Engage your audience, promote your brand, and create unforgettable digital experiences",
    "hero.cta": "Create My Quest",
    "hero.demo": "Try Demo Now",

    // Quest Info Section
    "quest.title": "What Is a Digital Quest?",
    "quest.subtitle": "A story-based online experience where players solve puzzles and uncover clues — just like in an escape room, but entirely in the browser.",
    "quest.interactive.title": "Interactive Story",
    "quest.interactive.desc": "Players become part of a fictional mission — investigating a conspiracy, escaping a hostile situation, or exposing a hidden threat.",
    "quest.team.title": "Scalable & Competitive",
    "quest.team.desc": "Unlike physical escape rooms, digital quests can be played by dozens — or hundreds — of players at the same time. Players can compete in teams, race against the clock, and climb a shared leaderboard in real time.",
    "quest.customizable.title": "Customizable Format",
    "quest.customizable.desc": "Every quest is built around your unique story, goals, and branding. Whether it's for training, marketing, or entertainment, the format adapts to fit your needs and audience.",
    "quest.multimedia.title": "Multimedia Clues",
    "quest.multimedia.desc": "They explore videos, images, and documents that hold hidden information and logic puzzles. Each quest includes interactive tools — from ID scanners to fake websites — designed to deepen immersion.",
    "quest.browser.title": "Browser-Based Interface",
    "quest.browser.desc": "No downloads needed — everything happens in a special web environment built like a real investigation dashboard.",
    "quest.puzzle.title": "Puzzle-Solving Gameplay",
    "quest.puzzle.desc": "Just like in a physical escape room, players find connections, break codes, and move the story forward step by step.",
    "quest.examples": "Quest Examples",

    // What We Offer
    "offer.title": "What We Offer",
    "offer.subtitle": "Fully customized online escape quests for business goals and engagement",
    "offer.marketing.title": "Marketing Campaigns",
    "offer.marketing.desc": "Gamified brand storytelling that boosts visibility and customer loyalty",
    "offer.teambuilding.title": "Team Building",
    "offer.teambuilding.desc": "Fun and immersive team experiences for remote or hybrid teams",
    "offer.onboarding.title": "Staff Onboarding",
    "offer.onboarding.desc": "Train and integrate new staff with engaging interactive scenarios",
    "offer.events.title": "Virtual Events",
    "offer.events.desc": "Host unique and memorable celebrations with a digital twist",

    "profit.title": "Why Go Digital?",
    "profit.subtitle": "Escape rooms are limited by walls — digital quests aren’t. Expand your reach, scale your business, and generate revenue around the clock without extra overhead",
    "profit.lowcost.title": "Low Operating Costs",
    "profit.lowcost.desc": "No actors, sets, or physical space required — everything runs in the browser, 24/7.",
    "profit.scalable.title": "Massive Scalability",
    "profit.scalable.desc": "From 10 to 10,000 players — host global audiences with ease.",
    "profit.monetization.title": "Monetization on Your Terms",
    "profit.monetization.desc": "Sell tickets, create bundles, or offer subscriptions — flexible options to fit your business model.",
    "profit.roi.title": "Proven Marketing Impact",
    "profit.roi.desc": "Gamified content delivers up to 3.5× higher ROI compared to standard campaigns.",

    // How We Work
    "process.title": "How We Work",
    "process.subtitle": "A complete journey from idea to online launch",
    "process.step1.title": "Concept & Theme",
    "process.step1.desc": "We collaborate to define your quest's idea, brand fit, and objectives",
    "process.step2.title": "Story & Puzzle Design",
    "process.step2.desc": "Our writers build immersive stories and smart puzzles tailored to your goals",
    "process.step3.title": "Design & Filming",
    "process.step3.desc": "We create visual assets, animations, and optional videos for your quest",
    "process.step4.title": "Development & QA",
    "process.step4.desc": "The quest is built and tested across devices to ensure flawless performance",
    "process.step5.title": "Launch & Access",
    "process.step5.desc": "We connect payment, deploy the game, and hand over hosting credentials",

    // Use Cases
    "cases.title": "Use Cases",
    "cases.subtitle": "Where our online quests bring value",

    // Demo
    "demo.title": "Try a Demo Quest",
    "demo.subtitle": "Play through a sample to understand the value firsthand",
    "demo.cta": "Start Demo",
    "demo.desc": "Experience what your clients or team members would go through — fun, engaging, and unique",
    "demo.form.title": "Request a Demo",
    "demo.form.name": "Your Name",
    "demo.form.namePlaceholder": "Enter your full name",
    "demo.form.email": "Email Address",
    "demo.form.emailPlaceholder": "name@company.com",
    "demo.form.message": "Message",
    "demo.form.messagePlaceholder": "What does your company do?",
    "demo.form.cancel": "Cancel",
    "demo.form.submit": "Request Demo",
    "demo.form.success": "Demo request sent successfully!",

    // Contact
    "contact.title": "Let's Create Your Quest",
    "contact.subtitle": "Book a free consultation and get started",
    "contact.cta": "Talk to an Expert",
    "contact.messengers": "Contact Us via Messengers",
    "contact.email": "Send Us an Email",
    "contact.launch": "Launch Time",

    // Contact Form
    "contact.form.title": "Contact Us",
    "contact.form.description": "Ready to launch your branded online quest? Get in touch — we'll help you build a one-of-a-kind experience that works.",
    "contact.form.name": "Full Name",
    "contact.form.namePlaceholder": "Your full name",
    "contact.form.email": "Email",
    "contact.form.emailPlaceholder": "name@business.com",
    "contact.form.phone": "Phone Number",
    "contact.form.phonePlaceholder": "+1 (555) 123-4567",
    "contact.form.company": "Company",
    "contact.form.companyPlaceholder": "Your business name",
    "contact.form.date": "Consultation Date",
    "contact.form.selectDate": "Select date",
    "contact.form.time": "Consultation Time",
    "contact.form.selectTime": "Select time",
    "contact.form.youtube": "Promo Video (optional)",
    "contact.form.youtubePlaceholder": "https://youtube.com/watch?v=...",
    "contact.form.message": "Your Message",
    "contact.form.messagePlaceholder": "Tell us what kind of quest you want and your business goals",
    "contact.form.downloadPdf": "Download Presentation",
    "contact.form.cancel": "Cancel",
    "contact.form.submit": "Send Request",
    "contact.form.sending": "Sending...",
    "contact.form.success": "Message sent successfully!",
    // Consultation Form
    "consultation.form.title": "Talk to an Expert",
    "consultation.form.subtitle": "Schedule a personalized consultation with our quest development expert. We'll discuss your vision and help you create an amazing experience.",
    "consultation.form.email": "Your Email Address",
    "consultation.form.emailPlaceholder": "expert@yourcompany.com",
    "consultation.form.date": "Consultation Date",
    "consultation.form.datePlaceholder": "Select date",
    "consultation.form.time": "Preferred Time",
    "consultation.form.timePlaceholder": "Select time",
    "consultation.form.additional": "Additional Information",
    "consultation.form.additionalPlaceholder": "Tell us about your project, goals, or any specific questions you have...",
    "consultation.form.cancel": "Cancel",
    "consultation.form.submit": "Schedule Consultation",
    "consultation.form.error.name": "Name is required",
    "consultation.form.error.massage": "Message is required",

    "consultation.form.error.email": "Email is required",
    "consultation.form.error.emailInvalid": "Invalid email address",
    "consultation.form.error.date": "Date is required",
    "consultation.form.error.time": "Time is required",
    "consultation.form.name": "Full Name",
    "consultation.form.success": "The request for consultation has been successfully submitted!",

  },
  uk: {
    // Navigation
    "nav.demo": "Спробувати Демо Квест",
    "nav.contact": "Зв'язатися з нами",

    // Hero Section
    "hero.title": "Запустіть власний інтерактивний онлайн-квест",
    "hero.subtitle": "Залучайте аудиторію, просувайте бренд і створюйте незабутні цифрові враження",
    "hero.cta": "Створити мій квест",
    "hero.demo": "Спробувати демо зараз",

    // Quest Info Section
    "quest.title": "Що таке цифровий квест?",
    "quest.subtitle": "Онлайн-досвід на основі історії, де гравці розгадують загадки та знаходять підказки — як у кімнаті втечі, але повністю в браузері.",
    "quest.interactive.title": "Інтерактивна історія",
    "quest.interactive.desc": "Гравці стають частиною вигаданої місії — розслідують змову, тікають з ворожої ситуації або розкривають приховану загрозу.",
    "quest.team.title": "Масштабованість та змагання",
    "quest.team.desc": "На відміну від фізичних кімнат втечі, цифрові квести можуть грати десятки — або сотні — гравців одночасно. Гравці можуть змагатися в командах, бігти з часом і підніматися в спільному рейтингу в реальному часі.",
    "quest.customizable.title": "Налаштовуваний формат",
    "quest.customizable.desc": "Кожен квест створюється навколо вашої унікальної історії, цілей та брендингу. Незалежно від того, чи це для навчання, маркетингу чи розваг, формат адаптується під ваші потреби та аудиторію.",
    "quest.multimedia.title": "Мультимедійні підказки",
    "quest.multimedia.desc": "Вони досліджують відео, зображення та документи, які містять приховану інформацію та логічні головоломки. Кожен квест включає інтерактивні інструменти — від сканерів ID до фальшивих веб-сайтів — для поглиблення занурення.",
    "quest.browser.title": "Браузерний інтерфейс",
    "quest.browser.desc": "Не потрібно завантажувати — все відбувається в спеціальному веб-середовищі, побудованому як справжня панель розслідування.",
    "quest.puzzle.title": "Геймплей розгадування головоломок",
    "quest.puzzle.desc": "Як і в фізичній кімнаті втечі, гравці знаходять зв'язки, розшифровують коди та просувають історію крок за кроком.",
    "quest.examples": "Приклади квестів",
    "consultation.form.error.massage": "Повідомлення обов'язкове",

    // What We Offer
    "offer.title": "Що ми пропонуємо",
    "offer.subtitle": "Повністю індивідуальні онлайн-квести для бізнес-цілей і залучення",
    "offer.marketing.title": "Маркетингові кампанії",
    "offer.marketing.desc": "Гейміфіковані історії бренду, що підвищують впізнаваність і лояльність клієнтів",
    "offer.teambuilding.title": "Тімбілдинг",
    "offer.teambuilding.desc": "Веселі та захоплюючі командні ігри для віддалених або гібридних команд",
    "offer.onboarding.title": "Онбординг персоналу",
    "offer.onboarding.desc": "Навчайте та інтегруйте нових співробітників за допомогою інтерактивних сценаріїв",
    "offer.events.title": "Віртуальні події",
    "offer.events.desc": "Проводьте унікальні та незабутні святкування у цифровому форматі",

    "profit.title": "Чому це вигідно",
    "profit.subtitle": "Низькі витрати, великий ефект — створено для масштабування",
    "profit.lowcost.title": "Мінімальні витрати",
    "profit.lowcost.desc": "Не потрібні актори, локації чи реквізит — усе онлайн",
    "profit.scalable.title": "Необмежене масштабування",
    "profit.scalable.desc": "Тисячі гравців можуть приєднатися одночасно, у будь-який час і з будь-якого місця",
    "profit.monetization.title": "Гнучка монетизація",
    "profit.monetization.desc": "Продавайте доступ через квитки або підписки — на ваш вибір",
    "profit.roi.title": "3.5x ROI",
    "profit.roi.desc": "Гейміфіковані формати підвищують ROI маркетингу до 3.5 разів",

    // How We Work
    "process.title": "Як ми працюємо",
    "process.subtitle": "Повний шлях від ідеї до онлайн-запуску",
    "process.step1.title": "Концепція та тема",
    "process.step1.desc": "Разом визначаємо ідею квесту, відповідність бренду та цілі",
    "process.step2.title": "Сценарій та головоломки",
    "process.step2.desc": "Наші сценаристи створюють захопливі історії та розумні головоломки під ваші цілі",
    "process.step3.title": "Дизайн та відеозйомка",
    "process.step3.desc": "Створюємо візуальні матеріали, анімації та за потреби відео для вашого квесту",
    "process.step4.title": "Розробка та тестування",
    "process.step4.desc": "Квест створюється і тестується на різних пристроях для бездоганної роботи",
    "process.step5.title": "Запуск та доступ",
    "process.step5.desc": "Підключаємо оплату, розгортаємо гру і передаємо доступ до хостингу",

    // Use Cases
    "cases.title": "Сфери застосування",
    "cases.subtitle": "Де наші онлайн-квести приносять цінність",

    // Demo
    "demo.title": "Спробуйте демо-квест",
    "demo.subtitle": "Пройдіть зразок, щоб оцінити цінність особисто",
    "demo.cta": "Почати демо",
    "demo.desc": "Відчуйте, що проходять ваші клієнти чи співробітники — цікаво, захопливо й унікально",
    "demo.form.title": "Запит на демо",
    "demo.form.name": "Ваше ім'я",
    "demo.form.namePlaceholder": "Введіть повне ім'я",
    "demo.form.email": "Електронна пошта",
    "demo.form.emailPlaceholder": "name@company.com",
    "demo.form.message": "Повідомлення",
    "demo.form.messagePlaceholder": "Чим займається ваша компанія?",
    "demo.form.cancel": "Скасувати",
    "demo.form.submit": "Запросити демо",
    "demo.form.success": "Запит на демо успішно надіслано!",

    // Contact
    "contact.title": "Створимо ваш квест",
    "contact.subtitle": "Замовте безкоштовну консультацію та почніть",
    "contact.cta": "Поспілкуватися з експертом",
    "contact.messengers": "Зв'язатися з нами через месенджери",
    "contact.email": "Написати нам",
    "contact.launch": "Час розробки",

    // Contact Form
    "contact.form.title": "Зв'яжіться з нами",
    "contact.form.description": "Готові запустити брендований онлайн-квест? Залиште заявку — допоможемо створити унікальний досвід, що працює.",
    "contact.form.name": "Повне ім'я",
    "contact.form.namePlaceholder": "Ваше повне ім'я",
    "contact.form.email": "Електронна пошта",
    "contact.form.emailPlaceholder": "name@business.com",
    "contact.form.phone": "Телефон",
    "contact.form.phonePlaceholder": "+1 (555) 123-4567",
    "contact.form.company": "Компанія",
    "contact.form.companyPlaceholder": "Назва компанії",
    "contact.form.date": "Дата консультації",
    "contact.form.selectDate": "Виберіть дату",
    "contact.form.time": "Час консультації",
    "contact.form.selectTime": "Виберіть час",
    "contact.form.youtube": "Промо-відео (опціонально)",
    "contact.form.youtubePlaceholder": "https://youtube.com/watch?v=...",
    "contact.form.message": "Ваше повідомлення",
    "contact.form.messagePlaceholder": "Опишіть бажаний квест і бізнес-цілі",
    "contact.form.downloadPdf": "Завантажити презентацію",
    "contact.form.cancel": "Скасувати",
    "contact.form.submit": "Відправити запит",
    "contact.form.sending": "Отправка...",
    "contact.form.success": "Повідомлення успішно надіслано!",
    // Consultation Form
    "consultation.form.success": "Запит на консультацію успішно надіслано!",
    "consultation.form.title": "Поспілкуватися з експертом",
    "consultation.form.subtitle": "Заплануйте персональну консультацію з нашим експертом з розробки квестів. Обговоримо вашу ідею та допоможемо створити унікальний досвід.",
    "consultation.form.email": "Ваша електронна пошта",
    "consultation.form.emailPlaceholder": "expert@yourcompany.com",
    "consultation.form.date": "Дата консультації",
    "consultation.form.datePlaceholder": "Оберіть дату",
    "consultation.form.time": "Бажаний час",
    "consultation.form.timePlaceholder": "Оберіть час",
    "consultation.form.additional": "Додаткова інформація",
    "consultation.form.additionalPlaceholder": "Розкажіть про ваш проєкт, цілі чи питання...",
    "consultation.form.cancel": "Скасувати",
    "consultation.form.submit": "Запланувати консультацію",
    "consultation.form.error.name": "Ім'я обов'язкове",
    "consultation.form.error.email": "Email обов'язковий",
    "consultation.form.error.emailInvalid": "Некоректний email",
    "consultation.form.error.date": "Дата обов'язкова",
    "consultation.form.error.time": "Час обов'язковий",
    "consultation.form.name": "ФІО",
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
