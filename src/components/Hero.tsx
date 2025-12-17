import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Users, Locate, Ship } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Configuration for the Rotating Headlines ---
const HERO_MESSAGES = [
  "Cost Effective and Top Quality LCL & FCL Services",
  "Top-notch Warehousing Services for all your shipments",
  "Get the Best LCL & FCL Services at Unbeatable Prices",
  "Get the Best Logistics Service at very competitive prices"
];

// --- Navigation Buttons (Unchanged) ---
const HeroNavButtons = () => {
  const buttons = [
    { icon: User, label: 'Customer Portal', url: 'https://consolmate.com/auth/login/9' },
    { icon: Users, label: 'Partner Portal',  url: 'https://pp.onlinetracking.co/auth/login/9' },
    { icon: Locate, label: 'Tracking', url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:188' },
    { icon: Ship, label: 'Sailing Schedule', url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:188', },
  ];

  return (
    <div className="absolute bottom-10 left-0 right-0 z-20 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center">
          <div className="flex bg-navy-dark/30 backdrop-blur-md border border-white/10 rounded-2xl p-2 gap-2">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                className="
                  group relative flex items-center justify-center space-x-3
                  w-[200px] h-[60px] rounded-xl
                  transition-all duration-300 ease-in-out
                  bg-transparent hover:bg-white/10
                  border border-transparent hover:border-white/20
                  cursor-pointer
                "
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-accent group-hover:text-white transition-colors duration-300 text-white">
                  <button.icon className="w-4 h-4" />
                </div>
                <span className="text-white font-body font-medium text-sm tracking-wide">
                  {button.label}
                </span>
              </a>
            ))}
            {/* Dividers */}
            <div className="absolute inset-y-2 left-1/4 w-[1px] bg-white/10 pointer-events-none" />
            <div className="absolute inset-y-2 left-2/4 w-[1px] bg-white/10 pointer-events-none" />
            <div className="absolute inset-y-2 left-3/4 w-[1px] bg-white/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Hero Component ---
const Hero = () => {
  const [index, setIndex] = useState(0);

  // Rotate text every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % HERO_MESSAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[600px] md:h-[750px] overflow-hidden">

      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('/Hero01.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center pb-20">
        <div className="max-w-2xl text-left">
          
          <p className="font-body text-accent font-semibold mb-4 animate-fade-in tracking-wider">
            TRUSTED LOGISTICS PARTNER
          </p>

          {/* --- ANIMATED HEADLINE SECTION --- */}
          {/* Min-height ensures buttons don't jump when text length changes */}
          <div className="min-h-[160px] md:min-h-[200px] flex items-center mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index} 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white"
              >
                {HERO_MESSAGES[index]}
              </motion.h1>
            </AnimatePresence>
          </div>

          <div className="flex flex-wrap gap-4 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <a href="/services">
              <Button size="lg" className="bg-accent hover:bg-red-hover text-accent-foreground font-body font-semibold px-8">
                Our Services
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>

            <Button 
              size="lg"
              variant="outline"
              className="border-white text-black hover:bg-white hover:text-black font-body transition-colors"
              onClick={() => {
                const el = document.getElementById('contact');
                if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }}
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
