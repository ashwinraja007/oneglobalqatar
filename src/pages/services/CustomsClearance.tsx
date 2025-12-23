import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FileCheck, Shield, MessageCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const mainServices = [
  {
    icon: FileCheck,
    title: 'Documentation Expertise',
    description: 'Our team ensures all your customs documentation is accurate, complete, and submitted correctly, preventing delays and ensuring compliance with international regulations.',
    color: 'bg-blue-500',
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Stay compliant with constantly evolving international trade regulations. We keep up-to-date with changes to ensure your shipments meet all legal requirements.',
    color: 'bg-green-500',
  },
  {
    icon: MessageCircle,
    title: 'Expert Consultation',
    description: 'Our customs experts provide guidance on duty and tax implications, helping you make informed decisions and optimize your international shipping strategy.',
    color: 'bg-orange-500',
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
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Customs Clearance</h1>
                <p className="text-white/90 text-lg max-w-xl">
                  Expert customs brokerage and compliance solutions
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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {mainServices.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                  >
                    <div className={`${service.color} h-32 flex items-center justify-center`}>
                      <Icon className="w-12 h-12 text-white" />
                    </div>
                    <div className="p-6">
                      <h3 className="font-bold text-primary text-lg mb-3">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Import/Export Services */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Import Clearance */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 shadow-md"
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
                className="bg-white rounded-xl p-6 shadow-md"
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
      </main>
      <Footer />
    </div>
  );
};

export default CustomsClearance;
