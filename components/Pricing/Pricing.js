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

/**
 * Section Pricing : 3 cartes glassmorphism
 */
export default function Pricing() {
  return (
    <section className={styles.pricing} id="pricing">
      <h2 className={styles.title}>Pricing</h2>

      <div className={styles.grid}>
        <PricingCard
          title="Atelier"
          subtitle="Lancement et validation"
          price="4900€"
          features={atelierFeatures}
        />
        <PricingCard
          title="Maison"
          subtitle="Croissance & performance"
          price="12 900€"
          features={maisonFeatures}
          highlighted
        />
        <PricingCard
          title="Atelier"
          subtitle="Lancement et validation"
          price="4900€"
          features={atelierFeatures}
        />
      </div>
    </section>
  );
}
