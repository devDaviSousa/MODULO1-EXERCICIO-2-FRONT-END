
import React from "react"
import axios from "axios"
import Header from "./components/Header";
import List from "./components/List";
import Pesquisa from "./components/Pesquisa";
import { GlobalStyle } from "./styles/global";

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      leituras: [],
    }
    this.fetchData = this.fetchData.bind(this);
    this.filterList = this.filterList.bind(this);
  }

  filterList(value) {
    this.fetchData(value)
  }

  async fetchData(value) {
    axios.get('https://hn.algolia.com/api/v1/search?query=' + value)
      .then(response => {
        const data = response.data.hits
        this.setState({ leituras: data })

      })
  }

  async componentDidMount() {
    this.fetchData('');
  }

  render() {
    const { leituras } = this.state
    return (
      <>

        <Header title="modulo 1 - exercio 2" />
        <Pesquisa callback={this.filterList}></Pesquisa>
        <List leituras={leituras}></List>
        <GlobalStyle />
      </>
    )
  }
}