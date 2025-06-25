"use client";

import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';

const formSchema = z.object({
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

type NewsletterFormValues = z.infer<typeof formSchema>;

interface NewsletterFormProps {
  className?: string;
}

const NewsletterForm: React.FC<NewsletterFormProps> = ({ className }) => {
  const form = useForm<NewsletterFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = (data: NewsletterFormValues) => {
    console.log('Newsletter subscription data:', data);
    // Simulate API call
    return new Promise((resolve) => {
      setTimeout(() => {
        toast.success(`Thank you for subscribing, ${data.email}!`);
        form.reset();
        resolve(null);
      }, 1000);
    });
  };

  return (
    <section className={cn('w-full max-w-2xl text-center', className)}>
      <div className="space-y-3">
        <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-card-foreground">
          Subscribe to the newsletter.
        </h2>
        <p className="text-lg text-muted-foreground max-w-xl mx-auto">
          Be first to hear about breakthroughs, partnerships, and deployment opportunities
        </p>
      </div>
      <div className="mt-8">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="w-full">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <div className="flex w-full max-w-md mx-auto items-start space-x-2">
                    <div className="flex-1 relative">
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="Email address"
                          className="py-6 text-base rounded-full border-border focus:ring-primary h-14 pr-4"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-left mt-1 ml-4 absolute" />
                    </div>
                    <Button
                      type="submit"
                      disabled={form.formState.isSubmitting}
                      className="py-6 px-6 rounded-full font-semibold text-base bg-primary hover:bg-primary/90 text-primary-foreground h-14"
                    >
                      {form.formState.isSubmitting ? 'Submitting...' : 'Submit'}
                    </Button>
                  </div>
                </FormItem>
              )}
            />
          </form>
        </Form>
      </div>
    </section>
  );
};

export default NewsletterForm;
