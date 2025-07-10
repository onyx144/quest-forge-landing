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
import { CalendarIcon, Clock, Loader2 } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { sendConsoltationForm } from '@/lib/service';
import { toast } from 'sonner';

interface ExpertFormData {
  name: string;
  email: string;
  consultationDate: Date | undefined;
  consultationTime: string;
  additionalInfo: string;
}

const ConsultationForm = ({ children }: { children: React.ReactNode }) => {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<ExpertFormData>({
    defaultValues: {
      name: '',
      email: '',
      consultationDate: undefined,
      consultationTime: '',
      additionalInfo: ''
    },
    mode: 'onBlur',
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

  const onSubmit = async (data: ExpertFormData) => {
    setIsSubmitting(true);
    try {
      const result = await sendConsoltationForm(data);
      if (result.success) {
        toast.success(t('consultation.form.success'));
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
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-emerald-900 to-green-900 border-emerald-500/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white text-center mb-4">
            🎯 {t('consultation.form.title')}
          </DialogTitle>
          <div className="text-emerald-200 text-sm leading-relaxed text-center">
            <p className="mb-3">
              {t('consultation.form.subtitle')}
            </p>
          </div>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  <FormLabel className="text-emerald-200 text-lg font-semibold">
                    📧 {t('consultation.form.email')}
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder={t('consultation.form.emailPlaceholder')}
                      className="bg-white/10 border-emerald-500/30 text-white placeholder:text-emerald-300 h-12 text-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
    <FormField
              control={form.control}
              name="name"
              rules={{ required: t('consultation.form.error.name') }}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-emerald-200 text-lg font-semibold">
                    {t('consultation.form.name') || 'Name'}
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder={'Adam Adamov'}
                      className="bg-white/10 border-emerald-500/30 text-white placeholder:text-emerald-300 h-12 text-lg"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Date and Time Selection */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              
              <FormField
                control={form.control}
                name="consultationDate"
                rules={{ required: t('consultation.form.error.date') }}
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-emerald-200 text-lg font-semibold">
                      📅 {t('consultation.form.date')}
                    </FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            className={cn(
                              "w-full justify-start text-left font-normal bg-white/10 border-emerald-500/30 text-white hover:bg-white/20 h-12",
                              !field.value && "text-emerald-300"
                            )}
                          >
                            <CalendarIcon className="mr-2 h-5 w-5" />
                            {field.value ? (
                              format(field.value, "PPP")
                            ) : (
                              <span>{t('consultation.form.datePlaceholder')}</span>
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
                rules={{ required: t('consultation.form.error.time') }}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-emerald-200 text-lg font-semibold">
                      ⏰ {t('consultation.form.time')}
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/10 border-emerald-500/30 text-white h-12">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-5 w-5" />
                            <SelectValue 
                              placeholder={t('consultation.form.timePlaceholder')}
                              className="text-emerald-300"
                            />
                          </div>
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent className="bg-slate-800 border-emerald-500/30">
                        {timeSlots.map((slot) => (
                          <SelectItem 
                            key={slot.value} 
                            value={slot.value}
                            className="text-white hover:bg-emerald-500/20 focus:bg-emerald-500/20"
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
              name="additionalInfo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-emerald-200 text-lg font-semibold">
                    💭 {t('consultation.form.additional')}
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder={t('consultation.form.additionalPlaceholder')}
                      className="bg-white/10 border-emerald-500/30 text-white placeholder:text-emerald-300 min-h-[120px] resize-none"
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
                className="flex-1 border-emerald-500/30 text-emerald-200 hover:bg-[#239142] hover:text-white h-12"
                style={{ background: '#239142' }}
              >
                {t('consultation.form.cancel')}
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white h-12 font-bold"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                    {t('contact.form.sending') || 'Отправка...'}
                  </>
                ) : (
                  <>🚀 {t('consultation.form.submit')}</>
                )}
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationForm;