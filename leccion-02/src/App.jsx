import "./App.css";
import {useState} from 'react';



function App() {
  const [contador, setContador] = useState(0);
  const handleClickSumar = () => { setContador(contador + 1) };
  const handleClickRestar = () => { setContador(contador - 1) };
  const handleClickReset = () => {setContador(0)};

  const [darkMode, setDarkMode] = useState(true);
  const handleClickDarkMode = () => {setDarkMode(!darkMode)};

  return (
    <>
      <h3>Contador</h3>
      <p>Contador: {contador}</p>
      <button onClick={handleClickSumar}>Incrementar</button> 
      <button onClick={handleClickRestar}>Reducir</button>
      <button onClick={handleClickReset}>resetear</button>


      <div className={darkMode ? "dark" : "light"}>
      <h3>Dark Mode</h3>
      <button onClick={handleClickDarkMode}>Des/Activar</button>
      <p>Tienes activado el dark mode</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo dolore aperiam expedita reiciendis, accusantium totam sed obcaecati nisi facilis modi commodi deserunt asperiores, possimus quas sint dolor, cumque praesentium sunt.</p>
      </div>
    </>
  );
}

export default App;
