// Textes de la carte du ciel (StarMap) : interface FR / EN et traduction anglaise du catalogue.

const sunAlt = (alt: string) => ({
  fr: `Le Soleil est encore au-dessus de l'horizon (${alt}°). Les étoiles ne sont pas encore visibles.`,
  en: `The Sun is still above the horizon (${alt}°). The stars are not visible yet.`
});

export const STARMAP_UI = {
  fr: {
    dateLocale: 'fr-FR',
    planets: { mercury: 'Mercure', venus: 'Vénus', mars: 'Mars', jupiter: 'Jupiter', saturn: 'Saturne' } as Record<string, string>,
    planetDesc: {
      mercury: "Difficile à observer car toujours proche du Soleil. Cherchez-le au crépuscule, bas sur l'horizon.",
      venus: "La plus brillante des planètes ! Trop éblouissante pour voir des détails, mais magnifique à l'œil nu et à la lunette.",
      mars: "Reconnaissable à sa teinte rouge-orangée. En période d'opposition, on peut deviner ses calottes polaires.",
      jupiter: 'La plus grande planète du système solaire ! Avec la Lumi, cherchez les 4 lunes galiléennes (petits points alignés).',
      saturn: 'Les anneaux sont visibles même à 10×, une découverte mémorable pour tout débutant !'
    } as Record<string, string>,
    sun: 'Soleil',
    sunDesc: "Notre étoile. Ne jamais observer à l'œil nu ou avec un instrument sans filtre solaire adapté.",
    moon: 'Lune',
    moonDesc: 'Cible n°1 pour débuter ! Observez les cratères, les mers (grandes plaines sombres) et les chaînes de montagnes. Idéale aux phases croissante et décroissante.',
    // Points cardinaux dessinés sur la carte (clés = notation française d'origine)
    directions: {} as Record<string, string>,
    typeLabels: {
      moon: 'Lune', planet: 'Planètes', neb: 'Nébuleuses',
      oc: 'Amas ouverts', gc: 'Amas globulaires', gal: 'Galaxies', db: 'Étoiles doubles'
    } as Record<string, string>,
    sidebarEmpty: 'Génère la carte pour voir les objets visibles.',
    infoSunUp: (alt: string) => sunAlt(alt).fr,
    infoCivil: "Crépuscule civil : le ciel commence à s'assombrir.",
    infoNautical: 'Crépuscule nautique : bonnes conditions pour les étoiles brillantes.',
    infoNight: 'Nuit astronomique : toutes les étoiles sont visibles.',
    myPosition: 'Ma position',
    located: '✓ Localisé',
    generating: 'Génération…',
    printTitle: 'Carte du ciel',
    printDirections: 'N = Nord  ·  E = Est  ·  S = Sud  ·  O = Ouest  (vue depuis le sol, Nord en haut)',
    printTypes: ['Nébuleuse', 'Amas ouvert', 'Amas globulaire', 'Galaxie', 'Étoile double'],
    printFooter: 'la3emedim.fr · Lunette astronomique Lumi',
    printFile: 'carte-du-ciel-lumi.png',
    printButton: 'Imprimer A4 N&B'
  },
  en: {
    dateLocale: 'en-GB',
    planets: { mercury: 'Mercury', venus: 'Venus', mars: 'Mars', jupiter: 'Jupiter', saturn: 'Saturn' } as Record<string, string>,
    planetDesc: {
      mercury: 'Hard to observe because it always stays close to the Sun. Look for it at twilight, low on the horizon.',
      venus: 'The brightest planet! Too dazzling to show details, but beautiful to the naked eye and in a refractor.',
      mars: 'Recognisable by its reddish-orange colour. Around opposition you can make out its polar caps.',
      jupiter: 'The largest planet in the Solar System! With the Lumi, look for the 4 Galilean moons (small aligned dots).',
      saturn: 'The rings are visible even at 10×, an unforgettable sight for any beginner!'
    } as Record<string, string>,
    sun: 'Sun',
    sunDesc: 'Our star. Never observe it with the naked eye or with an instrument without a proper solar filter.',
    moon: 'Moon',
    moonDesc: 'Target no. 1 for beginners! Observe the craters, the seas (large dark plains) and the mountain ranges. Best during the waxing and waning phases.',
    directions: { O: 'W', SO: 'SW', NO: 'NW' } as Record<string, string>,
    typeLabels: {
      moon: 'Moon', planet: 'Planets', neb: 'Nebulae',
      oc: 'Open clusters', gc: 'Globular clusters', gal: 'Galaxies', db: 'Double stars'
    } as Record<string, string>,
    sidebarEmpty: 'Generate the chart to see the visible objects.',
    infoSunUp: (alt: string) => sunAlt(alt).en,
    infoCivil: 'Civil twilight: the sky is starting to darken.',
    infoNautical: 'Nautical twilight: good conditions for bright stars.',
    infoNight: 'Astronomical night: all the stars are visible.',
    myPosition: 'My location',
    located: '✓ Located',
    generating: 'Generating…',
    printTitle: 'Sky chart',
    printDirections: 'N = North  ·  E = East  ·  S = South  ·  W = West  (seen from the ground, North at the top)',
    printTypes: ['Nebula', 'Open cluster', 'Globular cluster', 'Galaxy', 'Double star'],
    printFooter: 'la3emedim.fr · Lumi astronomical refractor',
    printFile: 'sky-chart-lumi.png',
    printButton: 'Print A4 B&W'
  }
};

