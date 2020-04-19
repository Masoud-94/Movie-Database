import React from "react";
import { Link } from "react-router-dom";

import noPic from "./noPic.png";
import { Col } from "react-bootstrap";

const SearchCard = ({ Title, Poster, Number }) => {
  return (
    <Col sm={4} lg={3} xs={6} className="card-wrapper mb-5">
      <Link className="card__link" to={`/MovieDetails/${Title}`}>
        <h2 className="card__title pb-2">
          <b>{`#${Number + 1} `} </b> {Title}
        </h2>
        <img
          className="card__poster"
          src={Poster === "N/A" ? noPic : Poster}
          alt=""
        />
      </Link>
    </Col>
  );
};

export default SearchCard;
