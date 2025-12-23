import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Truck, MapPin, Package, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const fleetTypes = [
  'Full Truck Load (FTL)',
  'Less than Truck Load (LTL)',
  'Refrigerated Vehicles (for temperature-sensitive goods)',
  'Flatbed Trucks (for oversized cargo)',
];

const distributionServices = [
  { title: 'Last-Mile Delivery', description: 'Ensuring timely deliveries to end customers.' },
  { title: 'Cross-Docking', description: 'Minimizing storage time and speeding up the distribution process.' },
  { title: 'Milk Run Services', description: 'Efficient collection and delivery from multiple suppliers to a single destination.' },
];

const RoadFreight = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img 
            src="/roadfreight.jpg" 
            alt="Road Freight Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Transportation & Distribution</h1>
                <p className="text-white/90 text-lg max-w-xl">
                  Efficient road freight solutions for seamless supply chain operations
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
                TRANSPORTATION & DISTRIBUTION
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
              <p>
                At <strong className="text-primary">One Global Logistics</strong>, we understand that efficient transportation and distribution are the backbone of a seamless supply chain. Our dedicated fleet and robust infrastructure ensure that your goods reach their destination on time, every time.
              </p>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Domestic Distribution Network</h3>
              <p>
                With a strategically located network of offices in Mumbai, New Delhi, Kolkata, Bangalore, and Chennai, One Global Logistics offers comprehensive domestic transportation solutions. Our fleet is equipped to handle various cargo types, ensuring safe and timely deliveries across the country.
              </p>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Fleet & Operational Excellence</h3>
              <p>Our fleet comprises a diverse range of vehicles, including:</p>
              <ul className="space-y-2">
                {fleetTypes.map((type, index) => (
                  <li key={index} className="text-muted-foreground">{type}</li>
                ))}
              </ul>
              <p className="mt-4">
                Each vehicle is maintained to the highest standards, ensuring reliability and safety during transit.
              </p>

              <h3 className="text-xl font-bold text-primary mt-8 mb-4">Distribution Services</h3>
              <p>We offer a range of distribution services tailored to meet the specific needs of our clients:</p>
            </div>

            {/* Distribution Services */}
            <div className="space-y-4">
              {distributionServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 bg-muted/30 rounded-lg"
                >
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-bold text-primary">{service.title}:</span>{' '}
                    <span className="text-muted-foreground">{service.description}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: Truck, title: 'Diverse Fleet', desc: 'FTL, LTL, refrigerated & flatbed options' },
                { icon: MapPin, title: 'Pan-India Coverage', desc: 'Nationwide distribution network' },
                { icon: Package, title: 'Safe Handling', desc: 'Secure cargo management' },
                { icon: Clock, title: 'On-Time Delivery', desc: 'Reliable scheduling and tracking' },
              ].map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow text-center"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
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
