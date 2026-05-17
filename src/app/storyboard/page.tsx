'use client';

import { useState } from 'react';

// ── SHOT DATA ──────────────────────────────────────────────────────────────────
const SHOTS = {
  TP: [ // TPA Jalupang
    { id: 'TP-01', cam: 'DRONE',  note: 'Aerial wide — establishing shot, slow descend' },
    { id: 'TP-02', cam: 'DRONE',  note: 'Flyover tumpukan sampah — slow horizontal' },
    { id: 'TP-03', cam: 'TRIPOD', note: 'Ground wide — area dumping truk'         },
    { id: 'TP-04', cam: 'GIMBAL', note: 'Medium — pemulung bekerja di TPA'        },
    { id: 'TP-05', cam: 'HAND',   note: 'Macro — tekstur plastik & sisa makanan'  },
    { id: 'TP-06', cam: 'HAND',   note: 'Air lindi hitam mengalir — close up'    },
    { id: 'TP-07', cam: 'GIMBAL', note: 'Portrait — warga sekitar TPA',           },
    { id: 'TP-08', cam: 'TRIPOD', note: 'Wide — aktivitas pembuangan truk'       },
    { id: 'TP-09', cam: 'HAND',   note: 'Asap / kebakaran TPA (opsional)'        },
    { id: 'TP-10', cam: 'TRIPOD', note: 'Wawancara warga sekitar (opsional)'     },
  ],
  SP: [ // Sampah Perkotaan
    { id: 'SP-01', cam: 'GIMBAL', note: 'Pasar tradisional — tumpukan sampah pagi' },
    { id: 'SP-02', cam: 'HAND',   note: 'Drainase — sampah nyangkut, air genang'  },
    { id: 'SP-03', cam: 'GIMBAL', note: 'Sungai tercemar — wide, sampah terapung'},
    { id: 'SP-04', cam: 'GIMBAL', note: 'Pemukiman padat — sampah rumah tangga'  },
    { id: 'SP-05', cam: 'TRIPOD', note: 'TPS penuh — truk samar antre'          },
    { id: 'SP-06', cam: 'GIMBAL', note: 'Anak-anak di area kumuh (slow motion)'  },
  ],
  SL: [ // Solusi & Komnas
    { id: 'SL-01', cam: 'GIMBAL', note: 'Bank sampah — warga memilah, menimbang'   },
    { id: 'SL-02', cam: 'HAND',   note: 'Pencatatan & penimbangan bank sampah'    },
    { id: 'SL-03', cam: 'GIMBAL', note: 'Komunitas aksi bersih-bersih — wide'     },
    { id: 'SL-04', cam: 'HAND',   note: 'Tim Komnas PPLH — rapat/diskusi'         },
    { id: 'SL-05', cam: 'GIMBAL', note: 'Tim Komnas PPLH — turun lapangan'        },
    { id: 'SL-06', cam: 'TRIPOD', note: 'Portrait profil tim (opsional)'           },
  ],
};

const FRAME_BG = [
  'linear-gradient(150deg,#0d1b2e 0%,#162447 55%,#0f2547 100%)',
  'linear-gradient(150deg,#1a0800 0%,#2d1208 55%,#1f0e04 100%)',
  'linear-gradient(150deg,#150800 0%,#2a1808 55%,#1a1000 100%)',
  'linear-gradient(150deg,#08081a 0%,#161635 55%,#0d0d22 100%)',
  'linear-gradient(150deg,#081608 0%,#0f2810 55%,#081608 100%)',
];

