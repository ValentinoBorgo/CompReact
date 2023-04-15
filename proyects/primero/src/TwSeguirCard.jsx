import './App.css';
// Esta utilidad a importar es para darle memoria(ESTADOS DISTINTOS) a los componentes
// Tambien se conocen con el nombre de "HOCK".
import { useState } from 'react';

// Poniendo children como PROP te toma cualquier elemento html del orto lado en la App.jsx

export function TwSeguirCard ({children = 'Desconocido', img, nombre = 'Desconocido', initialTeSigue}) {
    
    const [teSigue, cambiarEstado] = useState(initialTeSigue);
    // primera posicion tenemos el estado en si(falso,verdadero)
    // const seguido = state[0];
    // segunda opcion tenemos la accion para cambiar de f a v, o de v a f.
    // const noSeguido = state[1];
    

    // LAS PROPIEDADES SON INMUTABLES


    // LA PROP CHILDREN SIRVE PARA PODER PASAR CUALQUIER TIPO DE ELEMENTO DESDE EL APP.JSX DENTRO DE LA EQUIQUETA TWSEGUIRCARD

    // Cambia el texto que contiene dependiendo de la PROP teSigue
    const texto = teSigue ? 'Siguiedo' : 'Seguir';
    
    // Depediendo de si me sigue o no va a tener distintas clases
    const botonClassName = teSigue ? 'tw-boton esta-seguido' : 'tw-boton';

    const clikeoBtn = () =>{
        // La segunda posicion del array contiene la funcionalidad de cambiar el estado
        cambiarEstado(!teSigue);
    }

    return(
        <article className='vale-tw-seguir'>
            <header className='tw-header'>
                <img className='tw-img' src={img} alt="Avatar" />
                <div className='tw-cardinfo'>
                    <strong>{children}</strong>
                    <span className='tw-infouser'>@{nombre}</span>
                </div>
            </header>

            <aside>
                <button className = {botonClassName} onClick={clikeoBtn}>
                    <span className='tw-texto'>{texto}</span>
                    <span className='tw-dejarDeSeguir'>Dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
};