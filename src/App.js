import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pregunta from './components/Pregunta';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {
  //Definir el State
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPreguntar] = useState(true);
  const [gastos, guardarGastos] = useState([]);


  //  Funcion que se ejecuta cuando se agrega un nuevo gasto 
  const agregarNuevoGasto = gasto => {
    guardarGastos([
      ...gastos, gasto
    ])
  }

  return (
    <div className="container" >
      <header>
        <h1> Gasto semanal </h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta ? (<Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPreguntar={actualizarPreguntar}
          />) : (

            <div className="row">
              <div className="one-half column">
                <Formulario
                  agregarNuevoGasto={agregarNuevoGasto}
                />
              </div>
              <div className="one-half column">
                  <Listado
                    gastos={gastos}
                  />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
              </div>
            </div>
          )}
        </div>
      </header>
    </div>
  );
}

export default App;
