import React from "react";
// import CustomButton from "../utils/custom-buttom";
// import InputForm from "../form/InputForm";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Header = ({ onSubmit, handleChange, value, title }) => {
  return (
    <div className=" home-page__header text-light">
      <div className="container">
        <Link to="/">
          <h1 className="display-4 ">Welcome to Movie DataBase</h1>
        </Link>
        <div className="row">
          <div className="col-lg-6 m-auto">
            <div className="home-search p-2">
              <Form onSubmit={onSubmit}>
                <Row>
                  <Col sm={9} className="p-0">
                    <Form.Control
                      name="title"
                      value={value}
                      onChange={handleChange}
                      size="lg"
                      type="text"
                      placeholder="Search for movie,..."
                    />
                  </Col>
                  <Col sm={3} className="p-0">
                    <Button size="lg" variant="deadwhite" type="submit" block>
                      Search
                    </Button>
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </div>
        {/* <div className="sign-in">
          <form onSubmit={onSubmit}>
            <CustomButton type="submit">SEARCH</CustomButton>

            <InputForm
              name="title"
              type="text"
              label="Movie Title..."
              value={value}
              handleChange={handleChange}
              required
            />
          </form>
        </div> */}
        <h2 className="home-page__header--title home-page__header--title--2">
          {title}
        </h2>
        <p className="lead">
          Welcome to my test project. I used movie db API and combined with
          react and bootstrap technologies.
        </p>
      </div>
    </div>
  );
};

export default Header;
