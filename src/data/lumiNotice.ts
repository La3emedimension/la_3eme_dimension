// Contenu de la notice Lumi (/lumi/ et /en/lumi/).
// Les médias sont communs aux deux langues ; seuls les textes sont traduits.
import type { Locale } from '../i18n';

const red = (n: number) => `<span style='color:red;font-weight:700;'>${n}</span>`;

// Animations (chemins sans extension, voir AnimVideo) et images de la notice classique
const stepMedia = [
  { image: '/assets/ERT_montage_1.png', animation: '/assets/notice/notice1' },
  { image: '/assets/ERT_montage_2.png', animation: '/assets/notice/notice2' },
  {
    animation: '/assets/notice/notice3',
    images: ['/assets/ERT_montage_3.png', '/assets/ERT_montage_3.1.png', '/assets/ERT_montage_5.png']
  },
  { image: '/assets/ERT_montage_6.png', animation: '/assets/notice/notice4' },
  { image: '/assets/ERT_montage_7.png', animation: '/assets/notice/notice5' },
  { image: '/assets/ERT_montage_9.png', animation: '/assets/notice/notice6' },
  { image: '/assets/ERT_montage_10.png', animation: '/assets/notice/notice7' }
];

const observationImages = [
  '/assets/Lune.png',
  '/assets/Jupiter.png',
  '/assets/la-nebuleuse-d-orion.png',
  '/assets/l-amas-d-hercule.png',
  '/assets/la-galaxie-d-andromede.png',
  '/assets/les-pleiades.png',
  '/assets/le-double-amas-de-persee.png'
];

const howToMedia = ['/assets/notice/trajet-lumiere', '/assets/notice/miseaupoint', '/assets/notice/chercheur'];

interface StepText {
  description: string;
  alt: string;
  // une légende par image quand l'étape en a plusieurs
  imageAlts?: string[];
}

interface PartText {
  title: string;
  alt: string;
  intro: string;
  steps: string[];
  tips: string[];
}

interface NoticeText {
  seoTitle: string;
  seoDescription: string;
  hero: { title: string; tagline: string; description: string; warning: string; ecoWarning: string };
  assembly: { title: string; subtitle: string; nextLabel: string; steps: StepText[] };
  howTo: { title: string; description: string; nextLabel: string; parts: PartText[] };
  observation: {
    title: string;
    description: string;
    nextLink?: { href: string; label: string };
    items: { title: string; description: string; alt: string }[];
    stellariumLink: string;
    stellariumText: string;
    skyMapLink?: string;
    skyMapText?: string;
    moonMapLink?: string;
    moonMapText?: string;
    discordText: string;
    mapLink: string;
    mapText: string;
  };
  // Cartes du ciel et de la Lune : interface encore en français uniquement
  starMap?: { title: string; description: string };
  moonMap?: { title: string; description: string };
  communityTitle: string;
  nav: Record<string, string>;
  snCard: { title: string; product: string; serial: string; date: string };
}

