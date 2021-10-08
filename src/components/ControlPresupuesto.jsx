import React, {Fragment} from 'react'

export default function ControlPresupuesto({presupuesto, restante}) {
    return (
        <Fragment>
            <div className="alert alert-primary">
                Presupuesto:$ { presupuesto }
            </div>
            <div className="alert">
                Restante: $ { restante }
            </div>
        </Fragment>
    )
}
