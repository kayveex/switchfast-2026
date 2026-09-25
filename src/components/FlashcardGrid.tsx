import { useState, useCallback } from 'react';
import { words, type VocabWord } from '../data/vocabee-data';

const MEMO_KEY = 'vocabee-memorized';

function loadMemorized(): Record<string, boolean> {
  try {
    const raw = localStorage.getItem(MEMO_KEY);
    if (raw) return JSON.parse(raw) || {};
  } catch { /* */ }
  return {};
}

function FlashCard({
  word,
  index,
  isMemorized,
  onToggleMemorized,
}: {
  word: VocabWord;
  index: number;
  isMemorized: boolean;
  onToggleMemorized: (word: string, checked: boolean) => void;
}) {
  const [flipped, setFlipped] = useState(false);

  const cardClass = `card${flipped ? ' flipped' : ''}${isMemorized ? ' memorized' : ''}`;

  return (
    <div
      className={cardClass}
      tabIndex={0}
      role="button"
      onClick={() => setFlipped(!flipped)}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setFlipped(!flipped);
        }
      }}
    >
      <div className="card-inner">
        <div className="card-face front">
          <span className="card-tag">
            {word.type} · #{index + 1}
          </span>
          <span className="card-word">{word.word}</span>
          <span className="flip-hint">tekan untuk lihat arti</span>
        </div>
        <div className="card-face back">
          <span className="card-tag">{word.word}</span>
          <span className="meaning">{word.meaning}</span>
          <span className="example">"{word.example}"</span>
          <label className="memo-toggle" onClick={(e) => e.stopPropagation()}>
            <input
              type="checkbox"
              checked={isMemorized}
              onChange={(e) => onToggleMemorized(word.word, e.target.checked)}
            />
            <span>Sudah hafal</span>
          </label>
        </div>
      </div>
    </div>
  );
}

export default function FlashcardGrid() {
  const [memorized, setMemorized] = useState<Record<string, boolean>>(loadMemorized);

  const saveMemorized = useCallback((next: Record<string, boolean>) => {
    try {
      localStorage.setItem(MEMO_KEY, JSON.stringify(next));
    } catch { /* */ }
  }, []);

  const handleToggle = useCallback(
    (word: string, checked: boolean) => {
      setMemorized((prev) => {
        const next = { ...prev, [word]: checked };
        if (!checked) delete next[word];
        saveMemorized(next);
        return next;
      });
    },
    [saveMemorized]
  );

  const handleReset = () => {
    setMemorized({});
    saveMemorized({});
  };

  const count = words.reduce((n, w) => n + (memorized[w.word] ? 1 : 0), 0);
  const progressWidth = Math.round((count / words.length) * 100) + '%';

  return (
    <section className="tight">
      <div className="wrap">
        <p className="eyebrow-line">
          <span className="dash" />
          Modul Belajar
        </p>
        <h2 className="h2">15 kosakata dasar yang paling sering dipakai sehari-hari.</h2>
        <p className="lede" style={{ marginTop: 16 }}>
          Hafalkan dulu isi kotak inventarismu di sini sebelum masuk ke arena pertarungan. Ketuk
          tiap kartu untuk membalik dan melihat artinya, lalu tandai kalau sudah hafal.
        </p>

        <div className="progress-row">
          <span>Progres hafalan:</span>
          <div className="progress-track">
            <i style={{ width: progressWidth }} />
          </div>
          <span>
            <b>{count}</b> / {words.length} kata
          </span>
        </div>
        <p className="hint">* Klik atau tekan kartu untuk membalik.</p>

        <div className="card-grid">
          {words.map((w, i) => (
            <FlashCard
              key={w.word}
              word={w}
              index={i}
              isMemorized={!!memorized[w.word]}
              onToggleMemorized={handleToggle}
            />
          ))}
        </div>

        <div className="reset-row">
          <button className="btn ghost" type="button" onClick={handleReset}>
            Atur Ulang Progres
          </button>
        </div>
      </div>
    </section>
  );
}
