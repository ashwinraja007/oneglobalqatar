import React from 'react';

const CoreValues = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="mb-16 relative">
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
          <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-blue-100">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              OGL - Digital Logistics
            </h2>
            <p className="text-gray-600 mb-6 max-w-2xl text-lg leading-relaxed">
              It's our solution-based logistics services couple with the best technology that makes us standout. We belive in providing the right services using the right tools at the right time.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50/50 hover:bg-blue-100/50 transition-colors">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-gray-700">Integrated multi logistics platforms</span>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50/50 hover:bg-blue-100/50 transition-colors">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-gray-700">Live end to end supply chain visibility</span>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50/50 hover:bg-blue-100/50 transition-colors">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-gray-700">Customized portals to customer communications</span>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50/50 hover:bg-blue-100/50 transition-colors">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-gray-700">Tools to automate customer communications</span>
              </div>
              <div className="flex items-start space-x-3 p-3 rounded-lg bg-blue-50/50 hover:bg-blue-100/50 transition-colors md:col-span-2">
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span className="text-gray-700">Real time business intelligence and reporting</span>
              </div>
            </div>
          </div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Top Left - Strive for excellence */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-pink-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:-translate-y-1">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-red-500 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center shadow-lg">
                  <div className="w-10 h-10 rounded-full border-3 border-white"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">Strive for exellence</h3>
            </div>
          </div>

          {/* Top Right - Adapt, learn & assimilate */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:-translate-y-1">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-blue-500 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center shadow-lg">
                  <div className="w-10 h-10 rounded-full border-3 border-white"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">Adapt, learn & assimilate the best industry practices</h3>
            </div>
          </div>

          {/* Bottom Left - Open & honest relationship */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:-translate-y-1">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-purple-500 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center shadow-lg">
                  <div className="w-10 h-10 rounded-full border-3 border-white"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">Open & honest relationship with communications</h3>
            </div>
          </div>

          {/* Bottom Right - Embrace innovation */}
          <div className="group relative">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
            <div className="relative flex flex-col items-center justify-center p-10 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:-translate-y-1">
              <div className="relative w-24 h-24 mb-6">
                <div className="absolute inset-0 rounded-full border-4 border-green-500 animate-pulse"></div>
                <div className="absolute inset-2 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-lg">
                  <div className="w-10 h-10 rounded-full border-3 border-white"></div>
                </div>
              </div>
              <h3 className="text-xl font-bold text-gray-900 text-center">Embrace innovation</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
