// Anzeige-Helfer, die mehrere Seiten brauchen.

const euro = new Intl.NumberFormat("de-AT", { style: "currency", currency: "EUR" });

/** Preis pro Tag für die Anzeige: 0 → „gratis“, sonst z. B. „2,50 € pro Tag“. */
export function preisText(preisProTag: number): string {
  return preisProTag === 0 ? "gratis" : `${euro.format(preisProTag)} pro Tag`;
}
