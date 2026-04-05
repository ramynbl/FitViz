import styles from './Button.module.css';

/**
 * Bouton réutilisable avec deux variantes :
 * - primary : fond vert, texte sombre
 * - secondary : transparent avec bordure verte, texte vert
 */
export default function Button({ children, variant = 'primary', onClick, href, disabled }) {
  const className = `${styles.button} ${styles[variant]} ${disabled ? styles.disabled : ''}`;

  // Si un href est fourni, on rend un lien stylé comme un bouton
  if (href) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <button className={className} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
}
