# 🎬 SCRIPT VIDEO — Selayang Pandang DPD Komnas PPLH Karawang

> **📍 Lokasi revisi ini:** Revisi P1-P4 dari analisa script Lanjutan.
> **Tanggal revisi:** Mei 2026.

---

## 📋 PERUBAHAN YANG DILAKUKAN

| ID | Perbaikan | Detail |
|----|-----------|--------|
| **P1** | Koreksi data perhitungan | `2,6 jt × 0,5 kg = 1.300 ton` (bukan 1.500 ton). Angka 1.500+ ton dipertahankan sebagai data resmi DLHK Jabar untuk menunjukkan perbedaan — argument lebih kuat. |
| **P2** | Penyesuaian durasi narasi | Total narasi disesuaikan target **3:00 (±2 detik)** |
| **P3** | Narasi ElevenLabs dibentuk per file | 5 file terpisah di folder `narasi/` |
| **P4** | SSML kompatibel ElevenLabs | Dihapus tag `<pitch>` dan `<say-as>` yang tidak didukung |
| **P5** | Tambah referensi narasi ElevenLabs | Terintegrasi di setiap segmen |

---

## 📋 INFORMASI PRODUKSI

| Item | Detail |
|------|--------|
| **Konsep** | Dokumenter pendek / Selayang Pandang |
| **Target Audience** | Masyarakat Karawang, Pemerintah Daerah, Stakeholder Lingkungan |
| **Tone** | Faktual, awakening call — tegas di data, hopeful di solusi |
| **Narator** | ElevenLabs — Suara Perempuan Indonesia (natural/realistic) |
| **Musik** | Cinematic orchestral — minor/tegang (segmen 1-4) → hopeful/rising (segmen 5) |
| **B-roll** | Footage hasil syuting langsung + stock aerial Karawang |
| **Durasi Inti** | **3 menit (180 detik)** |
| **Durasi Narasi Estimasi | **~180 detik** (setelah koreksi P2) |
| **Ekspansi Maks** | **5 menit (300 detik)** |

---

## 🔧 ELEVENLABS — PANDUAN NARASI (REVISI v2)

### Model & Suara Referensi

| Parameter | Setting |
|-----------|---------|
| **Model** | Eleven Multilingual v2 atau Turbo v2.5 |
| **Suara** | Perempuan Indonesia (natural) — rekomendasi: **"Aurora"** atau **"Sri"**, atau gunakan suara custom hasil clone |
| **Stability** | 35–50% (sedang — ada dinamika natural) |
| **Similarity Boost** | 75–85% (konsisten) |
| **Style Exaggeration** | 25% (ringan, tidak teaterikal) |
| **Speed** | +3% (sedikit lebih cepat biar narasi pas 180 detik) |

### Tag SSML yang DIDUKUNG oleh ElevenLabs v2

| Tag SSML | Fungsi | Catatan |
|----------|--------|---------|
| `<break time="Xs"/>` | Jeda panjang | Gunakan ini sebagai pengganti `(...)` kanan narasi |
| `<prosody rate="X%">...</prosody>` | Percepat/lambatkan tempo | Baik, `rate="slow"` / `rate="fast"` |
| `<emphasis level="strong">...</emphasis>` | Penekanan kata | **Paling penting** untuk kata kunci |
| `(...)` di teks | Jeda singkat | Tanpa `/` bandingkan `<break time="0.3s"/>` |
| *"Kata perkataan"* | Italic/gaya bicara | Cukup tanda `*` di SSML teks |

### Tag SSML yang TIDAK didukung oleh ElevenLabs v2 — Diperbaiki

| Tag yang Dihapus | Alasan | Pengganti |
|------------------|--------|-----------|
| `<prosody pitch="high">` | Diabaikan oleh ElevenLabs | Gunakan `rate` + `emphasis` saja |
| `<say-as interpret-as="characters">` | Eja huruf per huruf tidak didukung | Tulis huruf per huruf tanpa tag: K-O-M-N-A-S, P-P-L-H |

