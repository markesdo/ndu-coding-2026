---
description: Von der Idee zu PRD und Backlog – Claude fragt nach, schlägt Varianten vor und schreibt erst nach deinem Okay
argument-hint: [Idee in einem Satz, optional]
---

Wir starten ein neues Produkt oder schärfen ein bestehendes. Die Idee: $ARGUMENTS (wenn leer: frag zuerst nach der Idee in einem Satz).

**Ändere keine Datei, bevor ich in Schritt 4 ausdrücklich zugestimmt habe.** Lesen ist erlaubt.

1. **Verstehen.** Lies `docs/PRD-VORLAGE.md`, `docs/BACKLOG.md` und, falls vorhanden, `docs/PRD.md`. Stell mir dann Rückfragen entlang der Vorlage – **immer nur eine Frage pro Nachricht**, wenn möglich mit 2–4 Antwortmöglichkeiten zum Auswählen. Frag zuerst nach Zielgruppe und Problem, dann nach Abgrenzung (was das Produkt bewusst NICHT macht). Höchstens 8 Fragen; was du sinnvoll annehmen kannst, nimmst du an.
2. **Varianten.** Schlag 2–3 Varianten für das MVP vor (z. B. schmal / mittel), je 2–3 Sätze mit Vor- und Nachteil, und empfiehl eine mit Begründung.
3. **Zusammenfassung.** Fass in höchstens 10 Zeilen zusammen, was wir bauen. Trenne dabei, was ich gesagt habe, von dem, was du angenommen hast. Frag, ob das so stimmt.
4. **Erst nach meinem Okay schreiben:**
   - `docs/PRD.md` nach der Vorlage, eine Seite, Abschnitt 4 (Abgrenzung) mit drei Punkten.
   - `docs/BACKLOG.md` mit 5–8 User Stories im Format der Datei (Als … möchte ich … damit …, Akzeptanzkriterien als „Gegeben … wenn … dann …“, Status ⬜ offen). S1 ist der kleinste Schritt, den man im Browser sehen kann. Jedes Kriterium muss im Browser prüfbar sein.
   - Stehen in `docs/BACKLOG.md` schon Stories **zu einem anderen Produkt** (z. B. Campus Events in einem neuen Repo): vorher fragen, ob sie ersetzt werden sollen. Gehören sie **zu diesem Produkt**: nicht überschreiben, sondern Änderungen vorschlagen und erst nach Okay eintragen.
5. **Abschluss.** Sag in einem Satz, welche Story als Erstes dran ist und mit welchem Satz ich sie starte („Setze Story S1 aus docs/BACKLOG.md um“). Danach `/ndu-commit`.

Sprache: Deutsch, einfache Worte, keine Fachbegriffe ohne kurze Erklärung.
