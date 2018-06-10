import React, { Component } from "react";
import styled from "styled-components";

const Description = styled.div`
Width:100%;
height:98vh;
background:${p=>p.ExternalContainer||"white"};
display:flex;
flex-direction:row;
justify-content:space-between;
align-items:center;
`;


const DescriptionTematic = styled.div`
width:25%;
height:70vh;
background:${p=>p.InteriorContainer||"white"};
color:#333333;
font-size:3vh;
text-align:justify;
`;


const ImgContainer = styled.img`
width:90%;
height:40vh;
`;

const Article = styled.a`
text-decoration: none;
color:${p=>p.ColorTitleInterior||"white"};
`;

const TextDescription = styled.p`
color:white;
`;
class Accessmenu extends Component {
  render() {
    const {AccessMenuName, ExternalContainer,InteriorContainer,ColorTitleInterior} = this.props;
    return (
      <Description ExternalContainer={ExternalContainer}>
          {AccessMenuName.map(Accessmenu =>{
              return (
              <DescriptionTematic InteriorContainer={InteriorContainer}>
              <center>
                  <ImgContainer src={Accessmenu.src}/>
                  <h4><Article ColorTitleInterior={ColorTitleInterior} href={Accessmenu.href}>{Accessmenu.label}</Article></h4>
                  <TextDescription>{Accessmenu.text}</TextDescription>
              </center>
          </DescriptionTematic>
              )
          })}
      </Description>  
    );
  }
}

export default Accessmenu;