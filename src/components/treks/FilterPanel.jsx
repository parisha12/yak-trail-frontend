import SearchBar from '../ui/SearchBar';
export default function FilterPanel({ filters, setFilters }) {
  return (
    <aside className="filters">
      <h3>Find Your Trail</h3>
      <SearchBar
        value={filters.search}
        onChange={(search) => setFilters({ ...filters, search })}
      />
      <label>
        Region
        <select
          value={filters.region}
          onChange={(e) => setFilters({ ...filters, region: e.target.value })}
        >
          <option>All</option>
          <option>Everest</option>
          <option>Annapurna</option>
          <option>Langtang</option>
          <option>Manaslu</option>
        </select>
      </label>
      <label>
        Difficulty
        <select
          value={filters.difficulty}
          onChange={(e) =>
            setFilters({ ...filters, difficulty: e.target.value })
          }
        >
          <option>All</option>
          <option>Moderate</option>
          <option>Challenging</option>
        </select>
      </label>
      <button
        onClick={() =>
          setFilters({ search: '', region: 'All', difficulty: 'All' })
        }
      >
        Clear filters
      </button>
    </aside>
  );
}
