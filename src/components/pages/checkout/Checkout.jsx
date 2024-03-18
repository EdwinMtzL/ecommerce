import React from 'react'

export const Checkout = ( { sendingData,captureInfo }) => {
  return (
    <div>
        <h2>aca va el checkout</h2>


        <form onSubmit={ sendingData }>
            <div className="form-floating  mb-3">
                <input type="text" name="name" className="form-control" id="floatingInput" placeholder="Ingresa tu nombre"  onChange={captureInfo} />
                <label for="floatingInput">Ingresa tu nombre</label>
            </div>
            <div className="form-floating  mb-3">
                <input type="text" name="lastName" className="form-control" id="lastname" placeholder='Ingresa tu apellido' onChange={captureInfo} />
                <label for="floatingInput" className="form-label" id="floatingInputLast">Ingresa tu apellido</label>
            </div> 
            <div>
                <button className='btn btn-primary' >Enviar</button>
            </div>
        </form>
    </div>
  )
}
