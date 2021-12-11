import React from "react";
import { Container } from "./styles";

export default class Header extends React.Component {


  render() {


    return (
      <Container>
        <h1>{process.env.REACT_APP_NAME}</h1>
      </Container>
    )
  }
}