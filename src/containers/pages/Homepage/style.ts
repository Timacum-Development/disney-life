import styled from "styled-components";
import { color } from "../../../shared/styles";

import Device1 from "../../../assets/ipad3.png";
import Device2 from "../../../assets/iphone2.png";

export const Hero = styled.section`
  display: flex;
  position: relative;
  top: -150px;
`;

export const ShapeWrap = styled.div`
  width: 50%;
`;

export const BlueShape = styled.div`
  width: 100%;
  height: 740px;
  background-color: ${color.blue};
  clip-path: polygon(0 0, 80% 0, 100% 100%, 0 69%);
  position: absolute;
`;

export const YellowShape = styled.div`
  width: 100%;
  height: 481px;
  background-color: ${color.yellow};
  clip-path: polygon(0% 2%, 100% 50%, 100% 40%, 0% 100%);
  position: absolute;
  bottom: 0;
`;

export const RedShape = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  /* max-width: 1061px; */
  height: 981px;
  background-color: ${color.lightRed};
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 30% 90%);
`;

export const Devices = styled.div`
  position: relative;
  left: 200px;
  z-index: 20;
  top: 130px;
  transform: rotate(-10deg);
`;

export const Ipad = styled.div`
  width: 749px;
  height: 581px;
  background: url(${Device1}) no-repeat center;
  background-size: contain;
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5));
`;

export const Iphone = styled.div`
  width: 511px;
  height: 269px;
  background: url(${Device2}) no-repeat center;
  background-size: contain;
  position: absolute;
  right: -50px;
  bottom: -120px;
  transform: rotate(4deg);
  filter: drop-shadow(0px 0px 15px rgba(0, 0, 0, 0.5));
`;

export const IpadImg = styled.img`
  display: block;
  width: 582px;
  height: auto;
  position: relative;
  left: 84px;
  top: 77px;
`;

export const IphoneImg = styled.img`
  display: block;
  width: 382px;
  height: auto;
  position: relative;
  top: 26px;
  left: 65px;
`;

export const HeroIntro = styled.div`
  width: 45%;
  margin-left: 30px;
`;

export const SubscribeWrap = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 29px;
`;

export const HeadingWrap = styled.div`
  text-align: center;
  margin-bottom: 75px;
`;

export const Subscription = styled.section`
  position: relative;
`;

export const RectangleWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-bottom: 80px;
`;

export const LogoWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1281px;
  margin: 0 auto;
  position: relative;
`;

export const Slider = styled.div`
  width: 841px;
  height: 3px;
  background-color: ${color.grey};
  margin: 80px auto;
  position: relative;

  &:before {
    content: "";
    width: 141px;
    height: 11px;
    background-color: ${color.darkerGrey};
    position: absolute;
    border-radius: 16px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

export const Offer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0 auto;
  padding: 0 260px 0;
  margin-bottom: 81px;
`;

export const OfferCard = styled.div`
  width: 33.33%;
`;

export const SidePhoto = styled.img`
  display: block;
  position: absolute;
  right: 0;
  top: -60%;
`;

export const CtaWrapper = styled.div`
  text-align: center;
`;
