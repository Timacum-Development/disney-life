import React from "react";
import {
  FooterWrap,
  FooterBlue,
  FooterRed,
  FooterYellow,
  SidePhotoLayer,
  FooterInfo,
  CopyRight,
} from "./style";

// Assets
import SideImg4 from "../../../assets/layer3.png";

import Link from "../../../shared/components/Page Link";
import Logo from "../../../shared/components/Logo";

const Footer = () => {
  return (
    <FooterWrap>
      <SidePhotoLayer src={SideImg4} />
      <FooterYellow></FooterYellow>
      <FooterRed></FooterRed>
      <FooterBlue />
      <FooterInfo>
        <ul>
          <li>
            <Link text="Disney" />
          </li>
          <li>
            <Link text="Pixar" />
          </li>
          <li>
            <Link text="About" />
          </li>
          <li>
            <Link text="Ways to watch" />
          </li>
          <li>
            <Link text="Media Enquiries" />
          </li>
          <li>
            <Link text="Terms of use" />
          </li>
          <li>
            <Link text="Privacy policy" />
          </li>
          <li>
            <Link text="Cookies Policy" />
          </li>
        </ul>
        <CopyRight>
          <a href="/">
            <Logo
              style={{
                marginBottom: "15px",
              }}
            />
          </a>
          <small>© 2017 Disney. All rights & copyrights reserved.</small>
        </CopyRight>
      </FooterInfo>
    </FooterWrap>
  );
};

export default Footer;
