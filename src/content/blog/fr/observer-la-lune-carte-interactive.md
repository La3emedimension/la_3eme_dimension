---
title: "Observer la Lune : la carte interactive pour identifier mers et cratères"
publishDate: 2026-09-09
img: "/assets/Moon.jpg"
img_alt: "Pleine Lune photographiée en détail, avec ses mers sombres et ses cratères à rayons"
description: |
  Une vraie carte de la Lune interactive : survolez ou touchez les mers et les cratères sur notre photo de pleine Lune pour découvrir leur nom, leur histoire et les meilleurs moments pour les observer.
tags:
  - Astronomie
  - Lune
  - Guide
  - Observation
seoTitle: "Carte de la Lune interactive : identifier mers et cratères | La 3ème dimension"
seoDescription: "Carte de la Lune interactive : survolez ou touchez les points sur notre photo de pleine Lune pour identifier Mare Crisium, Tycho, Copernic... Guide complet d'observation lunaire."
seoKeywords: "observation lunaire, carte de la lune interactive, cratères lunaires, mers lunaires, Tycho, Copernic, Mare Crisium, comment observer la lune, atlas lunaire, guide lune débutant"
category: "pedagogie"
---

La Lune est la cible d'observation la plus accessible du ciel : elle est brillante, elle est immense (30 minutes d'arc, soit bien plus gros que n'importe quelle planète), et elle est visible depuis n'importe où, même en pleine ville. Pourtant, la plupart des gens qui la regardent au télescope pour la première fois voient... une boule grise pleine de taches, sans savoir ce qu'ils regardent.

On a donc pris une de nos photos de pleine Lune et on en a fait une vraie carte interactive. Passez la souris sur un point (ou touchez-le du doigt sur mobile) : le nom apparaît. Cliquez ou tapez dessus : vous obtenez son histoire.

## Pourquoi la Lune est la meilleure cible pour débuter

Contrairement aux nébuleuses ou aux galaxies, qui demandent un ciel bien noir et un peu d'habitude pour être repérées, la Lune n'exige rien de tout ça :

- **Elle est visible en ville**, pollution lumineuse ou pas.
- **Elle ne demande aucune préparation** : pas besoin d'attendre que les yeux s'adaptent à l'obscurité.
- **Le moindre instrument suffit** : des jumelles révèlent déjà des dizaines de cratères, une petite lunette comme la [Smallest](/product/smallest/) en montre des centaines.
- **Elle change tous les soirs.** Contrairement à une étoile, la Lune offre un spectacle différent chaque nuit selon sa phase, avec un relief qui semble presque changer de forme au fil du mois.

## Carte interactive : identifiez mers et cratères

<div class="moonmap-tool" id="moonmap-tool">
  <div class="moonmap-header">
    <h3>Carte interactive de la Lune</h3>
    <p class="moonmap-hint">
      <span class="moonmap-hint-desktop">Survolez une zone avec la souris pour voir son nom, cliquez pour en savoir plus.</span>
      <span class="moonmap-hint-mobile">Touchez une zone pour découvrir son nom et son histoire.</span>
    </p>
  </div>

  <div class="moonmap-stage-wrap">
    <div class="moonmap-stage" data-moonmap-stage>
      <img src="/assets/Moon.jpg" alt="Pleine Lune - carte interactive des mers et cratères" class="moonmap-img" data-moonmap-img />
      <div class="moonmap-zones" data-moonmap-zones></div>
      <div class="moonmap-tooltip" data-moonmap-tooltip hidden></div>
    </div>
    <button type="button" class="moonmap-fullscreen-btn" data-moonmap-fullscreen-open aria-label="Voir la carte en plein écran">
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/>
        <line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/>
      </svg>
      Plein écran
    </button>
  </div>

  <div class="moonmap-card" data-moonmap-card hidden tabindex="-1">
    <button type="button" class="moonmap-card-close" data-moonmap-card-close aria-label="Fermer">×</button>
    <span class="moonmap-card-badge" data-moonmap-card-badge></span>
    <h4 class="moonmap-card-name" data-moonmap-card-name></h4>
    <p class="moonmap-card-desc" data-moonmap-card-desc></p>
    <p class="moonmap-card-tip" data-moonmap-card-tip></p>
  </div>

  <div class="moonmap-toolbar">
    <div class="moonmap-legend">
      <span class="moonmap-legend-item"><span class="moonmap-zone-swatch moonmap-zone-swatch--mare" aria-hidden="true"></span>Mer lunaire</span>
      <span class="moonmap-legend-item"><span class="moonmap-zone-swatch moonmap-zone-swatch--crater" aria-hidden="true"></span>Cratère</span>
    </div>
    <button type="button" class="moonmap-print-btn" data-moonmap-print>
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>
      </svg>
      <span data-moonmap-print-label>Imprimer la carte (N&amp;B)</span>
    </button>
  </div>
