import React from 'react';
import styled from 'styled-components';

//Estilização
const Carrinho = styled.section`
 border: 1px solid black;
 background:white;
 width:20vw;
 height:50vh;

`

export function Carrinhos (){ 

    return (

        <Carrinho>
            <h1>Carrinho</h1>
            <label>Total:</label>


          
        </Carrinho>
    );
}