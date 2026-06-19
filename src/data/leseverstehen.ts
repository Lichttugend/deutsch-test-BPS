import { Question } from '../types';

export const leseverstehenQuestions: Question[] = [
  {
    id: 'lv-01',
    category: 'leseverstehen',
    passage: `Stellenanzeige: Buchhalter/in (m/w/d) gesucht

Wir sind ein mittelständisches Unternehmen im Bereich Maschinenbau und suchen ab sofort eine/n erfahrene/n Buchhalter/in in Vollzeit. Zu Ihren Aufgaben gehören die selbstständige Bearbeitung der laufenden Buchhaltung, die Erstellung von Monats- und Jahresabschlüssen sowie die Kommunikation mit dem Steuerberater. Voraussetzung ist eine abgeschlossene kaufmännische Ausbildung und mindestens drei Jahre Berufserfahrung in der Buchhaltung. Kenntnisse in DATEV sind von Vorteil. Wir bieten eine leistungsgerechte Vergütung und flexible Arbeitszeiten.`,
    text: 'Was ist laut der Stellenanzeige eine Voraussetzung für die Bewerbung?',
    options: [
      'Mindestens drei Jahre Berufserfahrung in der Buchhaltung',
      'Kenntnisse in DATEV',
      'Ein abgeschlossenes Studium der Betriebswirtschaft',
      'Erfahrung im Maschinenbau'
    ],
    correctAnswer: 0,
    explanation: 'Im Text steht: "Voraussetzung ist eine abgeschlossene kaufmännische Ausbildung und mindestens drei Jahre Berufserfahrung in der Buchhaltung." DATEV-Kenntnisse sind nur "von Vorteil", also keine Pflicht.'
  },
  {
    id: 'lv-02',
    category: 'leseverstehen',
    passage: `Stellenanzeige: Buchhalter/in (m/w/d) gesucht

Wir sind ein mittelständisches Unternehmen im Bereich Maschinenbau und suchen ab sofort eine/n erfahrene/n Buchhalter/in in Vollzeit. Zu Ihren Aufgaben gehören die selbstständige Bearbeitung der laufenden Buchhaltung, die Erstellung von Monats- und Jahresabschlüssen sowie die Kommunikation mit dem Steuerberater. Voraussetzung ist eine abgeschlossene kaufmännische Ausbildung und mindestens drei Jahre Berufserfahrung in der Buchhaltung. Kenntnisse in DATEV sind von Vorteil. Wir bieten eine leistungsgerechte Vergütung und flexible Arbeitszeiten.`,
    text: 'Welches Benefit bietet das Unternehmen an?',
    options: [
      'Homeoffice-Möglichkeit',
      'Flexible Arbeitszeiten',
      'Firmenwagen',
      'Betriebliche Altersvorsorge'
    ],
    correctAnswer: 1,
    explanation: 'Im Text wird explizit "flexible Arbeitszeiten" als Angebot des Unternehmens genannt. Die anderen Optionen werden nicht erwähnt.'
  },
  {
    id: 'lv-03',
    category: 'leseverstehen',
    passage: `Information zur Krankenversicherung

In Deutschland besteht eine gesetzliche Krankenversicherungspflicht. Arbeitnehmer, deren Bruttolohn die Jahresarbeitsentgeltgrenze (Versicherungspflichtgrenze) nicht überschreitet, sind automatisch in der gesetzlichen Krankenversicherung (GKV) pflichtversichert. Die Beiträge werden je zur Hälfte vom Arbeitnehmer und vom Arbeitgeber getragen. Der allgemeine Beitragssatz beträgt 14,6 Prozent des Bruttoeinkommens. Zusätzlich erheben die Kassen einen kassenindividuellen Zusatzbeitrag.`,
    text: 'Wer zahlt die Krankenversicherungsbeiträge?',
    options: [
      'Nur der Arbeitnehmer',
      'Nur der Arbeitgeber',
      'Arbeitnehmer und Arbeitgeber je zur Hälfte',
      'Der Staat übernimmt den Beitrag vollständig'
    ],
    correctAnswer: 2,
    explanation: 'Der Text besagt eindeutig: "Die Beiträge werden je zur Hälfte vom Arbeitnehmer und vom Arbeitgeber getragen."'
  },
  {
    id: 'lv-04',
    category: 'leseverstehen',
    passage: `Information zur Krankenversicherung

In Deutschland besteht eine gesetzliche Krankenversicherungspflicht. Arbeitnehmer, deren Bruttolohn die Jahresarbeitsentgeltgrenze (Versicherungspflichtgrenze) nicht überschreitet, sind automatisch in der gesetzlichen Krankenversicherung (GKV) pflichtversichert. Die Beiträge werden je zur Hälfte vom Arbeitnehmer und vom Arbeitgeber getragen. Der allgemeine Beitragssatz beträgt 14,6 Prozent des Bruttoeinkommens. Zusätzlich erheben die Kassen einen kassenindividuellen Zusatzbeitrag.`,
    text: 'Wie hoch ist der allgemeine Beitragssatz zur gesetzlichen Krankenversicherung?',
    options: [
      '7,3 Prozent',
      '14,6 Prozent',
      '18,6 Prozent',
      '20,0 Prozent'
    ],
    correctAnswer: 1,
    explanation: 'Im Text steht: "Der allgemeine Beitragssatz beträgt 14,6 Prozent des Bruttoeinkommens."'
  },
  {
    id: 'lv-05',
    category: 'leseverstehen',
    passage: `Aushang am schwarzen Brett: Betriebsversammlung

Liebe Kolleginnen und Kollegen,

wir laden Sie herzlich zur nächsten ordentlichen Betriebsversammlung ein. Diese findet am Donnerstag, den 15. Februar, um 14:00 Uhr in der Kantine statt. Auf der Tagesordnung stehen folgende Punkte: Bericht des Betriebsrats, aktuelle Tarifverhandlungen und Arbeitszeitregelung. Die Teilnahme gilt als Arbeitszeit. Bitte informieren Sie Ihre Vorgesetzte oder Ihren Vorgesetzten, damit die Abwesenheit am Arbeitsplatz organisiert werden kann.`,
    text: 'Was gilt für die Zeit der Betriebsversammlung?',
    options: [
      'Sie wird als Urlaub gewertet',
      'Sie wird als Arbeitszeit gewertet',
      'Sie findet in der Freizeit statt',
      'Es handelt sich um eine unbezahlte Veranstaltung'
    ],
    correctAnswer: 1,
    explanation: 'Im Aushang steht ausdrücklich: "Die Teilnahme gilt als Arbeitszeit."'
  },
  {
    id: 'lv-06',
    category: 'leseverstehen',
    passage: `Informationsblatt: Bildungsgutschein

Der Bildungsgutschein ist ein Förderinstrument der Bundesagentur für Arbeit. Er berechtigt Arbeitssuchende und von Arbeitslosigkeit bedrohte Personen, an einer Weiterbildungsmaßnahme teilzunehmen, deren Kosten von der Agentur für Arbeit übernommen werden. Voraussetzung ist eine Beratung beim zuständigen Arbeitsvermittler, der die Notwendigkeit und Eignung der Maßnahme prüft. Der Bildungsgutschein ist auf einen bestimmten Bildungsträger und ein Bildungsziel ausgestellt und hat eine begrenzte Gültigkeitsdauer.`,
    text: 'Was ist eine Voraussetzung für den Erhalt eines Bildungsgutscheins?',
    options: [
      'Man muss bereits mindestens 6 Monate arbeitslos sein',
      'Man muss eine Beratung beim Arbeitsvermittler absolvieren',
      'Man muss die Kosten der Maßnahme selbst vorstrecken',
      'Man muss einen Hochschulabschluss haben'
    ],
    correctAnswer: 1,
    explanation: 'Laut Text ist "eine Beratung beim zuständigen Arbeitsvermittler" Voraussetzung für den Bildungsgutschein.'
  },
  {
    id: 'lv-07',
    category: 'leseverstehen',
    passage: `Stellenanzeige: Lagerhelfer/in (m/w/d)

Für unser Logistikzentrum suchen wir zuverlässige Lagermitarbeiter/innen für die Früh- und Spätschicht. Die Arbeitszeiten sind Montag bis Freitag von 06:00–14:00 Uhr (Frühschicht) bzw. 14:00–22:00 Uhr (Spätschicht). Zu den Aufgaben zählen: Warenannahme und -prüfung, Einlagerung, Kommissionierung von Aufträgen sowie allgemeine Lagertätigkeiten. Ein Staplerschein ist wünschenswert, aber keine Voraussetzung. Quereinsteiger sind willkommen. Wir zahlen übertarifliche Löhne und Schichtzulagen.`,
    text: 'Welche Aussage über die Stelle ist korrekt?',
    options: [
      'Ein Staplerschein ist zwingend erforderlich',
      'Es wird nur die Frühschicht angeboten',
      'Quereinsteiger können sich bewerben',
      'Die Stelle umfasst auch Wochenendarbeit'
    ],
    correctAnswer: 2,
    explanation: 'Der Text besagt: "Quereinsteiger sind willkommen." Ein Staplerschein ist nur wünschenswert, und Wochenendarbeit wird nicht erwähnt.'
  },
  {
    id: 'lv-08',
    category: 'leseverstehen',
    passage: `Merkblatt: Kündigungsschutz

Das Kündigungsschutzgesetz (KSchG) gilt für Betriebe mit mehr als zehn Arbeitnehmern. Arbeitnehmer, die länger als sechs Monate im Betrieb beschäftigt sind, genießen Kündigungsschutz. Eine Kündigung ist nur dann wirksam, wenn sie sozial gerechtfertigt ist. Gründe können personenbedingt (z.B. Krankheit), verhaltensbedingt (z.B. wiederholte Pflichtverletzungen) oder betriebsbedingt (z.B. Stellenabbau) sein. Schwerbehinderte Menschen und Betriebsratsmitglieder haben besonderen Kündigungsschutz.`,
    text: 'Ab wann gilt das Kündigungsschutzgesetz für einen Arbeitnehmer im Betrieb?',
    options: [
      'Sofort ab dem ersten Arbeitstag',
      'Nach drei Monaten Beschäftigung',
      'Nach sechs Monaten Beschäftigung',
      'Nach einem Jahr Beschäftigung'
    ],
    correctAnswer: 2,
    explanation: 'Im Text steht: "Arbeitnehmer, die länger als sechs Monate im Betrieb beschäftigt sind, genießen Kündigungsschutz."'
  },
  {
    id: 'lv-09',
    category: 'leseverstehen',
    passage: `Informationsblatt: Rentenversicherung

Die gesetzliche Rentenversicherung ist eine der fünf Säulen der deutschen Sozialversicherung. Arbeitnehmer und Arbeitgeber zahlen je zur Hälfte in die Rentenversicherung ein. Der aktuelle Beitragssatz beträgt 18,6 Prozent des Bruttoeinkommens. Die Wartezeit für eine reguläre Altersrente beträgt 45 Beitragsjahre für die abschlagsfreie Rente mit 65 Jahren. Wer weniger Beitragsjahre hat, kann ebenfalls in Rente gehen, muss aber Abzüge hinnehmen.`,
    text: 'Was ist die Wartezeit für eine abschlagsfreie Altersrente mit 65 Jahren?',
    options: [
      '25 Beitragsjahre',
      '35 Beitragsjahre',
      '40 Beitragsjahre',
      '45 Beitragsjahre'
    ],
    correctAnswer: 3,
    explanation: 'Der Text nennt eindeutig: "Die Wartezeit für eine reguläre Altersrente beträgt 45 Beitragsjahre für die abschlagsfreie Rente mit 65 Jahren."'
  },
  {
    id: 'lv-10',
    category: 'leseverstehen',
    passage: `E-Mail an Bewerber/innen

Sehr geehrte Damen und Herren,

vielen Dank für Ihre Bewerbung auf die Stelle als Verwaltungsfachangestellte/r. Wir haben Ihre Unterlagen erhalten und werden diese sorgfältig prüfen. Wir melden uns bis spätestens Ende nächster Woche bei Ihnen, um Sie entweder zu einem Vorstellungsgespräch einzuladen oder Ihnen eine Rückmeldung zu geben. Bitte haben Sie bis dahin Geduld. Bei Fragen können Sie uns werktags von 9:00 bis 16:00 Uhr unter der angegebenen Telefonnummer erreichen.

Mit freundlichen Grüßen
Das Personalteam`,
    text: 'Was wird dem Bewerber in der E-Mail mitgeteilt?',
    options: [
      'Er wurde zur Stelle eingeladen',
      'Seine Bewerbung wurde abgelehnt',
      'Er wird bis Ende nächster Woche eine Rückmeldung erhalten',
      'Er soll sofort anrufen'
    ],
    correctAnswer: 2,
    explanation: 'Die E-Mail sagt: "Wir melden uns bis spätestens Ende nächster Woche bei Ihnen, um Sie entweder zu einem Vorstellungsgespräch einzuladen oder Ihnen eine Rückmeldung zu geben."'
  },
  {
    id: 'lv-11',
    category: 'leseverstehen',
    passage: `Aushang: Neue Parkordnung

Ab dem 1. März gilt auf dem Betriebsgelände eine neue Parkordnung. Mitarbeiter mit einem gültigen Parkausweis dürfen nur noch auf den ausgewiesenen Parkplätzen in Bereich B und C parken. Bereich A ist ausschließlich Kunden und Lieferfahrzeugen vorbehalten. Fahrzeuge ohne gültigen Parkausweis oder auf falschen Plätzen werden kostenpflichtig abgeschleppt. Parkausweise können ab sofort in der Personalabteilung beantragt werden.`,
    text: 'Was passiert mit Fahrzeugen ohne gültigen Parkausweis?',
    options: [
      'Sie erhalten eine Verwarnung',
      'Sie werden kostenpflichtig abgeschleppt',
      'Sie dürfen in Bereich A parken',
      'Sie müssen eine Parkgebühr zahlen'
    ],
    correctAnswer: 1,
    explanation: 'Im Aushang steht: "Fahrzeuge ohne gültigen Parkausweis oder auf falschen Plätzen werden kostenpflichtig abgeschleppt."'
  },
  {
    id: 'lv-12',
    category: 'leseverstehen',
    passage: `Merkblatt: Arbeitslosengeld I

Arbeitslosengeld I (ALG I) erhalten Personen, die arbeitslos gemeldet sind, der Arbeitsvermittlung zur Verfügung stehen und in den letzten zwei Jahren mindestens zwölf Monate sozialversicherungspflichtig beschäftigt waren (Rahmenfrist). Die Höhe des ALG I beträgt 60 Prozent des letzten Nettoentgelts, für Personen mit Kindern 67 Prozent. Die Bezugsdauer richtet sich nach der Dauer der vorangegangenen Beschäftigung und dem Lebensalter.`,
    text: 'Wie hoch ist das Arbeitslosengeld I für eine Person ohne Kinder?',
    options: [
      '50 Prozent des letzten Nettoentgelts',
      '60 Prozent des letzten Nettoentgelts',
      '67 Prozent des letzten Nettoentgelts',
      '75 Prozent des letzten Nettoentgelts'
    ],
    correctAnswer: 1,
    explanation: 'Im Text steht: "Die Höhe des ALG I beträgt 60 Prozent des letzten Nettoentgelts" – der Satz für Personen ohne Kinder.'
  },
];
