import "./global.css";
import { ListCountries } from "./components/left/ListCountries";
import { Map } from "./components/right/Map";

function App() {
  return (
    <main className="h-screen w-screen max-w-full md:flex byjkielbaska">
      <ListCountries />
      <Map />
    </main>
  );
}

export default App;
