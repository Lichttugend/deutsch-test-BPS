import { ScoreRecord } from '../types';
import { getGerNiveau, isAusbildungSufficient } from '../utils/gerNiveau';

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

  // BPSテストは120点満点に換算してGERレベルを判定
  const bpsPoints = total > 0 ? Math.round((score / total) * 120) : 0;
  const ger = getGerNiveau(bpsPoints);
  const sufficient = isAusbildungSufficient(bpsPoints);
  const isMockTest = category === 'mocktest';

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

  const getLevelColor = () => {
    if (bpsPoints >= 65) return 'text-green-700 bg-green-100 border-green-300';
    if (bpsPoints >= 54) return 'text-yellow-700 bg-yellow-100 border-yellow-300';
    return 'text-red-700 bg-red-100 border-red-300';
  };

  const history: ScoreRecord[] = JSON.parse(localStorage.getItem('deutschTestHistory') || '[]');
  const recentHistory = history.slice(-5).reverse();

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-4">

        {/* スコアカード */}
        <div className={`bg-white rounded-2xl shadow-lg border-2 ${getBgColor()} p-8 text-center`}>
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

        {/* GERレベル判定カード（模擬テスト時のみ表示） */}
        {isMockTest && (
          <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-6">
            <h3 className="font-bold text-gray-800 text-lg mb-1 flex items-center gap-2">
              <span>🎯</span> GER-Niveau Einschätzung
            </h3>
            <p className="text-xs text-gray-400 mb-4">
              Hochrechnung auf 120 Punkte (BPS-Skala): <strong>{bpsPoints} Pkt.</strong>
            </p>

            <div className={`rounded-xl border-2 px-5 py-4 mb-4 ${getLevelColor()}`}>
              <div className="flex items-baseline gap-2 mb-1">
                <span className="text-3xl font-extrabold">{ger.level}</span>
                {ger.subLevel && (
                  <span className="text-sm font-medium opacity-80">({ger.subLevel})</span>
                )}
              </div>
              {ger.kDL.length > 0 && (
                <p className="text-sm font-semibold mb-2">
                  Mögl. K-DL: {ger.kDL.join(', ')}
                </p>
              )}
              <p className="text-sm leading-relaxed">
                Die Deutschkenntnisse sind {ger.description}
              </p>
            </div>

            {/* Ausbildung/Umschulung判定 */}
            {sufficient ? (
              <div className="flex items-start gap-3 bg-green-50 border border-green-200 rounded-xl px-4 py-3 text-sm text-green-800">
                <span className="text-lg">✅</span>
                <p>
                  Ihr Sprachniveau ist <strong>grundsätzlich ausreichend</strong> für eine Ausbildung oder Umschulung.
                </p>
              </div>
            ) : (
              <div className="flex items-start gap-3 bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-800">
                <span className="text-lg">⚠️</span>
                <p>
                  Dieses Sprachniveau ist <strong>in der Regel nicht ausreichend</strong> für eine Ausbildung oder Umschulung.
                  Weitere Sprachkurse werden empfohlen.
                </p>
              </div>
            )}
          </div>
        )}

        {/* ボタン */}
        <div className="flex gap-3">
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

        {/* 履歴 */}
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
