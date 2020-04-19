import React from "react";
import { Container } from "react-bootstrap";

const EmptyPlaceHolder = () => {
  return (
    <Container fluid>
      <div className="place-holder">
        <h1 className="place-holder__title">
          please enter your desired movie name.
        </h1>
        <p>
          Hi, I work as name TripleM. I am honored that you visit my website.
          this website is built by React library. please inform me if you have
          any suggestion.
        </p>
      </div>
    </Container>
  );
};

export default EmptyPlaceHolder;
