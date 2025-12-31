import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceBreadcrumb from '@/components/ServiceBreadcrumb';
import ServiceSidebar from '@/components/ServiceSidebar';
import { Package, Settings, ClipboardCheck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const capabilities = [
  { title: 'Heavy Lift Cargo', description: 'Specialized equipment for moving exceptionally heavy equipment.' },
  { title: 'Oversized Cargo', description: 'Handling of out-of-gauge shipments requiring special permits.' },
  { title: 'Break Bulk Cargo', description: 'Management of cargo that cannot be containerized.' },
  { title: 'Multimodal Transportation', description: 'Seamless coordination across ocean, air, road, and rail.' },
  { title: 'On-site Services', description: 'Loading, unloading, positioning, and installation support.' },
];

const industries = [
  { title: 'Oil & Gas', description: 'Offshore platforms, drilling equipment, pipelines.' },
  { title: 'Power & Energy', description: 'Wind turbines, transformers, generators.' },
  { title: 'Construction', description: 'Heavy machinery, cranes, steel structures.' },
  { title: 'Mining', description: 'Mining equipment, conveyor systems, crushers.' },
  { title: 'Manufacturing', description: 'Industrial machinery, production lines.' },
  { title: 'Infrastructure', description: 'Bridge components, tunnel equipment.' },
];

const processSteps = [
  { num: '1', title: 'Planning & Engineering', description: 'Detailed feasibility studies and route surveys.' },
  { num: '2', title: 'Permits & Documentation', description: 'Securing all necessary permits and approvals.' },
  { num: '3', title: 'Equipment Selection', description: 'Choosing appropriate lifting and transportation equipment.' },
  { num: '4', title: 'Execution & Monitoring', description: 'Real-time tracking and on-ground supervision.' },
];

const features = [
  { icon: Package, title: 'Complex Cargo', description: 'Expert handling of oversized shipments.' },
  { icon: Settings, title: 'Custom Solutions', description: 'Tailored logistics plans.' },
  { icon: ClipboardCheck, title: 'End-to-End Management', description: 'Complete project coordination.' },
  { icon: Shield, title: 'Risk Mitigation', description: 'Comprehensive insurance and safety.' },
];

const ProjectLogistics = () => {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Breadcrumb */}
        <ServiceBreadcrumb serviceName="Project Logistics" />

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
                <p className="text-white/90 text-lg max-w-xl">
                  Specialized solutions for oversized and complex cargo movements
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Intro Section with Sidebar */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-[1fr_280px] gap-8">
              {/* Main Content */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">
                  Specialized Project Cargo Handling
                </h2>
                <div className="w-16 h-1 bg-accent mb-6" />

                <div className="prose prose-lg max-w-none text-muted-foreground mb-8">
                  <p>
                    At <strong className="text-primary">One Global Logistics</strong>, we specialize in handling complex project cargo that requires specialized expertise, equipment, and planning.
                  </p>
                </div>

                {/* Capabilities */}
                <div className="bg-accent/5 rounded-xl p-5">
                  <h3 className="text-lg font-bold text-primary mb-3">Our Project Logistics Capabilities</h3>
                  <ul className="space-y-2">
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
                          <span className="font-semibold text-primary text-sm">{cap.title}:</span>{' '}
                          <span className="text-muted-foreground text-sm">{cap.description}</span>
                        </div>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Sidebar */}
              <ServiceSidebar />
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-12 bg-muted/30">
          <div className="container mx-auto px-4">
            <h3 className="text-xl font-bold text-primary text-center mb-6">Industries We Serve</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg p-4 shadow-sm border border-border"
                >
                  <h4 className="font-bold text-primary mb-1 text-sm">{industry.title}</h4>
                  <p className="text-xs text-muted-foreground">{industry.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-12">
          <div className="container mx-auto px-4 max-w-4xl">
            <h3 className="text-xl font-bold text-primary text-center mb-6">Our Process</h3>
            <div className="space-y-3">
              {processSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-accent/5 border-l-4 border-primary p-4 rounded-r-lg"
                >
                  <h4 className="font-bold text-primary text-sm">{step.num}. {step.title}</h4>
                  <p className="text-muted-foreground text-xs mt-1">{step.description}</p>
                </motion.div>
              ))}
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
                    <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-3 mx-auto">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-bold text-primary mb-2 text-sm">{feature.title}</h3>
                    <p className="text-xs text-muted-foreground">{feature.description}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Have a Complex Project?</h3>
            <p className="text-white/80 mb-6">Let our experts design a custom logistics solution for your project cargo.</p>
            <Button 
              onClick={() => navigate('/contact')}
              className="bg-accent hover:bg-accent/90 text-white px-8 py-3"
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