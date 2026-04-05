'use client';

import { useState, useRef } from 'react';
import styles from './ImageUploader.module.css';

const MAX_SIZE = 5 * 1024 * 1024; // 5MB
const ACCEPTED_TYPES = ['image/jpeg', 'image/png', 'image/webp'];

/**
 * Composant d'upload d'image avec drag-and-drop
 * - Affiche un aperçu local de l'image sélectionnée
 * - Valide la taille (max 5MB) et le type (jpg, png, webp)
 */
export default function ImageUploader({ label, onImageSelected }) {
  const [preview, setPreview] = useState(null);
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState(null);
  const inputRef = useRef(null);

  // Valide et traite le fichier sélectionné
  function handleFile(file) {
    setError(null);

    if (!ACCEPTED_TYPES.includes(file.type)) {
      setError('Format accepté : JPG, PNG ou WebP');
      return;
    }

    if (file.size > MAX_SIZE) {
      setError('Fichier trop lourd (max 5MB)');
      return;
    }

    // Créer un aperçu local
    const url = URL.createObjectURL(file);
    setPreview(url);
    onImageSelected(file);
  }

  // Clic sur la zone d'upload
  function handleClick() {
    inputRef.current?.click();
  }

  // Sélection via l'input file
  function handleChange(e) {
    const file = e.target.files?.[0];
    if (file) handleFile(file);
  }

  // Drag and drop handlers
  function handleDragOver(e) {
    e.preventDefault();
    setIsDragging(true);
  }

  function handleDragLeave(e) {
    e.preventDefault();
    setIsDragging(false);
  }

  function handleDrop(e) {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) handleFile(file);
  }

  return (
    <div
      className={`${styles.uploader} ${isDragging ? styles.dragging : ''} ${preview ? styles.hasPreview : ''}`}
      onClick={handleClick}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
    >
      {/* Input file caché */}
      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleChange}
        className={styles.input}
      />

      {preview ? (
        // Aperçu de l'image
        <div className={styles.previewContainer}>
          <img src={preview} alt={label} className={styles.previewImage} />
          <span className={styles.changeLabel}>Changer l&apos;image</span>
        </div>
      ) : (
        // Zone de drop vide
        <div className={styles.placeholder}>
          <svg className={styles.icon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 16V4m0 0l-4 4m4-4l4 4" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M2 17l.621 2.485A2 2 0 004.561 21h14.878a2 2 0 001.94-1.515L22 17" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <p className={styles.label}>{label}</p>
          <p className={styles.hint}>Glissez une image ou cliquez</p>
          <p className={styles.formats}>JPG, PNG, WebP · max 5MB</p>
        </div>
      )}

      {/* Message d'erreur */}
      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
}
