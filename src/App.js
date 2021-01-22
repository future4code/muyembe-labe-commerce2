import React from "react";
import styled from "styled-components";
import GlobalStyle from "./globalStyles";
import { Filtros } from "./Components/Filtros/Filtros";
import ContainerProdutos from "./Components/Produto/ContainerProdutos";
import Carrinho from "./Components/Carrinho/Carrinho"
import iconeCarrinho from "./img/carrinho.png"

const ProdutosMain = styled.main`
  display: flex;
  height: 100vh;
  width: 100vw;

  .iconeCarrinho {
    bottom: 36px;
    position: absolute;
    right: 28px;
    width: 4%;
  }
`

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        nome: "item A",
        valor: 10.0,
        caminhoDaImagem: "https://picsum.photos/200/200",
      },

      {
        id: 2,
        nome: "item B",
        valor: 20.0,
        caminhoDaImagem: "https://picsum.photos/200/201",
      },

      {
        id: 3,
        nome: "item C",
        valor: 30.0,
        caminhoDaImagem: "https://picsum.photos/201/202",
      },

      {
        id: 4,
        nome: "item D",
        valor: 40.0,
        caminhoDaImagem: "https://picsum.photos/201/203",
      },

      {
        id: 5,
        nome: "item E",
        valor: 50.0,
        caminhoDaImagem: "https://picsum.photos/201/200",
      },

      {
        id: 6,
        nome: "item F",
        valor: 60.0,
        caminhoDaImagem: "https://picsum.photos/202/200",
      },

      {
        id: 7,
        nome: "item G",
        valor: 70.0,
        caminhoDaImagem: "https://picsum.photos/203/200",
      },

      {
        id: 8,
        nome: "item H",
        valor: 80.0,
        caminhoDaImagem: "https://picsum.photos/201/201",
      },
    ],

    carrinho: [],
    valorTotal: "",
    carrinhoNaTela: false
  }

  mostrarCarrinho = () => {
    this.setState({ carrinhoNaTela: !this.state.carrinhoNaTela })
  }
  
  adicionarAoCarrinho = (produto) => {
    let validarCarrinho = [...this.state.carrinho]
    let listaCarrinho = validarCarrinho.filter (
      (objeto) => objeto.id === produto.id
    )

    if (listaCarrinho.length > 0) {
      listaCarrinho[0].quantidade += 1
    } else {
      const novoObjeto = {
        id: produto.id,
        nome: produto.nome,
        valor: produto.valor,
        quantidade: 1,
      }
      validarCarrinho.push(novoObjeto);
    }
    this.setState({ carrinho: validarCarrinho })
  }

  somarProdutoNoCarrinho = (objeto) => {
    let validarCarrinho= [...this.state.carrinho]
    let listaCarrinho = validarCarrinho.filter (
      (objetoNoCarrinho) => objeto.id === objetoNoCarrinho.id
    )
    listaCarrinho[0].quantidade += 1
    this.setState({ carrinho: validarCarrinho })
  }

  subtrairProdutoNoCarrinho = (objeto) => {
    let validarCarrinho = [...this.state.carrinho]
    let listaCarrinho = validarCarrinho.filter (
      (objetoNoCarrinho) => objeto.id === objetoNoCarrinho.id
    )
    if (listaCarrinho[0].quantidade > 1) {
      listaCarrinho[0].quantidade -= 1
    }
    this.setState({ carrinho: validarCarrinho })
  }

  excluirProdutoDoCarrinho = (objeto) => {
    let validarCarrinho = [...this.state.carrinho];
    let listaCarrinho = validarCarrinho.filter (
      (objetoNoCarrinho) => objeto.id === objetoNoCarrinho.id
    )
    validarCarrinho.splice(listaCarrinho, 1)
    this.setState({ carrinho: validarCarrinho })
  }

  limparTodoOCarrinho = () => { this.setState({ carrinho: [] }) }

  render() {
    let valorTotal = 0

    this.state.carrinho.map (
      (objeto) => {
        valorTotal += objeto.valor * objeto.quantidade
      }
    )

    const { produtos } = this.state
    return (
      <ProdutosMain>
        <GlobalStyle />
        <Filtros />
        <ContainerProdutos renderizarContainer = {produtos} adicionarAoCarrinho = {this.adicionarAoCarrinho} />
        {this.state.carrinhoNaTela && (
            <Carrinho
              carrinho={this.state.carrinho}
              somarProdutoNoCarrinho={this.somarProdutoNoCarrinho}
              subtrairProdutoNoCarrinho={this.subtrairProdutoNoCarrinho}
              excluirProdutoDoCarrinho={this.excluirProdutoDoCarrinho}
              limparTodoOCarrinho={this.limparTodoOCarrinho}
              valorTotal={valorTotal}
            />
          )}
        <img className="iconeCarrinho" src={iconeCarrinho} onClick={this.mostrarCarrinho} />
      </ProdutosMain>
    )
  }
}


export default App
