export default function PillarCard({ number, title, text }) {
  return (
    <div className="pillar">
      <span>{number}</span>
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
}
