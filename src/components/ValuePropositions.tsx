import React from 'react';
import { Laptop, Bell, FileBarChart2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ValuePropositions = () => {
  const propositions = [
    {
      icon: Laptop,
      title: 'On-line Booking',
      description: 'Streamlined digital booking portal accessible 24/7 for instant scheduling.'
    },
    {
      icon: Bell,
      title: 'Auto-alerts with milestone updates',
      description: 'Real-time notifications keeping you and your customers informed at every step.'
    },
    {
      icon: FileBarChart2,
      title: 'KPI reports with dashboard facility',
      description: 'Comprehensive analytics and visual dashboards to track performance metrics.'
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            FREIGHT MANAGEMENT VALUE PROPOSITIONS
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {propositions.map((prop, index) => {
            const Icon = prop.icon;
            return (
              <div
                key={index}
                className="text-center p-6 animate-scale-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-secondary rounded-xl flex items-center justify-center">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="font-heading font-bold text-primary mb-2 h-14 flex items-center justify-center">
                  {prop.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground">
                  {prop.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA Banner */}
        <div className="bg-primary rounded-xl p-8 md:p-10 text-center shadow-lg">
          <p className="font-body text-primary-foreground/90 mb-6 text-lg">
            Our commitment to excellence makes us the industry leader
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-body font-semibold px-10">
            Get Started Today
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ValuePropositions;
