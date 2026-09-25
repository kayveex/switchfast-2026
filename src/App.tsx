import { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomeView from './views/HomeView';
import BelajarView from './views/BelajarView';
import FaqView from './views/FaqView';
import GameView from './views/GameView';

export default function App() {
  const [currentView, setCurrentView] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    if (['home', 'belajar', 'faq', 'game'].includes(hash)) {
      return hash;
    }
    return 'home';
  });

  const handleNavigate = (view: string) => {
    setCurrentView(view);
    window.location.hash = view;
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'belajar', 'faq', 'game'].includes(hash)) {
        setCurrentView(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <>
      <div className="void-bg" aria-hidden="true" />
      <Header currentView={currentView} onNavigate={handleNavigate} />
      <main>
        {currentView === 'home' && <HomeView onNavigate={handleNavigate} />}
        {currentView === 'belajar' && <BelajarView />}
        {currentView === 'faq' && <FaqView />}
        {currentView === 'game' && <GameView />}
      </main>
      <Footer />
    </>
  );
}
