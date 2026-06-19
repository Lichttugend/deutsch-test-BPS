import { ScoreRecord } from '../types';

interface ResultScreenProps {
  score: number;
  total: number;
  category: string;
  onHome: () => void;
  onRetry: () => void;
}

const categoryLabels: Record<string, string> = {
  leseverstehen: 'Leseverstehen',
  lueckentext: 'Lückentext',
  grammatik: 'Grammatik',
  wortschatz: 'Wortschatz',
  rechtschreibung: 'Rechtschreibung',
  mocktest: 'Probetest',
};

export default function ResultScreen({ score, total, category, onHome, onRetry }: ResultScreenProps) {
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

  const getColor = () => {
    if (percentage >= 70) return 'text-green-600';
    if (percentage >= 50) return 'text-yellow-600';
    return 'text-red-600';
  };

  const getBgColor = () => {
    if (percentage >= 70) return 'bg-green-50 border-green-200';
    if (percentage >= 50) return 'bg-yellow-50 border-yellow-200';
    return 'bg-red-50 border-red-200';
  };

  const getMessage = () => {
    if (percentage >= 70) return 'Ausgezeichnet! Sie haben sehr gut abgeschnitten.';
    if (percentage >= 50) return 'Gut gemacht! Mit etwas mehr Übung schaffen Sie es noch besser.';
    return 'Weiter üben! Wiederholen Sie die schwierigen Themen.';
  };

  const history: ScoreRecord[] = JSON.parse(localStorage.getItem('deutschTestHistory') || '[]');
  const recentHistory = history.slice(-5).reverse();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className={`bg-white rounded-2xl shadow-lg border-2 ${getBgColor()} p-8 text-center mb-6`}>
          <div className="text-6xl mb-4">
            {percentage >= 70 ? '🎉' : percentage >= 50 ? '👍' : '📚'}
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-1">Ergebnis</h2>
          <p className="text-gray-500 mb-6">{categoryLabels[category] || category}</p>

          <div className={`text-6xl font-bold ${getColor()} mb-2`}>
            {score}/{total}
          </div>
          <div className={`text-2xl font-semibold ${getColor()} mb-4`}>
            {percentage}%
          </div>

          <p className="text-gray-600">{getMessage()}</p>
        </div>

        <div className="flex gap-3 mb-6">
          <button
            onClick={onRetry}
            className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
          >
            Nochmal üben
          </button>
          <button
            onClick={onHome}
            className="flex-1 py-3 px-4 bg-white text-indigo-600 border-2 border-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
          >
            Zur Startseite
          </button>
        </div>

        {recentHistory.length > 0 && (
          <div className="bg-white rounded-2xl shadow p-4">
            <h3 className="font-semibold text-gray-700 mb-3">Letzte Ergebnisse</h3>
            <div className="space-y-2">
              {recentHistory.map((record, index) => {
                const pct = Math.round((record.score / record.total) * 100);
                const color = pct >= 70 ? 'text-green-600' : pct >= 50 ? 'text-yellow-600' : 'text-red-600';
                return (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{categoryLabels[record.category] || record.category}</span>
                    <span className="text-gray-400 text-xs">{new Date(record.date).toLocaleDateString('de-DE')}</span>
                    <span className={`font-semibold ${color}`}>{record.score}/{record.total} ({pct}%)</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
