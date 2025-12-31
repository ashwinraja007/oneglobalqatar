import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import { FileCheck, Shield, MessageCircle, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: FileCheck,
    title: 'Documentation Expertise',
    description: 'Our team ensures all your customs documentation is accurate, complete, and submitted correctly.',
  },
  {
    icon: Shield,
    title: 'Regulatory Compliance',
    description: 'Stay compliant with constantly evolving international trade regulations.',
  },
  {
    icon: MessageCircle,
    title: 'Expert Consultation',
    description: 'Our customs experts provide guidance on duty and tax implications.',
  },
  {
    icon: Globe,
    title: 'Global Network',
    description: 'Strong relationships with customs authorities worldwide for expedited clearance.',
  },
];

const CustomsClearance = () => {
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
            src="/Customsclearance.jpg"
            alt="Customs Clearance Services"
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
                  Customs Clearance Solutions
                </h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Expert solutions for seamless border crossings and trade compliance
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
                  Customs Clearance Solutions
                </h2>

                <div className="prose prose-lg max-w-none text-muted-foreground space-y-6">
                  <p>
                    Navigating the complexities of global trade is simplified with our expert customs clearance services. We ensure your shipments move smoothly across borders, handling all aspects of the process from accurate documentation and tariff classification to regulatory compliance and specialized cargo handling.
                  </p>
                  
                  <p>
                    Our experienced team stays abreast of evolving regulations, leverages advanced technology for expedited clearance, and maintains strong relationships with customs authorities worldwide. We prioritize transparency and open communication, providing real-time updates and peace of mind, allowing you to focus on your core business.
                  </p>

                  <div className="grid md:grid-cols-2 gap-8 mt-10">
                    {/* Import Clearance */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Import Clearance</h3>
                      <p className="text-sm mb-4">
                        Our import clearance services streamline the process of bringing goods into the country, ensuring compliance with local regulations and minimizing delays.
                      </p>
                      <ul className="space-y-2 list-none pl-0">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                          <span className="text-sm">Duty and tax calculation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                          <span className="text-sm">Entry preparation and filing</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                          <span className="text-sm">Tariff classification</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                          <span className="text-sm">Customs examination support</span>
                        </li>
                      </ul>
                    </div>

                    {/* Export Clearance */}
                    <div>
                      <h3 className="text-xl font-bold text-primary mb-3">Export Clearance</h3>
                      <p className="text-sm mb-4">
                        Our export clearance services ensure your goods leave the country efficiently, with all necessary documentation and compliance requirements met.
                      </p>
                      <ul className="space-y-2 list-none pl-0">
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                          <span className="text-sm">Export documentation preparation</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                          <span className="text-sm">License and permit management</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                          <span className="text-sm">Security filing and compliance</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-accent rounded-full mt-2"></span>
                          <span className="text-sm">Electronic export information filing</span>
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

export default CustomsClearance;
