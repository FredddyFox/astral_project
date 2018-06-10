import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 110vh;
  font-size: 5vh;
  background: url(${p => p.image}) 100% 100% / cover no-repeat fixed;
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items:center;
`;

const ContainerText = styled.div`
  width: 72%;
  height: 70vh;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  color: white;
  border-radius: 4vh;
  text-shadow: 1px 1px 0 black, -1px -1px 0 black;

`;
const Caption = styled.h1`
font-family: 'DS Yermak_D', arial;
font-size: 100%;
text-shadow: 0.75vh 0.75vh 0.75vh black,1px 1px 0 black, -1px -1px 0 black;
`;

class Paralax extends Component {
  render() {
    const { children, title, button, image } = this.props;
    return (
      <Container image={image}>
        <ContainerText>
          <Caption style={{ color: "#DEB887" }}>{title}</Caption>
          <p>{children}</p>
          <center>{button}</center>
        </ContainerText>
      </Container>
    );
  }
}

export default Paralax;
