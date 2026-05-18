'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Film, FileText, Volume2, LayoutGrid, Calendar, Users, Package, Menu, X } from 'lucide-react';

const NAV = [
  { href: '/',          label: 'Beranda',    icon: Film       },
  { href: '/script',     label: 'Script',     icon: FileText   },
  { href: '/narasi',     label: 'Narasi',     icon: Volume2    },
  { href: '/storyboard', label: 'Storyboard', icon: LayoutGrid },
  { href: '/jadwal',     label: 'Jadwal',     icon: Calendar   },
  { href: '/tim',        label: 'Tim',        icon: Users      },
  { href: '/aset',       label: 'Aset',       icon: Package    },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isMobile = typeof window !== 'undefined' ? window.innerWidth < 768 : false;

  // Close drawer on route change
  useEffect(() => { setOpen(false); }, [pathname]);
  // Close drawer on viewport resize past breakpoint
  useEffect(() => {
    const onResize = () => { if (!isMobile) setOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [isMobile]);

  return (
    <nav style={{
      background: 'var(--surface-1)',
      borderBottom: '1px solid var(--border)',
      padding: '0 1rem',
      height: 56,
      display: 'flex', alignItems: 'center',
      gap: '.25rem',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      {/* Brand */}
      <Link href="/" style={{
        display: 'flex', alignItems: 'center', gap: '.4rem',
        textDecoration: 'none', flexShrink: 0,
      }} onClick={() => setOpen(false)}>
        <span style={{
          width: 28, height: 28, borderRadius: 6,
          background: 'var(--primary-container)', color: 'var(--on-primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 13, flexShrink: 0,
        }}>K</span>
        <span className="nav-brand"
          style={{ fontWeight: 700, fontSize: 14, color: 'var(--on-surface)', whiteSpace: 'nowrap' }}>
          Komnas PPLH Karawang
        </span>
      </Link>

      {/* Hamburger — show below 768px */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
        className="nav-hamburger"
        style={{
          display: open ? 'flex' : 'none',
          alignItems: 'center', justifyContent: 'center',
          background: 'none', border: 'none', color: 'var(--on-surface)',
          padding: 4, marginLeft: 'auto', cursor: 'pointer',
          width: 40, height: 40, borderRadius: 8,
        }}
      >
        {open ? <X size={22} /> : <Menu size={22} />}
      </button>

      {/* Desktop nav links — hidden on mobile (below 768px) */}
      <div className="nav-desktop-links" style={{
        display: 'flex', alignItems: 'center', gap: '2px',
        marginLeft: 'auto', flexWrap: 'nowrap',
      }}>
        {NAV.map(item => {
          const active = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link"
              style={{
                display: 'flex', alignItems: 'center', gap: '.3rem',
                padding: '5px 10px', borderRadius: 6,
                fontSize: 12, fontWeight: active ? 600 : 400,
                color: active ? 'var(--on-primary)' : 'var(--label)',
                background: active ? 'var(--primary-container)' : 'transparent',
                textDecoration: 'none', whiteSpace: 'nowrap',
                transition: 'all 120ms',
              }}
            >
              <item.icon size={13} />
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
