import styles from './PricingCard.module.css';
import Button from '@/components/Button/Button';

/**
 * Carte de pricing individuelle
 * - highlighted : mise en valeur (carte du milieu)
 */
export default function PricingCard({ title, subtitle, price, features, highlighted = false }) {
  return (
    <div className={`${styles.card} ${highlighted ? styles.highlighted : ''}`}>
      <div className={styles.badge}>{title}</div>
      <p className={styles.subtitle}>{subtitle}</p>
      <p className={styles.price}>
        {price}<span className={styles.period}> / mois</span>
      </p>

      <ul className={styles.features}>
        {features.map((feature, index) => (
          <li key={index} className={styles.featureItem}>
            <img src="/icon.svg" alt="Check" className={styles.checkIcon} />
            {feature}
          </li>
        ))}
      </ul>

      <Button variant="whitePill">
        Commencer
      </Button>
    </div>
  );
}
