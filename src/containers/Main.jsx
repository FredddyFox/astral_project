import {Swith,Route} from "react-router-dom";
import React, { Component } from "react";
import styled from "styled-components";
import { Link } from 'react-router-dom';

import {AccessMenuName} from '../constants/Accessmenu';
import {AccessMenuName2} from '../constants/Accessmenu2';
import {FooterImage} from '../constants/Footer';

import Footer from "../containers/Footer";
import Paralax from "../components/Paralax";
import Button from "../components/Button";
import Accessmenu from "../components/Accessmenu";
import Image from "../assets/00.jpg";
import Image2 from "../assets/200.jpg";
import Image3 from "../assets/150.jpg";

const Text = `
Деревня Хлуднево образовалась в середине XV века. 
Входила в приход Пятницкой церкви села Которь. Название деревни по легенде произошло от жителя этой деревни-Хлуди. 
По другой версии деревня находилась на тракте Мещевск — Жиздра, где располагалась почтовая станция и кучера не только отдыхали, но и меняли хлысты. 
Хлыст назывался хлудом.`;

const Text2 = `
Пожалуй главной проблемой деревни Хлуднево является ее удаленность от областного центра. Современного туриста не заставишь ради полуторачасового посещения проделать многочасовой маршрут. Этим воспользовались многочисленные «дельцы от культуры», объявившие себя «Хлудневскими мастерами».
`;

const Text3 = `
НАРОДНОЕ ИСКУССТВО — синтетическое по характеру иск-во, изначально связанное с трудовой деятельностью человека и представляющее одновременно материальную и духовную культуру.
`;

class Main extends Component {
  render() {
    return (
      <div>
        <Paralax
        image={Image}
          title="Хлуднево"
          button={<Link to="/info"><Button color={"#b3b3b3"}>Подробнее</Button></Link>}
        >
          {Text}
        </Paralax>
        
        <Accessmenu AccessMenuName={AccessMenuName2}
        ColorTitleInterior="#1496c5"
        />
        <Paralax
        image={Image2}
          title="Создание виртуальной деревни Хлуднево на базе парка культуры и отдыха."
          button={<Link to="/new"><Button color={"#b3b3b3"}>Подробнее</Button></Link>}
        >
          {Text2}
        </Paralax>
        <Accessmenu AccessMenuName={AccessMenuName} 
                ExternalContainer="#1c496e"
                InteriorContainer="#1c496e"
                
        />
        <Paralax
        image={Image3}
          title="Народные мастера деревни Хлуднево."
          button={<Link to="/master"><Button color={"#b3b3b3"}>Подробнее</Button></Link>}
        >
          {Text3}
        </Paralax>        
      </div>
    );
  }
}

export default Main;
