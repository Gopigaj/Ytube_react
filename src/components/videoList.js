import React from "react";
import Video from "./video";

const ApiKey = "AIzaSyARCbccCAeSsQWNb0DgBWnObEYanJPbBio";
const result = 10;

class VideoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: []
    };

    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(searchTerm) {
    this.setState({ searchTerm: searchTerm });
    let finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&q=${searchTerm}&key=${ApiKey}`;
    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
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

  componentWillUpdate(nextProps) {
    if (this.props.searchTerm !== nextProps.searchTerm) {
      console.log(nextProps.searchTerm);
      this.fetchData(nextProps.searchTerm);
    }
  }

  render() {
    console.log("video " + this.props.searchTerm);
    return (
      <div>
        {this.state.resultyt.map((link, i) => (
          <Video link={link} key={i} />
        ))}
      </div>
    );
  }
}

export default VideoList;
