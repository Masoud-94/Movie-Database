import React, { Component } from "react";
import Axios from "axios";
import Header from "./Header";
import EmptyPlaceHolder from "../utils/EmptyPlaceHolder";
import { Route } from "react-router-dom";
import DetailsContent from "../details-content";
import SearchContent from "../search-content/SearchContent";
import ScrollableAnchor from "react-scrollable-anchor";
import { configureAnchors } from "react-scrollable-anchor";
import { goToAnchor } from "react-scrollable-anchor";

configureAnchors({ offset: -10, scrollDuration: 900 });
class Home extends Component {
  state = {
    search: [],
    title: "",
    submitTitle: "",
    searchAddress: "http://www.omdbapi.com/?apikey=c370a540&s=",
    isMovieListEmpty: true,
  };
  handleSubmit = (e) => {
    if (e) {
      e.preventDefault();
    }

    this.componentDidMount(this.state.searchAddress);
    this.setState({ submitTitle: this.state.title });
    this.setState({ title: "" });
    this.props.history.push(`/searchResult/${this.state.title}`);
    goToAnchor("List_of_Movies");
  };

  handleChange = (e) => {
    const { value, name } = e.target;
    this.setState({ [name]: value });
  };

  handleUrl = async () => {
    let path = this.props.history.location.pathname;
    if (/searchresult/i.test(path)) {
      console.log(this.state.title);
      const response = await Axios.get(
        this.state.searchAddress + path.slice(14)
      );
      if (response.data.Response === "False") {
        console.log(response.data.Error);
        this.setState({ search: [], isMovieListEmpty: true });
      } else {
        this.setState({
          search: response.data.Search,
          isMovieListEmpty: false,
        });
      }
    }
  };
  async componentDidMount(address) {
    if (this.state.title !== "") {
      const response = await Axios.get(address + this.state.title);
      if (response.data.Response === "False") {
        console.log(response.data.Error);
        this.setState({ search: [], isMovieListEmpty: true });
      } else {
        this.setState({
          search: response.data.Search,
          isMovieListEmpty: false,
        });
      }
    } else {
      this.handleUrl();
    }
  }

  render() {
    return (
      <div className="home-page">
        <Header
          onSubmit={this.handleSubmit}
          value={this.state.title}
          title={this.state.submitTitle}
          handleChange={this.handleChange}
        />
        <Route exact path="/" component={EmptyPlaceHolder} />
        <ScrollableAnchor id={"List_of_Movies"}>
          <div>
            {this.state.search ? <h1> </h1> : ""}
            <Route
              exact
              path="/searchResult/:movieName"
              render={(props) => (
                <SearchContent
                  Movies={this.state.search}
                  isMovieListEmpty={this.state.isMovieListEmpty}
                />
              )}
            />
          </div>
        </ScrollableAnchor>
        <Route
          exact
          path="/MovieDetails/:movieName"
          component={DetailsContent}
        />
      </div>
    );
  }
}

export default Home;
