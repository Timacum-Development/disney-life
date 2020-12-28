import React from "react";
import { CartoonMovie } from "./style";

const Movie = (props: any) => {
  const { movieUrl } = props;
  return (
    <a href="/">
      <CartoonMovie src={movieUrl} />
    </a>
  );
};

export default Movie;
