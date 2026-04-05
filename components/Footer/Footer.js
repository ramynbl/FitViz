import styles from './Footer.module.css';

const LINKEDIN_URL = 'https://www.linkedin.com/in/ramy-nebili/';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Huge Title */}
        <h2 className={styles.bigContactText}>
          Une question ?<br />Contactez-nous
        </h2>

        {/* Colonnes de liens et infos légales */}
        <div className={styles.bottomSection}>
          <div className={styles.columns}>
            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Service</h4>
              <div className={styles.columnLinks}>
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#about">About</a>
              </div>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Suivez-nous</h4>
              <div className={styles.columnLinks}>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">Linkedin</a>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Contact</h4>
              <div className={styles.columnLinks}>
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">fitviz@mail.com</a>
              </div>
            </div>
          </div>

          <div className={styles.brandCluster}>
            <span className={styles.logo}>FitViz</span>
            <div className={styles.legalLinks}>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">Mentions légales</a>
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">Conditions Générales de Vente</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
