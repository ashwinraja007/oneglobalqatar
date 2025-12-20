import React, { useState, useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import MapContainer from '@/components/MapContainer';
import Sidebar from '@/components/Sidebar';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const GlobalPresence = () => {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showMap, setShowMap] = useState(true);

  useEffect(() => {
    // Mobile: show sidebar first, Desktop: show both
    if (isMobile) {
      setShowMap(false);
      setIsSidebarOpen(true);
    } else {
      setShowMap(true);
      setIsSidebarOpen(true);
    }
  }, [isMobile]);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-amber-50/30 to-white">
      <Header />

      {/* MAIN CONTENT – NO EXTRA SPACE */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-1 relative overflow-hidden pt-[80px]" 
        // pt-[80px] = header height, no margin used
      >
        {/* Mobile page title */}
        {isMobile && (
          <div className="fixed top-[80px] left-0 right-0 z-30 bg-gradient-to-r from-amber-500 to-amber-400 p-3 text-white text-center shadow-md">
            <h1 className="text-lg font-bold">Global Presence</h1>
          </div>
        )}

        {/* MAP SECTION */}
        {(!isMobile || (isMobile && showMap)) && (
          <motion.main
            initial={isMobile ? { x: '100%' } : { opacity: 0 }}
            animate={isMobile ? { x: 0 } : { opacity: 1 }}
            exit={isMobile ? { x: '100%' } : { opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`h-full ${isMobile ? 'w-full' : 'w-[65%]'}`}
          >
            <MapContainer />
          </motion.main>
        )}

        {/* SIDEBAR SECTION */}
        {(!isMobile || (isMobile && !showMap)) && (
          <motion.aside
            initial={isMobile ? { x: '-100%' } : { opacity: 0 }}
            animate={isMobile ? { x: 0 } : { opacity: 1 }}
            exit={isMobile ? { x: '-100%' } : { opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className={`h-full bg-white ${isMobile ? 'w-full pt-14' : 'w-[35%]'}`}
          >
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
            />
          </motion.aside>
        )}
      </motion.div>

      <Footer />
    </div>
  );
};

export default GlobalPresence;
