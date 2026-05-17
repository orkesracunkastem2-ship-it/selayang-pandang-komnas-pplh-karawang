'use client';

import { Package, Camera, Mic, AlertTriangle, Check } from 'lucide-react';

const CATEGORIES = [
  {
    title: '📸 Kamera & Video',
    icon: Camera,
    items: [
      { name:'Kamera Mirrorless/DSLR (4K 60fps min)',   qty:1, kritikal:true,  note:'Untuk slow-motion & kualitas tinggi' },
      { name:'Drone + baterai tambahan',                qty:1, kritikal:true,  note:'Aerial TPA & Karawang — cek regulasi penerbangan' },
      { name:'Gimbal 3-axis',                           qty:1, kritikal:true,  note:'Shot stabil bergerak' },
      { name:'Tripod',                                  qty:2, kritikal:false, note:'Wide shot & timelapse' },
      { name:'Memory card (min 64GB)',                  qty:'3–4', kritikal:true, note:'Kapasitas besar, backup setiap hari' },
      { name:'Power bank (20.000 mAh)',                 qty:2, kritikal:false, note:'Kamera + drone' },
    ],
  },
  {
    title: '🎙️ Audio',
    icon: Mic,
    items: [
      { name:'Shotgun mic (on-camera)',        qty:1, kritikal:true,  note:'Audio wawancara lapangan utama' },
      { name:'Lavalier mic / wireless mic',   qty:1, kritikal:false, note:'Backup audio wawancara' },
      { name:'Audio recorder (Zoom/Tascam)',   qty:1, kritikal:false, note:'Rekaman narasi lapangan jika ada' },
      { name:'Windshield / deadcat',          qty:1, kritikal:false, note:'Pengurangan angin di luar' },
    ],
  },
  {
    title: '🛡️ Safety & PPE (Wajib untuk TPA)',
    icon: AlertTriangle,
    items: [
      { name:'Masker gas / N95',              qty:'2–3', kritikal:true, note:'TPA — bau & gas metana' },
      { name:'Sarung tangan nitrile',         qty:'2–3', kritikal:true, note:'Bahaya lindi & material berbahaya' },
      { name:'Sepatu boots anti-slip',        qty:'2–3', kritikal:true, note:'Lindi, medan TPA tidak rata' },
      { name:'Kacamata safety',               qty:2,    kritikal:false, note:'Ash & debu' },
      { name:'Pakaian tertutup (lengan panjang)', qty:2, kritikal:false, note:'Kulit tidak terkena kontaminasi' },
      { name:'Pertolongan Pertama (P3K kit)', qty:1,    kritikal:true, note:'Wajib ada di tiap timsyuting' },
      { name:'Air minum kemasan & camaba',    qty:'±10', kritikal:false, note:'Keselamatan kerja di lapangan' },
      { name:'Senter + headlamp',             qty:2,    kritikal:false, note:'Di area TPA yang minim cahaya' },
    ],
  },
  {
    title: '📁 Software & Tools',
    icon: Package,
    items: [
      { name:'Adobe Premiere Pro / DaVinci Resolve (Editor)', qty:1, kritikal:true, note:'Post-production editing' },
      { name:'ElevenLabs Pro',               qty:1, kritikal:true, note:'Generate narasi SSML' },
      { name:'Canva Pro (thumbnail/teaser)', qty:1, kritikal:false,note:'Promosi & postingan' },
      { name:'Google Drive/Dropbox (backup storage)', qty:2, kritikal:true, note:'Backup footage cloud' },
    ],
  },
];

function Row({ item, idx }: { item: any; idx: number }) {
  return (
    <div style={{
      display:'grid', gridTemplateColumns:'2fr 60px 160px 1fr',
      gap:8, padding:'7px 14px',
      borderBottom:'1px solid var(--border)',
      background: idx%2===0 ? 'var(--surface-1)' : 'var(--surface-2)',
      transition: 'background 120ms',
    }}
    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(245,158,11,.05)')}
    onMouseLeave={e => (e.currentTarget.style.background = idx%2===0 ? 'var(--surface-1)' : 'var(--surface-2)')}
    >
      <span style={{ fontSize:13, color:'var(--on-surface)', display:'flex', alignItems:'center', gap:6 }}>
        {item.kritikal && <span style={{ color:'var(--primary-container)', fontSize:14 }}>●</span>}
        {item.name}
      </span>
      <span style={{ fontFamily:'monospace', fontSize:12, color:'var(--primary-container)', textAlign:'center' }}>{String(item.qty)}</span>
      <span>
        {item.kritikal
          ? <span className="badge orange" style={{ fontSize:9 }}>Kritikal</span>
          : <span className="badge" style={{ background:'#1e3a5f', color:'#93c5fd', borderColor:'#3a4a5f', fontSize:9 }}>Opsional</span>
        }
      </span>
      <span style={{ fontSize:12, color:'var(--muted)', fontStyle:'italic' }}>{item.note}</span>
    </div>
  );
}

