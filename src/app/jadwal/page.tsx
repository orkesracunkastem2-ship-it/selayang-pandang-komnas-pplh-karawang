'use client';

import { Calendar, MapPin, Camera, Users, AlertTriangle, Check, Clock } from 'lucide-react';

const SCHEDULE = [
  {
    day: 'H-3', label: 'Pra-Produksi', date: 'TBD',
    color: 'blue', icon: '📋',
    activities: [
      { time: '09:00 – 11:00', task: 'Finalisasi script & storyboard dengan tim Komnas PPLH', owner:'Bidang Kominfo' },
      { time: '11:00 – 14:00', task: 'Cek lokasi syuting: TPA Jalupang & titik sampah perkotaan', owner:'Tim Lapangan' },
      { time: '14:00 – 17:00', task: 'Urus izin masuk TPA Jalupang — kontak UPTD Dinas LHK Karawang', owner:'Kerja sama' },
      { time: '17:00 – 18:00', task: 'Checklist gear & safety briefing belum mulai syuting', owner:'Semua tim' },
    ],
  },
  {
    day: 'H-2', label: 'Survey Lokasi', date: 'TBD',
    color: 'blue', icon: '🗺️',
    activities: [
      { time: '06:00 – 10:00', task: 'Recon TPA Jalupang — cek angle drone, safety, titik masuk', owner:'Tim Syuting' },
      { time: '10:00 – 12:00', task: 'Recon lokasi sampah perkotaan: Pasar, Drainase, Sungai', owner:'Tim Syuting' },
      { time: '13:00 – 15:00', task: 'Recon lokasi solusi: Bank Sampah terdekat', owner:'Tim Syuting' },
      { time: '15:00 – 17:00', task: 'Hubungi warga sekitar TPA untuk izin potret jika dibutuhkan', owner:'Relawan/Kominfo' },
    ],
  },
  {
    day: 'H-1', label: 'Prep Gear & Briefing', date: 'TBD',
    color: 'blue', icon: '🎒',
    activities: [
      { time: '09:00 – 12:00', task: 'Munculkan gear: drone, kamera, gimbal, tripod, audio recorder', owner:'Semua tim' },
      { time: '12:00 – 13:00', task: 'Format memory card, test semua perangkat', owner:'Tim Video' },
      { time: '13:00 – 14:00', task: 'Safety briefing TPA Jalupang: masker gas, sarung tangan, sepatu boots', owner:'Semua tim' },
      { time: '14:00 – 17:00', task: 'Briefing storyboard per scene dengan tim — penjelasan shot list', owner:'Bidang Kominfo' },
    ],
  },
  {
    day: 'Hari 1', label: 'Syuting — TPA Jalupang + Sekitar', date: 'TBD',
    color: 'orange', icon: '🏭',
    activities: [
      { time: '05:00 – 06:00', task: 'Sarapan &Persiapan + check safety gear', owner:'Semua tim' },
      { time: '06:00 – 09:00', task: 'TP-01/02 — Drone wide & fly-over TPA Jalupang (golden hour)', owner:'Drone Pilot' },
      { time: '09:00 – 12:00', task: 'TP-03~TP-08 — Ground shots: truk, pemulung, tekstur, air lindi', owner:'Videographer' },
      { time: '12:00 – 13:00', task: 'Istirahat', owner:'' },
      { time: '13:00 – 16:00', task: 'TP-09~TP-10 — Kebakaran ringan, wawancara warga (jika diizinkan) + SP-06', owner:'Videographer + Interviewer' },
      { time: '16:00 – 17:00', task: 'Backup footage ke 2 media storage + rilis tim', owner:'Semua tim' },
    ],
    note: '⚠️ TPA berbahaya: gas metana, air lindi beracun. Selalu pakai masker N95, sarung tangan, sepatu boots. Jangan merokok.',
  },
  {
    day: 'Hari 2', label: 'Syuting — Sampah Perkotaan', date: 'TBD',
    color: 'red', icon: '🗑️',
    activities: [
      { time: '06:00 – 09:00', task: 'SP-01 — Pasar tradisional Karawang: tumpukan sampah pagi', owner:'Videographer' },
      { time: '09:00 – 11:00', task: 'SP-02 — Drainase/selokan kota: sampah nyangkut, air hitam', owner:'Videographer' },
      { time: '11:00 – 13:00', task: 'SP-03 — Sungai Citarum/Cibeet: sampah terapung — wide + close up', owner:'Videographer' },
      { time: '13:00 – 14:00', task: 'Istirahat', owner:'' },
      { time: '14:00 – 17:00', task: 'SP-04~SP-06 — Pemukiman padat, TPS penuh, anak-anak (dengan izin)', owner:'Videographer' },
      { time: '17:00 – 18:00', task: 'Backup daftar footage + cek semua tak terlewat', owner:'Editor in Chief' },
    ],
  },
  {
    day: 'Hari 3', label: 'Syuting — Solusi & Komnas PPLH', date: 'TBD',
    color: 'green', icon: '🌱',
    activities: [
      { time: '08:00 – 10:00', task: 'SL-01~SL-02 — Bank Sampah: aktivitas pemilahan & penimbangan', owner:'Videographer' },
      { time: '10:00 – 12:00', task: 'SL-03 — Komunitas aksi bersih-bersih sungai/lingkungan', owner:'Videographer' },
      { time: '12:00 – 13:00', task: 'Istirahat', owner:'' },
      { time: '13:00 – 16:00', task: 'SL-04~SL-06 — Kegiatan Komnas PPLH: rapat, sosialisasi, turun lapangan, portrait tim', owner:'Videographer + Tim PPLH' },
      { time: '16:00 – 18:00', task: 'Checklist: pastikan semua shot list terisi. Jika ada yang kurang, catat untuk B-roll tambahan.', owner:'Bidang Kominfo' },
    ],
  },
  {
    day: 'Hari 4', label: 'Pasang Produksi — Editing', date: 'TBD',
    color: 'purple', icon: '🎬',
    activities: [
      { time: '09:00 – 12:00', task: 'Import semua footage ke editor. Sortir & pilih take terbaik per shot.', owner:'Editor' },
      { time: '12:00 – 13:30', task: 'Istirahat', owner:'' },
      { time: '13:30 – 17:00', task: 'Rough cut — susun semua scene sesuai script timeline (3:00 core)', owner:'Editor + Kominfo' },
      { time: '17:00 – 18:00', task: 'Color grading awal: desaturated untuk scene 1–4, warm grading untuk scene 5', owner:'Colorist' },
    ],
  },
  {
    day: 'Hari 5', label: 'Finishing & Export', date: 'TBD',
    color: 'green', icon: '✅',
    activities: [
      { time: '09:00 – 11:00', task: 'Generate narasi ElevenLabs per segmen (5 file .mp3)', owner:'Kominfo' },
      { time: '11:00 – 13:00', task: 'Audio mix: musik library + SFX + narasi ElevenLabs — mix sesuai audio bar', owner:'Audio Engineer' },
      { time: '13:00 – 14:00', task: 'Istirahat', owner:'' },
      { time: '14:00 – 16:00', task: 'Final cut, render draft, review internal dengan tim Komnas PPLH', owner:'Semua tim' },
      { time: '16:00 – 18:00', task: 'Revisi sesuai feedback → Export final (MP4 1080p H.264) → Upload ke YouTube/Vimeo', owner:'Kominfo' },
    ],
  },
];

