import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  CheckCircle,
  Target,
  Eye,
  Heart,
  Shield,
  Lightbulb,
  Users,
} from 'lucide-react';
import { motion } from 'framer-motion';

const AboutPage = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  const features = [
    'Global NVOCC Operator',
    'LCL Consolidation Experts',
    'Transparent Pricing',
    'Dedicated Trade Lanes',
    'Secured End-to-End Services',
    'Trusted Agent Network',
  ];

  const coreValues = [
    {
      icon: Shield,
      title: 'Integrity',
      description:
        'We conduct business with honesty and transparency, building lasting trust with our partners.',
    },
    {
      icon: Heart,
      title: 'Reliability',
      description:
        'Consistent, dependable service delivery that our clients can count on every time.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description:
        'Continuously improving our processes and adopting new technologies to serve you better.',
    },
    {
      icon: Users,
      title: 'Partnership',
      description:
        'We believe in building strong, long-term relationships with our clients and agents.',
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src="/about-bg.webp"
            alt="About One Global Logistics"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/50 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="max-w-2xl"
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">
                  About Us
                </h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Your trusted partner in global logistics solutions
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ABOUT CONTENT */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* IMAGE */}
            <motion.div
              initial={{ x: -120, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="relative w-full h-full"
            >
              <img
                src="/cargo-ship.png"
                alt="One Global Logistics"
                className="w-full h-auto object-cover"
                style={{
                  filter: 'drop-shadow(0px 10px 30px rgba(0,0,0,0.15))',
                }}
              />
            </motion.div>

            {/* TEXT */}
            <div className="container mx-auto px-6 lg:px-12">
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                  Drive Your Business <br />
                  Forward with <span className="text-accent">OGL</span>
                </h2>

                <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed mb-8">
                  One Global Logistics services W.L.L is a Qatar based global NVOCC (Non-vessel owned common carrier) operator providing LCL consolidation services worldwide markets. We at OGL has a well experienced and established team with relevant experience in their own dedicated trade lanes supports our customers with all their special requirements with complete dedication and transparency.Our commitment to honest, transparent business practice and pricing, backed by a network of experienced and trusted agents, from around the world, makes us  one of the fast-growing consolidators based at Qatar. We are well positioned to manage your LCL business with full attention. We aimed at providing the secured end to end LCL services to the Freight Forwarding /Logistics Companies in Qatar, whereas we ensure to maintain the trust and not entertain direct customer business.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                  {features.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent fill-accent/10" />
                      <span className="font-body text-foreground font-medium">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Vision, Mission, Core Values, CTA – unchanged */}
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
