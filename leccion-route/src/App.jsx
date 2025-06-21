import "./App.css";
/* import { useState } from "react"; */
import { Routes, Route, Link } from "react-router";
import Header from "./componentes/Header";
import DivHeader from "./componentes/DivHeader";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/packages" element={<div>No apto para manazas</div>} />
        <Route index path="/" element={<h1>Overview</h1>} />
        <Route path="/repositories" element={<h1>Repositories Text</h1>} />
      </Routes>
    </>
  );
}

export default App;