const COLOR_MAP: Record<string,string> = {
  blue:  '#3b82f6',
  orange:'#f59e0b',
  red:   '#ef4444',
  green: '#22c55e',
  purple:'#8b5cf6',
};
const BADGE_MAP: Record<string,string> = {
  blue:'badge blue', orange:'badge orange', red:'badge red', green:'badge green', purple:'badge purple',
};

export default function JadwalPage() {
  return (
    <main style={{ maxWidth: 940, margin: '0 auto', padding: '1.5rem' }}>

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--on-bg)', letterSpacing: '-.03em', display:'flex', alignItems:'center', gap:10 }}>
          <Calendar size={26} style={{ color:'var(--primary-container)' }} /> Jadwal Syuting
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>
          Total 5 hari produksi — mulai dari pra-produksi sampai export final.
        </p>
      </div>

      {/* Summary Cards */}
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(150px,1fr))', gap:10, marginBottom: 28 }}>
        {[
          { icon:'📅', label:'Total Hari',  value:'5 Hari' },
          { icon:'🎬', label:'Total Shot',  value:'22 Shots' },
          { icon:'📍', label:'Lokasi',     value:'4 Titik' },
          { icon:'👥', label:'Tim Syuting',value:'Min. 4 Orang' },
        ].map(c => (
          <div key={c.label} className="panel" style={{ textAlign:'center', padding:'1rem' }}>
            <div style={{ fontSize: 24, marginBottom: 4 }}>{c.icon}</div>
            <div style={{ fontSize: 11, color:'var(--muted)', fontWeight: 600, letterSpacing:'.05em', textTransform:'uppercase' }}>{c.label}</div>
            <div style={{ fontSize: 20, fontWeight: 800, color:'var(--on-surface)', marginTop:2 }}>{c.value}</div>
          </div>
        ))}
      </div>

      {/* Timeline */}
      <div style={{ display:'flex', flexDirection:'column', gap: 20 }}>
        {SCHEDULE.map((day, di) => {
          const color = COLOR_MAP[day.color] || 'var(--label)';
          const badgeCls = BADGE_MAP[day.color] || 'badge orange';
          return (
            <div key={day.day} style={{ display:'grid', gridTemplateColumns:'auto 1fr', gap: 20, alignItems:'start' }}>

              {/* Day marker */}
              <div style={{ textAlign:'center', minWidth:80 }}>
                <div style={{
                  width: 72, height: 72, borderRadius: 14,
                  background: `${color}18`, border: `2px solid ${color}55`,
                  display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center',
                }}>
                  <span style={{ fontSize: 20 }}>{day.icon}</span>
                  <span style={{ fontSize: 11, fontWeight: 800, color, marginTop: 2 }}>{day.label}</span>
                  <span style={{ fontSize: 10, color:'var(--on-variant)' }}>{day.day}</span>
                </div>
              </div>

              {/* Activities */}
              <div style={{ display:'flex', flexDirection:'column', gap: 8 }}>
                <div style={{ display:'flex', alignItems:'center', gap:10, flexWrap:'wrap', marginBottom:4 }}>
                  <span className={badgeCls}>{day.date}</span>
                  <span style={{ fontSize:12, color:'var(--muted)' }}>{day.activities.length} aktivitas</span>
                </div>
                <div style={{ display:'flex', flexDirection:'column', gap: 6 }}>
                  {day.activities.map((act, i) => (
                    <div key={i}
                      style={{
                        display:'flex', alignItems:'flex-start', gap: 12,
                        padding: '10px 14px',
                        background: i%2===0 ? 'var(--surface-1)' : 'var(--surface-2)',
                        border: '1px solid var(--border)', borderRadius: 8,
                        transition: 'background 120ms',
                      }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'rgba(245,158,11,.04)')}
                      onMouseLeave={e => (e.currentTarget.style.background = i%2===0 ? 'var(--surface-1)' : 'var(--surface-2)')}
                    >
                      {/* Time */}
                      <div style={{
                        minWidth: 95, fontSize: 11, fontFamily:'monospace', letterSpacing:'.03em',
                        color:'var(--primary-container)', paddingTop:1, whiteSpace:'nowrap',
                      }}>
                        <Clock size={11} style={{ marginRight:4, verticalAlign:'middle' }} />
                        {act.time}
                      </div>
                      {/* Task */}
                      <div style={{ flex: 1 }}>
                        <div style={{ fontSize: 13, color:'var(--on-surface)' }}>{act.task}</div>
                        {act.owner && (
                          <div style={{ fontSize: 10, color:'var(--muted)', marginTop: 2, display:'flex', alignItems:'center', gap:4 }}>
                            <Users size={10} /> {act.owner}
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
                {day.note && (
                  <div style={{
                    display:'flex', gap:8, fontSize:12, color: color,
                    background: `${color}11`, border: `1px solid ${color}33`,
                    borderRadius:8, padding:'8px 14px', marginTop:2,
                  }}>
                    <AlertTriangle size={13} style={{ marginTop:1, flexShrink:0 }} />
                    {day.note}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* Notes */}
      <div style={{
        marginTop: 28, background:'rgba(245,158,11,.04)', borderRadius:12,
        border:'1px solid rgba(245,158,11,.18)', padding:'1.25rem',
      }}>
        <div className="section-header" style={{ marginBottom: 10 }}>Catatan Penting</div>
        <ul style={{ listStyle:'none', display:'flex', flexDirection:'column', gap:8, fontSize:13, color:'var(--on-variant)' }}>
          {[
            'Izin TPA Jalupang diurus minimal H-3 (Selasa sebelum syuting). Kontak: UPTD Pengelolaan Sampah / Dinas LHK Kab. Karawang.',
            'Drone: cek regulasi penerbangan di sekitar TPA sebelum H-1 — beberapa TPA ada larangan karena buffer bandara.',
            'Semua footage di-duplicate ke 2 media storage berbeda setelah setiap hari syuting.',
            'Wawancara: siapkan informed consent verbal/tulisan. Wajib izin orang tua untuk children subjek.',
            'Jangan expose warga (nama terang/nama RW) tanpa izin tertulis. Gunakan nama samaran jika diminta anonim.',
          ].map((n,i) => (
            <li key={i} style={{ display:'flex', alignItems:'flex-start', gap:8 }}>
              <span style={{ color:'var(--primary-container)', flexShrink:0 }}>•</span>
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </div>

    </main>
  );
}
