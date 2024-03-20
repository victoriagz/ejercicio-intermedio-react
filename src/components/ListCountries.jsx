import Country from "./Country";

function ListCountries({ dataCountries }) {
  return (
    <div>
      {dataCountries.map((dataCountry, i) => {
        return <Country dataInfo={dataCountry} key={i} />;
      })}
    </div>
  );
}

export default ListCountries;
