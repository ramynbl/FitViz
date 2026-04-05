'use client';

import { useState } from 'react';
import styles from './Navbar.module.css';

/**
 * Barre de navigation fixe
 * - Logo FitViz à gauche
 * - Liens de navigation à droite
 * - Menu burger sur mobile
 */
export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <a href="/" className={styles.logo}>FitViz</a>

        {/* Liens desktop */}
        <div className={`${styles.links} ${menuOpen ? styles.open : ''}`}>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="/demo" className={styles.demoBtn} onClick={() => setMenuOpen(false)}>Démo</a>
        </div>

        {/* Burger menu mobile */}
        <button
          className={`${styles.burger} ${menuOpen ? styles.burgerOpen : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
}
