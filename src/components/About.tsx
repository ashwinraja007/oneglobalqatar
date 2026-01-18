import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE – LEFT (HUBSPOT-STYLE CARD) */}
          <motion.div
            initial={{ opacity: 0, y: 48 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src="/ship.JPG"
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
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
              Our Mission: Helping Businesses <br />
              <span className="text-accent">Move Better</span>
            </h2>

            <p className="font-body text-base md:text-lg text-muted-foreground leading-relaxed max-w-xl">
              One Global Logistics Services W.L.L is a Qatar-based global NVOCC
              operator specializing in LCL consolidation services worldwide.
              We focus on transparency, reliability, and efficiency—aligning
              our logistics expertise with the growth and success of our
              customers.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
