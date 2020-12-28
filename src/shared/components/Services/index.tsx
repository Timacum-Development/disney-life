import React from "react";
import { WeOffer, MouseImg, ServiceText, BoldFirst, BoldSecond } from "./style";

import IconMouse from "../../../assets/micky-mouse.png";

const Service = (props: any) => {
  const { text, bold, boldSecond } = props;
  return (
    <WeOffer>
      <MouseImg src={IconMouse} />
      <div>
        <BoldFirst>{bold}</BoldFirst>
        <ServiceText>{text}</ServiceText>
        <BoldSecond>{boldSecond}</BoldSecond>
      </div>
    </WeOffer>
  );
};

export default Service;
