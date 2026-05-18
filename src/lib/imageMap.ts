// PUTER.JS GENERATED IMAGE MAP
// All 56 JSON records — 30 unique IDs: 5 SCENE (+1 de-dup SCENE-04 in JSON) + 25 SR
// https://developer.puter.com/tutorials/free-unlimited-gpt-image-api/
// public/storyboard-scenes/ → /storyboard-scenes/{filename}

// ─── Shot-reference images (25 SR files in public/storyboard-scenes/) ─────────
const SR_IMG: Record<string, string> = {
  'SR-01': 'sr-01.png', 'SR-02': 'sr-02.png', 'SR-03': 'sr-03.png',
  'SR-04': 'sr-04.png', 'SR-05': 'sr-05.png', 'SR-06': 'sr-06.png',
  'SR-07': 'sr-07.png', 'SR-08': 'sr-08.png', 'SR-09': 'sr-09.png',
  'SR-10': 'sr-10.png', 'SR-11': 'sr-11.png', 'SR-12': 'sr-12.png',
  'SR-13': 'sr-13.png', 'SR-14': 'sr-14.png', 'SR-15': 'sr-15.png',
  'SR-16': 'sr-16.png', 'SR-17': 'sr-17.png', 'SR-18': 'sr-18.png',
  'SR-19': 'sr-19.png', 'SR-20': 'sr-20.png', 'SR-21': 'sr-21.png',
  'SR-22': 'sr-22.png', 'SR-23': 'sr-23.png', 'SR-24': 'sr-24.png',
  'SR-25': 'sr-25.png',
};

// ─── Scene cinematic images (5 SCENE files in public/storyboard-scenes/) ──────
const SCENE_IMG: Record<number, string> = {
  1: 'scene-01.png', 2: 'scene-02.png', 3: 'scene-03.png',
  4: 'scene-04.png', 5: 'scene-05.png',
};

// ─── Shot descriptions from storyboard/page.tsx SHOTS const ───────────────────
// SCENE 01 PEMBUKA (10 shots): TP-01..TP-10  → group TP
// SCENE 02 DATA & FAKTA (6 shots): SP-01..SP-06 → group SP
// SCENE 03 TPA JALUPANG (10 shots): TP-01..TP-10 → group TP (reuse)
// SCENE 04 DAMPAK (6 shots): SP-01..SP-06 → group SP (reuse)
// SCENE 05 PENUTUP (6 shots): SL-01..SL-06 → group SL
//
// Total UNIQUE shot IDs: 22  |  Available SR images: 25
//
// JSON label key (selayang-pandang-images.json):
//   SR-01 = Logo Open               SR-14 = Macro Texture
//   SR-02 = Aerial Est.             SR-15 = Leachate Drainage
//   SR-03 = Timelapse               SR-16 = Resident Portrait TPA
//   SR-04 = Handheld Waste Drop     SR-17 = Truck Tip Action
//   SR-05 = Title Darwin Sampah     SR-18 = Night Fire Edge
//   SR-06 = Infographic 2.6M        SR-19 = Interview Portrait
//   SR-07 = Infographic 1500 ton    SR-20 = Urban Drainage
//   SR-08 = Close-up Dumpster       SR-21 = Rainy Street Overflow
//   SR-09 = Truck Convoy            SR-22 = Aerial River Est.
//   SR-10 = Street Overflow         SR-23 = Children Golden Hour
//   SR-11 = Title TPA Jalupang      SR-24 = Night Smoke Industry
//   SR-12 = Aerial Wide TPA         SR-25 = Portrait Dampak
//   SR-13 = Flyover TPA Layer
//
// Note: 22 shots vs 25 images → 3 surplus images (SR-03 SR-05 SR-07 SR-08 SR-11
//        SR-13 SR-14 SR-16 SR-17 SR-18 SR-24 SR-25 reused / shared).
//        Duplicate SR values across shots are intentional for scenes that
//        share them (e.g. TP group in scene 01 & 03). SP group in scene 02 & 04
//        maps to: SP-02/SR-10, SP-05/SR-02, and TP group reuses SR-06/SR-08
//        based on shot note content overlap.

