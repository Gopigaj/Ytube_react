import React from "react";

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
      <div>
        <p>Youtube</p>
        <input placeholder="search term...." onChange={this.getSearch} />
        <button onClick={this.clicked}>Search</button>
      </div>
    );
  }
}
export default Search;
