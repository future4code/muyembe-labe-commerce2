import React from 'react'
import styled from 'styled-components'
import Produto from './Produto'

const EstiloContainerProdutos = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Container = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px 10px;
  height: 100%;
  justify-items: center;
  margin-top: 48px;
  
  @media (max-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);
    
  }
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`

const ContainerProdutos = (props) => {

  return (
    <EstiloContainerProdutos>
      <Container>
        {props.renderizarContainer.map((produto) => {
          return (
            <Produto
              key={produto.id}
              caminhoDaImagem={produto.caminhoDaImagem}
              nome={produto.nome}
              valor={produto.valor}
              //
              produto={props.filtro}
            
            />
          )
        })}
      </Container>
    </EstiloContainerProdutos>
  )
}

export default ContainerProdutos