
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const QuestInfoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Headers */}
        <div className="text-center mb-16 mb-[4rem]">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('quest.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('quest.subtitle')}
          </p>
        </div>
        <div className="max-w-4xl mx-auto mb-[4rem]">
          <div className="w-full flex justify-center items-center">
            <div className="h-64 w-full max-w-2xl bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700 flex justify-center items-center">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/ZYfqCEYn-MM"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full object-cover"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Info Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Interactive Storys*/}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🧩</div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('quest.interactive.title')}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('quest.interactive.desc')}
            </p>
            <div className="h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700">
              <img 
                src="/public/images/pupkin.png" 
                alt="Interactive Story" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Multimedia Clues */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">📂</div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('quest.multimedia.title')}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('quest.multimedia.desc')}
            </p>
            <div className="h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=200&fit=crop" 
                alt="Multimedia Clues" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Browser-Based Interface */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🖥</div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('quest.browser.title')}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('quest.browser.desc')}
            </p>
            <div className="h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700">
              <img 
                src="/public/images/dashboard.png" 
                alt="Browser Interface" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>

          {/* Puzzle-Solving Gameplay */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">🕵️</div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('quest.puzzle.title')}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('quest.puzzle.desc')}
            </p>
            <div className="h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700">
              <img 
                src="/public/images/car.png" 
                alt="Puzzle Solving" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          {/* Customizable Format */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('quest.customizable.title')}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('quest.customizable.desc')}
            </p>
            <div className="h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700">
              <img 
                src="/public/images/key.png" 
                alt="Customizable Format" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="text-4xl mb-4">✨</div>
            <h3 className="text-2xl font-bold text-white mb-4">{t('quest.team.title')}</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {t('quest.team.desc')}
            </p>
            <div className="h-48 bg-gray-800/50 rounded-lg flex items-center justify-center border border-gray-700">
              <img 
                src="/public/images/todays_result.png" 
                alt="Interactive Story" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        
      </div>
    </section>
  );
};

export default QuestInfoSection;
