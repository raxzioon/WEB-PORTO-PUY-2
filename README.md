# Website Portofolio Personal — Puteri Najma Azzahra

Website portofolio personal dengan estetika **Neo-Brutalism Pink Editorial** yang dirancang khusus untuk **Puteri Najma Azzahra**, mahasiswi S1 Sistem Informasi Telkom University dengan arah karier di **Business Analysis, ERP/Supply Chain, dan Business Intelligence**.

---

## 🌟 Karakteristik & Filosofi Desain

- **Gaya Desain:** *Neo-Brutalism Pink Editorial* (tegas, lantang, profesional, bukan imut/manis).
  - Border hitam pekat 3px (`#0A0A0A`) di semua elemen interaktif.
  - Hard offset shadow tanpa blur (`shadow-brutal`: `5px 5px 0px #0A0A0A`).
  - Palet warna flat & kontras tinggi: Blush `#FFE3EE` (latar), Hot Pink `#FF3D8B` (aksen dominan), Butter Yellow `#FFE45C` (penanda penting), Berry Gelap `#8F0F4A` (seksi gelap), Hitam Pekat `#0A0A0A`.
  - Tipografi: Headings memakai `Bricolage Grotesque 800`, teks isi `DM Sans`, label/angka `DM Mono`.
- **Integritas Data 100%:**
  - Hanya menampilkan fakta otentik dari CV ATS dan Portofolio PDF.
  - Tidak ada data fiktif, angka persentase palsu, atau sisa template (misal: Laravel/MySQL template dieliminasi).
  - Seluruh data teks dipisah bersih di `src/data/content.ts`.
  - Seluruh placeholder belum terverifikasi tercatat di `TODO.md`.

---

## 🚀 Fitur & Seksi Portofolio

1. **Sticky Header Nav:** Navigasi anchor responsif dengan tombol WhatsApp/Email instan dan mobile drawer menu.
2. **Hero Editorial:** Headline utama (*"Data Jadi Keputusan. Rapat Jadi Hasil. Proses Jadi Rapi."*), foto Puteri dengan frame neo-brutalist dan backing block hot pink, serta stiker tilted Juara 1 BizCREATE 2026.
3. **Strip Bukti Nyata (Proof Strip):** Ticker berjalan brutalist dan 4 kartu metrik keras (BizCREATE, 3x Google Certified, HR GDG, Silver Diploma).
4. **Studi Kasus TelUGig (Karya Utama Juara 1):** Rincian masalah, solusi B2B, foto dokumentasi panggung, foto sertifikat resmi, dan **Diagram Alur Uang Murni CSS Brutalist** (UMKM → Escrow DP → Mahasiswa 100% Zero-Fee & Platform 15%).
5. **Kepemimpinan & Organisasi:** Kartu rekam jejak peran di Google Developer on Campus (HR), PKKMB 2026 (Motivation & Discipline Team), Sekretaris Tim Basket Putri, dan Dorm Team Asrama.
6. **Panggung & Public Speaking:** Blok pembeda utama analis yang bisa pegang mic — MC sosialisasi SMP di Jakarta Selatan dan prestasi Silver Diploma Paduan Suara Nasional (Arkasvara 14).
7. **Keahlian Terverifikasi:** Dikelompokkan rapi (Bisnis & Analitik, BI & Data, Rantai Pasok/ERP, AI Terapan & Produktivitas, Komunikasi & Negosiasi) tanpa persentase fiktif.
8. **Sertifikasi & Penghargaan:** Galeri sertifikat resmi beresolusi tinggi dengan link verifikasi kredensial Google/Coursera langsung.
9. **Riwayat Pendidikan:** Jalur akademik Telkom University S1 Sistem Informasi, SMAN 14 Jakarta, dan SMP Al Masoem Bandung.
10. **Terbuka Untuk Peluang:** Pengganti "Rate Card" dengan tawaran posisi nyata (Business Analyst, ERP/SAP Trainee, BI Analyst, HR People Ops, Public Speaker / MC).
11. **Testimoni:** Komponen siap pakai dengan kontrol flag `enabled: false` di `content.ts` hingga kutipan asli tersedia.
12. **Kontak Langsung:** Ajakan kolaborasi dengan tombol WhatsApp (`wa.me`), Email (`mailto`), dan LinkedIn.

---

## 🛠️ Stack Teknologi

- **Framework:** [Astro 5](https://astro.build/) (Statis, performa ekstrem, zero-JS default)
- **Styling:** [Tailwind CSS 3](https://tailwindcss.com/)
- **Interaktivitas:** Vanilla JavaScript minimal (hanya untuk kontrol hamburger menu mobile & aksesibilitas keyboard)
- **Aset Gambar:** Foto otentik diekstrak langsung dari portofolio PDF dan dokumen asli.

---

## 💻 Cara Menjalankan Proyek Secara Lokal

### Prasyarat
- [Node.js](https://nodejs.org/) v18+ atau v20+
- npm v9+

### Instalasi & Menjalankan Dev Server
```bash
# Clone atau masuk ke direktori proyek
cd "PUY PORTOFOLIO NEO"

# Install dependensi
npm install

# Jalankan server pengembangan lokal
npm run dev
```
Akses di browser pada: `http://localhost:4321`

### Membangun Versi Produksi (Build)
```bash
npm run build
```
Hasil build statis akan berada di folder `dist/` dan siap dideploy ke layanan hosting statis apa pun.

---

## 🚀 Panduan Deploy

Website ini bersifat 100% statis tanpa dependensi backend atau server dinamis, sehingga dapat dideploy secara gratis dalam hitungan menit:

### 1. Vercel
1. Hubungkan repositori GitHub Anda ke [Vercel](https://vercel.com).
2. Vercel akan secara otomatis mendeteksi Astro:
   - **Framework Preset:** Astro
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
3. Klik **Deploy**.

### 2. Netlify
1. Hubungkan repositori ke [Netlify](https://netlify.com).
2. Pengaturan build:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
3. Klik **Deploy site**.

### 3. GitHub Pages
1. Ubah konfigurasi `astro.config.mjs` jika menggunakan subpath repositori (`site` & `base`).
2. Buat GitHub Action workflow `.github/workflows/deploy.yml` untuk Astro deploy.
