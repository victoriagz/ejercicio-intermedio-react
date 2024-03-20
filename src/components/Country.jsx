import "../styles/Country.scss";

function Country({ dataInfo }) {
  return (
    <div className="country-container">
      <div className="country-cards">
        <div className="card">
          <div className="info">
            <p>{dataInfo.flag}</p>
          </div>
          <div className="info">
            <p>{dataInfo.name.common}</p>
          </div>
          <div className="info">
            <p>{dataInfo.capital[0]}</p>
          </div>
          <div className="info">
            <p>{dataInfo.continents[0]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Country;
