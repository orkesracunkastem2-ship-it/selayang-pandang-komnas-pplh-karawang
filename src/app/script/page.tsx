'use client';
import PdfButton from '../../components/PdfButton';

import { useState } from 'react';

const SEGMENTS = [
  {
    id: 1, title: 'PEMBUKA', time: '0:00 – 0:35', audioTime: '~39 detik', speed: '+3%', mood: 'Contemplatif', moodCls: 'orange',
    shots: [
      { id:'BLK-01', t:'0:00–0:05', dur:'5s',  cam:'BLACK',    note:'Logo Komnas PPLH Karawang — fade in pelan'        },
      { id:'FAD-02', t:'0:05–0:10', dur:'5s',  cam:'FADE',     note:'Logo fade out → aerial Karawang golden hour'     },
      { id:'TP-03', t:'0:10–0:16', dur:'6s',  cam:'DRONE',    note:'Aerial slow pan kanan — sawah, gunung, kota'     },
      { id:'G-04', t:'0:16–0:22', dur:'6s',  cam:'TRIPOD',   note:'Timelapse perkotaan — lalu lintas, pasar, industri'},
      { id:'SP-05', t:'0:22–0:28', dur:'6s',  cam:'HAND',     note:'Slow-mo buang sampah — 60fps → 24fps playback'   },
      { id:'K-06', t:'0:28–0:35', dur:'7s',  cam:'CUT',      note:'Black → teks DARURAT SAMPAH KARAWANG bold'       },
    ],
    narrasi: [
      { tag:'n',    text:'Karawang.' },
      { tag:'n',    text:'Kota industri, lumbung padi Jawa Barat. Rumah bagi lebih dari 2,6 juta jiwa.' },
      { tag:'n',    text:'Tapi di balik hiruk pikuk pembangunan...' },
      { tag:'n',    text:'ada satu masalah yang makin hari makin' },
      { tag:'em',   text:' mencekik.' },
      { tag:'n',    text:'' },
      { tag:'pro+em',text:'Darurat. Sampah.' },
      { tag:'n',    text:'' },
      { tag:'n',    text:'Ini Karawang hari ini.' },
    ],
    ssml: `<break time="1000ms"/>Karawang.\n<break time="800ms"/>Kota industri, lumbung padi Jawa Barat.\nRumah bagi lebih dari 2,6 juta jiwa.\n<break time="500ms"/>Tapi di balik hiruk pikuk pembangunan,\n<break time="300ms"/>ada satu masalah yang makin hari makin <emphasis level="strong">mencekik.</emphasis>\n<break time="800ms"/><prosody rate="slow"><emphasis level="strong">Darurat. Sampah.</emphasis></prosody>\n<break time="500ms"/>Ini Karawang hari ini.`,
  },
  {
    id: 2, title: 'DATA & FAKTA', time: '0:35 – 1:15', audioTime: '~50 detik', speed: '+3%', mood: 'Shock', moodCls: 'red',
    shots: [
      { id:'G-07', t:'0:35–0:39', dur:'4s',  cam:'STATIS',   note:'Graphic: 2.600.000 jiwa count-up (emas)'            },
      { id:'G-08', t:'0:39–0:44', dur:'5s',  cam:'STATIS',   note:'Graphic: 0,5kg ×  2,6 jt = 1.300 ton (middle)'    },
      { id:'G-09', t:'0:44–0:50', dur:'6s',  cam:'STATIS',   note:'Graphic: >1.500 TON/HARI merah + shake impact'    },
      { id:'SP-10', t:'0:50–0:54', dur:'4s',  cam:'HAND',     note:'B-roll: sampah tumpuk di TPS — slow push-in'       },
      { id:'SL-11', t:'0:54–1:00', dur:'6s',  cam:'GIMBAL',   note:'B-roll: truk antre, tumpukan membusuk — desaturated'},
      { id:'G-12', t:'1:00–1:06', dur:'6s',  cam:'TRIPOD',   note:'B-roll: warga buang sampah, TPS sesak'            },
      { id:'K-13', t:'1:06–1:12', dur:'6s',  cam:'CUT',      note:'Fade out teks: Sebagian besar berakhir di...'      },
      { id:'K-14', t:'1:12–1:15', dur:'3s',  cam:'CUT',      note:'Teks bold: TPA JALUPANG (merah/burn)'             },
    ],
    narrasi: [
      { tag:'pro',   text:'<prosody rate="fast">Setiap hari.</prosody>' },
      { tag:'n',     text:'Setiap warga Karawang rata-rata menghasilkan setengah kilogram sampah.' },
      { tag:'n',     text:'Kalikan dengan' },
      { tag:'em',    text:' 2,6 juta jiwa.' },
      { tag:'n',     text:'Dengan perhitungan sederhana, itu jadi 1.300 ton per hari.' },
      { tag:'n',     text:'Data DLHK Jawa Barat sebut angka bahkan mencapai' },
      { tag:'em',    text:' lebih dari 1.500 ton per hari.' },
      { tag:'n',     text:'Artinya, realita di lapangan jauh lebih parah dari perhitungan minimal.' },
      { tag:'n',     text:'Bukan hanya angka. 1.500 ton berarti: ribuan truk, puluhan hektar lahan, dan beban lingkungan yang terus menumpuk tanpa solusi nyata.' },
      { tag:'n',     text:'Dan dari semua sampah itu' },
      { tag:'n',     text:'' },
      { tag:'pro+em',text:'sebagian besar berakhir di satu tempat: TPA Jalupang.' },
    ],
    ssml: `<prosody rate="fast">Setiap hari.</prosody>\n<break time="300ms"/>\nSetiap warga Karawang rata-rata menghasilkan setengah kilogram sampah.\n<break time="500ms"/>\nKalikan dengan <emphasis level="strong">2,6 juta jiwa.</emphasis>\nDengan perhitungan sederhana, itu jadi 1.300 ton per hari.\nData D-L-H-K Jawa Barat sebut angka bahkan mencapai\n<emphasis level="strong">lebih dari 1.500 ton per hari.</emphasis>\n<break time="200ms"/>\nArtinya, realita di lapangan jauh lebih parah dari perhitungan minimal.\n<break time="800ms"/>\nBukan hanya angka.\n<break time="300ms"/>\n1.500 ton berarti: ribuan truk, puluhan hektar lahan,\ndan beban lingkungan yang terus menumpuk tanpa solusi nyata.\n<break time="500ms"/>\nDan dari semua sampah itu\n<break time="1000ms"/>\nsebagian besar berakhir di satu tempat:\n<prosody rate="slow"><emphasis level="strong">TPA Jalupang.</emphasis></prosody>`,
  },
  {
    id: 3, title: 'TPA JALUPANG', time: '1:15 – 1:50', audioTime: '~39 detik', speed: '±0%', mood: 'Krisis', moodCls: 'red',
    shots: [
      { id:'TP-15', t:'1:15–1:20', dur:'5s',  cam:'DRONE',    note:'Aerial wide TPA — asap, slow descend'               },
      { id:'TP-16', t:'1:20–1:27', dur:'7s',  cam:'DRONE',    note:'Flyover tumpukan sampah sejauh mata memandang'       },
      { id:'SP-17', t:'1:27–1:33', dur:'6s',  cam:'HAND',     note:'Tumpukan sampah close up — macro tekstur plastik'    },
      { id:'SP-18', t:'1:33–1:40', dur:'7s',  cam:'HAND',     note:'Air lindi hitam mengalir — tracking air'            },
      { id:'SL-19', t:'1:40–1:47', dur:'7s',  cam:'GIMBAL',   note:'Portrait warga/pemulung sekitar TPA — push-in'     },
      { id:'D-20', t:'1:47–1:50', dur:'3s',  cam:'DISSOLVE', note:'Transisi dissolve ke Segmen 4'                     },
    ],
    narrasi: [
      { tag:'n',   text:'TPA Jalupang.' },
      { tag:'n',   text:'Jengkal terakhir pembuangan sampah Karawang.' },
      { tag:'n',   text:'Dibuka puluhan tahun lalu, kini kapasitasnya' },
      { tag:'em',  text:' jauh melebihi batas.' },
      { tag:'n',   text:'Overload. Darurat.' },
      { tag:'n',   text:'Warga di sekitarnya hidup berdampingan dengan bau, polusi udara, dan air tanah yang terancam' },
      { tag:'em',  text:' lindi.' },
      { tag:'n',   text:'' },
      { tag:'pro', text:'<prosody rate="slow">Tapi dampaknya tidak berhenti di sana.</prosody>' },
    ],
    ssml: `TPA Jalupang.\n<break time="500ms"/>\nJengkal terakhir pembuangan sampah Karawang.\n<break time="800ms"/>\nDibuka puluhan tahun lalu, kini kapasitasnya\n<emphasis level="strong">jauh melebihi batas.</emphasis>\nOverload. Darurat.\n<break time="500ms"/>\nWarga di sekitarnya hidup berdampingan dengan bau, polusi udara,\ndan air tanah yang terancam <emphasis level="strong">lindi.</emphasis>\n<break time="800ms"/>\n<prosody rate="slow">Tapi dampaknya tidak berhenti di sana.</prosody>`,
  },
  {
    id: 4, title: 'DAMPAK', time: '1:50 – 2:20', audioTime: '~35 detik', speed: '+3%', mood: 'Krisis', moodCls: 'red',
    shots: [
      { id:'SL-21', t:'1:50–1:57', dur:'7s',  cam:'GIMBAL',   note:'Sungai tercemar — sampah terapung, air hitam'    },
      { id:'SP-22', t:'1:57–2:03', dur:'6s',  cam:'HAND',     note:'Drainase sampah nyangkut — air menggenang'       },
      { id:'SL-23', t:'2:03–2:10', dur:'7s',  cam:'GIMBAL',   note:'Anak-anak area kumuh — slow motion portrait'    },
      { id:'S-24', t:'2:10–2:16', dur:'6s',  cam:'HAND/WIDE',note:'Kebakaran TPA / asap hitam — visual dramatis'    },
      { id:'S-25', t:'2:16–2:20', dur:'4s',  cam:'PORTRAIT', note:'Warga pakai masker — pandangan kosong slow mo'  },
    ],
    narrasi: [
      { tag:'n',   text:'Sungai-sungai kita menjadi jalur sampah.' },
      { tag:'n',   text:'Drainase tersumbat. Banjir di musim hujan jadi langganan.' },
      { tag:'n',   text:'Ini bukan hanya soal lingkungan.' },
      { tag:'em',  text:' Ini soal kesehatan.' },
      { tag:'em',  text:' Soal masa depan.' },
      { tag:'em',  text:' Soal anak-anak kita.' },
      { tag:'n',   text:'' },
      { tag:'pro', text:'Dan krisis ini terus terjadi.' },
      { tag:'n',   text:'Setiap hari.' },
      { tag:'n',   text:'Setiap malam.' },
    ],
    ssml: `Sungai-sungai menjadi jalur sampah.\n<break time="300ms"/>\nDrainase tersumbat.\n<break time="300ms"/>\nBanjir di musim hujan jadi langganan.\n<break time="700ms"/>\nIni bukan hanya soal lingkungan.\n<break time="400ms"/>\n<emphasis level="strong">Ini soal kesehatan.</emphasis>\n<emphasis level="strong">Soal masa depan.</emphasis>\n<emphasis level="strong">Soal anak-anak kita.</emphasis>\n<break time="800ms"/>\nDan krisis ini terus terjadi.\n<break time="300ms"/>\nSetiap hari.\n<break time="300ms"/>\nSetiap malam.`,
  },
  {
    id: 5, title: 'PENUTUP', time: '2:20 – 3:00', audioTime: '~55 detik', speed: '±0%', mood: 'Harapan', moodCls: 'green',
    shots: [
      { id:'BLK-26', t:'2:20–2:26', dur:'6s',  cam:'BLACK',    note:'Jeda hitam transisi — sebelum scene positif'     },
      { id:'SL-27', t:'2:26–2:32', dur:'6s',  cam:'GIMBAL',   note:'Bank sampah — warga memilah, menimbang warm tone'},
      { id:'SL-28', t:'2:32–2:38', dur:'6s',  cam:'GIMBAL',   note:'Komunitas aksi bersih-bersih — wide gotong royong'},
      { id:'SL-29', t:'2:38–2:45', dur:'7s',  cam:'GIMBAL',   note:'Tim Komnas PPLH — sosialisasi, turun lapangan'   },
      { id:'O-30', t:'2:45–2:50', dur:'5s',  cam:'OVERLAY',  note:'Logo Komnas PPLH Karawang overlay kiri bawah'    },
      { id:'G-31', t:'2:50–2:56', dur:'6s',  cam:'STATIS',   note:'Call to action: Jaga Bumi, Jaga Masa Depan'     },
      { id:'S-32', t:'2:56–2:59', dur:'3s',  cam:'LOGO',     note:'Logo center — DPD Komnas PPLH Karawang 2026'     },
      { id:'FAD-33', t:'2:59–3:00', dur:'1s',  cam:'FADE',     note:'Fade to black — end slate'                       },
    ],
    narrasi: [
      { tag:'n',   text:'Tapi' },
      { tag:'pro', text:'<prosody rate="slow">' },
      { tag:'em',  text:'masih ada harapan.' },
      { tag:'pro', text:'</prosody>' },
      { tag:'n',   text:'' },
      { tag:'n',   text:'Bank sampah bermunculan. Komunitas peduli lingkungan mulai bergerak. Perubahan dimulai dari langkah kecil.' },
      { tag:'n',   text:'DPD Komnas PPLH Karawang hadir — untuk mengawal, mengadvokasi, dan memastikan isu lingkungan tidak dilupakan.' },
      { tag:'n',   text:'Bukan hanya tugas pemerintah.' },
      { tag:'n',   text:'Ini tanggung jawab kita semua.' },
      { tag:'n',   text:'Setiap langkah kecil berarti.' },
      { tag:'n',   text:'' },
      { tag:'pro', text:'<prosody rate="slow">' },
      { tag:'n',   text:'Sampah bukan warisan.' },
      { tag:'n',   text:'' },
      { tag:'n',   text:'Sampah adalah tanggung jawab kita hari ini.' },
      { tag:'pro', text:'</prosody>' },
    ],
    ssml: `Tapi <prosody rate="slow"><emphasis level="strong">masih ada harapan.</emphasis></prosody>\n<break time="500ms"/>\nBank sampah bermunculan.\nKomunitas peduli lingkungan mulai bergerak.\nPerubahan dimulai dari langkah kecil.\n<break time="700ms"/>\nDPD Komnas PPLH Karawang hadir —\nuntuk mengawal, mengadvokasi,\ndan memastikan isu lingkungan <emphasis level="strong">tidak dilupakan.</emphasis>\n<break time="600ms"/>\nBukan hanya tugas pemerintah.\n<break time="300ms"/>\nIni tanggung jawab kita semua.\n<break time="400ms"/>\nSetiap langkah kecil berarti.\n<break time="700ms"/>\n<prosody rate="slow">\nSampah bukan warisan.\n<break time="400ms"/>\nSampah adalah tanggung jawab kita hari ini.\n</prosody>`,
  },
];

