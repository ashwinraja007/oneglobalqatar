import { Button } from '@/components/ui/button';
import { ArrowRight, User, Users, Locate, Ship } from 'lucide-react';

// --- Component for Wider Navigation CTA Buttons ---
const HeroNavButtons = () => {
  const buttons = [
    { icon: User, label: 'Customer Portal', href: '/customer-portal' },
    { icon: Users, label: 'Partner Portal', href: '/partner-portal' },
    { icon: Locate, label: 'Tracking', href: '/tracking' },
    { icon: Ship, label: 'Sailing Schedule', href: '/sailing-schedule' },
  ];

  return (
    <div className="absolute bottom-8 left-0 right-0 z-20 hidden md:block px-8">
      {/* Main Container - Controls the overall max width of the bar */}
      <div className="max-w-6xl mx-auto">
        
        {/* The Glass Bar itself */}
        {/* bg-navy-dark/80 makes it darker like the image. rounded-2xl clips the corners. */}
        <div className="flex w-full bg-navy-dark/80 backdrop-blur-lg border border-white/15 rounded-3xl overflow-hidden shadow-2xl">
          
          {buttons.map((button, index) => (
            <a
              key={index}
              href={button.href}
              className={`
                // 'flex-1' makes them all grow equally to fill the width
                flex-1 relative h-[90px] flex items-center justify-center space-x-4
                transition-all duration-300 ease-in-out
                // Hover effect for the whole block
                hover:bg-white/10 group cursor-pointer
                // Add a right border to create dividers, except for the very last item
                ${index !== buttons.length - 1 ? 'border-r border-white/15' : ''}
              `}
            >
              {/* Icon Wrapper */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-gray-300 group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <button.icon className="w-5 h-5" />
              </div>

              {/* Text Label */}
              <span className="text-white font-body font-semibold text-lg tracking-wider">
                {button.label}
              </span>
            </a>
          ))}

        </div>
      </div>
    </div>
  );
};

// --- Main Hero Component ---
const Hero = () => {
  return (
    // Increased height slightly to accommodate larger bottom bar
    <section id="home" className="relative h-[650px] md:h-[800px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Hero01.jpg')` }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy/80 to-navy/30" />
      </div>

      {/* Content */}
      {/* Added extra padding-bottom (pb-32) so main content doesn't overlap the new bigger bar */}
      <div className="relative container mx-auto px-4 h-full flex items-center pb-32">
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

      {/* Render the new wider navigation bar */}
      <HeroNavButtons />

    </section>
  );
};

export default Hero;
