import React from 'react';
import './titulo.css';

function MyTitulo(props) {
    return (
        <h2 className="subtitulo">{props.titulo}</h2>
    );
}

export default MyTitulo;