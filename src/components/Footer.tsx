export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="footer-main">
          {/* School & Brand Affiliation */}
          <div className="footer-brand">
            <div className="footer-logos">
              <a
                href="https://santaangela.sch.id"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-school-link"
                title="Situs Resmi SMA Santa Angela Bandung"
              >
                <img
                  src="/santa-angela.png"
                  alt="Logo SMA Santa Angela Bandung - Serviam"
                  className="footer-school-logo"
                  width={64}
                  height={64}
                />
              </a>
              <div className="footer-logo-divider" aria-hidden="true" />
              <div className="footer-vocabee-badge">
                <img
                  src="https://i.ibb.co.com/qYHvGp9f/Vocabee-Proto-1.png"
                  alt="VocaBee Logo"
                  className="footer-vocabee-logo"
                  width={38}
                  height={38}
                />
                <span className="footer-vocabee-name">VOCABEE</span>
              </div>
            </div>

            <div className="footer-school-info">
              <h4 className="footer-school-name">SMA SANTA ANGELA BANDUNG</h4>
              <p className="footer-school-motto">
                "Komunitas Pembelajaran Berkarakter Serviam yang Humanis, Unggul dalam Pemanfaatan Sains dan Teknologi serta Berwawasan Global"
              </p>
            </div>
          </div>

          {/* Project Meta / Innovation Tag */}
          <div className="footer-meta">
            <div className="footer-badge">
              <span className="dot" aria-hidden="true" />
              <span>KOMPETISI SWITCHFEST 2026</span>
            </div>
            <p className="footer-desc">
              Gamifikasi pembelajaran kosakata bahasa Inggris berbasis web untuk mendukung pendidikan yang inklusif dan menyenangkan bagi pelajar, khususnya SMP di Indonesia.
            </p>
            <div className="footer-team-chips">
              <span className="team-chip">Kent</span>
              <span className="team-chip">Lionel</span>
              <span className="team-chip">Joshua</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <p className="credit">
            © 2026 VOCABEE · Tim Siswa SMA Santa Angela Bandung. Hak cipta dilindungi.
          </p>
          <div className="footer-links">
            <a href="#home">Home</a>
            <span className="sep">•</span>
            <a href="#belajar">Modul</a>
            <span className="sep">•</span>
            <a href="#game">Game</a>
            <span className="sep">•</span>
            <a href="#faq">Kontak</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