export type StarmapLang = keyof typeof STARMAP_UI;

// ─── Catalogue : noms propres, constellations et phrases des descriptions

const NAMES_EN: Record<string, string> = {
  'Amas de Ptolémée': 'Ptolemy Cluster',
  'Canard Sauvage': 'Wild Duck Cluster',
  'Double Amas de Persée': 'Double Cluster in Perseus',
  "Galaxie d'Andromède": 'Andromeda Galaxy',
  'Galaxie de Bode': "Bode's Galaxy",
  "Galaxie de l'Œil Noir": 'Black Eye Galaxy',
  'Galaxie du Cigare': 'Cigar Galaxy',
  'Galaxie du Moulinet Austral': 'Southern Pinwheel Galaxy',
  'Galaxie du Sombrero': 'Sombrero Galaxy',
  'Galaxie du Tourbillon': 'Whirlpool Galaxy',
  'Galaxie du Tournesol': 'Sunflower Galaxy',
  'Galaxie du Triangle': 'Triangulum Galaxy',
  "Grand Amas d'Hercule": 'Great Hercules Cluster',
  'Les Pléiades': 'The Pleiades',
  'Nébuleuse Haltère': 'Dumbbell Nebula',
  'Nébuleuse Oméga': 'Omega Nebula',
  'Nébuleuse Trifide': 'Trifid Nebula',
  "Nébuleuse d'Orion": 'Orion Nebula',
  'Nébuleuse de Mairan': "De Mairan's Nebula",
  "Nébuleuse de l'Aigle": 'Eagle Nebula',
  "Nébuleuse de l'Anneau": 'Ring Nebula',
  'Nébuleuse de la Lagune': 'Lagoon Nebula',
  'Nébuleuse du Crabe': 'Crab Nebula',
  'Nébuleuse du Hibou': 'Owl Nebula',
  'Papillon': 'Butterfly Cluster',
  'Petit Nuage du Sagittaire': 'Small Sagittarius Star Cloud',
  'Petite Nébuleuse Haltère': 'Little Dumbbell Nebula',
  'Ruche': 'Beehive Cluster',
  'Étoile double': 'Double star',
  'Étoiles doubles': 'Double stars'
};

