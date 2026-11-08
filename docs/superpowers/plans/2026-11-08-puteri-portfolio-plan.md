# Rencana Implementasi: Portofolio Personal Puteri Najma Azzahra

> **Konteks:** Website portofolio personal neo-brutalism untuk Puteri Najma Azzahra, mahasiswi S1 Sistem Informasi Telkom University dengan fokus karier Business Analysis, ERP/Supply Chain, dan Business Intelligence.

---

## 1. Sitemap & Alur Halaman (Single-Page Landing dengan Anchor Navigation)

Halaman utama dirancang sebagai satu halaman vertikal terpadu (*single-page with sticky anchor nav*) agar recruiter, dosen, dan event organizer dapat menelusuri narasi profil secara linier atau langsung melompat ke bagian yang relevan.

1. **Header & Navigation (`#top`)**:
   - Logo / Nama: `PUTERI NAJMA` (dengan badge status: `Aktif Kuliah / Siap Magang`)
   - Anchor links: `#tentang`, `#telugig`, `#organisasi`, `#panggung`, `#keahlian`, `#sertifikasi`, `#pendidikan`, `#kontak`
   - Tombol Aksi Utama: `Hubungi Saya` (Direct WhatsApp / Email)
   - Mobile Hamburger Menu (Vanilla JS, aksesibel)

2. **Hero Section (`#tentang`)**:
   - Headline Utama Terpilih: **"Data Jadi Keputusan. Rapat Jadi Hasil. Proses Jadi Rapi."**
   - Sub-headline / Deskripsi Pendukung: Mahasiswi Sistem Informasi Telkom University yang menjembatani analisis bisnis, optimasi rantai pasok (ERP), dan komunikasi publik untuk menyelesaikan masalah nyata di lapangan.
   - 2 Tombol Aksi:
     - `Bedah Studi Kasus TelUGig →` (Anchor ke `#telugig`)
     - `Bicara Kolaborasi / Magang ↗` (Anchor ke `#kontak`)
   - Visual: Frame brutalist portrait Puteri Najma dengan background blok solid hot pink `#FF3D8B`, ditambah tilted sticker: `★ Juara 1 BizCREATE 2026` (-3 deg).

3. **Ticker & Strip Bukti Nyata (Proof Strip)**:
   - Marquee strip neo-brutalist (hitam di atas kuning mentega `#FFE45C` / hot pink):
     `JUARA 1 BIZCREATE 2026 • 3 SERTIFIKASI GOOGLE RESMI • HR GOOGLE DEVELOPER ON CAMPUS • SILVER DIPLOMA TINGKAT NASIONAL • TELKOM UNIVERSITY S1 SISTEM INFORMASI`
   - 4 Kartu Metrik Keras:
     1. `Juara 1`: BizCREATE 2026 Business Plan Competition (TelUGig).
     2. `3x Google`: Certified (Business Intelligence, AI, Stakeholder Management).
     3. `HR Leader`: Google Developer on Campus Telkom University.
     4. `Silver Diploma`: The 3rd Jakarta National Choir Competition (Skor 72.93).

4. **Studi Kasus Utama: TelUGig (`#telugig`)**:
   - Status & Penghargaan: Juara 1 Business Plan Competition BizCREATE 2026 (FKS Telkom University, 16 Oktober 2026).
   - Masalah: Talenta mahasiswa terisolasi dari pasar lokal, sedangkan UMKM membutuhkan bantuan digitalisasi yang terjangkau tanpa risiko penipuan.
   - Solusi & Model Bisnis: Platform freelance kampus hiper-lokal berbasis B2B.
   - Diagram Alur Transaksi & Keuangan Murni CSS (Neo-Brutalist Box Diagram):
     - `UMKM / Klien` → Membayar Escrow / Mandatory DP (Jaminan Keamanan)
     - `Platform TelUGig` → Mengambil 15% Client Success Fee dari UMKM
     - `Mahasiswa Freelancer` → Menerima 100% Honor (Zero-Fee Policy)
   - Peran Puteri: Ditulis jujur sesuai CV: *Peserta / Kontributor kompetisi business plan*; peran spesifik ditandai `[ISI: ...]`.
   - Dokumentasi Otentik: Foto tim saat menerima penghargaan Juara 1 di panggung dan sertifikat resmi BizCREATE.

