import Header from "@/components/Header";
import { BellRing, CalendarDays, Hand } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import { events } from "@/data/events";

export default function Home() {
  const anzahl = events.length;

  return (
    <>
      <Header />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-12">
        <section className="mb-14">
          <p className="mb-3 inline-block rounded-full bg-accent-soft px-3 py-1 text-xs font-medium text-accent">
            NDU · Wintersemester 2026
          </p>
          <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-tight sm:text-5xl">
            Was ist los am Campus?
          </h1>
          <p className="mb-8 max-w-xl text-lg text-muted">
            Lernsessions, Partys, Sport, Vorträge – alles an einem Ort statt in
            fünf WhatsApp-Gruppen. Anlegen, finden, zusagen.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#events"
              className="rounded-xl bg-accent px-5 py-3 font-medium text-white shadow-sm transition hover:opacity-90"
            >
              Events ansehen
            </a>
            <span className="rounded-xl border border-border px-5 py-3 text-muted">
              Event anlegen – kommt an Tag 2
            </span>
          </div>
        </section>

        <section className="mb-14 grid gap-4 sm:grid-cols-3">
          <FeatureCard
            icon={CalendarDays}
            titel="Alles auf einen Blick"
            text="Alle Events deines Studiengangs chronologisch – ohne Scrollen durch Chats."
          />
          <FeatureCard
            icon={Hand}
            titel="Mit einem Klick zusagen"
            text="Organisator*innen sehen sofort, wie viele kommen. Kein Nachfragen mehr."
          />
          <FeatureCard
            icon={BellRing}
            titel="Nichts mehr verpassen"
            text="Erinnerung am Vortag. Für die Dinge, die man sich fest vorgenommen hat."
          />
        </section>

        <section
          id="events"
          className="rounded-2xl border border-dashed border-border bg-card p-8 text-center"
        >
          <h2 className="mb-2 text-xl font-semibold">Hier kommt die Eventliste hin</h2>
          <p className="mx-auto max-w-md text-sm text-muted">
            In <code className="rounded bg-accent-soft px-1">src/data/events.ts</code>{" "}
            warten bereits {anzahl} Beispiel-Events. Dein erstes Issue (Issue 1 im
            Backlog) bringt sie auf diese Seite.
          </p>
        </section>
      </main>
      <footer className="border-t border-border py-6 text-center text-xs text-muted">
        Campus Events · gebaut im Kurs „Programmieren mit AI“ · NDU 2026
      </footer>
    </>
  );
}