</div>

<div class="moonmap-fs-overlay" id="moonmap-fs-overlay" aria-hidden="true">
  <button type="button" class="moonmap-fs-close" data-moonmap-fullscreen-close aria-label="Fermer le plein écran">×</button>

  <div class="moonmap-stage moonmap-stage--fs" data-moonmap-stage>
    <img src="/assets/Moon.jpg" alt="Pleine Lune - carte interactive plein écran" class="moonmap-img" data-moonmap-img />
    <div class="moonmap-zones" data-moonmap-zones></div>
    <div class="moonmap-tooltip" data-moonmap-tooltip hidden></div>
  </div>

  <div class="moonmap-card moonmap-card--fs" data-moonmap-card hidden tabindex="-1">
    <button type="button" class="moonmap-card-close" data-moonmap-card-close aria-label="Fermer">×</button>
    <span class="moonmap-card-badge" data-moonmap-card-badge></span>
    <h4 class="moonmap-card-name" data-moonmap-card-name></h4>
    <p class="moonmap-card-desc" data-moonmap-card-desc></p>
    <p class="moonmap-card-tip" data-moonmap-card-tip></p>
  </div>

  <p class="moonmap-fs-hint">Touchez une zone pour l'identifier · <kbd>Échap</kbd> pour fermer</p>
</div>

