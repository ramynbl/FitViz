'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import styles from './Pricing.module.css';
import PricingCard from '@/components/PricingCard/PricingCard';

const atelierFeatures = [
  "Jusqu'à 5 000 essayages / mois",
  '1 boutique connectée',
  'Plugin Shopify ou WooCommerce',
  'Avatar personnalisé (photos)',
  'Recommandation de taille',
  'Dashboard analytics basique',
  'Onboarding guidé inclus',
  'Support email (48h) + RGPD',
];

const maisonFeatures = [
  "Jusqu'à 25 000 essayages / mois",
  '5 boutiques connectées',
  'Tous CMS majeurs',
  'Avatar haute fidélité + morphologie IA',
  'Recommandation taille avancée',
  'Dashboard analytics complet',
  'Support prioritaire (24h)',
  'RGPD + audit conformité annuel',
];

export default function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section className={styles.pricing} id="pricing" ref={ref}>
      <motion.h2 
        className={styles.title}
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Pricing
      </motion.h2>

      <motion.div 
        className={styles.grid}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants}>
          <PricingCard
            title="Atelier"
            subtitle="Lancement et validation"
            price="4900€"
            features={atelierFeatures}
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <PricingCard
            title="Maison"
            subtitle="Croissance & performance"
            price="12 900€"
            features={maisonFeatures}
            highlighted
          />
        </motion.div>
        <motion.div variants={itemVariants}>
          <PricingCard
            title="Atelier"
            subtitle="Lancement et validation"
            price="4900€"
            features={atelierFeatures}
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
