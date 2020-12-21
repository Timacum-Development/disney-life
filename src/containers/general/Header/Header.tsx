import React from "react";
import { HeaderWrapper, InsideWrap, Login } from "./style";
import Logo from "../../../shared/components/Logo";

import Link from "../../../shared/components/Page Link";
import CallToAction from "../../../shared/components/CTA";

// Assets
import LogIn from "../../../assets/login.png";

const Header = () => {
  return (
    <HeaderWrapper>
      <a href="/">
        <Logo headerlogo />
      </a>
      <InsideWrap>
        <Link text="Buy a Gift" style={{ marginRight: "48px" }} />
        <Link text="Radeem a Gift" style={{ marginRight: "48px" }} />
        <Login src={LogIn} />
        <CallToAction white text="Free Trial" />
      </InsideWrap>
    </HeaderWrapper>
  );
};

export default Header;
