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
            {/* BIG TITLE */}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-5 leading-tight">
              About Us
            </h2>

            {/* COMPACT BODY TEXT */}
            <p className="font-body text-sm md:text-base text-black leading-relaxed max-w-xl">
              <strong>One Global Logistics Services W.L.L</strong> is a Qatar based global <strong>NVOCC</strong> (Non-vessel owned common carrier) operator providing LCL consolidation services worldwide markets. We at OGL has a well experienced and established team with relevant experience in their own dedicated trade lanes supports our customers with all their special requirements with complete dedication and transparency.Our commitment to honest, transparent business practice and pricing, backed by a network of experienced and trusted agents, from around the world, makes us  one of the fast-growing consolidators based at Qatar. We are well positioned to manage your LCL business with full attention. We aimed at providing the secured end to end LCL services to the Freight Forwarding /Logistics Companies in Qatar, whereas we ensure to maintain the trust and not entertain direct customer business.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
