import React from 'react';

const CoreValues = () => {
  return (
    <section className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        
        {/* Hero Section with Image and Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-32">
          {/* Left Side - Image */}
          <div className="relative">
            <img 
              src="/cargo-ship.jpg" 
              alt="Cargo Ship" 
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>

          {/* Right Side - Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Drive Your Business Forward with LogiHub
              </h1>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-4">
                Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
              </p>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                "Freight Forwarding",
                "Warehousing & Delivery",
                "Warehousing & Delivery",
                "Customs Clearance",
                "Customs Clearance",
                "Freight Forwarding"
              ].map((service, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-6 h-6 rounded-full bg-red-500 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-gray-700 font-medium">{service}</span>
                </div>
              ))}
            </div>

            <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-10 rounded-full transition-colors duration-300 shadow-lg">
              Read More
            </button>
          </div>
        </div>

        {/* Digital Logistics Section */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <span className="block text-orange-500 font-bold tracking-wider text-sm mb-4 uppercase">
            Digital Logistics Solutions
          </span>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 tracking-tight">
            OGL - Digital Logistics
          </h2>
          
          <p className="text-gray-500 text-xl leading-relaxed">
            It's our solution-based logistics services coupled with the best technology that makes us standout. We believe in providing the right services using the right tools at the right time.
          </p>
        </div>

        {/* Feature List - Styled to match the clean aesthetic */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {[
            { title: "Integrated multi logistics platforms", iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" },
            { title: "Live end to end supply chain visibility", iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" },
            { title: "Customized portals to customer communications", iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" },
            { title: "Tools to automate customer communications", iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" },
            { title: "Real time business intelligence reporting", iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" },
          ].map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-6 rounded-2xl hover:bg-gray-50 transition-colors duration-300">
              <div className="w-12 h-12 mb-4 text-gray-900">
                <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.iconPath} />
                </svg>
              </div>
              <span className="text-gray-800 font-medium text-lg">{feature.title}</span>
            </div>
          ))}
        </div>

        {/* Core Values Section Heading */}
        <div className="text-center mb-12">
          <span className="text-orange-500 font-bold tracking-wider text-xs uppercase mb-2 block">Our DNA</span>
          <h3 className="text-4xl font-bold text-gray-900">Core Values</h3>
        </div>

        {/* Values Grid - Styled like the Client Logos in the image */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          
          {/* Card 1 */}
          <div className="group bg-white border border-gray-200 rounded-[2.5rem] p-10 flex flex-col items-center justify-center min-h-[280px] hover:bg-gray-900 transition-all duration-300 cursor-default">
            <div className="w-16 h-16 mb-6 text-gray-900 group-hover:text-white transition-colors duration-300">
               <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
               </svg>
            </div>
            <h4 className="text-gray-900 text-xl font-bold text-center group-hover:text-white transition-colors duration-300">
              Strive for excellence
            </h4>
          </div>

          {/* Card 2 */}
          <div className="group bg-white border border-gray-200 rounded-[2.5rem] p-10 flex flex-col items-center justify-center min-h-[280px] hover:bg-gray-900 transition-all duration-300 cursor-default">
            <div className="w-16 h-16 mb-6 text-gray-900 group-hover:text-white transition-colors duration-300">
               <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
               </svg>
            </div>
            <h4 className="text-gray-900 text-xl font-bold text-center group-hover:text-white transition-colors duration-300">
              Adapt & learn industry practices
            </h4>
          </div>

          {/* Card 3 */}
          <div className="group bg-white border border-gray-200 rounded-[2.5rem] p-10 flex flex-col items-center justify-center min-h-[280px] hover:bg-gray-900 transition-all duration-300 cursor-default">
            <div className="w-16 h-16 mb-6 text-gray-900 group-hover:text-white transition-colors duration-300">
               <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
               </svg>
            </div>
            <h4 className="text-gray-900 text-xl font-bold text-center group-hover:text-white transition-colors duration-300">
              Open & honest communications
            </h4>
          </div>

          {/* Card 4 */}
          <div className="group bg-white border border-gray-200 rounded-[2.5rem] p-10 flex flex-col items-center justify-center min-h-[280px] hover:bg-gray-900 transition-all duration-300 cursor-default">
            <div className="w-16 h-16 mb-6 text-gray-900 group-hover:text-white transition-colors duration-300">
               <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
               </svg>
            </div>
            <h4 className="text-gray-900 text-xl font-bold text-center group-hover:text-white transition-colors duration-300">
              Embrace innovation
            </h4>
          </div>
        </div>

        {/* Footer Link */}
        <div className="text-center mt-20">
          <p className="text-gray-900 text-lg font-medium">
            Become our next partner. <a href="#" className="text-orange-500 hover:text-orange-600 font-bold">Let's Talk!</a>
          </p>
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
