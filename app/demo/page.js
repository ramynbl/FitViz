'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar/Navbar';
import TryOn from '@/components/TryOn/TryOn';
import Footer from '@/components/Footer/Footer';
import styles from './page.module.css';

export default function DemoPage() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Parallax effects for Demo Page background only
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);

  return (
    <div ref={containerRef}>
      <Navbar />
      <div className={styles.demoPage}>
        {/* Background image with parallax */}
        <motion.img
          src="/background-2.png"
          alt=""
          className={styles.bgImage}
          style={{ y: bgY, scale: 1.05, willChange: "transform" }}
        />
        <div className={styles.overlay} />

        {/* Liquid Glass Container (Entrance animation ONLY, no continuous scroll drift) */}
        <motion.div 
          className={styles.glassContainer}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ willChange: "transform, opacity" }}
        >
          <TryOn />
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
