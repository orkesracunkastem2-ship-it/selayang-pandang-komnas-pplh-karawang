const { createPuter } = require('puter');
const fs = require('fs');
const path = require('path');

const OUTPUT_DIR = path.join(__dirname, 'public/storyboard-scenes');
const W = 1920, H = 1080; // full-Next.js ingredient

const SCENE_PROMPTS = [
  {
    id: 'pembuka',
    label: 'Scene 01 — PEMBUKA',
    prompt: 'Cinematic aerial golden hour establishing shot of Karawang city, West Java Indonesia. Endless green rice fields in foreground, industrial factories and city lights glowing orange in the distance, dramatic sky with warm sun rays. Shot on drone minimalist cinematic composition,八大洲美学, 8K, filmstill 16:9. Dark teal and amber color grade.',
  },
  {
    id: 'data-fakta',
    label: 'Scene 02 — DATA & FAKTA',
    prompt: 'Cinematic abstract cinematic data visualization, floating numbers "2.600.000 jiwa" and icon of a truck with "1.500 ton/hari" in dramatic neon amber on dark navy background. Shallow depth of field, bokeh orange particles floating, film still cinematic shot, 8K, 16:9 aspect ratio. Moody editorial data journalism style.',
  },
  {
    id: 'tpa-jalupang',
    label: 'Scene 03 — TPA JALUPANG',
    prompt: 'Cinematic aerial wide shot of a large waste landfill (TPA Jalupang style), mountains of colorful plastic trash under dramatic overcast grey sky, smoke and haze in the air, storm approaching on the horizon. Shot on drone, desaturated cold color grade, apocalypse mood, urban decay, documentary film still, 8K, 16:9 aspect ratio. No people.',
  },
  {
    id: 'dampak',
    label: 'Scene 04 — DAMPAK',
    prompt: 'Cinematic dark moody shot of a polluted river in an Indonesian urban area, floating plastic waste and black water, small children in slum environment playing near contaminated riverbank in shallow depth of field. Desaturated yellow-green sickly color grade, dramatic side lighting, documentary style, 8K, 16:9. Social realism aesthetic.',
  },
  {
    id: 'penutup',
    label: 'Scene 05 — PENUTUP',
    prompt: 'Cinematic warm hopeful shot of community environmental solution in Karawang: people sorting recyclable waste at a community bank sampah (waste bank), green plants, bright morning golden light, smiling working together. Warm orange and green color grading, hopeful uplifting cinematic feel, documentary style, 8K, 16:9. Indonesian community setting.',
  },
];

async function main() {
  console.log('connecting to puter...');
  const puter = await createPuter();
  console.log('connected.');

  fs.mkdirSync(OUTPUT_DIR, { recursive: true });

  for (const scene of SCENE_PROMPTS) {
    console.log(`\n>>> generating: ${scene.label}`);
    try {
      const img = await puter.imgGen({
        prompt: scene.prompt,
        width: W,
        height: H,
        seed: Math.floor(Math.random() * 999999),
      });

      const filePath = path.join(OUTPUT_DIR, `${scene.id}.png`);
      await img.save(filePath);
      console.log(`✓ saved → ${filePath}`);
    } catch (e) {
      console.error(`✗ ERROR: ${scene.label}`, e.message);
    }

    // small delay to avoid rate-limit shock
    await new Promise(r => setTimeout(r, 2000));
  }

  console.log('\n=== DONE ===');
  await puter.logout();
}

main().catch(console.error);
