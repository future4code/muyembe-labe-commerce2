import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import  Filtros from "./Components/Filtros/Filtros";
import ContainerProdutos from "./Components/Produto/ContainerProdutos";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
`;

const ProdutosMain = styled.main`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

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
    filtroTexto: " ", //FILTRO
    filtroMaximo: null,//FILTRO
    filtroMinimo: null,//FILTRO
  };

  render() {
    const { produtos } = this.state;
    return (
      <ProdutosMain>
        
        <Filtros
       
        
        />
        

        <ContainerProdutos renderizarContainer={produtos} />
      </ProdutosMain>
    );
  }
}

export default App;