### File Narasi per Segmen

```
📁 narasi/
  ├── segmen1_pembuka.ssml     (0:00–0:35)
  ├── segmen2_data_fakta.ssml  (0:35–1:15)
  ├── segmen3_tpa_jalupang.ssml(1:15–1:50)
  ├── segmen4_dampak.ssml      (1:50–2:20)
  └── segmen5_penutup.ssml     (2:20–3:00)
```

Setiap file berisi SSML teks narasi saja, cocok di-paste langsung ke ElevenLabs.

---

# 🎬 FULL SCRIPT — BREAKDOWN PER DETIK (REVISI v2)

---

## SEGMEN 1: PEMBUKA (0:00 – 0:35)

*Target narasi: ~38 - 40 detik*

### Visual Timeline

| Time | Durasi | Shot | Gerakan Kamera | Keterangan |
|------|--------|------|----------------|------------|
| 0:00–0:05 | 5s | **Black screen** | STATIS | Logo DPD Komnas PPLH Karawang — fade in pelan, center frame |
| 0:05–0:08 | 3s | Logo bertahan | STATIS | Logo visible — audiens membaca nama organisasi |
| 0:08–0:10 | 2s | Logo fade out | STATIS | Slow crossfade ke visual berikutnya |
| 0:10–0:16 | 6s | **Aerial Karawang** — sawah hijau, gunung, lanskap | DRONE — slow pan kanan ke kiri | Warna warm/golden hour vibe |
| 0:16–0:22 | 6s | **Timelapse perkotaan** — lalu lintas, pasar, industri | TRIPOD — timelapse | Kompresi waktu, transisi cepat |
| 0:22–0:28 | 6s | **Slow motion** — orang buang sampah sembarangan, selokan penuh sampah | HANDHELD — slow steady push-in | Slow motion 60fps, playback 24fps |
| 0:28–0:32 | 4s | **Cut to black** | — | Teks muncul: *"DARURAT SAMPAH KARAWANG"* — bold sans-serif putih |
| 0:32–0:35 | 3s | Black hold | — | Teks bertahan, lalu dissolve |

### Audio Timeline

| Time | Musik | SFX | Narasi |
|------|-------|-----|--------|
| 0:00–0:08 | Cinematic intro — string pelan, minor, reverb besar | — | *(Hening)* |
| 0:08–0:12 | Musik mulai naik tipis | Ambience kota pelan masuk | "Karawang." |
| 0:12–0:18 | Musik stabil, low mix | — | "Kota industri, lumbung padi Jawa Barat. Rumah bagi lebih dari 2,6 juta jiwa." |
| 0:18–0:22 | — | Ambience fade sedikit | *(Jeda 1 detik)* |
| 0:22–0:26 | Musik drop — bass rendah, tegang | Ambient kurang menyenangkan | "Tapi di balik hiruk pikuk pembangunan..." |
| 0:26–0:28 | — | — | "...ada satu masalah yang makin hari makin mencekik." |
| 0:28–0:32 | Musik cut sejenak | *Impact FX — low boom* | Darurat. Sampah. |
| 0:32–0:35 | Musik mulai lagi pelan | — | "Ini Karawang hari ini." |

### ElevenLabs SSML

```xml
<!-- narasi/segmen1_pembuka.ssml -->
<break time="1000ms"/>
Karawang.
<break time="800ms"/>
Kota industri, lumbung padi Jawa Barat.
Rumah bagi lebih dari 2,6 juta jiwa.
<break time="500ms"/>
Tapi di balik hiruk pikuk pembangunan,
<break time="300ms"/>
ada satu masalah yang makin hari makin <emphasis level="strong">mencekik.</emphasis>
<break time="800ms"/>
<prosody rate="slow"><emphasis level="strong">Darurat. Sampah.</emphasis></prosody>
<break time="500ms"/>
Ini Karawang hari ini.
```

> **💡 Tips:** Generate file ini dengan speed +3% biar narasi pas ±40 detik. Output filename: `segmen1_pembuka.mp3`.

