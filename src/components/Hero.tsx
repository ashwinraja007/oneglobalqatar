import { Button } from '@/components/ui/button';
import { ArrowRight, User, Users, Locate, Ship } from 'lucide-react';
import Link from 'next/link'; // Import Link for navigation

// --- Component for Navigation CTA Buttons ---
const HeroNavButtons = () => {
  // Define your real page routes here
  const buttons = [
    { icon: User, label: 'Customer Portal', href: '/customer-portal' },
    { icon: Users, label: 'Partner Portal', href: '/partner-portal' },
    { icon: Locate, label: 'Tracking', href: '/tracking' },
    { icon: Ship, label: 'Sailing Schedule', href: '/sailing-schedule' },
  ];

  return (
    // Positioned at bottom, hidden on small mobile, visible on md and up
    <div className="absolute bottom-10 left-0 right-0 z-20 hidden md:block">
      <div className="container mx-auto px-4">
        {/* Centered Container */}
        <div className="flex justify-center items-center">
          {/* Glass Container for the group */}
          <div className="flex bg-navy-dark/30 backdrop-blur-md border border-white/10 rounded-2xl p-2 gap-2">
            
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={button.href}
                className="
                  group relative flex items-center justify-center space-x-3
                  w-[200px] h-[60px] rounded-xl
                  transition-all duration-300 ease-in-out
                  
                  // Default State (Glassy & Transparent)
                  bg-transparent hover:bg-white/10
                  
                  // Border styling
                  border border-transparent hover:border-white/20
                "
              >
                {/* Icon Circle */}
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-white">
                  <button.icon className="w-4 h-4" />
                </div>

                {/* Text */}
                <span className="text-white font-body font-medium text-sm tracking-wide">
                  {button.label}
                </span>
              </Link>
            ))}

            {/* Vertical Dividers (Optional cosmetic touch between buttons) */}
            <div className="absolute inset-y-2 left-1/4 w-[1px] bg-white/10 pointer-events-none" />
            <div className="absolute inset-y-2 left-2/4 w-[1px] bg-white/10 pointer-events-none" />
            <div className="absolute inset-y-2 left-3/4 w-[1px] bg-white/10 pointer-events-none" />

          </div>
        </div>
      </div>
    </div>
  );
};
// -------------------------------------------

const Hero = () => {
  return (
    <section id="home" className="relative h-[600px] md:h-[750px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Hero01.jpg')` }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />
      </div>

      {/* Main Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center pb-20"> {/* Added pb-20 to make room for bottom nav */}
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
              className="border-white text-black hover:bg-white hover:text-black font-body transition-colors"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Render the Navigation Buttons */}
      <HeroNavButtons />

    </section>
  );
};

export default Hero;
