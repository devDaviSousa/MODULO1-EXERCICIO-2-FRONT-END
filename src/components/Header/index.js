import React from "react";
import { Container } from "./styles";

export default class Header extends React.Component {


  render() {
    const { title } = this.props;

    return (
      <Container>
        <h1>{title}</h1>
      </Container>
    )
  }
}