---
description: Neues Produkt in einem frischen Repo aus der Vorlage – Leihbar raus, euer Produktname rein. Danach /ndu-idee und /ndu-brainstorm
argument-hint: [Produktname, z. B. Tischfeedback]
---

Dieses Repo ist eine frische Kopie der Kursvorlage und enthält noch das Übungsprodukt „Leihbar“. Hier entsteht etwas Neues: $ARGUMENTS (wenn leer: frag zuerst nach dem Produktnamen, ein bis drei Wörter).

**Ändere keine Datei, bevor ich in Schritt 2 ausdrücklich zugestimmt habe.** Lesen ist erlaubt.

1. **Prüfen, ob das Repo frisch ist.** Hör auf und sag mir, dass dieser Befehl nur für ein neues Repo aus der Vorlage gedacht ist, wenn eines davon zutrifft:
   - `git status` zeigt ungesicherte Änderungen,
   - `docs/PRODUKT.md` existiert,
   - in `docs/BACKLOG.md` ist ein Issue 🔧 in Arbeit oder ✅ fertig,
   - `git log --oneline` zeigt mehr als drei Commits.
   Sag mir in dem Fall auch, wie der Projektordner heißt – vielleicht bin ich im falschen Fenster (zum Beispiel noch in Leihbar). Was stattdessen zu tun ist, entscheide ich.
2. **Ankündigen.** Zähl in höchstens 8 Zeilen auf, was du entfernst und was du umbenennst (die Liste in Schritt 3), und frag, ob du loslegen sollst.
3. **Erst nach meinem Okay umbauen:**
   - `CLAUDE.md`: Überschrift „# [Produktname] — NDU Coding 2026“. Streich nur, was es ausschließlich für Leihbar gibt: die Zeile zu den Beispieldaten in `src/data/gegenstaende.ts`, die Regel zu `preisText()` und `kategorien`, den Satz zu den Labels „Ort:“ und „Verleiht:“, `format.ts` in der Projektstruktur. Die Titelvorlage „%s – Leihbar“ wird „%s – [Produktname]“. Alle anderen Regeln bleiben wörtlich – es sind die Spielregeln des Kurses.
   - `src/app/layout.tsx`: Titel auf das neue Produkt, die Beschreibung vorerst ein neutraler Satz – den richtigen liefert später der Produkt-Brief.
   - `src/components/Header.tsx` und `src/components/Footer.tsx`: Produktname statt „Leihbar“; der Link „Gegenstände“ und die Pille „Anmelden · Tag 2“ fallen weg.
   - `src/app/page.tsx`: eine schlichte Startseite – der Produktname als einzige `<h1>`, darunter der Satz „Hier entsteht [Produktname].“, sonst nichts. Keine Feature-Kästen, keine Beispieldaten.
   - Löschen: `src/data/gegenstaende.ts`, `src/lib/format.ts`, den Ordner `public/gegenstaende/`. `src/components/FeatureCard.tsx` bleibt – sie ist neutral und vielleicht später nützlich.
   - `docs/BACKLOG.md`: Überschrift „# Backlog — [Produktname]“, die Hinweiszeilen darunter (die mit „>“) bleiben. Alle Leihbar-Issues und Ideen entfernen, stattdessen nur: „Noch keine Issues – sie kommen aus `/ndu-brainstorm`.“
   - `README.md`: Überschrift auf das neue Produkt, in Schritt 1 der Name dieses Repos statt `leihbar`, die Zeile zu `src/data/gegenstaende.ts` in der Tabelle streichen. Alles andere bleibt.
   - `.devcontainer/devcontainer.json`: das Port-Label „[Produktname] (npm run dev)“.
   - `docs/ENTSCHEIDUNGEN.md`: eine Zeile mit heutigem Datum im Format der Datei: „Neues Produkt [Produktname], Übungsprodukt Leihbar entfernt — Start in der Zwischenwoche“.
   - Nicht anfassen: `.env.local`, `.env.example`, `.mcp.json`, den Ordner `.claude/`, `setup-mac.sh`.
4. **Prüfen.** `npm run lint` und `npm run build` laufen fehlerfrei. Eine Suche nach „leihbar“ und „gegenstaende“ (ohne Groß-/Kleinschreibung) außerhalb von `node_modules`, `.next`, `.git`, `.claude/`, `setup-mac.sh` und `package-lock.json` findet nur noch die Zeile in `docs/ENTSCHEIDUNGEN.md`. Behebe, was sonst auftaucht, und zeig mir das Ergebnis der Suche.
5. **Abschluss.** Sag mir in drei Sätzen, was ich im Browser sehen soll (Startseite mit dem neuen Namen, Titel im Browser-Tab). Dann: Als Nächstes `/ndu-commit`, danach `/clear` und `/ndu-idee`. Führ nichts davon selbst aus.

Sprache: Deutsch, einfache Worte, keine Fachbegriffe ohne kurze Erklärung.
