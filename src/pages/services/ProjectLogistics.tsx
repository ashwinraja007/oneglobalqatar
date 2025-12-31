import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServiceSidebar from '@/components/ServiceSidebar';
import { Package, Settings, ClipboardCheck, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  { icon: Package, title: 'Complex Cargo', description: 'Expert handling of oversized, heavy-lift, and out-of-gauge shipments.' },
  { icon: Settings, title: 'Custom Solutions', description: 'Tailored logistics plans designed for unique project requirements.' },
  { icon: ClipboardCheck, title: 'End-to-End Management', description: 'Complete project coordination from planning to final delivery.' },
  { icon: Shield, title: 'Risk Mitigation', description: 'Comprehensive insurance and safety protocols protecting your investment.' },
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

        {/* HERO SECTION — Same as Warehousing */}
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

              <ServiceSidebar />

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >

                {/* SECTION 1 */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    Specialized Project Cargo Handling
                  </h2>
                  <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8" />

                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                    At <strong className="text-primary">One Global Logistics</strong>, we handle oversized, heavy-lift and complex project cargo with expert planning and precision execution across multiple industries.
                  </p>
                </div>

                {/* SECTION 2 */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    Project Logistics Capabilities
                  </h2>
                  <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8" />

                  <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                    <p><strong className="text-primary">Heavy Lift Cargo:</strong> Specialized handling of extremely heavy machinery and equipment.</p>
                    <p><strong className="text-primary">Oversized Cargo:</strong> Custom routing, permits and solutions for out-of-gauge shipments.</p>
                    <p><strong className="text-primary">Break Bulk Cargo:</strong> Safe handling of non-containerized shipments.</p>
                    <p><strong className="text-primary">Multimodal Transport:</strong> Optimized coordination across road, rail, sea and air.</p>
                    <p><strong className="text-primary">On-site Services:</strong> Loading, positioning and installation support at project locations.</p>
                  </div>
                </div>

                {/* SECTION 3 */}
                <div className="text-center md:text-left">
                  <h2 className="text-2xl md:text-3xl font-bold text-primary mb-2">
                    Our Project Management Approach
                  </h2>
                  <div className="w-20 h-1 bg-primary mx-auto md:mx-0 mb-8" />

                  <div className="space-y-4 text-muted-foreground text-sm md:text-base">
                    <p><strong className="text-primary">Planning & Engineering:</strong> Route surveys and feasibility studies.</p>
                    <p><strong className="text-primary">Permits & Documentation:</strong> Regulatory approvals and compliance handling.</p>
                    <p><strong className="text-primary">Equipment Selection:</strong> Choosing the right lifting and transport tools.</p>
                    <p><strong className="text-primary">Execution & Monitoring:</strong> Real-time supervision for safe delivery.</p>
                  </div>
                </div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID — Same as Warehousing */}
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
