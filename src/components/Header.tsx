import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border bg-card/80 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <span className="inline-block h-3 w-3 rounded-full bg-accent" />
          Leihbar
        </Link>
        <nav className="flex items-center gap-4 text-sm text-muted">
          <Link href="/" className="hover:text-foreground">
            Gegenstände
          </Link>
          <span className="rounded-full border border-border px-3 py-1 text-xs">
            Anmelden kommt an Tag 2
          </span>
        </nav>
      </div>
    </header>
  );
}