const SCENES = [
  {
    id: 1, title: 'PEMBUKA', subtitle: 'Establishing Shot', timecode: '0:00 – 0:35', duration: '35 detik',
    mood: 'Contemplatif', moodCls: 'orange', camGroup: 'TP', bg: FRAME_BG[0],
    icon: '🏔',
    shots: SHOTS.TP, audio: { mus: 'Cinematic string intro — minor', sfx: 'Hening → ambience kota', nar: 'Karawang. Kota industri, lumbung padi.' },
    ssml: `<break time="1000ms"/>Karawang.<break time="800ms"/>Kota industri, lumbung padi Jawa Barat.<break time="500ms"/>ada satu masalah yang makin hari makin <emphasis level="strong">mencekik.</emphasis>`,
  },
  {
    id: 2, title: 'DATA & FAKTA', subtitle: 'The Numbers', timecode: '0:35 – 1:15', duration: '40 detik',
    mood: 'Shock', moodCls: 'red', camGroup: 'SP', bg: FRAME_BG[1],
    icon: '📊',
    shots: SHOTS.SP, audio: { mus: 'Ticking → impact beat', sfx: 'Riser → impact', nar: '1.300 ton/min. DLHK: >1.500 ton/hari.' },
    ssml: `<prosody rate="fast">Setiap hari.</prosody><emphasis level="strong">1.500 ton per hari.</emphasis>`,
  },
  {
    id: 3, title: 'TPA JALUPANG', subtitle: 'Critical Zone', timecode: '1:15 – 1:50', duration: '35 detik',
    mood: 'Krisis', moodCls: 'red', camGroup: 'TP', bg: FRAME_BG[2],
    icon: '🏭',
    shots: SHOTS.TP, audio: { mus: 'Cello bass — tegang', sfx: 'Drone rumble, lalat', nar: 'TPA Jalupang. Kapasitas jauh melebihi batas.' },
    ssml: `TPA Jalupang.<break time="500ms"/>Jengkal terakhir.<emphasis level="strong">Jauh melebihi batas.</emphasis>`,
  },
  {
    id: 4, title: 'DAMPAK', subtitle: 'Lingkungan & Masyarakat', timecode: '1:50 – 2:20', duration: '30 detik',
    mood: 'Krisis', moodCls: 'red', camGroup: 'SP', bg: FRAME_BG[3],
    icon: '⚠️',
    shots: SHOTS.SP, audio: { mus: 'Adagio string → klimax', sfx: 'Air, fire crackle', nar: 'Sungai jadi jalur sampah. Ini soal kesehatan.' },
    ssml: `Sungai jadi jalur sampah.<break time="300ms"/><emphasis level="strong">Ini soal kesehatan. Soal masa depan.</emphasis>`,
  },
  {
    id: 5, title: 'PENUTUP', subtitle: 'Solusi & Call to Action', timecode: '2:20 – 3:00', duration: '40 detik',
    mood: 'Harapan', moodCls: 'green', camGroup: 'SL', bg: FRAME_BG[4],
    icon: '🌱',
    shots: SHOTS.SL, audio: { mus: 'Piano rising → crescendo → resolved', sfx: 'Warga bekerja, obrolan', nar: 'Masih ada harapan. DPD Komnas PPLH hadir mengawal.' },
    ssml: `Tapi <emphasis level="strong">masih ada harapan.</emphasis><break time="500ms"/>DPD Komnas PPLH Karawang hadir.`,
  },
];

const BADGE_MAP: Record<string, string> = { orange: 'badge orange', red: 'badge red', green: 'badge green', blue: 'badge blue' };

// ── COMPONENTS ────────────────────────────────────────────────────────────────
function HighlightSSML(text: string) {
  return text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/(&lt;\/?[a-z][^&]*?&gt;)/gi, '<span style="color:#7ee787">$1</span>')
    .replace(/(time|rate|level)=/gi, '<span style="color:#79c0ff">$1</span>=')
    .replace(/(".*?")/g, '<span style="color:#a5d6ff">$1</span>');
}

