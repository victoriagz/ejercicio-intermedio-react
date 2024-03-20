import Country from "./Country";

function ListCountries({ dataCountries }) {
  return (
    <div>
      <h1>Titulo </h1>
      {dataCountries.map((dataCountry, i) => {
        return <Country dataInfo={dataCountry} key={i} />;
      })}
    </div>
  );
}

export default ListCountries;
