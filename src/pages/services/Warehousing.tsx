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
            <div className="grid lg:grid-cols-[280px_1fr] gap-12">

              {/* SIDEBAR - LEFT */}
              <ServiceSidebar />

              {/* MAIN CONTENT - RIGHT */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                {/* SECTION 1: TAILORED SERVICES */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    Tailored Warehousing Services
                  </h2>
                  {/* CHANGED TO BLUE UNDERLINE */}
                  <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8" />
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-sm md:text-base">
                      <strong className="text-primary">General Cargo Storage:</strong> Secure and organized storage solutions for various types of goods.
                    </p>
                    <p className="text-sm md:text-base">
                      <strong className="text-primary">Temperature-Controlled Storage:</strong> Specialized facilities for perishable and sensitive items.
                    </p>
                    <p className="text-sm md:text-base">
                      <strong className="text-primary">Bonded Warehousing:</strong> Storage solutions that allow goods to be stored without the payment of customs duties until they are released.
                    </p>
                  </div>
                </div>

                {/* SECTION 2: VALUE-ADDED SERVICES */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    Value-Added Services
                  </h2>
                  {/* CHANGED TO BLUE UNDERLINE */}
                  <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8" />
                  
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-sm md:text-base">
                      <strong className="text-primary">Inventory Management:</strong> Real-time tracking and management of stock levels.
                    </p>
                    <p className="text-sm md:text-base">
                      <strong className="text-primary">Pick & Pack:</strong> Efficient order fulfilment services to meet customer demands.
                    </p>
                    <p className="text-sm md:text-base">
                      <strong className="text-primary">Consolidation & Deconsolidation:</strong> Combining or separating shipments to optimize logistics.
                    </p>
                    <p className="text-sm md:text-base">
                      <strong className="text-primary">Order Processing:</strong> Streamlined handling of orders from receipt to dispatch.
                    </p>
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
