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

        {/* ABOUT CONTENT – SAME STYLE AS HOMEPAGE */}
        <section className="py-20 bg-background overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center">

            {/* IMAGE – FULL BLEED LEFT */}
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
                  filter:
                    'drop-shadow(0px 10px 30px rgba(0,0,0,0.15))',
                }}
              />
            </motion.div>

            {/* TEXT – CONTAINED RIGHT */}
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

                <div className="font-body text-base md:text-lg text-muted-foreground leading-relaxed space-y-4 mb-8">
                  <p>
                    One Global Logistics services W.L.L is a Qatar based
                    global NVOCC operator providing LCL consolidation
                    services worldwide markets.
                  </p>
                  <p>
                    Our experienced team supports customers across
                    dedicated trade lanes with complete transparency and
                    commitment.
                  </p>
                  <p>
                    Honest pricing and a trusted global agent network make
                    us one of the fast-growing consolidators based in
                    Qatar.
                  </p>
                  <p>
                    We provide secured end-to-end LCL services exclusively
                    for freight forwarders, maintaining long-term trust.
                  </p>
                </div>

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

        {/* VISION & MISSION */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be recognized as the most trusted and innovative
                  NVOCC operator globally.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-card rounded-2xl p-8 shadow-lg border border-border"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-primary mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To deliver cost-effective, reliable, and transparent
                  LCL consolidation services worldwide.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                Our Core Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => {
                const Icon = value.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-border text-center"
                  >
                    <div className="w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <h3 className="font-bold text-primary text-lg mb-2">
                      {value.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 md:py-24 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-4xl font-bold text-white mb-4">
                Partner with Us Today
              </h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Join our network of trusted partners and experience the
                OGL difference.
              </p>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 bg-accent hover:bg-accent/90 text-white font-semibold rounded-lg transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
