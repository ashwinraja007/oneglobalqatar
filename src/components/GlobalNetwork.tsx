import { Users, UserCheck, FileText, Route, Globe, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const GlobalNetwork = () => {
  const features = [
    { icon: Users, name: 'Consol Mate' },
    { icon: UserCheck, name: 'Partner Portal' },
    { icon: FileText, name: 'E-DO' },
    { icon: Route, name: 'Live Tracking' },
    { icon: Globe, name: 'Integrated Digital Logistics Platform' },
    { icon: Cloud, name: 'Cloud Based' },
  ];

  return (
    <section className="relative py-32 overflow-hidden bg-gradient-to-b from-[#081d33] via-[#0e345a] to-[#081d33]">

      {/* Decorative background blobs */}
      <div className="absolute -top-40 -left-40 w-[420px] h-[420px] bg-blue-500/20 rounded-full blur-3xl" />
      <div className="absolute top-1/3 -right-40 w-[420px] h-[420px] bg-indigo-500/20 rounded-full blur-3xl" />

      {/* Top wave / shape */}
      <img
        src="/shape8.png"
        alt=""
        className="absolute top-0 left-0 w-full pointer-events-none select-none opacity-90"
      />

      <div className="relative container mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          viewport={{ once: true }}
          className="text-center max-w-5xl mx-auto mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Our Global Network
          </h2>

          <div className="mx-auto h-1 w-48 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          <p className="mt-8 text-lg md:text-xl text-blue-100 leading-relaxed">
            One Global Logistics Services W.L.L operates with a strong, reliable worldwide
            agent network. Driven by technology and transparency, we deliver secure,
            schedule-driven LCL consolidation services backed by experienced professionals
            and trusted global partners.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl p-10 bg-white/95 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-500"
              >
                {/* Hover glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-200/40 to-transparent" />

                <div className="relative flex flex-col items-center text-center">
                  <div className="w-18 h-18 mb-6 rounded-2xl flex items-center justify-center shadow-lg bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <Icon className="w-9 h-9 text-white" strokeWidth={2} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#0b2a4a]">
                    {feature.name}
                  </h3>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GlobalNetwork;
