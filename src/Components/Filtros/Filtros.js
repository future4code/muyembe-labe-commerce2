import React from "react";
import styled from "styled-components";

//Estilização

const MainStyle = styled.main`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 300px;

  @media (max-width: 600px) {
    width: 160px;
  }
`;

const Filtro = styled.section`
  align-items: center;
  background: white;
  border-radius: 5%;
  box-shadow: -3px 7px 11px 6px rgba(0, 0, 0, 0.39);
  display: flex;
  flex-direction: column;
  gap: 1.6em;
  height: 440px;
  justify-content: center;
  margin-left: 40px;
  position: fixed;
  width: 200px;

  @media (max-width: 600px) {
    width: 120px;
    margin-left: 0;
  }
`;
const InputStyle = styled.input`
  width: 150px;

  @media (max-width: 600px) {
    width: 96px;
  }
`;

export class Filtros extends React.Component {
    
      render() {

  return (
    <MainStyle>
      <Filtro>
        <h1>Filtros:</h1>
        <p>Valor mínimo:</p>
        <InputStyle
          value={this.props.minimo}
          onChange={this.props.OnChangeMinimo}
          type='number'
      
        />

        <p>Valor máximo:</p>
        <InputStyle
        value={this.props.maximo}
        onChange={this.props.onChangeMaximo}
        type='number'
          
        />

        <p>Buscar produto:</p>
        <InputStyle
        value={this.props.texto}
        onChange={this.props.onChangeTexto}
        type='text'


   
        />
      </Filtro>
    </MainStyle>
  );
}
}