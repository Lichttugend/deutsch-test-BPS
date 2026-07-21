export interface PossessivartikelChoice {
  text: string;
}

export interface PossessivartikelQuestion {
  id: string;
  placeholder: string; // e.g. "{1}"
  choices: string[];
  answer_index: number;
  case: 'Nominativ' | 'Akkusativ' | 'Dativ' | 'Genitiv';
  rule: string;
}

export interface PossessivartikelText {
  id: string;
  title: string;
  paragraphs: string[];
  questions: PossessivartikelQuestion[];
}
