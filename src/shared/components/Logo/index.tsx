import React from "react";
import Header from "../../../containers/general/Header/Header";
import { HeaderLogo, FooterLogo } from "./style";

//Assets
import Logo1 from "../../../assets/disney-logo.png";
import Logo2 from "../../../assets/logo-smaller.png";

const Logo = (props: any) => {
  const { headerlogo } = props;
  return (
    <React.Fragment>
      {headerlogo ? <HeaderLogo src={Logo1} /> : <FooterLogo src={Logo2} />}
    </React.Fragment>
  );
};

export default Logo;
