import { Question } from '../types';

export const grammatikQuestions: Question[] = [
  {
    id: 'gr-01',
    category: 'grammatik',
    text: 'Das Buch wird von ___ Schüler gelesen.',
    options: ['dem', 'den', 'des', 'der'],
    correctAnswer: 0,
    explanation: '"Von" verlangt den Dativ. "Der Schüler" (maskulin) wird im Dativ zu "dem Schüler". Also: "von dem Schüler".'
  },
  {
    id: 'gr-02',
    category: 'grammatik',
    text: 'Welche Form ist korrekt? "Wenn ich mehr Zeit ___, würde ich Sport treiben."',
    options: ['hätte', 'habe', 'hatte', 'haben'],
    correctAnswer: 0,
    explanation: 'Der Konjunktiv II wird für irreale Bedingungen verwendet. "Hätte" ist der Konjunktiv II von "haben" und drückt aus, dass die Bedingung nicht erfüllt ist.'
  },
  {
    id: 'gr-03',
    category: 'grammatik',
    text: 'Er hilft ___ alten Frau.',
    options: ['die', 'der', 'den', 'das'],
    correctAnswer: 1,
    explanation: '"Helfen" verlangt den Dativ. "Die alte Frau" (feminin) wird im Dativ zu "der alten Frau". Also: "Er hilft der alten Frau."'
  },
  {
    id: 'gr-04',
    category: 'grammatik',
    text: 'Das Auto ___ gestern repariert.',
    options: ['ist', 'wird', 'wurde', 'hat'],
    correctAnswer: 2,
    explanation: '"Gestern" zeigt an, dass es sich um Vergangenheit handelt. Das Passiv in der Vergangenheit (Präteritum) lautet: "wurde ... repariert".'
  },
  {
    id: 'gr-05',
    category: 'grammatik',
    text: 'Wegen ___ schlechten Wetters blieben wir zu Hause.',
    options: ['dem', 'das', 'des', 'den'],
    correctAnswer: 2,
    explanation: '"Wegen" verlangt den Genitiv. "Das schlechte Wetter" wird im Genitiv zu "des schlechten Wetters".'
  },
  {
    id: 'gr-06',
    category: 'grammatik',
    text: 'Sie hat gesagt, dass sie morgen ___ kommt.',
    options: ['kommen', 'kommt', 'kam', 'käme'],
    correctAnswer: 1,
    explanation: 'In einem indirekten Satz mit "dass" steht das Verb am Ende in der konjugierten Form. Bei "sie" (3. Person Singular) lautet die Form "kommt".'
  },
  {
    id: 'gr-07',
    category: 'grammatik',
    text: 'Trotz ___ Müdigkeit arbeitete er weiter.',
    options: ['seine', 'seiner', 'seinem', 'seinen'],
    correctAnswer: 1,
    explanation: '"Trotz" verlangt den Genitiv. "Seine Müdigkeit" wird im Genitiv Singular maskulin zu "seiner Müdigkeit".'
  },
  {
    id: 'gr-08',
    category: 'grammatik',
    text: 'Welche Passivform ist korrekt? "Das Formular ___ ausgefüllt werden."',
    options: ['muss', 'soll', 'müsst', 'musste'],
    correctAnswer: 0,
    explanation: 'Das Modalverb "müssen" in der 3. Person Singular Präsens lautet "muss". "Das Formular muss ausgefüllt werden" ist die korrekte Passivkonstruktion mit Modalverb.'
  },
  {
    id: 'gr-09',
    category: 'grammatik',
    text: 'Ich erinnere mich nicht ___ seinen Namen.',
    options: ['an', 'auf', 'über', 'von'],
    correctAnswer: 0,
    explanation: '"Sich erinnern an" ist die feste Präpositionalverbindung. "Ich erinnere mich an seinen Namen" ist korrekt.'
  },
  {
    id: 'gr-10',
    category: 'grammatik',
    text: 'Die Kinder spielen im Garten, ___ ihre Eltern arbeiten.',
    options: ['weil', 'während', 'obwohl', 'damit'],
    correctAnswer: 1,
    explanation: '"Während" drückt Gleichzeitigkeit aus. Beide Handlungen (spielen und arbeiten) finden zur gleichen Zeit statt.'
  },
  {
    id: 'gr-11',
    category: 'grammatik',
    text: 'Er ist Lehrer, ___ er schon immer werden wollte.',
    options: ['den', 'was', 'das', 'der'],
    correctAnswer: 1,
    explanation: '"Was" leitet einen weiterführenden Relativsatz ein, der sich auf einen ganzen Satz oder ein Pronomen bezieht. "Das, was er werden wollte" → "was er werden wollte".'
  },
  {
    id: 'gr-12',
    category: 'grammatik',
    text: 'Welche Form des Konjunktiv II ist korrekt? "Wenn ich du ___, würde ich mehr lernen."',
    options: ['war', 'wäre', 'bin', 'sei'],
    correctAnswer: 1,
    explanation: '"Wäre" ist der Konjunktiv II von "sein". Er wird bei irrealen Bedingungen verwendet: "Wenn ich du wäre" = ich bin nicht du, aber angenommen...'
  },
];
