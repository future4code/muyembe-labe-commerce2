import React from 'react'
import styled from 'styled-components'

const ComponenteDeProduto = styled.section`
  background-color: #b0b4b8;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 200px;

  img {
    border-radius: 8px;
  }

  button {
    background-color: #000000;
    border-radius: 5px;
    color: #ffffff;
    font-size: 12px;
    height: 35px;
  }

  button:hover {
    background-color: #575957;
    transition: ease 0.3s;
  }

  @media (max-width: 600px) {
    font-size: 12px;
    width: 120px;
  }
`
const InfoProduto = styled.div`
  display: flex;
  gap: 2em;
  justify-content: center;

  p {
    padding: 8px;
  }

  .nome-produto {
    font-weight: bold;
  }
`

const Produto = (props) => {
    return (
      <ComponenteDeProduto>
        <img src={props.caminhoDaImagem} alt="" />
        <InfoProduto>
          <p className="nome-produto"> {props.nome} </p>
          <p>
            <b> R$ </b> {props.valor}
          </p>
          </InfoProduto>
        <button onClick = {props.adicionarAoCarrinho}>Adicionar ao carrinho</button>
      </ComponenteDeProduto>
    )
}

export default Produto