import styles from './Footer.module.css';

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
                <a href="#">Linkedin</a>
                <a href="#">Instagram</a>
              </div>
            </div>

            <div className={styles.column}>
              <h4 className={styles.columnTitle}>Contact</h4>
              <div className={styles.columnLinks}>
                <a href="mailto:fitviz@mail.com">fitviz@mail.com</a>
              </div>
            </div>
          </div>

          <div className={styles.brandCluster}>
            <span className={styles.logo}>FitViz</span>
            <div className={styles.legalLinks}>
              <p>Mentions légales</p>
              <p>Conditions Générales de Vente</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
