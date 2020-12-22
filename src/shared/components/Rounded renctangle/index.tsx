import React from "react";
import { RectangleFirst, RectangleSecond } from "./style";

const Rectangle = (props: any) => {
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

export default Rectangle;
