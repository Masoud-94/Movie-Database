import React, { Component } from "react";
import Axios from "axios";
import { Row, Col, Container } from "react-bootstrap";
class DetailsContent extends Component {
  state = {
    detailsAddress: "http://www.omdbapi.com/?apikey=c370a540&t=",
    Movie: {},
  };

  async componentDidMount() {
    const response = await Axios.get(
      this.state.detailsAddress + this.props.match.params.movieName
    );
    console.log(response.data);
    this.setState({ Movie: response.data });
  }
  render() {
    return (
      <Container>
        <h1 className="text-center">{this.state.Movie.Title}</h1>

        <Row className="content-details ">
          <Col md={4} className="content-details__image p-0 mb-4">
            <img
              className="rounded mx-auto d-block"
              src={this.state.Movie.Poster}
              alt=""
            />
          </Col>
          <Col md={8} className="content-details__info p-0">
            <table className="table table-striped content-details__table">
              <tbody>
                <tr>
                  <td>Year</td>
                  <td>{this.state.Movie.Year}</td>
                </tr>
                <tr>
                  <td>Rated</td>
                  <td>{this.state.Movie.Rated}</td>
                </tr>
                <tr>
                  <td>Released</td>
                  <td>{this.state.Movie.Released}</td>
                </tr>
                <tr>
                  <td>Runtime</td>
                  <td>{this.state.Movie.Runtime}</td>
                </tr>
                <tr>
                  <td>Genre</td>
                  <td>{this.state.Movie.Genre}</td>
                </tr>
                <tr>
                  <td>Director</td>
                  <td>{this.state.Movie.Director}</td>
                </tr>
                <tr>
                  <td>Writer</td>
                  <td>{this.state.Movie.Writer}</td>
                </tr>
                <tr>
                  <td>Actors</td>
                  <td>{this.state.Movie.Actors}</td>
                </tr>
                <tr>
                  <td>Language</td>
                  <td>{this.state.Movie.Language}</td>
                </tr>
                <tr>
                  <td>Country</td>
                  <td>{this.state.Movie.Country}</td>
                </tr>
                <tr>
                  <td>Awards</td>
                  <td>{this.state.Movie.Awards}</td>
                </tr>
                <tr>
                  <td>Metascore</td>
                  <td>{this.state.Movie.Metascore}</td>
                </tr>
                <tr>
                  <td>imdbRating</td>
                  <td>{this.state.Movie.imdbRating}</td>
                </tr>
                <tr>
                  <td>BoxOffice</td>
                  <td>{this.state.Movie.BoxOffice}</td>
                </tr>
                <tr>
                  <td>Production</td>
                  <td>{this.state.Movie.Production}</td>
                </tr>
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default DetailsContent;
