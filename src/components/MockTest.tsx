import { useState, useEffect, useCallback } from 'react';
import { Question } from '../types';

interface MockTestProps {
  questions: Question[];
  onFinish: (score: number, total: number) => void;
  onHome: () => void;
}

export default function MockTest({ questions, onFinish, onHome }: MockTestProps) {
  const DURATION = 30 * 60; // 30 minutes in seconds
  const [timeLeft, setTimeLeft] = useState(DURATION);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = useCallback(() => {
    if (submitted) return;
    setSubmitted(true);
    let score = 0;
    answers.forEach((answer, i) => {
      if (answer === questions[i].correctAnswer) score++;
    });
    onFinish(score, questions.length);
  }, [submitted, answers, questions, onFinish]);

  useEffect(() => {
    if (submitted) return;
    const timer = setInterval(() => {
      setTimeLeft(t => {
        if (t <= 1) {
          clearInterval(timer);
          handleSubmit();
          return 0;
        }
        return t - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted, handleSubmit]);

  const formatTime = (seconds: number) => {
    const m = Math.floor(seconds / 60).toString().padStart(2, '0');
    const s = (seconds % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  };

  const timerColor = timeLeft <= 300 ? 'text-red-600' : timeLeft <= 600 ? 'text-yellow-600' : 'text-indigo-600';

  const handleSelectAnswer = (optionIndex: number) => {
    const newAnswers = [...answers];
    newAnswers[currentIndex] = optionIndex;
    setAnswers(newAnswers);
  };

  const question = questions[currentIndex];
  const answeredCount = answers.filter(a => a !== null).length;

  return (
    <div className="min-h-screen bg-slate-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onHome}
            className="text-gray-500 hover:text-gray-700 text-sm flex items-center gap-1"
          >
            ← Abbrechen
          </button>
          <h1 className="text-lg font-bold text-gray-800">Probetest</h1>
          <div className={`text-2xl font-bold font-mono ${timerColor}`}>
            {formatTime(timeLeft)}
          </div>
        </div>

        {/* Progress overview */}
        <div className="bg-white rounded-xl shadow p-3 mb-4">
          <div className="flex items-center justify-between text-sm mb-2">
            <span className="text-gray-500">Beantwortet: {answeredCount}/{questions.length}</span>
            <span className="text-gray-500">Frage {currentIndex + 1} von {questions.length}</span>
          </div>
          <div className="flex gap-1 flex-wrap">
            {questions.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-8 h-8 rounded text-xs font-semibold transition-colors
                  ${i === currentIndex ? 'bg-indigo-600 text-white' :
                    answers[i] !== null ? 'bg-indigo-100 text-indigo-700' :
                    'bg-gray-100 text-gray-500 hover:bg-gray-200'}`}
              >
                {i + 1}
              </button>
            ))}
          </div>
        </div>

        {/* Question */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-4">
          <div className="text-xs text-gray-400 uppercase tracking-wide mb-3">
            Frage {currentIndex + 1}
          </div>

          {question.passage && (
            <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-lg mb-5 text-sm text-gray-700 leading-relaxed">
              <p className="font-semibold text-blue-700 mb-2">Lesetext:</p>
              <p>{question.passage}</p>
            </div>
          )}

          <p className="text-gray-800 font-medium text-lg mb-5">{question.text}</p>

          <div className="space-y-3">
            {question.options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectAnswer(index)}
                className={`w-full text-left p-4 rounded-xl border-2 transition-all duration-150
                  ${answers[currentIndex] === index
                    ? 'border-indigo-500 bg-indigo-50 text-indigo-800'
                    : 'border-gray-200 bg-white hover:border-indigo-300 hover:bg-indigo-50 cursor-pointer'}`}
              >
                <span className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold flex-shrink-0
                    ${answers[currentIndex] === index ? 'border-indigo-500 bg-indigo-500 text-white' : 'border-gray-300 text-gray-500'}`}>
                    {answers[currentIndex] === index ? '●' : String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-3">
          <button
            onClick={() => setCurrentIndex(i => Math.max(0, i - 1))}
            disabled={currentIndex === 0}
            className="flex-1 py-3 bg-white text-gray-700 border border-gray-200 rounded-xl font-semibold hover:bg-gray-50 transition-colors disabled:opacity-40"
          >
            ← Zurück
          </button>
          {currentIndex < questions.length - 1 ? (
            <button
              onClick={() => setCurrentIndex(i => i + 1)}
              className="flex-1 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
            >
              Weiter →
            </button>
          ) : (
            <button
              onClick={handleSubmit}
              className="flex-1 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition-colors"
            >
              Test abgeben ✓
            </button>
          )}
        </div>

        {answeredCount === questions.length && (
          <div className="mt-3 text-center">
            <button
              onClick={handleSubmit}
              className="text-green-700 text-sm underline hover:no-underline"
            >
              Alle Fragen beantwortet – Test jetzt abgeben
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
