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
  Disney,
  CardWrap,
  Movies,
  MoviesLeft,
  MoviesRight,
  MovieChoice,
  SidePhotoThird,
  PlayWrap,
  ArrowWrap,
  ArrowRight,
  ArrowLeft,
  PlayBtn,
  Watch,
  WatchWrap,
  Digital,
  DigitalText,
  DigitalTxtWrap,
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
import SideImg3 from "../../../assets/layer2.png";
import Icon1 from "../../../assets/icon-tvset.png";
import Icon2 from "../../../assets/icon-movies.png";
import Icon3 from "../../../assets/icon-music.png";
import Icon4 from "../../../assets/icon-books.png";
import Icon5 from "../../../assets/icon-livetv.png";
import Movie1 from "../../../assets/movies-herbie.png";
import Movie2 from "../../../assets/movies-nemo.png";
import Movie3 from "../../../assets/movies-alice-wonderland.png";
import Movie4 from "../../../assets/movies-tangled.png";
import Movie5 from "../../../assets/movies-mermaid.png";
import Movie6 from "../../../assets/movies-up.png";
import Movie7 from "../../../assets/movies-lionking.png";
import Play from "../../../assets/play-button.png";
import IconDevices from "../../../assets/icon-devices.png";

// Components
import CallToAction from "../../../shared/components/CTA";
import BottomText from "../../../shared/components/CTA Bottom Text";
import Rectangle from "../../../shared/components/Rounded renctangle";
import Logo from "../../../shared/components/Logo";
import Service from "../../../shared/components/Services";
import Card from "../../../shared/components/Cards";
import Movie from "../../../shared/components/Cartoon";

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
          <Rectangle
            first
            style={{ position: "relative", top: "-70px", left: "100px" }}
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
            <Service
              bold="The biggest collection&nbsp;"
              text="of cartoons & movies"
            />
            <Service
              text="The exclusive home of&nbsp;"
              boldSecond="Disney kids TV box sets"
            />
            <Service
              text="Live TV from&nbsp;"
              boldSecond='Disney Channel, XD and Junior"'
            />
          </OfferCard>
          <OfferCard>
            <Service text="Unlimited&nbsp;" boldSecond="downloads" />
            <Service
              text="Access on&nbsp;"
              boldSecond="10 compatible devices"
            />
            <Service
              text="Watch on&nbsp;"
              boldSecond="TV, desktop, tablet and mobile"
            />
          </OfferCard>
          <OfferCard>
            <Service bold="10% discount&nbsp;" text=" at Disney Store" />
            <Service bold="No contract&nbsp;" text="subscription" />
            <Service text="Appropriate for&nbsp;" boldSecond="1+ of age" />
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
      <Disney>
        <RectangleWrap>
          <Rectangle
            style={{ marginRight: "20px", backgroundColor: "#5f94ff" }}
          />
          <Rectangle first style={{ backgroundColor: "#9dcb45" }} />
        </RectangleWrap>
        <HeadingWrap>
          <h2>Discover more Disney.</h2>
          <h5 className="h5-style">
            Blockbusters. Classics. Fairytales. Scary Tales. The best of Disney
            in one app.
          </h5>
        </HeadingWrap>
        <CardWrap>
          <Card iconUrl={Icon1} text="TV Sets" />
          <Card iconUrl={Icon2} text="Movies" />
          <Card iconUrl={Icon3} text="Music" />
          <Card iconUrl={Icon4} text="Books" />
          <Card iconUrl={Icon5} text="Live TV" />
        </CardWrap>
      </Disney>
      <Movies>
        <MoviesLeft>
          <PlayWrap>
            <ArrowWrap>
              <ArrowLeft />
              <ArrowRight />
            </ArrowWrap>
          </PlayWrap>
        </MoviesLeft>
        <a href="/">
          <PlayBtn src={Play} />
        </a>
        <MoviesRight />
        <MovieChoice>
          <Movie movieUrl={Movie1} />
          <Movie movieUrl={Movie2} />
          <Movie movieUrl={Movie3} />
          <Movie movieUrl={Movie4} />
          <Movie movieUrl={Movie5} />
          <Movie movieUrl={Movie6} />
          <Movie movieUrl={Movie7} />
        </MovieChoice>
        <SidePhotoThird src={SideImg3} />
      </Movies>
      <Watch>
        <WatchWrap>
          <Digital src={IconDevices} />
          <DigitalText>
            <DigitalTxtWrap>
              <h4>Watch on the GO.</h4>
              <Rectangle
                first
                style={{
                  backgroundColor: "#ff4b64",
                  marginLeft: "22px",
                  position: "relative",
                  top: "10px",
                }}
              />
            </DigitalTxtWrap>
            <h6>
              Available on all Apple, Android and Amazon devices. Enjoy on TV,
              desktop, tablet and mobile.
            </h6>
            <Rectangle style={{ backgroundColor: "#ffca2a" }} />
          </DigitalText>
        </WatchWrap>
        <CtaWrapper className="cta-wrap">
          <CallToAction
            text="Subscribe for free trial"
            style={{ marginBottom: "28px" }}
          />
          <BottomText text="Now only £4.99 per month." />
        </CtaWrapper>
      </Watch>
    </React.Fragment>
  );
};

export default Homepage;