---

## SEGMEN 2: DATA & FAKTA (0:35 – 1:15)

*Target narasi: ~48 - 50 detik*

> **📌 Catatan Konseptual (P1):** Angka DLHK Jabar (">1.500 ton/hari") adalah data resmi pemerintah. Sementara hitungan sederhana 0,5 kg × 2,6 juta jiwa = 1.300 ton/hari. Selisih ini membuat argumen lebih kuat — artinya masalahnyalebih besar dari yang seharusnya terjadi dalam perhitungan minimal.

### Visual Timeline

| Time | Durasi | Shot | Gerakan Kamera | Keterangan |
|------|--------|------|----------------|------------|
| 0:35–0:39 | 4s | **Graphic** — teks "2.600.000 jiwa" muncul progresif | STATIS | Animasi count-up, warna emas |
| 0:39–0:44 | 5s | **Graphic** — kalkulasi "0,5 kg × 2,6 jt = 1.300 ton" | STATIS | Angka muncul bertahap, middle tone |
| 0:44–0:50 | 6s | **Graphic** — ">1.500 TON/HARI" muncul besar, merah | STATIS | Efek shake/impact, data DLHK neutral but shock |
| 0:50–0:54 | 4s | **Cut to B-roll** — sampah menumpuk di TPS | HANDHELD — slow push-in | Footage nyata |
| 0:54–1:00 | 6s | **Cut to B-roll** — truk sampah antre, tumpukan membusuk | GIMBAL — tracking samping | Warna desaturated |
| 1:00–1:06 | 6s | **Cut to B-roll** — warga membuang sampah, TPS penuh | WIDE TRIPOD | Realita sehari-hari |
| 1:06–1:12 | 6s | **Transition** — B-roll fade out, teks "Sebagian besar berakhir di..." | — | Teks "discovered" — white on dark |
| 1:12–1:15 | 3s | **Teks bold** — "...TPA JALUPANG" | — | Font tebal, merah/dark burn |

### Audio Timeline

| Time | Musik | SFX | Narasi |
|------|-------|-----|--------|
| 0:35–0:39 | Musik minor, ticking rhythm | *Ticking clock — pelan* | "Setiap hari..." |
| 0:39–0:44 | — | Ticking berhenti | "Setiap w Karawang rata-rata menghasilkan setengah kilogram sampah." |
| 0:44–0:50 | Beat drop — impact | *Riser → impact* | "Dengan perhitungan sederhana, itu jadi 1.300 ton per hari. Data DLHK Jawa Barat sebut angka mencapai lebih dari 1.500 ton per hari." |
| 0:50–0:55 | Musik tegang sustain | Ambience TPA | "Bukan hanya angka. 1.500 ton berarti ribuan truk, puluhan hektar lahan..." |
| 0:55–1:00 | — | — | "...dan beban lingkungan yang terus menumpuk tanpa solusi nyata." |
| 1:00–1:06 | Musik naik intensitas | Ambient fade out | "Dan dari semua sampah itu..." |
| 1:06–1:12 | — | *Riser — prepare for reveal* | *(Jeda 2 detik)* |
| 1:12–1:15 | Musik impact + sustain | *Impact sound* | "...sebagian besar berakhir di satu tempat: TPA Jalupang." |

### ElevenLabs SSML

```xml
<!-- narasi/segmen2_data_fakta.ssml -->
<prosody rate="fast">Setiap hari.</prosody>
<break time="300ms"/>
Setiap warga Karawang rata-rata menghasilkan setengah kilogram sampah.
<break time="500ms"/>
Kalikan dengan <emphasis level="strong">2,6 juta jiwa.</emphasis>
Dengan perhitungan sederhana, itu jadi 1.300 ton per hari.
Data D-L-H-K Jawa Barat sebut angka mencapai
<emphasis level="strong">lebih dari 1.500 ton per hari.</emphasis>
<break time="800ms"/>
Bukan hanya angka.
<break time="300ms"/>
1.500 ton berarti: ribuan truk, puluhan hektar lahan,
dan beban lingkungan yang terus menumpuk tanpa solusi nyata.
<break time="500ms"/>
Dan dari semua sampah itu
<break time="1000ms"/>
sebagian besar berakhir di satu tempat:
<prosody rate="slow"><emphasis level="strong">TPA Jalupang.</emphasis></prosody>
```

