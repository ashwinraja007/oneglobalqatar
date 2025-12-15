import { Users, UserCheck, FileText, Route, Globe, Cloud } from 'lucide-react';

const GlobalNetwork = () => {
  const features = [
    { icon: Users, name: 'Consol Mate', description: 'Comprehensive consolidation management' },
    { icon: UserCheck, name: 'Partner Portal', description: 'Seamless partner collaboration' },
    { icon: FileText, name: 'E-DO', description: 'Electronic delivery orders' },
    { icon: Route, name: 'Live Tracking', description: 'Real-time shipment monitoring' },
    { icon: Globe, name: 'Integrated Digital Logistics Platform', description: 'End-to-end digital solutions' },
    { icon: Cloud, name: 'Cloud Based', description: 'Secure cloud infrastructure' },
  ];

  return (
    <section className="relative py-28 bg-gradient-to-b from-[#0b2a4a] via-[#103a66] to-[#0b2a4a] overflow-hidden">
      {/* Top Shape Image */}
      <img
        src="/shape8.png"
        alt="decorative shape"
        className="absolute top-0 left-0 w-full pointer-events-none select-none"
      />

      {/* Soft overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_60%)]" />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight text-white">
            OUR GLOBAL NETWORK
          </h2>
          <div className="mx-auto h-1 w-40 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          <p className="mt-8 text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto">
            ONE Global Logistics services W.L.L has a strong & reliable worldwide agent network. OGL believes in technology-driven logistic solutions to provide transparent and hassle-free service to its agents & customers. The strength of any organization is its individuals, and we are no different. We have a dedicated team led by experienced professionals serving as a neutral Sea LCL Consolidation Service Provider to Qatar.
          </p>

          <p className="mt-4 text-lg text-blue-100 leading-relaxed max-w-4xl mx-auto">
            Our network guarantees unmatched schedule integrity, best-in-class transit cycles, reliable rates, and flexibility for smaller shipments.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group relative rounded-2xl p-8 bg-white/95 backdrop-blur shadow-lg hover:shadow-2xl transition-all duration-300"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0,
                  animation: 'fadeInUp 0.6s ease-out forwards',
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl bg-gradient-to-br from-blue-100/40 to-transparent" />

                <div className="relative">
                  <div className="w-16 h-16 mb-5 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 bg-gradient-to-br from-[#1e3a8a] to-[#2563eb]">
                    <Icon className="w-8 h-8 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-bold mb-2 text-[#0b2a4a]">
                    {feature.name}
                  </h3>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer Text */}
        <div className="mt-20 text-center">
          <p className="text-blue-100 text-lg max-w-3xl mx-auto">
            Contact our logistics team at Qatar – ONE GLOBAL LOGISTICS SERVICES and experience timely, transparent, and professional logistics solutions.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
};

export default GlobalNetwork;
