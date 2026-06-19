import { Question } from '../types';

export const rechtschreibungQuestions: Question[] = [
  {
    id: 'rs-01',
    category: 'rechtschreibung',
    text: 'Welches Wort ist richtig geschrieben?',
    options: ['Straße', 'Strasse', 'Strase', 'Straaße'],
    correctAnswer: 0,
    explanation: '"Straße" wird mit ß geschrieben, da der vorangehende Vokal lang ist (Straa-ße). Nach kurzem Vokal schreibt man "ss" (z.B. "Klasse").'
  },
  {
    id: 'rs-02',
    category: 'rechtschreibung',
    text: 'Welche Schreibweise ist korrekt?',
    options: ['das Fluss', 'der Flus', 'der Fluss', 'der Fluß'],
    correctAnswer: 2,
    explanation: '"Fluss" wird mit "ss" geschrieben, weil das "u" kurz gesprochen wird. Nach der Rechtschreibreform von 1996 wird "ß" nur noch nach langen Vokalen und Diphthongen verwendet.'
  },
  {
    id: 'rs-03',
    category: 'rechtschreibung',
    text: 'Welches Wort ist richtig geschrieben?',
    options: ['Wiederholen', 'wiederholen', 'Wieder holen', 'wieder holen'],
    correctAnswer: 1,
    explanation: '"wiederholen" (= etwas wiederholt tun) wird zusammengeschrieben und kleingeschrieben, da es kein Substantiv ist. Aber: "wieder holen" (= nochmals holen) wäre getrennt.'
  },
  {
    id: 'rs-04',
    category: 'rechtschreibung',
    text: 'Wie schreibt man es richtig? "Er hat das nicht ___ sehen wollen."',
    options: ['wahr', 'war', 'warr', 'wahr'],
    correctAnswer: 0,
    explanation: '"Wahrhaben wollen" wird mit "wahr" geschrieben (von "wahr" = der Realität entsprechend). "War" ist die Vergangenheitsform von "sein".'
  },
  {
    id: 'rs-05',
    category: 'rechtschreibung',
    text: 'Welche Schreibweise ist korrekt?',
    options: ['Ich schreibe dir', 'ich schreibe dir', 'Ich Schreibe dir', 'ich Schreibe dir'],
    correctAnswer: 0,
    explanation: 'Am Satzanfang wird groß geschrieben: "Ich". Das Verb "schreibe" wird kleingeschrieben. Das Personalpronomen "dir" steht in der Satzmitte und wird kleingeschrieben.'
  },
  {
    id: 'rs-06',
    category: 'rechtschreibung',
    text: 'Welches Wort wird großgeschrieben?',
    options: ['schnell fahren', 'das Schnellfahren', 'schnellfahren', 'Schnell fahren'],
    correctAnswer: 1,
    explanation: 'Substantivierte Infinitive werden großgeschrieben und mit Artikel verwendet: "das Schnellfahren". Als Verb wird kleingeschrieben: "schnell fahren".'
  },
  {
    id: 'rs-07',
    category: 'rechtschreibung',
    text: 'Welche Schreibweise ist richtig?',
    options: ['Sie haben Recht', 'Sie haben recht', 'sie haben Recht', 'sie haben recht'],
    correctAnswer: 0,
    explanation: 'In der Wendung "Recht haben" wird "Recht" großgeschrieben, da es sich um ein Substantiv handelt. Außerdem beginnt der Satz mit "Sie" (großgeschrieben).'
  },
  {
    id: 'rs-08',
    category: 'rechtschreibung',
    text: 'Welches Wort ist falsch geschrieben?',
    options: ['Fremdsprache', 'Muttersprache', 'Berufssprache', 'Haussprache'],
    correctAnswer: 3,
    explanation: '"Haussprache" ist kein standarddeutsches Wort. Die korrekte Bezeichnung wäre "Umgangssprache" oder "Familiensprache". Alle anderen sind korrekte Komposita.'
  },
  {
    id: 'rs-09',
    category: 'rechtschreibung',
    text: 'Welche Schreibweise des Wortes ist richtig?',
    options: ['Verantwortung', 'Verantwordung', 'Verantwortunk', 'Verantwortuing'],
    correctAnswer: 0,
    explanation: '"Verantwortung" ist die korrekte Schreibweise. Das Wort kommt von "verantworten" + Suffix "-ung".'
  },
  {
    id: 'rs-10',
    category: 'rechtschreibung',
    text: 'Welche Schreibweise ist korrekt?',
    options: ['der Maß', 'das Maß', 'die Maß', 'das Mass'],
    correctAnswer: 1,
    explanation: '"Das Maß" ist korrekt – es ist sächlichen Geschlechts (Neutrum). Es wird mit "ß" geschrieben, da der Vokal lang ist.'
  },
  {
    id: 'rs-11',
    category: 'rechtschreibung',
    text: 'Wie wird "ie" oder "ei" verwendet? "Das K_nd sp_lt im Garten."',
    options: ['ie / ei', 'ei / ie', 'ei / ei', 'ie / ie'],
    correctAnswer: 0,
    explanation: '"Kind" wird mit "i" (kurz) geschrieben, aber "spielt" enthält "ie" (langes i). Achtung: Die Frage zeigt "K_nd" = "Kind" (kurzes i, kein ie) und "sp_lt" = "spielt" (ie).'
  },
  {
    id: 'rs-12',
    category: 'rechtschreibung',
    text: 'Welche Schreibweise ist korrekt?',
    options: ['grössere', 'größere', 'groeßere', 'grossere'],
    correctAnswer: 1,
    explanation: '"Größere" ist korrekt. Das "ß" wird nach dem langen "ö" verwendet (Komparativ von "groß"). Nach kurzem Vokal würde "ss" stehen.'
  },
];
