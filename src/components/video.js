import React from "react";
import DisplayVideo from "./displayVideo";

class Video extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      link: "",
      i: ""
    };
    this.playVideo = this.playVideo.bind(this);
  }

  playVideo() {
    this.props.onChange(this.props.link, this.props.index);
    console.log("clicked", this.props.link, this.props.index);
  }
  render() {
    //console.log(this.props.resu);
    return (
      <div onClick={this.playVideo}>
        <img src={this.props.image} />
        <p>{this.props.title}</p>
        <p>{this.props.description}</p>
      </div>
    );
  }
}

export default Video;
