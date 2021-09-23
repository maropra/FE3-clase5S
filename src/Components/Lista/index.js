import React from 'react';
import './lista.css'

function MyLista(props) {
    return (
        <ul className="lista">
            <li>Nombre: {props.nombre}</li>
            <li>Apodo: {props.apodo}</li>
            <li>Edad: {props.edad}</li>
            <li>Raza: {props.raza}</li>
        </ul>

    );

}

export default MyLista;