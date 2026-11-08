export interface HeroHeadlineOption {
  id: string;
  headline: string;
  subheadline: string;
  selected: boolean;
}

export interface MetricFact {
  badge: string;
  title: string;
  subtitle: string;
  tag: string;
}

export interface TelUGigCaseStudy {
  title: string;
  competition: string;
  date: string;
  award: string;
  summary: string;
  problem: string;
  solution: string;
  businessModel: {
    studentTake: string;
    clientFee: string;
    security: string;
    description: string;
  };
  puteriRole: {
    cvTitle: string;
    description: string;
    placeholderNote: string;
  };
  teamPhotoUrl: string;
  certPhotoUrl: string;
}

export interface OrganizationItem {
  id: string;
  role: string;
  organization: string;
  period: string;
  impactLine: string;
  details: string[];
  badge: string;
}

export interface SpeakingItem {
  id: string;
  title: string;
  role: string;
  entity: string;
  date: string;
  highlight: string;
  description: string;
  badge: string;
  mediaPlaceholder?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: string[];
}

export interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
  imageUrl?: string;
  category: 'Business & AI' | 'Competition' | 'National Award' | 'Campus' | 'Finance';
  badge: string;
}

export interface EducationItem {
  institution: string;
  degree: string;
  period: string;
  details: string;
  note?: string;
}

export interface OpenForRole {
  title: string;
  category: 'Magang & Karir' | 'Proyek' | 'Public Speaking';
  description: string;
  deliverables: string[];
}

export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  organization: string;
}

export interface SiteContent {
  personal: {
    name: string;
    shortName: string;
    roleTag: string;
    currentCampus: string;
    email: string;
    phoneFormatted: string;
    whatsappUrl: string;
    linkedinUrl: string;
    linkedinDisplay: string;
    location: string;
    avatarUrl: string;
  };
  heroHeadlines: HeroHeadlineOption[];
  heroActiveHeadline: string;
  heroSupportingText: string;
  proofFacts: MetricFact[];
  telUGig: TelUGigCaseStudy;
  organizations: OrganizationItem[];
  speakingAndPerformance: SpeakingItem[];
  skillCategories: SkillCategory[];
  certificates: CertificateItem[];
  education: EducationItem[];
  openFor: OpenForRole[];
  testimonials: {
    enabled: boolean; // Flag to toggle section visibility
    items: TestimonialItem[];
  };
  contact: {
    headline: string;
    subheadline: string;
    actionPrompt: string;
  };
}

