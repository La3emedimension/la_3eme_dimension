import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const blog = await getCollection('work')
  return rss({
    // Champ `<title>` dans le fichier xml de sortie
    title: 'La 3ème dimension',
    // Champ `<description>` dans le fichier xml de sortie
    description: "Site de la 3ème dimension pour fabriquer et concevoir des objets en 3D imprimés",
    // Extraire la propriété "site" de votre projet dans le contexte du point de terminaison.
    // https://docs.astro.build/fr/reference/api-reference/#site
    site: context.site,
    // Tableau des `<item>`s dans la sortie xml
    // Voir la section "Génération d'éléments" pour des exemples utilisant des collections de contenu et des importations globales.
    items: [],
    // (optional) injecter du xml personnalisé
    customData: `<language>fr-fr</language>`,
  });
}