import { Users, UserCheck, FileText, Route, Globe, Cloud } from 'lucide-react';

const GlobalNetwork = () => {
  const features = [
    { 
      icon: Users, 
      name: 'Consol Mate',
      description: 'Comprehensive consolidation management'
    },
    { 
      icon: UserCheck, 
      name: 'Partner Portal',
      description: 'Seamless partner collaboration'
    },
    { 
      icon: FileText, 
      name: 'E-DO',
      description: 'Electronic delivery orders'
    },
    { 
      icon: Route, 
      name: 'Live Tracking',
      description: 'Real-time shipment monitoring'
    },
    { 
      icon: Globe, 
      name: 'Integrated Digital Logistics Platform',
      description: 'End-to-end digital solutions'
    },
    { 
      icon: Cloud, 
      name: 'Cloud Based',
      description: 'Secure cloud infrastructure'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
              OUR GLOBAL NETWORK
            </h2>
            <div className="h-1 bg-gradient-to-r from-transparent via-blue-600 to-transparent" />
          </div>
          
          <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
            ONE Global Logistics services W.L.L has a strong & reliable worldwide agent network. OGL believes in technology-driven logistic solutions to provide transparent and hassle-free service to its agents & customers. The strength of any organization is its individuals, and we are no different. We have good number of staff catering to the business needs of the market. The departments are headed by professionals who have many years of experience in the logistics field as a neutral Sea LCL Consolidation Service Provider to serve Qatar.
          </p>
          
          <p className="mt-4 text-lg text-slate-600 leading-relaxed max-w-4xl mx-auto">
            Our network guarantees schedule integrity that's next to none. We have the best transit cycle, reliability, and rates you can find, along with the flexibility you want when it comes to smaller loads.
          </p>
        </div>

        {/* Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-200 hover:border-blue-300"
                style={{ 
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards'
                }}
              >
                {/* Hover gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
                
                <div className="relative">
                  {/* Icon Container */}
                  <div className="w-16 h-16 mb-5 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>
                  
                  {/* Label */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {feature.name}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-16 text-center">
          <p className="text-slate-700 text-lg max-w-3xl mx-auto">
            Get in touch with our logistics team at Qatar – ONE GLOBAL LOGISTICS SERVICES now and we shall guarantee timely and professional services.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default GlobalNetwork;
