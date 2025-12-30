import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, User, Users, Locate, Ship } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

// --- Rotating Headlines ---
const HERO_MESSAGES = [
  "Cost Effective and Top Quality LCL & FCL <span class='text-accent'>Services</span>",
  "Top-notch Warehousing <span class='text-accent'>Services</span> for all your shipments",
  "Get the Best LCL & FCL <span class='text-accent'>Services</span> at Unbeatable Prices",
  "Get the Best Logistics <span class='text-accent'>Service</span> at very competitive prices"
];

// --- Navigation Buttons (Bottom Floating Buttons) ---
const HeroNavButtons = () => {
  const buttons = [
    { icon: User, label: 'Customer Portal', url: 'https://consolmate.com/auth/login/9' },
    { icon: Users, label: 'Partner Portal', url: 'https://pp.onlinetracking.co/auth/login/9' },
    { icon: Locate, label: 'Tracking', url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:188' },
    { icon: Ship, label: 'Sailing Schedule', url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:188' },
  ];

  return (
    <div className="absolute bottom-10 left-0 right-0 z-20 hidden md:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          <div className="relative flex bg-navy-dark/30 backdrop-blur-md border border-white/10 rounded-2xl p-2 gap-2">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 w-[200px] h-[60px] rounded-xl
                  transition-all duration-300 bg-transparent hover:bg-white/10
                  border border-transparent hover:border-white/20"
              >
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 group-hover:bg-accent transition-colors text-white">
                  <button.icon className="w-4 h-4" />
                </div>
                <span className="text-white font-medium text-sm">
                  {button.label}
                </span>
              </a>
            ))}

            {/* Dividers */}
            <div className="absolute inset-y-2 left-1/4 w-px bg-white/10" />
            <div className="absolute inset-y-2 left-2/4 w-px bg-white/10" />
            <div className="absolute inset-y-2 left-3/4 w-px bg-white/10" />
          </div>
        </div>
      </div>
    </div>
  );
};

// --- Main Hero Component ---
const Hero = () => {
  const [index, setIndex] = useState(0);
  const navigate = useNavigate();

  // Rotate headline every 4s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % HERO_MESSAGES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[600px] md:h-[750px] overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/Hero01.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/90 via-navy/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center pb-20">
        <div className="max-w-2xl">

          <p className="text-accent font-semibold mb-4 tracking-wider animate-fade-in">
            TRUSTED LOGISTICS PARTNER
          </p>

          {/* Animated Headline */}
          <div className="min-h-[160px] md:min-h-[200px] flex items-center mb-6">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                dangerouslySetInnerHTML={{ __html: HERO_MESSAGES[index] }}
              />
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in">

            {/* Services Page */}
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold px-8"
              onClick={() => navigate('/services')}
            >
              Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            {/* Contact Page */}
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-primary"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>

          </div>
        </div>
      </div>

      {/* Bottom Nav Buttons */}
      <HeroNavButtons />
    </section>
  );
};

export default Hero;
