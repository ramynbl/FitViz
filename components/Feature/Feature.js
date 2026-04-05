import styles from './Feature.module.css';

/**
 * Section Feature : layout texte + image alternée
 * - reverse={true} inverse l'ordre (image à gauche)
 */
export default function Feature({ title, text1, text2, reverse = false }) {
  return (
    <section className={`${styles.feature} ${reverse ? styles.reverse : ''}`}>
      <div className={styles.textSide}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text1}</p>
        <p className={styles.text}>{text2}</p>
      </div>

      <div className={styles.imageSide}>
        <div className={styles.imagePlaceholder}>
          <p>Image en lien<br />avec le texte</p>
        </div>
      </div>
    </section>
  );
}
