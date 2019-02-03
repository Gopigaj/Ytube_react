import React from "react";
import YoutubeLogo from "./youtube-logo.png";
import "./search.css";
import "bootstrap/dist/css/bootstrap.css";

const pstyle = {
  backgroundCcolor: "yellow"
};

class Search extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      search: ""
    };

    this.getSearch = this.getSearch.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  getSearch(e) {
    this.setState({ search: e.target.value });
  }

  clicked(e) {
    this.props.onSearch(this.state.search);
    console.log("search " + this.state.search);
  }

  render() {
    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <a class="navbar-brand" href="#">
          <img src={YoutubeLogo} alt="logo" className="image-fluid" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon" />
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto" />
          <li class="form-inline my-2 my-lg-0">
            <input
              class="form-control mr-sm-2"
              type="search"
              placeholder="Search Term"
              aria-label="Search"
              onChange={this.getSearch}
            />
            <button
              class="btn btn-danger my-2 my-sm-0"
              type="submit"
              onClick={this.clicked}
            >
              <i class="fas fa-search" />
            </button>
          </li>
        </div>
      </nav>
    );
  }
}
export default Search;
