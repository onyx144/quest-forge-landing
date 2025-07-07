
import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

const QuestInfoSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Headers */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {t('quest.title')}
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            {t('quest.subtitle')}
          </p>
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
                src="/public/images/todays_result.png" 
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
        </div>

        {/* Image Slider */}
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">{t('quest.examples')}</h3>
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="h-64 bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
                    <img 
                      src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=250&fit=crop" 
                      alt="Quest Example 1" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="h-64 bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
                    <img 
                      src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=250&fit=crop" 
                      alt="Quest Example 2" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="h-64 bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
                    <img 
                      src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=250&fit=crop" 
                      alt="Quest Example 3" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="h-64 bg-gray-800/50 rounded-lg overflow-hidden border border-gray-700">
                    <img 
                      src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=250&fit=crop" 
                      alt="Quest Example 4" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
            <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default QuestInfoSection;
