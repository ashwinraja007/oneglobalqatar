import { Package, Boxes, FileCheck, DollarSign } from 'lucide-react';

const KeyFeatures = () => {
  const features = [
    {
      icon: Package,
      title: 'Optimize Orders',
      description: 'Optimize orders into container shipments for efficient delivery.',
    },
    {
      icon: Boxes,
      title: 'Consolidation Handling',
      description: 'Expert consolidation handling for both LCL and FCL shipments.',
    },
    {
      icon: FileCheck,
      title: 'Comprehensive',
      description: 'We offer comprehensive full container services worldwide.',
    },
    {
      icon: DollarSign,
      title: 'Cost Effective',
      description: 'Cost-effective solutions tailored for your shipping needs.',
    },
  ];

  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Curved Dashed Line */}
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
          className="opacity-50"
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            SEA (LCL & FCL) / AIR FREIGHT - KEY FEATURES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pt-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative text-center animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Floating Icon Bubble */}
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-200">
                  <Icon className="w-8 h-8 text-primary" />
                </div>

                {/* Text Content */}
                <div className="pt-14">
                  <h3 className="font-heading font-bold text-xl text-primary mb-3">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>

                {/* Step Number */}
                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-6xl font-bold text-gray-200 opacity-40 select-none">
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

export default KeyFeatures;
