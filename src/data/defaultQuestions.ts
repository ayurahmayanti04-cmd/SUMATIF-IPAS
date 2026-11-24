import { Question } from '../types';
import petaGeografisImg from '../assets/images/peta_geografis_indonesia_1795488505679.jpg';
import ekosistemSawahImg from '../assets/images/ekosistem_rantai_makanan_1795488506691.jpg';
import siklusAirImg from '../assets/images/siklus_air_alam_1795488507472.jpg';
import lapisanBumiImg from '../assets/images/struktur_lapisan_bumi_1795488507984.jpg';
import budayaEkonomiImg from '../assets/images/budaya_ekonomi_indonesia_1795488508833.jpg';

export const INITIAL_QUESTIONS: Question[] = [
  // ==========================================
  // PILIHAN GANDA (18 SOAL: ID 1 - 18)
  // ==========================================
  {
    id: 1,
    type: 'pg',
    topic: 'Letak Geografis Indonesia',
    elemen: 'Letak Geografis Indonesia',
    difficulty: 'Mudah',
    imageUrl: petaGeografisImg,
    imageCaption: 'Peta posisi silang wilayah kepulauan Indonesia di antara dua benua dan dua samudra.',
    text: 'Perhatikan peta wilayah Indonesia di atas! Berdasarkan letak geografisnya, kepulauan Indonesia berada pada posisi silang yang diapit oleh dua benua dan dua samudra, yaitu...',
    options: [
      { id: 'A', text: 'Benua Asia dan Benua Australia, serta Samudra Hindia dan Samudra Pasifik' },
      { id: 'B', text: 'Benua Asia dan Benua Afrika, serta Samudra Atlantik dan Samudra Pasifik' },
      { id: 'C', text: 'Benua Australia dan Benua Amerika, serta Samudra Hindia dan Samudra Arktik' },
      { id: 'D', text: 'Benua Eropa dan Benua Asia, serta Samudra Atlantik dan Samudra Hindia' },
    ],
    correctAnswer: 'A',
    explanation:
      'Secara geografis, Indonesia berada pada posisi silang di antara dua benua (Benua Asia di sebelah barat laut dan Benua Australia di sebelah tenggara) serta di antara dua samudra (Samudra Hindia di barat/selatan dan Samudra Pasifik di timur laut).',
  },
  {
    id: 2,
    type: 'pg',
    topic: 'Letak Geografis Indonesia',
    elemen: 'Letak Geografis Indonesia',
    difficulty: 'Mudah',
    text: 'Pada bagian utara, wilayah daratan Indonesia di Pulau Kalimantan berbatasan langsung dengan negara tetangga, yaitu...',
    options: [
      { id: 'A', text: 'Papua Nugini dan Australia' },
      { id: 'B', text: 'Malaysia dan Brunei Darussalam' },
      { id: 'C', text: 'Timor Leste dan Filipina' },
      { id: 'D', text: 'Singapura dan Vietnam' },
    ],
    correctAnswer: 'B',
    explanation:
      'Di Pulau Kalimantan bagian utara, wilayah daratan Indonesia berbatasan langsung dengan Malaysia (Sabah dan Sarawak). Brunei Darussalam juga berada di pulau yang sama di sebelah utara.',
  },
  {
    id: 3,
    type: 'pg',
    topic: 'Letak Geografis Indonesia',
    elemen: 'Letak Geografis Indonesia',
    difficulty: 'Sedang',
    text: 'Indonesia dikenal sebagai negara maritim sekaligus negara agraris. Ciri utama Indonesia disebut sebagai negara maritim adalah...',
    options: [
      { id: 'A', text: 'Sebagian besar penduduknya bekerja di bidang perkebunan dataran tinggi' },
      { id: 'B', text: 'Wilayahnya berupa daratan luas yang dikelilingi pegunungan salju' },
      { id: 'C', text: 'Sebagian besar wilayahnya berupa perairan laut yang menghubungkan ribuan pulau' },
      { id: 'D', text: 'Memiliki empat musim yang berganti setiap tiga bulan sekali' },
    ],
    correctAnswer: 'C',
    explanation:
      'Negara maritim adalah negara yang sebagian besar wilayahnya merupakan perairan laut dan berada di kawasan kepulauan sehingga sektor kelautan dan pelayaran sangat penting.',
  },
  {
    id: 4,
    type: 'pg',
    topic: 'Pengaruh Letak Geografis Indonesia',
    elemen: 'Pengaruh Letak Geografis',
    difficulty: 'Mudah',
    text: 'Indonesia dilalui garis khatulistiwa (0°) dan diapit oleh dua samudra luas. Hal ini menyebabkan Indonesia memiliki iklim tropis dengan ciri utama berupa...',
    options: [
      { id: 'A', text: 'Memiliki empat musim yaitu semi, panas, gugur, dan dingin' },
      { id: 'B', text: 'Sinar matahari bersinar sepanjang tahun dengan dua musim utama (hujan dan kemarau)' },
      { id: 'C', text: 'Curah hujan sangat rendah dan hampir seluruh wilayah berupa gurun pasir' },
      { id: 'D', text: 'Suhu udara selalu berada di bawah 0°C sepanjang malam' },
    ],
    correctAnswer: 'B',
    explanation:
      'Letak di sekitar garis khatulistiwa membuat Indonesia beriklim tropis: mendapat penyinaran matahari sepanjang tahun, suhu udara hangat, kelembapan tinggi, serta mengalami dua musim utama (musim hujan dan musim kemarau).',
  },
  {
    id: 5,
    type: 'pg',
    topic: 'Pengaruh Letak Geografis Indonesia',
    elemen: 'Pengaruh Letak Geografis',
    difficulty: 'Sedang',
    text: 'Setiap sekitar bulan Oktober hingga April, angin bertiup dari Benua Asia menuju Benua Australia melewati Samudra Hindia dan membawa banyak uap air. Fenomena angin ini menyebabkan sebagian besar wilayah Indonesia mengalami...',
    options: [
      { id: 'A', text: 'Angin Muson Timur yang mengakibatkan musim kemarau panjang' },
      { id: 'B', text: 'Angin Muson Barat yang mengakibatkan musim penghujan' },
      { id: 'C', text: 'Angin darat yang hanya terjadi pada siang hari di pegunungan' },
      { id: 'D', text: 'Musim gugur dan penurunan suhu ekstrem di seluruh kepulauan' },
    ],
    correctAnswer: 'B',
    explanation:
      'Angin Muson Barat bertiup dari Benua Asia (tekanan tinggi) ke Benua Australia (tekanan rendah) sambil membawa banyak uap air dari lautan luas, sehingga memicu musim hujan di Indonesia (umumnya Oktober–April).',
  },
  {
    id: 6,
    type: 'pg',
    topic: 'Pengaruh Letak Geografis Indonesia',
    elemen: 'Pengaruh Letak Geografis',
    difficulty: 'Sedang',
    text: 'Wilayah Indonesia terbentang luas dari barat ke timur sehingga dibagi menjadi tiga zona waktu: WIB, WITA, dan WIT. Provinsi Bali (termasuk Kabupaten Jembrana) termasuk dalam zona waktu...',
    options: [
      { id: 'A', text: 'WIB (Waktu Indonesia Barat), sama dengan Jakarta dan Sumatra' },
      { id: 'B', text: 'WITA (Waktu Indonesia Tengah), lebih cepat 1 jam dari WIB' },
      { id: 'C', text: 'WIT (Waktu Indonesia Timur), lebih cepat 2 jam dari WIB' },
      { id: 'D', text: 'WITA (Waktu Indonesia Tengah), lebih lambat 1 jam dari WIB' },
    ],
    correctAnswer: 'B',
    explanation:
      'Provinsi Bali, Nusa Tenggara, Kalimantan Selatan/Timur/Utara, dan Sulawesi berada pada zona Waktu Indonesia Tengah (WITA / UTC+8), yang lebih cepat 1 jam dibanding WIB (UTC+7).',
  },
  {
    id: 7,
    type: 'pg',
    topic: 'Rantai Makanan pada Ekosistem',
    elemen: 'Ekosistem',
    difficulty: 'Mudah',
    imageUrl: ekosistemSawahImg,
    imageCaption: 'Ilustrasi rantai makanan pada ekosistem sawah: padi, belalang, katak, ular, dan elang.',
    text: 'Perhatikan gambar rantai makanan di ekosistem sawah di atas! Makhluk hidup yang berperan sebagai produsen dan konsumen tingkat II secara berturut-turut ditunjukkan oleh...',
    options: [
      { id: 'A', text: 'Padi dan katak' },
      { id: 'B', text: 'Belalang dan ular' },
      { id: 'C', text: 'Padi dan belalang' },
      { id: 'D', text: 'Katak dan elang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Pada rantai makanan sawah: Padi berperan sebagai Produsen (membuat makanan lewat fotosintesis), Belalang = Konsumen I (herbivor), Katak = Konsumen II, Ular = Konsumen III, dan Elang = Konsumen puncak.',
  },
  {
    id: 8,
    type: 'pg',
    topic: 'Hubungan Antar Makhluk Hidup (Simbiosis)',
    elemen: 'Ekosistem',
    difficulty: 'Mudah',
    text: 'Bunga anggrek sering menempel pada batang pohon mangga agar mendapat cahaya matahari yang cukup, sedangkan pohon mangga tidak merasa dirugikan maupun diuntungkan. Hubungan antara anggrek dan pohon mangga disebut...',
    options: [
      { id: 'A', text: 'Simbiosis mutualisme' },
      { id: 'B', text: 'Simbiosis parasitisme' },
      { id: 'C', text: 'Simbiosis komensalisme' },
      { id: 'D', text: 'Kompetisi antarspesies' },
    ],
    correctAnswer: 'C',
    explanation:
      'Simbiosis komensalisme adalah interaksi di mana satu pihak mendapat keuntungan (anggrek mendapat tempat tumbuh dan cahaya) sementara pihak lainnya (pohon mangga) tidak diuntungkan dan tidak dirugikan.',
  },
  {
    id: 9,
    type: 'pg',
    topic: 'Peran Komponen Ekosistem',
    elemen: 'Ekosistem',
    difficulty: 'Sedang',
    text: 'Pada sebuah ekosistem, daun-daun kering dan bangkai hewan yang telah mati akan diuraikan oleh bakteri serta jamur menjadi unsur hara yang menyuburkan tanah. Peran bakteri dan jamur tersebut adalah sebagai...',
    options: [
      { id: 'A', text: 'Produsen' },
      { id: 'B', text: 'Konsumen puncak' },
      { id: 'C', text: 'Dekomposer (pengurai)' },
      { id: 'D', text: 'Komponen abiotik' },
    ],
    correctAnswer: 'C',
    explanation:
      'Bakteri dan jamur berperan sebagai dekomposer (pengurai) yang menguraikan sisa-sisa organisme mati menjadi zat hara anorganik yang kembali diserap oleh tumbuhan produsen.',
  },
  {
    id: 10,
    type: 'pg',
    topic: 'Keseimbangan Ekosistem',
    elemen: 'Ekosistem',
    difficulty: 'Sukar',
    imageUrl: ekosistemSawahImg,
    imageCaption: 'Aliran energi dalam ekosistem sawah yang saling bergantung satu sama lain.',
    text: 'Perhatikan kembali gambar ekosistem sawah di atas! Apabila terjadi perburuan ular sawah secara besar-besaran sehingga populasi ular menurun drastis, dampak langsung yang paling mungkin terjadi pada ekosistem tersebut adalah...',
    options: [
      { id: 'A', text: 'Populasi katak meningkat pesat dan populasi elang mengalami penurunan karena kekurangan mangsa' },
      { id: 'B', text: 'Populasi belalang meningkat pesat dan tanaman padi tumbuh semakin subur' },
      { id: 'C', text: 'Populasi elang meningkat pesat karena tidak ada pesaingnya lagi' },
      { id: 'D', text: 'Populasi katak langsung punah dan belalang ikut menghilang' },
    ],
    correctAnswer: 'A',
    explanation:
      'Jika ular berkurang drastis: pemangsa katak berkurang sehingga populasi katak melonjak. Di sisi lain, elang kehilangan sumber makanannya (ular), sehingga populasi elang dapat menurun.',
  },
  {
    id: 11,
    type: 'pg',
    topic: 'Struktur Lapisan Bumi',
    elemen: 'Bumi & Alam Semesta',
    difficulty: 'Mudah',
    imageUrl: lapisanBumiImg,
    imageCaption: 'Penampang melintang struktur lapisan penyusun planet Bumi dari luar hingga inti dalam.',
    text: 'Perhatikan gambar struktur lapisan Bumi di atas! Urutan lapisan penyusun bagian dalam Bumi dari lapisan paling luar menuju bagian paling tengah adalah...',
    options: [
      { id: 'A', text: 'Mantel bumi → Kerak bumi → Inti dalam → Inti luar' },
      { id: 'B', text: 'Kerak bumi (litosfer) → Mantel bumi → Inti luar → Inti dalam' },
      { id: 'C', text: 'Inti dalam → Inti luar → Mantel bumi → Kerak bumi' },
      { id: 'D', text: 'Kerak bumi → Inti luar → Mantel bumi → Atmosfer' },
    ],
    correctAnswer: 'B',
    explanation:
      'Struktur bagian dalam Bumi dari permukaan paling luar ke pusat terdalam tersusun atas: Kerak bumi (litosfer), Mantel bumi (selubung), Inti luar (cair), dan Inti dalam (padat sangat panas).',
  },
  {
    id: 12,
    type: 'pg',
    topic: 'Siklus Air',
    elemen: 'Bumi & Alam Semesta',
    difficulty: 'Mudah',
    imageUrl: siklusAirImg,
    imageCaption: 'Diagram proses siklus air di alam mulai dari penguapan hingga meresap ke tanah.',
    text: 'Perhatikan gambar siklus air di atas! Panas matahari menyebabkan air laut menguap naik ke atmosfer (ditunjukkan tanda panah ke atas dari laut), kemudian uap air tersebut mendingin dan berubah menjadi awan. Kedua proses tersebut secara berurutan disebut...',
    options: [
      { id: 'A', text: 'Presipitasi dan infiltrasi' },
      { id: 'B', text: 'Kondensasi dan presipitasi' },
      { id: 'C', text: 'Evaporasi dan kondensasi' },
      { id: 'D', text: 'Infiltrasi dan evaporasi' },
    ],
    correctAnswer: 'C',
    explanation:
      'Penguapan air dari laut/danau/sungai akibat panas matahari disebut Evaporasi. Perubahan uap air yang mendingin di udara menjadi titik-titik air pembentuk awan disebut Kondensasi.',
  },
  {
    id: 13,
    type: 'pg',
    topic: 'Siklus Air & Kelestarian Lingkungan',
    elemen: 'Bumi & Alam Semesta',
    difficulty: 'Sedang',
    text: 'Banyaknya pembangunan jalan aspal dan gedung beton tanpa ruang terbuka hijau di perkotaan dapat mengganggu salah satu tahapan siklus air, yaitu berkurangnya air hujan yang meresap ke dalam tanah. Tahapan siklus air yang terganggu tersebut dinamakan...',
    options: [
      { id: 'A', text: 'Evaporasi' },
      { id: 'B', text: 'Transpirasi' },
      { id: 'C', text: 'Kondensasi' },
      { id: 'D', text: 'Infiltrasi' },
    ],
    correctAnswer: 'D',
    explanation:
      'Infiltrasi adalah proses meresapnya air hujan ke dalam pori-pori tanah untuk menjadi cadangan air tanah. Betonisasi dan aspal menutup pori tanah sehingga infiltrasi terhambat dan meningkatkan risiko banjir.',
  },
  {
    id: 14,
    type: 'pg',
    topic: 'Perubahan Permukaan Bumi',
    elemen: 'Bumi & Alam Semesta',
    difficulty: 'Sedang',
    text: 'Wilayah pantai yang terus-menerus dihantam gelombang laut kuat tanpa sabuk hutan mangrove lama-kelamaan mengalami pengikisan daratan pesisir. Peristiwa perubahan permukaan bumi tersebut disebut...',
    options: [
      { id: 'A', text: 'Abrasi' },
      { id: 'B', text: 'Vulkanisme' },
      { id: 'C', text: 'Reboisasi' },
      { id: 'D', text: 'Sedimentasi sungai' },
    ],
    correctAnswer: 'A',
    explanation:
      'Abrasi adalah proses pengikisan daratan pantai akibat hantaman gelombang dan arus laut. Penanaman pohon bakau (mangrove) di pesisir dapat membantu mencegah abrasi.',
  },
  {
    id: 15,
    type: 'pg',
    topic: 'Pergerakan Lempeng Bumi',
    elemen: 'Bumi & Alam Semesta',
    difficulty: 'Sukar',
    text: 'Indonesia sering mengalami gempa bumi dan memiliki banyak gunung berapi aktif karena berada pada pertemuan lempeng tektonik besar dunia. Jenis pergerakan dua lempeng bumi yang saling bertumbukan atau menujam satu sama lain disebut gerak...',
    options: [
      { id: 'A', text: 'Divergen' },
      { id: 'B', text: 'Konvergen' },
      { id: 'C', text: 'Transform' },
      { id: 'D', text: 'Rotasi' },
    ],
    correctAnswer: 'B',
    explanation:
      'Gerak konvergen adalah pergerakan dua lempeng tektonik yang saling mendekat dan bertumbukan (subduksi), yang sering memicu gempa bumi besar, tsunami, serta terbentuknya deretan gunung berapi.',
  },
  {
    id: 16,
    type: 'pg',
    topic: 'Warisan Budaya Nasional',
    elemen: 'Budaya & Aktivitas Ekonomi',
    difficulty: 'Mudah',
    imageUrl: budayaEkonomiImg,
    imageCaption: 'Gambaran warisan budaya pertanian Subak, pelabuhan nelayan tradisional, dan perajin batik.',
    text: 'Perhatikan gambar di atas! Sistem pengairan sawah terasering tradisional yang diwariskan turun-temurun di Bali dan telah diakui UNESCO sebagai warisan budaya dunia disebut...',
    options: [
      { id: 'A', text: 'Ngaben' },
      { id: 'B', text: 'Subak' },
      { id: 'C', text: 'Sasi' },
      { id: 'D', text: 'Pela Gandong' },
    ],
    correctAnswer: 'B',
    explanation:
      'Subak adalah organisasi kemasyarakatan tradisional di Bali yang mengatur sistem pengairan sawah terasering secara adil dan harmonis berdasarkan filosofi Tri Hita Karana, dan telah diakui UNESCO sebagai Warisan Budaya Dunia.',
  },
  {
    id: 17,
    type: 'pg',
    topic: 'Aktivitas Ekonomi Sekitar Tempat Tinggal',
    elemen: 'Budaya & Aktivitas Ekonomi',
    difficulty: 'Mudah',
    imageUrl: budayaEkonomiImg,
    imageCaption: 'Ragam aktivitas ekonomi masyarakat di wilayah agraris, pesisir pantai, dan kerajinan lokal.',
    text: 'Berdasarkan gambar aktivitas ekonomi di atas, jenis mata pencaharian utama masyarakat yang tinggal di daerah pesisir pantai seperti kawasan pesisir Kabupaten Jembrana umumnya bergerak di bidang...',
    options: [
      { id: 'A', text: 'Pertambangan batu bara dan perkebunan teh' },
      { id: 'B', text: 'Perikanan tangkap, budidaya laut, dan pengolahan hasil ikan' },
      { id: 'C', text: 'Perkebunan apel dan sayur-sayuran pegunungan' },
      { id: 'D', text: 'Industri alat berat dan penebangan hutan kayu pinus' },
    ],
    correctAnswer: 'B',
    explanation:
      'Aktivitas ekonomi masyarakat menyesuaikan kondisi geografis tempat tinggalnya. Di daerah pesisir pantai, aktivitas ekonomi utama meliputi nelayan/perikanan tangkap, budidaya ikan atau rumput laut, pembuatan garam, serta pengolahan hasil laut.',
  },
  {
    id: 18,
    type: 'pg',
    topic: 'Aktivitas Ekonomi Masyarakat',
    elemen: 'Budaya & Aktivitas Ekonomi',
    difficulty: 'Sedang',
    text: 'Seorang perajin kain tenun atau batik di desa menjual hasil karyanya langsung kepada wisatawan maupun menitipkannya di toko oleh-oleh. Kegiatan perajin dalam menghasilkan barang kerajinan bernilai guna tersebut termasuk dalam kegiatan ekonomi...',
    options: [
      { id: 'A', text: 'Konsumsi' },
      { id: 'B', text: 'Distribusi' },
      { id: 'C', text: 'Produksi' },
      { id: 'D', text: 'Impor' },
    ],
    correctAnswer: 'C',
    explanation:
      'Produksi adalah kegiatan menghasilkan atau menambah nilai guna suatu barang/jasa. Kegiatan menyalurkan barang ke konsumen disebut distribusi, sedangkan memakai barang/jasa disebut konsumsi.',
  },

  // ==========================================
  // PILIHAN GANDA KOMPLEKS / PGK (3 SOAL: ID 19 - 21)
  // Ketentuan: Lebih dari 1 jawaban benar, setiap soal memiliki 3 pilihan jawaban
  // ==========================================
  {
    id: 19,
    type: 'pgk',
    topic: 'Letak & Pengaruh Geografis Indonesia',
    elemen: 'Letak Geografis Indonesia',
    difficulty: 'Sedang',
    imageUrl: petaGeografisImg,
    imageCaption: 'Peta kepulauan Indonesia beserta garis khatulistiwa (0°) dan batas samudra.',
    text: 'Amati peta kepulauan Indonesia di atas dengan saksama! Manakah pernyataan-pernyataan berikut yang BENAR mengenai letak geografis dan kondisi wilayah Indonesia? (Pilih semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Garis khatulistiwa (0°) melintasi wilayah Indonesia seperti Sumatra, Kalimantan, Sulawesi, dan Maluku Utara' },
      { id: 'B', text: 'Posisi silang di antara dua benua dan dua samudra menjadikan Indonesia strategis sebagai jalur pelayaran dan perdagangan dunia' },
      { id: 'C', text: 'Seluruh pulau di Indonesia hanya memiliki satu zona waktu yang sama karena berada di satu garis bujur' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      'Berdasarkan peta:\n- Garis khatulistiwa (0°) tepat membelah beberapa pulau utama Indonesia (A Benar).\n- Posisi silang strategis di jalur pelayaran Samudra Hindia–Pasifik dan Asia–Australia (B Benar).\n- Indonesia membentang luas dari barat ke timur sehingga terbagi menjadi 3 zona waktu: WIB, WITA, dan WIT (C Salah).',
  },
  {
    id: 20,
    type: 'pgk',
    topic: 'Hubungan Antar Makhluk Hidup pada Ekosistem',
    elemen: 'Ekosistem',
    difficulty: 'Sedang',
    text: 'Di halaman sekolah dan kebun sekitar rumah, sering dijumpai berbagai interaksi antarmakhluk hidup. Manakah contoh pasangan makhluk hidup berikut yang menunjukkan hubungan SIMBIOSIS MUTUALISME (saling menguntungkan)? (Pilih semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Kupu-kupu mengisap nektar bunga sekaligus membantu proses penyerbukan bunga' },
      { id: 'B', text: 'Burung jalak memakan kutu yang ada di punggung kerbau sehingga tubuh kerbau bebas dari kutu' },
      { id: 'C', text: 'Tumbuhan benalu menempel pada batang pohon mangga dan menyerap sari makanan dari pohon mangga' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '- Kupu-kupu & bunga: kupu-kupu mendapat makanan (nektar), bunga terbantu penyerbukannya → Mutualisme (A Benar).\n- Burung jalak & kerbau: jalak mendapat makanan (kutu), kerbau bersih dari gatal kutu → Mutualisme (B Benar).\n- Benalu & pohon mangga: benalu untung, pohon mangga rugi karena sari makanannya diserap → Parasitisme (C Salah).',
  },
  {
    id: 21,
    type: 'pgk',
    topic: 'Struktur Lapisan Bumi & Litosfer-Hidrosfer-Atmosfer',
    elemen: 'Bumi & Alam Semesta',
    difficulty: 'Sukar',
    imageUrl: lapisanBumiImg,
    imageCaption: 'Ilustrasi lapisan penyusun Bumi termasuk kerak bumi, mantel, inti bumi, perairan, dan atmosfer.',
    text: 'Perhatikan gambar struktur Bumi di atas! Pilihlah SEMUA pernyataan yang BENAR mengenai lapisan penyusun Bumi (litosfer, hidrosfer, atmosfer, dan struktur dalam Bumi)! (Pilih semua jawaban yang benar)',
    options: [
      { id: 'A', text: 'Litosfer adalah lapisan batuan atau kerak bumi terluar yang tersusun atas lempeng-lempeng tektonik yang dapat bergerak' },
      { id: 'B', text: 'Hidrosfer merupakan seluruh lapisan perairan di permukaan Bumi meliputi samudra, laut, sungai, danau, dan air tanah' },
      { id: 'C', text: 'Atmosfer adalah lapisan batuan cair pijar yang berada di pusat inti dalam Bumi' },
    ],
    correctAnswer: ['A', 'B'],
    explanation:
      '- Litosfer adalah lapisan kerak/batuan terluar tempat makhluk hidup berpijak dan tersusun atas lempeng tektonik (A Benar).\n- Hidrosfer adalah seluruh lapisan air yang menyelimuti Bumi (B Benar).\n- Atmosfer adalah lapisan selimut gas/udara yang mengelilingi Bumi, bukan batuan cair di inti dalam (C Salah).',
  },

  // ==========================================
  // PILIHAN GANDA KOMPLEKS KATEGORI (9 SOAL: ID 22 - 30)
  // Ketentuan: Setiap soal memiliki 3 deskripsi/pernyataan Benar/Salah
  // ==========================================
  {
    id: 22,
    type: 'pgk_kategori',
    topic: 'Letak Geografis Indonesia',
    elemen: 'Letak Geografis Indonesia',
    difficulty: 'Mudah',
    text: 'Indonesia merupakan negara kepulauan terbesar di dunia yang membentang dari Sabang sampai Merauke. Tentukan kebenaran dari masing-masing pernyataan berikut mengenai letak wilayah Indonesia (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Di sebelah selatan, wilayah perairan Indonesia berbatasan dengan Samudra Hindia dan Benua Australia.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Di sebelah timur, wilayah daratan Pulau Papua berbatasan langsung dengan negara Papua Nugini.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Pulau Bali terletak di sebelah barat Pulau Sumatra dan berbatasan darat langsung dengan Thailand.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Selatan Indonesia berbatasan dengan Samudra Hindia, Laut Timor, Laut Arafuru, dan Benua Australia (BENAR).\n2. Timur Pulau Papua berbatasan darat dengan Papua Nugini (BENAR).\n3. Pulau Bali terletak di sebelah timur Pulau Jawa, bukan di barat Sumatra, dan Indonesia tidak berbatasan darat dengan Thailand (SALAH).',
  },
  {
    id: 23,
    type: 'pgk_kategori',
    topic: 'Letak Geografis & Karakteristik Wilayah',
    elemen: 'Letak Geografis Indonesia',
    difficulty: 'Sedang',
    text: 'Letak geografis Indonesia yang strategis memberikan banyak kekhasan bagi kondisi alam maupun kehidupan berbangsa. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Wilayah Indonesia dilalui oleh dua jalur pegunungan muda dunia (Sirkum Pasifik dan Sirkum Mediterania) sehingga tanahnya subur namun rawan gempa dan gunung meletus.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Selat Malaka yang berada di antara Pulau Sumatra dan Semenanjung Malaya merupakan salah satu jalur pelayaran internasional tersibuk di dunia.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Karena Indonesia adalah negara kepulauan, maka seluruh wilayah Indonesia tidak memiliki gunung berapi aktif.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Indonesia berada di pertemuan jalur pegunungan aktif dunia (Ring of Fire) sehingga tanah vulkanik subur namun rawan gempa/letusan (BENAR).\n2. Selat Malaka menghubungkan Samudra Hindia dan Laut Tiongkok Selatan/Pasifik sehingga sangat ramai dilalui kapal dagang dunia (BENAR).\n3. Indonesia justru memiliki lebih dari 120 gunung berapi aktif (SALAH).',
  },
  {
    id: 24,
    type: 'pgk_kategori',
    topic: 'Pengaruh Letak Geografis Indonesia',
    elemen: 'Pengaruh Letak Geografis',
    difficulty: 'Sedang',
    text: 'Posisi silang Indonesia yang berada di persimpangan jalur perdagangan laut dunia membawa pengaruh besar bagi masyarakat Indonesia dari masa ke masa. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Masuknya berbagai pengaruh budaya asing membuat Indonesia kaya akan keragaman bahasa, kuliner, kesenian, dan tradisi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Banyaknya pelabuhan laut mempermudah kegiatan ekspor dan impor barang antarnegara.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Dampak negatif posisi silang seperti masuknya budaya asing yang tidak sesuai jati diri bangsa tidak perlu disaring oleh masyarakat.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Interaksi perdagangan sejak zaman dahulu memperkaya khazanah budaya Nusantara (BENAR).\n2. Posisi di jalur laut internasional mendukung aktivitas ekspor-impor melalui pelabuhan strategis (BENAR).\n3. Budaya asing yang masuk harus disaring berdasarkan nilai Pancasila dan norma budaya bangsa agar jati diri bangsa tetap terjaga (SALAH).',
  },
  {
    id: 25,
    type: 'pgk_kategori',
    topic: 'Pengaruh Iklim & Pembagian Waktu Indonesia',
    elemen: 'Pengaruh Letak Geografis',
    difficulty: 'Sedang',
    text: 'Pengaruh letak geografis dan astronomis Indonesia juga terlihat pada pergantian musim akibat angin muson serta perbedaan waktu antardaerah. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Angin Muson Timur bertiup dari Benua Australia yang kering menuju Benua Asia sehingga umumnya membawa musim kemarau di Indonesia.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Apabila di Jakarta (WIB) menunjukkan pukul 08.00 pagi, maka pada saat yang bersamaan di Bali (WITA) menunjukkan pukul 09.00 pagi.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Wilayah Papua yang berada di bagian paling timur Indonesia menggunakan zona Waktu Indonesia Barat (WIB).',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Angin Muson Timur bertiup dari gurun kering Australia ke Asia (sekitar April–Oktober) dan membawa musim kemarau (BENAR).\n2. WITA lebih cepat 1 jam dari WIB, jadi pukul 08.00 WIB = pukul 09.00 WITA (BENAR).\n3. Papua menggunakan Waktu Indonesia Timur (WIT), bukan WIB (SALAH).',
  },
  {
    id: 26,
    type: 'pgk_kategori',
    topic: 'Hubungan Antar Makhluk Hidup dalam Ekosistem',
    elemen: 'Ekosistem',
    difficulty: 'Sedang',
    text: 'Di dalam suatu ekosistem hutan maupun kebun, tumbuhan, hewan, dan mikroorganisme saling berinteraksi membentuk jaring-jaring kehidupan. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Tumbuhan hijau mampu membuat makanannya sendiri melalui fotosintesis dengan bantuan cahaya matahari sehingga disebut produsen.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hubungan antara nyamuk yang mengisap darah manusia dan menyebabkan gatal atau penyakit disebut simbiosis parasitisme.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Penggunaan pestisida kimia secara berlebihan di sawah tidak memengaruhi kelestarian makhluk hidup lain di sekitar sawah.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Tumbuhan hijau sebagai produsen berfotosintesis menghasilkan makanan dan oksigen (BENAR).\n2. Nyamuk untung mendapat darah, manusia dirugikan → simbiosis parasitisme (BENAR).\n3. Pestisida berlebihan justru mencemari air/tanah dan dapat membunuh katak, ikan, cacing tanah, serta predator alami hama (SALAH).',
  },
  {
    id: 27,
    type: 'pgk_kategori',
    topic: 'Siklus Air & Ketersediaan Air Bersih',
    elemen: 'Bumi & Alam Semesta',
    difficulty: 'Sedang',
    imageUrl: siklusAirImg,
    imageCaption: 'Siklus hidrologi alami yang menjaga ketersediaan air tawar di daratan dan lautan.',
    text: 'Amati diagram siklus air di atas dengan teliti! Siklus air menjaga ketersediaan air bersih di Bumi agar tidak habis. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Penguapan air yang berasal dari jaringan daun tumbuhan hijau ke udara disebut proses transpirasi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Hujan yang jatuh dari awan ke permukaan bumi dalam bentuk titik-titik air disebut tahap presipitasi.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Penebangan hutan secara liar di daerah pegunungan dapat meningkatkan daya serap air tanah dan mencegah tanah longsor.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Penguapan air dari tumbuhan disebut transpirasi (BENAR).\n2. Turunnya titik-titik air hujan/salju dari awan ke bumi disebut presipitasi (BENAR).\n3. Penebangan hutan liar justru mengurangi daya serap akar pohon, mempercepat aliran permukaan, dan memicu banjir serta tanah longsor (SALAH).',
  },
  {
    id: 28,
    type: 'pgk_kategori',
    topic: 'Perubahan Permukaan Bumi & Pergerakan Lempeng',
    elemen: 'Bumi & Alam Semesta',
    difficulty: 'Sukar',
    text: 'Permukaan Bumi tidak selalu datar dan tetap, melainkan terus mengalami perubahan baik secara perlahan maupun tiba-tiba akibat tenaga dari dalam dan luar Bumi. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Pergerakan lempeng bumi terjadi karena kerak bumi terapung di atas lapisan mantel bumi yang panas dan bersifat plastis (arus konveksi).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Gempa tektonik yang terjadi di dasar laut dengan kekuatan besar dan gerakan vertikal lempeng berpotensi memicu gelombang tsunami.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Semua perubahan permukaan bumi seperti terbentuknya lembah akibat erosi sungai terjadi hanya dalam waktu satu jam.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Arus konveksi magma di mantel menggerakkan lempeng-lempeng litosfer secara terus-menerus (BENAR).\n2. Gempa tektonik dangkal berkekuatan besar di dasar laut dapat menggeser kolom air laut dan memicu tsunami (BENAR).\n3. Proses seperti pelapukan batuan dan erosi lembah sungai berlangsung sangat lambat hingga ribuan sampai jutaan tahun (SALAH).',
  },
  {
    id: 29,
    type: 'pgk_kategori',
    topic: 'Warisan Budaya Nasional Indonesia',
    elemen: 'Budaya & Aktivitas Ekonomi',
    difficulty: 'Mudah',
    text: 'Indonesia memiliki kekayaan warisan budaya nasional yang terbagi menjadi warisan budaya benda (berwujud fisik) dan warisan budaya tak benda. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Candi Borobudur, Candi Prambanan, dan keris tradisional merupakan contoh warisan budaya benda yang dapat dilihat dan disentuh wujud fisiknya.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Tari Kecak, Tari Pendet, pertunjukan Wayang Kulit, dan musik Gamelan merupakan contoh warisan budaya tak benda.',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Melestarikan budaya daerah hanya menjadi tugas orang tua, sedangkan generasi muda tidak perlu mengenal budaya daerahnya sendiri.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Bangunan cagar budaya dan artefak fisik seperti candi dan keris adalah warisan budaya benda (BENAR).\n2. Seni tari, seni pertunjukan, tradisi lisan, dan musik tradisional adalah warisan budaya tak benda (BENAR).\n3. Generasi muda dan pelajar berperan sangat penting dalam mempelajari, mencintai, dan melestarikan warisan budaya agar tidak punah (SALAH).',
  },
  {
    id: 30,
    type: 'pgk_kategori',
    topic: 'Warisan Budaya & Aktivitas Ekonomi Lokal',
    elemen: 'Budaya & Aktivitas Ekonomi',
    difficulty: 'Sedang',
    imageUrl: budayaEkonomiImg,
    imageCaption: 'Keterpaduan warisan budaya lokal dengan mata pencaharian pertanian, nelayan, dan perajin.',
    text: 'Perhatikan gambar warisan budaya dan aktivitas ekonomi di atas! Kearifan lokal dan aktivitas ekonomi masyarakat saling mendukung kesejahteraan daerah. Tentukan kebenaran dari masing-masing pernyataan berikut (Pilih Benar atau Salah):',
    statements: [
      {
        id: 's1',
        text: 'Kegiatan membatik atau menenun kain tradisional tidak hanya melestarikan warisan budaya, tetapi juga dapat menjadi usaha ekonomi kreatif (UMKM) yang menambah penghasilan warga.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Sawah terasering yang tertata rapi dengan sistem Subak selain menghasilkan beras juga sering menjadi daya tarik wisata budaya (agrowisata).',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Membeli dan memakai produk kerajinan lokal buatan perajin di sekitar tempat tinggal akan merugikan perekonomian warga sekitar.',
        correctAnswer: false,
      },
    ],
    explanation:
      '1. Kerajinan batik/tenun merupakan warisan budaya sekaligus penggerak ekonomi kreatif masyarakat (BENAR).\n2. Sawah terasering dan Subak mendukung produksi pangan dan sektor pariwisata berkelanjutan (BENAR).\n3. Membeli dan mencintai produk lokal justru memperkuat ekonomi warga serta membuka lapangan kerja di sekitar tempat tinggal (SALAH).',
  },
];
