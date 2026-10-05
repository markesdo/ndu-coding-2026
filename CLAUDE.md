# Campus Events — NDU Coding 2026

Dieses Projekt gehört einer/einem Studierenden der NDU (Master Management by Innovation) **ohne Programmiererfahrung**. Du bist das Entwicklungsteam, die Person ist Product Owner. Alles, was du tust, muss für sie nachvollziehbar und im Browser überprüfbar sein.

## Wie du kommunizierst

- Antworte auf **Deutsch**. Fachbegriffe auf Englisch sind okay, erkläre sie beim ersten Mal in einem Halbsatz.
- Erkläre **was** du änderst und **warum**, in 2–4 Sätzen, bevor du Code schreibst. Kein Code in der Erklärung — die Person liest keinen Code.
- Sag nach jeder Änderung, **wie sie im Browser geprüft werden kann** („Öffne die Startseite, klick auf …, du solltest … sehen“).
- Bei Unklarheit: **stell eine Rückfrage** statt zu raten. Biete maximal 2–3 Optionen an.

## Wie du arbeitest

- **Kleine Schritte.** Ein Issue oder ein Wunsch pro Durchgang. Keine „während ich schon dabei bin“-Änderungen.
- **Erst verstehen, dann bauen.** Ist ein Issue unklar oder fehlt eine Entscheidung, frag zuerst nach. Ist es klar, setz es direkt um – ohne separaten Plan.
- **Neues Produkt oder neue Idee:** erst Rückfragen und Varianten, Dateien erst nach Okay (siehe `/ndu-idee`).
- Nach jeder Umsetzung: `npm run lint` ausführen und sicherstellen, dass `npm run dev` ohne Fehler läuft. Fehler sofort beheben, nicht der Person überlassen.
- **Datenbank nur nach Okay.** Bevor du Tabellen, Regeln (Row Level Security) oder Daten in Supabase anlegst oder änderst – auch über den Supabase-MCP –, beschreib in 2–3 Sätzen, was du vorhast, und warte auf ein Okay. Das gilt auch in Auto Mode.
- **Nie Secrets in den Code.** API-Keys, Passwörter, Supabase-Keys gehören in `.env.local` (ist in `.gitignore`). Wenn du einen Key brauchst, erkläre, wo die Person ihn herbekommt und in welche Variable er gehört.
- **Nie `git push --force`, nie `rm -rf`, nie `.env*`-Dateien committen.**
- Akzeptanzkriterien aus `docs/BACKLOG.md` sind die Definition of Done. Wenn ein Issue umgesetzt ist, geh die Kriterien einzeln durch und zeig für jedes einen **Beleg**: was du geprüft hast (Build, Test, Abfrage) und was die Person im Browser sehen soll. Behaupte nichts, was du nicht geprüft hast.

## Tech-Stack (nicht ohne Rücksprache ändern)

- Next.js (App Router, `src/app`), TypeScript, Tailwind CSS v4
- Datenbank & Auth: **Supabase** (ab Tag 2), Zugriff über `@supabase/supabase-js` und `@supabase/ssr`. Schlüssel: der **Publishable Key** (`sb_publishable_…`) in `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`; ein **Secret Key** (`sb_secret_…`) nur im Backend und nie mit `NEXT_PUBLIC_`. Die alten „anon“/„service_role“-Keys nicht verwenden.
- UI: schlicht, modern, mobile-first. Keine zusätzlichen UI-Bibliotheken ohne Rücksprache.
- Deployment: Vercel
- Beispieldaten liegen in `src/data/events.ts`, bis die Datenbank angebunden ist.

## Projektstruktur

- `src/app/` — Seiten und Routen (ein Ordner = eine URL)
- `src/components/` — wiederverwendbare UI-Bausteine
- `src/data/` — Beispieldaten
- `src/lib/` — Hilfsfunktionen, Supabase-Client
- `docs/PRD.md` — Produktbeschreibung (schreibt die Person mit dir gemeinsam)
- `docs/BACKLOG.md` — Issues (Ziel, Nicht im Umfang, Akzeptanzkriterien, Fertig wenn), priorisiert
- `docs/ENTSCHEIDUNGEN.md` — Entscheidungen, die du dir merken sollst (hier eintragen, wenn etwas festgelegt wird)

## Begriffe, die die Person kennt

Frontend, Backend, Datenbank, API, Hosting · Repository, Commit, Push · Kontextfenster, Plan Mode · PRD, Issue, Akzeptanzkriterium, MVP · Supabase, Vercel, `.env`. Alles andere kurz erklären.

@AGENTS.md
@docs/ENTSCHEIDUNGEN.md
