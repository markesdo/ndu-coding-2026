type Props = {
  emoji: string;
  titel: string;
  text: string;
};

export default function FeatureCard({ emoji, titel, text }: Props) {
  return (
    <div className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="mb-3 text-3xl" aria-hidden>
        {emoji}
      </div>
      <h3 className="mb-1 font-semibold">{titel}</h3>
      <p className="text-sm leading-relaxed text-muted">{text}</p>
    </div>
  );
}