const text: Record<Locale, NoticeText> = {
  fr: {
    seoTitle: "Notice Lumi - Guide d'utilisation | La 3ème dimension",
    seoDescription: "Notice d'utilisation complète de la lunette astronomique Lumi. Guide de montage, conseils d'observation et informations techniques.",
    hero: {
      title: 'Notice Lumi',
      tagline: "Guide d'utilisation complet",
      description: "Notice d'utilisation de votre lunette astronomique éducative Lumi. Montage, réglages et conseils d'observation.",
      warning: '⚠️ ATTENTION : Ne jamais regarder le soleil directement avec cet instrument. Risque de lésions oculaires graves et irréversibles.',
      ecoWarning: '🌿 La Lumi est conçue en bioplastique, un matériau écologique et durable, mais comme tout plastique, il a ses limites face à la chaleur. Évitez de le laisser dans un véhicule en plein soleil par exemple, les pièces risquent de se déformer.'
    },
    assembly: {
      title: 'Notice de montage',
      subtitle: 'Instructions détaillées pour assembler votre lunette Lumi',
      nextLabel: 'Comment observer ?',
      steps: [
        { description: "Mettre le pare-lumière sur l'objectif et tourner d'un quart de tour.", alt: "Montage du pare-lumière sur l'objectif" },
        { description: "Assembler l'ensemble du (1) avec le Tube.", alt: "Assemblage de l'objectif avec le tube" },
        {
          description: `<strong>Contenu des sachets :</strong><br>• Sachet 1 : roulements · vis et écrous<br>• Sachet 2 : clef Allen · vis poussante m4 · Axe de mise au point · plaque poussante<br><br>${red(1)} Assembler les roulements avec vis et écrous sur la partie haute du porte-oculaire<br><br><strong>Note :</strong> les écrous doivent rejoindre le logement prévu sur le porte-oculaire <em>(photo où le porte-oculaire est rose)</em><br><br>${red(2)} <strong>Ordre d'assemblage :</strong><br>1. Placer la plaque poussante<br>2. Insérer le tube porte-oculaire<br>3. Placer l'axe de mise au point<br><br><strong>⚠️ Respecter cet ordre</strong> : le tube porte-oculaire doit être en place <strong>avant</strong> l'axe de mise au point. Serrer la vis poussante après avoir inséré le tube pour créer le frottement nécessaire au mouvement.<br><br><strong>Note :</strong> vous trouverez dans le sachet 2 une vis noire supplémentaire, elle sert à bloquer le porte-oculaire et le tube ensemble par le dessous du tube.`,
          alt: 'Montage du porte-oculaire',
          imageAlts: [
            'Assemblage des roulements et axe de mise au point',
            'Assemblage des roulements et axe de mise au point - détail',
            'Montage du tube porte-oculaire et vis poussante'
          ]
        },
        { description: 'Assemblage porte-oculaire et tube.', alt: 'Assemblage porte-oculaire et tube' },
        { description: 'Le renvoi coudé, assemblage de la plaque, du prisme et du châssis du renvoi coudé.', alt: 'Assemblage du renvoi coudé avec plaque, prisme et châssis' },
        { description: 'Et voilà vous pouvez observer !', alt: "Lunette Lumi prête pour l'observation" },
        { description: 'Bravo ! Vous savez maintenant comment assembler une lunette astronomique', alt: 'Étape finale du montage Lumi' }
      ]
    },
    howTo: {
      title: 'Comment observer ?',
      description: 'Votre Lumi est montée. Voici les gestes à connaître pour réussir vos premières observations.',
      nextLabel: 'Quoi observer ?',
      parts: [
        {
          title: 'Comment ça marche',
          alt: "Trajet de la lumière : depuis une galaxie, à travers l'objectif, puis renvoyée par le prisme vers l'oculaire",
          intro: "La Lumi est une lunette : elle utilise une lentille et un prisme pour collecter la lumière des astres et l'amener jusqu'à votre œil.",
          steps: [
            "<strong>L'objectif</strong>, à l'avant, est une lentille bien plus large que votre pupille : il capte beaucoup plus de lumière que l'œil nu et la fait converger.",
            '<strong>Le renvoi coudé</strong> contient un prisme qui dévie la lumière à 90° vers le haut : vous observez confortablement, sans vous tordre le cou.',
            "<strong>L'oculaire</strong> agit comme une loupe : il grossit l'image formée par l'objectif. C'est là que vous placez votre œil."
          ],
          tips: [
            "Le grossissement est égal à la focale de la lunette divisée par celle de l'oculaire : c'est pour cela qu'en changeant d'oculaire, on change de grossissement.",
            "Plus l'objectif est large, plus il capte de lumière : c'est ce qui permet de voir des objets trop faibles pour l'œil nu.",
            "Avec le renvoi coudé, l'image apparaît comme dans un miroir, inversée de gauche à droite : c'est normal.",
            "<strong>Jamais en direction du Soleil</strong> : l'objectif concentre aussi sa lumière, et brûlerait l'œil instantanément."
          ]
        },
        {
          title: 'La mise au point',
          alt: "Rotation de la molette de mise au point qui fait avancer et reculer l'oculaire",
          intro: "Faire la mise au point, c'est régler la position de l'oculaire pour obtenir une image nette. En tournant la molette de mise au point, le tube porte-oculaire avance ou recule.",
          steps: [
            'Commencez de jour, sur un objet lointain : un clocher, un arbre à plusieurs centaines de mètres. <strong>Jamais en direction du Soleil.</strong>',
            "Regardez dans l'oculaire et tournez doucement la molette dans un sens. Si l'image devient plus floue, tournez dans l'autre sens.",
            "Arrêtez-vous quand l'image est la plus nette possible, puis faites de petits allers-retours autour de ce point pour l'affiner."
          ],
          tips: [
            'La nuit, faites la mise au point sur la Lune ou sur une étoile brillante : une étoile est nette quand elle forme le point le plus petit possible.',
            "Chaque vue est différente : à chaque changement d'observateur, on refait la mise au point pour ses propres yeux.",
            "Après un changement d'oculaire, il faut souvent refaire la mise au point : chaque oculaire a sa propre position de netteté.",
            'Si la molette est trop dure ou glisse, ajustez la vis poussante (étape 3 de la notice).'
          ]
        },
        {
          title: 'Chercher une cible au chercheur',
          alt: "Vue à travers le chercheur : l'étoile est amenée dans le rond central, au bout du repère",
          intro: "Dans l'oculaire, on ne voit qu'un petit morceau du ciel : viser directement à travers est difficile. Le chercheur sert à pointer la cible avant de regarder dans l'oculaire.",
          steps: [
            "Repérez la cible à l'œil nu, puis orientez la lunette dans sa direction.",
            "Regardez dans le chercheur et déplacez doucement la lunette pour amener la cible dans le rond central, au bout du repère, à l'endroit qui correspond au centre de l'oculaire (voir ci-dessous).",
            "Regardez ensuite dans l'oculaire : la cible doit apparaître dans le champ. Refaites la mise au point si besoin."
          ],
          tips: [
            "Le chercheur est fixe : il ne se règle pas, et il vise rarement exactement au même endroit que la lunette. De jour, centrez un objet lointain dans l'oculaire, puis regardez où il se trouve dans le chercheur : c'est l'erreur de votre chercheur. Retenez-la, et la nuit, placez la cible à cet endroit plutôt qu'au centre.",
            "Commencez avec l'oculaire qui grossit le moins : le champ est plus grand et la cible plus facile à trouver.",
            '<strong>Jamais en direction du Soleil</strong>, même à travers le chercheur.'
          ]
        }
      ]
    },
    observation: {
      title: 'Quoi observer ?',
      description: "Découvrez les merveilles du ciel nocturne avec votre lunette Lumi. De la Lune aux galaxies lointaines, explorez l'univers qui nous entoure.",
      nextLink: { href: '#section-starmap', label: 'Carte du ciel' },
      items: [
        { title: 'La Lune', description: 'Observez les cratères lunaires, les mers et les montagnes. Le meilleur moment est pendant les phases croissantes et décroissantes.', alt: 'Observation de la Lune avec la lunette Lumi' },
        { title: 'Jupiter et ses lunes', description: 'La plus grande planète du système solaire accompagnée de ses quatre principales lunes : Io, Europe, Ganymède et Callisto, visibles comme de petits points lumineux autour de Jupiter.', alt: 'Observation de Jupiter et ses lunes avec la lunette Lumi' },
        { title: "La nébuleuse d'Orion", description: "Une des nébuleuses les plus brillantes et facilement observables, située dans la constellation d'Orion. Visible à l'œil nu comme une étoile floue.", alt: "Observation de la nébuleuse d'Orion avec la lunette Lumi" },
        { title: "L'amas d'Hercule", description: "Un magnifique amas globulaire contenant des centaines de milliers d'étoiles, formant une sphère lumineuse dans la constellation d'Hercule.", alt: "Observation de l'amas d'Hercule avec la lunette Lumi" },
        { title: "La galaxie d'Andromède", description: "Notre galaxie voisine la plus proche, visible comme une tache floue allongée. C'est l'objet le plus lointain observable à l'œil nu.", alt: "Observation de la galaxie d'Andromède avec la lunette Lumi" },
        { title: 'Les Pléiades', description: "Un jeune amas ouvert d'étoiles bleues très lumineuses, aussi appelé les 'Sept Sœurs'. Facilement repérable dans la constellation du Taureau.", alt: 'Observation des Pléiades avec la lunette Lumi' },
        { title: 'Le double amas de Persée', description: "Deux amas d'étoiles rapprochés dans la constellation de Persée, offrant un spectacle magnifique avec de nombreuses étoiles brillantes.", alt: 'Observation du double amas de Persée avec la lunette Lumi' }
      ],
      stellariumLink: 'https://stellarium.org/fr/',
      stellariumText: 'Utilisez Stellarium pour planifier vos observations',
      skyMapLink: '/blog/carte-du-ciel-interactive/',
      skyMapText: 'Ouvrir la carte du ciel',
      moonMapLink: '/blog/observer-la-lune-carte-interactive/',
      moonMapText: 'Ouvrir la carte de la Lune',
      discordText: 'Rejoindre la communauté',
      mapLink: '/carte-communaute/',
      mapText: 'Voir la carte'
    },
    starMap: {
      title: 'Observe ce soir',
      description: "Génère ta carte du ciel personnalisée : entre une date et ton lieu d'observation pour savoir ce qui est visible cette nuit-là."
    },
    moonMap: {
      title: 'Identifier les mers et les cratères',
      description: 'Survolez une zone de la Lune avec la souris pour voir son nom, cliquez pour en savoir plus.'
    },
    communityTitle: 'Carte de la communauté',
    nav: {
      'section-hero': 'Présentation',
      'section-assembly-guide': 'Notice',
      'section-how-to-observe': 'Comment observer',
      'section-observation': 'Observer',
      'section-starmap': 'Carte du ciel',
      'section-moonmap': 'Carte de la Lune',
      'section-community': 'Communauté'
    },
    snCard: { title: '🔭 Carte produit', product: 'Produit', serial: 'Numéro de série', date: "Date d'achat" }
  },

  en: {
    seoTitle: 'Lumi manual - User guide | La 3ème dimension',
    seoDescription: 'Complete user manual for the Lumi astronomical refractor: assembly guide, observing tips and technical information.',
    hero: {
      title: 'Lumi manual',
      tagline: 'Complete user guide',
      description: 'User manual for your Lumi educational refractor. Assembly, adjustments and observing tips.',
      warning: '⚠️ WARNING: Never look at the Sun with this instrument. Risk of severe and permanent eye damage.',
      ecoWarning: '🌿 The Lumi is made of bioplastic, an eco-friendly and durable material, but like any plastic it does not like heat. For example, do not leave it in a car in full sun: the parts may warp.'
    },
    assembly: {
      title: 'Assembly guide',
      subtitle: 'Step-by-step instructions to assemble your Lumi refractor',
      nextLabel: 'How to observe',
      steps: [
        { description: 'Fit the dew shield onto the objective and turn it a quarter turn.', alt: 'Fitting the dew shield onto the objective' },
        { description: 'Assemble the unit from step (1) with the tube.', alt: 'Assembling the objective with the tube' },
        {
          description: `<strong>Contents of the bags:</strong><br>• Bag 1: bearings · screws and nuts<br>• Bag 2: Allen key · M4 thrust screw · focusing shaft · thrust plate<br><br>${red(1)} Mount the bearings with their screws and nuts on the top of the focuser<br><br><strong>Note:</strong> the nuts must sit in the housing provided on the focuser <em>(the picture where the focuser is pink)</em><br><br>${red(2)} <strong>Assembly order:</strong><br>1. Fit the thrust plate<br>2. Insert the focuser drawtube<br>3. Fit the focusing shaft<br><br><strong>⚠️ Follow this order</strong>: the drawtube must be in place <strong>before</strong> the focusing shaft. Tighten the thrust screw once the drawtube is in, to create the friction needed for a smooth movement.<br><br><strong>Note:</strong> bag 2 contains an extra black screw: it locks the focuser and the tube together from underneath the tube.`,
          alt: 'Assembling the focuser',
          imageAlts: [
            'Fitting the bearings and the focusing shaft',
            'Fitting the bearings and the focusing shaft - detail',
            'Fitting the drawtube and the thrust screw'
          ]
        },
        { description: 'Assembling the focuser and the tube.', alt: 'Assembling the focuser and the tube' },
        { description: 'The star diagonal: assemble the plate, the prism and the diagonal housing.', alt: 'Assembling the star diagonal with plate, prism and housing' },
        { description: "That's it, you're ready to observe!", alt: 'Lumi refractor ready to observe' },
        { description: 'Well done! You now know how to assemble an astronomical refractor.', alt: 'Final step of the Lumi assembly' }
      ]
    },
    howTo: {
      title: 'How to observe',
      description: 'Your Lumi is assembled. Here are the key skills for a successful first night.',
      nextLabel: 'What to observe',
      parts: [
        {
          title: 'How it works',
          alt: 'Path of light: from a galaxy, through the objective lens, then sent up by the prism to the eyepiece',
          intro: 'The Lumi is a refractor: it uses a lens and a prism to collect the light from celestial objects and bring it to your eye.',
          steps: [
            '<strong>The objective lens</strong>, at the front, is much wider than your pupil: it gathers far more light than the naked eye and brings it to a focus.',
            '<strong>The star diagonal</strong> contains a prism that turns the light 90° upwards, so you can observe comfortably without craning your neck.',
            '<strong>The eyepiece</strong> works like a magnifying glass: it enlarges the image formed by the objective. This is where you put your eye.'
          ],
          tips: [
            'Magnification equals the focal length of the refractor divided by the focal length of the eyepiece: that is why changing the eyepiece changes the magnification.',
            'The wider the objective, the more light it gathers: this is what lets you see objects too faint for the naked eye.',
            'With the star diagonal, the image looks like a mirror image, flipped left to right: this is normal.',
            '<strong>Never towards the Sun</strong>: the objective concentrates its light too, and would burn your eye instantly.'
          ]
        },
        {
          title: 'Focusing',
          alt: 'Turning the focus knob moves the eyepiece in and out',
          intro: 'Focusing means adjusting the position of the eyepiece to get a sharp image. Turning the focus knob moves the drawtube in or out.',
          steps: [
            'Start in daylight, on a distant object: a church tower or a tree a few hundred metres away. <strong>Never towards the Sun.</strong>',
            'Look into the eyepiece and slowly turn the knob one way. If the image gets blurrier, turn it the other way.',
            'Stop when the image is as sharp as possible, then make small back-and-forth movements around that point to fine-tune it.'
          ],
          tips: [
            'At night, focus on the Moon or a bright star: a star is in focus when it looks like the smallest possible point.',
            'Everyone’s eyes are different: each new observer refocuses for their own eyesight.',
            'After changing eyepieces you will often need to refocus: each eyepiece has its own focus position.',
            'If the knob is too stiff or slips, adjust the thrust screw (step 3 of the assembly guide).'
          ]
        },
        {
          title: 'Finding a target with the finder',
          alt: 'View through the finder: the star is brought into the central ring, at the tip of the pointer',
          intro: 'The eyepiece only shows a small patch of sky, so aiming straight through it is hard. The finder helps you point at the target before you look into the eyepiece.',
          steps: [
            'Spot the target with the naked eye, then point the refractor towards it.',
            'Look through the finder and gently move the refractor to bring the target into the central ring, at the tip of the pointer, where it matches the centre of the eyepiece (see below).',
            'Then look into the eyepiece: the target should be in the field of view. Refocus if needed.'
          ],
          tips: [
            "The finder is fixed: it cannot be adjusted, and it rarely points at exactly the same spot as the refractor. In daylight, centre a distant object in the eyepiece, then note where it sits in the finder: that is your finder's offset. Remember it, and at night place the target there rather than in the centre.",
            'Start with the lowest-magnification eyepiece: the field of view is wider and the target easier to find.',
            '<strong>Never towards the Sun</strong>, not even through the finder.'
          ]
        }
      ]
    },
    observation: {
      title: 'What to observe',
      description: 'Discover the wonders of the night sky with your Lumi refractor, from the Moon to distant galaxies.',
      items: [
        { title: 'The Moon', description: 'Observe lunar craters, seas and mountains. The best time is during the waxing and waning phases.', alt: 'Observing the Moon with the Lumi refractor' },
        { title: 'Jupiter and its moons', description: 'The largest planet in the Solar System and its four main moons, Io, Europa, Ganymede and Callisto, visible as small bright dots around Jupiter.', alt: 'Observing Jupiter and its moons with the Lumi refractor' },
        { title: 'The Orion Nebula', description: 'One of the brightest and easiest nebulae to observe, in the constellation of Orion. Visible to the naked eye as a fuzzy star.', alt: 'Observing the Orion Nebula with the Lumi refractor' },
        { title: 'The Hercules Cluster', description: 'A superb globular cluster of hundreds of thousands of stars, forming a glowing ball in the constellation of Hercules.', alt: 'Observing the Hercules Cluster with the Lumi refractor' },
        { title: 'The Andromeda Galaxy', description: 'Our nearest large neighbouring galaxy, visible as an elongated fuzzy patch. It is the most distant object visible to the naked eye.', alt: 'Observing the Andromeda Galaxy with the Lumi refractor' },
        { title: 'The Pleiades', description: "A young open cluster of very bright blue stars, also known as the 'Seven Sisters'. Easy to spot in the constellation of Taurus.", alt: 'Observing the Pleiades with the Lumi refractor' },
        { title: 'The Double Cluster in Perseus', description: 'Two star clusters side by side in the constellation of Perseus, a beautiful sight full of bright stars.', alt: 'Observing the Double Cluster in Perseus with the Lumi refractor' }
      ],
      stellariumLink: 'https://stellarium.org/',
      stellariumText: 'Use Stellarium to plan your observations',
      discordText: 'Join the community',
      mapLink: '/en/carte-communaute/',
      mapText: 'See the map'
    },
    communityTitle: 'Community map',
    nav: {
      'section-hero': 'Overview',
      'section-assembly-guide': 'Assembly',
      'section-how-to-observe': 'How to observe',
      'section-observation': 'Observe',
      'section-community': 'Community'
    },
    snCard: { title: '🔭 Product card', product: 'Product', serial: 'Serial number', date: 'Purchase date' }
  }
};

export function lumiNotice(locale: Locale) {
  const t = text[locale];
  return {
    ...t,
    assembly: {
      ...t.assembly,
      steps: t.assembly.steps.map((step, i) => {
        const m = stepMedia[i];
        return {
          number: i + 1,
          title: '',
          description: step.description,
          alt: step.alt,
          animation: m.animation,
          image: m.image,
          images: m.images?.map((src, k) => ({ src, alt: step.imageAlts?.[k] ?? step.alt }))
        };
      })
    },
    howTo: {
      ...t.howTo,
      parts: t.howTo.parts.map((part, i) => ({ ...part, animation: howToMedia[i] }))
    },
    observation: {
      ...t.observation,
      observations: t.observation.items.map((item, i) => ({ ...item, image: observationImages[i] }))
    }
  };
}
