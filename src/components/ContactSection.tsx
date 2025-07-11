import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import ConsultationForm from './ConsultationForm';
import ContactForm from './ContactForm';
const ContactSection = () => {
  const { t } = useLanguage();

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Анимированные элементы фона */}
      <div className="absolute inset-0">
        <div className="absolute top-10 right-20 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-16 w-36 h-36 bg-green-500/10 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 animate-fade-in">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-300 mb-12 animate-fade-in">
            {t('contact.subtitle')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div
              
              className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group animate-scale-in block"
            >
              <div className="text-4xl mb-4 group-hover:animate-bounce">💬</div>
              <h3 className="text-lg font-bold text-white mb-2">
                {t('contact.messengers')} &nbsp;
              </h3>
              <div className="flex justify-center gap-4 mb-6">
              {/* Telegram */}
              <a 
                href="https://t.me/nikitaonys" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-blue-500 to-blue-600 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0zm5.568 8.16c-.18 1.896-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </a>
              
              {/* WhatsApp */}
              <a 
                href="https://wa.me/380991234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-green-500 to-green-600 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                </svg>
              </a>
              
              {/* Viber    */}
              <a 
                href="viber://chat?number=%2B380991234567" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gradient-to-r from-purple-500 to-purple-600 w-12 h-12 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-200"
              >
                <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0,0,256,256" width="24px" height="24px" fillRule="nonzero"><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode: "normal"}}><g transform="scale(5.33333,5.33333)"><path d="M24,5c-2.639,0 -10.67,0 -15.11,4.054c-2.644,2.634 -3.89,6.44 -3.89,11.946v3c0,5.506 1.246,9.312 3.921,11.976c1.332,1.215 3.148,2.186 5.368,2.857l0.711,0.214v5.328c0,0.625 0.181,0.625 0.241,0.625c0.123,0 0.32,-0.039 0.694,-0.371c0.09,-0.089 0.75,-0.803 3.96,-4.399l0.324,-0.363l0.485,0.031c1.075,0.067 2.184,0.102 3.296,0.102c2.639,0 10.67,0 15.11,-4.055c2.643,-2.634 3.89,-6.44 3.89,-11.945v-3c0,-5.506 -1.246,-9.312 -3.921,-11.976c-4.409,-4.024 -12.44,-4.024 -15.079,-4.024z" fill="#a855f7"/><path d="M33.451,28.854c-1.111,-0.936 -1.624,-1.219 -3.158,-2.14c-0.639,-0.383 -1.613,-0.714 -2.124,-0.714c-0.349,0 -0.767,0.267 -1.023,0.523c-0.656,0.656 -0.871,1.477 -2.021,1.477c-1.125,0 -3.09,-1.145 -4.5,-2.625c-1.48,-1.41 -2.625,-3.375 -2.625,-4.5c0,-1.15 0.806,-1.38 1.462,-2.037c0.256,-0.255 0.538,-0.673 0.538,-1.022c0,-0.511 -0.331,-1.47 -0.714,-2.109c-0.921,-1.535 -1.203,-2.048 -2.14,-3.158c-0.317,-0.376 -0.678,-0.548 -1.056,-0.549c-0.639,-0.001 -1.478,0.316 -2.046,0.739c-0.854,0.637 -1.747,1.504 -1.986,2.584c-0.032,0.147 -0.051,0.295 -0.057,0.443c-0.046,1.125 0.396,2.267 0.873,3.234c1.123,2.279 2.609,4.485 4.226,6.455c0.517,0.63 1.08,1.216 1.663,1.782c0.566,0.582 1.152,1.145 1.782,1.663c1.97,1.617 4.176,3.103 6.455,4.226c0.958,0.472 2.086,0.906 3.2,0.874c0.159,-0.005 0.318,-0.023 0.477,-0.058c1.08,-0.238 1.947,-1.132 2.584,-1.986c0.423,-0.568 0.74,-1.406 0.739,-2.046c-0.001,-0.378 -0.173,-0.739 -0.549,-1.056zM34,24c-0.552,0 -1,-0.448 -1,-1v-1c0,-4.962 -4.038,-9 -9,-9c-0.552,0 -1,-0.448 -1,-1c0,-0.552 0.448,-1 1,-1c6.065,0 11,4.935 11,11v1c0,0.552 -0.448,1 -1,1zM27.858,22c-0.444,0 -0.85,-0.298 -0.967,-0.748c-0.274,-1.051 -1.094,-1.872 -2.141,-2.142c-0.535,-0.139 -0.856,-0.684 -0.718,-1.219c0.138,-0.534 0.682,-0.855 1.219,-0.718c1.748,0.453 3.118,1.822 3.575,3.574c0.139,0.535 -0.181,1.08 -0.715,1.22c-0.085,0.022 -0.17,0.033 -0.253,0.033z" fill="#ffffff"/><path d="M31,23c-0.552,0 -1,-0.448 -1,-1c0,-3.188 -2.494,-5.818 -5.678,-5.986c-0.552,-0.029 -0.975,-0.5 -0.946,-1.051c0.029,-0.552 0.508,-0.976 1.051,-0.946c4.247,0.224 7.573,3.731 7.573,7.983c0,0.552 -0.448,1 -1,1z" fill="#ffffff"/><path d="M24,4c-4.5,0 -11.512,0.414 -15.784,4.316c-3.02,3.007 -4.216,7.225 -4.216,12.684c0,0.452 -0.002,0.956 0.002,1.5c-0.004,0.543 -0.002,1.047 -0.002,1.499c0,5.459 1.196,9.677 4.216,12.684c1.626,1.485 3.654,2.462 5.784,3.106v4.586c0,1.596 1.049,1.625 1.241,1.625h0.009c0.494,-0.002 0.921,-0.244 1.349,-0.624c0.161,-0.143 2.02,-2.215 4.042,-4.481c1.204,0.077 2.348,0.105 3.358,0.105v0v0c4.5,0 11.511,-0.415 15.784,-4.317c3.019,-3.006 4.216,-7.225 4.216,-12.684c0,-0.452 0.002,-0.956 -0.002,-1.5c0.004,-0.544 0.002,-1.047 0.002,-1.5c0,-5.459 -1.196,-9.677 -4.216,-12.684c-4.272,-3.901 -11.283,-4.315 -15.783,-4.315zM41,23.651v0.348c0,4.906 -1.045,8.249 -3.286,10.512c-3.882,3.489 -11.277,3.489 -13.715,3.489c-0.742,0 -1.946,-0.001 -3.367,-0.1c-0.395,0.444 -4.632,5.183 -4.632,5.183v-5.863c-2.104,-0.505 -4.183,-1.333 -5.714,-2.708c-2.241,-2.264 -3.286,-5.607 -3.286,-10.513v-0.348c0,-0.351 -0.001,-0.73 0.002,-1.173c-0.003,-0.4 -0.003,-0.778 -0.002,-1.13v-0.348c0,-4.906 1.045,-8.249 3.286,-10.512c3.881,-3.489 11.277,-3.489 13.714,-3.489c2.437,0 9.832,0 13.713,3.489c2.242,2.263 3.286,5.606 3.286,10.512v0.348c0,0.351 0.001,0.73 -0.002,1.173c0.003,0.401 0.003,0.779 0.003,1.13z" fill="#ffffff"/></g></g></svg>
              </a>
            </div>
            
            
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group animate-scale-in">
              <div className="text-4xl mb-4 group-hover:animate-pulse">✉️</div>
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.email')}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">info@questalize.com</p>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:scale-105 transition-all duration-300 cursor-pointer group animate-scale-in">
              <div className="text-4xl mb-4 group-hover:animate-spin">🚀</div>
              <h3 className="text-lg font-bold text-white mb-2">{t('contact.launch')}</h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors">4-6 weeks</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <ConsultationForm>
              <Button 
                size="lg"
                className="bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white px-12 py-4 text-xl font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer relative group"
              >
                <span className="relative z-10">{t('contact.cta')}</span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </Button>
            </ConsultationForm>

            <ContactForm>
              <Button 
                size="lg"
                variant="outline"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl transform hover:scale-105 transition-all duration-200 cursor-pointer" style={{ border: 0 }}
              >
                {t('hero.cta')}
              </Button>
            </ContactForm>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
