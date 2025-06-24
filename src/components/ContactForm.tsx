
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { ExternalLink, FileText } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  youtubeUrl: string;
}

const ContactForm = ({ children }: { children: React.ReactNode }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      company: '',
      message: '',
      youtubeUrl: ''
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Contact form submitted:', data);
    // Здесь будет логика отправки формы
    setIsOpen(false);
    form.reset();
  };

  const openPDF = () => {
    // Замените на реальную ссылку на PDF
    window.open('/path/to/your/document.pdf', '_blank');
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-slate-900 to-purple-900 border-purple-500/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white text-center mb-4">
            {t('contact.form.title') || 'Свяжитесь с нами'}
          </DialogTitle>
          <div className="text-purple-200 text-sm leading-relaxed">
            <p className="mb-3">
              {t('contact.form.description') || 'Свяжитесь с нами для заказа индивидуального квеста и получения кода на демо-версию игры. Наша команда поможет создать уникальный игровой опыт для вашего бизнеса.'}
            </p>
          </div>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-purple-200">
                      {t('contact.form.name') || 'Имя'}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t('contact.form.namePlaceholder') || 'Ваше имя'}
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-purple-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-purple-200">
                      {t('contact.form.email') || 'Email'}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder={t('contact.form.emailPlaceholder') || 'your@email.com'}
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-purple-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-purple-200">
                      {t('contact.form.phone') || 'Телефон'}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t('contact.form.phonePlaceholder') || '+1 (555) 123-4567'}
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-purple-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-purple-200">
                      {t('contact.form.company') || 'Компания'}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t('contact.form.companyPlaceholder') || 'Название компании'}
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-purple-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            
            <FormField
              control={form.control}
              name="youtubeUrl"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-200">
                    {t('contact.form.youtube') || 'YouTube видео (опционально)'}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={t('contact.form.youtubePlaceholder') || 'https://youtube.com/watch?v=...'}
                      className="bg-white/10 border-purple-500/30 text-white placeholder:text-purple-300"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-200">
                    {t('contact.form.message') || 'Сообщение'}
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t('contact.form.messagePlaceholder') || 'Расскажите о вашем проекте, целях и ожиданиях...'}
                      className="bg-white/10 border-purple-500/30 text-white placeholder:text-purple-300 min-h-[80px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex flex-col gap-3 pt-4">
              <Button
                type="button"
                onClick={openPDF}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white flex items-center justify-center gap-2"
              >
                <FileText className="w-4 h-4" />
                {t('contact.form.downloadPdf') || 'Скачать брошюру'}
                <ExternalLink className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 border-purple-500/30 text-purple-200 bg-purple-500/20 hover:bg-purple-500/20 hover:text-white"
                >
                  {t('contact.form.cancel') || 'Отмена'}
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white hover:text-white"
                >
                  {t('contact.form.submit') || 'Отправить'}
                </Button>
              </div>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactForm;
