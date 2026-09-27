import { useState } from 'react';
import { faqItems } from '../data/vocabee-data';

const FEEDBACK_KEY = 'vocabee-feedback';
const FEEDBACK_TO = 'Jonathankent2009@gmail.com';

export default function FaqView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedbackStatus, setFeedbackStatus] = useState<{
    text: string;
    type: 'ok' | 'err' | '';
  }>({ text: '', type: '' });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const entry = {
      name: name.trim(),
      email: email.trim(),
      message: message.trim(),
      sentAt: new Date().toISOString(),
    };

    // Save backup to localStorage
    try {
      const existingRaw = localStorage.getItem(FEEDBACK_KEY);
      const existing = existingRaw ? JSON.parse(existingRaw) : [];
      existing.push(entry);
      localStorage.setItem(FEEDBACK_KEY, JSON.stringify(existing));
    } catch {
      /* storage unavailable, continue */
    }

    setIsSubmitting(true);
    setFeedbackStatus({ text: '', type: '' });

    try {
      const response = await fetch('https://formsubmit.co/ajax/' + FEEDBACK_TO, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name: entry.name,
          email: entry.email,
          message: entry.message,
          _subject: 'Masukan VocaBee dari ' + (entry.name || 'Pengunjung'),
          _captcha: 'false',
          _template: 'table',
        }),
      });

      const result = await response.json();

      if (response.ok && (result.success === 'true' || result.success === true)) {
        setFeedbackStatus({
          text: `✓ Terima kasih, ${entry.name || 'teman'}! Masukan kamu berhasil dikirim langsung ke tim VocaBee.`,
          type: 'ok',
        });
        setName('');
        setEmail('');
        setMessage('');
      } else {
        setFeedbackStatus({
          text: `* ${result.message || 'Harap periksa email aktivasi FormSubmit atau coba lagi.'}`,
          type: 'err',
        });
      }
    } catch {
      // Fallback
      setFeedbackStatus({
        text: '* Terjadi gangguan jaringan saat mengirim masukan. Masukan kamu sudah tersimpan di cadangan lokal.',
        type: 'err',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="viewFAQ">
      {/* FAQ SECTION */}
      <section className="tight">
        <div className="wrap">
          <p className="eyebrow-line">
            <span className="dash" />
            Contact Us
          </p>
          <h2 className="h2">Hubungi tim kami &amp; pertanyaan yang sering ditanyakan.</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Ada pertanyaan, ide, atau bug yang ingin dilaporkan? Cek dulu FAQ di bawah, atau kirim
            langsung lewat form masukan.
          </p>

          <div className="faq-list">
            {faqItems.map((item, index) => (
              <details key={index} className="faq-item">
                <summary>{item.question}</summary>
                <p className="faq-answer">{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* FEEDBACK FORM SECTION */}
      <section className="tight" id="masukan">
        <div className="wrap">
          <p className="eyebrow-line">
            <span className="dash" />
            Kirim Masukan
          </p>
          <h2 className="h2">Punya saran, pertanyaan, atau laporan bug?</h2>
          <p className="lede" style={{ marginTop: 16 }}>
            Isi form di bawah ini dan tim VocaBee akan membacanya. Ceritakan sedetail mungkin supaya
            kami bisa menindaklanjuti dengan cepat.
          </p>

          <div className="contact-grid" style={{ marginTop: 30 }}>
            <div className="textbox">
              <form id="feedbackForm" onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="fbName">Nama</label>
                  <input
                    type="text"
                    id="fbName"
                    name="name"
                    required
                    placeholder="Nama kamu"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="fbEmail">Email</label>
                  <input
                    type="email"
                    id="fbEmail"
                    name="email"
                    required
                    placeholder="nama@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="field">
                  <label htmlFor="fbMessage">Pesan</label>
                  <textarea
                    id="fbMessage"
                    name="message"
                    rows={5}
                    required
                    placeholder="Tulis saran, pertanyaan, atau bug yang kamu temukan..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>
                <button className="btn" type="submit" id="fbSubmitBtn" disabled={isSubmitting}>
                  {isSubmitting ? 'Mengirim...' : 'Kirim Masukan'}
                </button>
                {feedbackStatus.text && (
                  <p className={`form-feedback ${feedbackStatus.type}`}>
                    {feedbackStatus.text}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