const CONSTELLATIONS_EN: Record<string, string> = {
  "d'Andromède": 'Andromeda', "d'Ophiuchus": 'Ophiuchus', "d'Orion": 'Orion',
  'de Cassiopée': 'Cassiopeia', 'de Persée': 'Perseus', 'de Pégase': 'Pegasus',
  "de l'Hydre": 'Hydra', "de l'Écu de Sobieski": 'Scutum', 'de la Baleine': 'Cetus',
  'de la Chevelure de Bérénice': 'Coma Berenices', 'de la Flèche': 'Sagitta',
  'de la Grande Ourse': 'Ursa Major', 'de la Licorne': 'Monoceros', 'de la Lyre': 'Lyra',
  'de la Poupe': 'Puppis', 'de la Vierge': 'Virgo', 'des Chiens de Chasse': 'Canes Venatici',
  'des Poissons': 'Pisces', 'du Cancer': 'Cancer', 'du Capricorne': 'Capricornus',
  'du Cygne': 'Cygnus', 'du Grand Chien': 'Canis Major', 'du Lion': 'Leo', 'du Lièvre': 'Lepus',
  'du Sagittaire': 'Sagittarius', 'du Scorpion': 'Scorpius', 'du Serpent': 'Serpens',
  'du Taureau': 'Taurus', 'du Verseau': 'Aquarius'
};

