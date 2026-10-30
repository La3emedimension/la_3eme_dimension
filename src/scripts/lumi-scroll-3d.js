/*!
 * Lumi scroll animation (live 3D) — La 3ème Dimension
 * The telescope assembles itself as the visitor scrolls, then turns 360° at the end of the section.
 * Loaded on demand by LumiScroll.astro; "three" is bundled from node_modules.
 */
import * as THREE from 'three';
import { toCreasedNormals } from 'three/addons/utils/BufferGeometryUtils.js';

const clamp = x => Math.max(0, Math.min(1, x));
const seg = (t, a, b) => (t - a) / (b - a);
const backOut = (x, k = 1.7) => { x = clamp(x) - 1; return 1 + (k + 1) * x * x * x + k * x * x; };
const approach = x => { x = clamp(x); return 1 - Math.pow(1 - x, 3.2); };
const jelly = (d, amp, f = 20, damp = 6.5) => d > 0 ? amp * Math.exp(-damp * d) * Math.sin(f * d) : 0;
function rng(s) { return () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; }; }

export async function initLumiScroll(section) {
  const base = section.dataset.model || './';
  const spinShare = +(section.dataset.spinShare || 0.3);
  const canvas = section.querySelector('canvas');
  const still = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // lumi.json + lumi.bin, or a single JSON with the geometry embedded (data-model-file)
  const one = section.dataset.modelFile;
  let meta, bin;
  if (one) {
    meta = await fetch(base + one).then(r => r.json());
    const raw = atob(meta.bin64); bin = new Uint8Array(raw.length);
    for (let i = 0; i < raw.length; i++) bin[i] = raw.charCodeAt(i);
    bin = bin.buffer;
  } else {
    [meta, bin] = await Promise.all([
      fetch(base + 'lumi.json').then(r => r.json()),
      fetch(base + 'lumi.bin').then(r => r.arrayBuffer()),
    ]);
  }

  // ---------- renderer ----------
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.NoToneMapping;
  renderer.shadowMap.enabled = true; renderer.shadowMap.type = THREE.PCFShadowMap;
  renderer.setClearColor(0x000000, 0);
  const mobile = matchMedia('(max-width: 700px)').matches;

  const scene = new THREE.Scene();
  scene.add(new THREE.AmbientLight(0xffffff, 1.25));
  const key = new THREE.DirectionalLight(0xffffff, 1.7);
  key.position.set(180, 420, 260); key.castShadow = true;
  key.shadow.mapSize.set(mobile ? 1024 : 2048, mobile ? 1024 : 2048);
  Object.assign(key.shadow.camera, { left: -260, right: 260, top: 260, bottom: -260, near: 50, far: 1200 });
  key.shadow.bias = -0.0004; key.shadow.normalBias = 0.6;
  scene.add(key);
  const ground = new THREE.Mesh(new THREE.PlaneGeometry(2000, 2000),
    new THREE.ShadowMaterial({ color: new THREE.Color(section.dataset.shadow || '#b04a78'), opacity: 0.22 }));
  ground.rotation.x = -Math.PI / 2; ground.receiveShadow = true; scene.add(ground);
  const camera = new THREE.PerspectiveCamera(30, 1, 10, 5000);

  // ---------- parts ----------
  const [cx, cy, cz] = meta.centre;
  const turn = new THREE.Group(); scene.add(turn);
  const root = new THREE.Group(); root.rotation.x = -Math.PI / 2; turn.add(root);
  const ramp = new THREE.DataTexture(new Uint8Array([120, 120, 120, 255, 200, 200, 200, 255, 255, 255, 255, 255]), 3, 1);
  ramp.minFilter = ramp.magFilter = THREE.NearestFilter; ramp.needsUpdate = true;
  const parts = [];
  for (const p of meta.parts) {
    const q = new Uint16Array(bin, p.v[0], p.v[1] * 3);
    const pos = new Float32Array(q.length);
    for (let i = 0; i < q.length; i++) pos[i] = p.lo[i % 3] + q[i] * p.sc[i % 3];
    const idx = p.i[2] === 2 ? new Uint16Array(bin, p.i[0], p.i[1]) : new Uint32Array(bin, p.i[0], p.i[1]);
    let g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(pos, 3)); g.setIndex(new THREE.BufferAttribute(idx, 1));
    g.computeBoundingBox();
    const c = new THREE.Vector3(); g.boundingBox.getCenter(c);
    g.translate(-c.x, -c.y, -c.z);
    g = toCreasedNormals(g, Math.PI / 5);
    const m = new THREE.Mesh(g, new THREE.MeshToonMaterial({ color: new THREE.Color(p.color), gradientMap: ramp }));
    m.castShadow = true;
    const dir = new THREE.Vector3(...p.dir);
    const qa = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), dir);
    const inner = new THREE.Group(); inner.quaternion.copy(qa).invert(); inner.add(m);
    const sq = new THREE.Group(); sq.quaternion.copy(qa); sq.add(inner);
    const pivot = new THREE.Group(); pivot.add(sq);
    pivot.userData = { home: new THREE.Vector3(c.x - cx, c.y - cy, c.z - cz), dir, p, sq, mesh: m,
      dist: p.dist || 230, base: !!p.base,
      side: new THREE.Vector3().crossVectors(dir, Math.abs(dir.z) > .9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 0, 1)).normalize() };
    root.add(pivot); parts.push(pivot);
  }
  // Lumi logo on the objective cap
  {
    const sh = Object.values(meta.logo).map(pts => new THREE.Shape(pts.map(([x, y]) => new THREE.Vector2(x, y))));
    const g = new THREE.ShapeGeometry(sh, 6);
    g.computeBoundingBox(); const b = g.boundingBox, k = 66 / (b.max.x - b.min.x);
    g.translate(-(b.min.x + b.max.x) / 2, -(b.min.y + b.max.y) / 2, 0); g.scale(k, k, k); g.rotateX(Math.PI / 2);
    const cap = parts.find(p => p.userData.p.name === 'capuchon objectif');
    const decal = new THREE.Mesh(g, new THREE.MeshBasicMaterial({ color: 0xc9507f, side: THREE.DoubleSide,
      polygonOffset: true, polygonOffsetFactor: -4 }));
    decal.position.set(0, -180.4 + 166, 0);
    cap.userData.mesh.add(decal);
  }
  root.position.y = meta.size[2] / 2;
  const AXZ = 80 + cy;                       // vertical axis of the base, relative to the centre
  turn.position.z = AXZ; root.position.z = -AXZ;

  // ---------- choreography (same timing as the video) ----------
  const T0 = 0.6, TB = 1.35, STEP = 0.42, FLY = 0.95;
  let slot = 0; const slots = {}; const R2 = rng(3);
  for (const pv of parts) {
    const u = pv.userData, n = u.p.name, k = (n === 'bouton 1' || n === 'bouton 2') ? 'b' : undefined;
    if (u.base) u.start = T0;
    else if (k && slots[k] !== undefined) u.start = slots[k];
    else { u.start = TB + slot * STEP; slot++; if (k) slots[k] = u.start; }
    u.spin = new THREE.Vector3(R2() - .5, R2() - .5, R2() - .5).normalize();
    u.spinA = (R2() < .5 ? -1 : 1) * (0.5 + R2() * 0.5);
    u.arc = (R2() < .5 ? -1 : 1) * (0.18 + R2() * 0.12);
  }
  const ASSEMBLED = Math.max(...parts.map(p => p.userData.start)) + FLY + 0.4;
  const qq = new THREE.Quaternion();
  function place(t) {
    for (const pv of parts) {
      const u = pv.userData;
      if (u.base) {
        const x = seg(t, u.start, u.start + 0.55);
        pv.visible = x > 0; if (!pv.visible) continue;
        pv.position.copy(u.home); pv.quaternion.identity();
        const pop = backOut(x, 1.6), w = jelly(t - u.start - 0.3, 0.07);
        u.sq.scale.set(pop * (1 + w), pop * (1 + w), pop * (1 - w * 1.4));
        continue;
      }
      const x = seg(t, u.start, u.start + FLY);
      pv.visible = x > 0; if (!pv.visible) continue;
      const r = 1 - approach(x);
      pv.position.copy(u.home).addScaledVector(u.dir, u.dist * r).addScaledVector(u.side, u.dist * u.arc * r * r * 1.6);
      qq.setFromAxisAngle(u.spin, u.spinA * Math.pow(1 - clamp(x / 0.7), 2) * 2.2);
      pv.quaternion.copy(qq);
      const pop = backOut(seg(t, u.start, u.start + 0.32), 2.0);
      const stretch = 0.16 * Math.pow(1 - clamp(x), 2.2) * clamp(seg(t, u.start + 0.1, u.start + 0.25));
      const w = jelly(t - (u.start + FLY * 0.72), 0.06);
      const along = (1 + stretch) * (1 - w), across = (1 - stretch * 0.45) * (1 + w * 0.5);
      u.sq.scale.set(pop * across, pop * across, pop * along);
    }
  }
  const target = new THREE.Vector3(0, meta.size[2] * 0.5 - 20, 0);
  const az = THREE.MathUtils.degToRad(38), el = THREE.MathUtils.degToRad(20);
  const frameSize = +(section.dataset.frame || 418);   // scene units kept in view on the shorter side (418 = original framing)
  const frameWide = +(section.dataset.frameWide || frameSize);   // landscape screens (desktop) can use their own framing
  function placeCamera() {
    const frame = camera.aspect > 1 ? frameWide : frameSize;
    const half = Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * Math.min(camera.aspect, 1);
    const dist = frame / 2 / half;
    camera.position.set(dist * Math.cos(el) * Math.sin(az), target.y + dist * Math.sin(el), dist * Math.cos(el) * Math.cos(az));
    camera.lookAt(target);
  }

  // ---------- size ----------
  function resize() {
    const r = canvas.getBoundingClientRect();
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    renderer.setSize(r.width, r.height, false);
    camera.aspect = r.width / r.height; camera.updateProjectionMatrix();
    placeCamera();
    dirty = true;
  }

  // ---------- scroll -> time ----------
  const T_START = T0 + 0.05;                 // the mount is already popping in when the section starts
  let cur = -1, want = 0, dirty = true;
  function progress() {
    const r = section.getBoundingClientRect(), run = section.offsetHeight - innerHeight;
    return run > 0 ? clamp(-r.top / run) : 0;
  }
  function onScroll() { want = still ? 1 : progress(); }
  function frame() {
    if (cur < 0) cur = want;
    const d = want - cur;
    cur = Math.abs(d) < 0.0004 ? want : cur + d * 0.18;     // gentle follow: smooth even with a jumpy scroll wheel
    if (d !== 0 || dirty) {
      const a = 1 - spinShare;
      const t = T_START + (ASSEMBLED - T_START) * clamp(cur / a);
      place(t);
      turn.rotation.y = cur > a ? Math.PI * 2 * ((cur - a) / spinShare) : 0;
      renderer.render(scene, camera);
      section.style.setProperty('--lumi-progress', cur.toFixed(4));   // lets the CSS fade the intro text
      section.classList.toggle('is-scrolled', cur > 0.1);
      section.classList.toggle('is-done', cur > 0.97);
      dirty = false;
    }
    requestAnimationFrame(frame);
  }
  resize(); onScroll();
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', resize);
  section.classList.add('is-ready');
  requestAnimationFrame(frame);
}

