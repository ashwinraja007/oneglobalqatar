import { Package, Boxes, FileCheck, DollarSign } from 'lucide-react';

const KeyFeatures = () => {
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
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary mb-4">
            SEA (LCL & FCL) / AIR FREIGHT - KEY FEATURES
          </h2>
          <div className="w-20 h-1 bg-accent mx-auto" />
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="relative text-center group pb-16"
              >
                {/* Circular Icon Container */}
                <div className="mx-auto w-24 h-24 bg-background rounded-full flex items-center justify-center border-2 border-muted-foreground/20 shadow-md relative z-10 group-hover:border-primary/50 group-hover:shadow-lg transition-all duration-300">
                  <Icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="pt-6">
                  <h3 className="font-heading font-bold text-lg text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-[220px] mx-auto">
                    {feature.description}
                  </p>
                </div>

                {/* Large Number at Bottom */}
                <div
                  className="
                    absolute bottom-0 left-1/2 -translate-x-1/2
                    text-7xl font-bold
                    text-muted-foreground/20
                    select-none
                    transition-all duration-300
                    group-hover:text-primary/30
                  "
                >
                  {`0${index + 1}`}
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="/Services"
            className="inline-flex items-center justify-center px-10 py-4 text-base font-semibold text-primary-foreground rounded-full bg-primary hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            View All Services
          </a>
        </div>

      </div>
    </section>
  );
};

export default KeyFeatures;