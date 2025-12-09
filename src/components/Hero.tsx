import heroImage from '@/assets/hero-port.jpg';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[600px] md:h-[700px] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl text-left">
          <p className="font-body text-accent font-semibold mb-4 animate-fade-in tracking-wider">
            TRUSTED LOGISTICS PARTNER
          </p>
          
          {/* Main Heading (White) */}
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white animate-slide-in-left" style={{ animationDelay: '0.2s' }}>
            Get the Best Logistics
            <span className="text-accent"> Service </span>
            with One Global Consolidators
          </h1>
          
          {/* Subtext (White/Light Gray) */}
          <p className="font-body text-lg md:text-xl text-gray-100 mb-8 animate-slide-in-left" style={{ animationDelay: '0.4s' }}>
            Your trusted partner for sea and air freight solutions. We deliver excellence across borders with reliability and precision.
          </p>
          
          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <Button size="lg" className="bg-accent hover:bg-red-hover text-accent-foreground font-body font-semibold px-8">
              Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            {/* Contact Button */}
            {/* CHANGED: Added 'text-white border-white' for the state before hover */}
            {/* Added 'hover:bg-white hover:text-black' for a clean hover effect */}
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

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
