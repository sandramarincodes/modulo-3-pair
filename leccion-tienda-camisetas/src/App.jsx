/* import { useState } from "react"; */
import { useState, useEffect } from "react";
import "./App.css";
import callToApi from './services/api';
import Catalog from "./components/Catalog";

function App() {
    const [products, setProducts] = useState([]);

useEffect( () =>{
 callToApi().then(data => setProducts(data))
}, []);
 



  return (
    <>
    <Catalog products={products} />
    </>
  );
}

export default App;
