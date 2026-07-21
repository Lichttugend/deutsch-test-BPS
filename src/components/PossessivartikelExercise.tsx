import { useState, useMemo } from 'react';
import { PossessivartikelText } from '../types/possessivartikel';

interface Props {
  texts: PossessivartikelText[];
  onFinish: (score: number, total: number) => void;
  onHome: () => void;
}

interface AnswerState {
  [questionId: string]: number | null; // selected_index or null
}

interface FeedbackItem {
  questionId: string;
  correct: boolean;
  correctAnswer: string;
  selectedAnswer: string;
  rule: string;
  case: string;
}

// テキスト本文の {n} を React要素の配列に変換する
function renderParagraph(
  paragraph: string,
  placeholderMap: Map<string, { questionId: string; choices: string[] }>,
  answers: AnswerState,
  feedback: FeedbackItem[] | null,
  onSelect: (questionId: string, index: number) => void,
) {
  const parts = paragraph.split(/(\{\d+\})/g);
  return parts.map((part, i) => {
    const match = part.match(/^\{(\d+)\}$/);
    if (!match) return <span key={i}>{part}</span>;

    const placeholder = part;
    const info = placeholderMap.get(placeholder);
    if (!info) return <span key={i}>{part}</span>;

    const { questionId, choices } = info;
    const selected = answers[questionId];
    const fb = feedback?.find(f => f.questionId === questionId);

    return (
      <span key={i} className="inline-flex items-center mx-1 align-middle">
        <InlineSelect
          choices={choices}
          selected={selected}
          feedback={fb ?? null}
          onSelect={(idx) => onSelect(questionId, idx)}
          disabled={feedback !== null}
        />
      </span>
    );
  });
}

interface InlineSelectProps {
  choices: string[];
  selected: number | null;
  feedback: FeedbackItem | null;
  onSelect: (index: number) => void;
  disabled: boolean;
}