export const siteContent: SiteContent = {
  personal: {
    name: 'Puteri Najma Azzahra',
    shortName: 'Puteri Najma',
    roleTag: 'Business Analysis • Supply Chain / ERP • Business Intelligence',
    currentCampus: 'S1 Sistem Informasi, Telkom University',
    email: 'puterinajma41@gmail.com',
    phoneFormatted: '0812-9765-8009',
    whatsappUrl: 'https://wa.me/6281297658009?text=Halo%20Puteri,%20saya%20tertarik%20berdiskusi%20mengenai%20peluang%20magang/kolaborasi.',
    linkedinUrl: 'https://linkedin.com/in/puteri-najma-azzahra-788714376',
    linkedinDisplay: 'puteri-najma-azzahra-788714376',
    location: 'Bandung / Jakarta, Indonesia',
    avatarUrl: '/images/puteri-najma.jpg',
  },

  heroHeadlines: [
    {
      id: 'option-1',
      headline: 'Data Jadi Keputusan. Rapat Jadi Hasil. Proses Jadi Rapi.',
      subheadline: 'Mahasiswi Sistem Informasi Telkom University yang mengubah proses berantakan menjadi langkah terstruktur, nyaman memimpin orang, dan percaya diri berbicara di depan umum.',
      selected: true,
    },
    {
      id: 'option-2',
      headline: 'Analis Bisnis yang Siap Pegang Mic dan Pimpin Tim.',
      subheadline: 'Kombinasi analisis data berbasis Business Intelligence, pemahaman rantai pasok (ERP), serta komunikasi publik asertif untuk hasil nyata.',
      selected: false,
    },
    {
      id: 'option-3',
      headline: 'Dari Alur yang Berantakan ke Eksekusi yang Jelas.',
      subheadline: 'Menghubungkan data, teknologi ERP/SAP, dan koordinasi manusia menjadi solusi operasional yang berjalan rapi.',
      selected: false,
    },
  ],

  heroActiveHeadline: 'Data Jadi Keputusan. Rapat Jadi Hasil. Proses Jadi Rapi.',
  heroSupportingText: 'Mahasiswi Sistem Informasi Telkom University dengan fokus Business Analysis, ERP/Supply Chain, dan Business Intelligence. Siap berkontribusi dalam magang, riset proses, dan kolaborasi profesional.',

  proofFacts: [
    {
      badge: 'JUARA 1 TINGKAT FAKULTAS',
      title: 'Juara 1 BizCREATE 2026',
      subtitle: 'Kompetisi Business Plan FKS Telkom University (Karya: TelUGig)',
      tag: 'Business Plan',
    },
    {
      badge: '3x SERTIFIKASI GOOGLE',
      title: 'Google / Coursera Certified',
      subtitle: 'Business Intelligence, AI Professional, dan Stakeholder Management',
      tag: 'Data & BI',
    },
    {
      badge: 'LEADERSHIP & TALENT',
      title: 'HR Google Developer on Campus',
      subtitle: 'Pengelolaan SDM, rekrutmen anggota, dan pengembangan talenta komunitas',
      tag: 'People Ops',
    },
    {
      badge: 'PRESTASI NASIONAL',
      title: 'Silver Diploma Nasional',
      subtitle: 'The 3rd Jakarta National Choir Competition (Arkasvara 14, Skor 72.93)',
      tag: 'Public Art',
    },
  ],

  telUGig: {
    title: 'TelUGig — Platform Freelance Kampus Hiper-Lokal',
    competition: 'BizCREATE 2026 (Business Plan Competition, BEM KEMA FKS Kabinet Gelora)',
    date: 'Jumat, 16 Oktober 2026',
    award: 'Juara 1 Business Plan Competition',
    summary: 'Rancangan platform freelance hiper-lokal yang menjembatani talenta mahasiswa Telkom University dengan kebutuhan digitalisasi UMKM sekitar kampus melalui skema B2B yang adil dan aman.',
    problem: 'Mahasiswa memiliki keahlian digital (desain, penulisan, analisis data, web) namun sulit menjangkau klien lokal. Di sisi lain, UMKM sekitar kampus tertinggal dalam digitalisasi dan ragu menyewa agensi luar karena biaya tinggi serta risiko pengerjaan yang tidak terjamin.',
    solution: 'TelUGig mempertemukan UMKM dengan mahasiswa terpilih melalui sistem kurasi berbasis kampus, sistem deposit aman (escrow), serta model monetisasi transparan yang tidak memotong penghasilan mahasiswa.',
    businessModel: {
      studentTake: '100% (Zero-Fee Policy)',
      clientFee: '15% Client Success Fee',
      security: 'Escrow & Mandatory DP',
      description: 'Platform menerapkan kebijakan Zero-Fee bagi mahasiswa sehingga talenta menerima 100% honor kerja. Biaya operasional dan penjaminan ditopang oleh 15% Client Success Fee dari pihak UMKM sebagai jaminan proyek selesai tepat waktu.',
    },
    puteriRole: {
      cvTitle: 'Peserta / Kontributor | Kompetisi Business Plan (Tim Power Ranger Bojongsoang)',
      description: 'Berpartisipasi aktif dalam penyusunan perencanaan bisnis, menerapkan pemahaman analisis proses bisnis untuk merancang alur transaksi B2B, serta berkolaborasi dalam validasi kebutuhan pasar UMKM dan presentasi ide ke dewan juri.',
      placeholderNote: '[ISI: Detail kontribusi spesifik, misal porsi analisis kelayakan finansial atau hasil wawancara validasi UMKM Bojongsoang]',
    },
    teamPhotoUrl: '/images/telugig-juara1-team.jpg',
    certPhotoUrl: '/images/cert-bizcreate-juara1.jpg',
  },

  organizations: [
    {
      id: 'gdg-telkom',
      role: 'Human Resources (HR)',
      organization: 'Google Developer on Campus Telkom University',
      period: '2026 - Sekarang',
      impactLine: 'Mengelola siklus rekrutmen talenta, pemetaan kapasitas anggota, serta fasilitasi kolaborasi lintas divisi di komunitas pengembang kampus.',
      details: [
        'Bertanggung jawab langsung atas proses rekrutmen anggota baru dan onboarding.',
        'Merancang program pengembangan talenta agar anggota aktif berpartisipasi dalam lokakarya teknologi.',
        'Membangun budaya kolaborasi yang inklusif untuk menjaga keterlibatan anggota komunitas.',
      ],
      badge: 'People & Talent',
    },
    {
      id: 'pkkmb-2026',
      role: 'Event Staff — Motivation & Discipline Team (DMT)',
      organization: 'PKKMB Telkom University 2026',
      period: '2026',
      impactLine: 'Menjaga kedisiplinan dan ketertiban ribuan mahasiswa baru dengan komunikasi asertif, bukan intimidatif.',
      details: [
        'Bertanggung jawab atas penegakan tata tertib dan manajemen waktu seluruh peserta selama masa orientasi kampus.',
        'Memberikan motivasi harian serta arahan terstruktur agar transisi siswa ke dunia perkuliahan berjalan lancar.',
        'Berkolaborasi intensif dengan divisi operasional untuk merespons insiden lapangan secara cepat dan terukur.',
      ],
      badge: 'Crisis & Crowd Control',
    },
    {
      id: 'tim-basket-putri',
      role: 'Sekretaris Tim',
      organization: 'Tim Basket Putri',
      period: 'Periode Kepengurusan',
      impactLine: 'Menata administrasi legal, manajemen perizinan fasilitas, dan operasional logistik latihan maupun turnamen.',
      details: [
        'Mengelola alur surat-menyurat resmi, perizinan dispensasi akademik, serta penggunaan gelanggang olahraga.',
        'Menyusun arsip data pemain, jadwal tanding, dan koordinasi kebutuhan operasional tim dengan pembina.',
        'Melatih ketelitian administrasi dan disiplin manajemen waktu antara latihan fisik dan jadwal perkuliahan.',
      ],
      badge: 'Administration & Operations',
    },
    {
      id: 'dorm-team',
      role: 'Dorm Team (Penerima Sertifikat Penghargaan No. 024/SRT/SRXH/BKTEL-U/2026)',
      organization: 'Asrama Telkom University',
      period: '2026',
      impactLine: 'Menerima penghargaan resmi atas dedikasi dan kontribusi aktif dalam tata kelola lingkungan asrama mahasiswa.',
      details: [
        'Membantu koordinasi kedisiplinan, kenyamanan, dan kegiatan komunal warga asrama mahasiswa baru.',
        '[ISI: Rincian tanggung jawab harian dan program kerja spesifik yang dijalankan selama bertugas di Dorm Team]',
      ],
      badge: 'Student Welfare',
    },
  ],

  speakingAndPerformance: [
    {
      id: 'sosialisasi-smp',
      title: 'Sosialisasi Sekolah Menengah Pertama (SMP)',
      role: 'Pembawa Acara (MC) & Pembicara Utama',
      entity: 'Wilayah Jakarta Selatan',
      date: 'Sosialisasi Berkala',
      highlight: 'Memandu jalannya acara sosialisasi tatap muka dan membawakan materi edukasi kepada ratusan siswa SMP.',
      description: 'Menerapkan teknik public speaking yang interaktif, membangun atensi audiens usia remaja, dan menjawab pertanyaan interaktif mengenai transisi pendidikan dengan bahasa lugas dan persuasif.',
      badge: 'Public Speaking & MC',
      mediaPlaceholder: '/images/dokumentasi-sosialisasi-mc.png',
    },
    {
      id: 'arkasvara-choir',
      title: 'The 3rd Jakarta National Choir Competition',
      role: 'Peraih Silver Diploma (Peserta Paduan Suara Arkasvara 14)',
      entity: 'SMAN 14 Jakarta / Tingkat Nasional',
      date: '11 Mei 2024',
      highlight: 'Meraih skor 72.93 dan memboyong Silver Diploma pada kompetisi paduan suara bergengsi tingkat nasional.',
      description: 'Melatih konsistensi latihan vokal berkelompok selama berbulan-bulan, disiplin dinamika nada, sinkronisasi suara, dan ketenangan panggung di hadapan dewan juri internasional.',
      badge: 'National Silver Diploma',
      mediaPlaceholder: '/images/cert-arkasvara-choir.jpg',
    },
  ],

  skillCategories: [
    {
      category: 'Analisis Bisnis & Proses',
      description: 'Membongkar alur kerja yang ruwet menjadi diagram alur yang jelas, efisien, dan dapat dieksekusi.',
      skills: [
        'Business Process Modeling',
        'Business Analysis',
        'Stakeholder Analysis & Mapping',
        'Requirement Gathering',
        'Problem Solving & Root Cause',
      ],
    },
    {
      category: 'Business Intelligence & Data',
      description: 'Menemukan pola di tumpukan data untuk bahan pertimbangan strategis para pengambil keputusan.',
      skills: [
        'Business Intelligence (BI)',
        'Data Modeling & Pipelines',
        'Pembuatan Dashboard & Laporan',
        'Microsoft Power BI',
        'Microsoft Excel (Advanced)',
      ],
    },
    {
      category: 'Sistem Rantai Pasok & Enterprise',
      description: 'Memahami bagaimana informasi, barang, dan anggaran bergerak di dalam perusahaan skala besar.',
      skills: [
        'Supply Chain Systems',
        'ERP Concepts & Architecture',
        'SAP Fundamentals (Systems, Applications, Products)',
        'Digital Transformation Frameworks',
      ],
    },
    {
      category: 'Penerapan AI & Produktivitas',
      description: 'Mengintegrasikan kecerdasan artifisial secara bertanggung jawab untuk riset dan analisis data.',
      skills: [
        'Artificial Intelligence Fundamentals',
        'AI for Data Analysis',
        'Google Gemini & LLM Prompting',
        'Canva & Microsoft Word',
        'CapCut (Video Workflow)',
      ],
    },
    {
      category: 'Komunikasi Publik & Kepemimpinan',
      description: 'Menyampaikan hasil analisis secara meyakinkan dan memimpin dinamika tim di lapangan.',
      skills: [
        'Public Speaking & MC',
        'Komunikasi Bisnis & Presentasi',
        'Negosiasi & Asertivitas',
        'Kepemimpinan Tim (Team Leadership)',
        'Manajemen Perizinan & Regulasi',
      ],
    },
  ],

  certificates: [
    {
      id: 'bizcreate-2026',
      title: 'Juara 1 Business Plan Competition BizCREATE 2026',
      issuer: 'BEM KEMA FKS Kabinet Gelora, Telkom University',
      date: '16 Oktober 2026',
      category: 'Competition',
      imageUrl: '/images/cert-bizcreate-juara1.jpg',
      badge: 'Juara 1 Nasional / Kampus',
    },
    {
      id: 'google-bi',
      title: 'Google Business Intelligence Professional Certificate',
      issuer: 'Google Career Certificates / Coursera',
      date: 'Juli 2026 (Diselesaikan 8 Juli 2026)',
      credentialUrl: 'https://coursera.org/verify/professional-cert/9NOTUBICAFAQ',
      category: 'Business & AI',
      imageUrl: '/images/cert-google-bi.jpg',
      badge: 'Google Professional',
    },
    {
      id: 'google-ai',
      title: 'Google AI Professional Certificate',
      issuer: 'Google Career Certificates / Coursera',
      date: 'Juni 2026 (Diselesaikan 4 Juni 2026)',
      credentialUrl: 'https://coursera.org/verify/professional-cert/ALN789T0A3PH',
      category: 'Business & AI',
      imageUrl: '/images/cert-google-ai.jpg',
      badge: 'Google Professional',
    },
    {
      id: 'google-stakeholder',
      title: 'Google Stakeholder Management Specialization',
      issuer: 'Google Career Certificates / Coursera',
      date: 'Juni 2026',
      category: 'Business & AI',
      badge: 'Google Specialization',
    },
    {
      id: 'idx-spm',
      title: 'Sertifikat Sekolah Pasar Modal (SPM)',
      issuer: 'PT Bursa Efek Indonesia (IDX) & KPEI/KSEI',
      date: '18 September 2026',
      category: 'Finance',
      imageUrl: '/images/cert-idx-spm.jpg',
      badge: 'Pasar Modal Terakreditasi',
    },
    {
      id: 'arkasvara-choir-cert',
      title: 'Silver Diploma (Score 72.93) — 3rd Jakarta National Choir Competition',
      issuer: 'Badan Pembina Seni & Adjudicator Nasional',
      date: '11 Mei 2024',
      category: 'National Award',
      imageUrl: '/images/cert-arkasvara-choir.jpg',
      badge: 'Silver Diploma',
    },
    {
      id: 'dorm-team-cert',
      title: 'Sertifikat Penghargaan Dorm Team Asrama Telkom University',
      issuer: 'Pengelola Asrama Mahasiswa Telkom University (No. 024/SRT/SRXH/BKTEL-U/2026)',
      date: '2026',
      category: 'Campus',
      badge: 'Penghargaan Pengabdian',
    },
  ],

  education: [
    {
      institution: 'Telkom University',
      degree: 'S1 Sistem Informasi',
      period: '[ISI: Tahun Masuk Kuliah / Angkatan — Versi Portofolio menulis "2024 - Now"]',
      details: 'Fokus studi pada Analisis Proses Bisnis, Manajemen Rantai Pasok, Enterprise Resource Planning (ERP/SAP), dan Business Intelligence. Aktif dalam kepanitiaan kampus serta Google Developer on Campus.',
      note: 'Catatan integritas: CV menyatakan lulus SMA 2025; PDF portofolio mencatat 2024. Menunggu konfirmasi tahun masuk resmi.',
    },
    {
      institution: 'SMAN 14 Jakarta',
      degree: 'Sekolah Menengah Atas (SMA)',
      period: 'Tahun Lulus: 2025 (Periode 2022 - 2025)',
      details: 'Aktif sebagai anggota paduan suara Arkasvara 14 (meraih Silver Diploma nasional) dan Sekretaris Tim Basket Putri dengan fokus kedisiplinan dan tata kelola administrasi.',
    },
    {
      institution: 'SMP Al Masoem Bandung',
      degree: 'Sekolah Menengah Pertama (SMP)',
      period: 'Tahun Lulus: 2022',
      details: 'Membangun pondasi kedisiplinan, kepemimpinan karakter, dan komunikasi publik awal.',
    },
  ],

  openFor: [
    {
      title: 'Magang / Entry-Level: Business Analyst',
      category: 'Magang & Karir',
      description: 'Menjembatani kebutuhan pemangku kepentingan (stakeholder) dengan tim teknis melalui dokumentasi spesifikasi kebutuhan bisnis, pemodelan proses, dan analisis kesenjangan sistem.',
      deliverables: ['Business Process Flowchart', 'User Stories & BRD', 'UAT Coordination', 'Gap Analysis'],
    },
    {
      title: 'Magang / Entry-Level: ERP & Supply Chain Trainee',
      category: 'Magang & Karir',
      description: 'Membantu pemetaan alur material, data inventaris, dan pencatatan transaksi proses pengadaan/distribusi berbasis modul SAP atau sistem ERP enterprise.',
      deliverables: ['ERP Process Mapping', 'Master Data Verification', 'SOP Dokumentasi Alur', 'Logistik Laporan'],
    },
    {
      title: 'Magang / Entry-Level: Business Intelligence (BI)',
      category: 'Magang & Karir',
      description: 'Mengekstraksi data operasional, membangun data model relasional, serta merancang visualisasi dashboard interaktif di Power BI atau Excel untuk pemantauan KPI bisnis.',
      deliverables: ['Executive Dashboard Power BI', 'Data Cleaning & Modeling', 'Laporan Tren Penjualan/KPI'],
    },
    {
      title: 'Magang / Entry-Level: People Operations / HR',
      category: 'Magang & Karir',
      description: 'Mengelola siklus rekrutmen anggota, onboarding talenta, dan perancangan kegiatan pelibatan komunitas berbasis pengalaman di Google Developer on Campus.',
      deliverables: ['Candidate Screening & Pipeline', 'Onboarding Guides', 'Talent Engagement Activities'],
    },
    {
      title: 'Public Speaker & Master of Ceremony (MC)',
      category: 'Public Speaking',
      description: 'Memandu jalannya acara formal/semi-formal kampus, festival kewirausahaan, lokakarya, atau sosialisasi edukatif dengan pembawaan vokal jelas, asertif, dan menghidupkan suasana audiens.',
      deliverables: ['Moderator Diskusi / Talkshow', 'MC Acara Formal & Dinamis', 'Sosialisasi Sekolah'],
    },
  ],

  testimonials: {
    enabled: false, // Disembunyikan karena belum ada testimoni nyata dari narasumber langsung
    items: [
      {
        quote: '[ISI: Kutipan testimoni otentik dari dosen pembimbing, ketua tim BizCREATE, atau rekan organisasi]',
        author: '[ISI: Nama Pemberi Rekomendasi]',
        role: '[ISI: Jabatan / Posisi]',
        organization: '[ISI: Organisasi / Perusahaan / Kampus]',
      },
    ],
  },

  contact: {
    headline: 'Mari Bedah Data, Rapikan Proses, atau Kolaborasi Nyata.',
    subheadline: 'Mengubah ide PDF lama "Lets collaborate or do cooking something great together" menjadi ajakan kerja nyata. Baik untuk peluang magang, proyek analisis sistem, maupun panggung public speaking.',
    actionPrompt: 'Paling cepat direspons via WhatsApp atau Email formal.',
  },
};
