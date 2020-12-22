import React from "react";
import {
  Hero,
  ShapeWrap,
  BlueShape,
  YellowShape,
  RedShape,
  Devices,
  Ipad,
  Iphone,
  IpadImg,
  IphoneImg,
} from "./style";

//Assets
import Img1 from "../../../assets/ipad3inside.jpg";
import Img2 from "../../../assets/iphone2inside.jpg";

const Homepage = () => {
  return (
    <React.Fragment>
      <Hero>
        <ShapeWrap>
          <BlueShape></BlueShape>
          <YellowShape></YellowShape>
          <Devices>
            <Ipad>
              <IpadImg src={Img1} />
            </Ipad>
            <Iphone>
              <IphoneImg src={Img2} />
            </Iphone>
          </Devices>
        </ShapeWrap>
        <RedShape></RedShape>
      </Hero>
    </React.Fragment>
  );
};

export default Homepage;
