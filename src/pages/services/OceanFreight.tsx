import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import { Ship, Container, Package, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Ship,
    title: 'Global Ocean Network',
    description: 'Strong carrier partnerships ensuring reliable global ocean freight services.',
  },
  {
    icon: Container,
    title: 'FCL & LCL Options',
    description: 'Flexible full container and consolidation shipping solutions.',
  },
  {
    icon: Package,
    title: 'Breakbulk Cargo',
    description: 'Specialized handling for oversized and heavy cargo.',
  },
  {
    icon: Globe,
    title: 'Door-to-Door Services',
    description: 'Complete logistics coverage from origin to destination.',
  },
];

const OceanFreight = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main>
        {/* HERO SECTION */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img
            src="/seafreight.jpg"
            alt="Ocean Freight Services"
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
                  Ocean Freight Solutions
                </h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Cost-effective and reliable ocean freight services worldwide
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTENT + SIDEBAR */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8">

              {/* SIDEBAR - LEFT */}
              <ServiceSidebar />

              {/* MAIN CONTENT - RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Comprehensive Ocean Freight Services
                </h2>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    At <strong className="text-primary">One Global Logistics</strong>, we provide
                    comprehensive ocean freight solutions designed to meet diverse shipping needs.
                    Whether FCL or LCL, our services ensure efficiency and reliability.
                  </p>

                  <p>
                    <strong className="text-primary">Worldwide Connectivity:</strong> With access to
                    major ports and strategic global hubs, we ensure seamless ocean freight
                    transportation across continents.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Our Ocean Freight Capabilities:
                    </h3>

                    <ul className="space-y-2 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                        <span>
                          <strong className="text-primary">Full Container Load (FCL):</strong>
                          Dedicated container solutions for large cargo volumes.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                        <span>
                          <strong className="text-primary">Less than Container Load (LCL):</strong>
                          Cost-effective consolidation for smaller shipments.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                        <span>
                          <strong className="text-primary">Breakbulk & Project Cargo:</strong>
                          Handling oversized and specialized cargo.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card rounded-xl p-5 shadow-md border border-border"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-3">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 text-sm">
                      {feature.title}
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default OceanFreight;
