import React from "react";
import {
  DisneyCard,
  CardIcon,
  CardText,
  BoxLeft,
  BoxRight,
  BoxBottomLeft,
  BoxBottomRight,
} from "./style";

const Card = (props: any) => {
  const { text, iconUrl } = props;
  return (
    <React.Fragment>
      <DisneyCard>
        <BoxLeft className="box" />
        <BoxRight className="box" />
        <div>
          <CardIcon src={iconUrl} />
          <CardText>{text}</CardText>
        </div>
        <BoxBottomRight className="box" />
        <BoxBottomLeft className="box" />
      </DisneyCard>
    </React.Fragment>
  );
};

export default Card;
