import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { Loader2 } from 'lucide-react';
import { toast } from 'sonner';
import { sendDemoForm } from '@/lib/service';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const DemoForm = ({ children }: { children: React.ReactNode }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    },
    mode: 'onBlur',
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendDemoForm(data);
      if (result.success) {
        toast.success(t('demo.form.success'));
        setIsOpen(false);
        form.reset();
      } else {
        toast.error(result.message || 'There was an error sending your message');
      }
    } catch (error) {
      console.error('Ошибка отправки формы:', error);
      toast.error('There was an error sending your message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-gradient-to-br from-slate-900 to-purple-900 border-purple-500/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white text-center">
            {t('demo.form.title') || 'Заявка на демо'}
          </DialogTitle>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              rules={{ required: t('consultation.form.error.name') }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-200">
                    {t('demo.form.name') || 'Имя'}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={t('demo.form.namePlaceholder') || 'Введите ваше имя'}
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
              rules={{
                required: t('consultation.form.error.email'),
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: t('consultation.form.error.emailInvalid'),
                },
              }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-200">
                    {t('demo.form.email') || 'Email'}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder={t('demo.form.emailPlaceholder') || 'your@email.com'}
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
              rules={{ required: t('consultation.form.error.massage') }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-purple-200">
                    {t('demo.form.message') || 'Сообщение'}
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t('demo.form.messagePlaceholder') || 'Расскажите о вашем проекте...'}
                      className="bg-white/10 border-purple-500/30 text-white placeholder:text-purple-300 min-h-[100px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsOpen(false)}
                className="flex-1 border-purple-500/30 text-purple-200 hover:bg-purple-500/20"
              >
                {t('demo.form.cancel') || 'Отмена'}
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t('contact.form.sending') || 'Отправка...'}
                  </>
                ) : (
                  t('demo.form.submit') || 'Отправить'
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoForm;
