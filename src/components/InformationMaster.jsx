import React, { Component } from "react";
import styled from "styled-components";

const ProfiRemeslaContent = styled.div`
width:95%;
height:35vh;
background:#e0dbc5;
margin-top:4vh;
margin-left:2.5%;
position:absolute;
z-index:101;
`;

const ProfiRemeslaImg = styled.img`
width:28%;
height:33vh;
position:absolute;
background:black;
margin-top:1vh;
margin-left:1vh;
`;

const ProfiRemeslaText = styled.div`
width:68%;
height:33vh;
position:absolute;
background:#e0dbc5;
margin-left:30%;
font-size: 2.5vh;
`;


class InformationMaster extends Component {
  render() {
    const {src,title,text} = this.props;
    return (
    <ProfiRemeslaContent >

        <ProfiRemeslaImg src={src}>
        </ProfiRemeslaImg>

        <ProfiRemeslaText>
        <center><h3>{title}</h3></center>
        <p>{text}</p>
        </ProfiRemeslaText>

    </ProfiRemeslaContent>
    );
  }
}

export default InformationMaster;