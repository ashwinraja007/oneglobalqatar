import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import { Warehouse, Thermometer, Package, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const storageTypes = [
  {
    title: 'General Cargo Storage',
    description: 'Secure and organized storage solutions for various types of goods.',
  },
  {
    title: 'Temperature-Controlled Storage',
    description: 'Specialized facilities for perishable and sensitive items.',
  },
  {
    title: 'Bonded Warehousing',
    description: 'Storage solutions that allow goods to be stored without the payment of customs duties until they are released.',
  },
];

const valueAddedServices = [
  { title: 'Inventory Management', description: 'Real-time tracking and management of stock levels.' },
  { title: 'Pick & Pack', description: 'Efficient order fulfilment services to meet customer demands.' },
  { title: 'Consolidation & Deconsolidation', description: 'Combining or separating shipments to optimize logistics.' },
  { title: 'Order Processing', description: 'Streamlined handling of orders from receipt to dispatch.' },
];

const features = [
  { icon: Warehouse, title: 'Secure Facilities', desc: '24/7 security and surveillance' },
  { icon: Thermometer, title: 'Temperature Control', desc: 'Climate-controlled storage' },
  { icon: Package, title: 'Flexible Space', desc: 'Scalable storage solutions' },
  { icon: ClipboardList, title: 'Real-Time Tracking', desc: 'Advanced inventory systems' },
];

const WarehousingPage = () => {
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
            src="/Warehousing.jpg" 
            alt="Warehousing Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Warehousing Solutions</h1>
                <p className="text-white/90 text-lg max-w-xl mb-6">
                  At One Global Logistics, we offer comprehensive warehousing services designed to streamline your supply chain operations
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

        {/* Storage Types Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                Tailored Warehousing Services
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            </div>

            <div className="space-y-4">
              {storageTypes.map((type, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg"
                >
                  <span className="font-bold text-primary">{type.title}:</span>{' '}
                  <span className="text-muted-foreground">{type.description}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Value Added Services */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                Value-Added Services
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            </div>

            <div className="space-y-4">
              {valueAddedServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <span className="font-bold text-primary">{service.title}:</span>{' '}
                  <span className="text-muted-foreground">{service.description}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-16">
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
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Ready to Optimize Your Storage?</h3>
            <p className="text-white/80 mb-6">Contact our team today for tailored warehousing solutions.</p>
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

export default WarehousingPage;
