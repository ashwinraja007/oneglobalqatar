import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import { Package, Settings, ClipboardCheck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { 
    icon: Package, 
    title: 'Complex Cargo', 
    description: 'Expert handling of oversized, heavy-lift, and out-of-gauge shipments.' 
  },
  { 
    icon: Settings, 
    title: 'Custom Solutions', 
    description: 'Tailored logistics plans designed for unique project requirements.' 
  },
  { 
    icon: ClipboardCheck, 
    title: 'End-to-End Management', 
    description: 'Complete project coordination from planning to final delivery.' 
  },
  { 
    icon: Shield, 
    title: 'Risk Mitigation', 
    description: 'Comprehensive insurance and safety protocols protecting your investment.' 
  },
];

const ProjectLogistics = () => {
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
            src="/Projectlogistics.jpg"
            alt="Project Logistics"
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
                  Project Logistics
                </h1>
                <p className="text-white/90 text-lg md:text-xl">
                  Specialized solutions for oversized and complex cargo movements
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
                {/* INTRO */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    Project Cargo Handling
                  </h2>
                  <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8" />
                  <p className="text-muted-foreground text-sm md:text-base">
                    At <strong className="text-primary">One Global Logistics</strong>, we specialize in handling complex project cargo that requires specialized expertise, equipment, and planning. Our project logistics services are designed for oversized, heavy-lift, and out-of-gauge cargo, serving industries such as oil & gas, construction, energy, mining, and manufacturing.
                  </p>
                </div>

                {/* CAPABILITIES */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Our Project Logistics Capabilities
                  </h3>
                  <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8" />
                  <div className="space-y-4 text-muted-foreground">
                    <p className="text-sm">
                      <strong className="text-primary">Heavy Lift Cargo:</strong> Specialized equipment and expertise for moving exceptionally heavy equipment and machinery.
                    </p>
                    <p className="text-sm">
                      <strong className="text-primary">Oversized Cargo:</strong> Handling of out-of-gauge shipments requiring special permits, route surveys, and custom solutions.
                    </p>
                    <p className="text-sm">
                      <strong className="text-primary">Break Bulk Cargo:</strong> Management of cargo that cannot be containerized and requires individual piece handling.
                    </p>
                    <p className="text-sm">
                      <strong className="text-primary">Multimodal Transportation:</strong> Seamless coordination across ocean, air, road, and rail to optimize routes.
                    </p>
                    <p className="text-sm">
                      <strong className="text-primary">On-site Services:</strong> Loading, unloading, positioning, and installation support at project sites.
                    </p>
                  </div>
                </div>

                {/* INDUSTRIES */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Industries We Serve
                  </h3>
                  <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8" />
                  <div className="grid md:grid-cols-2 gap-x-8 gap-y-4 text-muted-foreground">
                    <p className="text-sm"><strong className="text-primary">Oil & Gas:</strong> Offshore platforms, drilling equipment, pipelines, and refinery components.</p>
                    <p className="text-sm"><strong className="text-primary">Power & Energy:</strong> Wind turbines, transformers, generators, and renewable energy equipment.</p>
                    <p className="text-sm"><strong className="text-primary">Construction:</strong> Heavy machinery, cranes, steel structures, and prefabricated building components.</p>
                    <p className="text-sm"><strong className="text-primary">Mining:</strong> Mining equipment, conveyor systems, crushers, and processing machinery.</p>
                    <p className="text-sm"><strong className="text-primary">Manufacturing:</strong> Industrial machinery, production lines, and factory equipment.</p>
                    <p className="text-sm"><strong className="text-primary">Infrastructure:</strong> Bridge components, tunnel equipment, and railway infrastructure.</p>
                  </div>
                </div>

                {/* MANAGEMENT APPROACH */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Our Project Management Approach
                  </h3>
                  <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8" />
                  <div className="space-y-6 text-muted-foreground">
                    <div>
                      <p className="text-sm"><strong className="text-primary block mb-1">1. Planning & Engineering</strong> Detailed feasibility studies, route surveys, and custom engineering solutions for complex movements.</p>
                    </div>
                    <div>
                      <p className="text-sm"><strong className="text-primary block mb-1">2. Permits & Documentation</strong> Securing all necessary permits, licenses, and regulatory approvals for oversized cargo.</p>
                    </div>
                    <div>
                      <p className="text-sm"><strong className="text-primary block mb-1">3. Equipment Selection</strong> Choosing appropriate lifting, loading, and transportation equipment for safe cargo handling.</p>
                    </div>
                    <div>
                      <p className="text-sm"><strong className="text-primary block mb-1">4. Execution & Monitoring</strong> Real-time tracking and on-ground supervision ensuring safe and timely project completion.</p>
                    </div>
                  </div>
                </div>

                {/* SPECIALIZED EQUIPMENT */}
                <div className="text-center md:text-left">
                  <h3 className="text-xl font-bold text-primary mb-2">
                    Specialized Equipment
                  </h3>
                  <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8" />
                  <p className="text-sm text-muted-foreground mb-4">We have access to specialized equipment including:</p>
                  <ul className="grid md:grid-cols-2 gap-2 text-muted-foreground text-sm list-none pl-0">
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Heavy-lift cranes and mobile cranes</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Low-bed trailers and SPMTs</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> RoRo vessels and heavy-lift ships</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Flatracks and open-top containers</li>
                    <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-primary rounded-full" /> Jacking and skidding systems</li>
                  </ul>
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

export default ProjectLogistics;
