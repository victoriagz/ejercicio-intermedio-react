function FilterInput({ onChangeSearch, onChangeContinent }) {
  const handleInput = (event) => {
    const valueInput = event.target.value;
    onChangeSearch(valueInput);
  };

  const handleChangeContinent = (event) => {
    const valueContinent = event.target.value;
    onChangeContinent(valueContinent);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Busca aquí un país..."
        onChange={handleInput}
      />
      <select onChange={handleChangeContinent}>
        <option value="All">All</option>
        <option value="Africa">Africa</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
        <option value="Europe">Europe</option>
        <option value="Asia">Asia</option>
        <option value="Oceania">Oceania</option>
        <option value="Antartica">Antartica</option>
      </select>
    </div>
  );
}

export default FilterInput;
