import React, { Component } from "react";
import styled from "styled-components";

const FooterMain = styled.div`
width:100%;
height:8vh;
background:#acebee;
text-align: right;
display:flex;
flex-direction:row;
justify-content:flex-end;

`;
const CommunicationsImg = styled.img`
width:8vh;
height:8vh;
`;

class Footer extends Component {
    render() {
      const {FooterImage} = this.props;
      return (
        <FooterMain>
            {FooterImage.map(Footer =>{
                return (
                    <CommunicationsImg src={Footer.src}/>
                )
            })}
        </FooterMain>  
      );
    }
  }
  export default Footer;
