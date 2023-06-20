import "./index.css";
import { CountriesList } from "./components/left/CountriesList";
import { Map } from "./components/right/Map";

function App() {
  return (
    <main className="h-screen w-screen max-w-full flex">
      <CountriesList />
      <Map />
    </main>
  );
}

export default App;