export default function AsetPage() {
  return (
    <main style={{ maxWidth: 960, margin: '0 auto', padding: '1.5rem' }}>

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--on-bg)', letterSpacing: '-.03em', display:'flex', alignItems:'center', gap:10 }}>
          <Package size={26} style={{ color:'var(--primary-container)' }} /> Aset & Peralatan
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>
          Equipment checklist lengkap untuk syuting 5 hari.
        </p>
      </div>

      {/* Legend */}
      <div style={{
        display:'flex', gap:14, marginBottom:20, padding:'10px 14px',
        background:'var(--surface-1)', borderRadius:8, border:'1px solid var(--border)',
        fontSize:12, color:'var(--label)',
      }}>
        <span style={{ display:'flex', alignItems:'center', gap:5 }}>
          <span style={{ color:'var(--primary-container)' }}>●</span> Kritikal = wajib punya sebelum syuting
        </span>
        <span style={{ display:'flex', alignItems:'center', gap:5 }}>
          <span style={{ color:'#3b82f6' }}>■</span> Opsional = bisa disiapkan jika tersedia
        </span>
      </div>

      {CATEGORIES.map((cat, ci) => {
        const Icon = cat.icon;
        return (
          <div key={ci} style={{ marginBottom: 28 }}>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:10 }}>
              <Icon size={20} style={{ color:'var(--primary-container)' }} />
              <h2 style={{ fontSize:16, fontWeight:700, color:'var(--on-surface)' }}>{cat.title}</h2>
              <span className="badge">{cat.items.length} item</span>
            </div>

            {/* Table Header */}
            <div style={{
              display:'grid', gridTemplateColumns:'2fr 60px 160px 1fr',
              gap:8, padding:'8px 14px',
              background:'var(--surface-2)', borderRadius:'8px 8px 0 0',
              borderTop:'1px solid var(--border)', borderLeft:'1px solid var(--border)', borderRight:'1px solid var(--border)',
            }}>
              <span style={{ fontSize:10, fontWeight:700, color:'var(--label)', textTransform:'uppercase', letterSpacing:'.06em' }}>Nama Barang</span>
              <span style={{ fontSize:10, fontWeight:700, color:'var(--label)', textTransform:'uppercase', letterSpacing:'.06em', textAlign:'center' }}>Qty</span>
              <span style={{ fontSize:10, fontWeight:700, color:'var(--label)', textTransform:'uppercase', letterSpacing:'.06em' }}>Status</span>
              <span style={{ fontSize:10, fontWeight:700, color:'var(--label)', textTransform:'uppercase', letterSpacing:'.06em' }}>Catatan</span>
            </div>
            <div style={{
              borderLeft:'1px solid var(--border)', borderRight:'1px solid var(--border)', borderBottom:'1px solid var(--border)',
              borderRadius:'0 0 8px 8px', overflow:'hidden',
            }}>
              {cat.items.map((item, i) => <Row key={i} item={item} idx={i} />)}
            </div>
          </div>
        );
      })}

      {/* Approval checkbox */}
      <div className="panel" style={{ display:'flex', alignItems:'center', gap:10 }}>
        <input type="checkbox" id="checklist-ok" style={{ width:18, height:18, cursor:'pointer', accentColor:'var(--primary-container)' }} />
        <label htmlFor="checklist-ok" style={{ fontSize:13, color:'var(--on-surface)', cursor:'pointer' }}>
          Semua peralatan kritikal telah diverifikasi dan siap sebelum syuting dimulai.
        </label>
      </div>

    </main>
  );
}
