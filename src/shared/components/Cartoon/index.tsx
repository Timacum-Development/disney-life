import React from "react";
import { CartoonMovie } from "./style";

const Movie = (props: any) => {
  const { movieUrl } = props;
  return <CartoonMovie src={movieUrl} />;
};

export default Movie;
