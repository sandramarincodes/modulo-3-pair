import React from "react";

function Galeria({ fotos }) {
  return (
    <div>
      {fotos.map((foto) => (
        <li key={foto.id}>
          <h2>{foto.title}</h2>
          <img src={foto.url} alt="" />
        </li>
      ))}
    </div>
  );
}

export default Galeria;
