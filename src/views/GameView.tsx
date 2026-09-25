export default function GameView() {
  return (
    <div id="viewGame">
      <section className="tight">
        <div className="wrap">
          <p className="eyebrow-line">
            <span className="dash" />
            Game
          </p>
          <h2 className="h2">Masuk ke arena pertarungan sungguhan.</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Semua yang kamu coba di halaman Coba Bertarung baru cuplikannya. Klik tombol di bawah
            untuk memainkan VocaBee versi penuh.
          </p>

          <div className="demo-shell game-cta" style={{ marginTop: 28 }}>
            <p className="stage-caption" style={{ margin: '0 0 16px' }}>
              ◆ SIAP UNTUK BERTARUNG? ◆
            </p>
            <a
              className="btn"
              href="https://itch.io"
              id="playGameLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mainkan VocaBee Sekarang
            </a>
            <p className="hint" style={{ marginTop: 16 }}>
              * Tautan dapat disesuaikan dengan tautan resmi game — misalnya itch.io, Google Play, atau link unduhan.
            </p>
          </div>

          <div className="turns" style={{ marginTop: 40 }}>
            <div className="turn">
              <span className="idx">01</span>
              <h3>Klik Mainkan</h3>
              <p>Tekan tombol di atas untuk membuka atau mengunduh game VocaBee.</p>
            </div>
            <div className="turn">
              <span className="idx">02</span>
              <h3>Tunggu Dimuat</h3>
              <p>Beri waktu sebentar untuk game memuat aset dan menyiapkan sesi pertarungan pertamamu.</p>
            </div>
            <div className="turn">
              <span className="idx">03</span>
              <h3>Ikuti Tutorial</h3>
              <p>Game akan memandu kamu mengenal kontrol dan mekanisme pertarungan lewat kosakata.</p>
            </div>
            <div className="turn">
              <span className="idx">04</span>
              <h3>Mulai Bertarung</h3>
              <p>Hadapi musuh pertamamu dan mulai kumpulkan kosakata baru sambil menaklukkan RPG ini.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
