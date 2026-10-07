# Backlog — Campus Events

> Ein Issue = ein Durchgang mit Claude. Oben steht, was als Nächstes dran ist.
> Status: ⬜ offen · 🔧 in Arbeit · ✅ fertig (alle Kriterien im Browser geprüft)
> Aufbau jedes Issues: **Ziel** (was danach möglich ist, für wen und warum – „damit …“) · **Nicht im Umfang** · **Akzeptanzkriterien** (Gegeben … wenn … dann …) · **Fertig, wenn** (woran man es prüft).

## Tag 1 — Übung 2: MVP ohne Datenbank

### ⬜ Issue 1 — Eventliste mit Beispieldaten
**Ziel:** Auf der Startseite sehen Studierende alle kommenden Events – damit sie wissen, was los ist.
**Nicht im Umfang:** Suche, Filter, Detailseite, Datenbank (Beispieldaten aus `src/data/events.ts`).
**Akzeptanzkriterien:**
- Gegeben ich öffne die Startseite, dann sehe ich mindestens 4 Events mit Titel, Datum, Uhrzeit, Ort und Kategorie.
- Gegeben es gibt ein Event in der Vergangenheit, dann wird es nicht angezeigt.
- Gegeben ich öffne die Seite am Handy (375 px breit), dann sind alle Events lesbar und nichts ragt über den Rand.

**Fertig, wenn:** Startseite im Browser und in Handybreite geprüft; das vergangene „Erstsemester-Frühstück“ fehlt.

### ⬜ Issue 2 — Event-Detailseite
**Ziel:** Ein Klick auf ein Event zeigt Beschreibung und alle Details auf einer eigenen Seite – damit Studierende entscheiden können, ob sie hingehen.
**Nicht im Umfang:** Zusagen, Bearbeiten, Teilen.
**Akzeptanzkriterien:**
- Gegeben ich klicke auf ein Event in der Liste, dann öffnet sich eine eigene Seite (eigene URL) mit allen Infos.
- Gegeben ich bin auf der Detailseite, dann gibt es einen Weg zurück zur Liste.
- Gegeben ich rufe die Adresse eines Events auf, das es nicht gibt, dann sehe ich eine verständliche Meldung statt eines Fehlers.

**Fertig, wenn:** zwei Events angeklickt, Adresse kopiert und in neuem Tab geöffnet, zurück zur Liste; eine erfundene Event-Adresse aufgerufen und die Meldung gesehen.

### ⬜ Issue 3 — Nach Kategorie filtern
**Ziel:** Studierende filtern die Liste nach Kategorie (Lernen, Party, Sport, Vortrag) – damit sie schneller finden, was sie interessiert.
**Nicht im Umfang:** Freitextsuche, mehrere Kategorien gleichzeitig.
**Akzeptanzkriterien:**
- Gegeben ich klicke auf „Sport“, dann sehe ich nur Sport-Events und der Filter ist sichtbar aktiv.
- Gegeben ich klicke auf „Alle“, dann sehe ich wieder alle Events.
- Gegeben ich habe „Sport“ gewählt, wenn ich danach „Party“ wähle, dann sehe ich nur Party-Events (Filter addieren sich nicht).

**Fertig, wenn:** jede Kategorie einmal angeklickt, zweimal hintereinander gewechselt, auch am Handy.

## Tag 2 — Übung 3: Echte Daten (Supabase)

### ⬜ Issue 4 — Event anlegen
**Ziel:** Organisator*innen legen ein Event an, und es erscheint dauerhaft in der Liste – damit die App echte Events zeigt statt Beispieldaten.
**Nicht im Umfang:** Bearbeiten, Löschen, Bilder.
**Akzeptanzkriterien:**
- Gegeben ich fülle Titel, Datum, Uhrzeit, Ort, Kategorie, Beschreibung aus und speichere, dann erscheint das Event in der Liste und ist nach Reload noch da (Datenbank!).
- Gegeben der Titel ist leer oder das Datum liegt in der Vergangenheit, dann sehe ich eine verständliche Fehlermeldung und nichts wird gespeichert.
- Gegeben ich schaue ins Supabase-Dashboard, dann sehe ich das Event in der Tabelle `events`.

**Fertig, wenn:** ein Event angelegt, Seite neu geladen, Zeile im Supabase-Dashboard gesehen; je ein Versuch mit leerem Titel und mit vergangenem Datum – beide Male Fehlermeldung, keine neue Zeile.

