import React, { Component } from "react";
import styled from "styled-components";

const SizeImage = styled.img`
Width:100%;
height:98vh;
`;


class ImageText extends Component {
  render() {
    const {src} = this.props;
    return (
    <SizeImage src={src}>
    </SizeImage>
    );
  }
}

export default ImageText;