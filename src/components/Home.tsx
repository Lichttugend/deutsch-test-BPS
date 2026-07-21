import { Category, ScoreRecord } from '../types';

interface HomeProps {
  onStart: (category: Category) => void;
  onMockTest: () => void;
  onPossessivartikel: () => void;
  onArtikel: () => void;
}

const categories: { id: Category; label: string; emoji: string; description: string; color: string }[] = [
  {
    id: 'leseverstehen',
    label: 'Leseverstehen',
    emoji: '📖',
    description: 'Stellenanzeigen und Texte über Arbeitsrecht verstehen',
    color: 'from-blue-500 to-blue-600',
  },
  {
    id: 'lueckentext',
    label: 'Lückentext',
    emoji: '✏️',
    description: 'Präpositionen, Konjunktionen und Artikel korrekt einsetzen',
    color: 'from-purple-500 to-purple-600',
  },
  {
    id: 'grammatik',
    label: 'Grammatik',
    emoji: '📝',
    description: 'Kasus, Verbkonjugation, Passiv und Konjunktiv II',
    color: 'from-indigo-500 to-indigo-600',
  },
  {
    id: 'wortschatz',
    label: 'Wortschatz',
    emoji: '📚',
    description: 'Synonyme, Antonyme und Bedeutungen im Kontext',
    color: 'from-teal-500 to-teal-600',
  },
  {
    id: 'rechtschreibung',
    label: 'Rechtschreibung',
    emoji: '🔤',
    description: 'ß/ss, ie/ei, Groß- und Kleinschreibung',
    color: 'from-orange-500 to-orange-600',
  },
];

const categoryLabels: Record<string, string> = {
  leseverstehen: 'Leseverstehen',
  lueckentext: 'Lückentext',
  grammatik: 'Grammatik',
  wortschatz: 'Wortschatz',
  rechtschreibung: 'Rechtschreibung',
  possessivartikel: 'Possessivartikel',
  artikel: 'Artikel (best./unbest.)',
  mocktest: 'Probetest',
};

export default function Home({ onStart, onMockTest, onPossessivartikel, onArtikel }: HomeProps) {
  const history: ScoreRecord[] = JSON.parse(localStorage.getItem('deutschTestHistory') || '[]');

  const getBestScore = (category: string) => {
    const records = history.filter(r => r.category === category);
    if (records.length === 0) return null;
    const best = records.reduce((prev, curr) =>
      curr.score / curr.total > prev.score / prev.total ? curr : prev
    );
    return best;
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center py-8">
          <div className="text-5xl mb-3">🇩🇪</div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">BPS Deutsch-Test</h1>
          <p className="text-gray-500 text-lg">Übungen für den Berufspsychologischen Service</p>
          <p className="text-gray-400 text-sm mt-1">Agentur für Arbeit · Bildungsgutschein</p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          {categories.map(cat => {
            const best = getBestScore(cat.id);
            const pct = best ? Math.round((best.score / best.total) * 100) : null;
            return (
              <button
                key={cat.id}
                onClick={() => onStart(cat.id)}
                className="bg-white rounded-2xl shadow hover:shadow-md transition-all duration-200 p-5 text-left hover:-translate-y-0.5 active:translate-y-0"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-2xl shadow`}>
                    {cat.emoji}
                  </div>
                  {pct !== null && (
                    <span className={`text-xs font-semibold px-2 py-1 rounded-full
                      ${pct >= 70 ? 'bg-green-100 text-green-700' : pct >= 50 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                      Bestleistung: {pct}%
                    </span>
                  )}
                </div>
                <h2 className="text-lg font-semibold text-gray-800 mb-1">{cat.label}</h2>
                <p className="text-sm text-gray-500">{cat.description}</p>
              </button>
            );
          })}

          {/* Mock Test Card */}
          <button
            onClick={onMockTest}
            className="bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl shadow hover:shadow-md transition-all duration-200 p-5 text-left hover:-translate-y-0.5 active:translate-y-0 sm:col-span-2"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center text-2xl shadow">
                ⏱️
              </div>
              <div>
                <h2 className="text-lg font-semibold text-white mb-1">Probetest</h2>
                <p className="text-sm text-indigo-100">20 Fragen aus allen Bereichen · 30 Minuten Zeitlimit</p>
              </div>
              <div className="ml-auto">
                {(() => {
                  const best = getBestScore('mocktest');
                  if (!best) return null;
                  const pct = Math.round((best.score / best.total) * 100);
                  return (
                    <span className="text-xs font-semibold px-2 py-1 rounded-full bg-white/20 text-white">
                      Bestleistung: {pct}%
                    </span>
                  );
                })()}
              </div>
            </div>
          </button>

          {/* Possessivartikel Card */}
          <button
            onClick={onPossessivartikel}
            className="bg-white rounded-2xl shadow hover:shadow-md transition-all duration-200 p-5 text-left hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center text-2xl shadow">
                🔑
              </div>
              {(() => {
                const best = getBestScore('possessivartikel');
                if (!best) return null;
                const pct = Math.round((best.score / best.total) * 100);
                return (
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full
                    ${pct >= 70 ? 'bg-green-100 text-green-700' : pct >= 50 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                    Bestleistung: {pct}%
                  </span>
                );
              })()}
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Possessivartikel</h2>
            <p className="text-sm text-gray-500">Lange Texte mit Lücken · Nom./Akk./Dat. im Kontext üben</p>
          </button>

          {/* Artikel Card */}
          <button
            onClick={onArtikel}
            className="bg-white rounded-2xl shadow hover:shadow-md transition-all duration-200 p-5 text-left hover:-translate-y-0.5 active:translate-y-0"
          >
            <div className="flex items-start justify-between mb-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center text-2xl shadow">
                📋
              </div>
              {(() => {
                const best = getBestScore('artikel');
                if (!best) return null;
                const pct = Math.round((best.score / best.total) * 100);
                return (
                  <span className={`text-xs font-semibold px-2 py-1 rounded-full
                    ${pct >= 70 ? 'bg-green-100 text-green-700' : pct >= 50 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
                    Bestleistung: {pct}%
                  </span>
                );
              })()}
            </div>
            <h2 className="text-lg font-semibold text-gray-800 mb-1">Bestimmte / unbestimmte Artikel</h2>
            <p className="text-sm text-gray-500">der/die/das · ein/eine · Nom./Akk./Dat./Gen. mit Genitivendungen</p>
          </button>
        </div>

        {/* Recent History */}
        {history.length > 0 && (
          <div className="bg-white rounded-2xl shadow p-5">
            <h3 className="font-semibold text-gray-700 mb-3">Letzte Übungen</h3>
            <div className="space-y-2">
              {history.slice(-5).reverse().map((record, index) => {
                const pct = Math.round((record.score / record.total) * 100);
                return (
                  <div key={index} className="flex items-center justify-between text-sm">
                    <span className="text-gray-700 font-medium">{categoryLabels[record.category] || record.category}</span>
                    <span className="text-gray-400">{new Date(record.date).toLocaleDateString('de-DE')}</span>
                    <span className={`font-semibold
                      ${pct >= 70 ? 'text-green-600' : pct >= 50 ? 'text-yellow-600' : 'text-red-600'}`}>
                      {record.score}/{record.total} ({pct}%)
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}

        <p className="text-center text-gray-400 text-xs mt-6 pb-4">
          Niveau B1–B2 · Viel Erfolg bei der Prüfung! 🍀
        </p>
      </div>
    </div>
  );
}
