import {Swith,Route} from "react-router-dom";
import React, { Component } from "react";
import styled from "styled-components";

import InformationMaster from "../components/InformationMaster";
import InfotmationMasterBlock from "../components/InfotmationMasterBlock";
import ReiterationText from "../components/ReiterationText";
import Paralax from "../components/Paralax";
import Image from "../assets/20.jpg";

const MapComponent = styled.div`
width:95%;
padding-left:2.5%;
padding-right:2.5%;
padding-bottom:2.5%;
background:#00629e;
`;

class Map extends Component {
  render() {
    return (
      <div>
        <center><Paralax
          image={Image}
          title="Местонахождение деревни Хлуднево на карте."
        >
        </Paralax></center>

        <ReiterationText/>

        <MapComponent>
          <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A965701241d640bf80cacd52e0d3566619815e4d0ed574d4e977a91f318e2c391&amp;source=constructor" width="100%" height="683" frameborder="0"></iframe>
        </MapComponent>
      </div>
    );
  }
}

export default Map;