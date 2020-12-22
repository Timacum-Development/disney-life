import React from "react";
import { WeOffer, MouseImg, ServiceText } from "./style";

import IconMouse from "../../../assets/icon-mouse.png";

const Service = (props: any) => {
  const { text } = props;
  return (
    <WeOffer>
      <MouseImg src={IconMouse} />
      <ServiceText>{text}</ServiceText>
    </WeOffer>
  );
};

export default Service;
