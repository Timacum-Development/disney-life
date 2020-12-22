import React from "react";
import { CtaWhite, CtaBlue, CtaGreen } from "./style";

const CallToAction = (props: any) => {
  const { white, bluecta, text, style } = props;
  return (
    <React.Fragment>
      {white ? (
        <CtaWhite className="cta" style={style}>
          {text}
        </CtaWhite>
      ) : !white && bluecta ? (
        <CtaBlue className="cta" style={style}>
          {text}
        </CtaBlue>
      ) : (
        <CtaGreen className="cta" style={style}>
          {text}
        </CtaGreen>
      )}
    </React.Fragment>
  );
};

export default CallToAction;
