import { useState } from 'react';
import { Question } from '../types';
import ProgressBar from './ProgressBar';

interface ExerciseProps {
  questions: Question[];
  categoryLabel: string;
  onFinish: (score: number, total: number) => void;
  onHome: () => void;
}

export default function Exercise({ questions, categoryLabel, onFinish, onHome }: ExerciseProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answered, setAnswered] = useState(false);
  const [score, setScore] = useState(0);

  const question = questions[currentIndex];

  const handleAnswer = (optionIndex: number) => {
    if (answered) return;
    setSelectedAnswer(optionIndex);
    setAnswered(true);
    if (optionIndex === question.correctAnswer) {
      setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex + 1 >= questions.length) {
      onFinish(score, questions.length);
      return;
    }
    setCurrentIndex(i => i + 1);
    setSelectedAnswer(null);
    setAnswered(false);
  };

  const getOptionClass = (index: number) => {
    const base = 'w-full text-left p-4 rounded-xl border-2 transition-all duration-200 ';
    if (!answered) {
      return base + 'border-gray-200 bg-white hover:border-indigo-400 hover:bg-indigo-50 cursor-pointer';
    }
    if (index === question.correctAnswer) {
      return base + 'border-green-500 bg-green-50 text-green-800';
    }
    if (index === selectedAnswer && index !== question.correctAnswer) {
      return base + 'border-red-500 bg-red-50 text-red-800';
    }
    return base + 'border-gray-200 bg-gray-50 text-gray-400';
  };

  const isCorrect = selectedAnswer === question.correctAnswer;

  return (
    <div className="min-h-screen bg-slate-100 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <button
            onClick={onHome}
            className="text-gray-500 hover:text-gray-700 flex items-center gap-1 text-sm"
          >
            ← Zurück
          </button>
          <h1 className="text-lg font-semibold text-gray-800">{categoryLabel}</h1>
          <div className="text-sm font-semibold text-indigo-600">
            {score} Punkte
          </div>
        </div>

        {/* Progress */}
        <div className="mb-6">
          <ProgressBar current={currentIndex + 1} total={questions.length} />
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-2xl shadow-md p-6 mb-4">
          {/* Passage for Leseverstehen */}
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
                className={getOptionClass(index)}
                onClick={() => handleAnswer(index)}
                disabled={answered}
              >
                <span className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-full border-2 flex items-center justify-center text-sm font-bold flex-shrink-0
                    ${answered && index === question.correctAnswer ? 'border-green-500 bg-green-500 text-white' :
                      answered && index === selectedAnswer && index !== question.correctAnswer ? 'border-red-500 bg-red-500 text-white' :
                      'border-gray-300 text-gray-500'}`}>
                    {answered && index === question.correctAnswer ? '✓' :
                     answered && index === selectedAnswer && index !== question.correctAnswer ? '✗' :
                     String.fromCharCode(65 + index)}
                  </span>
                  <span>{option}</span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Feedback */}
        {answered && (
          <div className={`rounded-xl p-4 mb-4 ${isCorrect ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <p className={`font-semibold mb-1 ${isCorrect ? 'text-green-700' : 'text-red-700'}`}>
              {isCorrect ? '✓ Richtig!' : '✗ Leider falsch.'}
            </p>
            <p className="text-sm text-gray-700">{question.explanation}</p>
          </div>
        )}

        {/* Next Button */}
        {answered && (
          <button
            onClick={handleNext}
            className="w-full py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition-colors"
          >
            {currentIndex + 1 >= questions.length ? 'Ergebnisse anzeigen' : 'Nächste Frage →'}
          </button>
        )}
      </div>
    </div>
  );
}
