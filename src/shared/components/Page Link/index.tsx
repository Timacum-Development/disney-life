import React from "react";
import { HeaderLink, MainLink } from "./style";

const Link = (props: any) => {
  const { headerlink, text, style } = props;
  return (
    <React.Fragment>
      {headerlink ? (
        <HeaderLink style={style}>{text}</HeaderLink>
      ) : (
        <MainLink style={style}>{text}</MainLink>
      )}
    </React.Fragment>
  );
};

export default Link;
