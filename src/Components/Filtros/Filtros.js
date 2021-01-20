import React from 'react';
import styled from 'styled-components';

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
`

const FiltroContainer = styled.section`
    align-items: center;
    background: white;
    border-radius: 5%;
    box-shadow: -3px 7px 11px 6px rgba(0,0,0,0.39);
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
`
const InputStyle = styled.div`
    width: 150px;

    @media (max-width: 600px) {
        width: 96px;
    }
`



class Filtro extends React.Component {


    render (){

        return (
          <MainStyle>

            <FiltroContainer>
            <h1>Filtros</h1>
                <InputStyle>
                    <p>Valor Mínimo</p>
                    <input type="number" onChange={this.props.minimo} min={0}></input>
                </InputStyle>
                <InputStyle>
                    <p>Valor Máximo</p>
                    <input type="number" onChange={this.props.maximo} ></input>
                </InputStyle>
                <InputStyle>
                    <p>Buscar Produto</p>
                    <input type="text" onChange={this.props.busca}></input>
                </InputStyle>
            </FiltroContainer>
          </MainStyle>
        );
   
}

}

export default Filtro;