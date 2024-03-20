import "../styles/Country.scss";

function Country({ dataInfo }) {
  return (
    <div className="country-container">
      <div className="country-cards">
        <div className="card">
          <p className="info">{dataInfo.flag}</p>
          <h2 className="info">{dataInfo.name.common}</h2>
          <p className="info">{dataInfo.capital[0]}</p>
          <p className="info">{dataInfo.continents[0]}</p>
        </div>
      </div>
    </div>
  );
}

export default Country;
