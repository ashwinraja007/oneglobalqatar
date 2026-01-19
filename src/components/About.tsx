import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE – LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/ship.png"
                alt="One Global Logistics Office Environment"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT – RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            {/* Title – same size as body */}
            <h2 className="font-heading text-sm md:text-base font-semibold text-foreground mb-4 leading-relaxed">
              About Us
            </h2>

            {/* Description – same size */}
            <p className="font-body text-sm md:text-base text-black leading-relaxed max-w-xl">
              <strong>One Global Logistics Services W.L.L</strong> is a Qatar based global <strong>NVOCC</strong> (Non-vessel owned common carrier) operator providing LCL consolidation services worldwide. OGL is supported by an experienced team managing dedicated trade lanes with complete transparency and commitment. Backed by a trusted global agent network, we are positioned as one of the fast-growing consolidators based in Qatar. We provide secured end-to-end LCL services exclusively to Freight Forwarding and Logistics companies, ensuring trust and avoiding direct customer business.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
