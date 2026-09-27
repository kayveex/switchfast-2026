import DemoBattle from '../components/DemoBattle';

interface HomeViewProps {
  onNavigate: (view: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  const goToSection = (sectionId: string) => {
    setTimeout(() => {
      const target = document.getElementById(sectionId);
      if (target) target.scrollIntoView({ behavior: 'smooth' });
    }, 50);
  };

  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="wrap hero-grid">
          <div>
            <p className="encounter-tag">
              * Sebuah kesalahan bahasa muncul<span className="blink">_</span>
            </p>
            <h1 className="title">
              Belajar Inggris untuk <span className="accent">bertarung.</span>
            </h1>
            <p className="lede">
              Tingkatkan kemampuan Bahasa Inggris bersama VocaBee melalui game petualangan seru dan
              modul belajar yang interaktif.
            </p>
            <div className="hero-actions">
              <a
                className="btn"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('game');
                }}
              >
                Coba Sekarang
              </a>
              <a
                className="btn ghost"
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  goToSection('masalah');
                }}
              >
                Mengapa VocaBee?
              </a>
            </div>
          </div>

          <div className="stage">
            <div className="hpbar-row">
              <span>MUSUH</span>
              <div className="hpbar">
                <i style={{ width: '62%' }} />
              </div>
              <span>62%</span>
            </div>
            <div className="sprite" aria-hidden="true">
              <div className="glyph2">"villain"</div>
              <div className="blob" />
              <div className="glyph">?!</div>
            </div>
            <p className="stage-caption">
              SALAHTOR menyerang dengan kata <b>villain</b>. Giliranmu mencari lawan katanya.
            </p>
          </div>
        </div>
      </section>

      {/* KENAPA PILIH KAMI */}
      <section id="masalah">
        <div className="wrap">
          <p className="eyebrow-line">
            <span className="dash" />
            Kenapa Pilih Kami
          </p>
          <h2 className="h2">Bukan RPG biasa, tapi cara baru untuk belajar.</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            VocaBee dirancang bukan cuma buat seru-seruan, tapi supaya kamu semakin mahir dalam
            bahasa Inggris tanpa sadar sedang belajar. Ini yang bikin VocaBee beda:
          </p>

          <div className="stat-grid">
            <div className="stat-card">
              <span className="num">01</span>
              <p>
                <strong style={{ color: 'var(--text-hi)' }}>
                  Materi dari Pengalaman Native Speaker.
                </strong>{' '}
                Kosakata dan contoh kalimat di VocaBee disaring dari pengalaman nyata bersama
                penutur asli — bukan sekadar hafalan buku teks, tapi bahasa yang memang dipakai
                sehari-hari.
              </p>
            </div>
            <div className="stat-card">
              <span className="num">02</span>
              <p>
                <strong style={{ color: 'var(--text-hi)' }}>
                  Tegang, Seru, Tapi Diam-Diam Mendidik.
                </strong>{' '}
                Setiap pertarungan dibuat cukup menegangkan untuk bikin kamu benar-benar fokus,
                sementara tanpa sadar kamu sedang menyerap kosakata baru sampai pola grammar.
              </p>
            </div>
            <div className="stat-card">
              <span className="num">03</span>
              <p>
                <strong style={{ color: 'var(--text-hi)' }}>Modul Pembelajaran.</strong> Tersedia
                materi-materi vocabulary Bahasa Inggris untuk mempelajari ulang kosakata yang telah
                didapatkan.
              </p>
            </div>
          </div>

          <div className="textbox" style={{ marginTop: 34 }}>
            <p className="prompt">
              * Belajar dari pengalaman nyata, berlatih lewat pertarungan yang bikin jantung
              berdebar, dan bebas mencoba tanpa takut salah.
            </p>
          </div>
        </div>
      </section>

      {/* DEMO */}
      <DemoBattle />

      {/* MODUL BELAJAR TEASER */}
      <section id="belajar">
        <div className="wrap">
          <p className="eyebrow-line">
            <span className="dash" />
            Modul Belajar
          </p>
          <h2 className="h2">Isi inventaris kosakatamu sebelum bertarung.</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            15 kosakata dasar yang paling sering dipakai sehari-hari, dikemas jadi kartu balik yang
            bisa kamu hafalkan sendiri, lengkap dengan contoh kalimat dan pelacak progres.
          </p>

          <div
            className="demo-shell"
            style={{
              marginTop: 28,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 24,
              flexWrap: 'wrap',
            }}
          >
            <div>
              <p className="stage-caption" style={{ margin: '0 0 6px' }}>
                ◆ MODUL 01 — KOSAKATA DASAR
              </p>
              <p
                style={{
                  margin: 0,
                  color: 'var(--text-hi)',
                  fontFamily: 'var(--font-term)',
                  fontSize: 20,
                }}
              >
                15 kartu · kata sifat &amp; kata benda sehari-hari
              </p>
            </div>
            <a
              className="btn"
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('belajar');
              }}
            >
              Buka Modul Belajar
            </a>
          </div>
        </div>
      </section>

      {/* KELEBIHAN */}
      <section id="Kelebihan">
        <div className="wrap">
          <p className="eyebrow-line">
            <span className="dash" />
            Kelebihan
          </p>
          <h2 className="h2">Kelebihan yang bikin VocaBee beda.</h2>

          <div className="ability-grid" style={{ marginTop: 28 }}>
            {[
              {
                tag: 'GAME +',
                title: 'Platform Game Interaktif',
                desc: 'VocaBee menyajikan game RPG sungguhan yang bisa langsung dimainkan, jadi belajar bahasa Inggris terasa seperti bermain, bukan mengerjakan tugas.',
              },
              {
                tag: 'NATIVE +',
                title: 'Kerja Sama dengan Native Speaker',
                desc: 'Game ini dikembangkan melalui kolaborasi langsung dengan native speaker demi menghadirkan pengalaman belajar yang interaktif, relevan, dan menyenangkan.',
              },
              {
                tag: 'MODUL +',
                title: 'Modul Belajar Terstruktur',
                desc: 'Selain bertarung, tersedia modul flashcard berisi kosakata dasar lengkap dengan contoh kalimat, cocok dipakai sebelum atau sesudah bermain.',
              },
              {
                tag: 'PROGRES +',
                title: 'Progres Tersimpan Otomatis (Coming Soon)',
                desc: 'Setiap kata yang sudah kamu hafalkan otomatis tersimpan di browser, jadi kamu bisa lanjut belajar kapan pun tanpa harus mengulang dari awal.',
              },
              {
                tag: 'AKSES +',
                title: 'Bisa Diakses Kapan Saja',
                desc: 'Tampilan VocaBee menyesuaikan otomatis di HP, tablet, maupun laptop, dan bisa langsung dicoba tanpa instalasi rumit.',
              },
              {
                tag: 'RUANG AMAN',
                title: 'Aman untuk Mencoba',
                desc: 'Pemain bebas bereksperimen menulis kosakata dan kalimat baru tanpa takut dihakimi.',
              },
            ].map((ability, i) => (
              <div className="ability" key={i}>
                <span className="tag">{ability.tag}</span>
                <h3>{ability.title}</h3>
                <p>{ability.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG */}
      <section className="tight">
        <div className="wrap">
          <div className="sdg-strip">
            <span className="sdg-chip">SDG 4 — Pendidikan Berkualitas</span>
            <p style={{ margin: 0, maxWidth: 640 }}>
              VocaBee itu dibikin kaya game! Jadi, belajar bahasa yang biasanya bikin ngantuk dan malesin, diubah biar seru dan bikin nagih buat dimainin lagi. Lewat VocaBee, semua anak SMP di Indonesia bisa belajar bahasa Inggris dengan cara yang lebih asik dan gak diskriminatif.
            </p>
          </div>
        </div>
      </section>

      {/* WAWANCARA GURU NATIVE SPEAKER */}
      <section id="riset">
        <div className="wrap">
          <p className="eyebrow-line">
            <span className="dash" />
            Validasi &amp; Riset Nyata
          </p>
          <h2 className="h2">Validasi langsung bersama Guru Native Speaker.</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Bukan sekadar terjemahan mesin atau tebakan kosakata. Tim VocaBee berkonsultasi,
            berdiskusi, dan menguji relevansi materi gameplay langsung bersama guru penutur asli
            (Native Speaker) di SMA Santa Angela Bandung agar kosakata yang dipelajari akurat,
            alami, dan kontekstual.
          </p>

          <div className="interview-grid">
            <div className="interview-media">
              <div className="interview-badge">
                <span className="dot" aria-hidden="true" />
                <span>BUKTI RISET LAPANGAN</span>
              </div>
              <div className="interview-img-wrap">
                <img
                  src="/interview-native-speaker.jpg"
                  alt="Dokumentasi wawancara tim VocaBee bersama guru native speaker di SMA Santa Angela Bandung"
                  className="interview-img"
                  loading="lazy"
                />
              </div>
              <p className="interview-caption">
                Dokumentasi sesi konsultasi &amp; review materi game VocaBee bersama guru native speaker di lingkungan SMA Santa Angela Bandung.
              </p>
            </div>

            <div className="interview-cards">
              <div className="interview-card">
                <span className="interview-card-tag">01 · NATURAL ENGLISH</span>
                <h3>Kosakata Sehari-hari yang Otentik</h3>
                <p>
                  Memastikan kata dan frasa yang digunakan dalam game adalah ekspresi wajar yang
                  benar-benar dipakai penutur asli (native speaker), bukan terjemahan kaku buku teks.
                </p>
              </div>

              <div className="interview-card">
                <span className="interview-card-tag">02 · GAMEPLAY VALIDATION</span>
                <h3>Tingkat Kesulitan Sesuai Siswa SMP</h3>
                <p>
                  Menguji mekanisme pertarungan kosakata agar ramah bagi siswa pemula, namun tetap
                  menantang dan memicu daya ingat jangka panjang.
                </p>
              </div>

              <div className="interview-card">
                <span className="interview-card-tag">03 · CONTEXT &amp; CONNOTATION</span>
                <h3>Nuansa Kata &amp; Konteks Penggunaan</h3>
                <p>
                  Mendapatkan masukan langsung seputar konotasi kata dan perbedaan konteks makna agar
                  pemain paham kapan suatu kata tepat digunakan dalam kalimat nyata.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TIM */}
      <section id="tim">
        <div className="wrap">
          <p className="eyebrow-line">
            <span className="dash" />
            Party
          </p>
          <h2 className="h2">Tim di balik VocaBee.</h2>

          <div className="party" style={{ marginTop: 28 }}>
            <div className="member">
              <div className="avatar photo">
                <img src={"https://i.ibb.co.com/QFQ6pk7B/kent-member.jpg"} alt="Potret Kent" />
              </div>
              <h3>JONATHAN KENT SUHERTAN</h3>
              <span className="role">Ketua Tim - SMA Santa Angela Bandung</span>
            </div>
            <div className="member">
              <div className="avatar photo">
                <img src={"https://i.ibb.co.com/bgk1WBc7/lionel.jpg"} alt="Potret Lionel" />
              </div>
              <h3>LIONEL ISAAC MAHARDIKA SITOMPUL</h3>
              <span className="role">Game Developer - SMA Santa Angela Bandung</span>
            </div>
            <div className="member">
              <div className="avatar photo">
                <img src={"https://i.ibb.co.com/cXQzQsxb/josh.jpg"} alt="Potret Joshua" />
              </div>
              <h3>JOSHUA KALANDRA SIMBOLON</h3>
              <span className="role">UI/X Designer - SMA Santa Angela Bandung</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
