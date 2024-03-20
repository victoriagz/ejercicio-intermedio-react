import "../styles/App.scss";
import data from "../services/data.json";
import ListCountries from "./ListCountries";

function App() {
  return (
    <main>
      <ListCountries dataCountries={data} />
    </main>
  );
}

export default App;
