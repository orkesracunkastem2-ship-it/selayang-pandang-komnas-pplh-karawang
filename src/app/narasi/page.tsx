'use client';

import { useState } from 'react';
import { Copy, Check, Volume2, Download, Play } from 'lucide-react';

const NARASI_FILES = [
  {
    id: 1, file: 'segmen1_pembuka.ssml', scene: 'PEMBUKA', time: '0:00–0:35', target: '~40 detik', speed: '+3%',
    voice: 'Aurora (ID Female)',
    ssml: `<break time="1000ms"/>
Karawang.
<break time="800ms"/>
Kota industri, lumbung padi Jawa Barat.
Rumah bagi lebih dari 2,6 juta jiwa.
<break time="500ms"/>
Tapi di balik hiruk pikuk pembangunan,
<break time="300ms"/>
ada satu masalah yang makin hari makin <emphasis level="strong">mencekik.</emphasis>
<break time="800ms"/>
<prosody rate="slow"><emphasis level="strong">Darurat. Sampah.</emphasis></prosody>
<break time="500ms"/>
Ini Karawang hari ini.`,
  },
  {
    id: 2, file: 'segmen2_data_fakta.ssml', scene: 'DATA & FAKTA', time: '0:35–1:15', target: '~50 detik', speed: '+3%',
    voice: 'Aurora (ID Female)',
    ssml: `<prosody rate="fast">Setiap hari.</prosody>
<break time="300ms"/>
Setiap warga Karawang rata-rata menghasilkan setengah kilogram sampah.
<break time="500ms"/>
Kalikan dengan <emphasis level="strong">2,6 juta jiwa.</emphasis>
Dengan perhitungan sederhana, itu jadi 1.300 ton per hari.
Data D-L-H-K Jawa Barat sebut angka bahkan mencapai
<emphasis level="strong">lebih dari 1.500 ton per hari.</emphasis>
<break time="200ms"/>
Artinya, realita di lapangan jauh lebih parah dari perhitungan minimal.
<break time="800ms"/>
Bukan hanya angka.
<break time="300ms"/>
1.500 ton berarti: ribuan truk, puluhan hektar lahan,
dan beban lingkungan yang terus menumpuk tanpa solusi nyata.
<break time="500ms"/>
Dan dari semua sampah itu
<break time="1000ms"/>
sebagian besar berakhir di satu tempat:
<prosody rate="slow"><emphasis level="strong">TPA Jalupang.</emphasis></prosody>`,
  },
  {
    id: 3, file: 'segmen3_tpa_jalupang.ssml', scene: 'TPA JALUPANG', time: '1:15–1:50', target: '~39 detik', speed: '±0%',
    voice: 'Aurora (ID Female)',
    ssml: `TPA Jalupang.
<break time="500ms"/>
Jengkal terakhir pembuangan sampah Karawang.
<break time="800ms"/>
Dibuka puluhan tahun lalu, kini kapasitasnya
<emphasis level="strong">jauh melebihi batas.</emphasis>
Overload. Darurat.
<break time="500ms"/>
Warga di sekitarnya hidup berdampingan dengan bau, polusi udara,
dan air tanah yang terancam <emphasis level="strong">lindi.</emphasis>
<break time="800ms"/>
<prosody rate="slow">Tapi dampaknya tidak berhenti di sana.</prosody>`,
  },
  {
    id: 4, file: 'segmen4_dampak.ssml', scene: 'DAMPAK', time: '1:50–2:20', target: '~35 detik', speed: '+3%',
    voice: 'Aurora (ID Female)',
    ssml: `Sungai-sungai menjadi jalur sampah.
<break time="300ms"/>
Drainase tersumbat.
<break time="300ms"/>
Banjir di musim hujan jadi langganan.
<break time="700ms"/>
Ini bukan hanya soal lingkungan.
<break time="400ms"/>
<emphasis level="strong">Ini soal kesehatan.</emphasis>
<emphasis level="strong">Soal masa depan.</emphasis>
<emphasis level="strong">Soal anak-anak kita.</emphasis>
<break time="800ms"/>
Dan krisis ini terus terjadi.
<break time="300ms"/>
Setiap hari.
<break time="300ms"/>
Setiap malam.`,
  },
  {
    id: 5, file: 'segmen5_penutup.ssml', scene: 'PENUTUP', time: '2:20–3:00', target: '~55 detik', speed: '±0%',
    voice: 'Aurora (ID Female)',
    ssml: `Tapi <prosody rate="slow"><emphasis level="strong">masih ada harapan.</emphasis></prosody>
<break time="500ms"/>
Bank sampah bermunculan.
Komunitas peduli lingkungan mulai bergerak.
Perubahan dimulai dari langkah kecil.
<break time="700ms"/>
DPD Komnas PPLH Karawang hadir —
untuk mengawal, mengadvokasi,
dan memastikan isu lingkungan <emphasis level="strong">tidak dilupakan.</emphasis>
<break time="600ms"/>
Bukan hanya tugas pemerintah.
<break time="300ms"/>
Ini tanggung jawab kita semua.
<break time="400ms"/>
Setiap langkah kecil berarti.
<break time="700ms"/>
<prosody rate="slow">
Sampah bukan warisan.
<break time="400ms"/>
Sampah adalah tanggung jawab kita hari ini.
</prosody>`,
  },
];

