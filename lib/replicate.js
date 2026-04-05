import Replicate from 'replicate';

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function generateTryOnReplicate(userImageUrl, clothImageUrl) {
  // Utiliser le nom du modèle sans version hash pour toujours utiliser la dernière version
  const output = await replicate.run(
    "cuuupid/idm-vton",
    {
      input: {
        crop: false,
        seed: 42,
        steps: 30,
        category: "upper_body",
        force_dc: false,
        garm_img: clothImageUrl,
        human_img: userImageUrl,
        garment_des: "A piece of clothing"
      }
    }
  );
  
  // Le modèle IDM-VTON renvoie typiquement l'URL de l'image générée
  if (typeof output === 'string') return output;
  if (Array.isArray(output) && output.length > 0) return output[0];
  // Certaines versions renvoient un objet ReadableStream ou FileOutput
  if (output?.url) return output.url();
  return String(output);
}