> **💡 Tips:** Generate dengan speed +3%. Output: `segmen2_data_fakta.mp3`

---

## SEGMEN 3: TPA JALUPANG (1:15 – 1:50)

*Target narasi: ~37 - 39 detik*

### Visual Timeline

| Time | Durasi | Shot | Gerakan Kamera | Keterangan |
|------|--------|------|----------------|------------|
| 1:15–1:20 | 5s | **Drone wide shot** — luas TPA, asap membumbung | DRONE — establishing, slow descend | Angle tinggi |
| 1:20–1:27 | 7s | **Drone medium** — tumpukan sampah sejauh mata memandang | DRONE — slow fly-over | Warna desaturated, kontras tinggi |
| 1:27–1:33 | 6s | **Ground** — tumpukan sampah close up | HANDHELD — macro detail | Tekstur plastik, sisa makanan, busuk |
| 1:33–1:40 | 7s | **Ground** — air lindi hitam mengalir | HANDHELD — tracking air | Close up lindi (leachate) |
| 1:40–1:47 | 7s | **Wide** — warga/pemulung di sekitar TPA | GIMBAL — lock-off | Manusia dalam frame, humanize |
| 1:47–1:50 | 3s | **Transisi** — dissolve ke segmen 4 | — | Fade out pelan (slow dissolve ke visual sungai) |

### Audio Timeline

| Time | Musik | SFX | Narasi |
|------|-------|-----|--------|
| 1:15–1:19 | Musik minor — cello atau bass rendah | *Drone rumble — low* | — |
| 1:19–1:27 | — | Ambience TPA — lalat, mesin | — |
| 1:27–1:33 | Musik piano minor | — | "TPA Jalupang. Jengkal terakhir pembuangan sampah Karawang." |
| 1:33–1:40 | Intensitas naik | Suara tetesan lindi | "Dibuka puluhan tahun lalu, kini kapasitasnya jauh melebihi batas. Overload. Darurat." |
| 1:40–1:47 | Musik emosional — string section | Ambience warga | "Warga di sekitarnya hidup berdampingan dengan bau, polusi udara, dan air tanah yang terancam lindi." |
| 1:47–1:50 | Musik sustain | — | "Tapi dampaknya tidak berhenti di sana." |

### ElevenLabs SSML

```xml
<!-- narasi/segmen3_tpa_jalupang.ssml -->
TPA Jalupang.
<break time="500ms"/>
Jengkal terakhir pembuangan sampah Karawang.
<break time="800ms"/>
Dibuka puluhan tahun lalu, kini kapasitasnya
<emphasis level="strong">jauh melebihi batas.</emphasis>
Overload. Darurat.
<break time="500ms"/>
Warga di sekitarnya hidup berdampingan dengan bau, polusi udara,
dan air tanah yang terancam <emphasis level="strong">lindi.</emphasis>
<break time="800ms"/>
<prosody rate="slow">Tapi dampaknya tidak berhenti di sana.</prosody>
```

> **💡 Tips:** Speed normal atau ±0%. Output: `segmen3_tpa_jalupang.mp3`

---

## SEGMEN 4: DAMPAK & ISU LINGKUNGAN (1:50 – 2:20)

*Target narasi: ~32 - 35 detik (dipercepat ±5% dari versi lama)*

### Visual Timeline

