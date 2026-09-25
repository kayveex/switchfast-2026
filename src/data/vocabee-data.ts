export interface Battle {
  enemy: string;
  word: string;
  options: string[];
  correct: number;
}

export const battles: Battle[] = [
  {
    enemy: 'VILLAIN',
    word: 'villain',
    options: ['Hero', 'Sidekick', 'Villager'],
    correct: 0,
  },
  {
    enemy: 'COWARD',
    word: 'coward',
    options: ['Timid', 'Brave', 'Nervous'],
    correct: 1,
  },
  {
    enemy: 'DARKNESS',
    word: 'darkness',
    options: ['Shadow', 'Light', 'Night'],
    correct: 1,
  },
  {
    enemy: 'ENEMY',
    word: 'enemy',
    options: ['Rival', 'Foe', 'Friend'],
    correct: 2,
  },
];

export interface VocabWord {
  word: string;
  type: string;
  meaning: string;
  example: string;
}

export const words: VocabWord[] = [
  { word: 'good', type: 'kata sifat', meaning: 'baik', example: 'She is a good friend.' },
  { word: 'bad', type: 'kata sifat', meaning: 'buruk', example: 'The weather is bad today.' },
  { word: 'happy', type: 'kata sifat', meaning: 'senang', example: 'I feel happy at school.' },
  { word: 'big', type: 'kata sifat', meaning: 'besar', example: 'They live in a big house.' },
  { word: 'hot', type: 'kata sifat', meaning: 'panas', example: 'This soup is too hot.' },
  { word: 'cold', type: 'kata sifat', meaning: 'dingin', example: 'The water in the lake is cold.' },
  { word: 'easy', type: 'kata sifat', meaning: 'mudah', example: 'This game is easy to learn.' },
  { word: 'hard', type: 'kata sifat', meaning: 'sulit / keras', example: 'The exam was very hard.' },
  { word: 'clean', type: 'kata sifat', meaning: 'bersih', example: 'Please keep your room clean.' },
  { word: 'fast', type: 'kata sifat', meaning: 'cepat', example: 'He runs very fast.' },
  { word: 'brave', type: 'kata sifat', meaning: 'berani', example: 'The hero is brave and kind.' },
  { word: 'house', type: 'kata benda', meaning: 'rumah', example: 'My house is near the school.' },
  { word: 'food', type: 'kata benda', meaning: 'makanan', example: 'This food smells delicious.' },
  { word: 'family', type: 'kata benda', meaning: 'keluarga', example: 'I spend weekends with my family.' },
  { word: 'friend', type: 'kata benda', meaning: 'teman', example: 'She is my best friend.' },
];

export const faqItems = [
  {
    question: 'Apa itu VocaBee?',
    answer:
      'VocaBee adalah game RPG edukasi yang mengajak pemain belajar kosakata dan tata bahasa Inggris lewat sistem pertarungan bergiliran, terinspirasi RPG klasik. Setiap musuh mewakili satu kesalahan bahasa yang harus kamu kalahkan dengan jawaban yang tepat.',
  },
  {
    question: 'Apakah VocaBee gratis dimainkan?',
    answer:
      'Ya. VocaBee dikembangkan sebagai proyek untuk lomba Web Development SwitchFest 2026 dan bisa dicoba tanpa biaya.',
  },
  {
    question: 'VocaBee cocok untuk usia berapa?',
    answer:
      'Dirancang terutama untuk pelajar SMP, tapi siapa pun yang ingin melatih kosakata dan tata bahasa dasar bahasa Inggris juga bisa memainkannya.',
  },
  {
    question: 'Bagaimana cara mulai bermain?',
    answer:
      'Buka halaman Game dari menu navigasi di atas, lalu ikuti tombol dan langkah-langkah di sana untuk masuk ke sesi pertarungan pertamamu.',
  },
  {
    question: 'Apakah saya harus menghafal dulu sebelum bermain?',
    answer:
      'Tidak wajib, tapi sangat disarankan. Buka Modul Belajar dulu supaya kamu lebih siap menghadapi musuh-musuh di pertarungan.',
  },
  {
    question: 'Saya menemukan bug atau punya saran, harus lapor ke mana?',
    answer:
      'Gunakan form "Kirim Masukan" di bawah, atau hubungi salah satu anggota tim VocaBee yang tercantum di bagian Tim pada halaman Home.',
  },
];