const BADGE_MAP: Record<string, string> = { orange:'badge orange', red:'badge red', green:'badge green', blue:'badge blue', purple:'badge purple', yellow:'badge orange' };

function HighlightSSML(text: string) {
  return text
    .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')
    .replace(/(&lt;\/?[a-z][^&]*?&gt;)/gi, '<span style="color:#7ee787">$1</span>')
    .replace(/(time|rate|level)=/gi, '<span style="color:#79c0ff">$1</span>=')
    .replace(/(".*?")/g, '<span style="color:#a5d6ff">$1</span>');
}

const TAG_LABEL: Record<string, { color: string; label: string }> = {
  n:    { color: '#dae2fd', label: 'narasi'   },
  em:   { color: '#ffc174', label: 'emphasis' },
  pro:  { color: '#7ee787', label: 'prosody'  },
  'pro+em': { color: '#ffc174', label: 'prosody+em' },
};

export default function ScriptPage() {
  const [openSeg, setOpenSeg] = useState<number | null>(null);
  const toggle = (id: number) => setOpenSeg(openSeg === id ? null : id);

  return (
    <main id="pdf-script">      {/* PDF export bar */}      <div style={{"display":"flex","justifyContent":"flex-end","marginBottom":16}}>        <PdfButton title="Selayang Pandang — Script" targetId="pdf-script" filename="selayang-pandang-script.pdf" btnLabel="Download PDF" />      </div>

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--on-bg)', letterSpacing: '-.03em' }}>Full Script</h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>
          Karawang dalam Darurat Sampah — 5 segmen · 3:00 · ElevenLabs SSML terintegrasi
        </p>
      </div>

      {/* ── Progress indicator ── */}
      <div style={{
        display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)',
        gap: 4, marginBottom: 28,
      }}>
        {SEGMENTS.map(s => {
          const moodCls = BADGE_MAP[s.moodCls] || 'badge orange';
          const isOpen = openSeg === s.id;
          return (
            <button
              key={s.id}
              onClick={() => toggle(s.id)}
              style={{
                background: isOpen ? 'rgba(245,158,11,.12)' : 'var(--surface-1)',
                border: `2px solid ${isOpen ? 'var(--primary-container)' : 'var(--border)'}`,
                borderRadius: 10, padding: '12px',
                cursor: 'pointer', textAlign: 'center',
                transition: 'all 120ms',
              }}
            >
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--primary-container)', marginBottom: 3 }}>
                {String(s.id).padStart(2,'0')}
              </div>
              <div style={{ fontSize: 11, fontWeight: 700, color: 'var(--on-surface)', marginBottom: 3 }}>
                {s.title}
              </div>
              <div style={{ fontSize: 10, color: 'var(--muted)', marginBottom: 4 }}>{s.time}</div>
              <span className={moodCls} style={{ fontSize: 9 }}>{s.mood}</span>
            </button>
          );
        })}
      </div>

      {/* ── Segments ── */}
      {SEGMENTS.map(s => {
        const moodCls = BADGE_MAP[s.moodCls] || 'badge orange';
        const isOpen = openSeg !== null && openSeg !== s.id;
        return (
          <div key={s.id} style={{
            marginBottom: 20,
            opacity: isOpen ? 0.38 : 1,
            transition: 'opacity 200ms',
            pointerEvents: isOpen ? 'none' : 'auto',
          }}>
            {/* Segment Header */}
            <div style={{
              display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12,
              flexWrap: 'wrap',
            }}>
              <span style={{
                width: 42, height: 42, borderRadius: 8,
                background: 'var(--surface-2)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontWeight: 900, fontSize: 18, color: 'var(--primary-container)',
              }}>{String(s.id).padStart(2,'0')}</span>
              <div>
                <div style={{ display:'flex', alignItems:'center', gap:8, flexWrap:'wrap' }}>
                  <span style={{ fontWeight: 800, fontSize: 17, color: 'var(--on-bg)' }}>{s.title}</span>
                  <span className={moodCls}>{s.mood}</span>
                </div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 1 }}>
                  {s.time} · Audio ~{s.audioTime} · ElevenLabs speed: <strong style={{ color:'var(--label)' }}>{s.speed}</strong>
                </div>
              </div>
            </div>

            {/* Shot Table */}
            <div style={{
              background: 'var(--surface-1)', border: '1px solid var(--border)',
              borderRadius: 10, overflow: 'hidden', marginBottom: 14,
            }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
                <thead>
                  <tr style={{ background: 'var(--surface-2)' }}>
                    {['No.','Timestamp','Durasi','Camera','Shot Description'].map(h => (
                      <th key={h} style={{
                        textAlign: 'left', padding: '9px 14px',
                        fontWeight: 700, fontSize: 10, letterSpacing: '.06em',
                        textTransform: 'uppercase', color: 'var(--label)',
                        borderBottom: '1px solid var(--border)',
                      }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {s.shots.map((shot, i) => (
                    <tr key={shot.id} style={{
                      background: i%2===0 ? 'var(--surface-1)' : 'var(--surface-2)',
                      transition: 'background 120ms',
                    }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(245,158,11,.05)')}
                    onMouseLeave={e => (e.currentTarget.style.background = i%2===0 ? 'var(--surface-1)' : 'var(--surface-2)')}
                    >
                      <td style={{ padding: '8px 14px', fontWeight: 700, color: 'var(--primary-container)', whiteSpace: 'nowrap' }}>{shot.id}</td>
                      <td style={{ padding: '8px 14px', fontFamily: 'monospace', fontSize: 11, color: 'var(--on-variant)', whiteSpace: 'nowrap' }}>{shot.t}</td>
                      <td style={{ padding: '8px 14px', color: 'var(--muted)', whiteSpace: 'nowrap' }}>{shot.dur}</td>
                      <td style={{ padding: '8px 14px' }}><span className="badge orange" style={{ fontSize: 9 }}>{shot.cam}</span></td>
                      <td style={{ padding: '8px 14px', color: 'var(--on-surface)' }}>{shot.note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Script text per bar */}
            <div style={{ background: 'var(--surface-1)', border: '1px solid var(--border)', borderRadius: 10, overflow: 'hidden' }}>
              <div style={{ padding: '10px 16px', background: 'var(--surface-2)', borderBottom: '1px solid var(--border)', display:'flex', justifyContent:'space-between', alignItems:'center' }}>
                <span className="section-header" style={{ marginBottom: 0 }}>Narasi Script — {s.title}</span>
                <span style={{ fontSize: 10, color: 'var(--muted)', display:'flex', alignItems:'center', gap:6 }}>
                  <span style={{ background:'rgba(245,158,11,.15)', color:'var(--primary-container)', padding:'2px 8px', borderRadius:4, fontSize:10 }}>SSML</span>
                  {s.shots.reduce((a,s)=>a+parseInt(s.dur),0)}s total shot durasi
                </span>
              </div>
              <div style={{ display:'flex', flexDirection:'column' }}>
                {s.narrasi.map((line,i) => {
                  const meta = TAG_LABEL[line.tag] || { color:'#dae2fd', label:'narasi' };
                  return (
                    <div key={i} style={{
                      padding: '7px 16px',
                      borderBottom: i < s.narrasi.length - 1 ? '1px solid var(--border)' : 'none',
                      display: 'flex', alignItems: 'flex-start', gap: 10,
                    }}>
                      <span style={{
                        minWidth: 48, fontSize: 9, fontWeight: 600,
                        letterSpacing: '.05em', color: meta.color, textTransform: 'uppercase', paddingTop: 2,
                      }}>{meta.label}</span>
                      <span style={{ flex:1, color: meta.color, fontSize: 13.5, lineHeight: 1.65 }}>
                        {line.text || <span style={{ color:'var(--muted)', fontStyle:'italic' }}>… (jeda audio) …</span>}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <hr style={{ marginTop: 24 }} />
          </div>
        );
      })}

      {/* Extend to 5 min */}
      <div style={{
        background: 'rgba(56,189,248,.07)', border: '1px solid rgba(56,189,248,.2)',
        borderRadius: 12, padding: '1.25rem', marginTop: 8,
      }}>
        <div style={{ fontWeight: 700, color: '#60a5fa', marginBottom: 8 }}>📌 Extension Pool — Versi 5 Menit</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))', gap: 10, fontSize: 12, color: 'var(--on-variant)' }}>
          {[
            { name:'Extension A', desc:'+35s — Wawancara warga terdampak TPA (sisip Segmen 3, after 1:37)' },
            { name:'Extension B', desc:'+25s — Data komparasi Karawang vs kota lain Jawa Barat (sisip Segmen 2)' },
            { name:'Extension C', desc:'+35s — B-roll ekstra: kualitas udara, sungai Citarum luas, krisis air bersih' },
            { name:'Extension D', desc:'+25s — Agenda kerja Komnas PPLH ke depan (sisip Segmen 5)' },
          ].map(e => (
            <div key={e.name} style={{ background:'var(--surface-1)', border:'1px solid var(--border)', borderRadius:8, padding:'10px 14px' }}>
              <div style={{ fontWeight:700, color:'#60a5fa', marginBottom:3 }}>{e.name}</div>
              <div>{e.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 10, fontSize: 11, color: 'var(--muted)' }}>
          Total estimasi dengan semua extension: ~5 menit (300 detik)
        </div>
      </div>

    </main>
  );
}
