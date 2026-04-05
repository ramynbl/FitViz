'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import styles from './Reassurance.module.css';

const cardVariants = {
  hidden: { opacity: 0, y: 60 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.7,
      ease: [0.25, 0.8, 0.25, 1],
    },
  }),
};

export default function Reassurance() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  // Parallax: image drifts slightly upward
  const imageY = useTransform(scrollYProgress, [0, 1], ['5%', '-5%']);

  return (
    <section className={styles.section} id="about" ref={sectionRef}>
      <div className={styles.container}>

        {/* Zone Graphique Centrale */}
        <div className={styles.graphicsArea}>
          <motion.img
            src="/background-2.png"
            alt="Reassurance Background"
            className={styles.centerImage}
            style={{ y: imageY, willChange: "transform" }}
          />

          {/* Cartes Flottantes avec animation d'entrée */}
          <motion.div
            className={`${styles.card} ${styles.cardTopLeft}`}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={0}
          >
            <h3>Essayage virtuel</h3>
            <p>Vos clients visualisent chaque vêtement sur eux avant d&#39;acheter. Fini les doutes, place à la confiance.</p>
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.cardTopRight}`}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={1}
          >
            <h3 className={styles.percentText}>-40%</h3>
            <p>de retours produits en moyenne grâce à une recommandation de taille fiable et personnalisée.</p>
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.cardBottomLeft}`}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={2}
          >
            <h3>Intégration simple</h3>
            <p>Plug &amp; play sur Shopify et WooCommerce. Aucune ligne de code requise. En ligne en quelques minutes.</p>
          </motion.div>

          <motion.div
            className={`${styles.card} ${styles.cardBottomRight}`}
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            custom={3}
          >
            <h3 className={styles.percentText}>+27%</h3>
            <p>de conversion sur les fiches produits équipées de notre essayage virtuel intelligent.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