export default function StoryboardPage() {
  const [sceneIdx, setSceneIdx] = useState(0);
  const scene = SCENES[sceneIdx];

  return (
    <main style={{ maxWidth: 1200, margin: '0 auto', padding: '1.5rem' }}>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display:'flex', alignItems:'baseline', gap:10, flexWrap:'wrap' }}>
          <h1 style={{ fontSize: 28, fontWeight: 800, color: 'var(--on-bg)', letterSpacing: '-.03em' }}>Storyboard</h1>
          <span className="badge orange">Karawang dalam Darurat Sampah</span>
        </div>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 6 }}>
          5 scenes · 22 shots · Visual Editor · Cinematic Design System (Google Stitch)
        </p>
      </div>

      {/* ── Scene Grid Header ── */}
      <div className="section-header" style={{ marginBottom: 12 }}>Scene Overview</div>
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 10, marginBottom: 24,
      }}>
        {SCENES.map((s, i) => {
          const moodCls = BADGE_MAP[s.moodCls] || 'badge orange';
          return (
            <button key={s.id}
              onClick={() => setSceneIdx(i)}
              style={{
                background: i === sceneIdx ? 'rgba(245,158,11,.09)' : 'var(--surface-1)',
                border: `2px solid ${i === sceneIdx ? 'var(--primary-container)' : 'var(--border)'}`,
                borderRadius: 10, padding: '12px 14px',
                textAlign: 'left', cursor: 'pointer',
                transition: 'all 120ms',
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: i === sceneIdx ? 'var(--primary-container)' : 'var(--on-variant)', marginBottom: 4 }}>
                SCENE {String(s.id).padStart(2,'0')}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--on-surface)', marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 6 }}>{s.timecode}</div>
              <span className={moodCls} style={{ fontSize: 9 }}>{s.mood}</span>
            </button>
          );
        })}
      </div>

      {/* ── Detail Row ── */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, alignItems: 'start' }}>

        {/* ─ LEFT: Preview + Shot List ─ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Frame Preview */}
          <div style={{
            background: 'var(--surface-1)', border: '1px solid var(--border)',
            borderRadius: 12, overflow: 'hidden',
          }}>
            <div style={{ aspectRatio: '16/9', background: scene.bg, position: 'relative' }}>
              {/* Letterbox bars */}
              <div style={{ position:'absolute', inset:0, display:'flex', flexDirection:'column', justifyContent:'space-between',
                           padding: '16px 24px', zIndex: 1 }}>
                {/* Top bar */}
                <div style={{
                  background: '#000', padding: '8px 20px', borderRadius: 4,
                  textAlign: 'center', alignSelf: 'center',
                }}>
                  <span style={{ fontSize: 'clamp(20px,3.5vw,44px)', fontWeight: 900,
                                 color: '#fff', letterSpacing: '-.03em', textShadow: '0 2px 32px rgba(0,0,0,.9)' }}>
                    {scene.title}
                  </span>
                  <div style={{ fontSize: 10, color: 'var(--primary-container)', marginTop: 2, fontFamily: 'monospace', letterSpacing: '.04em' }}>
                    {scene.timecode}  |  SEGMEN {scene.id} — {scene.title}
                  </div>
                </div>
                {/* Bottom bar — shot type icons */}
                <div style={{
                  background: '#000', padding: '6px 16px', borderRadius: 4,
                  display: 'flex', gap: 8, justifyContent: 'center',
                }}>
                  {[...scene.shots.slice(0, 6), ...(scene.shots.length > 6 ? [{id:'...',cam:'...',note:'...'}] : [])].map((s, i) => (
                    <div key={i} style={{
                      padding: '2px 10px', borderRadius: 999,
                      background: 'rgba(255,255,255,.1)',
                      fontSize: 9, color: 'rgba(255,255,255,.6)',
                    }}>{s.cam}</div>
                  ))}
                </div>
              </div>
              {/* Big scene icon in background */}
              <div style={{
                position:'absolute', bottom: 30, right: 24,
                fontSize: 80, opacity: .12, zIndex: 0, filter: 'grayscale(1)',
              }}>{scene.icon}</div>
            </div>

            {/* Shot List */}
            <div style={{ padding: 14 }}>
              <div className="section-header">Shot List — {scene.title}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {scene.shots.map((s, i) => (
                  <div key={s.id} className="card" style={{
                    display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 12px',
                    borderColor: 'var(--border)',
                    background: i % 2 === 0 ? 'var(--surface-1)' : 'var(--surface-2)',
                  }}>
                    <span className="badge orange" style={{ flexShrink: 0, fontSize: 9 }}>{s.id}</span>
                    <div>
                      <div style={{ fontSize: 12, fontWeight: 600, color: 'var(--on-surface)' }}>
                        <span className="text-primary">{' ['+s.cam+'] '}</span>{s.note}
                      </div>
                      <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 1 }}>
                        Segmen {scene.id} · {scene.title}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ─ RIGHT: Audio + SSML ─ */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>

          {/* Audio Mix */}
          <div className="panel">
            <div className="section-header">Audio Mix — Segmen {scene.id}</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div>
                <div style={{ fontSize: 10, color: '#42bbff', marginBottom: 3, fontWeight: 600 }}>🎵 MUSIK</div>
                <div style={{ background: 'var(--surface-2)', height: 14, borderRadius: 7, overflow: 'hidden' }}>
                  <div style={{
                    width: scene.id === 5 ? '100%' : `${90 - scene.id * 8}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg,#1e3a6e,#42bbff55)',
                  }} />
                </div>
                <div style={{ fontSize: 10, color: 'var(--on-variant)', marginTop: 3, fontStyle: 'italic' }}>{scene.audio.mus}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: '#fca5a5', marginBottom: 3, fontWeight: 600 }}>🔊 SFX</div>
                <div style={{ background: 'var(--surface-2)', height: 14, borderRadius: 7, overflow: 'hidden' }}>
                  <div style={{
                    width: scene.id === 1 ? '15%' : `${60 - scene.id * 5}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg,#3d1f0a,#fca5a544)',
                  }} />
                </div>
                <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 3 }}>{scene.audio.sfx}</div>
              </div>
              <div>
                <div style={{ fontSize: 10, color: 'var(--primary-container)', marginBottom: 3, fontWeight: 600 }}>🎙️ NARASI</div>
                <div style={{ background: 'var(--surface-2)', height: 14, borderRadius: 7, overflow: 'hidden' }}>
                  <div style={{
                    width: `${80 - scene.id * 5}%`,
                    height: '100%',
                    background: 'linear-gradient(90deg,#613b00,#ffc174)',
                  }} />
                </div>
                <div style={{ fontSize: 10, color: 'var(--on-variant)', marginTop: 3, fontStyle: 'italic' }}>{scene.audio.nar}</div>
              </div>
            </div>
          </div>

          {/* SSML — ElevenLabs */}
          <div className="panel">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 10 }}>
              <div className="section-header" style={{ marginBottom: 0 }}>ElevenLabs SSML — Segmen {scene.id}</div>
              <button onClick={() => navigator.clipboard.writeText(scene.ssml)}
                style={{
                  fontSize: 10, padding: '3px 10px', borderRadius: 5,
                  background: 'var(--surface-2)', color: 'var(--label)',
                  border: '1px solid var(--border)', cursor: 'pointer',
                }}>
                Copy SSML
              </button>
            </div>
            <pre style={{
              background: '#0d1117', border: '1px solid var(--border)', borderRadius: 8,
              padding: 14, fontFamily: 'Courier New, monospace', fontSize: 11.5,
              color: '#adb5bd', lineHeight: 1.8, whiteSpace: 'pre-wrap', wordBreak: 'break-all',
            }} dangerouslySetInnerHTML={{ __html: HighlightSSML(scene.ssml) }} />
            <div style={{ marginTop: 10, display: 'flex', gap: 16, flexWrap: 'wrap', fontSize: 10 }}>
              <span>⚡ Speed: <strong style={{ color: 'var(--primary-container)' }}>{scene.id<=2 || scene.id===4 ? '+3%' : '±0%'}</strong></span>
              <span>🎙️ Voice: <strong style={{ color: 'var(--primary-container)' }}>Aurora (ID Female)</strong></span>
              <span>⚙️ Stability: <strong style={{ color: 'var(--primary-container)' }}>40%</strong></span>
              <span>🔊 Similarity: <strong style={{ color: 'var(--primary-container)' }}>80%</strong></span>
              <span>⏱️ Target: <strong style={{ color: 'var(--primary-container)' }}>{scene.duration}</strong></span>
            </div>
          </div>

          {/* Production Info */}
          <div className="panel">
            <div className="section-header">Info Produksi — Segmen {scene.id}</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, fontSize: 12 }}>
              <div><span style={{ color: 'var(--muted)' }}>Timecode</span><br /><strong style={{ color: 'var(--on-surface)' }}>{scene.timecode}</strong></div>
              <div><span style={{ color: 'var(--muted)' }}>Durasi</span><br /><strong style={{ color: 'var(--on-surface)' }}>{scene.duration}</strong></div>
              <div><span style={{ color: 'var(--muted)' }}>Mood</span><br /><strong style={{ color: 'var(--on-surface)' }}>{scene.mood}</strong></div>
              <div><span style={{ color: 'var(--muted)' }}>Jumlah Shot</span><br /><strong style={{ color: 'var(--on-surface)' }}>{scene.shots.length} shots</strong></div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Frame Thumbnails ── */}
      <div style={{ marginTop: 28 }}>
        <div className="section-header">Cinematic Frame Reference — {scene.title}</div>
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 10,
        }}>
          {[...scene.shots, ...scene.shots.slice(0, scene.shots.length > 5 ? 2 : 0)].map((s, i) => (
            <div key={s.id + i} style={{
              aspectRatio: '16/10', borderRadius: 8, overflow: 'hidden',
              background: s.cam === 'DRONE' ? 'linear-gradient(135deg,#1a3a5e,#162447)'
                : s.cam === 'GIMBAL' ? 'linear-gradient(135deg,#2a1808,#1a1000)'
                : s.cam === 'HAND'   ? 'linear-gradient(135deg,#1a2633,#0d1117)'
                :                       'linear-gradient(135deg,#162447,#0f2547)',
              border: '1px solid var(--border)',
              display: 'flex', flexDirection: 'column',
              justifyContent: 'flex-end', padding: 8,
              position: 'relative',
            }}>
              <div style={{
                position: 'absolute', top: 6, right: 6,
                fontSize: 9, padding: '2px 6px', borderRadius: 4,
                background: 'rgba(0,0,0,.5)', color: 'rgba(255,255,255,.55)',
              }}>{s.cam}</div>
              <div style={{
                background: 'rgba(0,0,0,.6)', borderRadius: 4,
                padding: '4px 8px', fontSize: 9, color: 'rgba(255,255,255,.8)',
              }}>
                <div style={{ fontWeight: 700 }}>{s.id}</div>
                <div style={{ opacity: .8, maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                  {s.note}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── All Shots Reference ── */}
      <div style={{ marginTop: 28, marginBottom: 32 }}>
        <div className="section-header">Shot Reference — Semua {SCENES.reduce((a,s) => a + s.shots.length, 0)} Shots</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SCENES.map(s => (
            <div key={s.id} className="panel" style={{ padding: '1rem 1.25rem' }}>
              <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom: 10, flexWrap:'wrap' }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: 'var(--primary-container)' }}>
                  S{String(s.id).padStart(2,'0')}
                </span>
                <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--on-surface)' }}>{s.title}</span>
                <span style={{ fontSize: 11, color: 'var(--muted)' }}>{s.timecode}</span>
                <span className={BADGE_MAP[s.moodCls] || 'badge orange'}>{s.mood}</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 6 }}>
                {s.shots.map(shot => (
                  <div key={shot.id} style={{
                    display: 'flex', alignItems: 'center', gap: 8,
                    fontSize: 11.5, color: 'var(--on-variant)',
                    padding: '5px 10px', background: 'var(--surface-2)',
                    borderRadius: 6, border: '1px solid var(--border)',
                  }}>
                    <span className="badge orange" style={{ fontSize: 9, flexShrink: 0 }}>{shot.id}</span>
                    <span style={{ fontWeight: 600, color: 'var(--primary)', minWidth: 42 }}>{shot.cam}</span>
                    <span style={{ flex: 1 }}>{shot.note}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
