import { Link } from 'react-router-dom';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
export default function TrekCard({ trek }) {
  return (
    <Card className="trek-card">
      <div
        className="trek-card__image"
        style={{ backgroundImage: `url(${trek.image})` }}
      >
        <Badge>{trek.altitude}</Badge>
      </div>
      <div className="trek-card__body">
        <span className="overline">
          {trek.region} · {trek.days} DAYS
        </span>
        <h3>{trek.name}</h3>
        <p>{trek.summary}</p>
        <div className="trek-card__foot">
          <strong>From ${trek.price}</strong>
          <Link to={`/treks/${trek.slug}`}>View trail →</Link>
        </div>
      </div>
    </Card>
  );
}