5. **Kepemimpinan & Organisasi (`#organisasi`)**:
   - Grid kartu brutalist dengan format hasil di depan (actionable, 1 kalimat per poin):
     1. **Google Developer on Campus Telkom University** (Human Resources): Mengelola rekrutmen talenta teknologi, menyusun program inkubasi anggota, dan memfasilitasi kolaborasi komunitas.
     2. **PKKMB Telkom University 2026** (Motivation & Discipline Team): Mengawal ketertiban ratusan mahasiswa baru dengan pendekatan komunikasi asertif dan responsif.
     3. **Tim Basket Putri** (Sekretaris): Mengelola tata kelola administrasi perizinan, anggaran, dan logistik operasional turnamen.
     4. **Dorm Team Asrama Telkom University** (Penerima Sertifikat Penghargaan): Bertanggung jawab atas kehidupan asrama kampus `[ISI: detail peran dan kontribusi operasional]`.

6. **Panggung & Komunikasi Publik (`#panggung`)**:
   - **MC & Pembicara Sosialisasi Sekolah**: Memandu jalannya sosialisasi di berbagai SMP di Jakarta Selatan, menyampaikan materi edukatif secara interaktif dan menarik minat ratusan siswa.
   - **Seni Pertunjukan & Paduan Suara**: Peraih Silver Diploma di The 3rd Jakarta National Choir Competition bersama Arkasvara 14 SMAN 14 Jakarta (Skor nasional: 72.93).
   - Slot Dokumentasi Lapangan: Placeholder `[ISI: Foto/Video dokumentasi kegiatan MC & panggung]`.

7. **Keahlian Terverifikasi (`#keahlian`)**:
   - Pengelompokan tanpa persentase:
     - *Bisnis & Analisis Data*: Business Process Analysis, Business Intelligence (BI), Data Modeling & Visualization, Pembuatan Dashboard & Laporan Bisnis, Stakeholder Analysis.
     - *Teknologi & Sistem*: Supply Chain & ERP Systems, SAP (Systems, Applications, and Products), Artificial Intelligence Fundamentals, AI for Data Analysis.
     - *Alat & Software (Terlihat di Portfolio & CV)*: Power BI, Microsoft Excel, Microsoft Word, Canva, CapCut, Google Gemini / GenAI.
     - *Komunikasi & Interpersonal*: Public Speaking, Negosiasi, Manajemen Perizinan, Kepemimpinan Tim, Manajemen Waktu.

8. **Sertifikasi & Penghargaan (`#sertifikasi`)**:
   - Grid kartu dengan modal preview sertifikat:
     1. Juara 1 BizCREATE 2026 (BEM KEMA FKS Telkom University, Okt 2026) - Gambar sertifikat asli terpasang.
     2. Google Business Intelligence Professional Certificate (Coursera, Jul 2026) - Gambar sertifikat asli terpasang.
     3. Google AI Professional Certificate (Coursera, Jun 2026) - Gambar sertifikat asli terpasang.
     4. Google Stakeholder Management Specialization (Coursera, Jun 2026).
     5. Sekolah Pasar Modal (Bursa Efek Indonesia / IDX, Sep 2026) - Gambar sertifikat asli terpasang.
     6. Silver Diploma National Choir Competition (May 2024) - Gambar sertifikat asli terpasang.
     7. Sertifikat Penghargaan Dorm Team Asrama Telkom University (2026).

9. **Riwayat Pendidikan (`#pendidikan`)**:
   - S1 Sistem Informasi - Telkom University (`[ISI: Tahun Masuk / Angkatan]`)
   - SMAN 14 Jakarta (Lulus 2025)
   - SMP Al Masoem Bandung (Lulus 2022)

10. **Kesiapan Karier / "Terbuka Untuk" (`#terbuka`)**:
    - Menggantikan template "Rate Card" dengan peluang nyata:
      - *Magang & Entry-Level*: Business Analyst, ERP/SAP Specialist Trainee, Supply Chain Analyst, BI Analyst, People Operations (HR).
      - *Proyek Analisis*: Pemodelan proses bisnis, visualisasi dashboard Power BI/Excel.
      - *Public Speaking*: Moderator, MC acara formal/non-formal kampus, pemateri sosialisasi.

