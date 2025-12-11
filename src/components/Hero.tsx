import { Button } from '@/components/ui/button';
import { ArrowRight, User, Users, Locate, Ship } from 'lucide-react';

// --- Component for Long & Sleek Navigation Bar ---
const HeroNavButtons = () => {
  const buttons = [
    { icon: User, label: 'Customer Portal', href: '/customer-portal' },
    { icon: Users, label: 'Partner Portal', href: '/partner-portal' },
    { icon: Locate, label: 'Tracking', href: '/tracking' },
    { icon: Ship, label: 'Sailing Schedule', href: '/sailing-schedule' },
  ];

  return (
    // Positioned at the bottom, overlapping the hero image slightly
    <div className="absolute bottom-10 left-0 right-0 z-20 hidden md:block">
      <div className="container mx-auto px-4">
        
        {/* The Bar Container: Spans full width of container, but keeps height sleek */}
        <div className="w-full bg-navy-dark/90 backdrop-blur-md border border-white/10 rounded-xl overflow-hidden shadow-2xl">
          
          <div className="flex flex-row items-center h-16"> {/* Fixed sleek height (h-16 = 64px) */}
            
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.href}
                className={`
                  flex-1 flex items-center justify-center space-x-3 h-full
                  transition-all duration-300 ease-in-out
                  hover:bg-white/10 group cursor-pointer
                  // Add subtle vertical dividers
                  ${index !== buttons.length - 1 ? 'border-r border-white/10' : ''}
                `}
              >
                {/* Icon - Scaled down slightly to fit the sleek bar */}
                <button.icon className="w-5 h-5 text-gray-400 group-hover:text-accent transition-colors duration-300" />

                {/* Text - Adjusted size for better proportion */}
                <span className="text-white font-body font-medium text-sm md:text-base tracking-wide group-hover:text-white transition-colors">
                  {button.label}
                </span>
              </a>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Hero Component ---
const Hero = () => {
  return (
    <section id="home" className="relative h-[600px] md:h-[750px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Hero01.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-navy/30" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center pb-24">
        <div className="max-w-2xl text-left">
          <p className="font-body text-accent font-semibold mb-4 animate-fade-in tracking-wider">
            TRUSTED LOGISTICS PARTNER
          </p>

          <h1
            className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white animate-slide-in-left"
            style={{ animationDelay: '0.2s' }}
          >
            Get the Best Logistics
            <span className="text-accent"> Service </span>
            with One Global Consolidators
          </h1>

          <p
            className="font-body text-lg md:text-xl text-gray-100 mb-8 animate-slide-in-left"
            style={{ animationDelay: '0.4s' }}
          >
            Your trusted partner for sea and air freight solutions. We deliver excellence across borders with reliability and precision.
          </p>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-accent hover:bg-red-hover text-accent-foreground font-body font-semibold px-8">
              Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button 
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black font-body transition-colors"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <HeroNavButtons />

    </section>
  );
};

export default Hero;
