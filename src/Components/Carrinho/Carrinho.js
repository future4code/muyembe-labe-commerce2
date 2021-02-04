import React from 'react';
import styled from 'styled-components';

const CampoDoCarrinho = styled.div`
  background-color: #fff;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  padding: 12px;
  width: 16vw;

  h4 {
    margin-bottom: 10px;
    background-color: #fff;
  }

  p {
    background-color: #fff;
  }
`

const ProdutoNoCarrinho = styled.div`
  border-bottom: 1px dashed black;
  display: flex;
  justify-content: space-between;
`

const BotaoMudarQuantidade = styled.button`
  background-color: #000;
  border: 1px solid black;
  color: #fff;
  cursor: pointer;
  margin: 0 8px 0 12px;
  outline: none;
  width: 16px;
`

const BotaoExcluirProduto = styled.button`
    cursor: pointer;
    padding: 3px;
    background-color: #ffffff;
    color: #bec0c2;
    border: none;
    outline: none;
    font-weight: bold;
    :hover {
      color: #55595c;
    }
`

const BotaoLimparCarrinho = styled.button`
  background-color: #000000;
  border-radius: 8px;
  color: #ffffff;
  cursor: pointer;
  height: 36px;
  :hover {
    background-color: #575957;
    transition: ease 0.3s;
  }
  
`

const Carrinho = (props) => {
  let nome = props.carrinho.map((objeto) => {
    return (
      <ProdutoNoCarrinho key={objeto.id}>
        <p>
          <BotaoMudarQuantidade onClick = { () => props.subtrairProdutoNoCarrinho(objeto) }> - </BotaoMudarQuantidade>
          {objeto.quantidade}
          <BotaoMudarQuantidade onClick = { () => props.somarProdutoNoCarrinho(objeto) }> + </BotaoMudarQuantidade>
          {" "}
          {objeto.nome}
        </p>
        <BotaoExcluirProduto onClick = { () => props.excluirProdutoDoCarrinho(objeto) }> Excluir produto </BotaoExcluirProduto>
      </ProdutoNoCarrinho>
    )
  })

  return (
    <CampoDoCarrinho>
      <h4>Seu carrinho de compras:</h4>
      {nome}
      <p>Total: R${props.valorTotal.toFixed(2)}</p>
      <BotaoLimparCarrinho onClick={props.limparTodoOCarrinho}>Limpar carrinho</BotaoLimparCarrinho>
    </CampoDoCarrinho>
  );
};

export default Carrinho