| Time | Durasi | Shot | Gerakan Kamera | Keterangan |
|------|--------|------|----------------|------------|
| 1:50–1:56 | 6s | **Sungai tercemar** — sampah terapung, air hitam/coklat | GIMBAL — slow pan | Ambil Citarum/Cibeet |
| 1:56–2:02 | 6s | **Drainase** — sampah nyangkut, air menggenang | HANDHELD — close up | Detail drainase mampet |
| 2:02–2:09 | 7s | **Anak-anak** di area kumuh sampah | GIMBAL — slow motion, portrait | Dapat izin subjek |
| 2:09–2:16 | 7s | **Kebakaran TPA** / asap hitam dari TPA | HANDHELD/WIDE | Visual dramatis |
| 2:16–2:20 | 4s | **Warga pakai masker** — pandangan kosong | PORTRAIT — close up | Slow motion |

### Audio Timeline

| Time | Musik | SFX | Narasi |
|------|-------|-----|--------|
| 1:50–1:56 | Musik sedih — string adagio | *Air mengalir — sungai* | "Sungai-sungai kita menjadi jalur sampah." |
| 1:56–2:02 | — | — | "Drainase tersumbat. Banjir di musim hujan jadi langganan." |
| 2:02–2:09 | Musik naik — emosional | — | "Ini bukan hanya soal lingkungan. Ini soal kesehatan. Soal masa depan. Soal anak-anak kita." |
| 2:09–2:13 | Musik klimaks kecil | — | "Dan krisis ini..." |
| 2:13–2:16 | Musik tegang | *Fire crackle / asap* | "...terus terjadi." |
| 2:16–2:20 | Sustain | — | "Setiap hari. Setiap malam." |

### ElevenLabs SSML

```xml
<!-- narasi/segmen5_penutup.ssml -->
<start_of_flow>
Sungai-sungai menjadi jalur sampah.
<break time="300ms"/>
Drainase tersumbat.
<break time="300ms"/>
Banjir di musim hujan jadi langganan.
<break time="700ms"/>
Ini bukan hanya soal lingkungan.
<break time="400ms"/>
<emphasis level="strong">Ini soal kesehatan.</emphasis>
<emphasis level="strong">Soal masa depan.</emphasis>
<emphasis level="strong">Soal anak-anak kita.</emphasis>
<break time="800ms"/>
Dan krisis ini terus terjadi.
<break time="300ms"/>
Setiap hari.
<break time="300ms"/>
Setiap malam.
<end_of_flow>
```

> **💡 Tips:** Speed normal atau ±0%. Output: `segmen4_dampak.mp3`

---

## SEGMEN 5: PENUTUP — SOLUSI & CALL TO ACTION (2:20 – 3:00)

*Target narasi: ~50 - 55 detik*

### Visual Timeline

| Time | Durasi | Shot | Gerakan Kamera | Keterangan |
|------|--------|------|----------------|------------|
| 2:20–2:25 | 5s | **Black — transisi** | — | Jeda 2 detik, mulai scene positif |
| 2:25–2:31 | 6s | **Bank sampah** — warga memilah, menimbang | GIMBAL — tracking | Grading warm |
| 2:31–2:37 | 6s | **Komunitas lingkungan** — aksi bersih-bersih sungai | GIMBAL — wide | Semangat gotong royong |
| 2:37–2:44 | 7s | **Tim Komnas PPLH** — sosialisasi, turun lapangan | GIMBAL — variasi | Wajah tim, interaksi warga |
| 2:44–2:48 | 4s | **Logo DPD Komnas PPLH Karawang** — overlay di footage tim | STATIS | Logo kiri bawah atau tengah frame |
| 2:48–2:53 | 5s | **Call to action** — teks: "Jaga Bumi, Jaga Masa Depan" | STATIS | Typography clean, modern |
| 2:53–2:57 | 4s | **Logo center** — DPD Komnas PPLH Karawang | STATIS | Dengan tagline organisasi |
| 2:57–3:00 | 3s | **Fade to black** | — | Text: "DPD Komnas PPLH Karawang — 2026" |

### Audio Timeline

