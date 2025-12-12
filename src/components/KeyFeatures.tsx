import { Package, Layers, FileCheck, DollarSign } from "lucide-react";

export default function KeyFeatures() {
  const features = [
    {
      icon: <Package className="w-8 h-8 text-blue-900" />, 
      title: "Optimize Orders",
      desc: "Optimize orders into container shipments for efficient delivery.",
      number: "01",
    },
    {
      icon: <Layers className="w-8 h-8 text-blue-900" />, 
      title: "Consolidation Handling",
      desc: "Expert consolidation handling for both LCL and FCL shipments.",
      number: "02",
    },
    {
      icon: <FileCheck className="w-8 h-8 text-blue-900" />, 
      title: "Comprehensive",
      desc: "We offer comprehensive full container services worldwide.",
      number: "03",
    },
    {
      icon: <DollarSign className="w-8 h-8 text-blue-900" />, 
      title: "Cost Effective",
      desc: "Cost-effective solutions tailored for your shipping needs.",
      number: "04",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-blue-900">SEA (LCL & FCL) / AIR FREIGHT - KEY FEATURES</h2>
        <div className="h-1 w-14 bg-red-500 mx-auto mt-2"></div>
      </div>

      {/* FULL dotted curved line completed for all 4 */}
      <svg className="w-full h-16 mb-6" viewBox="0 0 1200 150" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M 0 80 C 200 20, 400 140, 600 60 C 800 0, 1000 140, 1200 70"
          stroke="#BFC5C7"
          strokeWidth="4"
          strokeDasharray="10 12"
          strokeLinecap="round"
        />
      </svg>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
        {features.map((item, index) => (
          <div key={index} className="relative text-center">
            <div className="flex justify-center mb-4">
              <div className="w-20 h-20 rounded-full bg-white shadow-lg flex items-center justify-center">
                {item.icon}
              </div>
            </div>

            {/* Number little bit DOWN */}
            <span className="absolute inset-x-0 top-24 text-6xl font-bold text-gray-200 opacity-60 select-none">
              {item.number}
            </span>

            <h3 className="font-semibold text-blue-900 mt-10">{item.title}</h3>
            <p className="text-gray-600 mt-2 text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
