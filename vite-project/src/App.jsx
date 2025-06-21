import Galeria from "./components/Galeria";
import data from "./data/galeria.json";
import { useState } from "react"; //Hooks

function App() {
  const [galeria, setGaleria] = useState(data);
  const [valueSearch, setValueSearch] = useState("");

  const handleChangeSearch = (ev) => {
    setValueSearch(ev.target.value);
  };

  const filterFotos = galeria.filter((foto) =>
    foto.title.toLowerCase().includes(valueSearch.toLowerCase())
  );
  return (
    <>
      <h1>Galería</h1>
      <input
        type="text"
        placeholder="buscar foto"
        id="search"
        value={valueSearch}
        onChange={handleChangeSearch}
      />
      <Galeria fotos={filterFotos} />
    </>
  );
}

export default App;