| Time | Musik | SFX | Narasi |
|------|-------|-----|--------|
| 2:20–2:25 | Musik transisi — minor ke mayor | Ambient fade out | *(Hening)* |
| 2:25–2:30 | Musik hopeful — piano rising | Suara ramah — warga bekerja | "Tapi masih ada harapan." |
| 2:30–2:37 | Musik naik — inspiring, warm | — | "Bank sampah bermunculan. Komunitas peduli lingkungan mulai bergerak. Perubahan dimulai dari langkah kecil." |
| 2:37–2:44 | Musik crescendo — puncak | — | "DPD Komnas PPLH Karawang hadir — mengawal, mengadvokasi, dan memastikan isu lingkungan tidak dilupakan." |
| 2:44–2:48 | — | — | "Bukan hanya tugas pemerintah." |
| 2:48–2:50 | — | — | "Ini tanggung jawab kita semua." |
| 2:50–2:53 | Musik puncak — resolved | — | "Setiap langkah kecil berarti." |
| 2:53–2:57 | Musik fade out | — | *(Jeda kecil)* Sampah bukan warisan. |
| 2:57–3:00 | — | — | "Sampah adalah tanggung jawab kita hari ini." |

### ElevenLabs SSML

```xml
<!-- narasi/segmen5_penutup.ssml -->
Tapi <prosody rate="slow"><emphasis level="strong">masih ada harapan.</emphasis></prosody>
<break time="500ms"/>
Bank sampah bermunculan.
Komunitas peduli lingkungan mulai bergerak.
Perubahan dimulai dari langkah kecil.
<break time="700ms"/>
DPD Komnas PPLH Karawang hadir –
untuk mengawal, mengadvokasi,
dan memastikan isu lingkungan <emphasis level="strong">tidak dilupakan.</emphasis>
<break time="600ms"/>
Bukan hanya tugas pemerintah.
<break time="300ms"/>
Ini tanggung jawab kita semua.
<break time="400ms"/>
Setiap langkah kecil berarti.
<break time="700ms"/>
<prosody rate="slow">
Sampah bukan warisan.
<break time="400ms"/>
Sampah adalah tanggung jawab kita hari ini.
</prosody>
```

> **💡 Tips:** Speed normal atau ±0%. Output: `segmen5_penutup.mp3`

---

# 🧩 EXTENSION POOL — Versi 5 Menit (REVISI)

Jika ingin memperpanjang ke 5 menit, sisipkan opsional ini:

## Extension A — Wawancara Warga +0:35
**Sisip di Segmen 3**, setelah 1:37

```xml
<!-- Tambah di segmen3_tpa_jalupang.ssml jika ingin extend -->
<break time="300ms"/>
<prosody rate="slow">Dengarkan suara mereka yang terdampak.</prosody>
```

## Extension B — Data Komparasi +0:25
**Sisip di Segmen 2**, setelah 0:55

```xml
<!-- Tambah di segmen2_data_fakta.ssml jika ingin extend -->
<break time="400ms"/>
Sebagai perbandingan, rata-rata produksi sampah kota besar di Indonesia
berada di <emphasis level="strong">500 hingga 800 ton per hari.</emphasis>
Angka Karawang bahkan sampai dua kali lipatnya.
```

## Extension C — B-Roll Ekstra +0:35
**Sisip di Segmen 4**, setelah 2:03

```xml
<!-- Tambah di segmen4_dampak.ssml jika ingin extend -->
<break time="400ms"/>
Krisis ini multidimensional.
<break time="300ms"/>
Pencemaran udara dari pembakaran sampah.
Krisis air bersih akibat lindi yang merembes ke tanah.
Dan dampak kesehatan yang terus diabaikan.
```

## Extension D — Program Komnas PPLH +0:25
**Sisip di Segmen 5**, setelah 2:45

```xml
<!-- Tambah di segmen5_penutup.ssml jika ingin extend -->
<break time="400ms"/>
Ke depan, kami akan fokus pada:
pendampingan bank sampah, edukasi masyarakat,
serta advokasi kebijakan pengelolaan sampah
yang berkeadilan dan berkelanjutan.
```

---

# 🗂️ FOLDER STRUCTURE NARASI ELEVENLABS

