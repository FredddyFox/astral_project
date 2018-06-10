import React, { Component } from "react";
import styled from "styled-components";
import Button from "../components/Button";
import { Link } from 'react-router-dom';

const Header = styled.div`
display: flex;
flex-direction: row;
justify-content: space-around;
align-items:center;
width: 100%;
height: 13vh;
background-color: black;
position: fixed;

`;

class Footer extends Component {
    render() {
      const {} = this.props;
      return (
<Header>
<Link to="/main"><Button color={"blue"}>Главная</Button></Link>
<Link to="/info"><Button color={"blue"}>Информация</Button></Link>
<Link to="/new"><Button color={"blue"}>Восстановление</Button></Link>
<Link to="/master"><Button color={"blue"}>Мастера</Button></Link>
<Link to="/map"><Button color={"blue"}>Местонахождение</Button></Link>
</Header> 
      );
    }
  }
  
  export default Footer;