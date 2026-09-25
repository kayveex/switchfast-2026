import { useState, useCallback } from 'react';
import { battles, type Battle } from '../data/vocabee-data';

export default function DemoBattle() {
  const [battleIndex, setBattleIndex] = useState(0);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(() => {
    try {
      return parseInt(localStorage.getItem('vocabee-best-streak') || '0', 10) || 0;
    } catch {
      return 0;
    }
  });
  const [answered, setAnswered] = useState(false);
  const [chosenIndex, setChosenIndex] = useState(-1);
  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackClass, setFeedbackClass] = useState('');
  const [enemyHp, setEnemyHp] = useState('100%');

  const currentBattle: Battle = battles[battleIndex % battles.length];

  const handleChoice = useCallback(
    (i: number) => {
      if (answered) return;
      setAnswered(true);
      setChosenIndex(i);

      if (i === currentBattle.correct) {
        setFeedbackText(`* Serangan tepat! ${currentBattle.enemy} terkena kritikal.`);
        setFeedbackClass('ok');
        setEnemyHp('8%');
        setStreak((prev) => {
          const next = prev + 1;
          setBest((prevBest) => {
            const newBest = Math.max(prevBest, next);
            try {
              localStorage.setItem('vocabee-best-streak', String(newBest));
            } catch { /* */ }
            return newBest;
          });
          return next;
        });
      } else {
        setFeedbackText('* Belum tepat — coba pikirkan lagi lawan kata yang paling pas.');
        setFeedbackClass('bad');
        setStreak(0);
      }
    },
    [answered, currentBattle]
  );

  const nextBattle = () => {
    setBattleIndex((prev) => prev + 1);
    setAnswered(false);
    setChosenIndex(-1);
    setFeedbackText('');
    setFeedbackClass('');
    setEnemyHp('100%');
  };

  const getChoiceClass = (i: number) => {
    if (!answered) return 'choice';
    if (i === currentBattle.correct) return 'choice correct';
    if (i === chosenIndex) return 'choice wrong';
    return 'choice';
  };

  return (
    <section id="demo">
      <div className="wrap">
        <p className="eyebrow-line">
          <span className="dash" />
          Coba Bertarung
        </p>
        <h2 className="h2">Cuplikan pertarungan sungguhan.</h2>
        <p className="lede" style={{ marginTop: 16 }}>
          Ini versi mini dari mekanisme inti VocaBee. Setiap musuh membawa satu kata — kalahkan
          dengan memilih lawan katanya (antonim) yang tepat.
        </p>

        <div className="demo-shell" style={{ marginTop: 28 }}>
          <div className="demo-top">
            <div className="demo-hp you">
              <span>KAMU</span>
              <div className="hpbar">
                <i style={{ width: '100%' }} />
              </div>
            </div>
            <div className="demo-hp enemy">
              <span>{currentBattle.enemy}</span>
              <div className="hpbar">
                <i style={{ width: enemyHp }} />
              </div>
            </div>
          </div>

          <div className="demo-box">
            <p className="demo-line">
              * (musuh) : <span className="bad">{currentBattle.word}</span> — pilih lawan katanya
              untuk menyerang!
            </p>
            <div className="demo-choices">
              {currentBattle.options.map((opt, i) => (
                <button
                  key={i}
                  className={getChoiceClass(i)}
                  type="button"
                  disabled={answered}
                  onClick={() => handleChoice(i)}
                >
                  {opt}
                </button>
              ))}
            </div>
            {feedbackText && (
              <p className={`demo-feedback ${feedbackClass}`}>{feedbackText}</p>
            )}
          </div>

          <div className="demo-foot">
            <span className="streak">
              Beruntun benar: <b>{streak}</b> &nbsp;•&nbsp; Rekor: <b>{best}</b>
            </span>
            <button className="btn ghost" type="button" onClick={nextBattle}>
              Musuh Berikutnya
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
