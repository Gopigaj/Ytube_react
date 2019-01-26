import React from "react";
import DisplayVideo from "./displayVideo";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showComponent: false
    };
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo() {
    this.setState({ showComponent: true });
    console.log("clicked");
  }
  render() {
    //console.log(this.props.resu);
    return (
      <div onClick={this.playVideo}>
        <img src={this.props.image} />
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
        {this.state.showComponent ? (
          <DisplayVideo link={this.props.link} i={this.props.i} />
        ) : null}
      </div>
    );
  }
}

export default Video;
