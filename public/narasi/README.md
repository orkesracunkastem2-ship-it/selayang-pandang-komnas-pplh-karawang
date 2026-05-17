# narasi/ — Panduan Generate Narasi ElevenLabs

Isi folder ini berisi SSML narasi per segmen untuk video *Karawang dalam Darurat Sampah*.

## Files

| File | Segmen | Target durasi | Speed |
|------|--------|---------------|-------|
| `segmen1_pembuka.ssml` | Segmen 1 — Pembuka (0:00–0:35) | ~38–40 detik | +3% |
| `segmen2_data_fakta.ssml` | Segmen 2 — Data & Fakta (0:35–1:15) | ~48–50 detik | +3% |
| `segmen3_tpa_jalupang.ssml` | Segmen 3 — TPA Jalupang (1:15–1:50) | ~37–39 detik | ±0% |
| `segmen4_dampak.ssml` | Segmen 4 — Dampak & Isu (1:50–2:20) | ~32–35 detik | +3% |
| `segmen5_penutup.ssml` | Segmen 5 — Penutup (2:20–3:00) | ~50–55 detik | ±0% |

## Cara Generate

1. Buka [ElevenLabs.io](https://elevenlabs.io)
2. Pilih voice **perempuan Indonesia natural** (Aurora / Sri)
3. Set parameter:
   - **Model:** Eleven Multilingual v2 atau Turbo v2.5
   - **Stability:** 40%
   - **Similarity Boost:** 80%
   - **Style Exaggeration:** 25%
   - **Speed:** sesuai tabel di atas
4. Copy isi `.ssml` → paste di kolom teks ElevenLabs
5. Generate → Download → Simpan sebagai `.mp3` dengan nama yang sama
6. Gabung semua `.mp3` di editor video sesuai timeline script utama

## Catatan

- SSML di-versi ElevenLabs v2 compatible (tanpa `<pitch>` dan `<say-as>`)
- Tag `<prosody rate="slow|fast">` dan `<emphasis level="strong">` didukung
- Tag `<break time="Xs"/>` untuk jeda — jika tidak berfungsi, tambahkan tanda `(...)` pada teks yang diinginkan
- Format label K-O-M-N-A-S P-P-L-H ditulis langsung huruf per huruf tanpa tag SSML khusus
