'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Film, FileText, Volume2, LayoutGrid, Calendar, Users, Package } from 'lucide-react';

const NAV = [
  { href: '/',          label: 'Beranda',   icon: Film       },
  { href: '/script',     label: 'Script',    icon: FileText   },
  { href: '/narasi',     label: 'Narasi',    icon: Volume2    },
  { href: '/storyboard', label: 'Storyboard',icon: LayoutGrid },
  { href: '/jadwal',     label: 'Jadwal',    icon: Calendar   },
  { href: '/tim',        label: 'Tim',       icon: Users      },
  { href: '/aset',       label: 'Aset',      icon: Package    },
];

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav style={{
      background: 'var(--surface-1)',
      borderBottom: '1px solid var(--border)',
      padding: '0 1.5rem',
      height: 56,
      display: 'flex', alignItems: 'center',
      gap: '.5rem',
      flexWrap: 'wrap',
      position: 'sticky', top: 0, zIndex: 100,
    }}>
      {/* Brand */}
      <Link href="/" style={{
        display: 'flex', alignItems: 'center', gap: '.6rem',
        marginRight: '1.5rem', textDecoration: 'none',
        flexShrink: 0,
      }}>
        <span style={{
          width: 30, height: 30, borderRadius: 6,
          background: 'var(--primary-container)', color: 'var(--on-primary)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontWeight: 800, fontSize: 14,
        }}>K</span>
        <span style={{
          fontWeight: 700, fontSize: 14, color: 'var(--on-surface)',
          whiteSpace: 'nowrap',
        }}>
          Komnas PPLH Karawang
        </span>
      </Link>

      {/* Nav links */}
      {NAV.map(item => {
        const active = pathname === item.href;
        return (
          <Link key={item.href} href={item.href}
            style={{
              display: 'flex', alignItems: 'center', gap: '.35rem',
              padding: '4px 10px', borderRadius: 6,
              fontSize: 12, fontWeight: active ? 600 : 400,
              color: active ? 'var(--on-primary)' : 'var(--label)',
              background: active ? 'var(--primary-container)' : 'transparent',
              textDecoration: 'none',
              whiteSpace: 'nowrap',
              transition: 'all 120ms',
            }}
          >
            <item.icon size={13} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
