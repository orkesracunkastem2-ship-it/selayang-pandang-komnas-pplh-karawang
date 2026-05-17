'use client';

import { Users, Camera, Mic, MicOff, MapPin, Shield } from 'lucide-react';

const TIM = [
  { nama: 'Agung Dwi Julianto, SP.', role: 'Bidang Komunikasi, Informatika & Investigasi', icon: '🎬', warna: 'var(--primary-container)' },
  { nama: 'Koordinator Syuting', role: 'Director of Photography', icon: '📷', warna: '#8b5cf6' },
  { nama: 'Pilot Drone', role: 'Aerial Videographer', icon: '🚁', warna: '#3b82f6' },
  { nama: 'Editor Video', role: 'Post-Production', icon: '✂️', warna: '#22c55e' },
  { nama: 'Audio Engineer', role: 'Narasi & Mixing', icon: '🎙️', warna: '#f97316' },
  { nama: 'Relawan Kominfo', role: 'Logistik & Coordinasi Lokasi', icon: '📋', warna: '#ec4899' },
];

export default function TimPage() {
  return (
    <main style={{ maxWidth: 940, margin: '0 auto', padding: '1.5rem' }}>

      <div style={{ marginBottom: 24 }}>
        <h1 style={{ fontSize: 26, fontWeight: 800, color: 'var(--on-bg)', letterSpacing: '-.03em', display:'flex', alignItems:'center', gap:10 }}>
          <Users size={26} style={{ color:'var(--primary-container)' }} /> Tim Produksi
        </h1>
        <p style={{ color: 'var(--muted)', fontSize: 13, marginTop: 4 }}>
          DPD Komnas PPLH Karawang — Bidang Komunikasi, Informatika &amp; Investigasi — 2026
        </p>
      </div>

      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px,1fr))', gap:14, marginBottom:32 }}>
        {TIM.map((m,i) => (
          <div key={i} className="card" style={{ display:'flex', gap:14, alignItems:'flex-start' }}>
            <div style={{
              width:52, height:52, borderRadius:12,
              background: `${m.warna}18`, border:`1px solid ${m.warna}44`,
              display:'flex', alignItems:'center', justifyContent:'center',
              fontSize:26, flexShrink:0,
            }}>{m.icon}</div>
            <div>
              <div style={{ fontWeight:700, fontSize:15, color:'var(--on-surface)' }}>{m.nama}</div>
              <div style={{ fontSize:12, color:'var(--muted)', marginTop:3 }}>{m.role}</div>
              <div style={{ marginTop:8, display:'flex', gap:6 }}>
                <span className="badge orange">Komnas PPLH Karawang</span>
                <span className="badge green">2026</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Roles breakdown */}
      <div style={{ marginTop: 8 }}>
        <div className="section-header" style={{ marginBottom: 12 }}>Struktur Produksi</div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(200px,1fr))', gap:10 }}>

          {[
            { role:'Director', orang:1, tugas:'Konsep, pacing, final creative', icon:'🎬', color:'var(--primary-container)' },
            { role:'DP / Syuting', orang:1, tugas:'Tempatkan kamera, pilih shot, lighting', icon:'📷', color:'#8b5cf6' },
            { role:'Drone Pilot',  orang:1, tugas:'Aerial TPA, establishing, B-roll', icon:'🚁', color:'#3b82f6' },
            { role:'Editor',       orang:1, tugas:'Rough cut, color grading, pace', icon:'✂️', color:'#22c55e' },
            { role:'Audio',        orang:1, tugas:'Mix musik + SFX + ElevenLabs narasi', icon:'🎙️', color:'#f97316' },
            { role:'Kominfo',      orang:1, tugas:'Koordinasi, izin, dokumentasi', icon:'📋', color:'#ec4899' },
          ].map(r => (
            <div key={r.role} className="panel">
              <div style={{ display:'flex', alignItems:'center', gap:8, marginBottom:8 }}>
                <span style={{ fontSize:20 }}>{r.icon}</span>
                <div style={{ fontWeight:700, fontSize:14, color:'var(--on-surface)', flex:1 }}>{r.role}</div>
                <span className="badge orange">{r.orang} orang</span>
              </div>
              <div style={{ fontSize:12, color:'var(--muted)' }}>{r.tugas}</div>
            </div>
          ))}
        </div>
      </div>

    </main>
  );
}
