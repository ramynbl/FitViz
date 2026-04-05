'use client';

import { useState, useEffect } from 'react';
import styles from './ResultPreview.module.css';

/**
 * Affiche le résultat de la génération IA
 * 4 états possibles :
 * - Vide : placeholder "Le résultat apparaîtra ici"
 * - Loading : spinner + message
 * - Résultat : image générée
 * - Erreur : message d'erreur
 */
export default function ResultPreview({ imageUrl, isLoading, error }) {
  const [showLongWaitHint, setShowLongWaitHint] = useState(false);

  useEffect(() => {
    let timeout;
    if (isLoading) {
      timeout = setTimeout(() => {
        setShowLongWaitHint(true);
      }, 10000);
    } else {
      setShowLongWaitHint(false);
    }
    return () => clearTimeout(timeout);
  }, [isLoading]);

  return (
    <div className={styles.preview}>
      {isLoading ? (
        // État : chargement en cours
        <div className={styles.loadingState}>
          <div className={styles.spinner} />
          <p className={styles.loadingText}>Génération en cours...</p>
          {showLongWaitHint && (
            <p className={styles.loadingHint}>Cela peut prendre jusqu&apos;à 60 secondes</p>
          )}
        </div>
      ) : error ? (
        // État : erreur
        <div className={styles.errorState}>
          <svg className={styles.errorIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <circle cx="12" cy="12" r="10" />
            <path d="M12 8v4m0 4h.01" strokeLinecap="round" />
          </svg>
          <p className={styles.errorText}>{error}</p>
        </div>
      ) : imageUrl ? (
        // État : résultat généré
        <div className={styles.resultState}>
          <img src={imageUrl} alt="Résultat du virtual try-on" className={styles.resultImage} />
        </div>
      ) : (
        // État : vide (par défaut)
        <div className={styles.emptyState}>
          <svg className={styles.emptyIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <path d="M21 15l-5-5L5 21" />
          </svg>
          <p className={styles.emptyText}>Le résultat apparaîtra ici</p>
        </div>
      )}
    </div>
  );
}
