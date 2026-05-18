import { useEffect, useState } from 'react';

interface ServiceWorkerState {
  isSupported: boolean;
  isRegistered: boolean;
  updateAvailable: boolean;
  updateServiceWorker: () => void;
}

// Hook to register service worker
export function useServiceWorker(): ServiceWorkerState {
  const [isSupported, setIsSupported] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [updateAvailable, setUpdateAvailable] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !('serviceWorker' in navigator)) {
      return;
    }

    setIsSupported(true);

    const registerSW = async () => {
      try {
        const registration = await navigator.serviceWorker.register('/sw.js', {
          scope: '/',
        });
        
        setIsRegistered(true);

        // Check for updates
        registration.addEventListener('updatefound', () => {
          const installingWorker = registration.installing;
          if (installingWorker) {
            installingWorker.addEventListener('statechange', () => {
              if (installingWorker.state === 'installed') {
                if (navigator.serviceWorker.controller) {
                  setUpdateAvailable(true);
                }
              }
            });
          }
        });

        // Listen for messages from SW
        navigator.serviceWorker.addEventListener('controllerchange', () => {
          window.location.reload();
        });

        console.log('[SW] Registered successfully');
      } catch (error) {
        console.error('[SW] Registration failed:', error);
      }
    };

    // Only register in production or when not explicitly disabled
    if (process.env.NODE_ENV === 'production' || !window.location.search.includes('no-sw')) {
      registerSW();
    }
  }, []);

  const updateServiceWorker = () => {
    if (updateAvailable) {
      navigator.serviceWorker.getRegistrations().then((registrations) => {
        registrations.forEach((registration) => {
          registration.waiting?.postMessage({ type: 'SKIP_WAITING' });
        });
      });
    }
  };

  return { isSupported, isRegistered, updateAvailable, updateServiceWorker };
}