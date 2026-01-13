import React from 'react';
import { 
  Plane, 
  Ship, 
  Truck, 
  Package, 
  Warehouse, 
  Boxes, 
  FileCheck, 
  DollarSign 
} from 'lucide-react';

const KeyFeatures = () => {
  // 1. New Services Data (Image Cards)
  const services = [
    {
      image: "/airfreight.jpg",
      title: "Air Freight",
      icon: <Plane className="w-6 h-6" />,
      link: "/services/air-freight",
      points: ["Express & deferred services", "Airport-to-airport & door-to-door", "DG & temperature-controlled cargo"],
    },
    {
      image: "/seafreight.jpg",
      title: "Sea Freight",
      icon: <Ship className="w-6 h-6" />,
      link: "/services/ocean-freight",
      points: ["FCL & LCL solutions", "Breakbulk & Ro-Ro cargo", "Global consolidation network"],
    },
    {
      image: "/roadfreight01.jpg",
      title: "Road Freight",
      icon: <Truck className="w-6 h-6" />,
      link: "/services/road-freight",
      points: ["GCC distribution", "Cross-border trucking", "Last-mile delivery"],
    },
    {
      image: "/Customsclearance.jpg",
      title: "Customs Clearance",
      icon: <Package className="w-6 h-6" />,
      link: "/services/customs-clearance",
      points: ["Import & export documentation", "Free zone & mainland clearance", "Compliance support"],
    },
    {
      image: "/Warehousing.jpg",
      title: "Warehousing",
      icon: <Warehouse className="w-6 h-6" />,
      link: "/services/warehousing",
      points: ["Bonded & non-bonded facilities", "Inventory management", "Value-added services"],
    },
    {
      image: "/Projectlogistics.jpg",
      title: "Project Logistics",
      icon: <Boxes className="w-6 h-6" />,
      link: "/services/project-logistics",
      points: ["Planning & coordination", "Heavy & OOG cargo", "End-to-end execution"],
    },
  ];

  // 2. Old Key Features Data (Icons & Text)
  const features = [
    {
      icon: Package,
      title: 'Optimize Choices',
      description: 'Optimum choices with multiple sailings on each tradeline.',
    },
    {
      icon: Boxes,
      title: 'Consolidation Trucking',
      description: 'Special Consolidated Trucking options all over Europe.',
    },
    {
      icon: FileCheck,
      title: 'Comprehensive',
      description: 'We offer a very comprehensive freight management services.',
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Cost effective services through well negotiated carrier contracts and schedules.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* =========================================
            PART 1: SERVICES (Image Cards)
           ========================================= */}
        
        {/* Services Heading */}
        <div className="text-center mb-12">
           <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
             OUR SERVICES
           </h2>
           <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
          {services.map((service, index) => (
            <a
              href={service.link}
              key={index}
              className="group relative h-[400px] overflow-hidden rounded-2xl shadow-lg cursor-pointer block"
            >
              {/* Background Image with Zoom */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlays */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-90" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="mb-4 text-accent">
                  {service.icon}
                </div>
                <h3 className="font-heading text-2xl font-bold mb-3">
                  {service.title}
                </h3>
                <ul className="space-y-1">
                    {service.points.slice(0, 2).map((point, idx) => (
                        <li key={idx} className="text-gray-300 text-sm font-body flex items-center gap-2">
                             <span className="w-1 h-1 bg-accent rounded-full" /> {point}
                        </li>
                    ))}
                </ul>
              </div>
            </a>
          ))}
        </div>


        {/* =========================================
            PART 2: KEY FEATURES (Old Content)
           ========================================= */}

        {/* Old Heading */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            SEA (LCL & FCL) / AIR FREIGHT - KEY FEATURES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Old Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative text-center group"
              >
                {/* Icon Circle */}
                <div className="mx-auto w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-200 relative z-10">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Content */}
                <div className="pt-6">
                  <h3 className="font-heading font-bold text-xl text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {feature.description}
                  </p>
                </div>

                {/* Step Number Hover Effect */}
                <div
                  className="
                    absolute -bottom-12 left-1/2 -translate-x-1/2
                    text-6xl font-bold
                    text-gray-200
                    opacity-40
                    select-none
                    transition-all duration-300
                    group-hover:text-gray-800
                    group-hover:opacity-90
                    group-hover:scale-110
                  "
                >
                  {`0${index + 1}`}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-28 text-center">
          <a
            href="/Services"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Services
          </a>
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;
