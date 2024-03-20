import "../styles/App.scss";
import data from "../services/data.json";
import FilterInput from "./FilterInput";
import ListCountries from "./ListCountries";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");

  const handleSearchInput = (value) => {
    setSearchValue(value);
    console.log(value);
  };

  const filterCountries = data.filter((dataFilter) => {
    return dataFilter.name.common
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });
  return (
    <main>
      <h1> Countries </h1>
      <FilterInput handleSearchInput={handleSearchInput} />
      <ListCountries dataCountries={filterCountries} />
    </main>
  );
}

export default App;
