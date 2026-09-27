# 🐝 VocaBee — Belajar Inggris untuk Bertarung

> **Proyek Inovasi Kompetisi SwitchFest 2026**  
> *Gamifikasi Pembelajaran Kosakata & Tata Bahasa Inggris Berbasis Web RPG Turn-Based untuk Pelajar SMP di Indonesia.*

---

## 📌 Tentang Proyek

**VocaBee** adalah platform edukasi interaktif yang mengombinasikan kekuatan **web modern (React + TypeScript)** dan **game engine (Godot 4 WebAssembly)** untuk mengatasi kejenuhan belajar bahasa Inggris pada siswa sekolah menengah pertama. 

Alih-alih sekadar membaca tabel kosakata atau menghafal grammar kaku, siswa diajak masuk ke dalam dunia RPG klasik bernuansa retro pixel. Setiap musuh merepresentasikan kesalahan bahasa umum yang harus dikalahkan dengan memilih atau menyusun kosakata yang tepat secara bergiliran (*turn-based battle*).

### 🎯 Kontribusi terhadap SDG 4 (Pendidikan Berkualitas)
Proyek ini mengusung prinsip gamifikasi edukasi yang inklusif: mengubah materi pembelajaran yang biasanya membosankan menjadi pengalaman bermain yang seru, menantang, dan membuat siswa ingin terus mengulang tanpa takut dihakimi ketika salah.

---

## 👥 Tim Pengembang & Struktur Tim

Aplikasi ini dirancang dan dikembangkan dengan bangga oleh siswa **SMA Santa Angela Bandung**:

| No | Nama | Peran / Jabatan | Asal Sekolah |
|---|---|---|---|
| 1 | **Jonathan Kent Suhertan** | Ketua Tim / Lead Developer | SMA Santa Angela Bandung |
| 2 | **Lionel Isaac Mahardika Sitompul** | Game Developer | SMA Santa Angela Bandung |
| 3 | **Joshua Kalandra Simbolon** | UI/UX Designer | SMA Santa Angela Bandung |

### 👨‍🏫 Guru Pembimbing
- **Kornelius Rhesa Valdis Setyawan, S.Pd.**  
  *(Guru Pembimbing — SMA Santa Angela Bandung)*

---

## 🔍 Riset & Validasi Materi Bersama Native Speaker

Untuk memastikan kosakata, tata bahasa, dan kalimat yang digunakan di VocaBee bersifat alami (*natural English*) serta sesuai dengan konteks percakapan nyata:
- Tim VocaBee melakukan sesi wawancara, konsultasi kurikulum, dan pengujian gameplay langsung bersama **Guru Penutur Asli (Native Speaker)** di lingkungan SMA Santa Angela Bandung.
- Hasil validasi mencakup seleksi idiom sehari-hari, penyesuaian tingkat kesulitan untuk anak usia SMP, serta pemahaman nuansa kata (*connotation*) agar siswa tidak terjebak terjemahan kaku.

---

## ✨ Fitur-Fitur Utama

1. **Retro RPG Theme & Aesthetic**
   - Tampilan visual klasik bertema RPG 8-bit/16-bit lengkap dengan font pixel (*Press Start 2P*, *VT323*) dan tema warna void bernuansa retro.
   - Mendukung penuh **Dark Mode** dan **Light Mode** yang responsif dan dapat dialihkan kapan saja.

2. **Mini Demo Battle (Coba Bertarung)**
   - Simulator mini battle di halaman utama web: pemain menjawab tantangan kosakata untuk mengurangi HP monster lawan dan mempertahankan *streak*.

3. **Modul Belajar Interaktif (Flashcards)**
   - 15 kartu kosakata kurikulum terpilih dengan mekanisme kartu balik (muka depan: kata & kelas kata; muka belakang: arti, contoh kalimat, dan tombol checklist hafalan).
   - Dilengkapi pelacak progres persentase hafalan yang tersimpan secara lokal (*localStorage*).

4. **Game Demo Godot 4 (Wordventure Demo)**
   - Terintegrasi langsung dengan ekspor web Godot 4 WebAssembly (`.wasm` & `.pck`) di dalam folder `public/Wordventure_demo/`.
   - Dapat dimainkan langsung melalui browser tanpa instalasi dan tanpa memerlukan skrip batch lokal (`buka_game.bat`).
   - Dilengkapi navigasi mengambang *"Kembali ke Website"* untuk berpindah kembali ke aplikasi utama dengan mudah.

5. **FAQ & Formulir Masukan Pengguna (Contact Us)**
   - Daftar pertanyaan umum (*accordion*) seputar gameplay dan materi.
   - Form kontak terintegrasi dengan FormSubmit API untuk pengiriman pesan/bug report langsung ke email pengembang, disertai sistem cadangan lokal (*local backup storage*).

6. **Footer Representatif & Identitas Sekolah**
   - Dilengkapi logo resmi **SMA Santa Angela Bandung (Serviam)**, semboyan pendidikan, serta navigasi tautan yang responsif.

---

## 🛠️ Teknologi & Arsitektur

- **Frontend Framework**: [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- **Build Tool**: [Vite 8](https://vite.dev/)
- **Game Engine**: [Godot Engine 4](https://godotengine.org/) (HTML5 / WebAssembly / WebGL2 Export)
- **Styling**: Vanilla CSS (Tailored Design System, HSL Color Palette, Retro Pixel Grid, Responsive Flex & Grid)
- **Deployment & Serving**: Single-page App (SPA) dengan aset game statis di folder `public/`

---

## 🚀 Panduan Menjalankan Aplikasi

### Prasyarat
- Pastikan komputer sudah terpasang **Node.js** (versi 18 ke atas disarankan) dan **npm**.

### Langkah Instalasi & Menjalankan Lokal

1. **Clone repository ini** (atau ekstrak folder proyek):
   ```bash
   git clone <URL_REPOSITORY>
   cd switchfast-2026
   ```

2. **Instal seluruh dependensi**:
   ```bash
   npm install
   ```

3. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```
   Buka peramban (browser) di alamat yang muncul di terminal (biasanya `http://localhost:5173`).

4. **Mengakses Game**:
   - Klik menu **Game** di navbar atas website, lalu pilih tombol **"Mainkan di Tab Baru ↗"** atau **"Buka di Tab Ini"**.
   - Game Godot akan dimuat secara instan melalui server lokal Vite.

5. **Build untuk Production**:
   ```bash
   npm run build
   ```
   Hasil build siap saji akan dibuat di folder `dist/`, termasuk seluruh aset game di `dist/Wordventure_demo/`.

---

## 📜 Lisensi & Hak Cipta

© 2026 **VOCABEE** — Tim Siswa SMA Santa Angela Bandung.  
Dikembangkan untuk partisipasi dalam ajang **SwitchFest 2026**. Seluruh hak cipta dilindungi.
