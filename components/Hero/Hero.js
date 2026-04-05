'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from './Hero.module.css';
import Button from '@/components/Button/Button';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  // Parallax: content moves up faster
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '-30%']);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section className={styles.hero} ref={ref}>
      {/* Background Video */}
      <video
        className={styles.videoBg}
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div className={styles.overlay} />

      {/* Content with parallax upward drift + fade */}
      <motion.div
        className={styles.content}
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <h1 className={styles.title}>
          Essayez avant
          <br />
          d&#39;acheter. Visualisez
          <br />
          votre <span className={styles.highlight}>style.</span>
        </h1>
        <p className={styles.subtitle}>
          Une API de virtual try-on pour les plateformes e-commerce.
        </p>
        <div className={styles.actions}>
          <Button variant="greenPill" href="/demo">
            Démo
          </Button>
          <Button variant="liquidGlass" href="#pricing">
            Tarifs
          </Button>
        </div>
      </motion.div>
    </section>
  );
}
