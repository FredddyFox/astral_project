
import React, { Component } from "react";
import styled from "styled-components";
import { Route,Switch,Router, Redirect } from 'react-router-dom';
import {FooterImage} from './constants/Footer';
import {INFO} from './constants/TextBlock';
import {IMAGE} from './constants/ImageTextInformation';
import {SHORT_INFORMATION} from './constants/InformationMaster';

import Info from "./containers/Info";
import Main from "./containers/Main";
import New from "./containers/New";
import Master from "./containers/Master";
import Map from "./containers/Map";

import Header from "./containers/Header";
import Footer from "./containers/Footer";
import TextBlock from "./components/TextBlock";
import ImageText from "./components/ImageText";
import ReiterationText from "./components/ReiterationText";
import InformationMaster from "./components/InformationMaster";
import InfotmationMasterBlock from "./components/InfotmationMasterBlock";

import Accessmenu from "./components/Accessmenu";

class App extends Component {
  render() {
    return [
      <div>
            <Header />
            <Switch key="router">
                <Route key="Main" path="/main" component={Main} />
                <Route key="Info" path="/info" component={Info} />
                <Route key="New" path="/new" component={New} />
                <Route key="Master" path="/master" component={Master} />
                <Route key="Map" path="/map" component={Map} />
                <Route key="Map" path="/map" component={Map} />
            </Switch>
            <Footer FooterImage={FooterImage} />
      </div>
    ];
  }
}

export default App;