function highlightSSML(t: string) {
  return t
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/(&lt;\/?[a-z][^&]*?&gt;)/gi, '<span style="color:#7ee787">$1</span>')
    .replace(/(time|rate|level)=/gi, '<span style="color:#79c0ff">$1</span>=')
    .replace(/(".*?")/g, '<span style="color:#a5d6ff">$1</span>');
}

function NarasiCard({ n, isOpen, onToggle }: { n: typeof NARASI_FILES[0]; isOpen: boolean; onToggle: () => void }) {
  const [copied, setCopied] = useState(false);
  return (
    <div style={{
      background: 'var(--surface-1)', border: `2px solid ${isOpen ? 'var(--primary-container)' : 'var(--border)'}`,
      borderRadius: 12, overflow: 'hidden', marginBottom: 12,
      transition: 'border-color 200ms',
    }}>
      {/* Header */}
      <button onClick={onToggle} style={{
        width: '100%', display:'flex', justifyContent:'space-between', alignItems:'center',
        padding: '14px 18px', background: isOpen ? 'rgba(245,158,11,.07)' : 'var(--surface-2)',
        border: 'none', cursor: 'pointer', textAlign: 'left',
      }}>
        <div style={{ display:'flex', alignItems:'center', gap: 12, flexWrap:'wrap' }}>
          <span style={{
            width:36,height:36,borderRadius:8,
            background: 'var(--primary-container)', color: 'var(--on-primary)',
            display:'flex', alignItems:'center', justifyContent:'center',
            fontWeight:900, fontSize:16, flexShrink:0,
          }}>{String(n.id).padStart(2,'0')}</span>
          <div>
            <div style={{ fontWeight:700, fontSize:15, color:'var(--on-surface)', display:'flex', alignItems:'center', gap:8 }}>
              {n.scene}
              <span className="badge orange" style={{ fontSize:9 }}>SSML</span>
            </div>
            <div style={{ fontSize:11, color:'var(--muted)', marginTop:2 }}>
              {n.file} · {n.time} · Target: {n.target}
            </div>
          </div>
        </div>
        <div style={{ display:'flex', alignItems:'center', gap:8 }}>
          <span style={{ fontSize:11, color:'var(--label)', background:'var(--surface-1)', padding:'3px 10px', borderRadius:5, border:'1px solid var(--border)' }}>
            Speed: {n.speed}
          </span>
          <span style={{
            fontSize: 13, color: 'var(--label)',
            transition: 'transform 200ms',
            transform: isOpen ? 'rotate(90deg)' : 'rotate(0deg)',
          }}>▶</span>
        </div>
      </button>

      {/* Expanded content */}
      {isOpen && (
        <div style={{ padding: '0 18px 18px' }}>
          {/* Info bar */}
          <div style={{
            display:'flex', gap:16, fontSize:11, color:'var(--label)',
            padding:'10px 0', borderBottom:'1px solid var(--border)', marginBottom:12,
          }}>
            <span>🎙️ Voice: <strong style={{ color:'var(--primary-container)' }}>{n.voice}</strong></span>
            <span>⚙️ Stability: <strong style={{ color:'var(--primary-container)' }}>40%</strong></span>
            <span>🔊 Similarity: <strong style={{ color:'var(--primary-container)' }}>80%</strong></span>
            <span>Style: <strong style={{ color:'var(--primary-container)' }}>25%</strong></span>
          </div>

          {/* SSML editor */}
          <div style={{ position:'relative' }}>
            <pre style={{
              background: '#0d1117', border: '1px solid var(--border)', borderRadius: 10,
              padding: '16px 16px 48px', fontFamily: "'Courier New', monospace", fontSize: 12.5,
              color: '#e6edf3', lineHeight: 1.9, whiteSpace: 'pre-wrap', wordBreak: 'break-all',
              overflowX: 'auto',
            }} dangerouslySetInnerHTML={{ __html: highlightSSML(n.ssml) }} />

            {/* Action bar bottom of pre */}
            <div style={{
              position:'absolute', bottom:0, left:0, right:0,
              display:'flex', alignItems:'center', justifyContent:'space-between',
              padding:'8px 14px', background:'rgba(13,17,23,.92)', backdropFilter:'blur(4px)',
              borderTop:'1px solid var(--border)', borderRadius:'0 0 10px 10px',
            }}>
              <span style={{ fontSize: 10, color: 'var(--muted)', display:'flex', alignItems:'center', gap:5 }}>
                <Volume2 size={11} /> File: {n.file}
              </span>
              <div style={{ display:'flex', gap:6 }}>
                <button onClick={() => { navigator.clipboard.writeText(n.ssml); setCopied(true); setTimeout(()=>setCopied(false),1500); }}
                  style={{
                    display:'flex', alignItems:'center', gap:5, fontSize:11, fontWeight:600,
                    padding:'5px 14px', borderRadius:6, cursor:'pointer',
                    background:'var(--surface-2)', color: copied ? 'var(--ok)' : 'var(--label)',
                    border:'1px solid var(--border)',
                  }}>
                  {copied ? <><Check size={12} /> Copied!</> : <><Copy size={12} /> Copy SSML</>}
                </button>
                <button onClick={() => { navigator.clipboard.writeText(n.ssml); }}
                  style={{
                    display:'flex', alignItems:'center', gap:5, fontSize:11, fontWeight:600,
                    padding:'5px 14px', borderRadius:6, cursor:'pointer',
                    background:'var(--primary-container)', color:'var(--on-primary)',
                  }}>
                  <Play size={11} /> Open ElevenLabs
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default function NarasiPage() {
  const [openId, setOpenId] = useState(1);

  return (
    <main style={{ maxWidth: 860, margin: '0 auto', padding: '1.5rem' }}>

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--on-bg)', letterSpacing: '-.03em', display:'flex', alignItems:'center', gap:10 }}>
          <Volume2 size={26} style={{ color:'var(--primary-container)' }} /> Narasi
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>
          5 file SSML untuk ElevenLabs — copy-paste langsung, siap generate.
        </p>
      </div>

      {/* Instructions */}
      <div style={{
        background: 'rgba(245,158,11,.06)', border: '1px solid rgba(245,158,11,.2)',
        borderRadius: 10, padding: '14px 18px', marginBottom: 24, fontSize: 13, color: 'var(--on-variant)',
      }}>
        <strong style={{ color: 'var(--primary-container)' }}>📋 Panduan Generate di ElevenLabs:</strong>
        <ol style={{ marginLeft: 20, marginTop: 8, lineHeight: 1.9 }}>
          <li>Buka <a href="https://elevenlabs.io" target="_blank" rel="noopener" style={{ color:'var(--primary)' }}>ElevenLabs.io</a></li>
          <li>Pilih voice <strong>perempuan Indonesia (Aurora/Sri)</strong></li>
          <li>Set parameter sesuai card berikut (stability 40%, similarity 80%, speed sesuai label)</li>
          <li>Klik <strong>Copy SSML</strong> → Paste ke kolom teks ElevenLabs</li>
          <li>Generate → Download → Simpan sebagai <code style={{background:'var(--surface-2)',padding:'2px 6px',borderRadius:4}}>.mp3</code> dengan nama yang sama</li>
        </ol>
      </div>

      {/* Cards */}
      {NARASI_FILES.map(n => (
        <NarasiCard key={n.id} n={n} isOpen={openId === n.id} onToggle={() => setOpenId(openId === n.id ? 0 : n.id)} />
      ))}

      <div style={{
        marginTop: 24, padding: '1rem',
        background: 'var(--surface-1)', border: '1px solid var(--border)',
        borderRadius: 10, fontSize: 12, color: 'var(--muted)',
      }}>
        <strong style={{ color:'var(--label)' }}>📂 Struktur file narasi yang diharapkan:</strong>
        <pre style={{
          fontFamily:'Courier New,monospace', fontSize:11, marginTop:8,
          background:'#0d1117', padding:12, borderRadius:8, color:'#adb5bd',
          lineHeight: 1.8,
        }}>
narasi/
  ├── README.md              (panduan generate)
  ├── segmen1_pembuka.ssml   (0:00–0:35  ~40s  +3%)
  ├── segmen2_data_fakta.ssml(0:35–1:15  ~50s  +3%)
  ├── segmen3_tpa_jalupang.ssml(1:15–1:50 ~39s ±0%)
  ├── segmen4_dampak.ssml    (1:50–2:20  ~35s  +3%)
  └── segmen5_penutup.ssml   (2:20–3:00  ~55s  ±0%)
        </pre>
        <p style={{ marginTop: 8 }}>
          ⚠️ Tag SSML yang <strong style={{color:'var(--primary-container)'}}>tidak didukung</strong> ElevenLabs: <code style={{background:'var(--surface-2)',padding:'1px 5px',borderRadius:4}}>&lt;pitch&gt;</code> dan <code style={{background:'var(--surface-2)',padding:'1px 5px',borderRadius:4}}>&lt;say-as&gt;</code>. Tag di artikel ini sudah difilter sesuai.
        </p>
      </div>

    </main>
  );
}
