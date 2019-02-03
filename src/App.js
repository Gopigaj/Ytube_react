import React, { Component } from "react";
import Search from "./components/search";
import VideoList from "./components/videoList";
import "./App.css";
import DisplayVideo from "./components/displayVideo";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      searchTerm: "",
      l: "",
      i: "",
      title: "",
      description: ""
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.onVideoSelect = this.onVideoSelect.bind(this);
  }

  handleSearch(newSearchTerm) {
    this.setState({ searchTerm: newSearchTerm });
    console.log("app " + this.state.searchTerm);
  }

  onVideoSelect(l, i, title, description) {
    this.setState({ l: l, i: i, title: title, description: description });
    console.log("App comp", title);
  }

  render() {
    console.log("App comp render", this.state.title);
    return (
      <div className="App">
        <div>
          <Search onSearch={this.handleSearch} />
          <div className="jumbotron">
            <div className="row py-5">
              <div className="col-md-6">
                <DisplayVideo
                  link={this.state.l}
                  i={this.state.i}
                  title={this.state.title}
                  description={this.state.description}
                />
              </div>
              <div className="col-md-6">
                <VideoList
                  searchTerm={this.state.searchTerm}
                  onVideoSelect={this.onVideoSelect}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
