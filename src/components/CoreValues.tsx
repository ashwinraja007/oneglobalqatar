import React from 'react';

const CoreValues = () => {
  // Restoring the original OGL content
  const features = [
    { 
      title: "Integrated multi logistics platforms", 
      description: "Flexible and efficient platforms for seamless operations across your entire network.", 
      iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" 
    },
    { 
      title: "Live end to end supply chain visibility", 
      description: "Real-time tracking and monitoring providing transparency across the entire chain.", 
      iconPath: "M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" 
    },
    { 
      title: "Customized portals to customer communications", 
      description: "Tailored interfaces designed to streamline and enhance client interaction.", 
      iconPath: "M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" 
    },
    { 
      title: "Tools to automate customer communications", 
      description: "Automated systems ensuring timely, accurate, and consistent updates.", 
      iconPath: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" 
    },
    { 
      title: "Real time business intelligence reporting", 
      description: "Instant insights and analytics empowering data-driven decision making.", 
      iconPath: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" 
    },
  ];

  const values = [
    { title: "Strive for excellence", icon: "M13 10V3L4 14h7v7l9-11h-7z" },
    { title: "Adapt & learn industry practices", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
    { title: "Open & honest communications", icon: "M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" },
    { title: "Embrace innovation", icon: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" },
  ];

  return (
    <section className="bg-[#0B3B4A] text-white font-sans relative overflow-hidden">
      
      {/* Background Texture/Image */}
      <div 
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center mix-blend-overlay"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1554869584-367097e35b0b?q=80&w=2500&auto=format&fit=crop')" }}
      />
      
      <div className="container mx-auto max-w-[1400px] relative z-10">
        
        {/* Header Section */}
        <div className="pt-20 pb-12 px-8 border-b border-teal-500/30">
          <div className="max-w-4xl">
            <span className="block text-teal-400 font-bold tracking-wider text-sm mb-4 uppercase">
              Digital Logistics Solutions
            </span>
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
              OGL - Digital Logistics
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-2xl">
              It's our solution-based logistics services coupled with the best technology that makes us standout. We believe in providing the right services using the right tools at the right time.
            </p>
          </div>
        </div>

        {/* Feature Grid - Dark Teal Style with Large Arrows */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 border-l border-teal-500/30">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative min-h-[450px] p-8 flex flex-col justify-end border-r border-b border-teal-500/30 hover:bg-white/5 transition-all duration-300"
            >
              {/* Large Arrow (Top Right) */}
              <div className="absolute top-6 right-6 text-teal-500/30 group-hover:text-teal-400 transition-colors duration-500">
                <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M7 17L17 7" />
                  <path d="M7 7h10v10" />
                </svg>
              </div>

              {/* Service Icon (Small, above text) */}
              <div className="mb-6 text-teal-400 w-10 h-10 opacity-80 group-hover:opacity-100 transition-opacity">
                 <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={feature.iconPath} />
                  </svg>
              </div>

              {/* Text Content */}
              <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-3 leading-snug text-white group-hover:text-teal-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Core Values Section - Adapted to Dark Theme */}
        <div className="py-20 px-4">
          <div className="mb-12 text-center">
             <span className="text-teal-400 font-bold tracking-wider text-sm uppercase mb-3 block">Our DNA</span>
             <h3 className="text-3xl font-bold text-white">Core Values</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {values.map((val, idx) => (
              <div key={idx} className="group bg-[#062c38] p-10 rounded-[2rem] border border-teal-500/20 hover:border-teal-400 hover:bg-[#083542] transition-all duration-300 cursor-default">
                <div className="w-14 h-14 mb-6 text-teal-400 group-hover:text-white transition-colors duration-300">
                   <svg className="w-full h-full" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={val.icon} />
                   </svg>
                </div>
                <h4 className="text-white text-lg font-bold">
                  {val.title}
                </h4>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
             <p className="text-gray-400">
               Become our next partner. <a href="#" className="text-teal-400 hover:text-white font-bold ml-1 transition-colors">Let's Talk!</a>
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CoreValues;
