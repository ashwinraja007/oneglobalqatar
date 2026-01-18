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
    <section className="relative bg-[#0b2a4a] py-20 overflow-hidden">
      {/* subtle light */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_65%)]" />

      <div className="relative container mx-auto px-6 lg:px-12">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
            Our Global Network
          </h2>

          <div className="mx-auto h-0.5 w-32 bg-gradient-to-r from-transparent via-red-500 to-transparent" />

          <p className="mt-5 text-base md:text-lg text-blue-100 leading-relaxed">
ONE Global Logistics services W.L.L has a strong & Reliable Worldwide Agent network . OGL believes in Technology driven Logistic solution to provide a transparent and hassle free service to its agents & Customers.The strength of any organization is its individuals, and we are no different. We have good number of staffs catering to the business needs of the market. The departments are headed by professionals who have many years of experience in the logistics field as a neutral Sea LCL Consolidation Service Provider to serve the QATAR our network guarantees schedule integrity that’s next to none. We have the best transit cycle, reliability, and rates you can find, along with the flexibility you want when it comes to smaller loads.Get in touch with our logistics team at Qatar – ONE GLOBAL LOGISTICS SERVICES now and we shall guarantee timely and professional services.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group relative rounded-2xl bg-white/95 px-6 py-7 shadow-md hover:shadow-lg transition-all duration-300"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="mb-4 w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-br from-[#1e3a8a] to-[#2563eb] group-hover:scale-105 transition-transform">
                    <Icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-base font-semibold text-[#0b2a4a] leading-tight">
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
