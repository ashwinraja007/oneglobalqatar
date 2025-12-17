import React from 'react';
import {
  Award,
  BookOpenCheck,
  Handshake,
  Lightbulb
} from 'lucide-react';

const CoreValues = () => {
  const bulletPoints = [
    "Integrated multi logistics platforms",
    "Live end to end supply chain visibility",
    "Customized portals to customer communications",
    "Tools to automate customer communications",
    "Real time business intelligence and reporting",
  ];

  const values = [
    {
      title: 'Strive for excellence',
      icon: Award,
    },
    {
      title: 'Adapt, learn & assimilate the best industry practices',
      icon: BookOpenCheck,
    },
    {
      title: 'Open & honest relationship with communications',
      icon: Handshake,
    },
    {
      title: 'Embrace innovation',
      icon: Lightbulb,
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-blue-900">
              OGL - Digital Logistics
            </h3>

            <p className="text-gray-600 leading-relaxed">
              It's our solution-based logistics services coupled with the best
              technology that makes us stand out. We believe in providing the
              right services using the right tools at the right time.
            </p>

            <ul className="space-y-3 mt-4">
              {bulletPoints.map((point, idx) => (
                <li key={idx} className="flex items-start text-gray-700">
                  <span className="mt-2 w-2 h-2 bg-blue-800 rounded-full mr-3 flex-shrink-0" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl overflow-hidden shadow-lg">
            <img
              src="/port.jpg"
              alt="Global Logistics Network"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* CORE VALUES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <ValueCard
              key={index}
              title={item.title}
              Icon={item.icon}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

// VALUE CARD
const ValueCard = ({
  title,
  Icon,
}: {
  title: string;
  Icon: React.ElementType;
}) => (
  <div className="group bg-white border border-gray-100 rounded-2xl p-10 flex flex-col items-center text-center min-h-[260px]
                  shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">

    <div className="mb-6 w-16 h-16 rounded-full border-2 border-blue-900
                    flex items-center justify-center
                    group-hover:bg-blue-900 transition-colors duration-300">
      <Icon
        size={28}
        className="text-rose-600 group-hover:text-white transition-colors duration-300"
      />
    </div>

    <h3 className="font-semibold text-gray-800 text-lg leading-snug px-2">
      {title}
    </h3>
  </div>
);

export default CoreValues;
