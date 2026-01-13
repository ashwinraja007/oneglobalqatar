import React from 'react';
import { 
  Plane, 
  Ship, 
  Truck, 
  Package, 
  Warehouse, 
  Boxes, 
  FileCheck, 
  DollarSign,
} from 'lucide-react';

const KeyFeatures = () => {
  // 1. New Services Data (Cards)
  const services = [
    {
      image: "/airfreight.jpg",
      title: "Air Freight",
      icon: <Plane size={24} />,
      link: "/services/air-freight",
      points: ["Express & deferred services", "Airport-to-airport & door-to-door", "DG & temperature-controlled cargo"],
    },
    {
      image: "/seafreight.jpg",
      title: "Sea Freight",
      icon: <Ship size={24} />,
      link: "/services/ocean-freight",
      points: ["FCL & LCL solutions", "Breakbulk & Ro-Ro cargo", "Global consolidation network"],
    },
    {
      image: "/roadfreight01.jpg",
      title: "Road Freight",
      icon: <Truck size={24} />,
      link: "/services/road-freight",
      points: ["GCC distribution", "Cross-border trucking", "Last-mile delivery"],
    },
    {
      image: "/Customsclearance.jpg",
      title: "Customs Clearance",
      icon: <Package size={24} />,
      link: "/services/customs-clearance",
      points: ["Import & export documentation", "Free zone & mainland clearance", "Compliance support"],
    },
    {
      image: "/Warehousing.jpg",
      title: "Warehousing",
      icon: <Warehouse size={24} />,
      link: "/services/warehousing",
      points: ["Bonded & non-bonded facilities", "Inventory management", "Value-added services"],
    },
    {
      image: "/Projectlogistics.jpg",
      title: "Project Logistics",
      icon: <Boxes size={24} />,
      link: "/services/project-logistics",
      points: ["Planning & coordination", "Heavy & OOG cargo", "End-to-end execution"],
    },
  ];

  // 2. Old Features Data (Icons)
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
            PART 1: KEY FEATURES (Moved to Top)
           ========================================= */}

        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            SEA (LCL & FCL) / AIR FREIGHT - KEY FEATURES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-32">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="relative text-center group">
                <div className="mx-auto w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-200 relative z-10">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <div className="pt-6">
                  <h3 className="font-heading font-bold text-xl text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                    {feature.description}
                  </p>
                </div>
                {/* Background Number */}
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-6xl font-bold text-gray-200 opacity-40 select-none transition-all duration-300 group-hover:text-gray-800 group-hover:opacity-90 group-hover:scale-110">
                  {`0${index + 1}`}
                </div>
              </div>
            );
          })}
        </div>


        {/* =========================================
            PART 2: SERVICES CARDS (Moved Below)
           ========================================= */}
        
        <div className="text-center mb-12">
           <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
             OUR SERVICES
           </h2>
           <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative h-[450px] overflow-hidden rounded-2xl shadow-lg cursor-pointer"
            >
              {/* Background Image */}
              <div className="absolute inset-0 w-full h-full">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white flex flex-col justify-end min-h-[60%]">
                
                {/* Icon & Title Wrapper (Moves up on hover) */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="mb-3 text-accent">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    {service.title}
                  </h3>
                  
                  {/* Bullet Points */}
                  <ul className="space-y-1.5">
                    {service.points.map((point, idx) => (
                      <li key={idx} className="text-gray-200 text-sm font-body flex items-start gap-2">
                        <span className="mt-1.5 w-1 h-1 bg-accent rounded-full shrink-0" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* 'Read More' Button */}
                <div className="
                  h-0 overflow-hidden opacity-0 
                  transition-all duration-500 ease-out
                  group-hover:h-12 group-hover:opacity-100 group-hover:mt-6
                ">
                  <a 
                    href={service.link}
                    className="inline-flex items-center justify-center px-6 py-2.5 bg-[#1e40af] hover:bg-[#1e3a8a] text-white text-sm font-semibold rounded shadow-md transition-colors"
                  >
                    Read More
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-20 text-center">
          <a href="/Services" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Services
          </a>
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;
