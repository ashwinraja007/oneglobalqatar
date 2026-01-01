import React, { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Plane,
  Ship,
  Truck,
  Package,
  Boxes,
  Warehouse,
  FileCheck,
  DollarSign,
} from "lucide-react";

/* ======================================================
   KEY FEATURES
====================================================== */
const KeyFeatures = () => {
  const features = [
    {
      icon: Package,
      title: "Optimize Orders",
      description: "Optimize orders into container shipments for efficient delivery.",
    },
    {
      icon: Boxes,
      title: "Consolidation Handling",
      description: "Expert consolidation handling for both LCL and FCL shipments.",
    },
    {
      icon: FileCheck,
      title: "Comprehensive",
      description: "We offer comprehensive full container services worldwide.",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description: "Cost-effective solutions tailored for your shipping needs.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            SEA (LCL & FCL) / AIR FREIGHT – KEY FEATURES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative text-center group pb-16">
                <div className="mx-auto w-24 h-24 bg-background rounded-full flex items-center justify-center border-2 border-muted-foreground/20 shadow-md
                                group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary" />
                </div>

                <div className="pt-6">
                  <h3 className="font-bold text-lg text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground max-w-[220px] mx-auto">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                                text-7xl font-bold text-muted-foreground/20
                                group-hover:text-primary/30 transition-all">
                  {`0${index + 1}`}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

/* ======================================================
   SERVICE CARD — SAME STYLE
====================================================== */
const OneGlobalCard = ({ title, points, icon, link, index }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="relative text-center group pb-16 cursor-pointer"
      onClick={() => navigate(link)}
    >
      <div className="mx-auto w-24 h-24 bg-background rounded-full flex items-center justify-center border-2 border-muted-foreground/20 shadow-md
                      group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-300">
        {icon}
      </div>

      <div className="pt-6">
        <h3 className="font-bold text-lg text-primary mb-3">{title}</h3>

        <ul className="text-sm text-muted-foreground space-y-1 max-w-[240px] mx-auto">
          {points.map((pt, i) => (
            <li key={i}>• {pt}</li>
          ))}
        </ul>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2
                      text-7xl font-bold text-muted-foreground/20
                      group-hover:text-primary/30 transition-all">
        {`0${index + 1}`}
      </div>
    </motion.div>
  );
};

/* ======================================================
   SERVICES GRID
====================================================== */
const ServicesScroll = () => {
  const services = [
    {
      title: "Air Freight",
      icon: <Plane className="w-10 h-10 text-primary" />,
      link: "/services/air-freight",
      points: ["Express & deferred services", "Airport-to-airport & door-to-door", "DG & temperature-controlled cargo"],
    },
    {
      title: "Sea Freight",
      icon: <Ship className="w-10 h-10 text-primary" />,
      link: "/services/ocean-freight",
      points: ["FCL & LCL solutions", "Breakbulk & Ro-Ro cargo", "Global consolidation network"],
    },
    {
      title: "Road Freight",
      icon: <Truck className="w-10 h-10 text-primary" />,
      link: "/services/road-freight",
      points: ["GCC distribution", "Cross-border trucking", "Last-mile delivery"],
    },
    {
      title: "Customs Clearance",
      icon: <Package className="w-10 h-10 text-primary" />,
      link: "/services/customs-clearance",
      points: ["Import & export documentation", "Free zone & mainland clearance", "Compliance support"],
    },
    {
      title: "Warehousing",
      icon: <Warehouse className="w-10 h-10 text-primary" />,
      link: "/services/warehousing",
      points: ["Bonded & non-bonded facilities", "Inventory management", "Value-added services"],
    },
    {
      title: "Project Logistics",
      icon: <Boxes className="w-10 h-10 text-primary" />,
      link: "/services/project-logistics",
      points: ["Planning & coordination", "Heavy & OOG cargo", "End-to-end execution"],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Explore Our Services
          </h2>
          <p className="text-sm text-muted-foreground max-w-xl mx-auto">
            Reliable, scalable and technology-driven logistics solutions.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <OneGlobalCard key={index} {...service} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};

/* ======================================================
   FINAL EXPORT
====================================================== */
const Services = () => {
  const location = useLocation();
  useEffect(() => window.scrollTo(0, 0), [location.pathname]);

  return (
    <>
      <KeyFeatures />
      <ServicesScroll />
    </>
  );
};

export default Services;
