import React from "react";
import Header from "../../../containers/general/Header/Header";
import { HeaderLogo, FooterLogo, ChannelLogo } from "./style";

//Assets
import Logo1 from "../../../assets/disney-logo.png";
import Logo2 from "../../../assets/logo-smaller.png";

const Logo = (props: any) => {
  const { headerlogo, channel, logoUrl } = props;
  return (
    <React.Fragment>
      {headerlogo ? (
        <HeaderLogo src={Logo1} />
      ) : !headerlogo && channel ? (
        <ChannelLogo src={logoUrl}></ChannelLogo>
      ) : (
        <FooterLogo src={Logo2} />
      )}
    </React.Fragment>
  );
};

export default Logo;
