// Stats
// Small reusable stat block used under the hero copy.

type Stat = { value: string; label: string };

const STATS: Stat[] = [
  { value: "1200", label: "Listed Properties" },
  { value: "4500", label: "Happy Customers" },
  { value: "100", label: "Awards" },
];

export default function Stats() {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-5 sm:gap-x-10">
      {STATS.map((s) => (
        <div key={s.label}>
          <p className="font-display text-2xl font-semibold text-ink sm:text-3xl">
            {s.value}
            <span className="text-ink/50">+</span>
          </p>
          <p className="mt-1 text-xs text-slate sm:text-sm">{s.label}</p>
        </div>
      ))}
    </div>
  );
}
