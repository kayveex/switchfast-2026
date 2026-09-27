export default function GameView() {
  return (
    <div id="viewGame">
      <section className="tight">
        <div className="wrap">
          <p className="eyebrow-line">
            <span className="dash" />
            Game VocaBee (Versi Demo)
          </p>
          <h2 className="h2">Masuk ke arena pertarungan sungguhan.</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Klik tombol di bawah untuk memainkan VocaBee di browser.
          </p>

          <div className="demo-shell game-cta" style={{ marginTop: 28 }}>
            <p className="stage-caption" style={{ margin: '0 0 16px' }}>
              ◆ SIAP UNTUK BERTARUNG? ◆
            </p>
            <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
              <a
                className="btn"
                href="/Wordventure_demo/index.html"
                id="playGameLink"
                target="_blank"
                rel="noopener noreferrer"
              >
                Mainkan di Tab Baru ↗
              </a>
              <a
                className="btn ghost"
                href="/Wordventure_demo/index.html"
                id="playGameDirectLink"
              >
                Buka di Tab Ini
              </a>
            </div>
          </div>

          <div className="turns" style={{ marginTop: 40 }}>
            <div className="turn">
              <span className="idx">01</span>
              <h3>Klik Mainkan</h3>
              <p>Tekan tombol di atas untuk langsung membuka game VocaBee di browser.</p>
            </div>
            <div className="turn">
              <span className="idx">02</span>
              <h3>Tunggu Dimuat</h3>
              <p>Game akan terbuka di tab baru dalam hitungan detik.</p>
            </div>
            <div className="turn">
              <span className="idx">03</span>
              <h3>Ikuti Tutorial</h3>
              <p>Game akan memandu kamu untuk mengenal game VocaBee.</p>
            </div>
            <div className="turn">
              <span className="idx">04</span>
              <h3>Mulai Bertarung</h3>
              <p>Hadapi musuh pertamamu dan mulai kumpulkan kosakata baru!</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
