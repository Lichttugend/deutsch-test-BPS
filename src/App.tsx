import { useState } from 'react';
import { Category, Question, ScoreRecord } from './types';
import Home from './components/Home';
import Exercise from './components/Exercise';
import MockTest from './components/MockTest';
import ResultScreen from './components/ResultScreen';
import PossessivartikelExercise from './components/PossessivartikelExercise';
import { leseverstehenQuestions } from './data/leseverstehen';
import { lueckentextQuestions } from './data/lueckentext';
import { grammatikQuestions } from './data/grammatik';
import { wortschatzQuestions } from './data/wortschatz';
import { rechtschreibungQuestions } from './data/rechtschreibung';
import { possessivartikelTexts } from './data/possessivartikel';

type View = 'home' | 'exercise' | 'mocktest' | 'result' | 'possessivartikel';

const allQuestions: Record<Category, Question[]> = {
  leseverstehen: leseverstehenQuestions,
  lueckentext: lueckentextQuestions,
  grammatik: grammatikQuestions,
  wortschatz: wortschatzQuestions,
  rechtschreibung: rechtschreibungQuestions,
};

const categoryLabels: Record<Category, string> = {
  leseverstehen: 'Leseverstehen',
  lueckentext: 'Lückentext',
  grammatik: 'Grammatik',
  wortschatz: 'Wortschatz',
  rechtschreibung: 'Rechtschreibung',
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function getMockTestQuestions(): Question[] {
  const categories = Object.keys(allQuestions) as Category[];
  const perCategory = 4; // 4 questions each from 5 categories = 20 total
  const selected: Question[] = [];
  categories.forEach(cat => {
    const shuffled = shuffle(allQuestions[cat]);
    selected.push(...shuffled.slice(0, perCategory));
  });
  return shuffle(selected);
}

function saveScore(category: string, score: number, total: number) {
  const history: ScoreRecord[] = JSON.parse(localStorage.getItem('deutschTestHistory') || '[]');
  history.push({ date: new Date().toISOString(), category, score, total });
  // Keep last 50 records
  if (history.length > 50) history.splice(0, history.length - 50);
  localStorage.setItem('deutschTestHistory', JSON.stringify(history));
}

export default function App() {
  const [view, setView] = useState<View>('home');
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [lastScore, setLastScore] = useState({ score: 0, total: 0, category: '' });

  const handleStartExercise = (category: Category) => {
    setActiveCategory(category);
    setActiveQuestions(shuffle(allQuestions[category]));
    setView('exercise');
  };

  const handleStartMockTest = () => {
    setActiveQuestions(getMockTestQuestions());
    setView('mocktest');
  };

  const handleStartPossessivartikel = () => {
    setView('possessivartikel');
  };

  const handleFinish = (score: number, total: number) => {
    const category = view === 'mocktest' ? 'mocktest' : (activeCategory ?? 'unknown');
    saveScore(category, score, total);
    setLastScore({ score, total, category });
    setView('result');
  };

  const handleRetry = () => {
    if (lastScore.category === 'mocktest') {
      handleStartMockTest();
    } else if (activeCategory) {
      handleStartExercise(activeCategory);
    } else {
      setView('home');
    }
  };

  if (view === 'possessivartikel') {
    return (
      <PossessivartikelExercise
        texts={possessivartikelTexts}
        onFinish={(score, total) => {
          saveScore('possessivartikel', score, total);
          setLastScore({ score, total, category: 'possessivartikel' });
          setView('result');
        }}
        onHome={() => setView('home')}
      />
    );
  }

  if (view === 'home') {
    return <Home onStart={handleStartExercise} onMockTest={handleStartMockTest} onPossessivartikel={handleStartPossessivartikel} />;
  }

  if (view === 'exercise' && activeCategory) {
    return (
      <Exercise
        questions={activeQuestions}
        categoryLabel={categoryLabels[activeCategory]}
        onFinish={handleFinish}
        onHome={() => setView('home')}
      />
    );
  }

  if (view === 'mocktest') {
    return (
      <MockTest
        questions={activeQuestions}
        onFinish={handleFinish}
        onHome={() => setView('home')}
      />
    );
  }

  if (view === 'result') {
    return (
      <ResultScreen
        score={lastScore.score}
        total={lastScore.total}
        category={lastScore.category}
        onHome={() => setView('home')}
        onRetry={handleRetry}
      />
    );
  }

  return null;
}
