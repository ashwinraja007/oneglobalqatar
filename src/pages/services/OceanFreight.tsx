import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import ServiceBreadcrumb from '@/components/ServiceBreadcrumb';
import { Ship, Container, Package, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Full Container Load (FCL)',
    description: 'For businesses with substantial cargo volumes, our FCL services offer dedicated container space, ensuring direct and secure transportation from port to port.',
  },
  {
    title: 'Less than Container Load (LCL) Consolidation',
    description: 'Recognizing the need for cost-effective solutions for smaller shipments, we offer LCL consolidation services. This service allows multiple shippers to share container space.',
  },
];

const features = [
  { icon: Ship, title: 'Global Network', desc: 'Extensive carrier partnerships worldwide' },
  { icon: Container, title: 'FCL & LCL Options', desc: 'Flexible container solutions' },
  { icon: Package, title: 'Breakbulk Cargo', desc: 'Specialized heavy cargo handling' },
  { icon: Globe, title: 'Door-to-Door', desc: 'Complete logistics coverage' },
];

const OceanFreight = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Breadcrumb */}
        <ServiceBreadcrumb serviceName="Ocean Freight" />

        {/* Hero Section */}
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
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Ocean Freight Solutions</h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Connecting you globally with comprehensive ocean freight services
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Content Section with Sidebar */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_280px] gap-8">
              {/* Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
                  Reliable & Tailored Ocean Freight Services
                </h2>
                <div className="w-16 h-1 bg-accent mb-6" />

                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p>
                    At <strong className="text-primary">One Global Logistics</strong>, we specialize in delivering comprehensive ocean freight solutions tailored to meet the diverse requirements of our clients. Whether you're shipping bulk cargo or small consignments, our services are built for <strong>efficiency, reliability, and cost-effectiveness</strong>.
                  </p>
                </div>

                {/* Service Cards */}
                <div className="space-y-4">
                  {services.map((service, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-accent/5 border-l-4 border-accent p-5 rounded-r-lg"
                    >
                      <h3 className="text-lg font-bold text-primary mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Sidebar */}
              <ServiceSidebar />
            </div>
          </div>
        </section>

        {/* Features Grid */}
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
                    className="bg-card rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow text-center border border-border"
                  >
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Icon className="w-5 h-5 text-accent" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Ready to Ship Your Cargo?
              </h2>
              <p className="text-white/80 text-lg mb-6 max-w-2xl mx-auto">
                Contact our team today for tailored ocean freight solutions.
              </p>
              <Button 
                onClick={() => navigate('/contact')}
                className="bg-accent hover:bg-accent/90 text-white px-8 py-3"
              >
                Get a Quote
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default OceanFreight;