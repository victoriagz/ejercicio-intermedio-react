function FilterInput({ handleSearchInput }) {
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
    </div>
  );
}

export default FilterInput;
