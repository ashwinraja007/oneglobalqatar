import React from 'react';
import {
  Award,
  BookOpenCheck,
  Handshake,
  Lightbulb
} from 'lucide-react';
import { motion } from 'framer-motion';

const CoreValues = () => {
  const bulletPoints = [
    "Integrated multi logistics platforms",
    "Live end to end supply chain visibility",
    "Customized portals to customer communications",
    "Tools to automate customer communications",
    "Real time business intelligence and reporting",
  ];

  const values = [
    { title: 'Strive for excellence', icon: Award },
    { title: 'Adapt, learn & assimilate the best industry practices', icon: BookOpenCheck },
    { title: 'Open & honest relationship with communications', icon: Handshake },
    { title: 'Embrace innovation', icon: Lightbulb },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-slate-50">
      <div className="container mx-auto px-6">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">

          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h3 className="font-heading text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0f2454]">
              OGL – Digital Logistics
            </h3>

            <p className="text-sm sm:text-base md:text-lg text-gray-700 leading-relaxed max-w-xl">
              It's our solution-based logistics services coupled with the best
              technology that makes us stand out. We believe in providing the
              right services using the right tools at the right time.
            </p>

            <ul className="space-y-4 pt-2">
              {bulletPoints.map((point, idx) => (
                <li
                  key={idx}
                  className="flex items-start text-sm sm:text-base text-gray-800"
                >
                  <span className="mt-2 w-2.5 h-2.5 bg-[#0f2454] rounded-full mr-4 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl group"
          >
            <img
              src="/port.jpg"
              alt="Global Logistics Network"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
          </motion.div>
        </div>

        {/* CORE VALUES */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ValueCard title={item.title} Icon={item.icon} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

const ValueCard = ({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ElementType;
}) => (
  <div
    className="group bg-white border border-slate-100 rounded-2xl p-8
               flex flex-col items-center text-center min-h-[240px]
               shadow-md hover:shadow-xl hover:-translate-y-2
               transition-all duration-300"
  >
    <div
      className="mb-6 w-16 h-16 rounded-full bg-[#0f2454]/10
                 flex items-center justify-center
                 group-hover:bg-[#0f2454] transition-colors duration-300"
    >
      <Icon
        size={28}
        className="text-rose-600 group-hover:text-white transition-colors duration-300"
      />
    </div>

    <h3 className="text-[#0f2454] font-bold text-sm sm:text-base leading-snug max-w-[240px]">
      {title}
    </h3>
  </div>
);

export default CoreValues;
