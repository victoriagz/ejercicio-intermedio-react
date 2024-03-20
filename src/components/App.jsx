import "../styles/App.scss";
import data from "../services/data.json";
import FilterInput from "./FilterInput";
import AddCountryForm from "./AddCountryForm";
import ListCountries from "./ListCountries";
import { useState } from "react";
import Header from "./Header";

function App() {
  // const [constries, setCountries] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [filterContinent, setFilterContinent] = useState("All");

  const handleSearchInput = (value) => {
    setSearchValue(value);
  };

  const handleContinent = (value) => {
    setFilterContinent(value);
  };

  const filterCountries = data
    .filter((dataFilter) => {
      return dataFilter.name.common
        .toLowerCase()
        .includes(searchValue.toLowerCase());
    })
    .filter((dataFilter) => {
      return filterContinent !== "All"
        ? dataFilter.continents[0] === filterContinent
        : true;
    });

  return (
    <>
      <Header />
      <main>
        <FilterInput
          onChangeSearch={handleSearchInput}
          onChangeContinent={handleContinent}
        />
        <AddCountryForm
        // onChangeName={onChangeName}
        // onChangeCapital={onChangeCapital}
        // onChangeFlag={onChangeFlag}
        // onChangeContinent={onChangeContinent}
        />
        <ListCountries dataCountries={filterCountries} />
      </main>
    </>
  );
}

export default App;
