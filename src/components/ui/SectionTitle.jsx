export default function SectionTitle({ eyebrow, title, text, light = false }) {
  return (
    <header className={`section-title ${light ? 'section-title--light' : ''}`}>
      {eyebrow && <span>{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </header>
  );
}
