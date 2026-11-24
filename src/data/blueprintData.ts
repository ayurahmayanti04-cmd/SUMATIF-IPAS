import { Question, QuestionBlueprint, CognitiveLevel, Difficulty } from '../types';

/**
 * Data Acuan Matriks Kisi-Kisi Penulisan Soal Tes Sumatif
 * Kurikulum Merdeka - Fase C (Kelas 5) Mata Pelajaran IPAS
 */

export interface BlueprintDefinition {
  elemen: string;
  tujuanPembelajaran: string;
  indikatorSoal: string;
  levelKognitif: CognitiveLevel;
  bobotSkor: number;
}

// Peta acuan default 30 butir soal IPAS Kelas 5 Kurikulum Merdeka
export const DEFAULT_BLUEPRINT_MAP: Record<number, BlueprintDefinition> = {
  1: {
    elemen: 'Letak Geografis Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi letak geografis Indonesia pada peta dunia sebagai negara yang berada di posisi silang.',
    indikatorSoal:
      'Disajikan gambar peta kepulauan Indonesia, peserta didik dapat menentukan dua benua dan dua samudra yang mengapit wilayah Indonesia.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  2: {
    elemen: 'Letak Geografis Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat menyebutkan batas-batas wilayah daratan dan perairan Indonesia dengan negara tetangga.',
    indikatorSoal:
      'Disajikan narasi wilayah Pulau Kalimantan bagian utara, peserta didik dapat menentukan negara tetangga yang berbatasan langsung dengan daratan Indonesia.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  3: {
    elemen: 'Letak Geografis Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis karakteristik wilayah Indonesia sebagai negara maritim dan agraris.',
    indikatorSoal:
      'Disajikan pernyataan tentang julukan Indonesia sebagai negara maritim, peserta didik dapat mengidentifikasi ciri utama negara maritim secara tepat.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  4: {
    elemen: 'Pengaruh Letak Geografis',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan pengaruh letak geografis dan garis khatulistiwa terhadap kondisi iklim tropis di Indonesia.',
    indikatorSoal:
      'Disajikan informasi letak Indonesia di garis khatulistiwa (0°), peserta didik dapat menentukan ciri utama iklim tropis di Indonesia.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  5: {
    elemen: 'Pengaruh Letak Geografis',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis pengaruh angin muson terhadap pergantian musim hujan dan kemarau di Indonesia.',
    indikatorSoal:
      'Disajikan deskripsi arah tiupan angin dari Benua Asia menuju Benua Australia pada bulan Oktober–April, peserta didik dapat menentukan jenis angin muson dan musim yang ditimbulkannya.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  6: {
    elemen: 'Pengaruh Letak Geografis',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi pembagian tiga zona waktu di Indonesia (WIB, WITA, WIT) beserta wilayah cakupannya.',
    indikatorSoal:
      'Disajikan informasi pembagian zona waktu di Indonesia, peserta didik dapat menentukan zona waktu yang berlaku di Provinsi Bali (Jembrana) serta selisih waktunya terhadap WIB.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  7: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi peran organisme sebagai produsen, konsumen, dan pengurai dalam rantai makanan.',
    indikatorSoal:
      'Disajikan gambar rantai makanan pada ekosistem sawah, peserta didik dapat menentukan makhluk hidup yang berperan sebagai produsen dan konsumen tingkat II.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  8: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan jenis-jenis simbiosis (mutualisme, komensalisme, parasitisme) antar makhluk hidup.',
    indikatorSoal:
      'Disajikan ilustrasi interaksi antara tanaman anggrek dan pohon mangga, peserta didik dapat menentukan jenis simbiosis yang terjadi.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  9: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan fungsi dekomposer (pengurai) dalam menjaga kesuburan tanah dan kelangsungan ekosistem.',
    indikatorSoal:
      'Disajikan narasi penguraian daun kering dan bangkai hewan oleh bakteri dan jamur, peserta didik dapat menentukan peran organisme tersebut dalam ekosistem.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  10: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis dampak perubahan populasi salah satu komponen terhadap keseimbangan ekosistem.',
    indikatorSoal:
      'Disajikan gambar rantai makanan sawah dan skenario penurunan drastis populasi ular sawah, peserta didik dapat memprediksi dampak langsung terhadap populasi katak dan elang.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  11: {
    elemen: 'Bumi & Alam Semesta',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi urutan struktur lapisan bagian dalam Bumi dari lapisan terluar hingga terdalam.',
    indikatorSoal:
      'Disajikan gambar penampang struktur lapisan Bumi, peserta didik dapat mengurutkan lapisan penyusun Bumi dari kerak bumi hingga inti dalam.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  12: {
    elemen: 'Bumi & Alam Semesta',
    tujuanPembelajaran:
      'Peserta didik dapat menjelaskan tahapan-tahapan siklus air (evaporasi, kondensasi, presipitasi, infiltrasi).',
    indikatorSoal:
      'Disajikan diagram proses siklus air di alam, peserta didik dapat mengidentifikasi proses penguapan air laut dan pembentukan awan secara berurutan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  13: {
    elemen: 'Bumi & Alam Semesta',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis pengaruh aktivitas manusia terhadap kelancaran tahapan siklus air.',
    indikatorSoal:
      'Disajikan fenomena betonisasi dan pengaspalan jalan tanpa ruang terbuka hijau, peserta didik dapat menentukan tahapan siklus air yang terganggu (infiltrasi).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  14: {
    elemen: 'Bumi & Alam Semesta',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi berbagai proses alami yang menyebabkan perubahan bentuk permukaan Bumi.',
    indikatorSoal:
      'Disajikan kasus pengikisan daratan pantai akibat hantaman gelombang laut tanpa hutan mangrove, peserta didik dapat menamai peristiwa alam tersebut (abrasi).',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  15: {
    elemen: 'Bumi & Alam Semesta',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis jenis pergerakan lempeng tektonik Bumi dan kaitannya dengan gempa bumi serta gunung berapi.',
    indikatorSoal:
      'Disajikan narasi kondisi geologis Indonesia pada pertemuan lempeng bumi, peserta didik dapat menentukan istilah gerak dua lempeng yang saling bertumbukan (konvergen).',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  16: {
    elemen: 'Budaya & Aktivitas Ekonomi',
    tujuanPembelajaran:
      'Peserta didik dapat mengenal berbagai warisan budaya nasional Indonesia yang diakui secara internasional.',
    indikatorSoal:
      'Disajikan ilustrasi sawah terasering tradisional di Bali, peserta didik dapat mengidentifikasi nama sistem pengairan warisan budaya dunia UNESCO tersebut (Subak).',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  17: {
    elemen: 'Budaya & Aktivitas Ekonomi',
    tujuanPembelajaran:
      'Peserta didik dapat menghubungkan kondisi geografis tempat tinggal dengan jenis aktivitas ekonomi masyarakat sekitar.',
    indikatorSoal:
      'Disajikan gambar aktivitas ekonomi dan kondisi wilayah pesisir pantai, peserta didik dapat menentukan mata pencaharian utama masyarakat pesisir.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  18: {
    elemen: 'Budaya & Aktivitas Ekonomi',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan jenis kegiatan ekonomi (produksi, distribusi, konsumsi) di lingkungan sekitar.',
    indikatorSoal:
      'Disajikan narasi seorang perajin kain batik/tenun yang membuat karya kerajinan bernilai guna, peserta didik dapat mengklasifikasikan aktivitas tersebut sebagai kegiatan produksi.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  19: {
    elemen: 'Letak Geografis Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi karakteristik letak geografis dan astronomis Indonesia melalui pilihan ganda kompleks.',
    indikatorSoal:
      'Disajikan peta Indonesia dan 3 pernyataan terkait garis khatulistiwa, posisi silang, dan zona waktu, peserta didik dapat memilih semua pernyataan yang benar.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  20: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat mengidentifikasi contoh-contoh simbiosis mutualisme pada lingkungan sekitar.',
    indikatorSoal:
      'Disajikan 3 contoh interaksi makhluk hidup di kebun/lingkungan sekitar, peserta didik dapat memilih semua pasangan makhluk hidup yang tergolong simbiosis mutualisme.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  21: {
    elemen: 'Bumi & Alam Semesta',
    tujuanPembelajaran:
      'Peserta didik dapat membedakan karakteristik lapisan penyusun Bumi (litosfer, hidrosfer, dan atmosfer).',
    indikatorSoal:
      'Disajikan gambar penampang Bumi dan 3 pernyataan tentang litosfer, hidrosfer, dan atmosfer, peserta didik dapat menentukan seluruh pernyataan yang benar.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  22: {
    elemen: 'Letak Geografis Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat memverifikasi batas-batas wilayah kepulauan Indonesia dengan samudra, benua, dan negara tetangga.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai batas selatan, batas timur Papua, dan letak Pulau Bali, peserta didik dapat menentukan kebenaran (Benar/Salah) masing-masing pernyataan.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  23: {
    elemen: 'Letak Geografis Indonesia',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis keunikan kondisi geologis dan jalur pelayaran strategis Indonesia.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang jalur pegunungan muda dunia, Selat Malaka, dan keberadaan gunung api, peserta didik dapat menilai kebenaran (Benar/Salah) tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  24: {
    elemen: 'Pengaruh Letak Geografis',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi dampak positif dan tantangan posisi silang Indonesia di bidang budaya serta perdagangan.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai keragaman budaya, kegiatan ekspor-impor pelabuhan, dan penyaringan budaya asing, peserta didik dapat menentukan nilai Benar/Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  25: {
    elemen: 'Pengaruh Letak Geografis',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis pengaruh angin muson timur serta perbedaan waktu antar zona WIB, WITA, dan WIT.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang angin muson timur, konversi waktu Jakarta–Bali, dan zona waktu Papua, peserta didik dapat menentukan nilai Benar/Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  26: {
    elemen: 'Ekosistem',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis peran produsen, simbiosis parasitisme, dan dampak penggunaan bahan kimia terhadap ekosistem.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang fotosintesis tumbuhan, hubungan nyamuk-manusia, dan dampak pestisida berlebihan, peserta didik dapat menilai Benar/Salah tiap pernyataan.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  27: {
    elemen: 'Bumi & Alam Semesta',
    tujuanPembelajaran:
      'Peserta didik dapat mengevaluasi proses transpirasi, presipitasi, serta pengaruh tutupan hutan terhadap siklus air.',
    indikatorSoal:
      'Disajikan diagram siklus air dan 3 pernyataan terkait transpirasi, presipitasi, dan dampak penebangan hutan liar, peserta didik dapat menentukan nilai Benar/Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
  28: {
    elemen: 'Bumi & Alam Semesta',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis penyebab pergerakan lempeng tektonik, potensi tsunami, dan skala waktu perubahan permukaan Bumi.',
    indikatorSoal:
      'Disajikan 3 pernyataan mengenai arus konveksi mantel, gempa tektonik pemicu tsunami, dan durasi proses erosi, peserta didik dapat menentukan nilai Benar/Salah.',
    levelKognitif: 'L3',
    bobotSkor: 1,
  },
  29: {
    elemen: 'Budaya & Aktivitas Ekonomi',
    tujuanPembelajaran:
      'Peserta didik dapat mengelompokkan warisan budaya benda dan warisan budaya tak benda serta upaya pelestariannya.',
    indikatorSoal:
      'Disajikan 3 pernyataan tentang contoh warisan budaya benda, budaya tak benda, dan peran generasi muda, peserta didik dapat menentukan nilai Benar/Salah.',
    levelKognitif: 'L1',
    bobotSkor: 1,
  },
  30: {
    elemen: 'Budaya & Aktivitas Ekonomi',
    tujuanPembelajaran:
      'Peserta didik dapat menganalisis keterkaitan pelestarian warisan budaya lokal dengan pengembangan ekonomi kreatif dan agrowisata.',
    indikatorSoal:
      'Disajikan gambar budaya-ekonomi dan 3 pernyataan tentang UMKM batik/tenun, wisata sawah Subak, dan dukungan produk lokal, peserta didik dapat menilai Benar/Salah.',
    levelKognitif: 'L2',
    bobotSkor: 1,
  },
};

/**
 * Format label bentuk soal
 */
export function getBentukSoalLabel(type: string): string {
  switch (type) {
    case 'pg':
      return 'Pilihan Ganda (PG)';
    case 'pgk':
      return 'Pilihan Ganda Kompleks (PGK)';
    case 'pgk_kategori':
      return 'Benar / Salah (PGK Kategori)';
    default:
      return 'Pilihan Ganda';
  }
}

/**
 * Format label level kognitif
 */
export function getCognitiveLevelLabel(level: CognitiveLevel): string {
  switch (level) {
    case 'L1':
      return 'L1 (Pemahaman / Mengingat)';
    case 'L2':
      return 'L2 (Aplikasi / Penerapan)';
    case 'L3':
      return 'L3 (Penalaran / Analisis HOTS)';
    default:
      return 'L2 (Aplikasi)';
  }
}

/**
 * Mendapatkan format string ringkas kunci jawaban
 */
export function formatCorrectAnswer(q: Question): string {
  if (q.type === 'pg') {
    return typeof q.correctAnswer === 'string' ? q.correctAnswer : 'A';
  }
  if (q.type === 'pgk') {
    if (Array.isArray(q.correctAnswer)) {
      return q.correctAnswer.join(', ');
    }
    return String(q.correctAnswer || 'A');
  }
  if (q.type === 'pgk_kategori') {
    if (q.statements && q.statements.length > 0) {
      return q.statements
        .map((st, i) => `${i + 1}:${st.correctAnswer ? 'B' : 'S'}`)
        .join(', ');
    }
    return 'B/S';
  }
  return '-';
}

/**
 * Menghasilkan metadata blueprint lengkap untuk butir soal tertentu
 */
export function getQuestionBlueprint(q: Question, index: number): QuestionBlueprint {
  const def = DEFAULT_BLUEPRINT_MAP[q.id];

  // Gunakan data dari definisi atau field internal question, atau inferensi logis
  const elemen =
    q.elemen ||
    (def ? def.elemen : inferElemenFromTopic(q.topic));

  const levelKognitif: CognitiveLevel =
    q.levelKognitif ||
    (def ? def.levelKognitif : inferLevelFromDifficulty(q.difficulty));

  const tujuanPembelajaran =
    q.tujuanPembelajaran ||
    (def
      ? def.tujuanPembelajaran
      : `Peserta didik mampu memahami dan menerapkan konsep materi ${q.topic} pada mata pelajaran IPAS.`);

  const indikatorSoal =
    q.indikatorSoal ||
    (def
      ? def.indikatorSoal
      : `Disajikan stimulus masalah tentang ${q.topic}, peserta didik dapat menentukan jawaban yang tepat.`);

  const bobotSkor = q.bobot || (def ? def.bobotSkor : 1);

  return {
    questionId: q.id,
    noSoal: index + 1,
    elemen,
    tujuanPembelajaran,
    materiPokok: q.topic,
    indikatorSoal,
    levelKognitif,
    levelKognitifLabel: getCognitiveLevelLabel(levelKognitif),
    bentukSoal: getBentukSoalLabel(q.type),
    kunciJawaban: formatCorrectAnswer(q),
    bobotSkor,
    difficulty: q.difficulty,
  };
}

function inferElemenFromTopic(topic: string): string {
  const t = topic.toLowerCase();
  if (t.includes('pengaruh') || t.includes('iklim') || t.includes('muson') || t.includes('waktu')) {
    return 'Pengaruh Letak Geografis';
  }
  if (t.includes('geografis') || t.includes('letak') || t.includes('batas') || t.includes('maritim')) {
    return 'Letak Geografis Indonesia';
  }
  if (t.includes('ekosistem') || t.includes('rantai') || t.includes('simbiosis') || t.includes('makhluk')) {
    return 'Ekosistem';
  }
  if (
    t.includes('bumi') ||
    t.includes('lapisan') ||
    t.includes('litosfer') ||
    t.includes('hidrosfer') ||
    t.includes('atmosfer') ||
    t.includes('siklus air') ||
    t.includes('lempeng')
  ) {
    return 'Bumi & Alam Semesta';
  }
  if (t.includes('budaya') || t.includes('ekonomi') || t.includes('warisan')) {
    return 'Budaya & Aktivitas Ekonomi';
  }
  return 'IPAS Umum';
}

function inferLevelFromDifficulty(diff: Difficulty): CognitiveLevel {
  if (diff === 'Mudah') return 'L1';
  if (diff === 'Sukar') return 'L3';
  return 'L2';
}

/**
 * Menghitung rekapitulasi distribusi kisi-kisi soal
 */
export function getBlueprintStatistics(questions: Question[]) {
  const total = questions.length;
  const blueprints = questions.map((q, idx) => getQuestionBlueprint(q, idx));

  // Distribusi Elemen
  const elemenCountMap: Record<string, number> = {};
  // Distribusi Level Kognitif
  const levelCountMap: Record<CognitiveLevel, number> = { L1: 0, L2: 0, L3: 0 };
  // Distribusi Tingkat Kesukaran
  const diffCountMap: Record<Difficulty, number> = { Mudah: 0, Sedang: 0, Sukar: 0 };
  // Distribusi Bentuk Soal
  const typeCountMap: Record<string, number> = { pg: 0, pgk: 0, pgk_kategori: 0 };

  blueprints.forEach((bp, idx) => {
    // Elemen
    elemenCountMap[bp.elemen] = (elemenCountMap[bp.elemen] || 0) + 1;
    // Level
    levelCountMap[bp.levelKognitif] = (levelCountMap[bp.levelKognitif] || 0) + 1;
    // Diff
    const q = questions[idx];
    if (q) {
      diffCountMap[q.difficulty] = (diffCountMap[q.difficulty] || 0) + 1;
      typeCountMap[q.type] = (typeCountMap[q.type] || 0) + 1;
    }
  });

  const elemenDistribution = Object.entries(elemenCountMap).map(([elemen, count]) => ({
    elemen,
    count,
    percentage: total > 0 ? Math.round((count / total) * 100) : 0,
  }));

  const levelDistribution = [
    {
      level: 'L1' as const,
      label: 'L1 (Pemahaman / C1-C2)',
      desc: 'Mengingat & Memahami konsep dasar',
      count: levelCountMap.L1,
      percentage: total > 0 ? Math.round((levelCountMap.L1 / total) * 100) : 0,
      color: 'blue',
    },
    {
      level: 'L2' as const,
      label: 'L2 (Aplikasi / C3)',
      desc: 'Menerapkan konsep pada konteks nyata',
      count: levelCountMap.L2,
      percentage: total > 0 ? Math.round((levelCountMap.L2 / total) * 100) : 0,
      color: 'emerald',
    },
    {
      level: 'L3' as const,
      label: 'L3 (Penalaran / C4-C6 HOTS)',
      desc: 'Menganalisis & memecahkan masalah kompleks',
      count: levelCountMap.L3,
      percentage: total > 0 ? Math.round((levelCountMap.L3 / total) * 100) : 0,
      color: 'amber',
    },
  ];

  const difficultyDistribution = [
    {
      difficulty: 'Mudah' as const,
      count: diffCountMap.Mudah,
      percentage: total > 0 ? Math.round((diffCountMap.Mudah / total) * 100) : 0,
      color: 'emerald',
    },
    {
      difficulty: 'Sedang' as const,
      count: diffCountMap.Sedang,
      percentage: total > 0 ? Math.round((diffCountMap.Sedang / total) * 100) : 0,
      color: 'blue',
    },
    {
      difficulty: 'Sukar' as const,
      count: diffCountMap.Sukar,
      percentage: total > 0 ? Math.round((diffCountMap.Sukar / total) * 100) : 0,
      color: 'rose',
    },
  ];

  const typeDistribution = [
    {
      type: 'pg',
      label: 'Pilihan Ganda (PG)',
      count: typeCountMap.pg,
      percentage: total > 0 ? Math.round((typeCountMap.pg / total) * 100) : 0,
    },
    {
      type: 'pgk',
      label: 'Pilihan Ganda Kompleks (PGK)',
      count: typeCountMap.pgk,
      percentage: total > 0 ? Math.round((typeCountMap.pgk / total) * 100) : 0,
    },
    {
      type: 'pgk_kategori',
      label: 'Benar / Salah (PGK Kategori)',
      count: typeCountMap.pgk_kategori,
      percentage: total > 0 ? Math.round((typeCountMap.pgk_kategori / total) * 100) : 0,
    },
  ];

  return {
    total,
    blueprints,
    elemenDistribution,
    levelDistribution,
    difficultyDistribution,
    typeDistribution,
  };
}
