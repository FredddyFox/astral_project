import React, { Component } from 'react';
import styled from 'styled-components';

const MainButton = styled.a`
width:25vh;
height:4vh;
background:black;
display: inline-block;
color: white;
font-weight: 700;
text-decoration: none;
user-select: none;
outline: none;
font-size: 2.8vh;
transition-duration: 0.2s;
transition: 0.3s;
text-align:center;  
padding-top:2vh; 
padding-bottom:2vh;
    &:hover{
        color: ${p => p.color};
        outline: ${p => p.color} solid;
    }
    `;

class Button extends Component {
    render() {
        const {children, color} = this.props;
        return (
            <div>
                <MainButton color={color}>{children}</MainButton>
            </div>
        );
    }
}

export default Button;
