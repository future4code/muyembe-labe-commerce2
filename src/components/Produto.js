import React from 'react'
import styled from 'styled-components'

const ComponenteDeProduto = styled.section`
  display: flex;
  flex-direction: column;
  height: fit-content;
  width: 200px;
  background-color: #b0b4b8;
  border-radius: 5px;

  img {
    border-radius: 8px;
  }

  button {
    background-color: #000000;
    color: #ffffff;
    height: 35px;
    border-radius: 5px;
  }

  button:hover {
    background-color: #575957;
    transition: ease 0.3s;
  }
`
const InfoProduto = styled.div`
  display: flex;
  gap: 2em;
  justify-content: center;

  p {
    padding: 5px;
  }

  .product-name {
    font-weight: bold;
  }
`

const Produto = (props) => {
    return (
      <ComponenteDeProduto>
        <img src={props.caminhoDaImagem} alt="" />
        <InfoProduto>
          <p className="product-name"> {props.nome} </p>
          <p>
            <b> R$ </b> {props.valor.toFixed(2)}
          </p>
          </InfoProduto>
        <button>Adicionar ao carrinho</button>
      </ComponenteDeProduto>
    )
}

export default Produto