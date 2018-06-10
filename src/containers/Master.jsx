import {Swith,Route} from "react-router-dom";
import React, { Component } from "react";
import styled from "styled-components";

import InformationMaster from "../components/InformationMaster";
import InfotmationMasterBlock from "../components/InfotmationMasterBlock";
import ReiterationText from "../components/ReiterationText";
import Paralax from "../components/Paralax";
import Image from "../assets/16.jpg";

import {SHORT_INFORMATION} from '../constants/InformationMaster';

class Master extends Component {
  render() {
    return (
      <div>
        <center><Paralax
          image={Image}
          title="Народные мастера деревни Хлуднево."
        >
        </Paralax></center>

        <ReiterationText/>

        <InfotmationMasterBlock main={        
        <InformationMaster
          src={SHORT_INFORMATION.InfirmationBubnewa.src}
          title={SHORT_INFORMATION.InfirmationBubnewa.title}
          text={SHORT_INFORMATION.InfirmationBubnewa.text}
        />
        }/>

<InfotmationMasterBlock main={        
        <InformationMaster
        src={SHORT_INFORMATION.InfirmationGorodicheva.src}
        title={SHORT_INFORMATION.InfirmationGorodicheva.title}
        text={SHORT_INFORMATION.InfirmationGorodicheva.text}
      />
        }/>

<InfotmationMasterBlock main={        
        <InformationMaster
        src={SHORT_INFORMATION.InfirmationTrifonova.src}
        title={SHORT_INFORMATION.InfirmationTrifonova.title}
        text={SHORT_INFORMATION.InfirmationTrifonova.text}
      />
        }/>

<InfotmationMasterBlock main={        
        <InformationMaster
        src={SHORT_INFORMATION.InfirmationSamoh.src}
        title={SHORT_INFORMATION.InfirmationSamoh.title}
        text={SHORT_INFORMATION.InfirmationSamoh.text}
      />
        }/>

<InfotmationMasterBlock main={        
        <InformationMaster
        src={SHORT_INFORMATION.InfirmationAhal.src}
        title={SHORT_INFORMATION.InfirmationAhal.title}
        text={SHORT_INFORMATION.InfirmationAhal.text}
      />
        }/>

<InfotmationMasterBlock main={        
        <InformationMaster
        src={SHORT_INFORMATION.InfirmationZab.src}
        title={SHORT_INFORMATION.InfirmationZab.title}
        text={SHORT_INFORMATION.InfirmationZab.text}
      />
        }/>

<InfotmationMasterBlock main={        
        <InformationMaster
        src={SHORT_INFORMATION.InfirmationRoh.src}
        title={SHORT_INFORMATION.InfirmationRoh.title}
        text={SHORT_INFORMATION.InfirmationRoh.text}
      />
        }/>

<InfotmationMasterBlock main={        
        <InformationMaster
        src={SHORT_INFORMATION.InfirmationUst.src}
        title={SHORT_INFORMATION.InfirmationUst.title}
        text={SHORT_INFORMATION.InfirmationUst.text}
      />
        }/>

<InfotmationMasterBlock main={        
        <InformationMaster
        src={SHORT_INFORMATION.InfirmationMan.src}
        title={SHORT_INFORMATION.InfirmationMan.title}
        text={SHORT_INFORMATION.InfirmationMan.text}
      />
        }/>
      </div>
    );
  }
}

export default Master;
