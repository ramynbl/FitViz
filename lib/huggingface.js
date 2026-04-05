import { Client } from '@gradio/client';

/**
 * Génération via Hugging Face Spaces (Gradio client)
 * Le modèle yisol/IDM-VTON est un Space Gradio, pas un modèle Inference API classique.
 * On utilise donc @gradio/client pour communiquer avec le Space.
 */
export async function generateTryOnHuggingFace(userImageUrl, clothImageUrl) {
  const hfToken = process.env.HUGGINGFACE_API_KEY;
  if (!hfToken) {
    throw new Error('HUGGINGFACE_API_KEY is not defined');
  }

  // Télécharger les images depuis leurs URLs Cloudinary
  const [humanResp, clothResp] = await Promise.all([
    fetch(userImageUrl),
    fetch(clothImageUrl),
  ]);

  if (!humanResp.ok || !clothResp.ok) {
    throw new Error('Failed to fetch images from Cloudinary URLs');
  }

  const humanBlob = await humanResp.blob();
  const clothBlob = await clothResp.blob();

  // Se connecter au Space HuggingFace
  const client = await Client.connect("yisol/IDM-VTON", {
    hf_token: hfToken,
  });

  // Appeler l'endpoint de prédiction du Space
  // L'interface Gradio de IDM-VTON attend :
  //   - dict (human image)
  //   - garm_img (garment image)  
  //   - garment_des (description)
  //   - is_checked (boolean)
  //   - is_checked_crop (boolean)
  //   - denoise_steps (int)
  //   - seed (int)
  const result = await client.predict("/tryon", [
    { "background": humanBlob, "layers": [], "composite": null }, // dict - human image
    clothBlob,            // garm_img
    "A piece of clothing", // garment_des
    true,                  // is_checked
    true,                  // is_checked_crop
    30,                    // denoise_steps
    42,                    // seed
  ]);

  // Le résultat contient typiquement un tableau avec l'URL de l'image
  if (result?.data) {
    const imgData = result.data[0];
    // Peut être un objet {url: ...} ou une string directe
    if (typeof imgData === 'string') return imgData;
    if (imgData?.url) return imgData.url;
    if (imgData?.path) return imgData.path;
  }

  throw new Error('HuggingFace Space returned unexpected data format');
}
