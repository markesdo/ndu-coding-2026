// Beispieldaten — bis die Datenbank (Supabase, Tag 2) angebunden ist.
// Ein Event in der Vergangenheit ist absichtlich dabei (siehe Issue 1 im Backlog).

export type Kategorie = "Lernen" | "Party" | "Sport" | "Vortrag";

export type Event = {
  id: string;
  titel: string;
  datum: string; // ISO-Datum, z. B. "2026-10-20"
  uhrzeit: string; // "18:30"
  ort: string;
  kategorie: Kategorie;
  beschreibung: string;
  organisator: string;
};

export const events: Event[] = [
  {
    id: "lernsession-marketing",
    titel: "Lernsession Marketing-Prüfung",
    datum: "2026-10-20",
    uhrzeit: "17:00",
    ort: "NDU, Raum 2.04",
    kategorie: "Lernen",
    beschreibung:
      "Gemeinsam die Altfragen durchgehen. Bitte eigene Zusammenfassungen mitbringen – wir teilen uns die Kapitel auf.",
    organisator: "Lena",
  },
  {
    id: "semester-opening",
    titel: "Semester Opening Party",
    datum: "2026-10-23",
    uhrzeit: "21:00",
    ort: "Kulturhaus St. Pölten",
    kategorie: "Party",
    beschreibung:
      "Das offizielle Opening des Wintersemesters. Eintritt frei mit Studierendenausweis, DJ ab 22 Uhr.",
    organisator: "ÖH NDU",
  },
  {
    id: "lauftreff",
    titel: "Lauftreff an der Traisen",
    datum: "2026-10-21",
    uhrzeit: "07:30",
    ort: "Treffpunkt Traisenbrücke",
    kategorie: "Sport",
    beschreibung:
      "Lockere 5 km für alle Tempos. Danach Kaffee. Jeden Mittwoch, wenn genug Leute zusagen.",
    organisator: "Jonas",
  },
  {
    id: "gastvortrag-ki",
    titel: "Gastvortrag: Produkte bauen mit KI-Agenten",
    datum: "2026-10-29",
    uhrzeit: "18:00",
    ort: "NDU, Audimax",
    kategorie: "Vortrag",
    beschreibung:
      "Eine Gründerin zeigt, wie ihr Team ohne klassische Entwicklungsabteilung Software baut. Danach Q&A.",
    organisator: "Studiengangsleitung",
  },
  {
    id: "design-sprint-wochenende",
    titel: "Design-Sprint-Wochenende",
    datum: "2026-11-07",
    uhrzeit: "09:00",
    ort: "NDU, Werkstatt",
    kategorie: "Lernen",
    beschreibung:
      "Zwei Tage, ein Problem, ein getesteter Prototyp. Für alle Semester offen, maximal 20 Plätze.",
    organisator: "Mira",
  },
  {
    id: "volleyball-turnier",
    titel: "Volleyball-Turnier der Studiengänge",
    datum: "2026-11-14",
    uhrzeit: "14:00",
    ort: "Sporthalle Nord",
    kategorie: "Sport",
    beschreibung:
      "Teams à 6 Personen, Anmeldung pro Studiengang. Siegerteam bekommt den Wanderpokal.",
    organisator: "Sportreferat",
  },
  {
    id: "erstsemester-fruehstueck",
    titel: "Erstsemester-Frühstück",
    datum: "2026-10-02",
    uhrzeit: "09:00",
    ort: "NDU, Foyer",
    kategorie: "Party",
    beschreibung:
      "Dieses Event liegt in der Vergangenheit und sollte in der Liste nicht mehr auftauchen.",
    organisator: "ÖH NDU",
  },
];