const SENTENCES_EN: Record<string, string> = {
  'Cible plus discrète : privilégiez un ciel sans lune.': 'A fainter target: choose a moonless night.',
  'Bien visible à la lunette, dès un petit instrument.': 'Easy to see in a refractor, even a small one.',
  'Facilement repérable aux jumelles.': 'Easy to find with binoculars.',
  'Repérable comme une lueur allongée sur fond de ciel noir.': 'Visible as an elongated glow against a dark sky.',
  "Une tache floue et diffuse dans l'oculaire, mais on regarde des milliards d'étoiles.": 'A faint fuzzy patch in the eyepiece, yet you are looking at billions of stars.',
  "Une lointaine île de centaines de milliards d'étoiles.": 'A distant island of hundreds of billions of stars.',
  "Une boule d'étoiles compacte, parmi les objets les plus anciens de la galaxie.": 'A compact ball of stars, among the oldest objects in the Galaxy.',
  'Cible exigeante, réservée à un ciel bien noir et un instrument plus puissant.': 'A challenging target, for a very dark sky and a larger instrument.',
  'Un des objets les plus spectaculaires du ciel profond, même dans un petit instrument.': 'One of the most spectacular deep-sky objects, even in a small instrument.',
  "Une sphère dense de centaines de milliers d'étoiles anciennes.": 'A dense sphere of hundreds of thousands of old stars.',
  "Un joli semis d'étoiles à explorer au faible grossissement.": 'A pretty scattering of stars to explore at low magnification.',
  "Un groupe d'étoiles nées ensemble, encore liées gravitationnellement.": 'A group of stars born together and still bound by gravity.',
  "Un amas d'étoiles jeunes, souvent bleutées.": 'A cluster of young, often bluish stars.',
  "Visible à l'œil nu sous un ciel dégagé.": 'Visible to the naked eye under a clear sky.',
  'Une lueur diffuse qui demande un ciel bien noir pour se révéler.': 'A diffuse glow that needs a really dark sky to show itself.',
  'Un nuage de gaz qui trahit une naissance ou une mort stellaire.': 'A cloud of gas that marks the birth or death of stars.',
  "Un nuage de gaz interstellaire, berceau ou vestige d'étoiles.": 'A cloud of interstellar gas, a cradle or remnant of stars.',
  'Grande nébuleuse planétaire dans le Petit Renard, visible comme une tache floue ovale.': 'A large planetary nebula in Vulpecula, visible as an oval fuzzy patch.',
  'Grande nébuleuse où naissent des étoiles.': 'A large nebula where stars are being born.',
  'Magnifique, même à faible grossissement.': 'Superb, even at low magnification.',
  'Amas en forme de papillon dans le Scorpion.': 'A butterfly-shaped cluster in Scorpius.',
  "Grand amas du Scorpion, connu depuis l'Antiquité.": 'A large cluster in Scorpius, known since Antiquity.',
  'Spectaculaire.': 'Spectacular.',
  "Dense amas ouvert de l'Écu de Sobieski.": 'A dense open cluster in Scutum.',
  "Des centaines d'étoiles dans un petit champ.": 'Hundreds of stars in a small field.',
  'Bel amas ouvert dans les Gémeaux.': 'A fine open cluster in Gemini.',
  'Amas ouvert brillant dans le Cocher.': 'A bright open cluster in Auriga.',
  'Le plus riche des trois amas du Cocher.': 'The richest of the three Auriga clusters.',
  'Amas ouvert dans le Cocher.': 'An open cluster in Auriga.',
  'Chercher M36 et M38 dans le même champ !': 'Look for M36 and M38 in the same field!',
  "L'Essaim d'Abeilles dans le Cancer.": 'The Beehive Cluster in Cancer.',
  'Bien résolu à 10×.': 'Well resolved at 10×.',
  'Bel amas de jeunes étoiles bleues.': 'A beautiful cluster of young blue stars.',
  'Le meilleur objet pour un premier instrument !': 'The best object for a first instrument!',
  'Magnifique amas globulaire dans les Chiens de Chasse.': 'A superb globular cluster in Canes Venatici.',
  'Splendide amas globulaire dans le Serpent, rival de M13.': 'A splendid globular cluster in Serpens, a rival to M13.',
  'Le plus beau globulaire du ciel boréal.': 'The finest globular cluster in the northern sky.',
  "Des centaines de milliers d'étoiles.": 'Hundreds of thousands of stars.',
  "Second globulaire d'Hercule, souvent négligé mais très beau.": "Hercules' second globular cluster, often overlooked but very beautiful.",
  "Notre voisine à 2,5 millions d'a.l.": 'Our neighbour, 2.5 million light-years away.',
  'Visible comme une tache floue allongée.': 'Visible as an elongated fuzzy patch.',
  'Chercher aussi M32 et M110 à côté.': 'Also look for M32 and M110 nearby.',
  'Grande galaxie spirale de face.': 'A large face-on spiral galaxy.',
  'Requiert une nuit très noire.': 'Needs a very dark night.',
  'Galaxie lenticulaire dans le Dragon.': 'A lenticular galaxy in Draco.',
  'Son identité a longtemps fait débat : elle pourrait être une redécouverte de M101.': 'Its identity was long debated: it may be a rediscovery of M101.',
  "Étoile double, l'un des objets les plus discrets du catalogue de Messier.": 'A double star, one of the faintest objects in the Messier catalogue.',
  'Deux étoiles alignées par hasard, sans lien physique réel.': 'Two stars aligned by chance, with no real physical link.',
  'Deux amas jumeaux côte à côte dans Persée, superbes dans le même champ.': 'Twin clusters side by side in Perseus, superb in the same field.',
  'Le plus beau couple du ciel : une étoile dorée et une étoile bleu-turquoise.': 'The most beautiful pair in the sky: a golden star and a turquoise-blue star.',
  "Célèbre couple de la Grande Ourse, facilement séparé à l'œil nu ou à la lunette.": 'A famous pair in Ursa Major, easily split with the naked eye or a refractor.'
};

function nameEn(name: string): string {
  const i = name.indexOf(': ');
  if (i < 0) return NAMES_EN[name] ?? name;
  const rest = name.slice(i + 2);
  return `${name.slice(0, i)}: ${NAMES_EN[rest] ?? rest}`;
}

function descEn(desc: string): string {
  // Découpe en phrases (sans lookbehind, pour les anciens Safari)
  return desc
    .replace(/([.!])\s+/g, '$1\n')
    .split('\n')
    .map((sentence) => {
      const m = sentence.match(/^Dans la constellation (.*)\.$/);
      if (m) return `In the constellation ${CONSTELLATIONS_EN[m[1]] ?? m[1]}.`;
      return SENTENCES_EN[sentence] ?? sentence;
    })
    .join(' ');
}

/** Traduit en place le catalogue d'objets du ciel profond : [ra, dec, nom, type, description]. */
export function translateDsoToEnglish(dso: [number, number, string, string, string][]) {
  for (const row of dso) {
    row[2] = nameEn(row[2]);
    row[4] = descEn(row[4]);
  }
}
