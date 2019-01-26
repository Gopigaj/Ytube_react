import React, { Component } from "react";
import Search from "./components/search";
import VideoList from "./components/videoList";
import "./App.css";
import DisplayVideo from "./components/displayVideo";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      l: "",
      i: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
    //this.compstatus=this.compstatus.bind(this);
  }

  handleSearch(newSearchTerm) {
    this.setState({ searchTerm: newSearchTerm });
    console.log("app " + this.state.searchTerm);
  }

  onVideoSelect(l, i) {
    this.setState({ l: l, i: i });
  }

  render() {
    return (
      <div className="App">
        <Search onSearch={this.handleSearch} />
        {this.state.l != "" ? (
          <DisplayVideo link={this.state.l} i={this.state.i} />
        ) : null}
        <p>hi{this.state.searchTerm}</p>
        <VideoList
          searchTerm={this.state.searchTerm}
          onVideoSelect={this.onVideoSelect}
        />
      </div>
    );
  }
}

export default App;
