import { NextResponse } from 'next/server';
import { generateTryOnReplicate } from '@/lib/replicate';
import { generateTryOnHuggingFace } from '@/lib/huggingface';

/**
 * POST /api/tryon
 * Orchestre la génération IA avec turnover :
 * - Replicate en principal
 * - Hugging Face en fallback automatique
 */
export async function POST(request) {
  try {
    const body = await request.json();
    const { userImageUrl, clothImageUrl, modelChoice } = body;

    if (!userImageUrl || !clothImageUrl) {
      return NextResponse.json({ error: 'Missing image URLs' }, { status: 400 });
    }

    let resultUrl = null;
    let usedModel = modelChoice || 'replicate';

    // Si l'utilisateur choisit huggingface directement
    if (modelChoice === 'huggingface') {
      try {
        resultUrl = await generateTryOnHuggingFace(userImageUrl, clothImageUrl);
        usedModel = 'huggingface';
      } catch (hfError) {
        console.error('HuggingFace failed, trying Replicate as fallback:', hfError.message);
        // Fallback vers Replicate
        resultUrl = await generateTryOnReplicate(userImageUrl, clothImageUrl);
        usedModel = 'replicate (fallback)';
      }
    } else {
      // Default : Replicate en principal, HuggingFace en fallback
      try {
        resultUrl = await generateTryOnReplicate(userImageUrl, clothImageUrl);
        usedModel = 'replicate';
      } catch (repError) {
        console.error('Replicate failed, trying HuggingFace as fallback:', repError.message);
        // Turnover → Hugging Face en backup
        resultUrl = await generateTryOnHuggingFace(userImageUrl, clothImageUrl);
        usedModel = 'huggingface (fallback)';
      }
    }

    if (!resultUrl) {
      throw new Error('Generation failed, no URL returned from either model');
    }

    return NextResponse.json({ generatedImageUrl: resultUrl, model: usedModel }, { status: 200 });
  } catch (error) {
    console.error('TryOn generation error:', error);
    return NextResponse.json(
      { error: error.message || 'La génération a échoué sur les deux modèles.' },
      { status: 500 }
    );
  }
}
