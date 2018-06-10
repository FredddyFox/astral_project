import React, { Component } from "react";
import styled from "styled-components";

const ProfiRemesla = styled.div`
width:100%;
height:35vh;
background:#00629e;
display:flex;
flex-direction:column;
justify-content:center;
align-items:stretch;
padding-bottom:5vh;
`;

class InfotmationMasterBlock extends Component {
  render() {
      const {main} = this.props;
    return (
    <ProfiRemesla>{main}</ProfiRemesla>
    );
  }
}

export default InfotmationMasterBlock;