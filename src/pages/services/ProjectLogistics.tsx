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
        {/* HERO SECTION — Styled like Warehousing */}
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

                {/* SPECIALIZED HANDLING */}
                <div>
                  <h2 className="text-3xl font-bold text-primary mb-6 text-center">
                    Specialized Project Cargo Handling
                  </h2>
                  <p className="text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
                    At <strong className="text-primary">One Global Logistics</strong>, we specialize in handling complex project cargo that requires specialized expertise, equipment, and planning. Our project logistics services are designed for oversized, heavy-lift, and out-of-gauge cargo, serving industries such as oil & gas, construction, energy, mining, and manufacturing.
                  </p>

                  <div className="bg-muted/30 rounded-md p-8 border-l-4 border-primary shadow-sm">
                    <h3 className="text-xl font-bold text-primary mb-6">
                      Our Project Logistics Capabilities
                    </h3>
                    <ul className="space-y-4">
                      <li className="text-sm"><strong className="text-primary">Heavy Lift Cargo:</strong> Specialized equipment and expertise for moving exceptionally heavy equipment and machinery.</li>
                      <li className="text-sm"><strong className="text-primary">Oversized Cargo:</strong> Handling of out-of-gauge shipments requiring special permits, route surveys, and custom solutions.</li>
                      <li className="text-sm"><strong className="text-primary">Break Bulk Cargo:</strong> Management of cargo that cannot be containerized and requires individual piece handling.</li>
                      <li className="text-sm"><strong className="text-primary">Multimodal Transportation:</strong> Seamless coordination across ocean, air, road, and rail to optimize routes.</li>
                      <li className="text-sm"><strong className="text-primary">On-site Services:</strong> Loading, unloading, positioning, and installation support at project sites.</li>
                    </ul>
                  </div>
                </div>

                {/* INDUSTRIES GRID */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-8">
                    Industries We Serve
                  </h3>
                  <div className="grid md:grid-cols-3 gap-4">
                    {[
                      { title: 'Oil & Gas', desc: 'Offshore platforms, drilling equipment, pipelines, and refinery components.' },
                      { title: 'Power & Energy', desc: 'Wind turbines, transformers, generators, and renewable energy equipment.' },
                      { title: 'Construction', desc: 'Heavy machinery, cranes, steel structures, and prefabricated building components.' },
                      { title: 'Mining', desc: 'Mining equipment, conveyor systems, crushers, and processing machinery.' },
                      { title: 'Manufacturing', desc: 'Industrial machinery, production lines, and factory equipment.' },
                      { title: 'Infrastructure', desc: 'Bridge components, tunnel equipment, and railway infrastructure.' }
                    ].map((item, i) => (
                      <div key={i} className="p-6 bg-card border border-border rounded-sm shadow-sm hover:shadow-md transition-shadow">
                        <h4 className="font-bold text-primary mb-2">{item.title}</h4>
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* MANAGEMENT APPROACH */}
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-8">
                    Our Project Management Approach
                  </h3>
                  <div className="space-y-6">
                    {[
                      { title: '1. Planning & Engineering', desc: 'Detailed feasibility studies, route surveys, and custom engineering solutions for complex movements.' },
                      { title: '2. Permits & Documentation', desc: 'Securing all necessary permits, licenses, and regulatory approvals for oversized cargo.' },
                      { title: '3. Equipment Selection', desc: 'Choosing appropriate lifting, loading, and transportation equipment for safe cargo handling.' },
                      { title: '4. Execution & Monitoring', desc: 'Real-time tracking and on-ground supervision ensuring safe and timely project completion.' }
                    ].map((step, i) => (
                      <div key={i} className="pl-4 border-l-2 border-primary">
                        <h4 className="font-bold text-primary text-sm mb-1">{step.title}</h4>
                        <p className="text-muted-foreground text-sm">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* SPECIALIZED EQUIPMENT */}
                <div className="bg-muted/30 rounded-md p-8 border-l-4 border-primary shadow-sm">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Specialized Equipment
                  </h3>
                  <ul className="grid md:grid-cols-2 gap-y-3 text-sm text-muted-foreground">
                    <li>• Heavy-lift cranes and mobile cranes</li>
                    <li>• Low-bed trailers and SPMTs</li>
                    <li>• RoRo vessels and heavy-lift ships</li>
                    <li>• Flatracks, open-top containers, and break-bulk vessels</li>
                    <li>• Jacking and skidding systems</li>
                  </ul>
                </div>

              </motion.div>
            </div>
          </div>
        </section>

        {/* BOTTOM FEATURES */}
        <section className="py-12 bg-muted/30 border-t border-border">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="bg-card p-6 rounded-xl shadow-sm border border-border">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ProjectLogistics;
