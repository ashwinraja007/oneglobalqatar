import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Package, Settings, ClipboardCheck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const capabilities = [
  { title: 'Heavy Lift Cargo', description: 'Specialized equipment and expertise for moving exceptionally heavy equipment and machinery.' },
  { title: 'Oversized Cargo', description: 'Handling of out-of-gauge shipments requiring special permits, route surveys, and custom solutions.' },
  { title: 'Break Bulk Cargo', description: 'Management of cargo that cannot be containerized and requires individual piece handling.' },
  { title: 'Multimodal Transportation', description: 'Seamless coordination across ocean, air, road, and rail to optimize routes.' },
  { title: 'On-site Services', description: 'Loading, unloading, positioning, and installation support at project sites.' },
];

const industries = [
  { title: 'Oil & Gas', description: 'Offshore platforms, drilling equipment, pipelines, and refinery components.' },
  { title: 'Power & Energy', description: 'Wind turbines, transformers, generators, and renewable energy equipment.' },
  { title: 'Construction', description: 'Heavy machinery, cranes, steel structures, and prefabricated building components.' },
  { title: 'Mining', description: 'Mining equipment, conveyor systems, crushers, and processing machinery.' },
  { title: 'Manufacturing', description: 'Industrial machinery, production lines, and factory equipment.' },
  { title: 'Infrastructure', description: 'Bridge components, tunnel equipment, and railway infrastructure.' },
];

const processSteps = [
  { num: '1', title: 'Planning & Engineering', description: 'Detailed feasibility studies, route surveys, and custom engineering solutions for complex movements.' },
  { num: '2', title: 'Permits & Documentation', description: 'Securing all necessary permits, licenses, and regulatory approvals for oversized cargo.' },
  { num: '3', title: 'Equipment Selection', description: 'Choosing appropriate lifting, loading, and transportation equipment for safe cargo handling.' },
  { num: '4', title: 'Execution & Monitoring', description: 'Real-time tracking and on-ground supervision ensuring safe and timely project completion.' },
];

const equipment = [
  'Heavy-lift cranes and mobile cranes',
  'Low-bed trailers and SPMTs (Self-Propelled Modular Transporters)',
  'RoRo vessels and heavy-lift ships',
  'Flatracks, open-top containers, and break bulk vessels',
  'Jacking and skidding systems',
];

const features = [
  { icon: Package, title: 'Complex Cargo', description: 'Expert handling of oversized, heavy-lift, and out-of-gauge shipments.' },
  { icon: Settings, title: 'Custom Solutions', description: 'Tailored logistics plans designed for unique project requirements.' },
  { icon: ClipboardCheck, title: 'End-to-End Management', description: 'Complete project coordination from planning to final delivery.' },
  { icon: Shield, title: 'Risk Mitigation', description: 'Comprehensive insurance and safety protocols protecting your investment.' },
];

const ProjectLogistics = () => {
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
            src="/Projectlogistics.jpg" 
            alt="Project Logistics" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40 flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">Project Logistics</h1>
                <p className="text-white/90 text-lg max-w-xl mb-6">
                  Specialized solutions for oversized and complex cargo movements
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

        {/* Intro Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
                Specialized Project Cargo Handling
              </h2>
              <div className="w-20 h-1 bg-accent mx-auto mb-8" />
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground mb-12">
              <p>
                At <strong className="text-primary">One Global Logistics</strong>, we specialize in handling complex project cargo that requires specialized expertise, equipment, and planning. Our project logistics services are designed for oversized, heavy-lift, and out-of-gauge cargo, serving industries such as oil & gas, construction, energy, mining, and manufacturing.
              </p>
            </div>

            {/* Capabilities */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <h3 className="text-xl font-bold text-primary mb-4">Our Project Logistics Capabilities</h3>
              <ul className="space-y-3">
                {capabilities.map((cap, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-primary">{cap.title}:</span>{' '}
                      <span className="text-muted-foreground">{cap.description}</span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Industries We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-lg p-4 shadow-sm"
                >
                  <h4 className="font-bold text-primary mb-2">{industry.title}</h4>
                  <p className="text-sm text-muted-foreground">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-16">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-2xl font-bold text-primary text-center mb-8">Our Process</h3>
            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg"
                >
                  <h4 className="font-bold text-primary">{step.num}. {step.title}</h4>
                  <p className="text-muted-foreground text-sm mt-1">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Specialized Equipment */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-bold text-primary mb-4">Specialized Equipment</h3>
              <p className="text-muted-foreground mb-4">We have access to specialized equipment including:</p>
              <ul className="space-y-2">
                {equipment.map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
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
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Have a Complex Project?</h3>
            <p className="text-white/80 mb-6">Let our experts design a custom logistics solution for your project cargo.</p>
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

export default ProjectLogistics;