```
📁 narasi/
📄 narasi/
  ├── README.txt           ← Panduan generate batch
  ├── segmen1_pembuka.ssml
  ├── segmen1_pembuka.mp3   ← Output ElevenLabs
  ├── segmen2_data_fakta.ssml
  ├── segmen2_data_fakta.mp3
  ├── segmen3_tpa_jalupang.ssml
  ├── segmen3_tpa_jalupang.mp3
  ├── segmen4_dampak.ssml
  ├── segmen4_dampak.mp3
  ├── segmen5_penutup.ssml
  └── segmen5_penutup.mp3
```

**Alur generate:**
1. Buka ElevenLabs → paste SSML dari file `.ssml`
2. Set voice = orang Indonesia perempuan (Aurora/Sri)
3. Speed = +3%, Stability = 40%, Similarity = 80%
4. Generate → Download → rename jadi `_mp3`
5. Ulangi untuk semua 5 segmen
6. Gabung di editor video dengan timeline yang sudah ditentukan

---

# 📅 PRODUCTION RUN DOWN

*Sama dengan versi sebelumnya — tidak ada perubahan.*

## 🎥 Daftar Shot — TPA Jalupang

| Shot ID | Deskripsi | Type | Durasi (video) |
|---------|-----------|------|----------------|
| TP-01 | Aerial TPA — wide establishing | Drone — slow descend | 5-7 detik |
| TP-02 | Aerial — flyover tumpukan sampah | Drone — horizontal | 7-10 detik |
| TP-03 | Ground wide — area dumping truk | Tripod — lock-off | 5 detik |
| TP-04 | Medium — pemulung di TPA | Gimbal — tracking | 5-7 detik |
| TP-05 | Close up — tumpukan sampah (tekstur) | Handheld — macro | 3-5 detik |
| TP-06 | Close up — lindi/leachate mengalir | Handheld — macro | 5 detik |
| TP-07 | Portrait — warga sekitar TPA | Gimbal — slow push-in | 5 detik |
| TP-08 | Wide — aktivitas pembuangan | Tripod — timelapse | 5 detik |
| TP-09 | Close up — asap/kebakaran (jika ada) | Handheld | 3 detik |
| TP-10 | Wawancara — warga sekitar (opsional) | Tripod — 2 shot | 30-60 detik (mentah) |

## 🎥 Daftar Shot — Sampah Perkotaan

| Shot ID | Deskripsi | Type | Durasi (video) |
|---------|-----------|------|----------------|
| SP-01 | Pasar tradisional — tumpukan sampah pagi | Gimbal — tracking | 5-7 detik |
| SP-02 | Drainase — sampah menyumbat | Handheld — close up | 5 detik |
| SP-03 | Sungai tercemar — wide | Gimbal — pan | 7 detik |
| SP-04 | Pemukiman — sampah rumah tangga | Gimbal — walkthrough | 5-7 detik |
| SP-05 | TPS penuh — truk antre | Tripod — lock-off | 5 detik |
| SP-06 | Anak-anak di area sampah | Gimbal — portrait | 5-7 detik |

## 🎥 Daftar Shot — Solusi & Komnas PPLH

| Shot ID | Deskripsi | Type | Durasi (video) |
|---------|-----------|------|----------------|
| SL-01 | Bank sampah — aktivitas pemilahan | Gimbal — tracking | 5-7 detik |
| SL-02 | Bank sampah — penimbangan & pencatatan | Gimbal — close up | 5 detik |
| SL-03 | Komunitas — aksi bersih-bersih | Gimbal — wide | 5-7 detik |
| SL-04 | Tim Komnas PPLH — rapat/diskusi | Handheld — natural | 5 detik |
| SL-05 | Tim Komnas PPLH — turun lapangan | Gimbal — tracking | 5-7 detik |
| SL-06 | Portrait — profil tim (foto/close up) | Tripod — portrait | 3-5 detik |

## 🗓️ Jadwal Produksi

