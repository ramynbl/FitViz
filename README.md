# FitViz

FitViz est une démo SaaS B2B de virtual try-on pour le e-commerce. Elle permet aux utilisateurs d'uploader une photo et un vêtement pour obtenir un aperçu généré par IA grâce à l'intégration de Replicate et Hugging Face.

## Prérequis

- Node.js 18+
- Un compte [Cloudinary](https://cloudinary.com/) (pour le stockage des images temporaires)
- Un compte [Replicate](https://replicate.com/) et/ou [Hugging Face](https://huggingface.co/) (pour la génération d'images avec le modèle IDM-VTON)

## Installation et Setup

1. **Installer les dépendances :**
   ```bash
   npm install
   ```

2. **Configuration de l'environnement :**
   Copiez le fichier d'exemple pour créer votre fichier `.env.local` :
   ```bash
   cp .env.local.example .env.local
   ```
   Remplissez les variables d'environnement suivantes dans `.env.local` :
   - `REPLICATE_API_TOKEN` : Token API de Replicate.
   - `HUGGINGFACE_API_KEY` : Clé API Hugging Face.
   - `NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME` : Votre "Cloud Name" provenant du Dashboard Cloudinary.
   - `CLOUDINARY_API_KEY` : Votre clé API Cloudinary.
   - `CLOUDINARY_API_SECRET` : Votre secret Cloudinary.

3. **Lancer l'application :**
   ```bash
   npm run dev
   ```
   Ouvrez [http://localhost:3000](http://localhost:3000) dans votre navigateur pour voir le résultat.

## Utilisation

- La section **Hero** présente le projet.
- La section **Try-On** permet de télécharger deux images : la photo de l'utilisateur (haut du corps) et le vêtement souhaité.
- En cliquant sur "Générer", l'application effectue l'appel à l'API IA ciblée et affiche le résultat après le temps d'attente (jusqu'à ~60s selon le modèle).
- La section **Pricing** met en valeur les différents abonnements offerts par votre entreprise e-commerce SaaS.
