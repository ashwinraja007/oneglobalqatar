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
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Ocean Freight Services
                </h2>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    At <strong className="text-primary">One Global Logistics</strong>, we specialize in delivering comprehensive ocean freight solutions tailored to meet the diverse requirements of our clients. Whether you’re shipping bulk cargo or small consignments, our services are built for <span className="text-primary font-medium">efficiency, reliability, and cost-effectiveness.</span>
                  </p>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Full Container Load (FCL)
                    </h3>
                    <p>
                      For businesses with substantial cargo volumes, our FCL services offer dedicated container space, ensuring direct and secure transportation from port to port. This option is ideal for shipments that require exclusive container space, providing flexibility and control over delivery schedules.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-primary mb-2">
                      Less than Container Load (LCL) Consolidation
                    </h3>
                    <p>
                      Recognizing the need for cost-effective solutions for smaller shipments, we offer LCL consolidation services. This service allows multiple shippers to share container space, reducing costs while maintaining the safety and integrity of each shipment. Our strategic presence in key transshipment hubs ensures timely and efficient consolidation services.
                    </p>
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
