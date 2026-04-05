import styles from './Contact.module.css';

/**
 * Section Contact / CTA
 */
export default function Contact() {
  return (
    <section className={styles.contact} id="contact">
      <h2 className={styles.title}>
        Une question ?
        <br />
        Contactez-nous
      </h2>
    </section>
  );
}
