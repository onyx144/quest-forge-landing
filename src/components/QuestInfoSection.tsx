import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { FileText, ExternalLink, Play } from 'lucide-react';

const QuestInfoSection = () => {
  const { t } = useLanguage();

  const openPDF = () => {
    // Замените на реальную ссылку на PDF
    window.open('/path/to/your/presentation.pdf', '_blank');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-purple-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/20 rounded-full animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-purple-500/20 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            Узнайте больше о наших квестах
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-in">
            Посмотрите презентацию и ознакомительное видео, чтобы лучше понять возможности наших интерактивных онлайн-квестов
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Презентация */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 animate-scale-in">
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-purple-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Презентация проекта
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Подробная презентация с примерами работ, статистикой эффективности и вариантами реализации квестов для различных индустрий.
              </p>
              <Button
                onClick={openPDF}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white flex items-center justify-center gap-2 w-full"
              >
                <FileText className="w-5 h-5" />
                Скачать презентацию
                <ExternalLink className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Видео */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/10 animate-scale-in">
            <div className="text-center mb-6">
              <div className="bg-gradient-to-r from-red-500 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-10 h-10 text-white ml-1" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                Ознакомительное видео
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Посмотрите, как работают наши квесты на практике и какие возможности они открывают для вашего бизнеса.
              </p>
            </div>
            
            {/* YouTube видео */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-black/20 border border-white/10">
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Quest Demo Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuestInfoSection;