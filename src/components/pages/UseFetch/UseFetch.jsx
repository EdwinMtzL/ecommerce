import { useEffect } from "react"
import { useFetch, useCount } from "../../../hooks"


export const UseFetch = () => {

  const { count, increment, decrement } = useCount(1 )

    const { data, isLoading } = useFetch(`https://rickandmortyapi.com/api/character/?page=${count}`);

  return (
    <>
        <h3>Personajes</h3>
        <div id="view">
          { isLoading ? <h4>Cargando</h4> : data.results.map(({id,name,gender,image}) => (
              <div key={id}>
                  <p>Nombre {name} </p>
                  <p>Genero {gender} </p>
                  <img src={image} alt="" />
            </div>
          )) } 
          <div>
            {/* RENDING CONDICIONAL */}

            {count > 1 ? <button onClick={decrement}>Atras</button> : <button onClick={decrement} disabled>Atras</button>}
            <strong>Pagina {count}</strong>
            <button onClick={increment}>Siguiente</button>
          </div>
        </div>
    </>
  )
}
