# Caching & Lazy Loading Setup

Website ini sekarang dilengkapi dengan fitur caching dan lazy loading untuk pengalaman yang lebih cepat.

## ✨ Fitur yang Ditambahkan

### 1. Service Worker (`/public/sw.js`)
- **Cache static assets**: CSS, JS, fonts, dan images
- **Offline support**: Website tetap bisa diakses tanpa internet setelah pertama kali visit
- **Smart caching strategy**:
  - Cache-first untuk static assets
  - Network-first dengan fallback untuk konten dinamis
  - Cache invalidation otomatis

### 2. Lazy Loading
- **LazyImage component**: Gambar dimuat hanya ketika terlihat di viewport
- **Intersection Observer**: Memeriksa kapan elemen masuk ke viewport
- **Loading state**: Smooth transition saat gambar dimuat

### 3. Manifest PWA (`/public/manifest.json`)
- Bisa di-install sebagai aplikasi
- Mode standalone untuk pengalaman native
- Theme color yang konsisten

### 4. Cache Headers (`next.config.js`)
- Browser caching untuk static assets
- Service worker auto-update

## 🚀 Cara Kerja

1. **Pertama kali visit**: Semua aset dimuat dan di-cache
2. **Visit selanjutnya**: 
   - Aset dari cache (instan!)
   - Hanya fetch konten yang berubah
3. **Update konten**: Service worker mendeteksi dan memberi notifikasi update

## 🔧 Development

```bash
# Build dengan caching
pnpm build

# Test service worker di localhost
pnpm dev
```

Untuk testing offline:
1. Buka DevTools → Application → Service Workers
2. Centang "Offline" dan refresh halaman

## 📱 PWA Ready

Untuk mengaktifkan PWA:
1. Tambahkan icon di `/public/icon-192.png` dan `/public/icon-512.png`
2. Deploy ke HTTPS (Vercel otomatis)

## 🛠️ File Structure

```
src/
├── app/
│   ├── layout.tsx          # Service worker registration
│   └── page.tsx            # Landing page
├── components/
│   └── LazyImage.tsx       # Lazy-loaded image component
├── hooks/
│   └── useServiceWorker.ts # SW registration hook
└── lib/
    └── lazyLoad.ts         # Dynamic import utilities
public/
├── sw.js                   # Service worker
└── manifest.json           # PWA manifest
```

---

Dibangun khusus untuk **Selayang Pandang — DPD Komnas PPLH Karawang** ✨