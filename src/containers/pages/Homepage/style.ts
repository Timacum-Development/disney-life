import styled from "styled-components";
import { color } from "../../../shared/styles";

import Device1 from "../../../assets/ipad3.png";
import Device2 from "../../../assets/iphone2.png";
import GingerGirl from "../../../assets/ginger-girl.png";

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
  right: 51px;
  top: -40%;
`;

export const CtaWrapper = styled.div`
  text-align: center;
  margin-bottom: 83px;
`;

export const Cartoon = styled.section`
  display: flex;
  position: relative;
`;

export const GreenShape = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 761px;
  height: 661px;
  background-color: ${color.green};
  clip-path: polygon(0% 0%, 85% 10%, 100% 90%, 0% 100%);
`;

export const GreenText = styled.div`
  max-width: 405px;
  margin-left: 27px;
`;

export const BoldTxt = styled.span`
  font-family: "Gotham", sans;
  font-weight: bold;
  color: ${color.white};
`;

export const WhiteText = styled.p`
  font-size: 0.875rem;
  font-family: "Gotham", sans;
  font-weight: 500;
  color: ${color.white};
  margin-bottom: 57px;
`;

export const CartoonBg = styled.div`
  width: 1112px;
  height: 664px;
  background: url(${GingerGirl}) no-repeat top;
  background-position: cover;
  background-size: center;
  clip-path: polygon(0% 20%, 100% 0%, 100% 100%, 0% 80%);
`;

export const SidePhotoSecond = styled.img`
  display: block;
  position: absolute;
  left: 136px;
  top: -200px;
  z-index: 50;
  filter: drop-shadow(0 5px 5px ${color.black});
`;
