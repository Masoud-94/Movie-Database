import React from "react";
import SearchCard from "./SearchCard";
import { Row } from "react-bootstrap";

const SearchContent = ({ Movies, isMovieListEmpty }) => {
  return (
    <div className="container-fluid">
      <Row>
        <h1 className="text-center">
          {isMovieListEmpty ? " Movie not found " : " "}
        </h1>
        {Movies.map((movie, index) => (
          <SearchCard Number={index} key={movie.imdbID} {...movie} />
        ))}
      </Row>
    </div>
  );
};

export default SearchContent;
