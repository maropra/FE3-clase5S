import React from 'react';
import MyLista from '../Lista';
import MyTitulo from '../Titulo';
import './canino.css';

function MyCanino(props) {
    const { titulo, nombre, apodo, edad, raza } = props;
    return (
        <div className="tarjeta">
            <MyTitulo titulo={titulo} />
            <MyLista nombre={nombre} apodo={apodo} edad={edad} raza={raza} />
        </div>
    );
}

export default MyCanino;