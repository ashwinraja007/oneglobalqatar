import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import { FileCheck, Shield, MessageCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const mainServices = [
  {
    icon: FileCheck,
    title: 'Documentation Expertise',
    description: 'Our team ensures all your customs documentation is accurate, complete, and submitted correctly, preventing delays and ensuring compliance with international regulations.',
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Stay compliant with constantly evolving international trade regulations. We keep up-to-date with changes to ensure your shipments meet all legal requirements.',
  },
  {
    icon: MessageCircle,
    title: 'Expert Consultation',
    description: 'Our customs experts provide guidance on duty and tax implications, helping you make informed decisions and optimize your international shipping strategy.',
  },
];

const importServices = [
  'Duty and tax calculation',
  'Entry preparation and filing',
  'Tariff classification',
  'Customs examination support',
];

const exportServices = [
  'Export documentation preparation',
  'License and permit management',
  'Security filing and compliance',
  'Electronic export information filing',
];

const CustomsClearance = () => {
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
            src="/Customsclearance.jpg" 
            alt="Customs Clearance Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Customs Clearance Services</h1>
                <p className="text-white/90 text-lg max-w-xl mb-6">
                  Expert solutions for seamless border crossings
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

        {/* Content Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                Seamless Customs Clearance Solutions
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
              <p>
                Navigating the complexities of global trade is simplified with our expert customs clearance services. We ensure your shipments move smoothly across borders, handling all aspects of the process from accurate documentation and tariff classification to regulatory compliance and specialized cargo handling.
              </p>
              <p className="mt-4">
                Our experienced team stays abreast of evolving regulations, leverages advanced technology for expedited clearance, and maintains strong relationships with customs authorities worldwide. We prioritize transparency and open communication, providing real-time updates and peace of mind, allowing you to focus on your core business.
              </p>
            </div>
          </div>
        </section>

        {/* Main Services Cards */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {mainServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary text-lg mb-3">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Import/Export Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Import Clearance */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Import Clearance</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our import clearance services streamline the process of bringing goods into the country, ensuring compliance with local regulations and minimizing delays.
                </p>
                <ul className="space-y-2">
                  {importServices.map((service, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Export Clearance */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-blue-50 rounded-xl p-6"
              >
                <div className="flex items-center gap-3 mb-4">
                  <Globe className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-bold text-primary">Export Clearance</h3>
                </div>
                <p className="text-muted-foreground mb-4">
                  Our export clearance services ensure your goods leave the country efficiently, with all necessary documentation and compliance requirements met.
                </p>
                <ul className="space-y-2">
                  {exportServices.map((service, index) => (
                    <li key={index} className="flex items-center gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      {service}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Need Customs Clearance Assistance?</h3>
            <p className="text-white/80 mb-6">Contact our team today for expert customs solutions.</p>
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

export default CustomsClearance;
