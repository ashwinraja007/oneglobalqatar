import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Target, Eye } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO */}
        <section className="relative h-[400px] md:h-[500px] overflow-hidden">
          <img
            src="/abouthero.jpg"
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
        <section className="py-16 bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

              {/* IMAGE */}
              <motion.div
                initial={{ x: -80, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src="/About01.png"
                    alt="One Global Logistics Operations"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
              </motion.div>

              {/* TEXT */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Drive Your Business <br />
                  Forward with <span className="text-accent">OGL</span>
                </h2>

                <p className="text-muted-foreground leading-relaxed mb-8">
                  One Global Logistics services W.L.L is a Qatar based global NVOCC
                  (Non-vessel owned common carrier) operator providing LCL
                  consolidation services worldwide markets. We at OGL has a well
                  experienced and established team with relevant experience in
                  their own dedicated trade lanes supports our customers with all
                  their special requirements with complete dedication and
                  transparency. Our commitment to honest, transparent business
                  practice and pricing, backed by a network of experienced and
                  trusted agents, from around the world, makes us one of the
                  fast-growing consolidators based at Qatar. We are well
                  positioned to manage your LCL business with full attention. We
                  aimed at providing the secured end to end LCL services to the
                  Freight Forwarding /Logistics Companies in Qatar, whereas we
                  ensure to maintain the trust and not entertain direct customer
                  business.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {features.map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      <span className="font-medium">{item}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* VISION & MISSION */}
<section className="py-16 bg-[#0B1C3D]">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8">

      {/* Vision */}
      <div className="bg-[#0B1C3D] rounded-2xl p-8 shadow-lg border border-white/10">
        <Eye className="w-10 h-10 text-white mb-4" />
        <h3 className="text-2xl font-bold mb-4 text-white">
          Our Vision
        </h3>
        <p className="text-white/90">
          OGL to be the leading global logistics solution provider through
          our most advanced systems combined with well experienced
          logistics professionals.
        </p>
      </div>

      {/* Mission */}
      <div className="bg-[#0B1C3D] rounded-2xl p-8 shadow-lg border border-white/10">
        <Target className="w-10 h-10 text-white mb-4" />
        <h3 className="text-2xl font-bold mb-4 text-white">
          Our Mission
        </h3>
        <p className="text-white/90">
          OGL to be Forwarders first choice for:
        </p>
        <p className="text-white/90">FCL, LCL, Air Freight</p>
        <p className="text-white/90">Freight Management Services</p>
      </div>

    </div>
  </div>
</section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;