11. **Testimoni (`#testimoni`)**:
    - Komponen disiapkan dengan switch toggle `showTestimonials` di konfigurasi (default: disembunyikan jika belum ada kutipan asli terverifikasi).

12. **Kontak Langsung (`#kontak`)**:
    - Callout brutalist tebal.
    - Tombol WhatsApp langsung (`https://wa.me/6281297658009`).
    - Tombol Email langsung (`mailto:puterinajma41@gmail.com`).
    - Tombol LinkedIn (`https://linkedin.com/in/puteri-najma-azzahra-788714376`).
    - Lokasi: Bandung / Jakarta, Indonesia.

13. **Footer**:
    - Hak Cipta © 2026 Puteri Najma Azzahra. Dibangun dengan Astro & Tailwind CSS murni.

---

## 2. Design Tokens (Neo-Brutalism Pink Editorial)

### Palet Warna Terbatas (WCAG AA Compliant):
- **Blush / Background Utama**: `#FFE3EE`
- **Hot Pink (Aksen Dominan & Tombol)**: `#FF3D8B`
- **Hitam Pekat (Teks, Border, Hard Shadows)**: `#0A0A0A`
- **Berry Gelap (Blok Kontras & Hover)**: `#8F0F4A`
- **Kuning Mentega (Highlight & Badges)**: `#FFE45C`
- **Putih Bersih (Isi Kartu & Dokumen)**: `#FFFFFF`

### Aturan Tipografi:
- **Heading**: `Bricolage Grotesque`, weight 800, uppercase di judul utama, tracking tight.
- **Body / Narasi**: `DM Sans`, weight 400 & 500, leading relaxed.
- **Label, Angka, Tanggal, Metrik**: `DM Mono`, weight 500 & 700.

### Aturan Komponen Brutalist:
- Border: `border-[3px] border-[#0A0A0A]`.
- Shadow Normal: `shadow-[5px_5px_0px_#0A0A0A]` atau `shadow-[6px_6px_0px_#0A0A0A]`.
- Shadow Hover: `hover:translate-x-1 hover:translate-y-1 hover:shadow-[2px_2px_0px_#0A0A0A] transition-all duration-150`.
- Shadow Active: `active:translate-x-1.5 active:translate-y-1.5 active:shadow-none`.
- Rotasi Terbatas: Maksimal 2-3 elemen (misalnya badge Juara 1 dan stiker sticker badge di foto hero).

---

## 3. Komponen yang Akan Dibuat

1. `src/layouts/Layout.astro`: Layout HTML5 dasar, import font Google (Bricolage Grotesque, DM Sans, DM Mono), Open Graph tags, meta SEO, theme color.
2. `src/components/Navbar.astro`: Header sticky dengan border bawah 3px, navigation anchor links, mobile slide drawer, keyboard access.
3. `src/components/Hero.astro`: Judul berbobot besar, foto Puteri dalam cutout frame brutalist, tilted badge, CTA ganda.
4. `src/components/ProofStrip.astro`: Marquee bergerak satu baris + 4 kotak metrik pencapaian utama.
5. `src/components/TelUGigCaseStudy.astro`: Breakdown proyek TelUGig Juara 1 BizCREATE 2026, diagram alur dana CSS brutalist, foto panggung juara.
6. `src/components/OrganizationSection.astro`: Grid kartu pengalaman kepemimpinan (GDG, PKKMB, Basket, Dorm Team).
7. `src/components/SpeakingSection.astro`: Seksi public speaking, MC sosialisasi, dan Silver Diploma paduan suara nasional.
8. `src/components/SkillsSection.astro`: Pengelompokan keahlian terverifikasi dengan pill neo-brutalist.
9. `src/components/CertificatesSection.astro`: Grid kartu sertifikat dengan thumbnail asli dari PDF dan detail penerbit.
10. `src/components/EducationSection.astro`: Timeline vertikal jalur pendidikan dengan border hitam tegas.
11. `src/components/OpenForSection.astro`: Pengganti rate card — daftar peran dan peluang kolaborasi.
12. `src/components/ContactSection.astro`: Box ajakan kolaborasi dengan tombol WhatsApp, Email, dan LinkedIn.
13. `src/components/Footer.astro`: Footer minimalis neo-brutalist.
14. `src/data/content.ts`: Single source of truth untuk semua teks, metrik, link, dan konfigurasi.
