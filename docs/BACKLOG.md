# Backlog — Campus Events

> Eine Story = ein Durchgang mit Claude. Oben steht, was als Nächstes dran ist.
> Status: ⬜ offen · 🔧 in Arbeit · ✅ fertig (alle Kriterien im Browser geprüft)

## Tag 1 — Übung 2: MVP ohne Datenbank

### ⬜ S1 — Eventliste mit Beispieldaten
**Als** Studentin **möchte ich** auf der Startseite alle kommenden Events sehen, **damit** ich weiß, was los ist.
- Gegeben ich öffne die Startseite, dann sehe ich mindestens 4 Events mit Titel, Datum, Uhrzeit, Ort und Kategorie.
- Gegeben es gibt ein Event in der Vergangenheit, dann wird es nicht angezeigt.
- Gegeben ich öffne die Seite am Handy (375 px breit), dann sind alle Events lesbar und nichts ragt über den Rand.

### ⬜ S2 — Event-Detailseite
**Als** Studentin **möchte ich** auf ein Event klicken, **damit** ich Beschreibung und Details lese.
- Gegeben ich klicke auf ein Event in der Liste, dann öffnet sich eine eigene Seite (eigene URL) mit allen Infos.
- Gegeben ich bin auf der Detailseite, dann gibt es einen Weg zurück zur Liste.

### ⬜ S3 — Nach Kategorie filtern
**Als** Studentin **möchte ich** Events nach Kategorie filtern (Lernen, Party, Sport, Vortrag), **damit** ich schneller finde, was mich interessiert.
- Gegeben ich klicke auf „Sport“, dann sehe ich nur Sport-Events und der Filter ist sichtbar aktiv.
- Gegeben ich klicke auf „Alle“, dann sehe ich wieder alle Events.

## Tag 2 — Übung 3: Echte Daten (Supabase)

### ⬜ S4 — Event anlegen
**Als** Organisator **möchte ich** ein Event anlegen, **damit** es in der Liste erscheint.
- Gegeben ich fülle Titel, Datum, Uhrzeit, Ort, Kategorie, Beschreibung aus und speichere, dann erscheint das Event in der Liste und ist nach Reload noch da (Datenbank!).
- Gegeben der Titel ist leer oder das Datum liegt in der Vergangenheit, dann sehe ich eine verständliche Fehlermeldung.
- Gegeben ich schaue ins Supabase-Dashboard, dann sehe ich das Event in der Tabelle `events`.

## Tag 2 — Übung 4: Login & RSVP

### ⬜ S5 — Anmelden
**Als** Studentin **möchte ich** mich mit E-Mail und Passwort registrieren und anmelden, **damit** die App weiß, wer ich bin.
- Gegeben ich bin nicht angemeldet, dann sehe ich „Anmelden“ im Header; angemeldet sehe ich meine E-Mail und „Abmelden“.
- Gegeben ich rufe `/meine-events` nicht angemeldet auf, dann werde ich zur Anmeldung geleitet.

### ⬜ S6 — Zusagen (RSVP)
**Als** Studentin **möchte ich** einem Event zusagen und das wieder zurücknehmen, **damit** der Organisator weiß, wie viele kommen.
- Gegeben ich bin angemeldet und klicke „Ich komme“, dann steht der Button auf „Zugesagt ✓“ und der Zähler steigt um 1.
- Gegeben ich klicke erneut, dann ist die Zusage zurückgenommen und der Zähler sinkt um 1.
- Gegeben ich bin nicht angemeldet, dann führt der Button zur Anmeldung.
- Gegeben eine andere Person hat zugesagt, dann kann ich **ihre** Zusage nicht löschen (Row Level Security).

### ⬜ S7 — Meine Events
**Als** Studentin **möchte ich** unter `/meine-events` sehen, wo ich zugesagt habe, **damit** ich den Überblick behalte.
- Gegeben ich habe 2 Events zugesagt, dann sehe ich genau diese 2, sortiert nach Datum.

## Später / Ideen (nicht im MVP)
- Erinnerung per E-Mail am Vortag
- Event bearbeiten und absagen (nur Organisator)
- Teilnehmerliste für Organisatoren
- Bild pro Event
