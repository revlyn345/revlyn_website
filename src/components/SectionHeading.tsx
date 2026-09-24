export function SectionHeading({ title, copy, light = false }: { title: string; copy?: string; light?: boolean }) {
  return (
    <div className="max-w-3xl">
      <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">{title}</h2>
      {copy ? <p className={`mt-5 text-lg leading-relaxed ${light ? "text-cream/65" : "text-ink/65"}`}>{copy}</p> : null}
    </div>
  );
}
