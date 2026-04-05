import styles from './Reassurance.module.css';

export default function Reassurance() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        {/* Titre Principal */}
        <div className={styles.header}>
          <h2 className={styles.title}>Texte qui<br/>rassure grave</h2>
          <p className={styles.subtitle}>
            Je suis un texte descriptif qui apporte plus de précisions<br/>
            si nécessaire blabla blabla
          </p>
        </div>

        {/* Zone Graphique Centrale */}
        <div className={styles.graphicsArea}>
          <img 
            src="/background-2.png" 
            alt="Reassurance Background" 
            className={styles.centerImage} 
          />
          
          {/* Cartes Flottantes en Liquid Glass */}
          <div className={`${styles.card} ${styles.cardTopLeft}`}>
            <h3>Ajustement</h3>
            <p>Je suis un texte descriptif qui apporte plus de précisions si nécessaire</p>
          </div>
          
          <div className={`${styles.card} ${styles.cardTopRight}`}>
            <h3 className={styles.percentText}>13%</h3>
            <p>Je suis un texte descriptif qui apporte plus de précisions si nécessaire</p>
          </div>

          <div className={`${styles.card} ${styles.cardBottomLeft}`}>
            <h3>Précision</h3>
            <p>Je suis un texte descriptif qui apporte plus de précisions si nécessaire</p>
          </div>

          <div className={`${styles.card} ${styles.cardBottomRight}`}>
            <h3 className={styles.percentText}>99%</h3>
            <p>Je suis un texte descriptif qui apporte plus de précisions si nécessaire blabla blabla</p>
          </div>
        </div>
      </div>
    </section>
  );
}
