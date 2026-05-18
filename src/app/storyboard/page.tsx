'use client';

import PdfButton from '../../components/PdfButton';
import { useState } from 'react';
import React from 'react';
import { imgSrcForShot, imgSrcForScene } from '@/lib/imageMap';

// ══════════════════════════════════════════════════════════════════════════════
// SHOT DATA
// ══════════════════════════════════════════════════════════════════════════════
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
    mood: 'Krisi', moodCls: 'red', camGroup: 'SP', bg: FRAME_BG[3],
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
  const [shotIdx, setShotIdx] = useState(0);
  const [showDetail, setShowDetail] = useState(false);
  
  const scene = SCENES[sceneIdx];
  const currentShots = scene.shots;
  const currentShot = currentShots[shotIdx];
  const shotUrl = imgSrcForShot(currentShot.id);

  // Navigation handlers
  const nextShot = () => {
    if (shotIdx < currentShots.length - 1) {
      setShotIdx(shotIdx + 1);
    } else {
      setShotIdx(0);
      if (sceneIdx < SCENES.length - 1) setSceneIdx(sceneIdx + 1);
    }
  };

  const prevShot = () => {
    if (shotIdx > 0) {
      setShotIdx(shotIdx - 1);
    } else {
      setShotIdx(currentShots.length - 1);
      if (sceneIdx > 0) setSceneIdx(sceneIdx - 1);
    }
  };

  return (
    <main id="pdf-storyboard">
      {/* PDF export bar */}
      <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: 16 }}>
        <PdfButton title="Selayang Pandang — Storyboard" targetId="pdf-storyboard" filename="selayang-pandang-storyboard.pdf" btnLabel="Download PDF" />
      </div>

      {/* Header */}
      <div style={{ marginBottom: 24 }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: 10, flexWrap: 'wrap' }}>
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
              onClick={() => { setSceneIdx(i); setShotIdx(0); }}
              style={{
                background: i === sceneIdx ? 'rgba(245,158,11,.09)' : 'var(--surface-1)',
                border: `2px solid ${i === sceneIdx ? 'var(--primary-container)' : 'var(--border)'}`,
                borderRadius: 10, padding: '12px 14px',
                textAlign: 'left', cursor: 'pointer',
                transition: 'all 120ms',
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: i === sceneIdx ? 'var(--primary-container)' : 'var(--on-variant)', marginBottom: 4 }}>
                SCENE {String(s.id).padStart(2, '0')}
              </div>
              <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--on-surface)', marginBottom: 6 }}>{s.title}</div>
              <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 6 }}>{s.timecode}</div>
              <span className={moodCls} style={{ fontSize: 9 }}>{s.mood}</span>
            </button>
          );
        })}
      </div>

      {/* ── Shot Viewer (Red Circle Area) ── */}
      <div style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 24,
        background: 'var(--surface-1)', border: '1px solid var(--border)', borderRadius: 12, padding: 20,
      }}>
        {/* RED CIRCLE AREA: Main Shot Preview */}
        <div style={{ position: 'relative' }}>
          <div className="section-header" style={{ marginBottom: 10 }}>Cinematic Frame Reference</div>
          <div style={{
            aspectRatio: '16/9', borderRadius: 8, overflow: 'hidden',
            background: '#0d1b2e', border: '1px solid var(--border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            {shotUrl ? (
              <img 
                src={shotUrl} 
                alt={currentShot.id} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', cursor: 'pointer' }}
                onClick={() => setShowDetail(true)}
              />
            ) : (
              <div style={{ fontSize: 48, color: 'var(--muted)' }}>📷</div>
            )}
            
            {/* Shot ID overlay on image */}
            <div style={{
              position: 'absolute', top: 8, left: 8,
              background: 'rgba(0,0,0,0.7)', color: 'var(--primary)',
              padding: '4px 8px', borderRadius: 4, fontSize: 12, fontWeight: 700,
            }}>
              {currentShot.id}
            </div>
            
            {/* Camera type overlay */}
            <div style={{
              position: 'absolute', top: 8, right: 8,
              background: 'rgba(0,0,0,0.7)', color: 'var(--on-surface)',
              padding: '4px 8px', borderRadius: 4, fontSize: 10,
            }}>
              {currentShot.cam}
            </div>
          </div>
          
          {/* ORANGE CIRCLE AREA: Shot Navigation */}
          <div style={{ display: 'flex', gap: 8, marginTop: 12 }}>
            <button
              onClick={prevShot}
              style={{
                flex: 1, padding: '8px 12px', borderRadius: 6,
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                color: 'var(--on-surface)', fontSize: 12, cursor: 'pointer',
              }}
            >← Prev</button>
            <button
              onClick={nextShot}
              style={{
                flex: 1, padding: '8px 12px', borderRadius: 6,
                background: 'var(--primary-container)', color: 'var(--on-primary)',
                border: 'none', fontSize: 12, fontWeight: 600, cursor: 'pointer',
              }}
            >Next →</button>
          </div>
        </div>

        {/* Shot Details */}
        <div>
          <div className="section-header" style={{ marginBottom: 10 }}>Shot Details</div>
          <div className="panel" style={{ padding: 16 }}>
            <div style={{ marginBottom: 12 }}>
              <span className="badge orange" style={{ fontSize: 10, marginBottom: 6, display: 'inline-block' }}>
                {currentShot.id}
              </span>
              <div style={{ fontSize: 14, fontWeight: 700, color: 'var(--on-surface)', marginTop: 4 }}>
                {currentShot.cam} Shot
              </div>
            </div>
            <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.6 }}>
              {currentShot.note}
            </div>
            
            {/* GREEN CIRCLE AREA: Click for full description */}
            <button
              onClick={() => setShowDetail(true)}
              style={{
                marginTop: 16, width: '100%', padding: '10px', borderRadius: 6,
                background: 'rgba(134,239,172,0.1)', border: '1px solid rgba(134,239,172,0.3)',
                color: '#86efac', fontSize: 12, cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              }}
            >
              <span>ℹ️</span> Lihat Deskripsi Lengkap
            </button>
          </div>
        </div>
      </div>

      {/* ── Detail Modal ── */}
      {showDetail && (
        <div style={{
          position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.8)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          zIndex: 1000, padding: 20,
        }} onClick={() => setShowDetail(false)}>
          <div className="panel" style={{
            maxWidth: 500, width: '100%', maxHeight: '80vh', overflow: 'auto',
            background: 'var(--surface-1)', border: '1px solid var(--border)',
          }} onClick={(e) => e.stopPropagation()}>
            <div className="section-header" style={{ marginBottom: 12 }}>Detail Shot: {currentShot.id}</div>
            <div style={{ marginBottom: 12 }}>
              <span className="badge orange" style={{ marginRight: 8 }}>{currentShot.id}</span>
              <span style={{ fontWeight: 600, color: 'var(--primary)' }}>{currentShot.cam}</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--on-variant)', marginBottom: 16, lineHeight: 1.7 }}>
              {currentShot.note}
            </div>
            <div style={{ fontSize: 11, color: 'var(--muted)' }}>
              <div style={{ marginBottom: 4 }}><strong>Scene:</strong> {scene.title}</div>
              <div style={{ marginBottom: 4 }}><strong>Timecode:</strong> {scene.timecode}</div>
              <div><strong>Mood:</strong> {scene.mood}</div>
            </div>
            <button
              onClick={() => setShowDetail(false)}
              style={{
                marginTop: 16, width: '100%', padding: '10px', borderRadius: 6,
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                color: 'var(--on-surface)', cursor: 'pointer',
              }}
            >Tutup</button>
          </div>
        </div>
      )}

      {/* ── Audio Mix ── */}
      <div className="panel" style={{ marginBottom: 24 }}>
        <div className="section-header" style={{ marginBottom: 12 }}>Audio Mix — Segmen {scene.id}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, color: 'var(--muted)', width: 70 }}>Music</span>
            <div style={{ flex: 1, height: 6, background: 'var(--surface-2)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: '70%', height: '100%', background: 'var(--primary-container)' }} />
            </div>
            <span style={{ fontSize: 11, color: 'var(--on-variant)' }}>{scene.audio.mus}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, color: 'var(--muted)', width: 70 }}>SFX</span>
            <div style={{ flex: 1, height: 6, background: 'var(--surface-2)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: '40%', height: '100%', background: 'var(--primary-container)' }} />
            </div>
            <span style={{ fontSize: 11, color: 'var(--on-variant)' }}>{scene.audio.sfx}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 11, color: 'var(--muted)', width: 70 }}>Narasi</span>
            <div style={{ flex: 1, height: 6, background: 'var(--surface-2)', borderRadius: 3, overflow: 'hidden' }}>
              <div style={{ width: '100%', height: '100%', background: 'var(--primary-container)' }} />
            </div>
            <span style={{ fontSize: 11, color: 'var(--on-variant)' }}>{scene.audio.nar}</span>
          </div>
        </div>
      </div>

      {/* ── Shot Strip ── */}
      <div className="section-header" style={{ marginBottom: 12 }}>Cinematic Frame Reference — {scene.title}</div>
      <div style={{ display: 'flex', gap: 12, overflow: 'auto', padding: '10px 2px 14px' }}>
        {scene.shots.map((s, i) => (
          <div 
            key={s.id} 
            onClick={() => setShotIdx(i)}
            style={{
              flex: '0 0 140px', background: i === shotIdx ? 'rgba(245,158,11,0.1)' : 'var(--surface-1)',
              border: `2px solid ${i === shotIdx ? 'var(--primary-container)' : 'var(--border)'}`,
              borderRadius: 8, padding: 6, cursor: 'pointer', textAlign: 'left',
              transition: 'all 120ms', opacity: i === shotIdx ? 1 : 0.6,
            }}
          >
            <div style={{ width: '100%', aspectRatio: '16/9', borderRadius: 6, overflow: 'hidden', background: '#0d1b2e', marginBottom: 5 }}>
              <img 
                src={imgSrcForShot(s.id) || ''} 
                alt={s.id} 
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }}
              />
            </div>
            <div style={{ fontSize: 10, fontWeight: 700, color: 'var(--primary-container)' }}>
              {s.id}
            </div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 1 }}>{s.cam}</div>
          </div>
        ))}
      </div>

      {/* ── SSML Viewer ── */}
      <div className="panel" style={{ marginBottom: 24 }}>
        <div className="section-header" style={{ marginBottom: 12 }}>ElevenLabs SSML</div>
        <pre style={{
          background: 'var(--surface-2)', padding: 12, borderRadius: 6,
          fontSize: 11, color: 'var(--on-variant)', overflow: 'auto',
          maxHeight: 150,
        }}>
          <code dangerouslySetInnerHTML={{ __html: HighlightSSML(scene.ssml) }} />
        </pre>
        <div style={{ fontSize: 10, color: 'var(--muted)', marginTop: 8 }}>
          Voice: Aurora (ID Female) · Stability: 40% · Similarity: 80% · Style: 25%
        </div>
      </div>

      {/* ── Shot Reference List ── */}
      <div style={{ marginTop: 28, marginBottom: 32 }}>
        <div className="section-header">Shot Reference — Semua {SCENES.reduce((a, s) => a + s.shots.length, 0)} Shots</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {SCENES.map(s => (
            <div key={s.id} className="panel" style={{ padding: '1rem 1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10, flexWrap: 'wrap' }}>
                <span style={{ fontSize: 18, fontWeight: 900, color: 'var(--primary-container)' }}>
                  S{String(s.id).padStart(2, '0')}
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