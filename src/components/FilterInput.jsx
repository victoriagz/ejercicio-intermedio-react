function FilterInput({ handleSearchInput, handleSelectValue }) {
  const handleInput = (event) => {
    const valueInput = event.target.value;
    handleSearchInput(valueInput);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Busca aquí un país..."
        onChange={handleInput}
      />
      <select onChange={handleSelectValue}>
        <option value="all">All</option>
        <option value="africa">Africa</option>
        <option value="north_america">North America</option>
        <option value="south_america">South America</option>
        <option value="europe">Europe</option>
        <option value="asia">Asia</option>
        <option value="oceania">Oceania</option>
      </select>
    </div>
  );
}

export default FilterInput;
