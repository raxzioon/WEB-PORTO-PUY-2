# TODO & Catatan Integritas Data — Portofolio Puteri Najma Azzahra

Dokumen ini mencatat seluruh konflik data, placeholder `[ISI: ...]`, keputusan kurasi skill, serta opsi headline hero untuk memastikan portofolio 100% jujur terhadap data otentik dan bebas dari karangan.

---

## 1. Opsi Headline Hero

Sesuai arahan, dibuat 3 opsi headline bernada percaya diri, tanpa basa-basi klise ("passionate", "highly motivated", dsb):

1. **Opsi 1 (Terpilih & Aktif di Situs)**:
   > **"Data Jadi Keputusan. Rapat Jadi Hasil. Proses Jadi Rapi."**
   > *Alasan dipilih:* Menegaskan langsung tiga pilar utama Puteri: analitik data, kepemimpinan rapat/organisasi, dan perancangan proses bisnis (ERP).

2. **Opsi 2 (Cadangan)**:
   > **"Analis Bisnis yang Siap Pegang Mic dan Pimpin Tim."**
   > *Catatan:* Sangat kuat menonjolkan pembeda unik (analis + public speaker). Tersimpan di `content.ts` untuk variasi kampanye atau A/B testing.

3. **Opsi 3 (Cadangan)**:
   > **"Dari Alur yang Berantakan ke Eksekusi yang Jelas."**
   > *Catatan:* Fokus murni pada pemecahan masalah proses dan operasional rantai pasok.

---

## 2. Konflik Data & Resolusi

| Data | Versi CV ATS | Versi PDF Portofolio | Resolusi yang Diterapkan di Situs |
| :--- | :--- | :--- | :--- |
| **Kelulusan SMA & Awal Kuliah** | SMAN 14 Jakarta Lulus **2025** | SMAN 14 Jakarta (2022-2025), Telkom University (**2024 - Now**) | **CV diprioritaskan sebagai sumber kebenaran**. Ditampilkan: SMAN 14 lulus 2025, dan Telkom University ditandai `[ISI: Tahun Masuk Kuliah / Angkatan]`. Tanggal 2024 di PDF kemungkinan anomali/akselerasi/salah ketik. |
| **Keahlian Web Dev di PDF** | Tidak ada Laravel, Tailwind, Livewire, MySQL | Menampilkan ikon Laravel, Tailwind, Livewire, MySQL di halaman 3 | **Dihapus total dari situs**. Diidentifikasi sebagai sisa template lama Canva/Figma. Hanya keahlian dari CV dan tools nyata di portofolio (Power BI, Excel, Word, Canva, CapCut, AI) yang ditampilkan. |
| **Penerima Penghargaan BizCREATE** | Power Ranger Bojongsoang (Puteri Najma Azzahra) | Platform Freelance Kampus "TelUGig" | Digabungkan secara akurat: TelUGig adalah karya yang diajukan oleh tim Power Ranger Bojongsoang hingga meraih Juara 1 BizCREATE 2026. |

---

## 3. Daftar Placeholder yang Membutuhkan Input Puteri (`[ISI: ...]`)

Berikut adalah butir-butir yang sengaja tidak dikarang dan membutuhkan verifikasi langsung dari Puteri:

- [ ] **`[ISI: Tahun Masuk Telkom University]`**: Apakah angkatan 2024 atau 2025? (Sesuai konflik data di atas).
- [ ] **`[ISI: Peran Spesifik di Proyek TelUGig]`**: Di CV tertulis *Peserta / Kontributor*. Mohon lengkapi bagian mana yang dikerjakan secara spesifik: apakah analisis model pendapatan 15%, riset wawancara UMKM Bojongsoang, atau perancangan alur escrow?
- [ ] **`[ISI: Rincian Kegiatan Dorm Team Asrama Telkom University]`**: Sertifikat penghargaan nomor `024/SRT/SRXH/BKTEL-U/2026` sudah terbit, namun rincian program kerja harian asrama belum tercantum di CV.
- [x] **`[TERISI] Foto Dokumentasi MC Sosialisasi SMP`**: Sudah diisi dengan foto otentik dokumentasi panggung presentasi sosialisasi Puteri Najma (1024x576) di `public/images/dokumentasi-sosialisasi-mc.png`.
- [ ] **`[ISI: Testimoni Asli]`**: Kutipan nyata dari dosen pembimbing, ketua tim BizCREATE, rekan panitia PKKMB, atau pembina tim basket. (Seksi testimoni saat ini dimatikan lewat flag `testimonials.enabled = false` agar tidak menampilkan data palsu).
- [ ] **`[ISI: Link Sertifikat Stakeholder Management & Dorm Team]`**: URL verifikasi kredensial online jika tersedia.

---

## 4. Audit Keahlian yang Diizinkan Tampil

Hanya keahlian berikut yang dimasukkan ke dalam kode website:
- **Bisnis & Analitik**: Business Process, Business Analysis, Business Intelligence (BI), Data Modeling & Visualization, Pembuatan Dashboard & Laporan Bisnis, Stakeholder Analysis.
- **Sistem Enterprise**: Supply Chain & ERP Systems, SAP (Systems, Applications, Products), Artificial Intelligence Fundamentals, AI for Data Analysis.
- **Tools Terlihat**: Microsoft Power BI, Microsoft Excel, Microsoft Word, Canva, CapCut, Google Gemini / AI.
- **Komunikasi & Soft Skills**: Public Speaking, Negosiasi, Manajemen Perizinan, Kepemimpinan Tim (Team Leadership), Disiplin, Manajemen Waktu, Problem Solving.
