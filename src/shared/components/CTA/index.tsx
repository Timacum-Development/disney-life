import React from "react";
import { CtaWhite, CtaBlue, CtaGreen } from "./style";

const CallToAction = (props: any) => {
  const { white, bluecta, text } = props;
  return (
    <React.Fragment>
      {white ? (
        <CtaWhite>{text}</CtaWhite>
      ) : !white && bluecta ? (
        <CtaBlue>{text}</CtaBlue>
      ) : (
        <CtaGreen>{text}</CtaGreen>
      )}
    </React.Fragment>
  );
};

export default CallToAction;
