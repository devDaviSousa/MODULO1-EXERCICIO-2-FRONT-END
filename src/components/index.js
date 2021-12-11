import React from "react";

export default class Pesquisa extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      pesquisa: ''
    }

    this.handleChangeValue = this.handleChangeValue.bind(this);
    this.quandoClicar = this.quandoClicar.bind(this);
  }

  handleChangeValue(event) {
    this.setState({ pesquisa: event.target.value });
  }

  quandoClicar() {
    const { callback } = this.props;
    callback(this.state.pesquisa);
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChangeValue} />
        <button type="button" onClick={this.quandoClicar}>Pesquisar</button>
      </form>
    )
  }
}