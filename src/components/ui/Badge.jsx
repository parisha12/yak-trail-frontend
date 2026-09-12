export default function Badge({ children, tone = 'amber' }) {
  return <span className={`badge badge--${tone}`}>{children}</span>;
}
