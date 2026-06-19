export interface Question {
  id: string;
  category: Category;
  text: string;
  options: string[];
  correctAnswer: number; // index into options
  explanation: string;
  passage?: string; // for Leseverstehen
}

export type Category = 'leseverstehen' | 'lueckentext' | 'grammatik' | 'wortschatz' | 'rechtschreibung';

export interface ScoreRecord {
  date: string;
  category: string;
  score: number;
  total: number;
}
