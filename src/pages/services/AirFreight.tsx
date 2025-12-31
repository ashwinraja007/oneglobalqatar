import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import { Clock, Plane, Package, Timer, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Clock,
    title: 'Time-Definite Deliveries',
    description: 'Flexible options including next-flight-out, express, and deferred services to meet critical timelines.',
  },
  {
    icon: Package,
    title: 'Cargo Consolidation',
    description: 'Efficient consolidation services to optimize costs and reduce handling time.',
  },
  {
    icon: Plane,
    title: 'Specialized Handling',
    description: 'Capabilities to manage high-value, sensitive, or perishable cargo with care and compliance.',
  },
  {
    icon: Timer,
    title: 'Real-Time Shipment Tracking',
    description: 'Full visibility and status updates through integrated tracking systems.',
  },
  {
    icon: FileCheck,
    title: 'Customs Clearance Support',
    description: 'End-to-end handling of documentation, customs brokerage, and compliance to streamline international transit.',
  },
];

const AirFreight = () => {
  const location = useLocation();
  const navigate = useNavigate();

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
            src="/airfreight.jpg"
            alt="Air Freight Services"
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
                  Air Freight Solutions
                </h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Tailored air freight solutions to meet your unique requirements
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
                  Comprehensive Air Freight Services
                </h2>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
                  <p>
                    At <strong className="text-primary">One Global Logistics</strong>, we offer a comprehensive range of air freight services designed to meet all your shipping needs. Our expert air freight teams provide seamless air import, export, and express options, all on a convenient door-to-door basis.
                  </p>

                  <p>
                    <strong className="text-primary">Global Reach with Strategic Hubs:</strong> With a strong presence in key transshipment hubs such as Singapore, Malaysia, Sri Lanka, and Dubai, we ensure reliable and timely air freight services worldwide.
                  </p>

                  <div className="mt-4">
                    <h3 className="text-xl font-bold text-primary mb-3">
                      Comprehensive Air Freight Solutions:
                    </h3>

                    <ul className="space-y-2 list-none pl-0">
                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                        <span>
                          <strong className="text-primary">Import & Export Shipments:</strong> Handling shipments to and from major international destinations.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                        <span>
                          <strong className="text-primary">Express Services:</strong> Fast-track options for time-sensitive deliveries.
                        </span>
                      </li>

                      <li className="flex items-start gap-3">
                        <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                        <span>
                          <strong className="text-primary">Consolidation Services:</strong> Combining smaller shipments to optimize costs and efficiency.
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
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
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

        {/* CTA */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
              Ready to Ship with Us?
            </h2>
            <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
              Contact our team today for tailored air freight solutions.
            </p>
            <Button
              onClick={() => navigate('/contact')}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3"
            >
              Get a Quote
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AirFreight;
