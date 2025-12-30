import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import { Truck, MapPin, Package, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

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

const features = [
  { icon: Truck, title: 'Diverse Fleet', desc: 'FTL, LTL, refrigerated & flatbed options' },
  { icon: MapPin, title: 'Pan-India Coverage', desc: 'Nationwide distribution network' },
  { icon: Package, title: 'Safe Handling', desc: 'Secure cargo management' },
  { icon: Clock, title: 'On-Time Delivery', desc: 'Reliable scheduling and tracking' },
];

const RoadFreight = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
                <p className="text-white/90 text-lg max-w-xl mb-6">
                  Reliable domestic and international transportation services
                </p>
                <Button 
                  onClick={() => navigate('/#contact')}
                  className="bg-accent hover:bg-accent/90 text-white"
                >
                  Get a Quote
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section with Sidebar */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                  TRANSPORTATION & DISTRIBUTION
                </h2>
                <div className="w-20 h-1 bg-accent mb-8" />

                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p>
                    At <strong className="text-primary">One Global Logistics</strong>, we understand that efficient transportation and distribution are the backbone of a seamless supply chain.
                  </p>
                </div>

                {/* Fleet Types */}
                <div className="bg-accent/5 rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-bold text-primary mb-4">Our Fleet</h3>
                  <ul className="space-y-3">
                    {fleetTypes.map((type, index) => (
                      <li key={index} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                        {type}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Distribution Services */}
                <div className="space-y-4">
                  {distributionServices.map((service, index) => (
                    <div key={index} className="bg-accent/5 border-l-4 border-accent p-4 rounded-r-lg">
                      <span className="font-bold text-primary">{service.title}:</span>{' '}
                      <span className="text-muted-foreground">{service.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <ServiceSidebar image="/roadfreight.jpg" imageAlt="Road Freight Service" />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => {
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

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Transport Your Cargo?</h3>
            <p className="text-white/80 mb-6">Contact our team today for reliable transportation solutions.</p>
            <Button 
              onClick={() => navigate('/#contact')}
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary"
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

export default RoadFreight;
