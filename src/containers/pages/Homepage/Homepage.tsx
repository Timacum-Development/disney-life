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
  Subscription,
  RectangleWrap,
  LogoWrap,
  Offer,
  OfferCard,
  Slider,
  SidePhoto,
  CtaWrapper,
  Cartoon,
  GreenShape,
  CartoonBg,
  GreenText,
  BoldTxt,
  WhiteText,
  SidePhotoSecond,
} from "./style";

//Assets
import Img1 from "../../../assets/ipad3inside.jpg";
import Img2 from "../../../assets/iphone2inside.jpg";
import Logo1 from "../../../assets/disney.png";
import Logo2 from "../../../assets/pixar.png";
import Logo3 from "../../../assets/disney-xd.png";
import Logo4 from "../../../assets/disney-channel.png";
import Logo5 from "../../../assets/disney-junior.png";
import SideImg from "../../../assets/side-photo1.png";
import SideImg2 from "../../../assets/layer-stitch.png";

// Components
import CallToAction from "../../../shared/components/CTA";
import BottomText from "../../../shared/components/CTA Bottom Text";
import Rectangle from "../../../shared/components/Rounded renctangle";
import Logo from "../../../shared/components/Logo";
import Service from "../../../shared/components/Services";

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
          <Rectangle first style={{ position: "relative", top: "-70px" }} />
          <HeroIntro>
            <h3>Unlimited Disney Magic.</h3>
            <h1>Cartoons & Movies</h1>
            <SubscribeWrap>
              <CallToAction
                style={{ marginRight: "29px" }}
                white
                text="Subscribe now"
              />
              <Rectangle />
            </SubscribeWrap>
            <BottomText text="Now only £4.99 per month." />
          </HeroIntro>
        </RedShape>
      </Hero>
      <Subscription>
        <RectangleWrap>
          <Rectangle
            style={{ marginRight: "20px", backgroundColor: "#ff4b64" }}
          />
          <Rectangle first style={{ backgroundColor: "#5f94ff" }} />
        </RectangleWrap>
        <HeadingWrap>
          <h2>One Subscription.</h2>
          <h5>
            A whole world of an amazing features and benefits for your family.
          </h5>
        </HeadingWrap>
        <LogoWrap>
          <a href="/">
            <Logo channel logoUrl={Logo1} />
          </a>
          <a href="/">
            <Logo channel logoUrl={Logo2} />
          </a>
          <a href="/">
            <Logo channel logoUrl={Logo3} />
          </a>
          <a href="/">
            <Logo channel logoUrl={Logo4} />
          </a>
          <a href="/">
            <Logo channel logoUrl={Logo5} />
          </a>
        </LogoWrap>
        <Slider />
        <Offer>
          <OfferCard>
            <Service text="The biggest collection of cartoons & movies" />
            <Service text="The exclusive home of Disney kids TV box sets" />
            <Service text="Live TV from Disney Channel, XD and Junior" />
          </OfferCard>
          <OfferCard>
            <Service text="Unlimited downloads" />
            <Service text="Access on 10 compatible devices" />
            <Service text="Watch on TV, desktop, tablet and mobile" />
          </OfferCard>
          <OfferCard>
            <Service text="10% discount at Disney Store" />
            <Service text="No contract subscription" />
            <Service text="Appropriate for 1+ of age" />
          </OfferCard>
        </Offer>
        <SidePhoto src={SideImg} />
        <CtaWrapper>
          <CallToAction
            bluecta
            text="Try it out for free"
            style={{ marginBottom: "28px" }}
          />
          <BottomText text="Now only £4.99 per month." />
        </CtaWrapper>
      </Subscription>
      <Cartoon>
        <SidePhotoSecond src={SideImg2} />
        <GreenShape>
          <Rectangle
            first
            style={{
              backgroundColor: "#ff4b64",
              position: "relative",
              top: "-100px",
            }}
          />
          <GreenText>
            <h2 className="green-heading">
              <BoldTxt>Be Brave.</BoldTxt> Don’t just take
              <BoldTxt> our word</BoldTxt> for it.
            </h2>
            <WhiteText>
              Unlimited Disney, what's not to love and enjoy!
            </WhiteText>
            <SubscribeWrap>
              <CallToAction
                white
                text="Free 7 days"
                style={{ marginRight: "29px", color: "#9dcb45" }}
              />
              <Rectangle style={{ backgroundColor: "#ffca2a" }} />
            </SubscribeWrap>
          </GreenText>
        </GreenShape>
        <CartoonBg />
      </Cartoon>
    </React.Fragment>
  );
};

export default Homepage;
