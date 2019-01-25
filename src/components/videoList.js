import React from "react";

const ApiKey = "AIzaSyARCbccCAeSsQWNb0DgBWnObEYanJPbBio";
const result = 10;

class VideoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: []
    };
  }

  componentWillReceiveProps() {
    //console.log("video list started");
    let finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&q=${
      this.props.searchTerm
    }&key=${ApiKey}`;
    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson);
        let resultyt = responseJson.items.map(
          obj => "https://www.youtube-nocookie.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
        console.log(this.state.resultyt);
      })
      .catch(error => {
        console.error(error);
      });
  }

  /*componentDidUpdate() {
    let finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&q=${
      this.props.searchTerm
    }&key=${ApiKey}`;
    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        //console.log(responseJson);
        let resultyt = responseJson.items.map(
          obj => "https://www.youtube-nocookie.com/embed/" + obj.id.videoId
        );
        this.setState({ resultyt });
        console.log(this.state.resultyt);
      })
      .catch(error => {
        console.error(error);
      });
  }
*/
  render() {
    console.log("video " + this.props.searchTerm);
    return (
      <div>
        <p>this {this.props.searchTerm}</p>
      </div>
    );
  }
}

export default VideoList;
