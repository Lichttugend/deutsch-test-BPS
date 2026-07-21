export type GrammarCase = 'Nominativ' | 'Akkusativ' | 'Dativ' | 'Genitiv';

export interface ClozeQuestion {
  id: string;
  placeholder: string; // e.g. "{1}"
  choices: string[];
  answer_index: number;
  case: GrammarCase;
  rule: string;
  /** optional extra note shown in feedback (e.g. Genitiv noun ending change) */
  noun_note?: string;
}

export interface ClozeText {
  id: string;
  title: string;
  paragraphs: string[];
  questions: ClozeQuestion[];
}
