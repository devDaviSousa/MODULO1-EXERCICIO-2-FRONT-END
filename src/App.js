
import React from "react"
import axios from "axios"
import Header from "./components/Header";
import List from "./components/List";

export default class App extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      leituras: [],
    }
    this.fetchData = this.fetchData.bind(this);

  }
  async fetchData() {
    axios.get('https://hn.algolia.com/api/v1/search?query=chave')
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
        <List leituras={leituras}></List>
      </>
    )
  }
}