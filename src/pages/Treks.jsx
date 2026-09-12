import { useMemo, useState } from 'react';
import Container from '../components/ui/Container';
import SectionTitle from '../components/ui/SectionTitle';
import TrekCard from '../components/treks/TrekCard';
import FilterPanel from '../components/treks/FilterPanel';
import EmptyState from '../components/ui/EmptyState';
import { treks } from '../data/treks';
export default function Treks() {
  const [filters, setFilters] = useState({
    search: '',
    region: 'All',
    difficulty: 'All',
  });
  const list = useMemo(
    () =>
      treks.filter(
        (t) =>
          (filters.region === 'All' || t.region === filters.region) &&
          (filters.difficulty === 'All' ||
            t.difficulty === filters.difficulty) &&
          t.name.toLowerCase().includes(filters.search.toLowerCase())
      ),
    [filters]
  );
  return (
    <section className="section page-top">
      <Container>
        <SectionTitle
          eyebrow="CHOOSE YOUR PATH"
          title="Himalayan Treks"
          text="Filter by region or challenge, then follow the trail that calls you."
        />
        <div className="catalog">
          <FilterPanel filters={filters} setFilters={setFilters} />
          <div className="card-grid card-grid--two">
            {list.length ? (
              list.map((t) => <TrekCard trek={t} key={t.slug} />)
            ) : (
              <EmptyState />
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
