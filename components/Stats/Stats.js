import styles from './Stats.module.css';

/**
 * Section Stats : grille 2x2 avec image centrale
 * - 4 cartes glassmorphism avec titre/description
 * - Image t-shirt au centre (placeholder)
 */
export default function Stats() {
  return (
    <section className={styles.stats} id="features">
      <h2 className={styles.title}>
        Texte qui
        <br />
        rassure grave
      </h2>
      <p className={styles.subtitle}>
        Je suis un texte descriptif qui apporte plus de précisions
        <br />
        si nécessaire blabla blabla
      </p>

      <div className={styles.gridWrapper}>
        {/* Image centrale */}
        <div className={styles.centerImage}>
          <div className={styles.tshirtPlaceholder}>
            <svg viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 30L10 50V60L30 55V130H90V55L110 60V50L90 30H75C75 40 67 48 60 48C53 48 45 40 45 30H30Z"
                fill="url(#tshirtGrad)" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
              <defs>
                <linearGradient id="tshirtGrad" x1="10" y1="30" x2="110" y2="130">
                  <stop offset="0%" stopColor="#9BF7C3" stopOpacity="0.6"/>
                  <stop offset="100%" stopColor="#7B77E1" stopOpacity="0.6"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>

        {/* Grille 2x2 de cartes */}
        <div className={styles.card} style={{ gridArea: 'topLeft' }}>
          <h3 className={styles.cardTitle}>titre</h3>
          <p className={styles.cardText}>
            Je suis un texte descriptif qui apporte plus de précisions.
          </p>
        </div>

        <div className={styles.card} style={{ gridArea: 'topRight' }}>
          <h3 className={styles.cardStat}>13%</h3>
          <p className={styles.cardText}>
            Je suis un texte descriptif qui apporte plus de précisions si nécessaire.
          </p>
        </div>

        <div className={styles.card} style={{ gridArea: 'bottomLeft' }}>
          <h3 className={styles.cardTitle}>titre</h3>
          <p className={styles.cardText}>
            Je suis un texte descriptif qui apporte plus de précisions.
          </p>
        </div>

        <div className={styles.card} style={{ gridArea: 'bottomRight' }}>
          <h3 className={styles.cardStat}>13%</h3>
          <p className={styles.cardText}>
            Je suis un texte descriptif qui apporte plus de précisions si nécessaire blabla blabla.
          </p>
        </div>
      </div>
    </section>
  );
}
