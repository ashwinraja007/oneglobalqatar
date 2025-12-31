import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import { Truck, MapPin, Package, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Truck, title: 'Diverse Fleet', description: 'FTL, LTL, refrigerated & flatbed options' },
  { icon: MapPin, title: 'Pan-India Coverage', description: 'Nationwide distribution network' },
  { icon: Package, title: 'Safe Handling', description: 'Secure cargo management' },
  { icon: Clock, title: 'On-Time Delivery', description: 'Reliable scheduling and tracking' },
];

const RoadFreight = () => {
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
            src="/roadfreight.jpg"
            alt="Transportation & Distribution"
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
                  Transportation & Distribution
                </h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Reliable domestic and international transportation services
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CONTENT + SIDEBAR */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[280px_1fr] gap-8">

              {/* SIDEBAR - LEFT (Matches Ocean Freight) */}
              <ServiceSidebar />

              {/* MAIN CONTENT - RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                  Reliable Road Freight Solutions
                </h2>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    At <strong className="text-primary">One Global Logistics</strong>, we understand that efficient transportation and distribution are the backbone of a seamless supply chain. Our road freight services are designed to bridge the gap between production and consumption with speed and safety.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Our Fleet Capabilities:
                    </h3>
                    <ul className="space-y-2 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                        <span><strong className="text-primary">Full Truck Load (FTL):</strong> Dedicated vehicles for large, time-sensitive shipments.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                        <span><strong className="text-primary">Less than Truck Load (LTL):</strong> Cost-effective shipping for smaller cargo volumes.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                        <span><strong className="text-primary">Refrigerated Vehicles:</strong> Specialized transport for temperature-sensitive goods.</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                        <span><strong className="text-primary">Flatbed Trucks:</strong> Heavy-duty solutions for oversized or industrial cargo.</span>
                      </li>
                    </ul>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4 mt-8">
                    <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
                      <h4 className="font-bold text-primary text-sm mb-1">Last-Mile Delivery</h4>
                      <p className="text-sm">Ensuring timely deliveries to end customers and retail points.</p>
                    </div>
                    <div className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
                      <h4 className="font-bold text-primary text-sm mb-1">Cross-Docking</h4>
                      <p className="text-sm">Minimizing storage time and speeding up your distribution cycle.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES (Matches Ocean Freight Cards) */}
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

export default RoadFreight;
