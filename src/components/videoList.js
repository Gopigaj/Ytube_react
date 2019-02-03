import React from "react";
import Video from "./video";
import ApiKey from "./config";
import "./video.css";

const result = 10;

class VideoList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      resultyt: []
    };

    this.fetchData = this.fetchData.bind(this);
    this.displayVideo = this.displayVideo.bind(this);
  }

  fetchData(searchTerm) {
    let finalURL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=${result}&q=${searchTerm}&key=${ApiKey}`;
    fetch(finalURL)
      .then(response => response.json())
      .then(responseJson => {
        let resultyt = responseJson.items.map(obj => [
          "https://www.youtube-nocookie.com/embed/" + obj.id.videoId,
          obj.snippet.thumbnails.default.url,
          obj.snippet.title,
          obj.snippet.description
        ]);

        this.setState({ resultyt });
        console.log("0th vid url", this.state.resultyt[0]);
        this.displayVideo(
          this.state.resultyt[0][0],
          1,
          this.state.resultyt[0][2],
          this.state.resultyt[0][3]
        );
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

  displayVideo(newlink, newi, title, description) {
    this.props.onVideoSelect(newlink, newi, title, description);
    console.log("video list ttl", title);
  }
  render() {
    console.log("video " + this.props.searchTerm);
    return (
      <div className="vlist">
        {this.state.resultyt.map((link, i) => (
          <Video
            link={link[0]}
            image={link[1]}
            title={link[2]}
            description={link[3]}
            index={i}
            key={i}
            onChange={this.displayVideo}
          />
        ))}
      </div>
    );
  }
}

export default VideoList;
