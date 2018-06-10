import React, { Component } from "react";
import styled from "styled-components";

const InformationText = styled.div`
width:100%;
height:40vh;
background:#00629e;
color:white;
font-size:3.5vh;
padding-top:3vh;
`;
const TextOtstup = styled.div`
margin-left:6vh;
margin-right:6vh;
text-align: justify;
`;

const TEXT ='НАРОДНОЕ ИСКУССТВО — синтетическое по характеру иск-во, изначально связанное с трудовой деятельностью человека и представляющее одновременно материальную и духовную культуру. Н. и. восходит к синкретизму первобытной культуры, сохраняет в своей основе мифо-поэтическое чувство мира. Развивается как коллективное творчество на основе преемственности и традиции; носит преимущественно эпический характер (Эпос), к-рый определяется и самим типом творчества, коллективным методом работы над образом, основанном на подробности, повторе и вариации. Образная структура Н. и сохраняет изначальный образ, входящий в синтезе с его вариациями и новыми элементами в единую худож. целостность произв. Синтез заложен в самой образности Н. и.. в принципах формообразования, где определяющими являются родовая сущность и функция.';

class ReiterationText extends Component {
  render() {
    const {} = this.props;
    return (
    <InformationText >
        <TextOtstup>
            {TEXT}
        </TextOtstup>
    </InformationText>
    );
  }
}

export default ReiterationText;