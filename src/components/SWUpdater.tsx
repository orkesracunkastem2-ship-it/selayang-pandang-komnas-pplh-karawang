'use client';

import { useServiceWorker } from '../hooks/useServiceWorker';

export default function SWUpdater() {
  const { isSupported, updateAvailable, updateServiceWorker } = useServiceWorker();

  if (!isSupported) return null;

  return (
    <>
      {updateAvailable && (
        <div
          style={{
            position: 'fixed',
            bottom: 20,
            right: 20,
            background: 'var(--primary-container)',
            color: 'var(--on-primary)',
            padding: '12px 16px',
            borderRadius: 8,
            fontSize: 13,
            fontWeight: 600,
            cursor: 'pointer',
            zIndex: 1000,
            boxShadow: '0 4px 12px rgba(0,0,0,0.3)',
          }}
          onClick={updateServiceWorker}
        >
          Pembaruan tersedia • Klik untuk muat ulang
        </div>
      )}
    </>
  );
}