<style>
  .moonmap-tool {
    margin: 2.5rem 0;
    padding: 1.5rem;
    background: var(--gradient-subtle, rgba(255,255,255,0.03));
    border: 1px solid var(--gray-800);
    border-radius: 1rem;
  }

  .moonmap-header {
    text-align: center;
    margin-bottom: 1.25rem;
  }

  .moonmap-header h3 {
    margin: 0 0 0.4rem;
    font-size: var(--text-xl);
    color: var(--gray-50);
  }

  .moonmap-hint {
    margin: 0;
    font-size: var(--text-sm);
    color: var(--gray-400);
  }

  .moonmap-hint-mobile {
    display: none;
  }

  .moonmap-stage-wrap {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .moonmap-stage {
    position: relative;
    width: 100%;
    max-width: 560px;
    margin: 0 auto;
    border-radius: 0.75rem;
    overflow: hidden;
    background: #000;
    line-height: 0;
  }

  .moonmap-img {
    width: 100% !important;
    height: auto !important;
    display: block;
    margin: 0 !important;
    border-radius: 0 !important;
    box-shadow: none !important;
    user-select: none;
    -webkit-user-drag: none;
  }

  .moonmap-zones {
    position: absolute;
    inset: 0;
  }

  .moonmap-zone {
    position: absolute;
    aspect-ratio: 1;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    padding: 0;
    margin: 0;
    cursor: pointer;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-color: rgba(255,255,255,0.02) !important;
    background-image: none !important;
    box-shadow: none;
    border-width: 1.5px !important;
    border-style: solid !important;
    border-color: rgba(255,255,255,0.65) !important;
    transition: background-color 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
    -webkit-tap-highlight-color: transparent;
  }

  .moonmap-zone:hover,
  .moonmap-zone:focus-visible,
  .moonmap-zone.is-active {
    background-color: rgba(255,255,255,0.16) !important;
    border-color: #ffffff !important;
    box-shadow: 0 0 0 3px rgba(255,255,255,0.12);
  }

  .moonmap-zone:focus-visible {
    outline: none;
  }

  .moonmap-tooltip {
    position: absolute;
    z-index: 5;
    transform: translate(-50%, -140%);
    background: rgba(10,10,15,0.92);
    color: #fff;
    padding: 0.3rem 0.6rem;
    border-radius: 0.4rem;
    font-size: 0.78rem;
    font-weight: 600;
    white-space: nowrap;
    pointer-events: none;
    box-shadow: 0 4px 12px rgba(0,0,0,0.4);
  }

  .moonmap-tooltip[hidden] {
    display: none;
  }

  .moonmap-fullscreen-btn,
  .moonmap-print-btn {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.5rem 0.9rem;
    border-radius: 2rem;
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid var(--gray-800) !important;
    background-color: var(--gray-900) !important;
    color: var(--gray-200) !important;
    font-size: var(--text-sm);
    cursor: pointer;
    transition: all var(--theme-transition, 0.2s ease);
  }

  .moonmap-fullscreen-btn:hover,
  .moonmap-print-btn:hover {
    border-color: var(--accent-regular) !important;
    color: var(--gray-50) !important;
  }

  .moonmap-card {
    position: relative;
    max-width: 560px;
    margin: 1.25rem auto 0;
    padding: 1.25rem 1.5rem;
    background: var(--gray-900);
    border: 1px solid var(--gray-800);
    border-radius: 0.75rem;
  }

  .moonmap-card[hidden] {
    display: none;
  }

  .moonmap-card-close {
    position: absolute;
    top: 0.6rem;
    right: 0.75rem;
    appearance: none;
    -webkit-appearance: none;
    border: none !important;
    background-color: transparent !important;
    color: var(--gray-400) !important;
    font-size: 1.4rem;
    line-height: 1;
    cursor: pointer;
    padding: 0.25rem;
  }

  .moonmap-card-close:hover {
    color: var(--gray-50) !important;
  }

  .moonmap-card-badge {
    display: inline-block;
    font-size: 0.7rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    padding: 0.2rem 0.55rem;
    border-radius: 1rem;
    background: rgba(255,209,102,0.15);
    color: #ffd166;
    margin-bottom: 0.5rem;
  }

  .moonmap-card-badge.is-mare {
    background: rgba(127,209,255,0.15);
    color: #7fd1ff;
  }

  .moonmap-card-name {
    margin: 0 0 0.5rem;
    font-size: var(--text-lg);
    color: var(--gray-50);
  }

  .moonmap-card-desc {
    margin: 0 0 0.6rem;
    color: var(--gray-300);
    line-height: 1.6;
  }

  .moonmap-card-tip {
    margin: 0;
    font-size: var(--text-sm);
    color: var(--gray-400);
    font-style: italic;
  }

  .moonmap-toolbar {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1.25rem;
    flex-wrap: wrap;
  }

  .moonmap-legend {
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
  }

  .moonmap-legend-item {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    font-size: var(--text-sm);
    color: var(--gray-400);
  }

  .moonmap-zone-swatch {
    width: 0.9rem;
    height: 0.9rem;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    border: 1.5px solid rgba(255,255,255,0.6);
  }

  .moonmap-zone-swatch--crater {
    border-color: rgba(255,255,255,0.6);
  }

  /* Fullscreen overlay */
  .moonmap-fs-overlay {
    position: fixed;
    inset: 0;
    z-index: 300;
    background: #06060a;
    display: none;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    padding: 1rem;
    overflow-y: auto;
  }

  .moonmap-fs-overlay.is-open {
    display: flex;
  }

  .moonmap-fs-close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
    appearance: none;
    -webkit-appearance: none;
    border: none !important;
    background-color: rgba(255,255,255,0.12) !important;
    color: #fff !important;
    font-size: 1.5rem;
    line-height: 1;
    cursor: pointer;
    z-index: 2;
  }

  .moonmap-fs-close:hover {
    background-color: rgba(255,255,255,0.22) !important;
  }

  .moonmap-stage--fs {
    width: min(92vw, 100.5vh);
    max-width: none;
    flex: none;
  }

  .moonmap-card--fs {
    max-width: min(92vw, 100.5vh);
    width: 100%;
    max-height: 22vh;
    overflow-y: auto;
  }

  .moonmap-fs-hint {
    color: var(--gray-500);
    font-size: var(--text-sm);
    text-align: center;
    margin: 0;
  }

  .moonmap-fs-hint kbd {
    background: var(--gray-800);
    padding: 0.1rem 0.4rem;
    border-radius: 0.3rem;
    font-size: 0.75em;
  }

  @media (max-width: 50em) {
    .moonmap-hint-desktop {
      display: none;
    }

    .moonmap-hint-mobile {
      display: inline;
    }

    .moonmap-tool {
      padding: 1rem;
    }

    .moonmap-toolbar {
      flex-direction: column;
      gap: 0.85rem;
    }
  }
