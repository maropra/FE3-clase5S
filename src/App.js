import React from "react";
import MyCanino from "./Components/Canino";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="titulo-principal">Lista de caninos en la Veterinaria</h1>

      <MyCanino
        titulo="Perro 1"
        nombre="Firulais"
        apodo="Firu"
        edad="2 años"
        raza="Callejero"
      />

      <MyCanino
        titulo="Perro 2"
        nombre="Tomate"
        apodo="Toto"
        edad="1 año"
        raza="Smokin"
      />

      <MyCanino
        titulo="Perro 3"
        nombre="Milagros"
        apodo="Mili"
        edad="12 años"
        raza="Caniche"
      />
    </div>
  );
}

export default App;
