export interface GerResult {
  level: string;
  subLevel?: string;
  kDL: string[];
  description: string;
}

interface Band {
  min: number;
  max: number;
  level: string;
  subLevel?: string;
  kDL: string[];
  description: string;
}

const BANDS: Band[] = [
  {
    min: 100, max: 120,
    level: 'C',
    kDL: [],
    description: 'ausreichend für die meisten beruflichen Tätigkeiten und Ausbildungen/Umschulungen/Qualifizierungen.',
  },
  {
    min: 90, max: 99,
    level: 'C',
    subLevel: 'unterer Bereich',
    kDL: [],
    description: 'ausreichend für sprachlich anspruchsvolle Ausbildungen/Umschulungen/Qualifizierungen (z.B. im kaufmännischen Bereich), insbesondere wenn Nicht-Muttersprachler im Unterricht angemessen berücksichtigt werden.',
  },
  {
    min: 75, max: 89,
    level: 'B2',
    kDL: ['K4'],
    description: 'ausreichend für Ausbildungen/Umschulungen/Qualifizierungen mit mittleren sprachlichen Anforderungen (z.B. im Elektrobereich), insbesondere wenn Nicht-Muttersprachler im Unterricht angemessen berücksichtigt werden.',
  },
  {
    min: 65, max: 74,
    level: 'B2',
    subLevel: 'unterer Bereich',
    kDL: ['K1', 'K3'],
    description: 'ausreichend für praktisch ausgerichtete Ausbildungen/Umschulungen/Qualifizierungen (z.B. im Metallbereich), insbesondere wenn Nicht-Muttersprachler im Unterricht angemessen berücksichtigt werden.',
  },
  {
    min: 54, max: 64,
    level: 'B1',
    kDL: [],
    description: 'ausreichend für sehr anschauliche, praktisch ausgerichtete Qualifizierungen, aber in der Regel noch nicht für Ausbildungen/Umschulungen.',
  },
  {
    min: 41, max: 53,
    level: 'A2',
    kDL: [],
    description: 'ausreichend für die Verständigung in einfachen, routinemäßigen Situationen (Familie, Einkaufen, Arbeit) sowie für sprachlich etwas anspruchsvollere Anlerntätigkeiten.',
  },
  {
    min: 20, max: 40,
    level: 'A2',
    subLevel: 'unterer Bereich',
    kDL: [],
    description: 'gering; ausreichend für Anlerntätigkeiten mit sehr niedrigen sprachlichen Anforderungen.',
  },
  {
    min: 0, max: 19,
    level: 'unter A2',
    kDL: [],
    description: 'sehr gering.',
  },
];

export function getGerNiveau(points: number): GerResult {
  const band = BANDS.find(b => points >= b.min && points <= b.max);
  if (!band) {
    return {
      level: 'unter A2',
      kDL: [],
      description: 'sehr gering.',
    };
  }
  return {
    level: band.level,
    subLevel: band.subLevel,
    kDL: band.kDL,
    description: band.description,
  };
}

/** 65点以上でAusbildung/Umschulungに十分とみなす */
export function isAusbildungSufficient(points: number): boolean {
  return points >= 65;
}
