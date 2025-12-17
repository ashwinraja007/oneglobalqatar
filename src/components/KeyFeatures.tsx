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
    <section id="services" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            SEA (LCL & FCL) / AIR FREIGHT - KEY FEATURES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative text-center group"
              >
                {/* Icon */}
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
