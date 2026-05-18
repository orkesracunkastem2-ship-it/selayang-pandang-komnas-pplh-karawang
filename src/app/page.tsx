'use client';

import Link from 'next/link';
import { LayoutGrid, FileText, Volume2, Calendar, ArrowRight } from 'lucide-react';
import PdfButton from '../components/PdfButton';

const CARDS = [
  { href: '/storyboard', icon: LayoutGrid,  label: 'Storyboard',      desc: '5 frame visual — shot-by-shot' },
  { href: '/script',    icon: FileText,    label: 'Script',          desc: 'Full script + audio + ElevenLabs SSML' },
  { href: '/narasi',    icon: Volume2,     label: 'Narasi',          desc: 'SSML files ready for ElevenLabs' },
  { href: '/jadwal',    icon: Calendar,    label: 'Jadwal Syuting',  desc: '5-hari production rundown' },
];

const STATS = [
  { label: 'Penduduk Karawang', value: '2,6 Juta', sub: 'jiwa' },
  { label: 'Sampah / hari', value: '1.300+', sub: 'ton (minimal perhitungan)' },
  { label: 'Data DLHK Jabar', value: '>1.500', sub: 'ton per hari (resmi)' },
  { label: 'Durasi Video', value: '3:00', sub: 'menit (inti) — exp. 5:00' },
];

const SEGMENTS = [
  { id: 1, title: 'PEMBUKA', time: '0:00 – 0:35', mood: 'Contemplatif',  moodCls: 'orange', bullets: ['Logo Komnas PPLH + cinematic intro', 'Aerial Karawang golden hour', 'Timelapse perkotaan', 'Slow-mo buang sampah', 'Black: DARURAT SAMPAH'] },
  { id: 2, title: 'DATA & FAKTA', time: '0:35 – 1:15', mood: 'Shock',   moodCls: 'red',    bullets: ['2,6 juta × 0,5 kg = 1.300 ton/hari', 'DLHK Jabar: >1.500 ton/hari', 'Footage: TPS penuh, truk antre', 'Grafik animasi count-up', 'Reveal: TPA Jalupang'] },
  { id: 3, title: 'TPA JALUPANG', time: '1:15 – 1:50', mood: 'Krisis', moodCls: 'red',    bullets: ['Drone wide TPA — asap membumbung', 'Flyover tumpukan sampah', 'Close-up tumpukan & tekstur', 'Air lindi mengalir', 'Warga sekitar TPA portrait'] },
  { id: 4, title: 'DAMPAK', time: '1:50 – 2:20', mood: 'Krisis',   moodCls: 'red',    bullets: ['Sungai tercemar terapung', 'Drainase tersumbat', 'Anak-anak area kumuh', 'Kebakaran / asap TPA', 'Warga pakai masker'] },
  { id: 5, title: 'PENUTUP', time: '2:20 – 3:00', mood: 'Harapan', moodCls: 'green',  bullets: ['Bank sampah aktivitas', 'Komunitas bersih-bersih', 'Tim Komnas PPLH lapangan', 'CTA: Jaga Bumi, Jaga Masa Depan', 'Logo + tagline 2026'] },
];

const BADGE_MAP: Record<string, string> = { orange: 'badge orange', red: 'badge red', green: 'badge green', blue: 'badge blue', purple: 'badge purple' };

