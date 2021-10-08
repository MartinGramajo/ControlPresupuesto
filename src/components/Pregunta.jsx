import React, { Fragment, useState } from "react";
import { Form, Button } from "react-bootstrap";
import Error from "./Error";

const Pregunta = ({
  guardarPresupuesto,
  guardarRestante,
  actualizarPreguntar,
}) => {
  // Definir el state de cantidad
  const [cantidad, setGuardarCantidad] = useState(0);
  const [error, GuardarError] = useState(false);

  // Funcion que lee el presupuesto
  const definirPresupuesto = (e) => {
    setGuardarCantidad(parseInt(e.target.value));
  };

  // Submit para definir el presupuesto
  const agregarPresupuesto = (e) => {
    e.preventDefault();

    // Validar
    if (cantidad < 1 || isNaN(cantidad)) {
      GuardarError(true);
      return;
    }
    // Si se pasa la validacion
    GuardarError(false);
    guardarPresupuesto(cantidad);
    guardarRestante(cantidad);
    actualizarPreguntar(false);
  };

  return (
    <Fragment>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje="El Presupuesto es Incorrecto" /> : null}
      <Form onSubmit={agregarPresupuesto}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="number"
            className="u-full-width"
            placeholder="Coloca tu presupuesto"
            onChange={definirPresupuesto}
          />
        </Form.Group>
        <Button
          className="button-primary u-full-width"
          type="submit"
          value="Definir presupuesto"
        >
          DEFINIR PRESUPUESTO
        </Button>
      </Form>
    </Fragment>
  );
};

export default Pregunta;
