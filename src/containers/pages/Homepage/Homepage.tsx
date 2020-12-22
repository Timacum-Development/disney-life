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
  HeroIntro,
  SubscribeWrap,
  HeadingWrap,
} from "./style";

//Assets
import Img1 from "../../../assets/ipad3inside.jpg";
import Img2 from "../../../assets/iphone2inside.jpg";

// Components
import CallToAction from "../../../shared/components/CTA";
import BottomText from "../../../shared/components/CTA Bottom Text";
import LargerRectangle from "../../../shared/components/Rounded renctangle";

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
        <RedShape>
          <LargerRectangle
            first
            style={{ position: "relative", top: "-70px" }}
          />
          <HeroIntro>
            <h3>Unlimited Disney Magic.</h3>
            <h1>Cartoons & Movies</h1>
            <SubscribeWrap>
              <CallToAction
                style={{ marginRight: "29px" }}
                white
                text="Subscribe now"
              />
              <LargerRectangle />
            </SubscribeWrap>
            <BottomText text="Now only £4.99 per month." />
          </HeroIntro>
        </RedShape>
      </Hero>
    </React.Fragment>
  );
};

export default Homepage;
