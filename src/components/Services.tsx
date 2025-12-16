import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import { AspectRatio } from "@/components/ui/aspect-ratio";

/* ======================================================
   OLD SECTION – KEY FEATURES
====================================================== */
const KeyFeatures = () => {
  const features = [
    {
      icon: Package,
      title: "Optimize Orders",
      description:
        "Optimize orders into container shipments for efficient delivery.",
    },
    {
      icon: Boxes,
      title: "Consolidation Handling",
      description:
        "Expert consolidation handling for both LCL and FCL shipments.",
    },
    {
      icon: FileCheck,
      title: "Comprehensive",
      description:
        "We offer comprehensive full container services worldwide.",
    },
    {
      icon: DollarSign,
      title: "Cost Effective",
      description:
        "Cost-effective solutions tailored for your shipping needs.",
    },
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <svg
        className="absolute top-1/2 left-0 w-full -translate-y-1/2"
        height="140"
        viewBox="0 0 1200 200"
        fill="none"
      >
        <path
          d="M 0 100 C 300 20, 600 180, 900 100 S 1200 20, 1400 100"
          stroke="#3d5548"
          strokeWidth="4"
          strokeDasharray="10 12"
          className="opacity-40"
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            SEA (LCL & FCL) / AIR FREIGHT – KEY FEATURES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative text-center">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                <div className="pt-14">
                  <h3 className="font-bold text-xl text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-6xl font-bold text-gray-200 opacity-40">
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
   CARD COMPONENT
====================================================== */
const OneGlobalCard = ({ image, title, points, icon }) => {
  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 220, damping: 20 }}
      className="bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden"
    >
      <AspectRatio ratio={16 / 9}>
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </AspectRatio>

      <div className="p-5">
        <div className="flex items-center gap-2 font-semibold text-[#0B1739] mb-2">
          {icon}
          <h3>{title}</h3>
        </div>

        <ul className="list-disc pl-5 text-sm text-gray-600 space-y-1">
          {points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

/* ======================================================
   NEW SECTION – GRID SERVICES (NEW BLUE GRADIENT)
====================================================== */
const ServicesScroll = () => {
  const services = [
    {
      image: "/aircargo2.png",
      title: "Air Freight",
      icon: <Plane size={16} />,
      points: [
        "Express & deferred services",
        "Airport-to-airport & door-to-door",
        "DG & temperature-controlled cargo",
      ],
    },
    {
      image: "/oceanf.png",
      title: "Sea Freight",
      icon: <Ship size={16} />,
      points: [
        "FCL & LCL solutions",
        "Breakbulk & Ro-Ro cargo",
        "Global consolidation network",
      ],
    },
    {
      image: "/CARGO.png",
      title: "Road Freight",
      icon: <Truck size={16} />,
      points: [
        "GCC distribution",
        "Cross-border trucking",
        "Last-mile delivery",
      ],
    },
    {
      image: "/lovable-uploads/cc.jpg",
      title: "Customs Clearance",
      icon: <Package size={16} />,
      points: [
        "Import & export documentation",
        "Free zone & mainland clearance",
        "Compliance support",
      ],
    },
    {
      image: "/warhouseh1.png",
      title: "Warehousing",
      icon: <Warehouse size={16} />,
      points: [
        "Bonded & non-bonded facilities",
        "Inventory management",
        "Value-added services",
      ],
    },
    {
      image: "/h4.png",
      title: "Project Logistics",
      icon: <Boxes size={16} />,
      points: [
        "Planning & coordination",
        "Heavy & OOG cargo",
        "End-to-end execution",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-transparent to-[#152C55]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-14">
          <span className="text-sm uppercase tracking-widest text-orange-400">
            What We Offer
          </span>
          <h2 className="text-4xl font-bold mt-2 text-white">
            Explore Our Services
          </h2>
          <p className="text-gray-200 text-sm mt-3 max-w-xl mx-auto">
            Reliable, scalable and technology-driven logistics solutions.
          </p>
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
   FINAL PAGE EXPORT
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
