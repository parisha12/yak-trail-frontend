export default function SearchBar({ value, onChange }) {
  return (
    <label className="search">
      <span className="search__icon">⌕</span>

      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search treks..."
      />
    </label>
  );
}
