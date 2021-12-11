import React from "react";


export default class Pesquisa extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      chave: '',
      pesquisa: ''
    }

    this.handleChangeValue = this.handleChangeValue.bind(this);
  }




  handleChangeValue(event) {
    const { callback } = this.props;
    callback(event.target.value);
  }



  render() {
    return (
      <form>
        <input type="text" onChange={this.handleChangeValue} />
        <button type="button" >Pesquisar</button>
      </form>
    )
  }
}