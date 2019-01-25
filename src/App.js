import React, { Component } from "react";
import Search from "./components/search";
import VideoList from "./components/videoList";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  handleSearch(newSearchTerm) {
    this.setState({ searchTerm: newSearchTerm });
    console.log("app " + this.state.searchTerm);
  }

  render() {
    return (
      <div className="App">
        <Search onSearch={this.handleSearch} />
        <p>hi{this.state.searchTerm}</p>
        <VideoList searchTerm={this.state.searchTerm} />
      </div>
    );
  }
}

export default App;
