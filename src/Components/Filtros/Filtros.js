import React from 'react';
import styled from 'styled-components';

//Estilização

const MainStyle = styled.main`
width:300px;
height:100vh;
display:flex;
justify-content:center;
align-items:center;

@media(max-width:700px){
display:none;
}
`

const Filtro = styled.section`
 background:white;
 width:300px;
 height:440px;
 display:flex;
 flex-direction:column;
 margin-left:40px;
align-items:center;
border-radius:5%;
box-shadow: -3px 7px 11px 6px rgba(0,0,0,0.39);


`
const InputStyle = styled.input`
width:150px;
`



export function Filtros (){ 

    return (

        <MainStyle>

        <Filtro>

            <h1>Filtros:</h1>
            <p>Valor mínimo:</p>
            <InputStyle
            type="number"
            id="quantidade" 
            name="quantidade"
            min="0"
            />

            <p>Valor máximo:</p>
            <InputStyle
            type="number"
            id="quantidade"
            name="quantidade"
            min="0"
            />

            <p>Buscar produto:</p>
            <InputStyle
            type="text"
            id="texto"
            name="texto"
            />
        </Filtro>
        </MainStyle>
    );
}