export default function LandingPage() {
  return (
    <main id="pdf-landing" style={{ maxWidth: 960, margin: '0 auto', padding: '2rem 1.5rem 4rem' }}>

      {/* PDF action bar */}
      <div style={{ display:'flex', justifyContent:'flex-end', marginBottom:16 }}>
        <PdfButton title="Selayang Pandang — Beranda" targetId="pdf-landing" filename="selayang-pandang-beranda.pdf" btnLabel="Download PDF" />
      </div>

      {/* ── HERO ── */}
      <section style={{ textAlign: 'center', marginBottom: '3rem', paddingTop: '2rem' }}>
        <div style={{
          display: 'inline-flex', gap: 10,
          padding: '6px 18px', borderRadius: 999,
          background: 'var(--primary-container)',
          color: 'var(--on-primary)', fontSize: 11, fontWeight: 700,
          letterSpacing: '.06em', textTransform: 'uppercase',
          marginBottom: 18,
        }}>DPD Komnas PPLH Karawang — 2026</div>
        <h1 style={{
          fontSize: 'clamp(28px, 5vw, 52px)',
          fontWeight: 800, lineHeight: 1.1,
          letterSpacing: '-.03em',
          color: 'var(--on-bg)',
          marginBottom: 14,
        }}>Karawang dalam<br /><span style={{ color: 'var(--primary-container)' }}>Darurat Sampah</span></h1>
        <p style={{ fontSize: 17, color: 'var(--on-variant)', maxWidth: 600, margin: '0 auto 2rem', lineHeight: 1.65 }}>
          Dokumenter selayang pandang tentang krisis sampah di Karawang — dari data DLHK Jabar,
          kondisi TPA Jalupang, hingga solusi yang bisa kita lakukan bersama.
        </p>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/storyboard" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '11px 26px', borderRadius: 8,
            background: 'var(--primary-container)', color: 'var(--on-primary)',
            fontWeight: 700, fontSize: 14, textDecoration: 'none',
          }}>Lihat Storyboard <ArrowRight size={16} /></Link>
          <Link href="/script" style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            padding: '11px 26px', borderRadius: 8,
            background: 'var(--surface-2)', color: 'var(--on-surface)',
            border: '1px solid var(--border)',
            fontWeight: 600, fontSize: 14, textDecoration: 'none',
          }}>Baca Script</Link>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{
        display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 12, marginBottom: '3rem',
      }}>
        {STATS.map(s => (
          <div key={s.label} style={{
            background: 'var(--surface-1)', border: '1px solid var(--border)',
            borderRadius: 10, padding: '1.25rem', textAlign: 'center',
          }}>
            <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '.07em', textTransform: 'uppercase', color: 'var(--label)', marginBottom: 6 }}>{s.label}</div>
            <div style={{ fontSize: 30, fontWeight: 800, color: 'var(--primary-container)', letterSpacing: '-.03em' }}>{s.value}</div>
            <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{s.sub}</div>
          </div>
        ))}
      </section>

      {/* ── SEGMENT CARDS ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--label)', marginBottom: 16 }}>Struktur Video — 5 Segmen</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {SEGMENTS.map(s => {
            const moodCls = BADGE_MAP[s.moodCls] || 'badge orange';
            return (
              <div key={s.id} className="card" style={{ display: 'flex', gap: 16, alignItems: 'stretch' }}>
                <div style={{
                  minWidth: 58, height: 58, borderRadius: 8,
                  background: 'var(--surface-2)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontWeight: 800, fontSize: 22, color: 'var(--primary)',
                  border: '1px solid var(--border)',
                }}>{String(s.id).padStart(2,'0')}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                    <span style={{ fontWeight: 700, fontSize: 15 }}>{s.title}</span>
                    <span className={moodCls}>{s.mood}</span>
                    <span style={{ fontSize: 11, color: 'var(--muted)' }}>{s.time}</span>
                  </div>
                  <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                    {s.bullets.slice(0, 3).map((b, i) => (
                      <span key={i} style={{
                        fontSize: 11, color: 'var(--on-variant)',
                        background: 'var(--surface-2)', border: '1px solid var(--border)',
                        padding: '2px 8px', borderRadius: 4,
                      }}>{b}</span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: 18, fontWeight: 700, color: 'var(--label)', marginBottom: 16 }}>Akses Cepat</h2>
        <div className="grid grid-3" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12 }}>
          {CARDS.map(c => (
            <Link key={c.href} href={c.href} className="card" style={{ textDecoration: 'none' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 8,
                  background: 'var(--surface-2)',
                  display: 'flex', alignItems: 'center',
                  color: 'var(--primary)',
                }}><c.icon size={20} /></div>
                <span style={{ fontWeight: 700, fontSize: 14, color: 'var(--on-surface)' }}>{c.label}</span>
              </div>
              <div style={{ fontSize: 12, color: 'var(--muted)', lineHeight: 1.55 }}>{c.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer style={{
        borderTop: '1px solid var(--border)',
        paddingTop: '1.5rem',
        fontSize: 11, color: 'var(--muted)',
        display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: 8,
      }}>
        <span>DPD Komnas PPLH Karawang — Bidang Komunikasi, Informatika &amp; Investigasi — 2026</span>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--ok)', display: 'inline-block' }} />
          Production Active
        </span>
      </footer>
    </main>
  );
}
