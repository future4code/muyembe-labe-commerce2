import React from 'react';
import styled from 'styled-components';

//Estilização
const Filtro = styled.section`
 border: 1px solid black;
 background:white;
 width:20vw;
 height:50vh;

`

export function Filtros (){ 

    return (

        <Filtro>

            <h1>Filtros:</h1>
            <p>Valor mínimo:</p>
            <input
            type="number"
            id="quantidade" 
            name="quantidade"
            min="0"
            />

            <p>Valor máximo:</p>
            <input
            type="number"
            id="quantidade"
            name="quantidade"
            min="0"
            />

            <p>Buscar produto:</p>
            <input
            type="text"
            id="texto"
            name="texto"
            />
        </Filtro>
    );
}