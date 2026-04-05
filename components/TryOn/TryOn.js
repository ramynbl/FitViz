'use client';

import { useState } from 'react';
import styles from './TryOn.module.css';
import ImageUploader from '@/components/ImageUploader/ImageUploader';
import ModelSelector from '@/components/ModelSelector/ModelSelector';
import ResultPreview from '@/components/ResultPreview/ResultPreview';
import Button from '@/components/Button/Button';

/**
 * Section Try-On : orchestrateur principal
 * - Gère l'état local (images, modèle, résultat, loading, erreur)
 * - Compose les sous-composants en grille 3 colonnes
 * - Le handleGenerate sera connecté au backend en Phase 7
 */
export default function TryOn() {
  const [userImage, setUserImage] = useState(null);
  const [clothImage, setClothImage] = useState(null);
  const [modelChoice, setModelChoice] = useState('replicate');
  const [result, setResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function handleGenerate() {
    try {
      setIsLoading(true);
      setError(null);
      setResult(null);

      // Upload human image
      const humanFormData = new FormData();
      humanFormData.append('file', userImage);
      const resHuman = await fetch('/api/upload', {
        method: 'POST',
        body: humanFormData,
      });
      if (!resHuman.ok) throw new Error("Erreur d\'upload (photo)");
      const dataHuman = await resHuman.json();

      // Upload cloth image
      const clothFormData = new FormData();
      clothFormData.append('file', clothImage);
      const resCloth = await fetch('/api/upload', {
        method: 'POST',
        body: clothFormData,
      });
      if (!resCloth.ok) throw new Error("Erreur d\'upload (vêtement)");
      const dataCloth = await resCloth.json();

      // Generation (API Try-On)
      const resTryon = await fetch('/api/tryon', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userImageUrl: dataHuman.url,
          clothImageUrl: dataCloth.url,
          modelChoice,
        }),
      });
      
      const dataTryon = await resTryon.json();
      if (!resTryon.ok) throw new Error(dataTryon.error || "Erreur de génération");

      setResult(dataTryon.generatedImageUrl);
    } catch (err) {
      console.error(err);
      setError(err.message || 'Une erreur est survenue');
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <section className={styles.tryon} id="tryon">
      <h2 className={styles.title}>Essayez virtuellement</h2>
      <p className={styles.subtitle}>
        Uploadez votre photo et un vêtement, puis laissez l&apos;IA faire le reste.
      </p>

      <div className={styles.grid}>
        {/* Colonne 1 : Photo utilisateur */}
        <div className={styles.column}>
          <ImageUploader
            label="Votre photo"
            onImageSelected={setUserImage}
          />
        </div>

        {/* Colonne 2 : Vêtement + sélecteur + bouton */}
        <div className={styles.column}>
          <ImageUploader
            label="Vêtement"
            onImageSelected={setClothImage}
          />
          <ModelSelector
            value={modelChoice}
            onChange={setModelChoice}
          />
          <Button
            variant="primary"
            onClick={handleGenerate}
            disabled={!userImage || !clothImage || isLoading}
          >
            {isLoading ? 'Génération...' : 'Générer'}
          </Button>
        </div>

        {/* Colonne 3 : Résultat */}
        <div className={styles.column}>
          <ResultPreview
            imageUrl={result}
            isLoading={isLoading}
            error={error}
          />
        </div>
      </div>
    </section>
  );
}
