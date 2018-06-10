import React, { Component } from "react";
import styled from "styled-components";

const Description = styled.div`
Width:100%;
height:98vh;
background:white;
font-size:3.5vh;
color:black;
padding-top:2vh;
padding-bottom:3vh;
display:flex;
flex-direction:row;
justify-content:flex-end;
align-items:center;
`;
const TextIndentation = styled.div`
margin-left:6vh;
margin-right:6vh;
text-align: justify;
color:black;
`;

class TextBlock extends Component {
  render() {
    const {title,text} = this.props;
    return (
    <Description>
        <TextIndentation>
                  <center><h1>{title}</h1></center>
                  <p>{text}</p>
        </TextIndentation>
    </Description>
    );
  }
}

export default TextBlock;