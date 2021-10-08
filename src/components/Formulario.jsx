import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";

export default function Formulario({guardarGasto, guardarCrearGasto  }) {
  // state de gastos
  const [nombre, guardarNombre] = useState("");
  const [cantidad, guardarCantidad] = useState();
  const [error, guardarError] = useState(false);
 

  // Cuando el usuario agrega un gasto
  const agregarGasto = (e) => {
    e.preventDefault();

    //Validar
    if (cantidad < 1 || isNaN(cantidad) || nombre.trim() === "") {
      guardarError(true);
      return;
    }
    guardarError(false);

    // construir el gasto
    const gasto = {
      nombre,
      cantidad,
      id: shortid.generate(),
    }

    // pasar el gasto al componente principal
    guardarGasto(gasto);
    guardarCrearGasto(true)

    // resetear el form
      guardarNombre('');
      guardarCantidad(0);
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aqui</h2>
      {error ? (
        <Error mensaje="Ambos campos son obligatorios o Presupuesto Incorrecto" />
      ) : null}
      <div className="campo">
        <label className="mt-2">
          {" "}
          <b> Nombre Gasto </b>
        </label>
        <input
          type="text"
          className="u-full-width"
          placeholder="Ej. Transporte"
          value={nombre}
          onChange={(e) => guardarNombre(e.target.value)}
        />
      </div>

      <div className="campo">
        <label className="mt-2">
          <b>Cantidad Gasto</b>
        </label>
        <input
          type="number"
          className="u-full-width"
          placeholder="Ej. 300"
          value={cantidad}
          onChange={(e) => guardarCantidad(parseInt(e.target.value))}
        />
      </div>

      <input
        type="submit"
        className="button-primary u-full-width"
        value="Agregar gasto"
      />
    </form>
  );
}
