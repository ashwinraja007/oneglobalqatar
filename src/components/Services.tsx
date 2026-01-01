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
  ArrowRight,
} from "lucide-react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

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
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            SEA (LCL & FCL) / AIR FREIGHT – KEY FEATURES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative text-center group pb-16 transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="mx-auto w-24 h-24 bg-background rounded-full flex items-center justify-center border-2 border-muted-foreground/20 shadow-md
                                group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>

                <div className="pt-6">
                  <h3 className="font-heading font-bold text-lg text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-[220px] mx-auto">
                    {feature.description}
                  </p>
                </div>

                <div
                  className="
                    absolute bottom-0 left-1/2 -translate-x-1/2
                    text-7xl font-bold
                    text-muted-foreground/20
                    select-none
                    transition-all duration-300
                    group-hover:text-primary/30
                    group-hover:scale-110
                  "
                >
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
   SERVICE CARD — UNCHANGED
====================================================== */
const OneGlobalCard = ({ image, title, points, icon, link }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 200, damping: 18 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden"
    >
      <AspectRatio ratio={16 / 9}>
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </AspectRatio>

      <div className="p-5">
        <div className="flex items-center gap-2 font-semibold text-primary mb-2">
          {icon}
          <h3>{title}</h3>
        </div>

        <ul className="list-disc pl-5 text-sm text-muted-foreground space-y-1 mb-5">
          {points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>

        <Button
          onClick={() => navigate(link)}
          className="relative overflow-hidden px-6 py-2 rounded-full border border-accent text-accent bg-transparent
                     transition-all duration-300 ease-out hover:text-white"
        >
          <span className="absolute inset-0 bg-accent translate-x-[-100%] transition-transform duration-300 ease-out hover:translate-x-0" />
          <span className="relative z-10 flex items-center gap-2 font-medium">
            Learn More
            <ArrowRight className="w-4 h-4 transition-transform duration-300 hover:translate-x-2" />
          </span>
        </Button>
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
      image: "/airfreight.jpg",
      title: "Air Freight",
      icon: <Plane size={16} />,
      link: "/services/air-freight",
      points: ["Express & deferred services", "Airport-to-airport & door-to-door", "DG & temperature-controlled cargo"],
    },
    {
      image: "/seafreight.jpg",
      title: "Sea Freight",
      icon: <Ship size={16} />,
      link: "/services/ocean-freight",
      points: ["FCL & LCL solutions", "Breakbulk & Ro-Ro cargo", "Global consolidation network"],
    },
    {
      image: "/roadfreight.jpg",
      title: "Road Freight",
      icon: <Truck size={16} />,
      link: "/services/road-freight",
      points: ["GCC distribution", "Cross-border trucking", "Last-mile delivery"],
    },
    {
      image: "/Customsclearance.jpg",
      title: "Customs Clearance",
      icon: <Package size={16} />,
      link: "/services/customs-clearance",
      points: ["Import & export documentation", "Free zone & mainland clearance", "Compliance support"],
    },
    {
      image: "/Warehousing.jpg",
      title: "Warehousing",
      icon: <Warehouse size={16} />,
      link: "/services/warehousing",
      points: ["Bonded & non-bonded facilities", "Inventory management", "Value-added services"],
    },
    {
      image: "/Projectlogistics.jpg",
      title: "Project Logistics",
      icon: <Boxes size={16} />,
      link: "/services/project-logistics",
      points: ["Planning & coordination", "Heavy & OOG cargo", "End-to-end execution"],
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">

        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-accent">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-primary mt-2">
            Explore Our Services
          </h2>
          <p className="text-sm mt-3 max-w-xl mx-auto text-muted-foreground">
            Reliable, scalable and technology-driven logistics solutions.
          </p>
          <div className="w-20 h-1 bg-accent mx-auto mt-5" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <OneGlobalCard key={index} {...service} />
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
