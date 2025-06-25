import React from 'react';
import CountUp from 'react-countup';
import { cn } from '@/lib/utils';

interface StatItemProps {
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}

const StatItem: React.FC<StatItemProps> = ({ value, label, prefix, suffix, decimals }) => (
  <div className="text-center">
    <h3 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
      <CountUp end={value} duration={3} separator="," prefix={prefix} suffix={suffix} decimals={decimals} enableScrollSpy scrollSpyDelay={300} />
    </h3>
    <p className="text-base text-muted-foreground mt-1">
      {label}
    </p>
  </div>
);

interface StatsProps {
  className?: string;
}

const Stats: React.FC<StatsProps> = ({ className }) => {
  const stats = [
    { value: 2.5, label: 'Active Users', suffix: 'K+', decimals: 1 },
    { value: 120, label: 'Global Servers', suffix: '+' },
    { value: 99.9, label: 'Uptime', suffix: '%', decimals: 1 },
    { value: 5, label: 'API Requests/Day', suffix: 'M+' },
  ];

  return (
    <section className={cn('w-full max-w-5xl', className)}>
      <div className="grid grid-cols-2 gap-y-10 sm:grid-cols-4 sm:gap-x-8">
        {stats.map((stat, index) => (
          <StatItem key={index} {...stat} />
        ))}
      </div>
    </section>
  );
};

export default Stats;