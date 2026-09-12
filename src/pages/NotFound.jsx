import { Link } from 'react-router-dom';
export default function NotFound() {
  return (
    <section className="not-found">
      <h1>Trail not found</h1>
      <p>This path does not appear on our map.</p>
      <Link className="btn btn--primary" to="/">
        Return home
      </Link>
    </section>
  );
}
