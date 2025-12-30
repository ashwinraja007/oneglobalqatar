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

// --- Navigation Buttons (The Floating Bar) ---
const HeroNavButtons = () => {
  const buttons = [
    { icon: User, label: 'Customer Portal', url: 'https://consolmate.com/auth/login/9' },
    { icon: Users, label: 'Partner Portal', url: 'https://pp.onlinetracking.co/auth/login/9' },
    { icon: Locate, label: 'Tracking', url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:102:::::P0_GROUP_RID:188' },
    { icon: Ship, label: 'Sailing Schedule', url: 'http://ec2-13-229-38-56.ap-southeast-1.compute.amazonaws.com:8081/ords/f?p=107:104:::::P0_GROUP_RID:188' },
  ];

  return (
    <div className="absolute bottom-12 left-0 right-0 z-20 hidden lg:block">
      <div className="container mx-auto px-4">
        <div className="flex justify-center">
          {/* Main Container with Glassmorphism */}
          <div className="flex items-center bg-[#0a192f]/60 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
            {buttons.map((button, index) => (
              <a
                key={index}
                href={button.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`
                  group flex items-center gap-4 px-10 py-5 transition-all duration-300
                  hover:bg-white/5 relative
                  ${index !== buttons.length - 1 ? 'border-r border-white/10' : ''}
                `}
              >
                {/* Circular Icon Wrapper */}
                <div className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 group-hover:bg-accent transition-all duration-300">
                  <button.icon className="w-5 h-5 text-white group-hover:text-accent-foreground" />
                </div>
                
                {/* Label Text */}
                <span className="text-white font-semibold text-sm tracking-wide whitespace-nowrap">
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
    <section id="home" className="relative h-[650px] md:h-[850px] overflow-hidden flex flex-col">

      {/* Background Image & Overlays */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-1000"
        style={{ backgroundImage: `url('/Hero01.jpg')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-navy-dark/95 via-navy-dark/70 to-transparent" />
        <div className="absolute inset-0 bg-black/20" /> {/* Subtle darkening for better text contrast */}
      </div>

      {/* Main Content Area */}
      <div className="relative container mx-auto px-4 flex-grow flex items-center">
        <div className="max-w-3xl pt-10">

          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-accent font-bold mb-4 tracking-[0.2em] uppercase text-sm"
          >
            Trusted Logistics Partner
          </motion.p>

          {/* Animated Headline */}
          <div className="min-h-[160px] md:min-h-[220px] flex items-center mb-8">
            <AnimatePresence mode="wait">
              <motion.h1
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1]"
                dangerouslySetInnerHTML={{ __html: HERO_MESSAGES[index] }}
              />
            </AnimatePresence>
          </div>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap gap-5"
          >
            <Button
              size="lg"
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold px-10 h-14 rounded-full transition-transform hover:scale-105"
              onClick={() => navigate('/services')}
            >
              Our Services
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-navy-dark font-bold px-10 h-14 rounded-full transition-all"
              onClick={() => navigate('/contact')}
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom Floating Navigation */}
      <HeroNavButtons />
    </section>
  );
};

export default Hero;
