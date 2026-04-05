import styles from './Hero.module.css';
import Button from '@/components/Button/Button';

export default function Hero() {
  return (
    <section className={styles.hero}>
      {/* Background Video */}
      <video
        className={styles.videoBg}
        src="/background.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay to ensure text readability */}
      <div className={styles.overlay} />

      <div className={styles.content}>
        <h1 className={styles.title}>
          Essayez avant
          <br />
          d'acheter. Visualisez
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
      </div>
    </section>
  );
}
