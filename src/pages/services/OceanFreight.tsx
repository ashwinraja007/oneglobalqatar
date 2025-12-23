import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Ship, Container, Package, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Full Container Load (FCL)',
    description: 'For businesses with substantial cargo volumes, our FCL services offer dedicated container space, ensuring direct and secure transportation from port to port. This option is ideal for shipments that require exclusive container space, providing flexibility and control over delivery schedules.',
  },
  {
    title: 'Less than Container Load (LCL) Consolidation',
    description: 'Recognizing the need for cost-effective solutions for smaller shipments, we offer LCL consolidation services. This service allows multiple shippers to share container space, reducing costs while maintaining the safety and integrity of each shipment. Our strategic presence in key transshipment hubs ensures timely and efficient consolidation services.',
  },
];

const OceanFreight = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative h-[300px] md:h-[400px] overflow-hidden">
          <img 
            src="/seafreight.jpg" 
            alt="Ocean Freight Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Ocean Freight</h1>
                <p className="text-white/90 text-lg max-w-xl">
                  Reliable and cost-effective sea cargo solutions worldwide
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
                Reliable & Tailored Ocean Freight Services
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
              <p>
                At <strong className="text-primary">One Global Logistics</strong>, we specialize in delivering comprehensive ocean freight solutions tailored to meet the diverse requirements of our clients. Whether you're shipping bulk cargo or small consignments, our services are built for <strong>efficiency, reliability, and cost-effectiveness</strong>.
              </p>
            </div>

            {/* Service Cards */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-blue-50 border-l-4 border-primary p-6 rounded-r-lg"
                >
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
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
                { icon: Ship, title: 'Global Network', desc: 'Extensive carrier partnerships worldwide' },
                { icon: Container, title: 'FCL & LCL Options', desc: 'Flexible container solutions' },
                { icon: Package, title: 'Breakbulk Cargo', desc: 'Specialized heavy cargo handling' },
                { icon: Globe, title: 'Door-to-Door', desc: 'Complete logistics coverage' },
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

export default OceanFreight;
