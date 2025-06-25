import React from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const AboutPage: React.FC = () => {
  return (
    <div className="w-full max-w-4xl px-4 md:px-8">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">About Pulse Robot</CardTitle>
          <CardDescription>
            Innovating at the intersection of AI and humanity.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>This is the About page. You can add more information about your project or company here.</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutPage;