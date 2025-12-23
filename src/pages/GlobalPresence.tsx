import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MapContainer from '@/components/MapContainer';
import Sidebar from '@/components/Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const GlobalPresence = () => {
  const isMobile = useIsMobile();
  const [showMap, setShowMap] = useState(true);

  useEffect(() => {
    if (isMobile) {
      setShowMap(false);
    } else {
      setShowMap(true);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* HEADER (normal flow – NOT fixed) */}
      <Header />

      {/* MAIN CONTENT – NO TOP GAP */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="flex flex-1 w-full overflow-hidden"
      >
        {/* MAP */}
        {(!isMobile || showMap) && (
          <motion.main
            initial={isMobile ? { x: '100%' } : false}
            animate={isMobile ? { x: 0 } : false}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className={`h-full ${isMobile ? 'w-full' : 'w-[65%]'}`}
          >
            {/* IMPORTANT: no padding / margin wrapper */}
            <MapContainer />
          </motion.main>
        )}

        {/* SIDEBAR */}
        {(!isMobile || !showMap) && (
          <motion.aside
            initial={isMobile ? { x: '-100%' } : false}
            animate={isMobile ? { x: 0 } : false}
            transition={{ type: 'spring', stiffness: 260, damping: 28 }}
            className={`h-full bg-white ${isMobile ? 'w-full' : 'w-[35%]'}`}
          >
            <Sidebar isOpen={true} onClose={() => {}} />
          </motion.aside>
        )}
      </motion.div>

      <Footer />
    </div>
  );
};

export default GlobalPresence;
