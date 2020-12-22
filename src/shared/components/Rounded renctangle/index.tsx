import React from "react";
import { RectangleFirst, RectangleSecond } from "./style";

const LargerRectangle = (props: any) => {
  const { style, first } = props;
  return (
    <React.Fragment>
      {first ? (
        <RectangleFirst style={style} />
      ) : (
        <RectangleSecond style={style} />
      )}
    </React.Fragment>
  );
};

export default LargerRectangle;
