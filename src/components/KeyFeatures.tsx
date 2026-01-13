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
  ArrowRight
} from 'lucide-react';

const KeyFeatures = () => {
  // 1. Services Data
  const services = [
    {
      image: "/airfreight.jpg",
      title: "Air Freight",
      icon: <Plane className="w-6 h-6" />,
      link: "/services/air-freight",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    },
    {
      image: "/seafreight.jpg",
      title: "Sea Freight",
      icon: <Ship className="w-6 h-6" />,
      link: "/services/ocean-freight",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    },
    {
      image: "/roadfreight01.jpg",
      title: "Road Freight",
      icon: <Truck className="w-6 h-6" />,
      link: "/services/road-freight",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    },
    {
      image: "/Customsclearance.jpg",
      title: "Customs Clearance",
      icon: <Package className="w-6 h-6" />,
      link: "/services/customs-clearance",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    },
    {
      image: "/Warehousing.jpg",
      title: "Warehousing",
      icon: <Warehouse className="w-6 h-6" />,
      link: "/services/warehousing",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    },
    {
      image: "/Projectlogistics.jpg",
      title: "Project Logistics",
      icon: <Boxes className="w-6 h-6" />,
      link: "/services/project-logistics",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit dolor",
    },
  ];

  // 2. Old Features Data
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
            PART 1: SERVICES (Hover Cards)
           ========================================= */}
        
        <div className="text-center mb-12">
           <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
             OUR SERVICES
           </h2>
           <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-32">
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

              {/* Dark Overlay (Always visible to make text readable) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Content Container */}
              <div className="absolute bottom-0 left-0 w-full p-8 text-white flex flex-col justify-end min-h-[50%]">
                
                {/* Icon & Title Wrapper (Moves up on hover) */}
                <div className="transform transition-transform duration-500 group-hover:-translate-y-2">
                  <div className="mb-3 text-white/90">
                    {service.icon}
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 text-sm font-body leading-relaxed max-w-[90%]">
                    {service.description}
                  </p>
                </div>

                {/* 'Read More' Button (Hidden by default, slides up & fades in on hover) */}
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


        {/* =========================================
            PART 2: KEY FEATURES (Old Style)
           ========================================= */}

        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            SEA (LCL & FCL) / AIR FREIGHT - KEY FEATURES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
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
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 text-6xl font-bold text-gray-200 opacity-40 select-none transition-all duration-300 group-hover:text-gray-800 group-hover:opacity-90 group-hover:scale-110">
                  {`0${index + 1}`}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-28 text-center">
          <a href="/Services" className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-white rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl">
            View All Services
          </a>
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;
