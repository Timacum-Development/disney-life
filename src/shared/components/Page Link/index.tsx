import React from "react";
import { HeaderLink, MainLink } from "./style";

const Link = (props: any) => {
  const { headerlink, text, style } = props;
  return (
    <React.Fragment>
      {headerlink ? (
        <HeaderLink style={style} href="/">
          {text}
        </HeaderLink>
      ) : (
        <MainLink style={style} href="/">
          {text}
        </MainLink>
      )}
    </React.Fragment>
  );
};

export default Link;
