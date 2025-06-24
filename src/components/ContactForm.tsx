
import React, { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useForm } from 'react-hook-form';
import { ExternalLink, FileText, CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  youtubeUrl: string;
  consultationDate: Date | undefined;
  consultationTime: string;
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
      youtubeUrl: '',
      consultationDate: undefined,
      consultationTime: ''
    }
  });

  // Generate time slots in 15-minute intervals
  const generateTimeSlots = () => {
    const slots = [];
    for (let hour = 9; hour <= 18; hour++) {
      for (let minute = 0; minute < 60; minute += 15) {
        const time24 = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
        
        // Convert to AM/PM format
        const hour12 = hour === 0 ? 12 : hour > 12 ? hour - 12 : hour;
        const ampm = hour < 12 ? 'AM' : 'PM';
        const time12 = `${hour12}:${minute.toString().padStart(2, '0')} ${ampm}`;
        
        slots.push({ value: time24, label: time12 });
      }
    }
    return slots;
  };

  const timeSlots = generateTimeSlots();

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
      <DialogContent className="sm:max-w-[600px] bg-gradient-to-br from-slate-900 to-purple-900 border-purple-500/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white text-center mb-4">
            {t('contact.form.title')}
          </DialogTitle>
          <div className="text-purple-200 text-sm leading-relaxed">
            <p className="mb-3">
              {t('contact.form.description')}
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
                      {t('contact.form.name')}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t('contact.form.namePlaceholder')}
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
                      {t('contact.form.email')}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        type="email"
                        placeholder={t('contact.form.emailPlaceholder')}
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
                      {t('contact.form.phone')}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t('contact.form.phonePlaceholder')}
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
                      {t('contact.form.company')}
                    </FormLabel>
                    <FormControl>
                      <Input 
                        placeholder={t('contact.form.companyPlaceholder')}
                        className="bg-white/10 border-purple-500/30 text-white placeholder:text-purple-300"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="consultationDate"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-purple-200">
                      {t('contact.form.date')}
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal bg-white/10 border-purple-500/30 text-white hover:bg-white/20",
                              !field.value && "text-purple-300"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>{t('contact.form.selectDate')}</span>
                            )}
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={field.value}
                          onSelect={field.onChange}
                          disabled={(date) =>
                            date < new Date() || date < new Date("1900-01-01")
                          }
                          initialFocus
                          className={cn("p-3 pointer-events-auto")}
                        />
                      </PopoverContent>
                    </Popover>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="consultationTime"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-purple-200">
                      {t('contact.form.time')}
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/10 border-purple-500/30 text-white">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-4 w-4" />
                            <SelectValue 
                              placeholder={t('contact.form.selectTime')}
                              className="text-purple-300"
                            />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-slate-800 border-purple-500/30">
                        {timeSlots.map((slot) => (
                          <SelectItem 
                            key={slot.value} 
                            value={slot.value}
                            className="text-white hover:bg-purple-500/20 focus:bg-purple-500/20"
                          >
                            {slot.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
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
                    {t('contact.form.youtube')}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      placeholder={t('contact.form.youtubePlaceholder')}
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
                    {t('contact.form.message')}
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t('contact.form.messagePlaceholder')}
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
                {t('contact.form.downloadPdf')}
                <ExternalLink className="w-4 h-4" />
              </Button>
              
              <div className="flex gap-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsOpen(false)}
                  className="flex-1 border-purple-500/30 text-purple-200 hover:bg-purple-500/20"
                >
                  {t('contact.form.cancel')}
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
                >
                  {t('contact.form.submit')}
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
