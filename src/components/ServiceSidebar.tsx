import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const services = [
  { name: 'Air Freight', path: '/services/air-freight' },
  { name: 'Ocean Freight', path: '/services/ocean-freight' },
  { name: 'Road Freight', path: '/services/road-freight' },
  { name: 'Customs Clearance', path: '/services/customs-clearance' },
  { name: 'Warehousing', path: '/services/warehousing' },
  { name: 'Project Logistics', path: '/services/project-logistics' },
];

const ServiceSidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:sticky lg:top-24"
    >
      {/* Other Services Links */}
      <div className="bg-card rounded-2xl p-6 border border-border shadow-lg">
        <h4 className="font-bold text-primary mb-4 text-lg">Our Services</h4>
        <ul className="space-y-3">
          {services.map((service) => {
            const isActive = currentPath === service.path;
            return (
              <li key={service.path}>
                <a 
                  href={service.path} 
                  className={`flex items-center gap-3 text-sm transition-colors p-2 rounded-lg ${
                    isActive 
                      ? 'bg-primary/10 text-primary font-semibold' 
                      : 'text-muted-foreground hover:text-primary hover:bg-muted/50'
                  }`}
                >
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-primary' : ''}`} />
                  {service.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceSidebar;

