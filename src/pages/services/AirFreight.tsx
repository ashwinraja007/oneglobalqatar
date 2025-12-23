import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Clock, Plane, Globe, Timer, FileCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Clock,
    title: 'Time-Definite Deliveries',
    description: 'Flexible options including next-flight-out, express, and deferred services to meet critical timelines.',
  },
  {
    icon: Plane,
    title: 'Cargo Consolidation',
    description: 'Efficient consolidation services to optimize costs and reduce handling time.',
  },
  {
    icon: Globe,
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

const solutions = [
  {
    title: 'Import & Export Shipments',
    description: 'Handling shipments to and from major international destinations.',
  },
  {
    title: 'Express Services',
    description: 'Fast-track options for time-sensitive deliveries.',
  },
  {
    title: 'Consolidation Services',
    description: 'Combining smaller shipments to optimize costs and efficiency.',
  },
];

const AirFreight = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img 
            src="/airfreight.jpg" 
            alt="Air Freight Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Air Freight</h1>
                <p className="text-white/90 text-lg max-w-xl">
                  Fast and reliable air cargo solutions for time-sensitive shipments
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                Comprehensive Air Freight Services
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
              <p>
                At <strong className="text-primary">One Global Logistics</strong>, we offer a comprehensive range of air freight services designed to meet all your shipping needs. Our expert air freight teams provide seamless air import, export, and express options, all on a convenient door-to-door basis.
              </p>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Global Reach with Strategic Hubs:</h3>
              <p>
                With a strong presence in key transshipment hubs such as Singapore, Malaysia, Sri Lanka, and Dubai, One Global Logistics ensures direct weekly sailings to all major destinations worldwide. This strategic network allows us to offer reliable and timely air freight services to and from India.
              </p>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Comprehensive Air Freight Solutions:</h3>
              <ul className="space-y-3">
                {solutions.map((solution, index) => (
                  <li key={index}>
                    <strong className="text-primary">{solution.title}:</strong> {solution.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <h3 className="font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
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

export default AirFreight;
