import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const ContactPage: React.FC = () => {
  return (
    <div className="w-full max-w-4xl px-4 md:px-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">Contact Us</CardTitle>
          <CardDescription>
            We'd love to hear from you.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the Contact page. You can add a contact form or contact details here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContactPage;