
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { useForm } from 'react-hook-form';
import { X } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const DemoForm = ({ children }: { children: React.ReactNode }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const form = useForm<FormData>({
    defaultValues: {
      name: '',
      email: '',
      message: ''
    }
  });

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    // Здесь будет логика отправки формы
    setIsOpen(false);
    form.reset();
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
                className="flex-1 bg-gradient-to-r from-yellow-500 to-orange-600 hover:from-yellow-600 hover:to-orange-700 text-white"
              >
                {t('demo.form.submit') || 'Отправить'}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default DemoForm;
