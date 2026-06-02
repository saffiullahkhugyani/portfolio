type Props = {
  eyebrow: string;
  heading: string;
  sub?: string;
  centered?: boolean;
};

export function SectionHeader({ eyebrow, heading, sub, centered }: Props) {
  return (
    <div className={`section-header ${centered ? "section-header--centered" : ""}`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2>{heading}</h2>
      {sub && <p className="section-sub">{sub}</p>}
    </div>
  );
}
