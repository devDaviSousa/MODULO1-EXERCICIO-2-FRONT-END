import React from "react";
import { Container } from "./styles";


export default class List extends React.Component {
  render() {

    const { leituras } = this.props;

    return (
      <Container>
        {
          leituras.map((item, index) => (
            <div key={index}>
              <h2> {item.author}</h2>
              <p> {item.title}</p>
              <button>
                <a href={item.url}> Ler</a>
              </button>
            </div>
          ))
        }
      </Container>

    )
  }

}