function InlineSelect({ choices, selected, feedback, onSelect, disabled }: InlineSelectProps) {
  const [open, setOpen] = useState(false);

  const borderClass = () => {
    if (feedback) {
      return feedback.correct
        ? 'border-green-500 bg-green-50 text-green-800'
        : 'border-red-500 bg-red-50 text-red-800';
    }
    if (selected !== null) return 'border-indigo-500 bg-indigo-50 text-indigo-800';
    return 'border-gray-300 bg-white text-gray-400';
  };

  const icon = feedback
    ? feedback.correct ? '✓' : '✗'
    : null;

  return (
    <span className="relative inline-block">
      <button
        type="button"
        disabled={disabled}
        onClick={() => !disabled && setOpen(o => !o)}
        className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-lg border-2 text-sm font-semibold transition-colors min-w-[80px] justify-between ${borderClass()}`}
      >
        <span>{selected !== null ? choices[selected] : '___'}</span>
        {icon && <span>{icon}</span>}
        {!disabled && <span className="text-xs opacity-50">▾</span>}
      </button>

      {open && !disabled && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute z-20 top-full left-0 mt-1 bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden min-w-[120px]">
            {choices.map((choice, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => { onSelect(idx); setOpen(false); }}
                className={`w-full text-left px-4 py-2 text-sm hover:bg-indigo-50 hover:text-indigo-700 transition-colors
                  ${selected === idx ? 'bg-indigo-100 text-indigo-800 font-semibold' : 'text-gray-700'}`}
              >
                {choice}
              </button>
            ))}
          </div>
        </>
      )}
    </span>
  );
}

export default function PossessivartikelExercise({ texts, onFinish, onHome }: Props) {
  const [textIndex, setTextIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerState>({});
  const [feedback, setFeedback] = useState<FeedbackItem[] | null>(null);

  const currentText = texts[textIndex];

  // placeholder → { questionId, choices } のマップを構築
  const placeholderMap = useMemo(() => {
    const map = new Map<string, { questionId: string; choices: string[] }>();
    currentText.questions.forEach(q => {
      map.set(q.placeholder, { questionId: q.id, choices: q.choices });
    });
    return map;
  }, [currentText]);

  const totalQuestions = currentText.questions.length;
  const answeredCount = Object.values(answers).filter(v => v !== null).length;
  const allAnswered = answeredCount === totalQuestions;

  const score = feedback ? feedback.filter(f => f.correct).length : 0;

  const handleSelect = (questionId: string, index: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: index }));
  };

  const handleSubmit = () => {
    const result: FeedbackItem[] = currentText.questions.map(q => {
      const selected = answers[q.id] ?? -1;
      return {
        questionId: q.id,
        correct: selected === q.answer_index,
        correctAnswer: q.choices[q.answer_index],
        selectedAnswer: selected >= 0 ? q.choices[selected] : '',
        rule: q.rule,
        case: q.case,
      };
    });
    setFeedback(result);
  };

  const handleNext = () => {
    const nextIndex = textIndex + 1;
    if (nextIndex < texts.length) {
      setTextIndex(nextIndex);
      setAnswers({});
      setFeedback(null);
    } else {
      // 全テキスト完了 → スコアを集計して終了
      onFinish(score, totalQuestions);
    }
  };

  const handleRetry = () => {
    setAnswers({});
    setFeedback(null);
  };

  return (
    <div className="min-h-screen bg-slate-100 p-4">
      <div className="max-w-2xl mx-auto">

        {/* ヘッダー */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onHome}
            className="text-gray-500 hover:text-gray-700 transition-colors text-sm flex items-center gap-1"
          >
            ← Zurück
          </button>
          <div className="text-center">
            <p className="text-xs text-gray-400 font-medium uppercase tracking-wide">Possessivartikel</p>
            <p className="text-sm text-gray-600 font-semibold">
              Text {textIndex + 1} / {texts.length}
            </p>
          </div>
          {feedback ? (
            <span className={`text-sm font-bold px-3 py-1 rounded-full
              ${score / totalQuestions >= 0.7 ? 'bg-green-100 text-green-700' : score / totalQuestions >= 0.5 ? 'bg-yellow-100 text-yellow-700' : 'bg-red-100 text-red-700'}`}>
              {score}/{totalQuestions}
            </span>
          ) : (
            <span className="text-sm text-gray-400">
              {answeredCount}/{totalQuestions} beantwortet
            </span>
          )}
        </div>

        {/* テキストカード */}
        <div className="bg-white rounded-2xl shadow p-6 mb-4">
          <h2 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-2xl">📄</span> {currentText.title}
          </h2>

          <div className="space-y-4 text-gray-800 leading-relaxed text-[15px]">
            {currentText.paragraphs.map((para, i) => (
              <p key={i}>
                {renderParagraph(para, placeholderMap, answers, feedback, handleSelect)}
              </p>
            ))}
          </div>
        </div>

        {/* フィードバック詳細 */}
        {feedback && (
          <div className="bg-white rounded-2xl shadow p-5 mb-4 space-y-3">
            <h3 className="font-bold text-gray-700 mb-1">Erklärungen</h3>
            {feedback.map((fb) => {
              const q = currentText.questions.find(q => q.id === fb.questionId)!;
              return (
                <div
                  key={fb.questionId}
                  className={`rounded-xl px-4 py-3 border ${fb.correct ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
                >
                  <div className="flex items-center gap-2 mb-1">
                    <span>{fb.correct ? '✅' : '❌'}</span>
                    <span className="font-semibold text-sm text-gray-700">{q.placeholder}</span>
                    {!fb.correct && (
                      <span className="text-sm">
                        <span className="text-red-600 line-through mr-1">{fb.selectedAnswer}</span>
                        <span className="text-green-700 font-bold">→ {fb.correctAnswer}</span>
                      </span>
                    )}
                    <span className={`ml-auto text-xs px-2 py-0.5 rounded-full font-medium
                      ${fb.case === 'Nominativ' ? 'bg-blue-100 text-blue-700' :
                        fb.case === 'Akkusativ' ? 'bg-orange-100 text-orange-700' :
                        fb.case === 'Dativ' ? 'bg-purple-100 text-purple-700' :
                        'bg-gray-100 text-gray-700'}`}>
                      {fb.case}
                    </span>
                  </div>
                  {!fb.correct && (
                    <p className="text-xs text-gray-600 mt-1 ml-6">
                      📌 {fb.rule}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* ボタン */}
        <div className="flex gap-3">
          {!feedback ? (
            <>
              <button
                onClick={handleRetry}
                className="px-4 py-3 bg-white text-gray-600 border-2 border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors"
              >
                Zurücksetzen
              </button>
              <button
                onClick={handleSubmit}
                disabled={!allAnswered}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold transition-colors
                  ${allAnswered
                    ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
              >
                Auswerten ({answeredCount}/{totalQuestions})
              </button>
            </>
          ) : (
            <>
              <button
                onClick={handleRetry}
                className="px-4 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-xl font-semibold hover:bg-indigo-50 transition-colors"
              >
                Nochmal
              </button>
              <button
                onClick={handleNext}
                className="flex-1 py-3 px-4 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
              >
                {textIndex + 1 < texts.length ? 'Nächster Text →' : 'Fertig 🎉'}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
