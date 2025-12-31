import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface ServiceSidebarProps {
  image: string;
  imageAlt: string;
}

const ServiceSidebar = ({ image, imageAlt }: ServiceSidebarProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="lg:sticky lg:top-8"
    >
      {/* Service Image */}
      <div className="relative mb-6">
        <img 
          src={image} 
          alt={imageAlt} 
          className="rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
        />
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10"></div>
        <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/20 rounded-2xl -z-10"></div>
      </div>

      {/* Other Services Links */}
      <div className="bg-card rounded-2xl p-6 border border-border">
        <h4 className="font-bold text-primary mb-4">Other Services</h4>
        <ul className="space-y-2">
          <li>
            <a href="/services/air-freight" className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2">
              <ArrowRight className="w-3 h-3" /> Air Freight
            </a>
          </li>
          <li>
            <a href="/services/ocean-freight" className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2">
              <ArrowRight className="w-3 h-3" /> Ocean Freight
            </a>
          </li>
          <li>
            <a href="/services/road-freight" className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2">
              <ArrowRight className="w-3 h-3" /> Road Freight
            </a>
          </li>
          <li>
            <a href="/services/customs-clearance" className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2">
              <ArrowRight className="w-3 h-3" /> Customs Clearance
            </a>
          </li>
          <li>
            <a href="/services/warehousing" className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2">
              <ArrowRight className="w-3 h-3" /> Warehousing
            </a>
          </li>
          <li>
            <a href="/services/project-logistics" className="text-muted-foreground hover:text-accent transition-colors text-sm flex items-center gap-2">
              <ArrowRight className="w-3 h-3" /> Project Logistics
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceSidebar;