| Hari | Tanggal | Kegiatan | Output Target |
|------|---------|----------|---------------|
| **H-3** | TBD | Finalisasi script & storyboard | Script final approved |
| **H-2** | TBD | Survey lokasi, urus izin (TPA Jalupang) | Izin masuk TPA, rute syuting |
| **H-1** | TBD | Prep gear: drone, kamera, audio, masker, boots | Checklist gear OK |
| **Hari 1** | TBD | **Syuting TPA Jalupang + Sekitar** (pagi-siang) | TP-01 s.d TP-10, SP-06 |
| **Hari 2** | TBD | **Syuting Sampah Perkotaan** (pagi-siang) | SP-01 s.d SP-05 |
| **Hari 3** | TBD | **Syuting Solusi + Komnas PPLH** (pagi-siang) | SL-01 s.d SL-06 |
| **Hari 4** | TBD | Pasca-produksi: editing, color grading, mixing | Draft video |
| **Hari 5** | TBD | Review internal, revisi, render final | Final video + export |

## 🛠️ Equipment Checklist

| Item | Qty | Keterangan |
|------|-----|------------|
| Kamera mirrorless/DSLR (4K/1080p 60fps min) | 1 | Untuk slow-motion & kualitas |
| Drone | 1 | Aerial TPA & Karawang — cek regulasi penerbangan |
| Gimbal 3-axis | 1 | Shot stabil bergerak |
| Tripod | 1 | Wide shot & timelapse |
| Shotgun mic | 1 | Audio wawancara |
| Lavalier mic | 1 | Backup audio wawancara |
| Masker gas/N95 | 2-3 | TPA — bau & gas metana |
| Sepatu boots | 2-3 | Lindi & medan TPA |
| Power bank | 2 | Untuk kamera & drone |
| Memory card (min 64GB) | 3-4 | Kapasitas besar |

---

## 📝 Catatan Produksi

1. **Izin TPA Jalupang:** Urus minimal H-3, kontak UPTD Pengelolaan Sampah atau Dinas Lingkungan Hidup Karawang untuk akses masuk dan dokumentasi.
2. **Keselamatan:** TPA mengandung gas metana (mudah terbakar) dan lindi (beracun) — wajib masker, sarung tangan, dan boots.
3. **Wawancara:** Siapkan informed consent verbal/tulisan untuk warga yang diwawancara. Jangan tampilkan anak-anak tanpa izin orang tua.
4. **Footage anak-anak:** Hindari close up yang mengeksploitasi kemiskinan — fokus ke isu, bukan mempermalukan subjek.
5. **Drone:** Cek regulasi penerbangan drone di sekitar TPA — mungkin ada larangan karena buffer bandara atau area terlarang.
6. **Color grading:** TPA & sampah — desaturated/cool tone (gelap, kotor). Solusi — warm/golden (cerah, hangat). Transisi gradual antara keduanya.
7. **Narasi ElevenLabs:** Generate narasi terpisah per segmen — 5 file `.mp3` terpisah untuk memudahkan editing.
8. **Backup:** Footage di-duplicate ke 2 media penyimpanan terpisah setelah setiap hari syuting.
9. **Data kebenaran:** Angka "1.500 ton/hari" adalah data resmi DLHK Jawa Barat. Angka 1.300 ton adalah hasil perhitungan 0,5 kg × 2,6 juta jiwa. Gap ini menunjukkan bahwa realita di lapangan bahkan lebih buruk dari perhitungan minimal — gunakan untuk memperkuat argumen.
10. **Referensi data DLHK:** Simpan dalam folder `referensi/` dokumen resmi DLHK sebagai bukti.

---

> **Dokumen ini disusun oleh:**
> DPD Komnas PPLH Karawang — Bidang Komunikasi, Informatika & Investigasi
> 2026

---
*Revisi v2 — Koreksi P1-P4: koreksi data perhitungan, penyesuaian durasi narasi ±180 detik, pemisah file narasi ElevenLabs, SSML kompatibel ElevenLabs v2*

*End of Document*