## Tag 2 — Übung 4: Login & RSVP

### ⬜ Issue 5 — Anmelden
**Ziel:** Studierende registrieren sich mit E-Mail und Passwort und melden sich an – damit die App weiß, wer sie sind.
**Nicht im Umfang:** Login mit Google, Passwort vergessen, Profilseite.
**Akzeptanzkriterien:**
- Gegeben ich bin nicht angemeldet, dann sehe ich „Anmelden“ im Header; angemeldet sehe ich meine E-Mail und „Abmelden“.
- Gegeben ich rufe `/meine-events` nicht angemeldet auf, dann werde ich zur Anmeldung geleitet.
- Gegeben ich gebe ein falsches Passwort ein, dann sehe ich eine verständliche Fehlermeldung.

**Fertig, wenn:** ein Testkonto registriert, ab- und wieder angemeldet, einmal mit falschem Passwort versucht, `/meine-events` ohne Login aufgerufen.

### ⬜ Issue 6 — Zusagen (RSVP)
**Ziel:** Studierende sagen einem Event zu und können das zurücknehmen – damit Organisator*innen wissen, wie viele kommen.
**Nicht im Umfang:** Warteliste, Erinnerungs-Mails.
**Akzeptanzkriterien:**
- Gegeben ich bin angemeldet, wenn ich „Ich komme“ klicke, dann steht der Button auf „Zugesagt ✓“ und der Zähler steigt um 1.
- Gegeben ich habe zugesagt, wenn ich erneut klicke, dann ist die Zusage zurückgenommen und der Zähler sinkt um 1.
- Gegeben ich bin nicht angemeldet, wenn ich klicke, dann führt mich der Button zur Anmeldung.
- Gegeben eine andere Person hat zugesagt, dann kann ich **ihre** Zusage nicht löschen (Row Level Security).

**Fertig, wenn:** alle Kriterien im Browser durchgeklickt, Zähler stimmt auch nach einem Reload.

### ⬜ Issue 7 — Meine Events
**Ziel:** Unter `/meine-events` sehen Studierende, wo sie zugesagt haben – damit sie den Überblick behalten.
**Nicht im Umfang:** Kalender-Export, Erinnerungen.
**Akzeptanzkriterien:**
- Gegeben ich habe 2 Events zugesagt, dann sehe ich genau diese 2, sortiert nach Datum.
- Gegeben ich habe nirgends zugesagt, dann sehe ich einen Hinweis mit Link zur Eventliste.

**Fertig, wenn:** mit einem Testkonto erst ohne Zusage (Hinweis sichtbar), dann zwei Zusagen gemacht und eine zurückgenommen – die Liste stimmt jeweils.

## Optional (Tag 2, wer schnell ist) — KI als Feature

### ⬜ Issue 8 — Beschreibung vorschlagen lassen
**Ziel:** Organisator*innen lassen sich aus Titel, Kategorie und Ort eine Eventbeschreibung vorschlagen – damit sie Events schneller anlegen.
**Nicht im Umfang:** Bilder generieren, Übersetzungen, automatisches Speichern des Vorschlags.
**Akzeptanzkriterien:**
- Gegeben ich habe Titel, Kategorie und Ort ausgefüllt, wenn ich auf „Beschreibung vorschlagen“ klicke, dann erscheint nach wenigen Sekunden ein Vorschlag (2–3 Sätze, Deutsch) im Beschreibungsfeld, den ich bearbeiten kann.
- Gegeben der Titel ist leer, dann ist der Button deaktiviert.
- Gegeben ich klicke 6-mal innerhalb einer Minute, dann bekomme ich beim 6. Mal eine freundliche Meldung statt eines Vorschlags (Rate Limit).
- Gegeben ich schaue in den Browser-Code (Netzwerk-Tab), dann ist dort **kein** API-Key sichtbar – der Aufruf läuft über eine eigene API-Route im Backend (`ANTHROPIC_API_KEY` in `.env.local`).

**Fertig, wenn:** drei Vorschläge erzeugt, Rate Limit ausgelöst, Netzwerk-Tab ohne Key.

## Später / Ideen (nicht im MVP)
- Erinnerung per E-Mail am Vortag
- Event bearbeiten und absagen (nur Organisator*in)
- Teilnehmerliste für Organisator*innen
- Bild pro Event
