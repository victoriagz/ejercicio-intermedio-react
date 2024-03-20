import "../styles/Country.scss";

function Country({ dataInfo }) {
  return (
    <div className="country-cards">
      <div className="card">
        <div className="info">
          <p>Nombre del país: {dataInfo.name.common}</p>
        </div>
        <div className="info">
          <p>Bandera: {dataInfo.flag}</p>
        </div>
        <div className="info">
          <p>Capital: {dataInfo.capital[0]}</p>
        </div>
        <div className="info">
          <p>Continente: {dataInfo.continents[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default Country;
