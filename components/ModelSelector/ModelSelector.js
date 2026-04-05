'use client';

import styles from './ModelSelector.module.css';

/**
 * Dropdown pour choisir le modèle IA
 * - Replicate (principal)
 * - Hugging Face (fallback)
 */
export default function ModelSelector({ value, onChange }) {
  return (
    <div className={styles.wrapper}>
      <label htmlFor="model-select" className={styles.label}>
        Modèle IA
      </label>
      <select
        id="model-select"
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <option value="replicate">Replicate</option>
        <option value="huggingface">Hugging Face</option>
      </select>
    </div>
  );
}
