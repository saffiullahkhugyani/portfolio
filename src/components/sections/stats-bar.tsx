const stats = [
  { value: "6+", label: "Years Experience" },
  { value: "12+", label: "Products Shipped" },
  { value: "3", label: "Platforms: Mobile · Web · IoT" },
  { value: "6", label: "Open-Source Repos Live" },
];

export function StatsBar() {
  return (
    <section className="stats-bar" aria-label="Key highlights">
      {stats.map((s, i) => (
        <div
          key={s.label}
          className="stat-item reveal"
          style={{ transitionDelay: `${i * 70}ms` }}
        >
          <p className="stat-value">{s.value}</p>
          <p className="stat-label">{s.label}</p>
        </div>
      ))}
    </section>
  );
}
