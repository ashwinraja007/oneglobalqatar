import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import { Warehouse, Thermometer, Package, ClipboardList } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { 
    icon: Warehouse, 
    title: 'Secure Facilities', 
    description: '24/7 security and surveillance for all stored goods.' 
  },
  { 
    icon: Thermometer, 
    title: 'Temperature Control', 
    description: 'Climate-controlled storage for sensitive items.' 
  },
  { 
    icon: Package, 
    title: 'Flexible Space', 
    description: 'Scalable storage solutions that grow with your business.' 
  },
  { 
    icon: ClipboardList, 
    title: 'Real-Time Tracking', 
    description: 'Advanced inventory systems for complete visibility.' 
  },
];

const WarehousingPage = () => {
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
            src="/Warehousing.jpg"
            alt="Warehousing Solutions"
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
                  Warehousing Solutions
                </h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Comprehensive warehousing services designed to streamline your supply chain
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
                  Tailored Warehousing Services
                </h2>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    At <strong className="text-primary">One Global Logistics</strong>, we provide strategically located warehousing facilities that serve as critical hubs for your distribution network. Our solutions are designed to provide maximum flexibility and security for your inventory.
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mt-10">
                    
                    {/* Tailored Warehousing Services Box */}
                    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                      <h3 className="text-xl font-bold text-primary mb-4">Tailored Warehousing Services</h3>
                      <ul className="space-y-4 list-none pl-0">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <div className="text-sm">
                            <strong className="text-primary block">General Cargo Storage:</strong>
                            Secure and organized storage solutions for various types of goods.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <div className="text-sm">
                            <strong className="text-primary block">Temperature-Controlled Storage:</strong>
                            Specialized facilities for perishable and sensitive items.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <div className="text-sm">
                            <strong className="text-primary block">Bonded Warehousing:</strong>
                            Storage solutions that allow goods to be stored without the payment of customs duties until they are released.
                          </div>
                        </li>
                      </ul>
                    </div>

                    {/* Value-Added Services Box */}
                    <div className="bg-card rounded-xl p-6 shadow-sm border border-border">
                      <h3 className="text-xl font-bold text-primary mb-4">Value-Added Services</h3>
                      <ul className="space-y-4 list-none pl-0">
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <div className="text-sm">
                            <strong className="text-primary block">Inventory Management:</strong>
                            Real-time tracking and management of stock levels.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <div className="text-sm">
                            <strong className="text-primary block">Pick & Pack:</strong>
                            Efficient order fulfilment services to meet customer demands.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <div className="text-sm">
                            <strong className="text-primary block">Consolidation & Deconsolidation:</strong>
                            Combining or separating shipments to optimize logistics.
                          </div>
                        </li>
                        <li className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
                          <div className="text-sm">
                            <strong className="text-primary block">Order Processing:</strong>
                            Streamlined handling of orders from receipt to dispatch.
                          </div>
                        </li>
                      </ul>
                    </div>

                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID */}
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

export default WarehousingPage;