</style>

<script>
  const MOON_FEATURES = [
    {
      name: "Mare Crisium (Mer des Crises)",
      x: 47, y: 19, r: 11, type: "mare",
      desc: "Une petite mer presque circulaire, isolée du reste des mers lunaires. Elle s'est formée il y a environ 3,9 milliards d'années lors de l'impact d'un corps gigantesque, puis remplie de lave basaltique.",
      tip: "Repère facile à l'œil nu dès le premier quartier."
    },
    {
      name: "Proclus",
      x: 48.5, y: 24, r: 4, type: "crater",
      desc: "Un jeune cratère brillant (environ 1 milliard d'années) posé sur le bord de la Mer des Crises. Ses rayons d'éjecta, curieusement, ne partent que d'un seul côté du cratère.",
      tip: "Visible aux jumelles en pleine Lune, à côté de Mare Crisium."
    },
    {
      name: "Mare Serenitatis (Mer de la Sérénité)",
      x: 46, y: 35, r: 14, type: "mare",
      desc: "Un vaste bassin d'impact rempli de lave refroidie, bordé par la chaîne de montagnes du Caucase. L'une des mers les plus faciles à identifier grâce à sa forme presque ronde.",
      tip: "Bien visible dès de simples jumelles 10x50."
    },
    {
      name: "Mare Tranquillitatis (Mer de la Tranquillité)",
      x: 61, y: 31, r: 13, type: "mare",
      desc: "C'est ici, le 20 juillet 1969, qu'Apollo 11 s'est posé : le premier pas de l'humanité sur un autre monde a eu lieu sur cette plaine sombre.",
      tip: "Le site d'alunissage n'est pas visible en amateur, mais la mer elle-même l'est très bien."
    },
    {
      name: "Mare Fecunditatis (Mer de la Fécondité)",
      x: 58, y: 47, r: 11, type: "mare",
      desc: "Une grande plaine basaltique visitée par la sonde soviétique automatique Luna 16 en 1970, qui en a ramené les premiers échantillons lunaires jamais rapportés par une machine.",
      tip: "Bien visible en pleine Lune, un peu plus discrète en quartier."
    },
    {
      name: "Mare Imbrium (Mer des Pluies)",
      x: 37, y: 33, r: 15, type: "mare",
      desc: "Le plus grand bassin d'impact de la face visible, environ 1100 km de diamètre, creusé il y a 3,9 milliards d'années par l'un des plus gros impacts qu'ait connu la Lune.",
      tip: "Immanquable : c'est la plus grande tache sombre de tout l'hémisphère nord lunaire."
    },
    {
      name: "Oceanus Procellarum (Océan des Tempêtes)",
      x: 26, y: 49, r: 20, type: "mare",
      desc: "La plus vaste étendue sombre de la Lune, plusieurs millions de km². Trop grande pour être une simple \"mer\", elle porte le nom d'océan, unique sur la Lune.",
      tip: "Visible à l'œil nu, il occupe tout le quart ouest du disque lunaire."
    },
    {
      name: "Mare Nubium (Mer des Nuées)",
      x: 34, y: 55, r: 11, type: "mare",
      desc: "Une mer plus discrète, au sud d'Imbrium, traversée de failles et parsemée de petits dômes volcaniques que l'on devine avec un instrument.",
      tip: "Plus facile à repérer en éclairage rasant, autour du premier quartier."
    },
    {
      name: "Mare Humorum (Mer des Humeurs)",
      x: 25, y: 63, r: 9, type: "mare",
      desc: "Un bassin presque circulaire, isolé près du bord ouest de la Lune, l'une des mers les plus nettes à identifier aux jumelles.",
      tip: "Sa forme ronde le rend reconnaissable entre tous."
    },
    {
      name: "Grimaldi",
      x: 20, y: 42, r: 5, type: "crater",
      desc: "Une vaste plaine sombre près du bord ouest de la Lune, l'un des endroits les plus sombres (le plus faible albédo) de toute la surface lunaire.",
      tip: "Cherchez-le près du limbe, il ressort par contraste avec le relief clair environnant."
    },
    {
      name: "Copernic",
      x: 63, y: 62, r: 6, type: "crater",
      desc: "L'un des cratères les plus célèbres de la Lune : 93 km de diamètre, environ 800 millions d'années, entouré d'un système de rayons clairs si spectaculaire qu'on le surnommait autrefois le \"Monarque des mers lunaires\".",
      tip: "Superbe en éclairage rasant (premier quartier) pour son relief, superbe en pleine Lune pour ses rayons."
    },
    {
      name: "Tycho",
      x: 41, y: 60, r: 7, type: "crater",
      desc: "Le cratère à rayons le plus spectaculaire de la Lune. Ses éjectas s'étendent sur plus de 1500 km et restent visibles à l'œil nu en pleine Lune. Il n'a \"que\" 108 millions d'années : les dinosaures existaient encore quand il s'est formé.",
      tip: "Le point le plus brillant de la Lune en pleine phase : impossible à manquer."
    }
  ];

  function initMoonMapRoot(root) {
    if (!root || root.dataset.moonmapInit === '1') return;
    root.dataset.moonmapInit = '1';

    const zonesEl = root.querySelector('[data-moonmap-zones]');
    const tooltip = root.querySelector('[data-moonmap-tooltip]');
    const card = root.querySelector('[data-moonmap-card]');
    const cardClose = root.querySelector('[data-moonmap-card-close]');
    const cardBadge = root.querySelector('[data-moonmap-card-badge]');
    const cardName = root.querySelector('[data-moonmap-card-name]');
    const cardDesc = root.querySelector('[data-moonmap-card-desc]');
    const cardTip = root.querySelector('[data-moonmap-card-tip]');
    if (!zonesEl) return;

    let activeBtn = null;

    function showTooltip(feature, btn) {
      tooltip.textContent = feature.name;
      tooltip.hidden = false;
      tooltip.style.left = btn.style.left;
      tooltip.style.top = btn.style.top;
    }

    function hideTooltip() {
      tooltip.hidden = true;
    }

    function showCard(feature, btn) {
      if (activeBtn) activeBtn.classList.remove('is-active');
      activeBtn = btn;
      btn.classList.add('is-active');

      cardBadge.textContent = feature.type === 'mare' ? 'Mer lunaire' : 'Cratère';
      cardBadge.className = 'moonmap-card-badge' + (feature.type === 'mare' ? ' is-mare' : '');
      cardName.textContent = feature.name;
      cardDesc.textContent = feature.desc;
      cardTip.textContent = feature.tip;
      card.hidden = false;
    }

    function closeCard() {
      card.hidden = true;
      if (activeBtn) {
        activeBtn.classList.remove('is-active');
        activeBtn = null;
      }
    }

    // Craters render after (on top of) the larger mare circles so they stay clickable.
    const renderOrder = MOON_FEATURES.slice().sort((a, b) => b.r - a.r);

    renderOrder.forEach((feature) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = `moonmap-zone moonmap-zone--${feature.type}`;
      btn.style.left = feature.x + '%';
      btn.style.top = feature.y + '%';
      btn.style.width = feature.r + '%';
      btn.setAttribute('aria-label', feature.name);

      btn.addEventListener('mouseenter', () => showTooltip(feature, btn));
      btn.addEventListener('mouseleave', hideTooltip);
      btn.addEventListener('focus', () => showTooltip(feature, btn));
      btn.addEventListener('blur', hideTooltip);
      btn.addEventListener('click', () => {
        showCard(feature, btn);
        card.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      });

      zonesEl.appendChild(btn);
    });

    cardClose.addEventListener('click', closeCard);
  }

  function initFullscreen() {
    const openBtn = document.querySelector('[data-moonmap-fullscreen-open]');
    const overlay = document.getElementById('moonmap-fs-overlay');
    const closeBtn = document.querySelector('[data-moonmap-fullscreen-close]');
    if (!openBtn || !overlay || !closeBtn) return;

    // Move the overlay to <body> so it escapes any ancestor with `isolation: isolate`
    // (the page's background wrapper has one) — otherwise its z-index is trapped
    // inside that stacking context and floating UI like the chat bubble shows through.
    document.body.appendChild(overlay);

    function open() {
      overlay.classList.add('is-open');
      overlay.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    }

    function close() {
      overlay.classList.remove('is-open');
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }

    openBtn.addEventListener('click', open);
    closeBtn.addEventListener('click', close);
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && overlay.classList.contains('is-open')) close();
    });
  }

  async function printMoonMap() {
    const btn = document.querySelector('[data-moonmap-print]');
    const label = document.querySelector('[data-moonmap-print-label]');
    if (!btn || !label) return;
    const originalLabel = label.textContent;
    btn.disabled = true;
    label.textContent = 'Génération…';

    try {
      const img = new Image();
      img.src = '/assets/Moon.jpg';
      await new Promise((resolve, reject) => {
        img.onload = () => resolve(null);
        img.onerror = reject;
      });

      const A4W = 1240, A4H = 1754;
      const canvas = document.createElement('canvas');
      canvas.width = A4W;
      canvas.height = A4H;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;

      ctx.fillStyle = '#ffffff';
      ctx.fillRect(0, 0, A4W, A4H);

      const margin = 70;
      let y = margin;

      const logo = new Image();
      logo.src = '/assets/logolumi.png';
      await new Promise((resolve) => {
        logo.onload = () => resolve(null);
        logo.onerror = () => resolve(null);
      });
      if (logo.naturalWidth > 0) {
        const logoH = 52;
        const logoW = Math.round(logo.naturalWidth * (logoH / logo.naturalHeight));
        ctx.drawImage(logo, margin, y, logoW, logoH);
      }

      ctx.font = 'bold 34px Georgia, serif';
      ctx.fillStyle = '#111111';
      ctx.textAlign = 'right';
      ctx.textBaseline = 'top';
      ctx.fillText('Carte de la Lune', A4W - margin, y);
      ctx.font = '17px sans-serif';
      ctx.fillStyle = '#555555';
      ctx.fillText('Mers et cratères à identifier sur le terrain', A4W - margin, y + 42);

      y += 92;
      ctx.strokeStyle = 'rgba(0,0,0,0.15)';
      ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(margin, y); ctx.lineTo(A4W - margin, y); ctx.stroke();
      y += 26;

      const mapSize = A4W - margin * 2;
      const mapX = margin;
      const drawH = mapSize * (img.naturalHeight / img.naturalWidth);

      // Grayscale/contrast photo, clipped to the moon disc so the black sky
      // around it doesn't print — the page's white shows through instead.
      const discCx = mapX + 0.4839 * mapSize;
      const discCy = y + 0.4824 * drawH;
      const discR = 0.284 * mapSize;

      ctx.save();
      ctx.beginPath();
      ctx.arc(discCx, discCy, discR, 0, Math.PI * 2);
      ctx.clip();
      ctx.filter = 'grayscale(1) contrast(1.3)';
      ctx.drawImage(img, mapX, y, mapSize, drawH);
      ctx.restore();

      ctx.lineWidth = 2;
      ctx.strokeStyle = '#000000';
      ctx.beginPath();
      ctx.arc(discCx, discCy, discR, 0, Math.PI * 2);
      ctx.stroke();

      MOON_FEATURES.forEach((f, i) => {
        const mx = mapX + (f.x / 100) * mapSize;
        const my = y + (f.y / 100) * drawH;
        const rpx = 30;
        ctx.beginPath();
        ctx.arc(mx, my, rpx, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(255,255,255,0.55)';
        ctx.fill();
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#000000';
        ctx.stroke();
        ctx.fillStyle = '#000000';
        ctx.font = 'bold 27px sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(String(i + 1), mx, my + 1);
      });

      y += drawH + 32;
      ctx.strokeStyle = 'rgba(0,0,0,0.15)';
      ctx.beginPath(); ctx.moveTo(margin, y); ctx.lineTo(A4W - margin, y); ctx.stroke();
      y += 30;

      ctx.textAlign = 'left';
      ctx.textBaseline = 'top';
      const colW = (A4W - margin * 2) / 2;
      const rowH = 44;
      MOON_FEATURES.forEach((f, i) => {
        const col = i % 2;
        const row = Math.floor(i / 2);
        const lx = margin + col * colW;
        const ly = y + row * rowH;
        ctx.font = 'bold 22px sans-serif';
        ctx.fillStyle = '#111111';
        ctx.fillText(`${i + 1}.`, lx, ly);
        ctx.font = 'bold 21px sans-serif';
        ctx.fillStyle = '#222222';
        ctx.fillText(f.name, lx + 38, ly);
      });

      y += Math.ceil(MOON_FEATURES.length / 2) * rowH + 20;
      ctx.strokeStyle = 'rgba(0,0,0,0.1)';
      ctx.beginPath(); ctx.moveTo(margin, y); ctx.lineTo(A4W - margin, y); ctx.stroke();
      y += 18;
      ctx.font = '14px sans-serif';
      ctx.fillStyle = '#999999';
      ctx.textAlign = 'center';
      ctx.fillText('la3emedim.fr · Guide d\'observation lunaire', A4W / 2, y);

      const link = document.createElement('a');
      link.download = 'carte-lune-la3edim.png';
      link.href = canvas.toDataURL('image/png');
      link.click();
    } finally {
      btn.disabled = false;
      label.textContent = originalLabel;
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#moonmap-tool, #moonmap-fs-overlay').forEach(initMoonMapRoot);
    initFullscreen();
    const printBtn = document.querySelector('[data-moonmap-print]');
    if (printBtn) printBtn.addEventListener('click', printMoonMap);
  });
</script>

## Ce que vous venez de découvrir

Ces douze repères ne sont qu'un début, mais ils suffisent déjà à comprendre la Lune autrement. Les taches sombres ne sont pas des "ombres" : ce sont d'anciennes coulées de lave qui ont rempli des bassins d'impact il y a plusieurs milliards d'années, d'où leur nom de "mers" (*maria* en latin), donné par les premiers observateurs qui les prenaient pour de véritables océans.

Les points brillants avec des traînées, eux, sont des cratères récents (à l'échelle géologique) : leur impact a projeté de la matière fraîche sur des centaines, parfois des milliers de kilomètres, formant ces rayons qui n'ont pas encore eu le temps de s'assombrir sous l'effet du vent solaire. **Tycho**, avec ses 108 millions d'années, est le plus jeune des grands cratères de la face visible : ses rayons dominent encore tout l'hémisphère sud en pleine Lune.

## Quel est le meilleur moment pour observer la Lune ?

Contrairement à une idée reçue, la pleine Lune n'est pas le meilleur moment pour l'observer en détail :

- **En pleine Lune**, le Soleil éclaire la surface de face : les mers et les rayons des grands cratères (Tycho, Copernic) ressortent parfaitement, mais le relief est écrasé, sans ombres.
- **Au premier ou dernier quartier**, la lumière rasante crée de longues ombres le long du terminateur (la ligne entre jour et nuit lunaires) : c'est là que les cratères, les montagnes et les failles prennent tout leur relief. C'est le moment préféré des astronomes amateurs pour observer les détails.
- **Juste après la nouvelle Lune**, un mince croissant permet de découvrir la "lumière cendrée" : le côté sombre de la Lune, faiblement éclairé par la lumière du Soleil réfléchie par la Terre.

## Avec quel matériel observer ces détails ?

- **À l'œil nu**, vous distinguez déjà les grandes mers et, en pleine Lune, les rayons de Tycho.
- **Aux jumelles** (10x50 suffisent), la plupart des points de cette carte deviennent identifiables : Mare Crisium, Copernic, Tycho, Grimaldi...
- **Avec une petite lunette**, comme notre [Smallest](/product/smallest/), vous résolvez des dizaines de cratères supplémentaires et vous voyez apparaître le relief du terminateur : chaînes de montagnes, failles, dômes volcaniques.

C'est exactement ce qu'on essaie de rendre accessible chez **La 3ème Dimension**, depuis notre atelier de Verdun-sur-Garonne : des instruments d'observation conçus pour qu'on puisse les prendre en main le soir même, sans mode d'emploi, et pointer la Lune en quelques minutes. Si l'envie vous prend de pousser l'observation plus loin, jetez un œil à [nos instruments](/shop/).

<a class="button" href="/shop/">Découvrir nos instruments d'observation</a>
