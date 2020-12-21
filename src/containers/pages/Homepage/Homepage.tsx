import React from "react";
import { Hero, ShapeWrap, BlueShape, YellowShape, RedShape } from "./style";

const Homepage = () => {
  return (
    <React.Fragment>
      <Hero>
        <ShapeWrap>
          <BlueShape></BlueShape>
          <YellowShape></YellowShape>
        </ShapeWrap>
        <RedShape></RedShape>
      </Hero>
    </React.Fragment>
  );
};

export default Homepage;
