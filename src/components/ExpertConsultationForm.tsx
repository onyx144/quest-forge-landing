
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
import { CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';

interface ExpertFormData {
  email: string;
  consultationDate: Date | undefined;
  consultationTime: string;
  additionalInfo: string;
}

const ExpertConsultationForm = ({ children }: { children: React.ReactNode }) => {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  
  const form = useForm<ExpertFormData>({
    defaultValues: {
      email: '',
      consultationDate: undefined,
      consultationTime: '',
      additionalInfo: ''
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

  const onSubmit = (data: ExpertFormData) => {
    console.log('Expert consultation form submitted:', data);
    // Здесь будет логика отправки формы для консультации с экспертом
    setIsOpen(false);
    form.reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] bg-gradient-to-br from-emerald-900 to-green-900 border-emerald-500/20 max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white text-center mb-4">
            🎯 Talk to an Expert
          </DialogTitle>
          <div className="text-emerald-200 text-sm leading-relaxed text-center">
            <p className="mb-3">
              Schedule a personalized consultation with our quest development expert. We'll discuss your vision and help you create an amazing experience.
            </p>
          </div>
        </DialogHeader>
        
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-emerald-200 text-lg font-semibold">
                    📧 Your Email Address
                  </FormLabel>
                  <FormControl>
                    <Input 
                      type="email"
                      placeholder="expert@yourcompany.com"
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
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel className="text-emerald-200 text-lg font-semibold">
                      📅 Consultation Date
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
                              <span>Select date</span>
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
                    <FormLabel className="text-emerald-200 text-lg font-semibold">
                      ⏰ Preferred Time
                    </FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className="bg-white/10 border-emerald-500/30 text-white h-12">
                          <div className="flex items-center">
                            <Clock className="mr-2 h-5 w-5" />
                            <SelectValue 
                              placeholder="Select time"
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
                    💭 Additional Information
                  </FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Tell us about your project, goals, or any specific questions you have..."
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
                className="flex-1 border-emerald-500/30 text-emerald-200 hover:bg-emerald-500/20 h-12"
              >
                Cancel
              </Button>
              <Button
                type="submit"
                className="flex-1 bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white h-12 font-bold"
              >
                🚀 Schedule Consultation
              </Button>
            </div>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default ExpertConsultationForm;
