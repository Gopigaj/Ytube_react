import React from "react";
import Video from "./video";
import ApiKey from "./config";

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
    //this.setState({ searchTerm: searchTerm });
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
        // this.setState({ thumbnailyt });
        console.log(this.state.resultyt);
        // console.log(this.state.thumbnailyt);
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

  displayVideo(newlink, newi) {
    this.props.onVideoSelect(newlink, newi);
  }
  render() {
    console.log("video " + this.props.searchTerm);
    return (
      <div>
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
