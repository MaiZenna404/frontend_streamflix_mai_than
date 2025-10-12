type SearchBarProps = {
  searchTerm: string;
  onSearchChange: (term: string) => void;
};

export default function SearchBar({ searchTerm, onSearchChange }: SearchBarProps) {
    return (
      <div className="mb-4">
        <div className="input-group input-group-lg">
          <span className="input-group-text">🔍</span>
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher un film..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
          />
        </div>
      </div>
    );
}