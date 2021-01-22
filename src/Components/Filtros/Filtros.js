import React from "react";

class Filtros extends React.Component {
  filtroTexto = (event) => {
    this.props.filtroTexto(event.target.value);
  };

  filtroMaximo = (event) => {
    this.props.filtroMaximo(event.target.value);
  };

  filtroMinimo = (event) => {
    this.props.filtroMinimo(event.target.value);
  };

  render() {
    return (
      <form>
        <h1>Filter</h1>
        <p>Valor Mínimo:</p>
        <input type="number" onChange={this.filtroMinimo} />
        <p>Valor Máximo:</p>
        <input type="number" onChange={this.filtroMaximo} />
        <p>Buscar Produto:</p>
        <input type="text" onChange={this.filtroTexto} />
      </form>
    );
  }
}
export default Filtros;