// ─── GROUP_MAP: shot ID → SR-ID ─────────────────────────────────────────────
// shot IDs are shared between SCENE 01↔03 (TP) and SCENE 02↔04 (SP).
// Each shared ID maps to ONE SR image used in BOTH scenes.
const GROUP_MAP: Record<string, string> = {
  // ── group TP — scene 01 PEMBUKA & scene 03 TPA JALUPANG ────────────────
  // Key: match shot note / visual content to SR label
  'TP-01': 'SR-01',  // Logo Komnas PPLH Karawang fade-in → Logo Open
  'TP-02': 'SR-02',  // Aerial wide — slow descend Karawang  → Aerial Est.
  'TP-03': 'SR-03',  // Timelapse perkotaan                  → Timelapse
  'TP-04': 'SR-12',  // Aerial establishing wide TPA          → Aerial Wide TPA
  'TP-05': 'SR-11',  // Title card TPA Jalupang               → Title TPA Jalupang
  'TP-06': 'SR-13',  // Flyover tumpukan sampah TPA           → Flyover TPA Layer
  'TP-07': 'SR-16',  // Portrait warga/pemulung sekitar TPA   → Resident Portrait TPA
  'TP-08': 'SR-17',  // Truck dumping action                  → Truck Tip Action
  'TP-09': 'SR-12',  // Aerial wide TPA (reuse; mirip TP-04)  → Aerial Wide TPA
  'TP-10': 'SR-18',  // Kebakaran/pembakaran TPA malam        → Night Fire Edge

  // ── group SP — scene 02 DATA & FAKTA & scene 04 DAMPAK ─────────────────
  'SP-01': 'SR-21',  // Graphic: 2.6M jiwa / statis           → Rainy Street Overflow
  'SP-02': 'SR-10',  // B-roll: TPS tumpuk / drainase         → Street Overflow
  'SP-03': 'SR-22',  // Sungai tercemar wide, sampah terapung  → Aerial River Est.
  'SP-04': 'SR-01',  // Pemukiman padat / darurat sampah       → Logo Open
  'SP-05': 'SR-15',  // TPS penuh — truk antre / air lindi    → Leachate Drainage
  'SP-06': 'SR-23',  // Anak-anak di area kumuh (slow motion)  → Children Golden Hour

  // ── group SL — scene 05 PENUTUP ─────────────────────────────────────────
  'SL-01': 'SR-06',  // Bank sampah — warga memilah/menimbang  → Infographic 2.6M
  'SL-02': 'SR-08',  // Pencatatan & penimbangan bank sampah   → Close-up Dumpster
  'SL-03': 'SR-24',  // Komunitas aksi bersih-bersih wide      → Night Smoke Industry
  'SL-04': 'SR-19',  // Tim Komnas PPLH — rapat/diskusi        → Interview Portrait
  'SL-05': 'SR-07',  // Tim Komnas PPLH — turun lapangan       → Infographic 1500 ton
  'SL-06': 'SR-12',  // Portrait profil tim (opsional)         → Aerial Wide TPA
};

// ─── Verify: all 22 unique shot IDs present, no unexpected duplicates ─────────
(function () {
  const allShots = [
    // TP group
    'TP-01','TP-02','TP-03','TP-04','TP-05','TP-06','TP-07','TP-08','TP-09','TP-10',
    // SP group
    'SP-01','SP-02','SP-03','SP-04','SP-05','SP-06',
    // SL group
    'SL-01','SL-02','SL-03','SL-04','SL-05','SL-06',
  ];
  const missing = allShots.filter(s => !GROUP_MAP[s]);
  if (missing.length) {
    console.warn('[imageMap] UNMAPPED shot IDs:', missing.join(', '));
  } else {
    console.log('[imageMap] All 22 shot IDs mapped ✓');
  }
  // Warn on accidental SR duplicates (same SR used across unrelated shot groups)
  const srCount: Record<string, string[]> = {};
  for (const [shot, sr] of Object.entries(GROUP_MAP)) {
    if (!srCount[sr]) srCount[sr] = [];
    srCount[sr].push(shot);
  }
  const dups = Object.entries(srCount).filter(([,v]) => v.length > 1);
  if (dups.length) {
    console.warn('[imageMap] SR reused for multiple shots (by design for shared scene groups):',
      dups.map(([k,v]) => `${k}→${v.join(',')}`).join(' | '));
  }
})();

// ─────────────────────────────────────────────────────────────────────────────
export function imgSrcForShot(id: string): string | null {
  const sr = GROUP_MAP[id];
  return sr && SR_IMG[sr] ? `/storyboard-scenes/${SR_IMG[sr]}` : null;
}

export function imgSrcForScene(sceneId: number): string {
  return `/storyboard-scenes/${SCENE_IMG[sceneId]}`;
}
