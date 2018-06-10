import {Swith,Route} from "react-router-dom";
import React, { Component } from "react";
import styled from "styled-components";

import {AccessMenuName} from '../constants/Accessmenu';
import {AccessMenuName2} from '../constants/Accessmenu2';
import {FooterImage} from '../constants/Footer';
import {INFO} from '../constants/TextBlock';
import {IMAGE} from '../constants/ImageTextInformation';

import ImageText from "../components/ImageText";
import Paralax from "../components/Paralax";
import Button from "../components/Button";
import Image from "../assets/150.jpg";
import TextBlock from "../components/TextBlock";
import Footer from "../containers/Footer";

class New extends Component {
  render() {
    return (
      <div>
        <center>
          <Paralax
            image={Image}
            title="Создание виртуальной деревни Хлуднево на базе парка культуры и отдыха."
        >
          </Paralax>
        </center>

        <TextBlock 
          text={INFO.Restavration.text}
        >  
        </TextBlock>

        <ImageText 
          src={IMAGE.ImageInformation1.src}>
        </ImageText>

        <TextBlock 
          title={INFO.Restavration2.title}
          text={INFO.Restavration2.text}
        >  
        </TextBlock>

        <ImageText 
          src={IMAGE.ImageInformation3.src}>
        </ImageText>
        
        <TextBlock 
          title={INFO.Restavration3.title}
          text={INFO.Restavration3.text}
        >  
        </TextBlock>

        <ImageText 
          src={IMAGE.ImageInformation4.src}>
        </ImageText>
      </div>
    );
  }
}

export default New;
